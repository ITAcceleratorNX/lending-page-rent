import { Header } from "@/components/header"
import { HeroSlider } from "@/components/hero-slider"
import { About } from "@/components/about"
import { Categories } from "@/components/categories"
import { Gallery } from "@/components/gallery"
import { Achievements } from "@/components/achievements"
import { Pricing } from "@/components/pricing"
import { MobileApp } from "@/components/mobile-app"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function HomePage() {
  return (
    <main id="top" className="min-h-screen scroll-smooth">
      <Header />
      <HeroSlider />
      <About />
      <Categories />
      <Gallery />
      <Achievements />
      <Pricing />
      <MobileApp />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
