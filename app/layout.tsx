import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Portal das Feiras 232 - O Futuro da Moda no Agreste",
  description:
    "Boxes e Lojas no Portal das Feiras 232 – Lançamento em Março de 2026. O novo complexo de moda de São Caetano-PE.",
  keywords: "Portal das Feiras 232, boxes, lojas, moda, Agreste, São Caetano, PE, polo têxtil, BR-232",
  openGraph: {
    title: "Portal das Feiras 232 - O Futuro da Moda no Agreste",
    description: "Garante seu espaço no novo complexo de moda do Agreste. Lançamento em Março de 2026.",
    type: "website",
    locale: "pt_BR",
  },
  robots: "index, follow",
  generator: "Portal das Feiras 232",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`font-sans ${inter.variable} ${poppins.variable} antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
