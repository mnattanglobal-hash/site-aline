// Converte wikilinks do Obsidian — [[Nome da Carta]] ou [[arquivo|texto]] —
// em links reais para /blog/<slug>. O conteúdo dos artigos é importado do wiki,
// que usa wikilinks; sem isto eles apareceriam como texto cru "[[...]]".

const WIKILINK = /\[\[([^\]]+?)\]\]/g;

// Mesma regra de slug usada nos nomes de arquivo: minúsculas, sem acento, hifens.
function slugify(s) {
  return s
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function splitTextNode(value) {
  const nodes = [];
  let lastIndex = 0;
  let m;
  WIKILINK.lastIndex = 0;
  while ((m = WIKILINK.exec(value)) !== null) {
    if (m.index > lastIndex) {
      nodes.push({ type: 'text', value: value.slice(lastIndex, m.index) });
    }
    const [target, label] = m[1].split('|').map((p) => p.trim());
    const text = label || target;
    nodes.push({
      type: 'link',
      url: `/blog/${slugify(target)}`,
      children: [{ type: 'text', value: text }],
    });
    lastIndex = m.index + m[0].length;
  }
  if (lastIndex < value.length) {
    nodes.push({ type: 'text', value: value.slice(lastIndex) });
  }
  return nodes;
}

function walk(node) {
  if (!node.children) return;
  for (let i = 0; i < node.children.length; i++) {
    const child = node.children[i];
    if (child.type === 'text' && WIKILINK.test(child.value)) {
      const replacement = splitTextNode(child.value);
      node.children.splice(i, 1, ...replacement);
      i += replacement.length - 1;
    } else {
      walk(child);
    }
  }
}

export default function remarkWikilinks() {
  return (tree) => walk(tree);
}
