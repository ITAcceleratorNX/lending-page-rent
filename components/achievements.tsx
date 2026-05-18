import Image from "next/image"
import { whatsappUrl, SITE_COMPANY_LEGAL } from "@/lib/site"
import { HERO_MAIN_BANNER } from "@/lib/media"

export function Achievements() {
  return (
    <section id="achievements" className="relative scroll-mt-20 md:scroll-mt-24 py-16 md:py-24">
      <div className="absolute inset-0">
        <Image
          src={HERO_MAIN_BANNER}
          alt="Премиальное оформление мероприятия — Rent Me"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-background/55" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-4">
        <div className="max-w-3xl py-10 md:py-14">
          <p className="text-sm md:text-base uppercase tracking-luxury text-muted-foreground mb-4">
            Rent Me · {SITE_COMPANY_LEGAL}
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light tracking-wide text-accent">
            События любого масштаба — от камерных вечеров до банкетов
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed max-w-xl">
            Сопровождаем заказы: мебель, декор, сервировка и текстиль. Подробности и кейсы — в WhatsApp.
          </p>
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener"
            className="mt-8 inline-flex items-center justify-center bg-accent text-accent-foreground px-8 py-3.5 uppercase text-sm tracking-luxury hover:bg-accent/90 transition-colors"
          >
            Написать в WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
