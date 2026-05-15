"use client"

import { useState } from "react"
import Image from "next/image"
import { ArrowRight, ChevronRight } from "lucide-react"

const services = [
  {
    title: "Оформите заказ",
    description: "Заказывайте и оплачивайте онлайн 24/7"
  },
  {
    title: "Полный сервис",
    description: "Аренда + доставка + установка"
  },
  {
    title: "Поддержка клиентов",
    description: "Консультация и поддержка"
  },
  {
    title: "10% скидка",
    description: "Для event-профессионалов"
  },
  {
    title: "Эко-подход",
    description: "Экологичный и устойчивый подход к упаковке"
  },
]

export function About() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="about" className="scroll-mt-28 md:scroll-mt-32 py-16 md:py-24 bg-background">
      <div className="max-w-[1400px] mx-auto px-4">
        <span className="text-xs uppercase tracking-luxury text-muted-foreground mb-8 block">
          О нас и нашем сервисе
        </span>
        
        <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
          {/* Left Column - Founder Image */}
          <div className="space-y-8">
            <div className="relative h-[400px] md:h-[500px] overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-5hfnabiIz7xG7pTVKdsA8XnrqYgPTO.png"
                alt="Основатель Go Rent"
                fill
                className="object-cover object-top"
              />
            </div>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Go Rent был основан в 2015 году известным свадебным фотографом Лилией Горлановой, 
                которая также основала свадебное агентство Gorlanova Event.
              </p>
              <p>
                Опираясь на этот обширный опыт, Лилия и её команда сосредоточены на премиальных 
                мероприятиях, обеспечивая клиентам Go Rent исключительно удобный сервис аренды.
              </p>
            </div>
          </div>
          
          {/* Right Column - Company Info */}
          <div className="space-y-8">
            <div>
              <p className="text-lg md:text-xl leading-relaxed text-muted-foreground mb-6">
                Сейчас у Go Rent 4 филиала, и мы являемся лидером среди премиальных арендных компаний в Казахстане.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Наши товары соответствуют тенденциям event-дизайна и помогают вам создавать собственные 
                наборы или выбирать из готовых, созданных нашей командой. Наш обширный выбор помогает 
                экономить деньги и создавать новые наборы для мероприятий любого размера: от небольших 
                частных вечеринок до грандиозных свадеб и гала-ужинов.
              </p>
            </div>
            
            {/* Services Accordion */}
            <div className="space-y-0 border-t border-border scroll-mt-28 md:scroll-mt-32" id="services">
              {services.map((service, index) => (
                <div key={index} className="border-b border-border">
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full py-4 flex items-center justify-between text-left hover:text-accent transition-colors"
                  >
                    <div className="flex items-baseline gap-4">
                      <span className="text-sm uppercase tracking-luxury font-medium">
                        {service.title}:
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {service.description}
                      </span>
                    </div>
                    <ChevronRight className={`w-4 h-4 transition-transform ${openIndex === index ? 'rotate-90' : ''}`} />
                  </button>
                </div>
              ))}
            </div>
            
            <a 
              href="#services"
              className="inline-flex items-center gap-3 border border-border px-6 py-3 text-sm uppercase tracking-luxury hover:border-accent hover:text-accent transition-colors"
            >
              <span>Все услуги</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
