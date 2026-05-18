"use client"

import Image from "next/image"
import { ArrowRight, Headphones, LayoutGrid, MessageCircle, PackageSearch } from "lucide-react"
import { whatsappUrl, SITE_COMPANY_LEGAL, SITE_CITY } from "@/lib/site"

const pillars = [
  {
    title: "Удобный заказ",
    text: "Заявка и уточнения в WhatsApp — один номер, без лишних звонков и форм.",
    icon: MessageCircle,
  },
  {
    title: "Помощь в подборе",
    text: "Подскажем сочетания мебели, декора и сервировки под вашу площадку и сценарий.",
    icon: PackageSearch,
  },
  {
    title: "Широкий ассортимент",
    text: "Мебель, текстиль, посуда, стекло и декор — от единичных позиций до комплектов.",
    icon: LayoutGrid,
  },
  {
    title: "Сервис и сопровождение",
    text: "Логистика и работа на площадке — по объёму заказа и по договорённости.",
    icon: Headphones,
  },
] as const

export function About() {
  return (
    <section id="about" className="scroll-mt-28 md:scroll-mt-32 py-16 md:py-24 bg-background">
      <div className="max-w-[1400px] mx-auto px-4">
        <p className="text-xs uppercase tracking-luxury text-muted-foreground mb-3">
          Сервис и преимущества
        </p>
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light tracking-wide mb-6">
          Почему выбирают Rent Me
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="space-y-6">
            <div className="relative h-[380px] md:h-[480px] overflow-hidden border border-border bg-card">
              <Image
                src="https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=1000&h=1200&fit=crop&q=85"
                alt="Сервировка и декор для мероприятия, Rent Me"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="space-y-4 text-muted-foreground leading-relaxed text-sm md:text-base">
              <p>
                <strong className="text-foreground font-medium">Rent Me</strong> — каталог аренды
                мебели, декора, сервировки и текстиля для мероприятий в {SITE_CITY}. Для тех, кому
                нужен цельный образ площадки без покупки и хранения инвентаря.
              </p>
              <p>
                Оператор каталога —{" "}
                <strong className="text-foreground font-medium">{SITE_COMPANY_LEGAL}</strong>.
                Работаем с частными и корпоративными событиями: от камерных ужинов до банкетов.
              </p>
            </div>
          </div>

          <div id="services" className="scroll-mt-28 md:scroll-mt-32 space-y-10">
            <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
              Соберём комплектацию под бюджет и стиль: актуальные позиции и расчёт — в переписке
              WhatsApp.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {pillars.map(({ title, text, icon: Icon }) => (
                <div
                  key={title}
                  className="border border-border bg-card p-5 md:p-6 flex flex-col gap-3 hover:border-accent/80 transition-colors"
                >
                  <Icon className="w-6 h-6 text-accent shrink-0" strokeWidth={1.5} />
                  <div>
                    <h3 className="text-sm uppercase tracking-luxury font-medium text-foreground mb-2">
                      {title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 border border-border px-6 py-3 text-sm uppercase tracking-luxury hover:border-accent hover:text-accent transition-colors"
            >
              <span>Обсудить в WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
