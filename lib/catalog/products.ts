import { CATALOG_CATEGORIES } from "@/lib/media"
import { productImagePaths } from "./product-images"
import { roundKztFromTable } from "./pricing"
import { SETS_PRODUCTS } from "./products/sets"
import { CHAIRS_PRODUCTS } from "./products/chairs"
import { DINING_TABLES_PRODUCTS } from "./products/dining-tables"
import { SERPENTINE_PRODUCTS } from "./products/serpentine"
import { SOFAS_PRODUCTS } from "./products/sofas"
import { TABLE_SETTINGS_PRODUCTS } from "./products/table-settings"
import type { CatalogProduct, CategoryKey } from "./types"

const categoryImage = Object.fromEntries(
  CATALOG_CATEGORIES.map((c) => [c.key, c.image]),
) as Record<CategoryKey, string>

function item(
  categoryKey: CategoryKey,
  slug: string,
  name: string,
  priceAed: number,
  priceKzt: number,
  photoCount = 3,
): CatalogProduct {
  return {
    id: `${categoryKey}-${slug}`,
    categoryKey,
    slug,
    name,
    priceAed,
    priceKzt: roundKztFromTable(priceKzt),
    images: productImagePaths(categoryKey, slug, photoCount),
  }
}

/** Ассортимент — 176 позиций по эталонной таблице Rent Me */
export const CATALOG_PRODUCTS: CatalogProduct[] = [
  ...SETS_PRODUCTS,

  ...TABLE_SETTINGS_PRODUCTS,

  ...DINING_TABLES_PRODUCTS,

  ...SERPENTINE_PRODUCTS,

  ...CHAIRS_PRODUCTS,

  ...SOFAS_PRODUCTS,

  // Лаунж и коктейльные столы — 15
  item("lounge", "jazz-high", "Стол Jazz высокий золотой", 220, 28_010),
  item("lounge", "jazz-low", "Стол Jazz низкий золотой", 220, 28_010),
  item("lounge", "oliver", "Коктейльный стол Oliver золотой", 97, 12_350),
  item("lounge", "lanza", "Стол Lanza золотой", 67, 8_530),
  item("lounge", "norman-large", "Стол Norman большой, зеркальная столешница", 210, 26_737),
  item("lounge", "scholl-large", "Стол Scholl большой, зеркальная столeshница", 340, 43_288),
  item("lounge", "norman-fur-large", "Стол Norman Fur большой, зеркальная столeshница", 240, 30_556),
  item("lounge", "ruffles-medium", "Стол Ruffles средний, зеркальная столeshница", 139, 17_697),
  item("lounge", "norman-medium", "Стол Norman средний, зеркальная столeshница", 64, 8_148),
  item("lounge", "norman-small", "Стол Norman маленький, зеркальная столeshница", 55, 7_003),
  item("lounge", "norman-velvet-small", "Стол Norman бархатный маленький, розовый", 55, 7_003),
  item("lounge", "norman-set-3", "Набор столов Norman, 3 круглых стола", 359, 45_707),
  item("lounge", "scholl-set-3", "Набор столов Scholl, 3 круглых стола", 564, 71_808),
  item("lounge", "ruffles-set-3", "Набор столов Ruffles, 3 круглых стола", 491, 62_513),
  item("lounge", "norman-fur-set-3", "Набор столов Norman Fur, 3 круглых стола", 498, 63_405),

  // Скатерти — 18
  item("tablecloths", "dume-round", "Скатерть Dume круглая, соломенный оттенок", 184, 23_426),
  item("tablecloths", "dume-rect", "Скатерть Dume прямоугольная, бежевый цвет", 161, 20_498),
  item("tablecloths", "largo-round", "Скатерть Largo круглая, белая", 127, 16_169),
  item("tablecloths", "largo-xl", "Скатерть Largo XL прямоугольная, белая", 141, 17_951),
  item("tablecloths", "largo-xxxl", "Скатерть Largo XXXL прямоугольная, белая", 413, 52_582),
  item("tablecloths", "accord-round", "Скатерть Accord круглая, матча", 121, 15_405),
  item("tablecloths", "accord-rect", "Скатерть Accord прямоугольная, матча", 120, 15_278),
  item("tablecloths", "shiny-velvet-round", "Скатерть Shiny Velvet круглая, ледяной красный", 178, 22_662),
  item("tablecloths", "shiny-velvet-rect", "Скатерть Shiny Velvet прямоугольная, ледяной красный", 174, 22_153),
  item("tablecloths", "matte-velvet-round", "Скатерть Matte Velvet круглая, черника", 121, 15_405),
  item("tablecloths", "matte-velvet-rect", "Скатерть Matte Velvet прямоугольная, черника", 80, 10_185),
  item("tablecloths", "rondo-round", "Скатерть Rondo круглая, кварцевый розовый", 64, 8_148),
  item("tablecloths", "rondo-rect", "Скатерть Rondo прямоугольная, кварцевый розовый", 60, 7_639),
  item("tablecloths", "sequin-round", "Скатерть Sequin круглая, серебряная", 75, 9_548),
  item("tablecloths", "sequin-layout", "Скатерть Sequin Layout прямоугольная, серебряная", 85, 10_822),
  item("tablecloths", "kipnis", "Скатерть Kipnis белая", 200, 25_463),
  item("tablecloths", "sonata-rect", "Скатерть Sonata прямоугольная, с принтом", 80, 10_185),
  item("tablecloths", "sonata-round", "Скатерть Sonata круглая, с принтом", 142, 18_079),

  // Подстановочные тарелки — 12
  item("chargers", "bergans", "Подстановочная тарелка Bergans красная", 18, 2_291),
  item("chargers", "caballe-gold", "Подстановочная тарелка Caballe с золотым кантом", 18, 2_291),
  item("chargers", "lux", "Подстановочная тарелка Lux прозрачная", 18, 2_291),
  item("chargers", "melies", "Подстановочная тарелка Melies золотая", 18, 2_291),
  item("chargers", "moffo", "Подстановочная тарелка Moffo матовая белая", 24, 3_055),
  item("chargers", "allen", "Подстановочная тарелка Allen белая", 18, 2_291),
  item("chargers", "cameo", "Подстановочная тарелка Cameo золотая", 18, 2_291),
  item("chargers", "caballe-green", "Подстановочная тарелка Caballe зелёная", 18, 2_291),
  item("chargers", "damrau-red", "Подстановочная тарелка Damrau красная", 22, 2_801),
  item("chargers", "damrau-black", "Подстановочная тарелка Damrau чёрная", 18, 2_291),
  item("chargers", "bosse", "Подстановочная тарелка Bosse розовая", 6, 763),
  item("chargers", "barhous", "Подстановочная тарелка Barhous золотая", 18, 2_291),

  // Обеденные тарелки — 15
  item("dinner-plates", "moffo-dining", "Обеденная тарелка Moffo белая, набор из 2", 48, 6_111),
  item("dinner-plates", "moffo-appetizer", "Закусочная тарелка Moffo белая", 18, 2_292),
  item("dinner-plates", "matilla", "Обеденная тарелка Matilla с золотым кантом, набор из 2", 25, 3_183),
  item("dinner-plates", "crisp", "Обеденная тарелка Crisp с серебряным кантом, набор из 2", 23, 2_928),
  item("dinner-plates", "bruks-white", "Обеденная тарелка Bruks белая, набор из 2", 25, 3_183),
  item("dinner-plates", "bruks-small-bowl", "Чаша Bruks малая", 12, 1_528),
  item("dinner-plates", "bruks-black", "Обеденная тарелка Bruks чёрная, набор из 2", 25, 3_183),
  item("dinner-plates", "allen-set-4", "Набор тарелок Allen, 4 шт.", 52, 6_621),
  item("dinner-plates", "allen-white", "Обеденная тарелка Allen белая, набор из 2", 28, 3_565),
  item("dinner-plates", "stemme", "Обеденная тарелка Stemme, набор из 2", 21, 2_674),
  item("dinner-plates", "bumbry", "Обеденная тарелка Bumbry, набор из 2", 21, 2_674),
  item("dinner-plates", "simono", "Обеденная тарелка Simono, набор из 2", 23, 2_928),
  item("dinner-plates", "verdi", "Обеденная тарелка Verdi, набор из 2", 23, 2_928),
  item("dinner-plates", "alten-appetizer", "Закусочная тарелка Alten", 9, 1_146),
  item("dinner-plates", "burian-appetizer", "Закусочная тарелка Burian", 9, 1_146),

  // Бокалы и стекло — 21
  item("glassware", "musset-green", "Набор бокалов Musset зелёный, 3 шт.", 45, 5_729),
  item("glassware", "musset-clear", "Набор бокалов Musset прозрачный, 3 шт.", 45, 5_729),
  item("glassware", "musset-amber", "Набор бокалов Musset янтарный, 3 шт.", 45, 5_729),
  item("glassware", "eifman", "Набор бокалов Eifman, 3 шт.", 27, 3_438),
  item("glassware", "alonso-cocktail-low", "Бокал Alonso коктейльный низкий", 5, 637),
  item("glassware", "krause", "Бокал Krause хрустальный", 7, 891),
  item("glassware", "alonso-clear-3", "Набор бокалов Alonso прозрачный, 3 шт.", 21, 2_674),
  item("glassware", "alonso-iridescent", "Набор бокалов Alonso перламутровый, 2 шт.", 14, 1_782),
  item("glassware", "alonso-clear-2", "Набор бокалов Alonso прозрачный, 2 шт.", 14, 1_782),
  item("glassware", "alonso-pink", "Набор бокалов Alonso розовый, 2 шт.", 14, 1_782),
  item("glassware", "alonso-green", "Набор бокалов Alonso зелёный, 2 шт.", 14, 1_782),
  item("glassware", "alonso-smoke-rose", "Набор бокалов Alonso дымчато-розовый, 2 шт.", 14, 1_782),
  item("glassware", "evans-cocktail-black", "Бокал Evans коктейльный чёрный", 12, 1_528),
  item("glassware", "evans-gold-rim", "Набор бокалов Evans с золотым кантом", 29, 3_692),
  item("glassware", "evans-amber", "Набор бокалов Evans янтарный, 3 шт.", 12, 1_528),
  item("glassware", "evans-blue", "Набор бокалов Evans голубой, 3 шт.", 12, 1_528),
  item("glassware", "evans-smoke", "Набор бокалов Evans дымчатый, 4 шт.", 45, 5_729),
  item("glassware", "evans-pink", "Набор бокалов Evans розовый, 4 шт.", 36, 4_583),
  item("glassware", "till-pink", "Набор бокалов Till розовый, 3 шт.", 18, 2_292),
  item("glassware", "till-green", "Набор бокалов Till зелёный, 2 шт.", 18, 2_292),
  item("glassware", "till-blue", "Набор бокалов Till голубой, 2 шт.", 18, 2_292),

  // Декор, вазы и композиции — 15
  item("decor-vases", "blake", "Скульптура Blake малая", 15, 1_909),
  item("decor-vases", "sills", "Ваза Sills", 10, 1_273),
  item("decor-vases", "milnes", "Ваза Milnes малая", 9, 1_145),
  item("decor-vases", "fontaine", "Клош Fontaine малая", 19, 2_419),
  item("decor-vases", "masini", "Подсвечник Masini с патиной", 5, 636),
  item("decor-vases", "leman", "Хрустальная чаша Leman высокая широкая", 130, 16_551),
  item("decor-vases", "anselmi", "Подсвечник Anselmi чёрный", 45, 5_729),
  item("decor-vases", "vestris", "Подсвечник Vestris серебристый большой", 45, 5_729),
  item("decor-vases", "karre", "Золотая композиция-дерево Karre", 120, 15_278),
  item("decor-vases", "sharms", "Фонарь Sharms золотой", 60, 7_639),
  item("decor-vases", "grim", "Подставка Grim золотая со стеклянной столешницей", 110, 14_005),
  item("decor-vases", "lorka", "Ветки Lorka белые", 70, 8_912),
  item("decor-vases", "bejart", "Набор подсвечников Bejart, 3 шт.", 24, 3_055),
  item("decor-vases", "passer", "Набор фигурок птиц Passer, 3 шт.", 24, 3_055),
  item("decor-vases", "grif", "Композиция Grif коралл", 190, 24_190),
]

export function getCategoryFallbackImage(categoryKey: CategoryKey): string {
  return categoryImage[categoryKey]
}
