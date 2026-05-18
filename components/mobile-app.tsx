import Image from "next/image"
import { whatsappUrl } from "@/lib/site"

export function MobileApp() {
  return (
    <section id="app" className="scroll-mt-28 md:scroll-mt-32 py-16 md:py-24 bg-secondary">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 order-2 md:order-1">
            <div>
              <p className="text-xs uppercase tracking-luxury text-muted-foreground mb-3">
                Планы развития
              </p>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light tracking-wide text-accent mb-4">
                Приложение Rent Me — в разработке.
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Мы работаем над мобильным приложением, которое упростит подбор, заказ и управление
                арендой. Пока вы можете связаться с нами напрямую через WhatsApp.
              </p>
            </div>
            <p className="text-sm text-muted-foreground border-l-2 border-accent pl-4">
              Изображение справа — визуальный концепт, а не экран реального приложения; даты запуска и
              функции будут объявлены отдельно.
            </p>
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-accent text-accent-foreground px-8 py-3.5 uppercase text-sm tracking-luxury hover:bg-accent/90 transition-colors w-fit"
            >
              Написать в WhatsApp
            </a>
          </div>

          <div className="relative h-[400px] md:h-[500px] order-1 md:order-2 border border-border bg-card overflow-hidden">
            <div className="absolute top-3 left-3 z-20 bg-background/95 border border-border px-3 py-1.5 text-[10px] uppercase tracking-luxury text-muted-foreground">
              Концепт · в разработке
            </div>
            <Image
              src="https://images.unsplash.com/photo-1556656793-08538906a9fc?w=900&h=1100&fit=crop&q=85"
              alt="Смартфон — место для будущего приложения Rent Me, продукт ещё в разработке"
              fill
              className="object-contain object-center p-4"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
