#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";

const scanAll = process.argv.includes("--all");

const textExtensions = new Set([
  ".bash",
  ".cjs",
  ".conf",
  ".config",
  ".css",
  ".csv",
  ".env",
  ".html",
  ".ini",
  ".js",
  ".json",
  ".jsx",
  ".md",
  ".mjs",
  ".scss",
  ".sh",
  ".sql",
  ".toml",
  ".ts",
  ".tsx",
  ".txt",
  ".xml",
  ".yaml",
  ".yml",
  ".zsh",
]);

const ignoredPathPatterns = [
  /(^|\/)\.git\//,
  /(^|\/)\.vite\//,
  /(^|\/)coverage\//,
  /(^|\/)dist\//,
  /(^|\/)node_modules\//,
  /(^|\/)build\//,
  /(^|\/)\.codex-notes\//,
];

const exactIgnoredFiles = new Set(["package-lock.json"]);

const explicitSecretScanners = [
  {
    id: "private-key",
    severity: "high",
    pattern: /-----BEGIN [A-Z ]*PRIVATE KEY-----/,
    message: "Private key material should not be committed.",
  },
  {
    id: "aws-access-key",
    severity: "high",
    pattern: /\b(?:AKIA|ASIA)[0-9A-Z]{16}\b/,
    message: "Looks like an AWS access key id.",
  },
  {
    id: "github-token",
    severity: "high",
    pattern: /\b(?:ghp|gho|ghu|ghs|ghr)_[A-Za-z0-9_]{30,}\b/,
    message: "Looks like a GitHub token.",
  },
  {
    id: "openai-key",
    severity: "high",
    pattern: /\bsk-(?:proj-)?[A-Za-z0-9_-]{20,}\b/,
    message: "Looks like an OpenAI API key.",
  },
  {
    id: "google-api-key",
    severity: "high",
    pattern: /\bAIza[0-9A-Za-z_-]{35}\b/,
    message: "Looks like a Google API key.",
  },
  {
    id: "slack-token",
    severity: "high",
    pattern: /\bxox[baprs]-[A-Za-z0-9-]{20,}\b/,
    message: "Looks like a Slack token.",
  },
  {
    id: "jwt",
    severity: "medium",
    pattern: /\beyJ[A-Za-z0-9_-]{10,}\.[A-Za-z0-9_-]{10,}\.[A-Za-z0-9_-]{10,}\b/,
    message: "Looks like a hardcoded JWT.",
  },
];

const hardcodedPathScanners = [
  {
    id: "macos-home-path",
    severity: "medium",
    pattern: /(^|["'`\s(])\/Users\/[A-Za-z0-9._-]+\/[^\s"'`)]+/,
    message: "Hardcoded macOS user path detected; prefer repo-relative paths or environment variables.",
  },
  {
    id: "linux-home-path",
    severity: "medium",
    pattern: /(^|["'`\s(])\/home\/[A-Za-z0-9._-]+\/[^\s"'`)]+/,
    message: "Hardcoded Linux user path detected; prefer repo-relative paths or environment variables.",
  },
  {
    id: "windows-user-path",
    severity: "medium",
    pattern: /[A-Za-z]:\\Users\\[A-Za-z0-9._-]+\\[^\s"'`)]+/,
    message: "Hardcoded Windows user path detected; prefer repo-relative paths or environment variables.",
  },
  {
    id: "temp-system-path",
    severity: "low",
    pattern: /(^|["'`\s(])\/(?:private\/)?var\/folders\/[^\s"'`)]+/,
    message: "Hardcoded temporary system path detected; prefer a temp-dir API.",
  },
];

const secretAssignmentPattern =
  /(?:^|[{\s,;])(?:(?:const|let|var)\s+)?["'`]?[A-Za-z0-9_.-]*(?:api[_-]?key|access[_-]?key|auth[_-]?token|bearer|client[_-]?secret|password|passwd|private[_-]?key|secret(?:[_-]?key)?|token)[A-Za-z0-9_.-]*["'`]?\s*[:=]\s*(["'`]?)([^"'`\s#;,]{8,})\1/i;

const safeSecretValuePatterns = [
  /^(?:process\.env|import\.meta\.env|Deno\.env|env\.|getenv\()/,
  /^\$\{?[A-Z0-9_]+\}?$/,
  /^(?:change-?me|dummy|example|fake|placeholder|redacted|replace-?me|sample|test|todo|your[_-]?\w+)$/i,
  /^<[^>]+>$/,
  /^[xX*_-]{8,}$/,
];

function git(args) {
  const result = spawnSync("git", args, { encoding: "utf8" });
  if (result.error) {
    throw result.error;
  }
  if (result.status !== 0) {
    throw new Error(result.stderr || `git ${args.join(" ")} failed`);
  }
  return result.stdout;
}

function isReviewablePath(filePath) {
  if (!filePath || exactIgnoredFiles.has(filePath)) {
    return false;
  }
  if (ignoredPathPatterns.some((pattern) => pattern.test(filePath))) {
    return false;
  }
  const baseName = path.basename(filePath);
  if (baseName.startsWith(".env")) {
    return true;
  }
  return textExtensions.has(path.extname(filePath));
}

function stagedFiles() {
  return git(["diff", "--cached", "--name-only", "--diff-filter=ACMR", "-z"])
    .split("\0")
    .filter(isReviewablePath);
}

function trackedFiles() {
  return git(["ls-files", "-z"]).split("\0").filter(isReviewablePath);
}

function isSafeSecretValue(value) {
  return safeSecretValuePatterns.some((pattern) => pattern.test(value));
}

function checkLine(filePath, lineNumber, line) {
  const findings = [];

  for (const scanner of [...explicitSecretScanners, ...hardcodedPathScanners]) {
    if (scanner.pattern.test(line)) {
      findings.push({ ...scanner, filePath, lineNumber, line });
    }
  }

  const sensitiveMatch = line.match(secretAssignmentPattern);
  const value = sensitiveMatch?.[2];
  if (value && !isSafeSecretValue(value)) {
    findings.push({
      id: "generic-secret-assignment",
      severity: "medium",
      message: "Suspicious secret-like assignment; use environment variables or a secrets manager.",
      filePath,
      lineNumber,
      line,
    });
  }

  return findings;
}

function scanFullFiles(files) {
  const findings = [];
  for (const filePath of files) {
    const content = fs.readFileSync(filePath, "utf8");
    content.split(/\r?\n/).forEach((line, index) => {
      findings.push(...checkLine(filePath, index + 1, line));
    });
  }
  return findings;
}

function scanStagedAdditions(files) {
  if (files.length === 0) {
    return [];
  }

  const diff = git(["diff", "--cached", "--unified=0", "--no-ext-diff", "--no-color", "--", ...files]);
  const findings = [];
  let currentFile = null;
  let nextNewLine = null;

  for (const diffLine of diff.split(/\r?\n/)) {
    if (diffLine.startsWith("+++ b/")) {
      currentFile = diffLine.slice("+++ b/".length);
      continue;
    }

    const hunk = diffLine.match(/^@@ -\d+(?:,\d+)? \+(\d+)(?:,\d+)? @@/);
    if (hunk) {
      nextNewLine = Number(hunk[1]);
      continue;
    }

    if (!currentFile || nextNewLine === null) {
      continue;
    }

    if (diffLine.startsWith("+") && !diffLine.startsWith("+++")) {
      findings.push(...checkLine(currentFile, nextNewLine, diffLine.slice(1)));
      nextNewLine += 1;
    } else if (diffLine.startsWith(" ")) {
      nextNewLine += 1;
    }
  }

  return findings;
}

function printFindings(findings) {
  console.error("\nSecurity pre-commit review blocked this commit.\n");
  for (const finding of findings) {
    console.error(`[${finding.severity}] ${finding.filePath}:${finding.lineNumber} ${finding.id}`);
    console.error(`  ${finding.message}`);
    console.error(`  ${finding.line.trim().slice(0, 160)}\n`);
  }
  console.error("Fix the flagged values, move secrets to environment variables, or rewrite hardcoded paths.");
  console.error("If this is a false positive, adjust scripts/security-review-precommit.mjs deliberately.");
}

try {
  const files = scanAll ? trackedFiles() : stagedFiles();
  const findings = scanAll ? scanFullFiles(files) : scanStagedAdditions(files);

  if (findings.length > 0) {
    printFindings(findings);
    process.exit(1);
  }

  console.log(`Security review passed (${files.length} file${files.length === 1 ? "" : "s"} checked).`);
} catch (error) {
  console.error(`Security review hook failed: ${error.message}`);
  process.exit(1);
}
