/** Фото: `public/images/categories/serpentine/{имя}-01.webp` … */

export const SERPENTINE_IMAGES_BY_SLUG: Record<string, string[]> = {
  "largo-tablecloth": ["/images/categories/serpentine/largo-01.webp"],
  "gable-gold": ["/images/categories/serpentine/gable-gold-01.webp"],
  "gable-silver": ["/images/categories/serpentine/gable-silver-01.webp"],
  "nevu-u-shaped": ["/images/categories/serpentine/nevu-01.webp"],
  "u-shaped-short": ["/images/categories/serpentine/nevu-short-01.webp"],
  "wave-2-gold": ["/images/categories/serpentine/wave-gold-01.webp"],
  "wave-2-silver": ["/images/categories/serpentine/wave-silver-01.webp"],
  "halfmoon-gold": ["/images/categories/serpentine/halfmoon-gold-large-01.webp"],
  "halfmoon-silver": ["/images/categories/serpentine/halfmoon-silver-large-01.webp"],
  "horseshoe-gold": ["/images/categories/serpentine/horseshoe-gold-01.webp"],
  "horseshoe-silver": ["/images/categories/serpentine/horseshoe-silver-01.webp"],
  "wave-4-gold": ["/images/categories/serpentine/wave-4-gold-01.webp"],
  "wave-4-silver": ["/images/categories/serpentine/wave-4-silver-01.webp"],
  "donut-silver": ["/images/categories/serpentine/donut-silver-01.webp"],
  "donut-gold": ["/images/categories/serpentine/donut-gold-01.webp"],
}

export function getSerpentineImagePaths(slug: string): string[] | undefined {
  return SERPENTINE_IMAGES_BY_SLUG[slug]
}
