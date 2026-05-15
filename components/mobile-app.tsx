import Image from "next/image"
import { Check } from "lucide-react"
import { whatsappWithText } from "@/lib/site"

const features = [
  "Быстрый заказ",
  "Пуш-уведомления",
  "Отслеживание заказа",
]

export function MobileApp() {
  return (
    <section id="app" className="scroll-mt-28 md:scroll-mt-32 py-16 md:py-24 bg-secondary">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light tracking-wide italic text-accent mb-4">
                GO RENT ВСЕГДА ПОД РУКОЙ
              </h2>
              <p className="text-muted-foreground">
                Заказывайте аренду посуды и декора прямо с телефона
              </p>
            </div>
            
            <div>
              <p className="font-medium mb-4">
                Скидка на первый заказ через приложение!
              </p>
              
              <ul className="space-y-3">
                {features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-muted-foreground">
                    <Check className="w-5 h-5 text-accent" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* App Store Buttons */}
            <div className="flex gap-4">
              <a 
                href={whatsappWithText("Здравствуйте! Пришлите ссылку на приложение в App Store.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-foreground text-background px-6 py-3 hover:opacity-90 transition-opacity"
              >
                <div className="flex items-center gap-3">
                  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-[10px] opacity-80">Загрузить в</div>
                    <div className="text-sm font-medium">App Store</div>
                  </div>
                </div>
              </a>
              <a 
                href={whatsappWithText("Здравствуйте! Пришлите ссылку на приложение в Google Play.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-foreground text-background px-6 py-3 hover:opacity-90 transition-opacity"
              >
                <div className="flex items-center gap-3">
                  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-[10px] opacity-80">Доступно в</div>
                    <div className="text-sm font-medium">Google Play</div>
                  </div>
                </div>
              </a>
            </div>
          </div>
          
          {/* Phone Mockups */}
          <div className="relative h-[400px] md:h-[500px]">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-hwSLrjdR5DqzWr3mN5msgb7RgmE2Cx.png"
              alt="Go Rent мобильное приложение"
              fill
              className="object-contain object-center"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
