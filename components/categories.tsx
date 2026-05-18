"use client"

import { ArrowRight } from "lucide-react"
import Image from "next/image"
import { whatsappUrl } from "@/lib/site"

/** Топ-категории каталога — отдельные карточки, все ведут в WhatsApp с единым сообщением. */
const categories = [
  {
    name: "Комплекты",
    image:
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=440&h=560&fit=crop&q=85",
    key: "packages",
  },
  {
    name: "Готовые сервировки",
    image:
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=440&h=560&fit=crop&q=85",
    key: "ready-sets",
  },
  {
    name: "Обеденные столы",
    image:
      "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=440&h=560&fit=crop&q=85",
    key: "dining-tables",
  },
  {
    name: "Столы-серпантин",
    image:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=440&h=560&fit=crop&q=85",
    key: "serpentine",
  },
  {
    name: "Стулья",
    image:
      "https://images.unsplash.com/photo-1503602642458-232111445657?w=440&h=560&fit=crop&q=85",
    key: "chairs",
  },
  {
    name: "Диваны",
    image:
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=440&h=560&fit=crop&q=85",
    key: "sofas",
  },
  {
    name: "Лаунж и коктейльные столы",
    image:
      "https://images.unsplash.com/photo-1532372320572-cda25653a26d?w=440&h=560&fit=crop&q=85",
    key: "lounge-cocktail",
  },
  {
    name: "Скатерти",
    image:
      "https://images.unsplash.com/photo-1505932794465-147d1f1b2c97?w=440&h=560&fit=crop&q=85",
    key: "tablecloths",
  },
  {
    name: "Подстановочные тарелки",
    image:
      "https://images.unsplash.com/photo-1579541814924-49fef17c5be5?w=440&h=560&fit=crop&q=85",
    key: "chargers",
  },
  {
    name: "Обеденные тарелки",
    image:
      "https://images.unsplash.com/photo-1603199506016-b4a9430f112f?w=440&h=560&fit=crop&q=85",
    key: "dinner-plates",
  },
  {
    name: "Бокалы и стекло",
    image:
      "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=440&h=560&fit=crop&q=85",
    key: "glassware",
  },
  {
    name: "Декор, вазы и композиции",
    image:
      "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=440&h=560&fit=crop&q=85",
    key: "decor",
  },
]

export function Categories() {
  return (
    <section id="catalog" className="scroll-mt-28 md:scroll-mt-32 py-16 md:py-24 bg-secondary/40">
      <div className="max-w-[1400px] mx-auto px-4">
        <p className="text-xs uppercase tracking-luxury text-muted-foreground mb-3">Топ-категории</p>
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light tracking-wide mb-4">
          Каталог Rent Me
        </h2>
        <p className="text-muted-foreground max-w-2xl mb-10 leading-relaxed">
          Ключевые разделы в аренду: комплекты и готовые сервировки, столы и стулья, диваны и лаунж,
          текстиль, посуда, стекло, декор. Выберите направление — откроется чат в WhatsApp с
          заранее подготовленным сообщением; уточним наличие и расчёт под ваше мероприятие.
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-6">
          {categories.map((category, index) => (
            <a
              key={category.key}
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="group block border border-border bg-card text-left shadow-sm hover:shadow-md hover:border-accent transition-all duration-300"
              style={{ animationDelay: `${index * 40}ms` }}
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/92 via-primary/25 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
                  <p className="font-serif text-lg md:text-xl font-light text-primary-foreground leading-snug tracking-wide">
                    {category.name}
                  </p>
                  <p className="mt-2 text-[10px] uppercase tracking-luxury text-primary-foreground/80">
                    Узнать в WhatsApp
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-accent text-accent-foreground px-8 py-4 uppercase text-sm tracking-luxury hover:bg-accent/90 transition-colors"
          >
            <span>Написать в WhatsApp</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
