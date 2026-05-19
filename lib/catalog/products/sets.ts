import { productImagePaths } from "../product-images"
import { roundKztFromTable } from "../pricing"
import type { CatalogProduct } from "../types"

function set(
  slug: string,
  name: string,
  priceAed: number,
  priceKztFromTable: number,
): CatalogProduct {
  return {
    id: `sets-${slug}`,
    categoryKey: "sets",
    slug,
    name,
    priceAed,
    priceKzt: roundKztFromTable(priceKztFromTable),
    images: productImagePaths("sets", slug, 3),
  }
}

/** Комплекты — данные из таблицы */
export const SETS_PRODUCTS: CatalogProduct[] = [
  set("the-cubes", "Комплект The Cubes", 1616, 205_747),
  set("wooden-accent", "Комплект Wooden Accent", 575, 73_208),
  set("velvet-wave", "Комплект Velvet Wave", 1670, 212_622),
  set("eye", "Комплект Eye", 1900, 241_905),
  set("play-of-shades", "Комплект Play of Shades", 2422, 308_365),
  set("black-gloss", "Комплект Black Gloss", 1460, 185_885),
  set("sicilian", "Комплект Sicilian", 2156, 274_496),
  set("bend", "Комплект Bend", 4166, 530_010),
  set("pink-blush", "Комплект Pink Blush", 1805, 229_810),
  set("chic-in-pink", "Комплект Chic in Pink", 941, 119_826),
  set("lilies", "Комплект Lilies", 1384, 176_208),
  set("forest", "Комплект Forest", 1509, 192_124),
  set("boho-story", "Комплект Boho Story", 1585, 201_802),
  set("in-pink-tones", "Комплект In Pink Tones", 1291, 164_385),
  set("playground", "Комплект Playground", 2154, 274_241),
  set("sky", "Комплект Sky", 1461, 186_012),
  set("polka-dots", "Комплект Polka Dots", 1918, 244_196),
  set("magic-candles", "Комплект Magic Candles", 2195, 279_460),
  set("black-lines", "Комплект Black Lines", 1565, 199_255),
  set("peach-mood", "Комплект Peach Mood", 1405, 178_881),
  set("neon-light", "Комплект Neon Light", 1772, 225_608),
  set("safari", "Комплект Safari", 2237, 284_807),
  set("orange-pattern", "Комплект Orange Pattern", 1469, 187_031),
  set("stylish-wave", "Комплект Stylish Wave", 2255, 287_534),
  set("velvet-folds", "Комплект Velvet Folds", 2077, 264_641),
  set("arabian-night", "Комплект Arabian Night", 7436, 946_745),
  set("total-white", "Комплект Total White", 3377, 429_955),
]
