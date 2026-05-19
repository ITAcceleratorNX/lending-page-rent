"use client"

import Image from "next/image"
import Link from "next/link"
import { MapPin, ArrowUp } from "lucide-react"
import {
  SITE_ADDRESS_LINE,
  SITE_CITY,
  SITE_COMPANY_LEGAL,
  SITE_PHONE_DISPLAY,
  whatsappUrl,
} from "@/lib/site"
import { SITE_FAVICON } from "@/lib/media"

export function Footer() {
  return (
    <footer className="py-16 md:py-24 bg-background border-t border-border">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          <div className="space-y-6">
            <Link
              href="/"
              className="flex items-center gap-3 w-fit hover:opacity-90 transition-opacity"
              aria-label="Rent Me — на главную"
            >
              <Image
                src={SITE_FAVICON}
                alt=""
                width={72}
                height={72}
                sizes="(max-width: 768px) 56px, 64px"
                quality={92}
                className="h-14 w-14 md:h-16 md:w-16 object-contain shrink-0"
                loading="lazy"
                decoding="async"
              />
              <span className="font-serif text-2xl md:text-3xl font-light tracking-wide text-accent">
                Rent Me
              </span>
            </Link>
            <p className="text-muted-foreground leading-relaxed max-w-md">
              Rent Me — аренда мебели и декора для мероприятий
            </p>
            <div className="text-sm text-muted-foreground space-y-1">
              <p>© 2026 Rent Me. Все права защищены.</p>
              <p>{SITE_COMPANY_LEGAL}</p>
            </div>
          </div>

          <div className="space-y-6" id="contacts">
            <h3 className="font-serif text-xl md:text-2xl font-light tracking-wide">Контакты</h3>

            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
              <p className="text-sm text-muted-foreground leading-relaxed">
                {SITE_CITY}, {SITE_ADDRESS_LINE}
              </p>
            </div>

            <div>
              <p className="text-sm text-muted-foreground mb-1">WhatsApp</p>
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener"
                className="text-accent font-medium hover:underline"
              >
                {SITE_PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </div>

        <div className="flex justify-end mt-12 pt-8 border-t border-border/60">
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
