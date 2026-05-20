import type { CategoryKey } from "./types"

/** Корневая папка для фото каталога: `public/catalog-photos/` */
export const CATALOG_PHOTOS_BASE = "/catalog-photos"

/** Пути к фото товара — файлы кладутся в `public/catalog-photos/{категория}/{slug}/01.jpg` … */
export function productImagePaths(categoryKey: CategoryKey, slug: string, count = 3): string[] {
  return Array.from({ length: count }, (_, i) => {
    const num = String(i + 1).padStart(2, "0")
    return `${CATALOG_PHOTOS_BASE}/${categoryKey}/${slug}/${num}.jpg`
  })
}
