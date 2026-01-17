// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import { SITE_URL } from './src/consts';

// https://astro.build/config
export default defineConfig({
	// Update this URL in src/consts.ts when deploying
	site: SITE_URL,
	integrations: [mdx(), sitemap()],
	build: {
		inlineStylesheets: 'always',
	},
});
