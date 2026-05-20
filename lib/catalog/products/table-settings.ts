import { productImagePaths } from "../product-images"
import { roundKztFromTable } from "../pricing"
import type { CatalogProduct } from "../types"
import { getTableSettingsImagePaths } from "./table-settings-images"

function tableSetting(
  slug: string,
  name: string,
  priceAed: number,
  priceKztFromTable: number,
): CatalogProduct {
  return {
    id: `table-settings-${slug}`,
    categoryKey: "table-settings",
    slug,
    name,
    priceAed,
    priceKzt: roundKztFromTable(priceKztFromTable),
    images:
      getTableSettingsImagePaths(slug) ?? productImagePaths("table-settings", slug, 3),
  }
}

/** Готовые сервировки — 12 позиций */
export const TABLE_SETTINGS_PRODUCTS: CatalogProduct[] = [
  tableSetting("violet-cream", "Сервировка «Лиловый крем»", 81, 10_313),
  tableSetting("black-dot", "Сервировка «Чёрная точка»", 109, 13_878),
  tableSetting("snow-satin", "Сервировка «Снежный атлас»", 94, 11_968),
  tableSetting("peel", "Сервировка «Peel»", 79, 10_058),
  tableSetting("slow", "Сервировка «Slow»", 87, 11_077),
  tableSetting("black-and-white", "Сервировка «Чёрно-белая»", 103, 13_114),
  tableSetting("total-grey", "Сервировка «Полностью серая»", 81, 10_313),
  tableSetting("ramadan", "Сервировка «Рамадан»", 173, 22_026),
  tableSetting("moon", "Сервировка «Луна»", 103, 13_114),
  tableSetting("candy", "Сервировка «Конфетная»", 94, 11_968),
  tableSetting("total-white", "Сервировка «Полностью белая»", 89, 11_331),
  tableSetting("graphite", "Сервировка «Графитовая»", 113, 14_387),
]
