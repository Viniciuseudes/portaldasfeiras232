import type React from "react";
import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Suspense } from "react";
import Script from "next/script"; // <-- 1. Import do componente Script do Next.js
import "./globals.css";
import { FloatingWhatsappButton } from "@/components/floating-whatsapp-button";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Portal das Feiras 232 - O Futuro da Moda no Agreste",
  description:
    "Boxes e Lojas no Portal das Feiras 232 – Lançamento em Março de 2026. O novo complexo de moda de São Caetano-PE.",
  keywords:
    "Portal das Feiras 232, boxes, lojas, moda, Agreste, São Caetano, PE, polo têxtil, BR-232",
  openGraph: {
    title: "Portal das Feiras 232 - O Futuro da Moda no Agreste",
    description:
      "Garante seu espaço no novo complexo de moda do Agreste. Lançamento em Março de 2026.",
    type: "website",
    locale: "pt_BR",
  },
  robots: "index, follow",
  generator: "Portal das Feiras 232",

  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`font-sans ${inter.variable} ${poppins.variable} antialiased`}
      >
        {/* 2. Google Tag Manager (noscript) - O mais alto possível no body */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MQ97GRGQ"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        {/* 3. Google Tag Manager (Script) - Carregamento otimizado */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-MQ97GRGQ');
            `,
          }}
        />

        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
        <FloatingWhatsappButton />
      </body>
    </html>
  );
}
