# Site da Aline Antunes — estilo Everbe (publicado no GitHub Pages)

> Publicado em `https://mnattanglobal-hash.github.io/site-aline` via GitHub Pages.
> Inclui a **Revisão Parte 2** (10/06): paleta colorida, novos blocos da Home,
> acordeão de dúvidas, carrossel de frases, GIFs e fontes gratuitas.

## O que mudou
Redesign completo da identidade visual replicando o estilo do
[everbetherapy.com](https://everbetherapy.com/), **mantendo todo o conteúdo** da Aline:

- **Paleta colorida** (paleta nova da Aline, usada como fundo claro alternado por bloco):
  SandyBrown `#F4A460`, LightSalmon `#FFA07A`, IndianRed `#CD5C5C`, Sienna `#A0522D`,
  DarkOliveGreen3 `#A2CD5A`, Firebrick4 `#8B1A1A`, Wheat `#F5DEB3`.
- **Fontes gratuitas** (Google Fonts, produção-safe): **Fraunces** (títulos/labels),
  **Newsreader** (H2/prosa/citações), **Hanken Grotesk** (corpo/UI). As fontes comerciais
  da preview (Bradford, ABC Prophet, GT Alpina, Modern Era) foram **removidas**.
- **Movimento**: reveal no scroll, **faixa marquee**, GIFs (mãos/yin-yang, sol, bagua), hover suave.
- **Interação**: acordeão de dúvidas comuns e carrossel de frases ("a mesma dor, com outro rosto").
- Conteúdo dos artigos e das páginas intacto.

## Fontes (produção-safe)
Todas as fontes são gratuitas (Google Fonts), carregadas no `BaseLayout`. Não há mais
dependência de fontes comerciais — pode publicar sem questão de licenciamento.

## Rodar local
```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # gera ./dist
```

## Deploy
GitHub Pages via `.github/workflows/deploy.yml` (push na `main` → build Astro → Pages).

## Mais fotos da Aline
Ver [PROMPT-IMAGENS-CODEX.md](PROMPT-IMAGENS-CODEX.md).
