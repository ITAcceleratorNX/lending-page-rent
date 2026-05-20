import { productImagePaths } from "../product-images"
import { roundKztFromTable } from "../pricing"
import type { CatalogProduct } from "../types"
import { getSofasImagePaths } from "./sofas-images"

function sofa(
  slug: string,
  name: string,
  priceAed: number,
  priceKztFromTable: number,
): CatalogProduct {
  return {
    id: `sofas-${slug}`,
    categoryKey: "sofas",
    slug,
    name,
    priceAed,
    priceKzt: roundKztFromTable(priceKztFromTable),
    images: getSofasImagePaths(slug) ?? productImagePaths("sofas", slug, 3),
  }
}

/** Диваны — 4 позиции (линейка Liepa) */
export const SOFAS_PRODUCTS: CatalogProduct[] = [
  sofa("liepa-bench", "Банкетка Liepa, цвет слоновая кость", 497, 63_277),
  sofa("liepa-one-seating", "Кресло-банкетка Liepa одноместная, цвет слоновая кость", 312, 39_723),
  sofa("liepa-sofa", "Диван Liepa, цвет слоновая кость", 682, 86_831),
  sofa("liepa-armchair", "Кресло Liepa, цвет слоновая кость", 381, 48_508),
]
