import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import remarkWikilinks from './remark-wikilinks.mjs';

// Preview no GitHub Pages, servida em /site-aline (base = '/site-aline').
export default defineConfig({
  site: 'https://mnattanglobal-hash.github.io',
  base: '/site-aline',
  integrations: [sitemap()],
  markdown: {
    remarkPlugins: [remarkWikilinks],
    shikiConfig: { theme: 'github-light', wrap: true },
  },
});
