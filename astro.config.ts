import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

const isPagesCI = process.env.GITHUB_ACTIONS === 'true';

export default defineConfig({
  site: isPagesCI ? 'https://opsydyn.github.io' : undefined,
  base: isPagesCI ? '/website' : undefined,
  devToolbar: { enabled: false },
  integrations: [sitemap()],
  vite: {
    plugins: [vanillaExtractPlugin()],
  },
});
