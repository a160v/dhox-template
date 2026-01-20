// ==========================================
// SITE CONFIGURATION
// Centralized config for the entire website
// ==========================================

export const SITE_CONFIG = {
  // Basic Site Info
  title: "Your Name", // TODO: Update with your name
  description: "Personal website and blog", // TODO: Update with your tagline
  url: "https://example.com", // TODO: Update with your deployed URL

  // Author Info
  author: {
    name: "Your Name", // TODO: Update with your name
    email: "hello@example.com", // TODO: Update with your email
  },

  // Social Links
  social: {
    github: "https://github.com/yourusername", // TODO: Update with your GitHub
    linkedin: "https://linkedin.com/in/yourusername", // TODO: Update with your LinkedIn
    // Add more as needed:
    // mastodon: "https://mastodon.social/@yourusername",
    // twitter: "https://twitter.com/yourusername",
  },

  // Navigation
  nav: {},
};

// Legacy exports for backwards compatibility
export const SITE_TITLE = SITE_CONFIG.title;
export const SITE_DESCRIPTION = SITE_CONFIG.description;
export const SITE_URL = SITE_CONFIG.url;
export const AUTHOR_NAME = SITE_CONFIG.author.name;
export const AUTHOR_EMAIL = SITE_CONFIG.author.email;
export const SOCIAL_LINKS = SITE_CONFIG.social;
