import Image from "next/image"

export function Achievements() {
  return (
    <section className="relative py-16 md:py-24">
      {/* Background with overlay */}
      <div className="absolute inset-0">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-gooqq0lzP4OpLLvhN7oKJPLq28R3I8.png"
          alt="Элегантная сервировка стола"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-background/40" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-4">
        <div className="max-w-3xl py-12 md:py-16">
          <p className="text-sm md:text-base uppercase tracking-luxury text-muted-foreground mb-4">
            С момента основания компании мы участвовали в оформлении
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light tracking-wide text-accent">
            БОЛЕЕ 14 000 ЧАСТНЫХ И КОРПОРАТИВНЫХ ПРОЕКТОВ
          </h2>
        </div>
      </div>
    </section>
  )
}
