import type { CategoryKey } from "./types"

/** Стандартные пути к фото товара (разработчик кладёт файлы в /public/images/products/…) */
export function productImagePaths(categoryKey: CategoryKey, slug: string, count = 3): string[] {
  return Array.from({ length: count }, (_, i) => {
    const num = String(i + 1).padStart(2, "0")
    return `/images/products/${categoryKey}/${slug}/${num}.jpg`
  })
}
