import type { CATALOG_CATEGORIES } from "@/lib/media"

export type CategoryKey = (typeof CATALOG_CATEGORIES)[number]["key"]

export type CatalogCategory = (typeof CATALOG_CATEGORIES)[number]

export type CatalogProduct = {
  id: string
  categoryKey: CategoryKey
  slug: string
  name: string
  priceAed: number
  /** Цена в ₸ из таблицы (округлена до 100); иначе считается по курсу AED */
  priceKzt?: number
  /** Пути в /public; при отсутствии файла показывается изображение категории */
  images: string[]
}
