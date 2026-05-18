import type { Metadata } from 'next'
import { Cormorant_Garamond, Manrope } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const cormorant = Cormorant_Garamond({ 
  subsets: ["latin", "cyrillic"],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-serif'
})

const manrope = Manrope({ 
  subsets: ["latin", "cyrillic"],
  weight: ['300', '400', '500', '600'],
  variable: '--font-sans'
})

export const metadata: Metadata = {
  title: "Rent Me | Аренда мебели, декора и сервировки для мероприятий в Алматы",
  description:
    "Rent Me — каталог аренды мебели, декора, сервировки, текстиля и решений для событий в Алматы. Оператор каталога: TMK Limited. WhatsApp: +7 747 907 16 22.",
  keywords: [
    "Rent Me",
    "TMK Limited",
    "аренда мебели Алматы",
    "аренда декора мероприятие",
    "сервировка в аренду",
    "каталог аренды мебели",
    "Алматы",
  ],
  openGraph: {
    siteName: "Rent Me",
    title: "Rent Me — аренда для мероприятий в Алматы",
    description:
      "Мебель, декор, сервировка, текстиль и комплекты для событий. TMK Limited. Консультация в WhatsApp.",
    locale: "ru_KZ",
    type: "website",
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
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
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
