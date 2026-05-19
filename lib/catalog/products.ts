import { CATALOG_CATEGORIES } from "@/lib/media"
import { productImagePaths } from "./product-images"
import { SETS_PRODUCTS } from "./products/sets"
import type { CatalogProduct, CategoryKey } from "./types"

const categoryImage = Object.fromEntries(
  CATALOG_CATEGORIES.map((c) => [c.key, c.image]),
) as Record<CategoryKey, string>

function item(
  categoryKey: CategoryKey,
  slug: string,
  name: string,
  priceAed: number,
  photoCount = 3,
): CatalogProduct {
  return {
    id: `${categoryKey}-${slug}`,
    categoryKey,
    slug,
    name,
    priceAed,
    images: productImagePaths(categoryKey, slug, photoCount),
  }
}

/** Ассортимент по категориям — дополняется по таблице из ТЗ */
export const CATALOG_PRODUCTS: CatalogProduct[] = [
  ...SETS_PRODUCTS,

  // Готовые сервировки
  item("table-settings", "classic-white", "Сервировка «Классика»", 85),
  item("table-settings", "golden-autumn", "Сервировка «Золотая осень»", 95),
  item("table-settings", "linen-natural", "Сервировка «Натуральный лён»", 90),
  item("table-settings", "emerald", "Сервировка «Изумруд»", 100),
  item("table-settings", "blush-rose", "Сервировка «Розовый пудра»", 95),
  item("table-settings", "midnight", "Сервировка «Полночь»", 110),
  item("table-settings", "desert-sand", "Сервировка «Песок пустыни»", 88),
  item("table-settings", "silver-mist", "Сервировка «Серебряный туман»", 92),
  item("table-settings", "garden-party", "Сервировка «Садовая вечеринка»", 87),
  item("table-settings", "royal-gold", "Сервировка «Королевское золото»", 115),
  item("table-settings", "minimal-scandi", "Сервировка «Сканди»", 80),
  item("table-settings", "festive-red", "Сервировка «Праздничная»", 98),

  // Обеденные столы
  item("dining-tables", "round-150", "Круглый стол, диаметр 150 см", 120),
  item("dining-tables", "round-180", "Круглый стол, диаметр 180 см", 150),
  item("dining-tables", "rect-180x75", "Прямоугольный стол 180×75 см", 95),
  item("dining-tables", "rect-240x75", "Прямоугольный стол 240×75 см", 110),
  item("dining-tables", "banquet-long", "Банкетный стол длинный", 130),
  item("dining-tables", "half-moon", "Стол полукруглый", 140),
  item("dining-tables", "glass-top", "Стол со стеклянной столешницей", 165),
  item("dining-tables", "farm-wood", "Стол деревянный фермерский", 105),
  item("dining-tables", "modular-meter", "Модульный стол (погонный метр)", 68),
  item("dining-tables", "high-cocktail", "Высокий стол коктейльный", 75),

  // Столы-серпантин
  item("serpentine", "black-gloss", "Стол-серпантин, чёрный глянец", 220),
  item("serpentine", "white-gloss", "Стол-серпантин, белый глянец", 220),
  item("serpentine", "mirror-top", "Стол-серпантин, зеркальная столешница", 250),
  item("serpentine", "wood-natural", "Стол-серпантин, натуральное дерево", 195),
  item("serpentine", "gold-frame", "Стол-серпантин, золотой каркас", 235),
  item("serpentine", "half-section", "Полусекция серпантина", 115),
  item("serpentine", "corner-connector", "Угловой соединитель серпантина", 45),
  item("serpentine", "outdoor", "Стол-серпантин для open air", 210),

  // Стулья
  item("chairs", "banquet-gold", "Банкетный стул, золотой", 35),
  item("chairs", "banquet-silver", "Банкетный стул, серебряный", 35),
  item("chairs", "banquet-white", "Банкетный стул, белый", 32),
  item("chairs", "chiavari-gold", "Стул шиавари, золото", 40),
  item("chairs", "chiavari-white", "Стул шиавари, белый", 38),
  item("chairs", "ghost-clear", "Стулья прозрачные «Призрак»", 42),
  item("chairs", "cross-back-natural", "Стул кросс-бэк, натуральное дерево", 45),
  item("chairs", "velvet-emerald", "Стул бархатный, изумруд", 48),
  item("chairs", "velvet-blush", "Стул бархатный, пудровый", 48),
  item("chairs", "louis-gold", "Стул в стиле Луи, золото", 55),
  item("chairs", "folding-white", "Стул складной, белый", 18),
  item("chairs", "bar-stool-gold", "Барный стул, золото", 38),
  item("chairs", "kids-white", "Детский стул, белый", 22),
  item("chairs", "throne-silver", "Трон декоративный, серебро", 120),

  // Диваны
  item("sofas", "chester-white", "Диван честер, белый", 180),
  item("sofas", "chester-velvet-green", "Диван честер, бархат изумруд", 195),
  item("sofas", "loveseat-cream", "Диван двухместный, кремовый", 140),
  item("sofas", "modular-lounge", "Диван модульный лаунж", 220),
  item("sofas", "curved-white", "Диван изогнутый, белый", 250),
  item("sofas", "velvet-blush", "Диван бархатный, пудра", 175),
  item("sofas", "gold-frame-white", "Диван с золотым каркасом", 210),
  item("sofas", "outdoor-rattan", "Диван уличный, ротанг", 160),
  item("sofas", "bench-upholstered", "Скамья мягкая обитая", 95),
  item("sofas", "ottoman-round", "Пуф круглый большой", 55),

  // Лаунж и коктейльные столы
  item("lounge", "cocktail-round-60", "Коктейльный стол круглый, 60 см", 45),
  item("lounge", "cocktail-round-80", "Коктейльный стол круглый, 80 см", 55),
  item("lounge", "cocktail-high-gold", "Высокий коктейльный стол, золото", 65),
  item("lounge", "coffee-glass", "Журнальный стол, стекло", 50),
  item("lounge", "coffee-marble", "Журнальный стол, мрамор", 70),
  item("lounge", "cube-gold", "Стол-куб золотой", 40),
  item("lounge", "side-nested", "Приставной стол вложенный", 35),
  item("lounge", "bar-counter", "Барная стойка модульная", 150),
  item("lounge", "pouf-set", "Комплект пуфов лаунж", 90),
  item("lounge", "outdoor-lounge", "Стол лаунж для open air", 60),

  // Скатерти
  item("tablecloths", "white-poly", "Скатерть белая, полиэстер", 25),
  item("tablecloths", "ivory-satin", "Скатерть айвори, атлас", 35),
  item("tablecloths", "linen-natural", "Скатерть льняная, натуральная", 40),
  item("tablecloths", "black-matte", "Скатерть чёрная, матовая", 28),
  item("tablecloths", "blush-satin", "Скатерть пудровая, атлас", 35),
  item("tablecloths", "emerald-velvet", "Скатерть изумруд, бархат", 45),
  item("tablecloths", "gold-sequin", "Скатерть золотая, пайетки", 55),
  item("tablecloths", "runner-gold", "Дорожка настольная, золото", 15),
  item("tablecloths", "runner-lace", "Дорожка настольная, кружево", 18),
  item("tablecloths", "overlay-organza", "Оверлей органза", 22),
  item("tablecloths", "round-330", "Скатерть круглая 330 см", 42),
  item("tablecloths", "serpentine-custom", "Скатерть на серпантин", 65),

  // Подстановочные тарелки
  item("chargers", "gold-rim", "Подстановочная тарелка, золотой кант", 5),
  item("chargers", "silver-rim", "Подстановочная тарелка, серебряный кант", 5),
  item("chargers", "pearl-white", "Подстановочная тарелка, жемчуг", 5),
  item("chargers", "mirror-gold", "Подстановочная тарелка, зеркало золото", 6),
  item("chargers", "glass-clear", "Подстановочная тарелка, стекло", 5),
  item("chargers", "wood-rustic", "Подстановочная тарелка, дерево", 6),
  item("chargers", "black-matte", "Подстановочная тарелка, чёрный мат", 5),
  item("chargers", "rose-gold", "Подстановочная тарелка, розовое золото", 6),
  item("chargers", "acrylic-gold", "Подстановочная тарелка, акрил золото", 7),
  item("chargers", "marble-look", "Подстановочная тарелка, под мрамор", 6),
  item("chargers", "copper", "Подстановочная тарелка, медь", 6),
  item("chargers", "wicker-natural", "Подстановочная тарелка, лоза", 7),
  item("chargers", "square-gold", "Подстановочная тарелка квадратная, золото", 7),
  item("chargers", "scalloped-white", "Подстановочная тарелка фигурная, белая", 6),

  // Обеденные тарелки
  item("dinner-plates", "white-classic", "Тарелка обеденная, белая классика", 4),
  item("dinner-plates", "gold-rim", "Тарелка обеденная, золотой кант", 5),
  item("dinner-plates", "silver-rim", "Тарелка обеденная, серебряный кант", 5),
  item("dinner-plates", "black-matte", "Тарелка обеденная, чёрный мат", 5),
  item("dinner-plates", "coupe-gold", "Тарелка купе, золото", 6),
  item("dinner-plates", "square-white", "Тарелка квадратная, белая", 5),
  item("dinner-plates", "deep-pasta", "Тарелка глубокая для пасты", 4),
  item("dinner-plates", "dessert-gold", "Тарелка десертная, золото", 3),
  item("dinner-plates", "bread-butter", "Тарелка для хлеба", 3),
  item("dinner-plates", "blue-pattern", "Тарелка с синим орнаментом", 5),
  item("dinner-plates", "green-botanical", "Тарелка с ботаническим принтом", 5),
  item("dinner-plates", "ivory-vintage", "Тарелка винтаж, айвори", 6),

  // Бокалы и стекло
  item("glassware", "wine-crystal", "Бокал для вина, хрусталь", 8),
  item("glassware", "champagne-flute", "Бокал для шампанского", 7),
  item("glassware", "champagne-coupe", "Бокал для шампанского, купе", 7),
  item("glassware", "water-goblet", "Бокал для воды", 6),
  item("glassware", "highball", "Стакан хайбол", 5),
  item("glassware", "old-fashioned", "Стакан для виски", 5),
  item("glassware", "martini", "Бокал для мартини", 6),
  item("glassware", "margarita", "Бокал для маргариты", 6),
  item("glassware", "beer-pilsner", "Бокал для пива", 5),
  item("glassware", "jug-glass", "Кувшин стеклянный", 15),
  item("glassware", "carafe-water", "Графин для воды", 12),
  item("glassware", "gold-rim-wine", "Бокал для вина, золотой кант", 9),
  item("glassware", "colored-goblet", "Бокал цветное стекло", 8),
  item("glassware", "tumbler-set", "Набор стаканов для сока", 5),

  // Декор, вазы и композиции
  item("decor-vases", "vase-glass-tall", "Ваза стеклянная высокая", 25),
  item("decor-vases", "vase-gold-metal", "Ваза металлическая, золото", 30),
  item("decor-vases", "vase-ceramic-white", "Ваза керамическая, белая", 22),
  item("decor-vases", "centerpiece-low", "Композиция центральная низкая", 45),
  item("decor-vases", "centerpiece-tall", "Композиция центральная высокая", 65),
  item("decor-vases", "candelabra-gold", "Канделябр, золото", 55),
  item("decor-vases", "lantern-gold", "Фонарь декоративный", 35),
  item("decor-vases", "mirror-tray-round", "Поднос-зеркало круглый", 28),
  item("decor-vases", "flower-stand-metal", "Подставка для цветов металл", 40),
  item("decor-vases", "arch-backdrop", "Арка декоративная", 180),
  item("decor-vases", "column-pedestal", "Колонна-пьедестал", 50),
  item("decor-vases", "candle-holder-set", "Набор подсвечников", 20),
]

export function getCategoryFallbackImage(categoryKey: CategoryKey): string {
  return categoryImage[categoryKey]
}
