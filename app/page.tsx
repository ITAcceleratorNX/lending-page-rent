import { TopBar, Header } from "@/components/header"
import { HeroSlider } from "@/components/hero-slider"
import { Categories } from "@/components/categories"
import { Gallery } from "@/components/gallery"
import { About } from "@/components/about"
import { Achievements } from "@/components/achievements"
import { Pricing } from "@/components/pricing"
import { MobileApp } from "@/components/mobile-app"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <TopBar />
      <Header />
      <HeroSlider />
      <Categories />
      <Gallery />
      <About />
      <Achievements />
      <Pricing />
      <MobileApp />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
