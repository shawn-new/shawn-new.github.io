import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { mkdtempSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { test } from 'node:test';
import { tmpdir } from 'node:os';

test('sync script generates article data from a configurable markdown directory', () => {
  const tempRoot = mkdtempSync(join(tmpdir(), 'ai-native-blog-sync-'));
  const sourceDir = join(tempRoot, 'articles');
  const targetFile = join(tempRoot, 'articles.ts');

  execFileSync('mkdir', ['-p', sourceDir]);
  writeFileSync(
    join(sourceDir, 'sample-article.md'),
    `---
id: sample-article
titleEn: Sample English Title
titleZh: 示例中文标题
category: Commentary
date: 2026-05-17
author: Sean
keywords:
  - Test
  - Sync
history:
  - 2026-05-17: Initial import
---

# Sample English Title
# 示例中文标题

**English:**

Line one.\\n\\nLine two.

**中文：**

第一行。\\n\\n第二行。
`,
  );

  execFileSync('node', ['scripts/sync-articles.js'], {
    cwd: process.cwd(),
    env: {
      ...process.env,
      ARTICLES_DIR: sourceDir,
      ARTICLES_TARGET_FILE: targetFile,
    },
    stdio: 'pipe',
  });

  const generated = readFileSync(targetFile, 'utf8');
  assert.match(generated, /"id": "sample-article"/);
  assert.match(generated, /"category": "Commentary"/);
  assert.match(generated, /"history": \[\s+"2026-05-17: Initial import"\s+\]/);
  assert.ok(generated.includes('Line one.\\n\\nLine two'));
  assert.ok(!generated.includes('Line one.\\\\n\\\\nLine two'));
});
