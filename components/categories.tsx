import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { CATALOG_CATEGORIES, categoryAlt } from "@/lib/media"
import { getProductCountByCategory } from "@/lib/catalog"
import { whatsappUrl } from "@/lib/site"

export function Categories() {
  const counts = getProductCountByCategory()

  return (
    <section id="catalog" className="scroll-mt-20 md:scroll-mt-24 py-16 md:py-24 bg-secondary/40">
      <div className="max-w-[1400px] mx-auto px-4">
        <p className="text-xs uppercase tracking-luxury text-muted-foreground mb-3">Топ-категории</p>
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light tracking-wide mb-4">
          Каталог Rent Me
        </h2>
        <p className="text-muted-foreground max-w-2xl mb-10 leading-relaxed">
          Выберите раздел каталога — откроется ассортимент с ценами. По клику на товар можно
          посмотреть фото и написать нам в WhatsApp.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-6">
          {CATALOG_CATEGORIES.map((category, index) => (
            <Link
              key={category.key}
              href={`/catalog/${category.key}`}
              className="group block border border-border bg-card text-left shadow-sm hover:shadow-md hover:border-accent transition-all duration-300"
              style={{ animationDelay: `${index * 40}ms` }}
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={category.image}
                  alt={categoryAlt(category.name)}
                  fill
                  quality={88}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1400px) 33vw, 320px"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/92 via-primary/25 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
                  <p className="font-serif text-lg md:text-xl font-light text-primary-foreground leading-snug tracking-wide">
                    {category.name}
                  </p>
                  <p className="mt-2 text-[10px] uppercase tracking-luxury text-primary-foreground/85">
                    {counts[category.key]} позиций
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 border border-accent text-accent px-8 py-4 uppercase text-sm tracking-luxury hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            <span>Написать в WhatsApp</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
