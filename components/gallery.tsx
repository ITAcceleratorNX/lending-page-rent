"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=800&h=600&fit=crop",
    alt: "Элегантная вечерняя сервировка"
  },
  {
    src: "https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=800&h=600&fit=crop",
    alt: "Яркая сервировка с красными акцентами"
  },
  {
    src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&h=600&fit=crop",
    alt: "Классическая белая сервировка"
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

  return (
    <section id="gallery" className="scroll-mt-28 md:scroll-mt-32 py-16 md:py-24 bg-background">
      <div className="max-w-[1400px] mx-auto px-4">
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light tracking-wide mb-2">
          СОЗДАЙТЕ УНИКАЛЬНУЮ СЕРВИРОВКУ
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground uppercase tracking-luxury mb-8">
          для вашего мероприятия с нашими товарами
        </p>
        
        <div className="mb-8">
          <span className="text-xs uppercase tracking-luxury text-muted-foreground">
            Готовые решения
          </span>
        </div>
        
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
              <div 
                key={index}
                className="relative h-[300px] md:h-[450px] overflow-hidden group"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            ))}
          </div>
          
          {/* Navigation */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-card p-2 shadow-sm hover:bg-accent hover:text-accent-foreground transition-colors z-10"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-card p-2 shadow-sm hover:bg-accent hover:text-accent-foreground transition-colors z-10"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
        
        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {galleryImages.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-2 h-2 rounded-full transition-colors ${
                i === currentIndex ? 'bg-accent' : 'bg-border'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
