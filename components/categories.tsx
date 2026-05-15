"use client"

import { ArrowRight } from "lucide-react"
import Image from "next/image"
import { whatsappWithText } from "@/lib/site"

const categories = [
  { 
    name: "Комплекты", 
    image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=300&h=200&fit=crop",
    key: "packages"
  },
  { 
    name: "Готовые сервировки", 
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=300&h=200&fit=crop",
    key: "ready-sets"
  },
  { 
    name: "Обеденные столы", 
    image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=300&h=200&fit=crop",
    key: "dining-tables"
  },
  { 
    name: "Столы-серпантин", 
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=300&h=200&fit=crop",
    key: "serpentine"
  },
  { 
    name: "Пуфы", 
    image: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=300&h=200&fit=crop",
    key: "poufs"
  },
  { 
    name: "Стулья", 
    image: "https://images.unsplash.com/photo-1503602642458-232111445657?w=300&h=200&fit=crop",
    key: "chairs"
  },
  { 
    name: "Диваны", 
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=300&h=200&fit=crop",
    key: "sofas"
  },
  { 
    name: "Лаунж-столы", 
    image: "https://images.unsplash.com/photo-1532372320572-cda25653a26d?w=300&h=200&fit=crop",
    key: "lounge-tables"
  },
  { 
    name: "Детская мебель", 
    image: "https://images.unsplash.com/photo-1594897030264-ab7d87efc473?w=300&h=200&fit=crop",
    key: "kids"
  },
  { 
    name: "Скатерти", 
    image: "https://images.unsplash.com/photo-1505932794465-147d1f1b2c97?w=300&h=200&fit=crop",
    key: "tablecloths"
  },
  { 
    name: "Подставные тарелки", 
    image: "https://images.unsplash.com/photo-1579541814924-49fef17c5be5?w=300&h=200&fit=crop",
    key: "chargers"
  },
  { 
    name: "Обеденные тарелки", 
    image: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=300&h=200&fit=crop",
    key: "plates"
  },
]

export function Categories() {
  return (
    <section id="catalog" className="scroll-mt-28 md:scroll-mt-32 py-16 md:py-24 bg-background">
      <div className="max-w-[1400px] mx-auto px-4">
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light tracking-wide mb-4">
          GO RENT ПРЕДЛАГАЕТ ДЕКОР В АРЕНДУ
        </h2>
        <div className="w-full h-px bg-accent/30 mb-12" />
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {categories.map((category, index) => (
            <a
              key={category.key}
              href={whatsappWithText(`Здравствуйте! Интересует аренда: ${category.name}`)}
              target="_blank"
              rel="noopener noreferrer"
              className="group block border border-border bg-card hover:border-accent transition-all duration-300"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="p-3">
                <span className="text-xs uppercase tracking-luxury text-muted-foreground">
                  {category.name}
                </span>
              </div>
              <div className="relative h-32 overflow-hidden">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </a>
          ))}
        </div>
        
        <div className="flex justify-center mt-12">
          <a 
            href={whatsappWithText("Здравствуйте! Хочу арендовать декор, нужна консультация по каталогу.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-accent text-accent-foreground px-8 py-4 uppercase text-sm tracking-luxury hover:bg-accent/90 transition-colors"
          >
            <span>Перейти в каталог</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
