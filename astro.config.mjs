import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import remarkWikilinks from './remark-wikilinks.mjs';

// VERSÃO DE PREVIEW (réplica do estilo Everbe) — hospedada no GitHub Pages,
// servida na raiz de um repositório <usuario>.github.io (base = '/').
export default defineConfig({
  site: 'https://mnattanglobal-hash.github.io',
  // Rota antiga /sessoes foi reorganizada em /atendimentos.
  redirects: {
    '/sessoes': '/atendimentos/taro-terapeutico',
  },
  integrations: [sitemap()],
  markdown: {
    remarkPlugins: [remarkWikilinks],
    shikiConfig: { theme: 'github-light', wrap: true },
  },
});
