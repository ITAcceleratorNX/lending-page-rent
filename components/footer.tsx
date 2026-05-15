"use client"

import { MapPin, Phone, ArrowUp } from "lucide-react"

const navLinks = [
  { name: "Каталог", href: "/catalog" },
  { name: "Новинки", href: "/new" },
  { name: "Услуги", href: "/services" },
  { name: "Галерея", href: "/gallery" },
  { name: "Готовые решения", href: "/solutions" },
  { name: "Реферальная программа", href: "/referral" },
  { name: "Контакты", href: "/contacts" },
]

export function Footer() {
  return (
    <footer className="py-16 md:py-24 bg-background border-t border-border">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
          {/* Logo and Company Info */}
          <div className="space-y-8">
            {/* Logo */}
            <div className="flex items-center">
              <div className="text-accent">
                <svg width="60" height="50" viewBox="0 0 60 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="20" cy="25" r="15" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <circle cx="40" cy="25" r="15" stroke="currentColor" strokeWidth="2" fill="none"/>
                </svg>
              </div>
              <div className="ml-2 flex flex-col leading-none">
                <span className="text-accent font-light text-sm tracking-[0.3em]">RENT</span>
                <span className="text-accent font-light text-sm tracking-[0.3em]">ME</span>
              </div>
            </div>
            
            <div className="text-sm text-muted-foreground">
              <p>© 2026</p>
              <p>Все права защищены</p>
              <p className="mt-4">Powered by GRCore</p>
            </div>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="font-serif text-xl md:text-2xl font-light tracking-wide">
              ТОЧКА ВЫДАЧИ ЗАКАЗОВ GO RENT
            </h3>
            
            <p className="text-sm text-muted-foreground">
              Go Rent FZCO, TIN: 104148784200003
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <div className="text-sm text-muted-foreground">
                  <p>Алматы — Алмалинский район</p>
                  <p>ул. Жибек Жолы 1 - 17 10D</p>
                  <p>Блок D, Склад S01</p>
                  <p className="mt-2">Каждый день с 10:00 до 18:00</p>
                  <p>Праздники: без выходных</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent" />
                <div>
                  <a href="tel:+77585957160" className="text-accent hover:underline">
                    +7 758 595 71 60
                  </a>
                  <p className="text-xs text-muted-foreground">Горячая линия</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Navigation and Social */}
          <div className="space-y-8">
            <nav className="space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-sm uppercase tracking-luxury text-muted-foreground hover:text-accent transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>
            
            {/* App Store Badges */}
            <div className="flex gap-3">
              <a href="#" className="inline-block bg-foreground text-background px-4 py-2 text-xs hover:opacity-90 transition-opacity">
                <div className="flex items-center gap-2">
                  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  <span>App Store</span>
                </div>
              </a>
              <a href="#" className="inline-block bg-foreground text-background px-4 py-2 text-xs hover:opacity-90 transition-opacity">
                <div className="flex items-center gap-2">
                  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                  </svg>
                  <span>Google Play</span>
                </div>
              </a>
            </div>
            
            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <a href="#" className="text-foreground hover:text-accent transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="#" className="text-foreground hover:text-accent transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295l.213-3.054 5.56-5.022c.242-.213-.054-.333-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        {/* Back to Top */}
        <div className="flex justify-end mt-12">
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 text-xs uppercase tracking-luxury text-muted-foreground hover:text-accent transition-colors"
          >
            <span>Наверх</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  )
}
