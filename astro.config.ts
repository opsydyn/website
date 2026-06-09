import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://opsydyn.net',
  devToolbar: { enabled: false },
  integrations: [sitemap()],
  vite: {
    plugins: [vanillaExtractPlugin()],
  },
});
