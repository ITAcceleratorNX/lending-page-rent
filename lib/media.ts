/** Локальные ассеты из /public — см. ТЗ Rent Me. */
export const SITE_FAVICON = "/images/favicon.png"

/** Сценарии каталога — /public/images */
export const HERO_MAIN_BANNER = "/images/hero/hero-main-banner.png"

export const APP_MOCKUP_CONCEPT = "/images/app/app-mockup-concept.png"

export const FEATURES = [
  {
    image: "/images/features/feature-easy-order.png",
    title: "Удобный заказ",
    text: "Оформление через WhatsApp за пару минут",
  },
  {
    image: "/images/features/feature-consultation.png",
    title: "Помощь в подборе",
    text: "Поможем собрать комплект под ваше мероприятие",
  },
  {
    image: "/images/features/feature-wide-range.png",
    title: "Широкий ассортимент",
    text: "Мебель, декор, сервировка и текстиль в одном месте",
  },
  {
    image: "/images/features/feature-service.png",
    title: "Сервис и сопровождение",
    text: "Доставка, монтаж и поддержка на мероприятии",
  },
] as const

export const CATALOG_CATEGORIES = [
  { name: "Комплекты", image: "/images/categories/category-01-sets.png", key: "sets" },
  {
    name: "Готовые сервировки",
    image: "/images/categories/category-02-table-settings.png",
    key: "table-settings",
  },
  {
    name: "Обеденные столы",
    image: "/images/categories/category-03-dining-tables.png",
    key: "dining-tables",
  },
  {
    name: "Столы-серпантин",
    image: "/images/categories/category-04-serpentine-tables.png",
    key: "serpentine",
  },
  { name: "Стулья", image: "/images/categories/category-05-chairs.png", key: "chairs" },
  { name: "Диваны", image: "/images/categories/category-06-sofas.png", key: "sofas" },
  {
    name: "Лаунж и коктейльные столы",
    image: "/images/categories/category-07-lounge-tables.png",
    key: "lounge",
  },
  {
    name: "Скатерти",
    image: "/images/categories/category-08-tablecloths.png",
    key: "tablecloths",
  },
  {
    name: "Подстановочные тарелки",
    image: "/images/categories/category-09-charger-plates.png",
    key: "chargers",
  },
  {
    name: "Обеденные тарелки",
    image: "/images/categories/category-10-dining-plates.png",
    key: "dinner-plates",
  },
  {
    name: "Бокалы и стекло",
    image: "/images/categories/category-11-glassware.png",
    key: "glassware",
  },
  {
    name: "Декор, вазы и композиции",
    image: "/images/categories/category-12-decor-vases.png",
    key: "decor-vases",
  },
] as const

export function categoryAlt(name: string): string {
  return `Аренда — ${name} — Rent Me Алматы`
}
