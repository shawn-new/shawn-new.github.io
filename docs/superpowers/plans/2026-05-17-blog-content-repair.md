# Blog Content Repair Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Move article content into Obsidian-friendly Markdown files and repair the blog's lint, build, and tests.

**Architecture:** `content/articles/*.md` stores source content. `scripts/sync-articles.js` parses frontmatter and body content into `src/data/articles.ts`. The React app renders that generated data and keeps article navigation hash-based.

**Tech Stack:** React 19, TypeScript, Vite, Node.js, gray-matter, Playwright, Node test runner.

---

### Task 1: Add Content Sync Test

**Files:**
- Create: `tests/sync-articles.test.mjs`
- Modify: `package.json`

- [ ] Add a Node test that writes a temporary Markdown article, runs `scripts/sync-articles.js` with `ARTICLES_DIR` and `ARTICLES_TARGET_FILE`, and asserts generated TypeScript contains cleaned metadata and body content.
- [ ] Add `npm run test:unit` and `npm test` scripts.
- [ ] Run the unit test and confirm it fails before the script supports configurable paths.

### Task 2: Extract Articles

**Files:**
- Create: `content/articles/article1-engineeringbinary.md`
- Create: `content/articles/article2-saas-endgame.md`
- Create: `content/articles/article3-ai-native-moats.md`
- Modify: `scripts/sync-articles.js`
- Modify: `src/data/articles.ts`

- [ ] Extract the current generated article data into Markdown files with YAML frontmatter.
- [ ] Update the sync script to read all Markdown files from `content/articles` by default.
- [ ] Support `ARTICLES_DIR`, `OBSIDIAN_ARTICLES_DIR`, and `ARTICLES_TARGET_FILE` environment overrides.
- [ ] Normalize escaped `\n` sequences in generated bodies.
- [ ] Run `npm run sync` and confirm `src/data/articles.ts` is regenerated.

### Task 3: Fix App and Tests

**Files:**
- Modify: `src/App.tsx`
- Modify: `tests/blog.spec.ts`

- [ ] Replace direct `window.location.hash` mutation with History API navigation plus a local article selection helper.
- [ ] Keep browser back/forward and TOC anchor clicks working.
- [ ] Replace unsupported Playwright matcher with a supported count assertion.

### Task 4: Verify

**Files:**
- Modify dependency artifacts only if `npm install` is required to repair local native bindings.

- [ ] Run `npm run test:unit`.
- [ ] Run `npm run lint`.
- [ ] Run `npm run build`.
- [ ] Run Playwright tests if the dev server can start after dependency repair.
