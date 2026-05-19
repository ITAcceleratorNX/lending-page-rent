"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { whatsappUrl } from "@/lib/site"
import { CATALOG_CATEGORIES } from "@/lib/media"

const gallerySlides = CATALOG_CATEGORIES.slice(0, 3).map((c) => ({
  src: c.image,
  alt: `Готовые решения — ${c.name} — Rent Me Алматы`,
}))

export function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const active = gallerySlides[currentIndex]

  return (
    <section id="gallery" className="scroll-mt-20 md:scroll-mt-24 py-16 md:py-24 bg-background">
      <div className="max-w-[1400px] mx-auto px-4">
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light tracking-wide mb-2">
          Вдохновение для вашего мероприятия
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground uppercase tracking-luxury mb-8">
          Rent Me · мебель, декор, сервировка и текстиль
        </p>

        <div className="mb-6">
          <span className="text-xs uppercase tracking-luxury text-muted-foreground">
            Готовые решения и референсы
          </span>
        </div>

        <div className="relative">
          <div className="relative h-[min(70vw,420px)] md:h-[min(56vw,520px)] overflow-hidden group border border-border bg-muted/20">
            <Image
              src={active.src}
              alt={active.alt}
              fill
              quality={85}
              className="object-cover group-hover:scale-[1.02] transition-transform duration-700"
              sizes="(max-width: 1400px) calc(100vw - 32px), 1340px"
              loading="lazy"
              decoding="async"
            />
          </div>

          <button
            type="button"
            onClick={() =>
              setCurrentIndex((i) => (i - 1 + gallerySlides.length) % gallerySlides.length)
            }
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-card/95 p-2 border border-border hover:bg-accent hover:text-accent-foreground transition-colors z-10"
            aria-label="Предыдущее фото"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            type="button"
            onClick={() => setCurrentIndex((i) => (i + 1) % gallerySlides.length)}
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-card/95 p-2 border border-border hover:bg-accent hover:text-accent-foreground transition-colors z-10"
            aria-label="Следующее фото"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {gallerySlides.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setCurrentIndex(i)}
              className={`w-2 h-2 rounded-full transition-colors ${
                i === currentIndex ? "bg-accent" : "bg-border"
              }`}
              aria-label={`Слайд ${i + 1}`}
            />
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center border border-border px-8 py-3.5 uppercase text-sm tracking-luxury hover:border-accent hover:text-accent transition-colors"
          >
            Запросить подбор в WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
