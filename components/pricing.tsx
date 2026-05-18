import Image from "next/image"
import { whatsappUrl } from "@/lib/site"

const products = [
  {
    name: "Винный бокал, хрусталь",
    price: 1200,
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=200&h=200&fit=crop&q=85",
  },
  {
    name: "Подстановочная тарелка, золото",
    price: 900,
    image: "https://images.unsplash.com/photo-1579541814924-49fef17c5be5?w=200&h=200&fit=crop&q=85",
  },
  {
    name: "Банкетный стул, премиум",
    price: 4500,
    image: "https://images.unsplash.com/photo-1503602642458-232111445657?w=200&h=200&fit=crop&q=85",
  },
  {
    name: "Модульный стол (погонный метр)",
    price: 85000,
    image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=200&h=200&fit=crop&q=85",
  },
  {
    name: "Скатерть премиум",
    price: 3500,
    image: "https://images.unsplash.com/photo-1505932794465-147d1f1b2c97?w=200&h=200&fit=crop&q=85",
  },
  {
    name: "Хайбол для напитков",
    price: 800,
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=200&h=200&fit=crop&q=85",
  },
]

function formatPrice(price: number): string {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " ₸"
}

export function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-28 md:scroll-mt-32 py-16 md:py-24 bg-background">
      <div className="max-w-[1400px] mx-auto px-4">
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light tracking-wide mb-4">
          ПРИМЕРЫ ЦЕН
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
              rel="noopener noreferrer"
              className="group bg-card border border-border hover:border-accent transition-all duration-300 cursor-pointer block"
            >
              <div className="relative h-40 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
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
