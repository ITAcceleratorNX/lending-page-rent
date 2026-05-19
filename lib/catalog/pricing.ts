/** Фиксированный курс AED → KZT для прайса каталога */
export const AED_TO_KZT_RATE = 125

/** Перевод из AED в KZT с округлением до 100 ₸ */
export function aedToKzt(priceAed: number): number {
  return Math.round((priceAed * AED_TO_KZT_RATE) / 100) * 100
}

export function formatPriceKzt(priceKzt: number): string {
  return `${priceKzt.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} ₸`
}

import type { CatalogProduct } from "./types"

export function getProductPriceKzt(product: Pick<CatalogProduct, "priceAed" | "priceKzt">): number {
  if (product.priceKzt != null) {
    return product.priceKzt
  }
  return aedToKzt(product.priceAed)
}

export function formatProductPrice(product: Pick<CatalogProduct, "priceAed" | "priceKzt">): string {
  return formatPriceKzt(getProductPriceKzt(product))
}

/** Округление суммы из таблицы до 100 ₸ */
export function roundKztFromTable(value: number): number {
  return Math.round(value / 100) * 100
}
