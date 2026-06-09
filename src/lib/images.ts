// Registro de imagens otimizadas (astro:assets).
// As imagens-fonte vivem em src/assets/img/*.webp e são processadas no build
// (webp + tamanhos responsivos) pelo componente <Image> do Astro.
//
// Para adicionar/trocar uma imagem: solte o arquivo em src/assets/img/ e refira pelo
// nome sem extensão via img('<nome>'). Se não existir, img() retorna undefined e a página
// cai no fallback de luz dourada (CSS).
import type { ImageMetadata } from 'astro';

const files = import.meta.glob<{ default: ImageMetadata }>(
  '../assets/img/*.{jpg,jpeg,png,webp}',
  { eager: true },
);

const registry: Record<string, ImageMetadata> = {};
for (const path in files) {
  const name = path.split('/').pop()!.replace(/\.(jpe?g|png|webp)$/i, '');
  registry[name] = files[path].default;
}

export function img(name: string): ImageMetadata | undefined {
  return registry[name];
}
