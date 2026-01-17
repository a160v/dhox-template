---
title: "Welcome to Dhox: A Sublime Astro Theme"
description: "A minimal, Apple-inspired personal website theme for Astro. Designed for storytelling, built for performance."
pubDate: "Jul 08 2024"
heroImage: "../../assets/blog-placeholder-about.jpg"
tags: ["blog", "astro", "design"]
---

Welcome to **Dhox**. This isn't just another blog theme; it's a digital sanctuary designed to let your stories breathe. Inspired by the fluidity of Apple's design language, Dhox combines minimalism with delightful interactions.

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

### 3. Vertical Timeline
Tell your story chronologically. The custom `<Timeline />` component allows you to visualize your journey (see the [About page](/about) for a demo).

```astro
<Timeline
  entries={[
    { date: "2024", title: "Launch", content: "Dhox is born." }
  ]}
/>
```

### 4. Smart Typography
We use **Atkinson Hyperlegible** as the primary typeface—designed for maximum readability. The layout automatically adjusts line heights and spacing for an optimal reading experience.

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


