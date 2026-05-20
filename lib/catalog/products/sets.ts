import { productImagePaths } from "../product-images"
import { roundKztFromTable } from "../pricing"
import type { CatalogProduct } from "../types"
import { getSetsImagePaths } from "./sets-images"

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
    images: getSetsImagePaths(slug) ?? productImagePaths("sets", slug),
  }
}

/** Комплекты — 27 позиций по эталонной таблице */
export const SETS_PRODUCTS: CatalogProduct[] = [
  set("the-cubes", "Комплект «Кубы»", 1616, 205_747),
  set("wooden-accent", "Комплект «Деревянный акцент»", 575, 73_208),
  set("velvet-wave", "Комплект «Бархатная волна»", 1670, 212_622),
  set("eye", "Комплект «Eye»", 1900, 241_905),
  set("play-of-shades", "Комплект «Игра теней»", 2422, 308_365),
  set("black-gloss", "Комплект «Чёрный глянец»", 1460, 185_885),
  set("sicilian", "Комплект «Сицилия»", 2156, 274_496),
  set("bend", "Комплект «Изгиб»", 4166, 530_010),
  set("pink-blush", "Комплект «Розовый румянец»", 1805, 229_810),
  set("chic-in-pink", "Комплект «Шик в розовом»", 941, 119_826),
  set("lilies", "Комплект «Лилии»", 1384, 176_208),
  set("forest", "Комплект «Лес»", 1509, 192_124),
  set("boho-story", "Комплект «Бохо-история»", 1585, 201_802),
  set("in-pink-tones", "Комплект «В розовых тонах»", 1291, 164_385),
  set("playground", "Комплект «Игровая площадка»", 2154, 274_241),
  set("sky", "Комплект «Небо»", 1461, 186_012),
  set("polka-dots", "Комплект «Горошек»", 1918, 244_196),
  set("magic-candles", "Комплект «Волшебные свечи»", 2195, 279_460),
  set("black-lines", "Комплект «Чёрные линии»", 1565, 199_255),
  set("peach-mood", "Комплект «Персиковое настроение»", 1405, 178_881),
  set("neon-light", "Комплект «Неоновый свет»", 1772, 225_608),
  set("safari", "Комплект «Сафари»", 2237, 284_807),
  set("orange-pattern", "Комплект «Оранжевый узор»", 1469, 187_031),
  set("stylish-wave", "Комплект «Стильная волна»", 2255, 287_534),
  set("velvet-folds", "Комплект «Бархатные складки»", 2077, 264_641),
  set("arabian-night", "Комплект «Арабская ночь»", 7436, 946_745),
  set("total-white", "Комплект «Полностью белый»", 3377, 429_955),
]
