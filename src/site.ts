// Configuração central do site — edite aqui e os links se atualizam em todo lugar.

export const SITE = {
  nome: 'Aline Antunes',
  dominio: 'https://alineantunes.site',
  // WhatsApp da Aline: +55 21 97793-4351 (formato internacional, só dígitos).
  whatsappNumber: '5521977934351',
  instagram: 'https://instagram.com/alinea.antunes',
  instagramHandle: '@alinea.antunes',
  // Canal do YouTube (aulas e conversas).
  youtube: 'https://www.youtube.com/@alinetarot',
  youtubeChannelId: 'UC9jAEJ29EnEuuDNTqSWeR9Q',
  // Feed do Instagram via Behold (widget oficial). Vazio = fallback "Seguir o perfil".
  beholdFeedId: 'WNc0ff6b6RD171IixUjS',
  // App gratuito "Descubra seu Arcano Pessoal e do Ano" (ferramenta de captação / topo de funil).
  arcanoApp: 'https://descubraarcano.lovable.app/',
};

// Monta um link de WhatsApp com mensagem pré-preenchida.
export const whatsappLink = (mensagem: string): string =>
  `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(mensagem)}`;

// Prefixa caminhos internos com o base path do site (ex.: '/site-aline').
// Necessário porque o site é servido em subcaminho no GitHub Pages.
// URLs externas, âncoras e mailto/tel passam intactas.
export const withBase = (path: string = '/'): string => {
  if (/^(https?:|mailto:|tel:|#)/.test(path)) return path;
  const base = import.meta.env.BASE_URL.replace(/\/$/, ''); // '/site-aline'
  const p = path.startsWith('/') ? path : `/${path}`;
  return `${base}${p}` || '/';
};

// Posts do Instagram para embedar na Home.
// Cole aqui os PERMALINKS dos posts (ex.: 'https://www.instagram.com/p/CXXXXXXXX/').
// Use de 3 a 6. Se ficar vazio, a Home mostra um convite para seguir o perfil.
export const instagramPosts: string[] = [
  // 'https://www.instagram.com/p/SEU_POST_1/',
  // 'https://www.instagram.com/p/SEU_POST_2/',
  // 'https://www.instagram.com/p/SEU_POST_3/',
];
