import { defineCollection, z } from 'astro:content';

// Os 6 pilares editoriais + a série de Arcanos (Jornada do Louco).
export const PILARES = [
  'Maturidade e Autonomia Emocional',
  'Padrões Repetitivos e Relacionamentos',
  'Identidade e Individuação',
  'Cura de Padrões do Feminino',
  'Espiritualidade Prática e Símbolo',
  'Crenças e Condicionamentos',
  'Arcanos',
] as const;

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    titulo: z.string(),
    description: z.string(),
    hook: z.string(),
    pilar: z.enum(PILARES),
    // Preenchido nos artigos da série de Arcanos; vazio nos demais.
    arcano: z.string().optional(),
    // Posição na Jornada do Louco (0–21) para ordenar a série.
    numeroArcano: z.number().optional(),
    tags: z.array(z.string()).default([]),
    date: z.coerce.date(),
    // Slugs (nome do arquivo sem .md) de artigos relacionados — cross-links.
    relacionados: z.array(z.string()).default([]),
    // Perguntas frequentes (SEO / People-Also-Ask). Renderizadas no fim do artigo + FAQPage schema.
    faq: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };

// ---- Metadados dos pilares (navegação e índices derivados) ----
// slug: usado em /blog/pilar/<slug>. desc: subtítulo curto (cards/home).
// intro: abertura editorial da página do pilar, na voz da Aline.
export const PILAR_META = {
  'Maturidade e Autonomia Emocional': {
    slug: 'maturidade-e-autonomia-emocional',
    desc: 'Aprender a sentir de novo, ordenar o emocional, transmutar a dor em recurso.',
    intro:
      'Maturar não é deixar de sentir. É aprender a sentir sem ser governada pelo que se sente. Aqui ficam os textos sobre sair da reação e entrar na direção, e sobre a tese que sustenta o resto: transmutar a dor em recurso.',
    img: 'aa-pilar-maturidade',
    alt: 'Mãos em concha segurando uma chama de luz dourada, sobre um manto vermelho',
  },
  'Padrões Repetitivos e Relacionamentos': {
    slug: 'padroes-repetitivos-e-relacionamentos',
    desc: 'Por que a mesma dor volta com outro rosto, e como sair do ciclo.',
    intro:
      'A mesma relação, com outro nome. A mesma dor, com outro rosto. O padrão não é azar nem destino: é uma dinâmica interna que se repete até ser nomeada. Estes textos olham o ciclo de frente.',
    img: 'aa-pilar-padroes',
    alt: 'Jardim em terraços com várias pessoas lendo e conversando, um labirinto desenhado no piso e uma cidade à beira d\'água ao fundo',
  },
  'Identidade e Individuação': {
    slug: 'identidade-e-individuacao',
    desc: 'Quem você é além dos papéis que assume para pertencer.',
    intro:
      'Quem você é quando ninguém pede nada? Individuar é separar o que é seu do que você herdou ou vestiu para caber. Textos sobre identidade, papéis e o trabalho de se tornar inteira.',
    img: 'aa-pilar-identidade',
    alt: 'Colagem simbólica: perfil de mulher em tons dourados, com flores no cabelo, pássaros e cartas manuscritas',
  },
  'Cura de Padrões do Feminino': {
    slug: 'cura-de-padroes-do-feminino',
    desc: 'Os padrões que você herdou e jurou nunca repetir.',
    intro:
      'O que se herda do feminino não vem só em palavras: vem em gesto, em silêncio, em renúncia. Honrar a história sem se aprisionar a ela é o trabalho. Aqui estão os textos sobre essa travessia.',
    img: 'aa-pilar-feminino',
    alt: 'Mulher de vestes verdes vertendo água luminosa dourada de uma taça para uma tigela',
  },
  'Espiritualidade Prática e Símbolo': {
    slug: 'espiritualidade-pratica-e-simbolo',
    desc: 'Profundidade sem misticismo raso. O símbolo que vira gesto.',
    intro:
      'Símbolo que não vira gesto fica no etéreo. Aqui a espiritualidade é prática: o Tarô como espelho, o arquétipo aterrissado na vida concreta, profundidade sem clichê esotérico.',
    img: 'aa-pilar-espiritualidade',
    alt: 'Cena pictórica em tons dourados e vermelhos com uma grande flor de lis vermelha ao centro, cercada de símbolos: sol, círculo astrológico, livro aberto, esfera armilar, um cervo e jardins',
  },
  'Crenças e Condicionamentos': {
    slug: 'crencas-e-condicionamentos',
    desc: 'Enxergar e questionar o que você nunca escolheu, só herdou.',
    intro:
      'Boa parte do que você chama de "jeito de ser" foi instalado antes de você poder escolher. Crença não examinada vira automatismo. Estes textos abrem o que estava fechado como verdade.',
    img: 'aa-pilar-crencas',
    alt: 'Colagem dividida em dois mundos — de um lado relógio, livros e um cérebro; do outro, lua, constelações e flores — com a silhueta de uma pessoa diante da fronteira iluminada',
  },
  'Arcanos': {
    slug: 'arcanos',
    desc: 'A Jornada do Louco no Tarot: as etapas de amadurecer, uma carta de cada vez.',
    intro:
      'Os Arcanos Maiores não preveem o futuro: narram as etapas de amadurecer. Cada carta, uma figura cultural e um padrão humano. O Tarô como espelho, não como oráculo. Uma série publicada aos poucos.',
    img: 'aa-arcanos-serie',
    alt: 'Mulher caminhando por uma trilha em direção ao nascer do sol, sob um céu de estrelas',
  },
} as const;

export const pilarSlug = (nome: string): string =>
  PILAR_META[nome as keyof typeof PILAR_META]?.slug ?? '';
