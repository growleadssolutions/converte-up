// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { SITE_URL } from './src/config/site.js';

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  redirects: {
    '/blog/como-aparecer-no-google/': {
      status: 301,
      destination: '/blog/seo/como-aparecer-no-google/',
    },
  },
  integrations: [
    sitemap({
      filter: (page) => !/\/(?:404|robots\.txt|llms\.txt)\/?$/.test(page),
    }),
  ],
});
