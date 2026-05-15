"use client"

import { MapPin, Phone, ShoppingBag, User, Menu, ChevronDown, Search, MessageCircle } from "lucide-react"
import { useState } from "react"

export function TopBar() {
  return (
    <div className="bg-background border-b border-border">
      <div className="max-w-[1400px] mx-auto px-4 py-2 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors">
            <MapPin className="w-4 h-4" />
          </button>
          <button className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors">
            <Phone className="w-4 h-4" />
          </button>
          <button className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <span>Алматы</span>
            <ChevronDown className="w-3.5 h-3.5" />
          </button>
        </div>
        
        <a 
          href="https://wa.me/77585957160" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm tracking-luxury uppercase hover:text-accent transition-colors"
        >
          <MessageCircle className="w-4 h-4" />
          <span className="hidden sm:inline">Свяжитесь с нами в WhatsApp</span>
        </a>
        
        <div className="flex items-center gap-4">
          <button className="text-muted-foreground hover:text-foreground transition-colors">
            <ShoppingBag className="w-5 h-5" />
          </button>
          <button className="text-muted-foreground hover:text-foreground transition-colors">
            <User className="w-5 h-5" />
          </button>
          <button className="text-muted-foreground hover:text-foreground transition-colors">
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  )
}

export function Header() {
  const [searchQuery, setSearchQuery] = useState("")
  
  return (
    <header className="bg-background py-4 sticky top-0 z-50 border-b border-border/50">
      <div className="max-w-[1400px] mx-auto px-4 flex items-center gap-6">
        {/* Logo */}
        <a href="/" className="flex-shrink-0">
          <div className="flex items-center">
            <div className="text-accent">
              <svg width="48" height="40" viewBox="0 0 48 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="16" cy="20" r="12" stroke="currentColor" strokeWidth="2" fill="none"/>
                <circle cx="32" cy="20" r="12" stroke="currentColor" strokeWidth="2" fill="none"/>
              </svg>
            </div>
            <div className="ml-1 flex flex-col leading-none">
              <span className="text-accent font-light text-xs tracking-[0.3em]">GO</span>
              <span className="text-accent font-light text-xs tracking-[0.3em]">RENT</span>
            </div>
          </div>
        </a>
        
        {/* Catalog Button */}
        <button className="flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 uppercase text-sm tracking-luxury hover:bg-accent/90 transition-colors">
          <Menu className="w-4 h-4" />
          <span>Каталог</span>
        </button>
        
        {/* Search Bar */}
        <div className="flex-1 relative">
          <input
            type="text"
            placeholder="Я хочу арендовать..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-transparent border-b border-border py-2 pr-10 text-sm focus:outline-none focus:border-accent transition-colors placeholder:text-muted-foreground"
          />
          <Search className="absolute right-0 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
        </div>
      </div>
    </header>
  )
}
