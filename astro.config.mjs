import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://k9-academy-landing.vercel.app',
  adapter: vercel(),
  integrations: [sitemap()],
});
