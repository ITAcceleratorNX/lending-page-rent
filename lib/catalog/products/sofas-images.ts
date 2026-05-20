/** Фото: `public/images/categories/sofas/{имя}-01.webp` … */

export const SOFAS_IMAGES_BY_SLUG: Record<string, string[]> = {
  "liepa-bench": ["/images/categories/sofas/liepa-soft-bench-01.webp"],
  "liepa-one-seating": ["/images/categories/sofas/liepa-one-seating-01.webp"],
  "liepa-sofa": ["/images/categories/sofas/liepa-sofa-01.webp"],
  "liepa-armchair": ["/images/categories/sofas/liepa-armchair-01.webp"],
}

export function getSofasImagePaths(slug: string): string[] | undefined {
  return SOFAS_IMAGES_BY_SLUG[slug]
}
