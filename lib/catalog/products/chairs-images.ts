/** Фото: `public/images/categories/chairs/{имя}-01.webp` … */

export const CHAIRS_IMAGES_BY_SLUG: Record<string, string[]> = {
  "dupont-gold": [
    "/images/categories/chairs/dupond-gold-velvet-01.webp",
    "/images/categories/chairs/dupont-gold-velvet-02.webp",
  ],
  "dupont-silver": [
    "/images/categories/chairs/dupont-silver-velvet-01.webp",
    "/images/categories/chairs/dupond-silver-velvet-02.webp",
  ],
  "octave-gold": ["/images/categories/chairs/octave-gold-01.webp"],
  orpheus: ["/images/categories/chairs/orpheus-01.webp"],
  "panton-clear": ["/images/categories/chairs/panton-01.webp"],
  "rattan-tempo-gold": [
    "/images/categories/chairs/rattan-tempo-gold-01.webp",
    "/images/categories/chairs/rattan-tempo-gold-02.webp",
  ],
  "tempo-black-mix": [
    "/images/categories/chairs/tempo-black-mix-01.webp",
    "/images/categories/chairs/tempo-black-mix-02.webp",
  ],
  "tempo-black-red": ["/images/categories/chairs/tempo-black-red-01.webp"],
  "tempo-gold-mix": [
    "/images/categories/chairs/tempo-gold-red-01.webp",
    "/images/categories/chairs/tempo-gold-red-02.webp",
  ],
  "tempo-gold-teddy": [
    "/images/categories/chairs/tempo-teddy-back-01.webp",
    "/images/categories/chairs/tempo-teddy-back-02.webp",
  ],
  "warren-folding": ["/images/categories/chairs/warren-01.webp"],
}

export function getChairsImagePaths(slug: string): string[] | undefined {
  return CHAIRS_IMAGES_BY_SLUG[slug]
}
