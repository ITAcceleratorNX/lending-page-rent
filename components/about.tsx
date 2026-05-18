"use client"

import Image from "next/image"
import { FEATURES } from "@/lib/media"
import { whatsappUrl } from "@/lib/site"

export function About() {
  return (
    <section
      id="about"
      className="scroll-mt-20 md:scroll-mt-24 py-16 md:py-24 bg-background border-y border-border/60"
    >
      <div className="max-w-[1400px] mx-auto px-4">
        <p className="text-xs uppercase tracking-luxury text-muted-foreground mb-3">
          Сервис и доверие
        </p>
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light tracking-wide mb-10 md:mb-14">
          Удобство и сопровождение
        </h2>

        <div
          id="services"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 scroll-mt-20 md:scroll-mt-24"
        >
          {FEATURES.map((item) => (
            <article
              key={item.title}
              className="flex flex-col border border-border bg-card shadow-sm hover:border-accent/70 transition-colors overflow-hidden"
            >
              <div className="relative aspect-[4/3] w-full border-b border-border/80 bg-muted/30">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-serif text-xl font-light text-foreground tracking-wide mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">{item.text}</p>
                <a
                  href={whatsappUrl()}
                  target="_blank"
                  rel="noopener"
                  className="mt-5 text-xs uppercase tracking-luxury text-accent hover:underline w-fit"
                >
                  WhatsApp
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
