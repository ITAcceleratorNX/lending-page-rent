import type { Metadata } from "next"
import { Cormorant_Garamond, Manrope } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const cormorant = Cormorant_Garamond({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-serif",
})

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
})

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL

export const metadata: Metadata = {
  ...(siteUrl ? { metadataBase: new URL(siteUrl) } : {}),
  title: "Rent Me — Аренда мебели и декора для мероприятий в Алматы",
  description:
    "Rent Me — аренда премиум-мебели, декора, сервировки и текстиля для свадеб, банкетов и корпоративных мероприятий в Алматы. Заказ через WhatsApp.",
  keywords: [
    "Rent Me",
    "TMK Limited",
    "аренда мебели Алматы",
    "аренда декора мероприятие",
    "сервировка в аренду",
    "Алматы",
    "+7 747 907 16 22",
  ],
  icons: {
    icon: [{ url: "/images/favicon.png", type: "image/png" }],
  },
  openGraph: {
    siteName: "Rent Me",
    title: "Rent Me — Аренда мебели и декора в Алматы",
    description: "Премиум-аренда мебели, декора и сервировки для мероприятий.",
    locale: "ru_KZ",
    type: "website",
    images: [
      {
        url: "/images/hero/hero-main-banner.png",
        width: 1200,
        height: 630,
        alt: "Аренда мебели и декора для мероприятий — Rent Me Алматы",
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className={`${cormorant.variable} ${manrope.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
