"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import { whatsappUrl, SITE_COMPANY_LEGAL } from "@/lib/site"

const heroSlides = [
  {
    overline: "Rent Me · Алматы",
    title: "Аренда мебели, декора, сервировки и решений для мероприятий",
    subtitle: `Свадьбы, корпоративы, банкеты и частные события — подберём мебель, декор, сервировку и текстиль под формат площадки. Каталог Rent Me · оператор ${SITE_COMPANY_LEGAL}.`,
    image:
      "https://images.unsplash.com/photo-1528605248644-14ddedd08fd7?w=1920&h=1080&fit=crop&q=85",
    highlights: [
      {
        label: "Мебель",
        image:
          "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=240&h=280&fit=crop&q=85",
      },
      {
        label: "Декор",
        image:
          "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=240&h=280&fit=crop&q=85",
      },
      {
        label: "Сервировка",
        image:
          "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=240&h=280&fit=crop&q=85",
      },
      {
        label: "События под ключ",
        image:
          "https://images.unsplash.com/photo-1519167758481-83f29da8d0d6?w=240&h=280&fit=crop&q=85",
      },
    ],
  },
]

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
  }

  const slide = heroSlides[currentSlide]

  return (
    <section id="hero" className="relative bg-background overflow-hidden scroll-mt-28 md:scroll-mt-32">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="relative min-h-[560px] md:h-[620px] md:min-h-0 py-8 md:py-0 flex items-center">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/88 to-transparent z-10" />
            <Image
              src={slide.image}
              alt="Аренда мебели, декора и сервировки для мероприятий — Rent Me"
              fill
              className="object-cover object-center"
              priority
            />
          </div>

          <div className="relative z-20 grid md:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
            <div
              className={`space-y-6 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <p className="text-xs uppercase tracking-luxury text-muted-foreground">{slide.overline}</p>
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-light tracking-wide text-primary not-italic leading-[1.15]">
                {slide.title}
              </h1>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl">
                {slide.subtitle}
              </p>
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-accent text-accent-foreground px-8 py-3.5 uppercase text-sm tracking-luxury hover:bg-accent/90 transition-colors w-fit"
              >
                Узнать в WhatsApp
              </a>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
              {slide.highlights.map((item, index) => (
                <a
                  key={item.label}
                  href={whatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`bg-card/90 backdrop-blur-sm p-3 md:p-4 text-center hover:scale-[1.02] transition-transform cursor-pointer border border-border/50 hover:border-accent
                    ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="relative h-24 sm:h-28 md:h-32 mb-2 md:mb-3 overflow-hidden rounded-sm">
                    <Image src={item.image} alt={item.label} fill className="object-cover" />
                  </div>
                  <p className="text-[10px] md:text-xs uppercase tracking-luxury font-medium leading-tight">
                    {item.label}
                  </p>
                </a>
              ))}
            </div>
          </div>

          {heroSlides.length > 1 && (
            <>
              <button
                type="button"
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2 text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Предыдущий слайд"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>
              <button
                type="button"
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2 text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Следующий слайд"
              >
                <ChevronRight className="w-8 h-8" />
              </button>
            </>
          )}
        </div>

        {heroSlides.length > 1 && (
          <div className="flex justify-center gap-2 py-6">
            {heroSlides.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setCurrentSlide(i)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  i === currentSlide ? "bg-accent" : "bg-border"
                }`}
                aria-label={`Слайд ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
