"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { whatsappUrl } from "@/lib/site"

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=1200&h=800&fit=crop&q=85",
    alt: "Вечерняя сервировка для мероприятия",
  },
  {
    src: "https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=1200&h=800&fit=crop&q=85",
    alt: "Декор и сервировка стола",
  },
  {
    src: "https://images.unsplash.com/photo-1528605248644-14ddedd08fd7?w=1200&h=800&fit=crop&q=85",
    alt: "Зал и фуршетная зона для события",
  },
]

export function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
  }

  const active = galleryImages[currentIndex]

  return (
    <section id="gallery" className="scroll-mt-28 md:scroll-mt-32 py-16 md:py-24 bg-background">
      <div className="max-w-[1400px] mx-auto px-4">
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light tracking-wide mb-2">
          ВДОХНОВЕНИЕ ДЛЯ ВАШЕГО МЕРОПРИЯТИЯ
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground uppercase tracking-luxury mb-8">
          Rent Me · мебель, декор, сервировка и текстиль
        </p>

        <div className="mb-8">
          <span className="text-xs uppercase tracking-luxury text-muted-foreground">
            Готовые решения и референсы
          </span>
        </div>

        <div className="relative">
          <div className="relative h-[320px] md:h-[520px] overflow-hidden group">
            <Image
              src={active.src}
              alt={active.alt}
              fill
              className="object-cover group-hover:scale-[1.02] transition-transform duration-700"
              sizes="100vw"
              priority={currentIndex === 0}
            />
          </div>

          <button
            type="button"
            onClick={prevSlide}
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-card/95 p-2 shadow-sm hover:bg-accent hover:text-accent-foreground transition-colors z-10"
            aria-label="Предыдущее фото"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            type="button"
            onClick={nextSlide}
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-card/95 p-2 shadow-sm hover:bg-accent hover:text-accent-foreground transition-colors z-10"
            aria-label="Следующее фото"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {galleryImages.map((_, i) => (
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
