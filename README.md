# The AI-Native Engineer's Journal

A modern, minimalist, bilingual (EN/ZH) blog featuring deep-dive insights on the future of software engineering, SaaS evolution, and strategic moats in the era of artificial intelligence.

## 📝 Featured Articles

1.  **The Engineering Binary**: The structural shift from Full-Stack to Product vs. Infrastructure engineering.
2.  **The SaaS Endgame**: Why seat-based billing is dead and why Usage-Based ROI is the only path forward.
3.  **The AI-Native Moat**: The trinity of Unique Data, Unique Insight, and Unique Workflows.

## 🚀 Tech Stack

- **Framework**: React 19 + TypeScript
- **Bundler**: Vite
- **Styling**: Vanilla CSS (Modern Minimalist & Bilingual-optimized)
- **Deployment**: GitHub Pages

## 🛠️ Getting Started

### Prerequisites
- Node.js 22.13.1 (`nvm use` reads the included `.nvmrc`)
- npm or pnpm

### Installation
```bash
npm install
```

### Local Development
```bash
npm run dev
```

### Article Workflow
Articles live in `content/articles/*.md` as Obsidian-friendly Markdown files with YAML frontmatter.

To regenerate the typed app data:
```bash
npm run sync
```

By default, the sync script reads from `content/articles`. To sync directly from an Obsidian vault folder:
```bash
OBSIDIAN_ARTICLES_DIR="/Users/xichaochen/Documents/Obsidian Vault/文章" npm run sync
```

### Checks
```bash
npm run lint
npm run build
npm test
```

For only the Selenium browser coverage:
```bash
npm run test:selenium
```

### Deployment to GitHub Pages
1. Ensure `vite.config.ts` has the correct `base` path (default: `/ai-native-blog/`).
2. Run the deployment script:
```bash
npm run deploy
```

## 🔒 Security & Privacy
This is a static-only SPA. It contains no server-side logic, secrets, or tracking. Content is pre-rendered for maximum performance and security.

---
*Built with logic and intent for the age of intelligence.*
