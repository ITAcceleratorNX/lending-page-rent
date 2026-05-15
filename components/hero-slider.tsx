"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

const heroSlides = [
  {
    title: "EVANS. ИСКУССТВО СТЕКЛА",
    subtitle: "Цветные бокалы для любого формата напитков",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-WSZCxWUZdbABvbuJHEUG2IWLWDl5ls.png",
    products: [
      { name: "Винный бокал", image: "/placeholder.svg?height=150&width=100" },
      { name: "Хайбол", image: "/placeholder.svg?height=150&width=100" },
      { name: "Флюте", image: "/placeholder.svg?height=150&width=100" },
      { name: "Коктейльный бокал", image: "/placeholder.svg?height=150&width=100" },
    ]
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

  return (
    <section className="relative bg-background overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="relative h-[500px] md:h-[600px] flex items-center">
          {/* Background Image */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent z-10" />
            <Image
              src={heroSlides[currentSlide].image}
              alt="Hero background"
              fill
              className="object-cover object-center"
              priority
            />
          </div>
          
          {/* Content */}
          <div className="relative z-20 grid md:grid-cols-2 gap-8 items-center w-full">
            <div className={`space-y-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-light tracking-wide text-primary italic">
                {heroSlides[currentSlide].title}
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground uppercase tracking-luxury">
                {heroSlides[currentSlide].subtitle}
              </p>
            </div>
            
            {/* Product Cards */}
            <div className="hidden md:grid grid-cols-4 gap-4">
              {heroSlides[currentSlide].products.map((product, index) => (
                <div 
                  key={product.name}
                  className={`bg-card/90 backdrop-blur-sm p-4 text-center hover:scale-105 transition-transform cursor-pointer
                    ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="h-32 relative mb-3">
                    <div className="w-full h-full bg-gradient-to-b from-pink-100/50 to-transparent rounded flex items-center justify-center">
                      <div className="w-8 h-24 bg-gradient-to-b from-pink-200 to-pink-100 rounded-full opacity-60" />
                    </div>
                  </div>
                  <p className="text-xs uppercase tracking-luxury font-medium">{product.name}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Arrows */}
          <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
        </div>
        
        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 py-6">
          {[...Array(10)].map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i % heroSlides.length)}
              className={`w-2 h-2 rounded-full transition-colors ${
                i === currentSlide ? 'bg-accent' : 'bg-border'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
