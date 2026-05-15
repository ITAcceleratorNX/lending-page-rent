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
  title: 'Go Rent | Премиум-аренда декора для мероприятий в Алматы',
  description: 'Аренда посуды, мебели и декора для свадеб, гала-ужинов и корпоративных мероприятий. Более 14 000 успешных проектов.',
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
