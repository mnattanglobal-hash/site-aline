import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import remarkWikilinks from './remark-wikilinks.mjs';

// Produção no domínio próprio alineantunes.com (GitHub Pages custom domain → base '/').
export default defineConfig({
  site: 'https://alineantunes.com',
  base: '/',
  // GitHub Pages roda Jekyll, que esconde pastas com "_" (ex.: _astro). Usar "assets"
  // (sem underscore) evita o problema de vez, além do .nojekyll em public/.
  build: { assets: 'assets' },
  integrations: [sitemap()],
  markdown: {
    remarkPlugins: [remarkWikilinks],
    shikiConfig: { theme: 'github-light', wrap: true },
  },
});
