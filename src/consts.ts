// ==========================================
// SITE CONFIGURATION
// Centralized config for the entire website
// ==========================================

export const SITE_CONFIG = {
  // Basic Site Info
  title: "About Aleks' blog",
  description: "Aleks Vangjelofski's personal website and blog",
  url: "https://a160v.me", // TODO: Update with your deployed URL

  // Author Info
  author: {
    name: "Aleks",
    email: "aleks@a160v.me", // TODO: Update with your email
  },

  // Social Links
  social: {
    github: "https://github.com/a160v",
    linkedin: "https://linkedin.com/in/e-aleks/",
    // Add more as needed:
    // mastodon: "https://mastodon.social/@yourusername",
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
