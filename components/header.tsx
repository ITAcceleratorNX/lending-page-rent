"use client"

import Image from "next/image"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import { whatsappUrl, SITE_CITY, SITE_COMPANY_LEGAL } from "@/lib/site"
import { SITE_FAVICON } from "@/lib/media"

const nav = [
  { label: "Главная", href: "#top" },
  { label: "Каталог", href: "#catalog" },
  { label: "О нас", href: "#about" },
  { label: "Контакты", href: "#contacts" },
] as const

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="bg-background sticky top-0 z-50 border-b border-border/60">
      <div className="max-w-[1400px] mx-auto px-4 py-3 md:py-4 flex items-center justify-between gap-4">
        <a href="#top" className="flex items-center gap-2 sm:gap-3 min-w-0 shrink-0" aria-label="Rent Me — на главную">
          <Image
            src={SITE_FAVICON}
            alt=""
            width={56}
            height={56}
            sizes="(max-width: 768px) 48px, 56px"
            quality={85}
            className="h-12 w-12 md:h-14 md:w-14 object-contain shrink-0"
            priority
          />
          <div className="flex flex-col min-w-0 leading-tight">
            <span className="font-serif text-lg sm:text-xl md:text-2xl font-light tracking-wide text-accent">
              Rent Me
            </span>
            <span className="hidden sm:block text-[10px] uppercase tracking-[0.15em] text-muted-foreground mt-1.5 leading-tight">
              {SITE_CITY}
              <span className="block text-[11px] normal-case tracking-normal font-sans opacity-90 mt-0.5">
                {SITE_COMPANY_LEGAL}
              </span>
            </span>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-10 text-sm uppercase tracking-luxury text-muted-foreground">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="hover:text-accent transition-colors">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener"
            className="hidden sm:inline-flex items-center justify-center bg-accent text-accent-foreground px-5 py-2.5 md:px-6 md:py-3 uppercase text-xs md:text-sm tracking-luxury hover:bg-accent/90 transition-colors"
          >
            WhatsApp
          </a>

          <button
            type="button"
            className="lg:hidden p-2 text-foreground hover:text-accent"
            aria-expanded={open}
            aria-label={open ? "Закрыть меню" : "Открыть меню"}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="lg:hidden border-t border-border bg-background px-4 py-4 flex flex-col gap-4">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm uppercase tracking-luxury text-muted-foreground py-2 border-b border-border/60 last:border-0"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center justify-center bg-accent text-accent-foreground px-6 py-3 uppercase text-sm tracking-luxury"
            onClick={() => setOpen(false)}
          >
            WhatsApp
          </a>
        </div>
      ) : null}
    </header>
  )
}
