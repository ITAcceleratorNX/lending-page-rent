/** Основной контакт WhatsApp (номер без +, как в wa.me). */
export const SITE_WHATSAPP = "https://wa.me/77585957160"

export function whatsappWithText(text: string): string {
  return `${SITE_WHATSAPP}?text=${encodeURIComponent(text)}`
}
