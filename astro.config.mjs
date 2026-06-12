import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import remarkWikilinks from './remark-wikilinks.mjs';

// Produção no domínio próprio alineantunes.com (GitHub Pages custom domain → base '/').
export default defineConfig({
  site: 'https://alineantunes.com',
  base: '/',
  integrations: [sitemap()],
  markdown: {
    remarkPlugins: [remarkWikilinks],
    shikiConfig: { theme: 'github-light', wrap: true },
  },
});
