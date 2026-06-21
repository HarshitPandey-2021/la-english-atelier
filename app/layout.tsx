'use client'

import { fredoka, jakarta } from '@/lib/fonts'
import { usePathname } from 'next/navigation'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  // Don't show the public navbar/footer on admin or login pages
  const hideNavAndFooter = pathname?.startsWith('/admin') || pathname?.startsWith('/login')

  return (
    <html
      lang="en"
      className={`${fredoka.variable} ${jakarta.variable}`}
      suppressHydrationWarning
      data-scroll-behavior="smooth"
    >
       <head>
        <link rel="icon" href="/logo.png" />
      </head>
      <body className={jakarta.className} suppressHydrationWarning>
        {!hideNavAndFooter && <Navbar />}
        {children}
        {!hideNavAndFooter && <Footer />}
      </body>
    </html>
  )
}