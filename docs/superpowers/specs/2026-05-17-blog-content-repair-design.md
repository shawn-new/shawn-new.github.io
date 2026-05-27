# Blog Content Repair Design

## Goal

Repair the blog so it builds, lints, and keeps articles as Markdown files that can also live cleanly in Obsidian.

## Design

The repository becomes the default source of truth for published articles through `content/articles/*.md`. Each file uses YAML frontmatter for metadata and keeps the existing bilingual Markdown convention with `**English:**` and `**中文：**` markers.

`scripts/sync-articles.js` reads Markdown files from `content/articles` by default, with `OBSIDIAN_ARTICLES_DIR` as an override for syncing from a local vault. It generates `src/data/articles.ts`, so the React app continues to consume typed data without runtime filesystem access.

The React app keeps the existing editorial layout, but navigation is adjusted to satisfy the React Hooks lint rules. Markdown locale filtering also normalizes escaped newline sequences from previous generated data so article rendering is clean.

## Verification

Verification requires `npm run sync`, `npm run lint`, `npm run build`, and the test suite. If the current local `node_modules` native Vite/Rolldown binding is broken, refresh dependencies with `npm install` before rerunning build and browser tests.
