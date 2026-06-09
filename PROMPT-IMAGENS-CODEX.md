# Mega-prompt para gerar novas fotos da Aline (Codex / image gen)

Esta versão do site replica a identidade visual do [everbetherapy.com](https://everbetherapy.com/):
fotografia **lifestyle quente, luz dourada, paleta terrosa (creme, pêssego, terracota, rosa-poeira,
verde-sálvia)**, clima calmo e aterrado. Hoje o site reaproveita as fotos que já temos da Aline.
Para ampliar o banco com **a mesma pessoa** (mantendo o rosto), use o prompt abaixo no Codex,
**anexando a 1ª foto da Aline** (o retrato do hero, `src/assets/img/aa-hero-home.webp`) como
referência de identidade.

## Como usar
1. Anexe a foto de referência da Aline.
2. Cole o prompt abaixo.
3. Gere em **4:5 (vertical)** para retratos e **3:2 (horizontal)** para faixas/heros.
4. Salve os resultados em `src/assets/img/` (webp) e referencie via `img('<nome>')`.

## Onde cada imagem entra no site
- **Hero da Home** (`aa-hero-home`) → cena 1 ou 5 (retrato sereno, 4:5).
- **Sobre** (`aa-sobre-retrato`) → cena 4 (espaço de trabalho aconchegante, 4:5).
- **Sessão / Atendimentos** (`aa-sessoes-clareza`) → cena 2 (ambiente natural, 3:2).
- **Contato** (`aa-contato-luz`) → detalhe atmosférico (luz/linho/mãos, 3:2).
- **Pilares do blog** (`aa-pilar-*`) → variações de cena 2/3 ou detalhes (3:2).

---

## PROMPT (cole no Codex, em inglês, junto da foto de referência)

> Using the attached photo of the woman as the exact identity/likeness reference (keep the same
> face, hair color and length, age and ethnicity — it must clearly be the same person), generate
> a series of warm, editorial **lifestyle photographs** for a premium therapy brand.
>
> **Look & grade:** soft golden-hour natural light, warm earthy palette (cream, peach, terracotta,
> dusty rose, sage green), gentle film grain, shallow depth of field, true-to-life skin, calm and
> grounded mood, candid — not stiff or posed. Editorial, not stock-photo. No heavy retouching.
>
> **Scenes:**
> 1. Sitting by a sunlit window with a warm drink, looking softly off-camera.
> 2. Walking outdoors among plants / stone archways in flowing neutral linen clothing.
> 3. Close-up of her hands holding tarot/oracle cards on a linen surface, soft focus, warm light.
> 4. Seated in a cozy study/therapy space with wooden shelves, books and warm lamplight.
> 5. Serene head-and-shoulders portrait against a plain cream wall.
>
> **Hard constraints (do NOT include):** no mystical/esoteric clichés, no crystal balls, no
> purple neon, no zodiac/occult symbols, no glowing magic, no fortune-teller aesthetic. Keep it
> human, warm and contemporary.
>
> **Output:** vertical **4:5** for portraits (scenes 1, 4, 5) and horizontal **3:2** for wide
> scenes (2, 3). Photorealistic, high resolution.
