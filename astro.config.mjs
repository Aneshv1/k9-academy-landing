import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://training.k9academy.ca',
  adapter: vercel(),
  integrations: [sitemap()],
});
