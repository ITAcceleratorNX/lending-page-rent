/** Фото: `public/images/categories/dining-tables/{имя}-01.webp` … */

export const DINING_TABLES_IMAGES_BY_SLUG: Record<string, string[]> = {
  "kremer-black-rect": [
    "/images/categories/dining-tables/kremer-01.webp",
    "/images/categories/dining-tables/kremer-02.webp",
    "/images/categories/dining-tables/kremer-03.webp",
  ],
  "herold-gold-white": [
    "/images/categories/dining-tables/herold-gold-01.webp",
    "/images/categories/dining-tables/herold-gold-02.webp",
  ],
  "herold-silver-white": [
    "/images/categories/dining-tables/herold-silver-01.webp",
    "/images/categories/dining-tables/herold-silver-02.webp",
  ],
  "cornell-round-gold": [
    "/images/categories/dining-tables/cornell-gold-01.webp",
    "/images/categories/dining-tables/cornell-gold-02.webp",
  ],
  "cornell-round-white": [
    "/images/categories/dining-tables/cornell-silver-01.webp",
    "/images/categories/dining-tables/cornell-silver-02.webp",
  ],
  "cornell-round-black": [
    "/images/categories/dining-tables/cormell-black-01.webp",
    "/images/categories/dining-tables/cornell-black-02.webp",
  ],
  "cornell-rect-gold-glass": [
    "/images/categories/dining-tables/cornell-rectangular-gold-01.webp",
    "/images/categories/dining-tables/cornell-rectangular-gold-02.webp",
  ],
  "cornell-rect-white-glass": [
    "/images/categories/dining-tables/cornell-rectangular-silver-01.webp",
    "/images/categories/dining-tables/cornell-rectangular-silver-02.webp",
  ],
  "cornell-rect-black-glass": [
    "/images/categories/dining-tables/cornell-rectangular-black-01.webp",
    "/images/categories/dining-tables/cornell-rectangular-black-02.webp",
  ],
  "jones-folding-rect": [
    "/images/categories/dining-tables/jones-rectangular-01.webp",
    "/images/categories/dining-tables/jones-rectangular-02.webp",
  ],
  "jones-folding-round": [
    "/images/categories/dining-tables/jones-01.webp",
    "/images/categories/dining-tables/jones-02.webp",
  ],
}

export function getDiningTablesImagePaths(slug: string): string[] | undefined {
  return DINING_TABLES_IMAGES_BY_SLUG[slug]
}
