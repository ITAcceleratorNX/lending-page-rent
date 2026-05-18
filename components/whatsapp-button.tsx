"use client"

import { MessageCircle } from "lucide-react"
import { whatsappUrl } from "@/lib/site"

export function WhatsAppButton() {
  return (
    <a
      href={whatsappUrl()}
      target="_blank"
      rel="noopener"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-accent text-accent-foreground rounded-full shadow-lg hover:bg-accent/90 hover:scale-110 transition-all"
      aria-label="Связаться через WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
    </a>
  )
}
