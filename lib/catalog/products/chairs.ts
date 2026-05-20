import { productImagePaths } from "../product-images"
import { roundKztFromTable } from "../pricing"
import type { CatalogProduct } from "../types"
import { getChairsImagePaths } from "./chairs-images"

function chair(
  slug: string,
  name: string,
  priceAed: number,
  priceKztFromTable: number,
): CatalogProduct {
  return {
    id: `chairs-${slug}`,
    categoryKey: "chairs",
    slug,
    name,
    priceAed,
    priceKzt: roundKztFromTable(priceKztFromTable),
    images: getChairsImagePaths(slug) ?? productImagePaths("chairs", slug, 3),
  }
}

/** Стулья — 11 позиций */
export const CHAIRS_PRODUCTS: CatalogProduct[] = [
  chair("tempo-black-red", "Стул Tempo чёрный с красным сиденьем и спинкой", 59, 7_512),
  chair("panton-clear", "Стул Panton прозрачный", 67, 8_530),
  chair("tempo-gold-teddy", "Стул Tempo золотой с мягкими вставками из ткани «Teddy»", 59, 7_512),
  chair("rattan-tempo-gold", "Стул Rattan Tempo золотой с бежевым сиденьем", 63, 8_021),
  chair("tempo-black-mix", "Стул Tempo чёрный микс с мягким сиденьем из ткани «Teddy»", 59, 7_512),
  chair("tempo-gold-mix", "Стул Tempo золотой микс с красным сиденьем", 59, 7_512),
  chair("dupont-gold", "Стул Dupont золотой, белый велюр", 55, 7_002),
  chair("dupont-silver", "Стул Dupont серебристый, пудрово-розовый велюр", 68, 8_657),
  chair("octave-gold", "Стул Octave золотой, белый", 35, 4_456),
  chair("orpheus", "Стул Orpheus, велюр пудрово-розовый", 43, 5_474),
  chair("warren-folding", "Стул Warren складной, розовый", 19, 2_419),
]
