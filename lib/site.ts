/** Номер WhatsApp без «+» (как в wa.me). */
export const SITE_WHATSAPP_NUMBER = "77479071622"

export const SITE_PHONE_DISPLAY = "+7 747 907 16 22"
/** Для атрибута href у tel: */
export const SITE_PHONE_TEL = "+77479071622"

export const SITE_ADDRESS_LINE = "Проспект Аль-Фараби, 19 к3Б"
export const SITE_CITY = "Алматы"
export const SITE_COMPANY_LEGAL = "TMK Limited"

export const SITE_WHATSAPP_DEFAULT_MESSAGE =
  "Здравствуйте! Хочу узнать подробнее об аренде мебели и декора в Rent Me."

export function whatsappUrl(message: string = SITE_WHATSAPP_DEFAULT_MESSAGE): string {
  return `https://wa.me/${SITE_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}
