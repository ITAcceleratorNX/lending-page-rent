import { productImagePaths } from "../product-images"
import { roundKztFromTable } from "../pricing"
import type { CatalogProduct } from "../types"
import { getDiningTablesImagePaths } from "./dining-tables-images"

function diningTable(
  slug: string,
  name: string,
  priceAed: number,
  priceKztFromTable: number,
): CatalogProduct {
  return {
    id: `dining-tables-${slug}`,
    categoryKey: "dining-tables",
    slug,
    name,
    priceAed,
    priceKzt: roundKztFromTable(priceKztFromTable),
    images: getDiningTablesImagePaths(slug) ?? productImagePaths("dining-tables", slug),
  }
}

/** Обеденные столы — 11 позиций */
export const DINING_TABLES_PRODUCTS: CatalogProduct[] = [
  diningTable("kremer-black-rect", "Стол Kremer прямоугольный чёрный", 592, 75_372),
  diningTable("herold-gold-white", "Стол Herold золотой с белой столешницей", 291, 37_049),
  diningTable("herold-silver-white", "Стол Herold серебристый с белой столешницей", 291, 37_049),
  diningTable(
    "cornell-round-gold",
    "Стол Cornell круглый золотой с белой столешницей",
    491,
    62_513,
  ),
  diningTable(
    "cornell-round-white",
    "Стол Cornell круглый белый с белой столешницей",
    491,
    62_513,
  ),
  diningTable(
    "cornell-round-black",
    "Стол Cornell круглый чёрный с белой столешницей",
    386,
    49_145,
  ),
  diningTable(
    "cornell-rect-gold-glass",
    "Стол Cornell прямоугольный золотой со стеклянной столешницей",
    595,
    75_754,
  ),
  diningTable(
    "cornell-rect-white-glass",
    "Стол Cornell прямоугольный белый со стеклянной столешницей",
    595,
    75_754,
  ),
  diningTable(
    "cornell-rect-black-glass",
    "Стол Cornell прямоугольный чёрный со стеклянной столешницей",
    595,
    75_754,
  ),
  diningTable(
    "jones-folding-rect",
    "Стол Jones складной прямоугольный 120×60 см",
    60,
    7_639,
  ),
  diningTable("jones-folding-round", "Стол Jones складной круглый 180 см", 180, 22_917),
]
