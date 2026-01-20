# Dhox - Sublime Personal Website Template

**Dhox** is a sublime and playful website template with a blog, built with [Astro](https://astro.build). Designed for beauty, readability, fluidity, and storytelling.

## 🌟 Features

- **Sublime Design**: Glassmorphic dock, smooth scaling animations, and squaricle iconography.
- **Theme System**: Light, Dark, and Sepia modes with persistent state and seamless transitions.
- **Fluid Navigation**: ViewTransitions API integration for an app-like feel.
- **Vertical Timeline**: Custom component for visualizing your history or resume.
- **Markdown & MDX**: Write posts in Markdown or MDX with built-in syntax highlighting.
- **SEO Optimized**: Automatic sitemap, RSS feed, Open Graph tags, and semantic HTML.
- **Responsive Components**: Mobile-optimized Footer, Dock, and Search layouts.
- **Improved Typography**: Clean Geist and Monospace font stack.
- **Search**: Built-in search modal with keyboard shortcuts (with Fuse.js).
- **Post Copyright**: Beautiful share component with copy link tooltip, LinkedIn, and Bluesky sharing.
- **Email Obfuscation**: Anti-scraping protection using Base64 encoding - decoded only on click.

## 🚀 Quick Start

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/dhox
    cd dhox
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Start development server**:
    ```bash
    npm run dev
    ```

4.  **Build for production**:
    ```bash
    npm run build
    ```

## ⚙️ Personalization

After cloning, update these files with your information:

| File | What to update |
|------|----------------|
| `src/consts.ts` | Site title, name, email, social links |
| `src/pages/about.astro` | Your timeline, skills, languages |
| `src/components/Footer.astro` | Footer copyright text |
| `src/content/blog/*.md` | Your blog posts |

> **Tip**: Search for `TODO:` comments throughout the codebase to find all placeholder content.

## 📂 Project Structure

```text
/
├── public/           # Static assets (fonts, icons)
├── src/
│   ├── components/   # Reusable UI components (Dock, Footer, Timeline, PostCopyright)
│   ├── content/      # Markdown content (blog posts)
│   ├── layouts/      # Page templates (Base, BlogPost)
│   ├── pages/        # Route definitions
│   ├── styles/       # Global CSS and tokens
│   └── utils/        # Shared utilities (email obfuscation)
└── astro.config.mjs  # Configuration
```

## 🛠️ Customization

### Colors & Fonts
Edit `src/styles/global.css` to modify CSS variables for colors, spacing, and typography.
- **Fonts**: We use *Geist* and *Monospace*.
- **Themes**: Adjust color tokens in `:root`, `[data-theme="sepia"]`, and `[data-theme="dark"]`.

### Dock Icons
The dock icons are in `src/components/Dock.astro`. They use CSS masks for crisp rendering. To change an icon:
1.  Add your SVG to `/public/`.
2.  Update the `dockItems` array in `Dock.astro` with the new path.

### Blog Posts
Add new posts to `src/content/blog/`. The frontmatter requires:
```yaml
---
title: "My New Post"
description: "A short summary"
pubDate: "Jul 15 2024"
tags: ["tech", "life"]
author: "Your Name"
---
```

## 🌍 Deployment

This template is optimized for **Cloudflare Pages**, **Vercel**, or **Netlify**.

1.  Push to GitHub.
2.  Connect to your hosting platform.
3.  It will auto-detect Astro and run `npm run build`.

**SEO Note**: Submit your `/sitemap-index.xml` to [Google Search Console](https://search.google.com/search-console) after deployment.

## 📄 License

This project is open-source and available under the European Union Public Licence (EUPL) v1.2.

## 🙏 Credits

- Built with [Astro](https://astro.build)
- Icons by [Remix Icon](https://remixicon.com/)
- Font: [Geist](https://vercel.com/font)
- Search: [Fuse.js](https://fusejs.io)
- Copyright component inspired by [Astro Pure](https://astro-pure.js.org/search)