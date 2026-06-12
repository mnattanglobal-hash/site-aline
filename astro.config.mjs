import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import remarkWikilinks from './remark-wikilinks.mjs';

// Produção no domínio próprio alineantunes.com (GitHub Pages com custom domain).
// Com domínio próprio, o project site é servido na RAIZ → base '/'.
export default defineConfig({
  site: 'https://alineantunes.com',
  base: '/',
  integrations: [sitemap()],
  markdown: {
    remarkPlugins: [remarkWikilinks],
    shikiConfig: { theme: 'github-light', wrap: true },
  },
});
