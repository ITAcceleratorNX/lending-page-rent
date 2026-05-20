import { productImagePaths } from "../product-images"
import { roundKztFromTable } from "../pricing"
import type { CatalogProduct } from "../types"
import { getSerpentineImagePaths } from "./serpentine-images"

function serpentine(
  slug: string,
  name: string,
  priceAed: number,
  priceKztFromTable: number,
): CatalogProduct {
  return {
    id: `serpentine-${slug}`,
    categoryKey: "serpentine",
    slug,
    name,
    priceAed,
    priceKzt: roundKztFromTable(priceKztFromTable),
    images: getSerpentineImagePaths(slug) ?? productImagePaths("serpentine", slug),
  }
}

/** Столы-серпантин — 15 позиций */
export const SERPENTINE_PRODUCTS: CatalogProduct[] = [
  serpentine("largo-tablecloth", "Скатерть Largo для 1 секции стола-серпантина", 197, 25_082),
  serpentine(
    "gable-gold",
    "Стол-серпантин Gable золотой со стеклянной столешницей",
    248,
    31_575,
  ),
  serpentine(
    "gable-silver",
    "Стол-серпантин Gable серебристый со стеклянной столешницей",
    248,
    31_575,
  ),
  serpentine("nevu-u-shaped", "Комплект стола-серпантина Nevu U-образный", 816, 103_892),
  serpentine(
    "u-shaped-short",
    "Комплект стола-серпантина U-образный короткий",
    656,
    83_521,
  ),
  serpentine("wave-2-gold", "Комплект стола-серпантина Wave 2 секции золотой", 496, 63_150),
  serpentine(
    "wave-2-silver",
    "Комплект стола-серпантина Wave 2 секции серебристый",
    496,
    63_150,
  ),
  serpentine("halfmoon-gold", "Комплект стола-серпантина Halfmoon золотой", 496, 63_150),
  serpentine(
    "halfmoon-silver",
    "Комплект стола-серпантина Halfmoon серебристый",
    496,
    63_150,
  ),
  serpentine("horseshoe-gold", "Комплект стола-серпантина Horseshoe золотой", 744, 94_725),
  serpentine(
    "horseshoe-silver",
    "Комплект стола-серпантина Horseshoe серебристый",
    744,
    94_725,
  ),
  serpentine("wave-4-gold", "Комплект стола-серпантина Wave 4 секции золотой", 992, 126_300),
  serpentine(
    "wave-4-silver",
    "Комплект стола-серпантина Wave 4 секции серебристый",
    992,
    126_300,
  ),
  serpentine("donut-silver", "Стол-серпантин Donut на 16 гостей серебристый", 992, 126_300),
  serpentine("donut-gold", "Стол-серпантин Donut на 16 гостей золотой", 992, 126_300),
]
