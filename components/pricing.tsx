import Image from "next/image"
import { whatsappUrl } from "@/lib/site"
import { CATALOG_CATEGORIES } from "@/lib/media"

const products = [
  {
    name: "Винный бокал, хрусталь",
    price: 1200,
    image: CATALOG_CATEGORIES[10].image,
  },
  {
    name: "Подстановочная тарелка, золото",
    price: 900,
    image: CATALOG_CATEGORIES[8].image,
  },
  {
    name: "Банкетный стул, премиум",
    price: 4500,
    image: CATALOG_CATEGORIES[4].image,
  },
  {
    name: "Модульный стол (погонный метр)",
    price: 85000,
    image: CATALOG_CATEGORIES[2].image,
  },
  {
    name: "Скатерть премиум",
    price: 3500,
    image: CATALOG_CATEGORIES[7].image,
  },
  {
    name: "Хайбол для напитков",
    price: 800,
    image: CATALOG_CATEGORIES[10].image,
  },
]

function formatPrice(price: number): string {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " ₸"
}

export function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-20 md:scroll-mt-24 py-16 md:py-24 bg-background">
      <div className="max-w-[1400px] mx-auto px-4">
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light tracking-wide mb-4">
          Примеры цен
        </h2>
        <p className="text-muted-foreground mb-12 max-w-2xl">
          Ориентиры по популярным позициям; итоговая стоимость зависит от срока аренды, объёма и
          логистики. Актуальный прайс и наличие — в WhatsApp.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {products.map((product) => (
            <a
              key={product.name}
              href={whatsappUrl()}
              target="_blank"
              rel="noopener"
              className="group bg-card border border-border hover:border-accent transition-all duration-300 cursor-pointer block"
            >
              <div className="relative h-40 overflow-hidden">
                <Image
                  src={product.image}
                  alt={`${product.name} — Rent Me Алматы`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, 16vw"
                />
              </div>
              <div className="p-4">
                <h3 className="text-sm font-medium mb-2 line-clamp-2">{product.name}</h3>
                <p className="text-accent font-medium">
                  от {formatPrice(product.price)}
                  <span className="text-xs text-muted-foreground">/шт</span>
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
