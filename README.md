# Dhox - Sublime Personal Website Template

![Dhox Banner](/public/blog-placeholder-about.jpg)

**Dhox** is a sublime and playful website template with a blog, built with [Astro](https://astro.build). Designed for readability, fluidity, and storytelling.

## 🌟 Features

- **Apple-Style Design**: Glassmorphic dock, smooth scaling animations, and squaricle iconography.
- **Theme System**: Light, Dark, and Sepia modes with persistent state and seamless transitions.
- **Fluid Navigation**: ViewTransitions API integration for an app-like feel.
- **Vertical Timeline**: Custom component for visualizing your history or resume.
- **Markdown & MDX**: Write posts in Markdown or MDX with built-in syntax highlighting.
- **SEO Optimized**: Automatic sitemap, RSS feed, Open Graph tags, and semantic HTML.
- **Privacy Focused**: No external tracking scripts included by default.

## 🚀 Quick Start

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/Dhox
    cd Dhox
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

## 📂 Project Structure

```text
/
├── public/           # Static assets (fonts, icons)
├── src/
│   ├── components/   # Reusable UI components (Dock, Footer, Timeline)
│   ├── content/      # Markdown content (blog posts)
│   ├── layouts/      # Page templates (Base, BlogPost)
│   ├── pages/        # Route definitions
│   └── styles/       # Global CSS and tokens
└── astro.config.mjs  # Configuration
```

## 🛠️ Customization

### 1. Configuration
Open `src/consts.ts` to update global site settings:
```typescript
export const SITE_TITLE = "Your Name";
export const SITE_DESCRIPTION = "Your tagline here.";
```

### 2. Branding (Colors & Fonts)
Edit `src/styles/global.css` to modify CSS variables for colors, spacing, and typography.
- **Fonts**: We use *Atkinson Hyperlegible* by default.
- **Themes**: Adjust specific color tokens in the `:root`, `[data-theme="sepia"]`, and `[data-theme="dark"]` blocks.

### 3. Dock Icons
The dock icons are located in `src/components/Dock.astro`. They use CSS masks for crisp rendering. To change an icon:
1.  Add your SVG to `/public/`.
2.  Update the `dockItems` array in `Dock.astro` with the new path.

### 4. Blog Posts
Add new posts to `src/content/blog/`. The frontmatter requires:
```yaml
---
title: "My New Post"
description: "A short summary"
pubDate: "Jul 15 2024"
heroImage: "/blog-placeholder.jpg"
tags: ["tech", "life"]
---
```

## 📄 License
This project is open-source and available under the [MIT License](LICENSE).

## 🌍 Deployment & SEO

This template is optimized for easy deployment on **Vercel**, **Netlify**, or **Cloudflare Pages**.

1.  **Push to GitHub**.
2.  **Connect to Host** and import your repo.
3.  **Build it**: it will automatically detect `Astro` and run `npm run build`.

**SEO Check:**
- `robots.txt` and `sitemap-index.xml` are generated automatically.
- Submit your `/sitemap-index.xml` to [Google Search Console](https://search.google.com/search-console) after deployment to speed up indexing.

## 🙏 Credits

- Built with [Astro](https://astro.build)
- Icons by [Remix Icon](https://remixicon.com) or similar
- Font: [Atkinson Hyperlegible](https://brailleinstitute.org/freefont)
- Theme Toggle Design by [nhfiz](https://uiverse.io/nhfiz/old-lion-54) (Abu Shafiyya)