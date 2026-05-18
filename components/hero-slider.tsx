"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { whatsappUrl } from "@/lib/site"
import { HERO_MAIN_BANNER } from "@/lib/media"

const HERO_ALT =
  "Аренда мебели и декора для мероприятий — Rent Me Алматы"

export function HeroSlider() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setVisible(true)
  }, [])

  return (
    <section id="hero" className="relative bg-background overflow-hidden scroll-mt-20 md:scroll-mt-24">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="relative min-h-[min(90vh,720px)] py-12 md:py-16 flex items-center">
          <div className="absolute inset-0 overflow-hidden rounded-none">
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/30 z-10" />
            <Image
              src={HERO_MAIN_BANNER}
              alt={HERO_ALT}
              fill
              className="object-cover object-center"
              priority
              fetchPriority="high"
              quality={72}
              sizes="(max-width: 1536px) 100vw, 1420px"
            />
          </div>

          <div
            className={`relative z-20 max-w-2xl space-y-6 transition-all duration-700 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.1rem] font-light tracking-wide text-primary leading-[1.12]">
              Аренда мебели, декора, сервировки для мероприятий
            </h1>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Премиум-решения для свадеб, банкетов и корпоративов в Алматы
            </p>
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center justify-center bg-accent text-accent-foreground px-8 py-3.5 uppercase text-sm tracking-luxury hover:bg-accent/90 transition-colors w-fit"
            >
              Связаться в WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
