---
title: "Welcome to Dhox: a sublime theme"
description: "A sublime personal website with a blog, built with Astro."
pubDate: "Jan 17 2026"
tags: ["blog", "astro", "design"]
---

Welcome to **Dhox**, a delightful theme rich with smooth interactions.

## 🌟 Core Philosophy

We believe personal websites should feel *personal*. They shouldn't just display text; they should evoke a feeling. Dhox is built on three pillars:

1.  **Fluidity**: Animations should feel organic, not mechanical.
2.  **Focus**: Content is king. Distractions are minimized.
3.  **Delight**: Small details—like the dock bounce or the flip clock—bring joy.

---

## 🎨 Key Features

### 1. The Dock
A persistent, glassmorphic navigation hub that anchors the experience. It intelligently tracks your active route and provides quick access to key sections. On mobile, it adapts gracefully.

### 2. Meaningful Themes
Dhox comes with three distinct modes, toggled via the footer:
- **Light**: Crisp, clean, paper-like. Perfect for day reading.
- **Sepia**: Warm, low-contrast, easy on the eyes. Ideal for longform reading.
- **Dark**: Deep, immersive, OLED-friendly.

### 3. Integrated Search
Looking for something specific? Just hit `Cmd+K` (or tap the search icon in the dock) to instantly filter through all posts.

### 4. Dynamic Dock
A MacOS-style navigation hub that floats at the bottom. It scales smoothly on interaction and adapts its size for mobile devices.

### 5. Vertical Timeline
Tell your story chronologically. The custom `<Timeline />` component allows you to visualize your journey (see the [About page](/about) for a demo).

```astro
<Timeline
  entries={[
    { date: "2026", title: "Launch", content: "Dhox is born." }
  ]}
/>
```

### 6. Smart Typography
We use **Geist** (Sans) and **Monospace** for a modern, high-readability reading experience. The layout automatically adjusts line heights and spacing.

---

## 🛠️ Components for Writers

Dhox includes a suite of Markdown-ready components to enrich your writing:

### Callouts & Blockquotes
> "Design is not just what it looks like and feels like. Design is how it works."
> — Steve Jobs

### Code Blocks
Syntax highlighting is built-in, with a clean theme that adapts to dark mode.

### Table of Contents
Long posts automatically generate a sticky table of contents (like the one to the left) so readers never get lost.

---

## 🚀 Getting Started

Want to make this yours? It's simple.

1.  **Clone the repo**: `git clone https://github.com/yourusername/Dhox`
2.  **Install dependencies**: `npm install`
3.  **Start dev server**: `npm run dev`

Check out `src/consts.ts` to update your site title, description, and social links in one place.

Happy writing! ✍️
