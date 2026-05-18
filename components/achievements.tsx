import Image from "next/image"
import { whatsappUrl, SITE_COMPANY_LEGAL } from "@/lib/site"

export function Achievements() {
  return (
    <section id="achievements" className="relative scroll-mt-28 md:scroll-mt-32 py-16 md:py-24">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1600&h=900&fit=crop&q=85"
          alt="Оформление зала для мероприятия — Rent Me"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-background/50" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-4">
        <div className="max-w-3xl py-12 md:py-16">
      <p className="text-sm md:text-base uppercase tracking-luxury text-muted-foreground mb-4">
        Rent Me · {SITE_COMPANY_LEGAL}
      </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light tracking-wide text-accent">
            ТЫСЯЧИ ОФОРМЛЕННЫХ СОБЫТИЙ — ОТ КАМЕРНЫХ ВЕЧЕРОВ ДО БАНКЕТОВ
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed max-w-xl">
            Мы сопровождаем заказы под ключ: от подбора мебели и декора до сервировки и текстиля. Точные
            цифры по проектам и кейсы — по запросу в WhatsApp.
          </p>
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center justify-center bg-accent text-accent-foreground px-8 py-3.5 uppercase text-sm tracking-luxury hover:bg-accent/90 transition-colors"
          >
            Написать в WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
