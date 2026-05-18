import Image from "next/image"
import { whatsappUrl } from "@/lib/site"
import { APP_MOCKUP_CONCEPT } from "@/lib/media"

export function MobileApp() {
  return (
    <section id="app" className="scroll-mt-20 md:scroll-mt-24 py-16 md:py-24 bg-secondary">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="space-y-8 order-2 md:order-1">
            <div>
              <p className="text-xs uppercase tracking-luxury text-muted-foreground mb-3">
                В разработке
              </p>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light tracking-wide text-accent mb-4">
                Приложение Rent Me — в разработке
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Мы работаем над мобильным приложением, которое упростит подбор, заказ и управление
                арендой. Пока вы можете связаться с нами напрямую через WhatsApp.
              </p>
            </div>
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center justify-center bg-accent text-accent-foreground px-8 py-3.5 uppercase text-sm tracking-luxury hover:bg-accent/90 transition-colors w-fit"
            >
              Написать в WhatsApp
            </a>
          </div>

          <div className="relative h-[min(80vw,420px)] md:h-[480px] order-1 md:order-2 border border-border bg-card overflow-hidden">
            <div className="absolute top-3 left-3 z-20 bg-background/95 border border-border px-3 py-1.5 text-[10px] uppercase tracking-luxury text-muted-foreground">
              Концепт интерфейса
            </div>
            <Image
              src={APP_MOCKUP_CONCEPT}
              alt="Концепт мобильного приложения Rent Me — продукт в разработке"
              fill
              quality={74}
              className="object-contain object-center p-4 md:p-6"
              sizes="(max-width: 768px) 100vw, 640px"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
