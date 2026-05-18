"use client"

import { MapPin, Phone, ArrowUp } from "lucide-react"
import {
  SITE_ADDRESS_LINE,
  SITE_CITY,
  SITE_COMPANY_LEGAL,
  SITE_PHONE_DISPLAY,
  whatsappUrl,
} from "@/lib/site"

const navLinks = [
  { name: "Каталог", href: "#catalog" },
  { name: "Новинки", href: "#gallery" },
  { name: "Услуги", href: "#services" },
  { name: "Галерея", href: "#gallery" },
  { name: "Готовые решения", href: "#gallery" },
  {
    name: "Реферальная программа",
    href: whatsappUrl(),
    external: true,
  },
  { name: "Контакты", href: "#contacts" },
] as const

export function Footer() {
  return (
    <footer className="py-16 md:py-24 bg-background border-t border-border">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
          <div className="space-y-8">
            <a href="#top" className="flex items-center w-fit hover:opacity-90 transition-opacity">
              <div className="text-accent">
                <svg width="60" height="50" viewBox="0 0 60 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="20" cy="25" r="15" stroke="currentColor" strokeWidth="2" fill="none" />
                  <circle cx="40" cy="25" r="15" stroke="currentColor" strokeWidth="2" fill="none" />
                </svg>
              </div>
              <div className="ml-2 flex flex-col leading-none">
                <span className="text-accent font-light text-sm tracking-[0.3em]">RENT</span>
                <span className="text-accent font-light text-sm tracking-[0.3em]">ME</span>
              </div>
            </a>

            <div className="text-sm text-muted-foreground">
              <p>© {new Date().getFullYear()} Rent Me</p>
              <p>Все права защищены</p>
              <p className="mt-4">{SITE_COMPANY_LEGAL}</p>
            </div>
          </div>

          <div className="space-y-6" id="contacts">
            <h3 className="font-serif text-xl md:text-2xl font-light tracking-wide">
              Rent Me — контакты и выдача заказов
            </h3>

            <p className="text-sm text-muted-foreground">
              {SITE_COMPANY_LEGAL} · {SITE_CITY}
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <div className="text-sm text-muted-foreground">
                  <p>
                    {SITE_CITY}, {SITE_ADDRESS_LINE}
                  </p>
                  <p className="mt-2">График и выдача заказов — уточняйте в WhatsApp перед визитом</p>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-3">
                  <Phone className="w-5 h-5 text-accent shrink-0" />
                  <div>
                    <a
                      href={whatsappUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:underline font-medium"
                    >
                      {SITE_PHONE_DISPLAY}
                    </a>
                    <p className="text-xs text-muted-foreground mt-1">WhatsApp — основной контакт</p>
                  </div>
                </div>
                <a
                  href={whatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm uppercase tracking-luxury text-accent hover:underline w-fit"
                >
                  Написать в WhatsApp
                </a>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <nav className="space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  {...("external" in link && link.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="block text-sm uppercase tracking-luxury text-muted-foreground hover:text-accent transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-4">
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Rent Me"
                className="text-foreground hover:text-accent transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="flex justify-end mt-12">
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 text-xs uppercase tracking-luxury text-muted-foreground hover:text-accent transition-colors"
          >
            <span>Наверх</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  )
}
