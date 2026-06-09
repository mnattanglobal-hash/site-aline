# Site da Aline Antunes — VERSÃO DE PREVIEW (réplica do estilo Everbe)

> ⚠️ **Esta é uma versão de avaliação para a cliente, separada da produção.**
> A produção atual (`alineantunes.site`) **não foi alterada** — este é um repositório à parte.

## O que mudou
Redesign completo da identidade visual replicando o estilo do
[everbetherapy.com](https://everbetherapy.com/), **mantendo todo o conteúdo** da Aline:

- **Cores reais** da referência: creme `#F4EEE8`, marrom-oliva `#6D6236`, pêssego `#F0CFA5`,
  blush `#ECBFB9`, rosa-poeira `#D19CA3`, verde-sálvia.
- **Fontes reais** da referência (auto-hospedadas em `public/fonts/`): Bradford (títulos),
  ABC Prophet (H2 lowercase), GT Alpina (corpo/citações), Modern Era (UI/nav), Bradford Black (labels).
- **Movimento**: reveal no scroll, **selo circular girando**, **faixa marquee**, hover suave.
- Conteúdo dos artigos e das páginas intacto.

## ⚠️ Licenciamento de fontes (ler antes de ir para produção)
As fontes Bradford, ABC Prophet, GT Alpina e Modern Era são **comerciais**. Foram auto-hospedadas
**apenas para esta preview de aprovação**. Antes de publicar em produção é preciso **licenciá-las**
ou **trocar pelos equivalentes gratuitos** (mapa pronto: Bradford→Fraunces, ABC Prophet→Newsreader,
Modern Era→Hanken Grotesk, GT Alpina→Fraunces itálico).

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
