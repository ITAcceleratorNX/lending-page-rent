/** Фото: `public/images/categories/table-settings/{имя}-01.webp` … */

export const TABLE_SETTINGS_IMAGES_BY_SLUG: Record<string, string[]> = {
  candy: ["/images/categories/table-settings/candy-01.webp"],
  "black-and-white": ["/images/categories/table-settings/black-and-white-01.webp"],
  "black-dot": [
    "/images/categories/table-settings/black-dot-01.webp",
    "/images/categories/table-settings/black-dot-02.webp",
  ],
  moon: ["/images/categories/table-settings/moon-01.webp"],
  ramadan: ["/images/categories/table-settings/ramadan-01.webp"],
  graphite: [
    "/images/categories/table-settings/graphite-01.webp",
    "/images/categories/table-settings/graphite-02.webp",
  ],
  peel: [
    "/images/categories/table-settings/perl-01.webp",
    "/images/categories/table-settings/perl-02.webp",
  ],
  "snow-satin": ["/images/categories/table-settings/shiny-satin-01.webp"],
  slow: [
    "/images/categories/table-settings/slow-01.webp",
    "/images/categories/table-settings/slow-02.webp",
  ],
  "total-grey": [
    "/images/categories/table-settings/total-grey-01.webp",
    "/images/categories/table-settings/total-grey-02.webp",
  ],
  "total-white": [
    "/images/categories/table-settings/total-white-01.webp",
    "/images/categories/table-settings/total-white-02.webp",
  ],
  "violet-cream": [
    "/images/categories/table-settings/velvet-charm-01.webp",
    "/images/categories/table-settings/velvet-charm-02.webp",
  ],
}

export function getTableSettingsImagePaths(slug: string): string[] | undefined {
  return TABLE_SETTINGS_IMAGES_BY_SLUG[slug]
}
