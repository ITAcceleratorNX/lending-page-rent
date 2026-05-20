import { CATALOG_CATEGORIES } from "@/lib/media"
import { CATALOG_PRODUCTS } from "./products"
import type { CatalogCategory, CatalogProduct, CategoryKey } from "./types"

export type { CatalogCategory, CatalogProduct, CategoryKey }
export {
  AED_TO_KZT_RATE,
  aedToKzt,
  formatPriceKzt,
  formatProductPrice,
  getProductPriceKzt,
  roundKztFromTable,
} from "./pricing"
export { CATALOG_PHOTOS_BASE, productImagePaths } from "./product-images"
export { CATALOG_PRODUCTS, getCategoryFallbackImage } from "./products"

export function getAllCategorySlugs(): CategoryKey[] {
  return CATALOG_CATEGORIES.map((c) => c.key)
}

export function getCategoryBySlug(slug: string): CatalogCategory | undefined {
  return CATALOG_CATEGORIES.find((c) => c.key === slug)
}

export function getProductsByCategory(slug: CategoryKey): CatalogProduct[] {
  return CATALOG_PRODUCTS.filter((p) => p.categoryKey === slug)
}

export function getProductCountByCategory(): Record<CategoryKey, number> {
  return CATALOG_CATEGORIES.reduce(
    (acc, cat) => {
      acc[cat.key] = getProductsByCategory(cat.key).length
      return acc
    },
    {} as Record<CategoryKey, number>,
  )
}
