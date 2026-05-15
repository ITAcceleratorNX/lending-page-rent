/** Плавная прокрутка к блоку с id (отступ от шапки задаётся через scroll-mt на секциях). */
export function scrollToSection(id: string): void {
  if (typeof document === "undefined") return
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" })
}
