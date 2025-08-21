import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Obid.io - Telemática para Camiones | Reduce Riesgos y Ahorra Combustible",
  description:
    "Convierte cada kilómetro de tu camión en ahorro real y pólizas justas. Telemática avanzada que reduce averías 20% y ahorra hasta 15% en diésel. Hardware incluido, instalación en minutos.",
  keywords:
    "telemática camiones, GPS camiones, seguimiento flota, ahorro combustible, seguro UBI, Obidio Rank, telemática Latinomérica, gestión flotas",
  authors: [{ name: "Obid.io" }],
  creator: "Obid.io",
  publisher: "Obid.io",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://obid.io",
    siteName: "Obid.io",
    title: "Obid.io - Telemática Inteligente para Camiones en Latinomérica",
    description:
      "Reduce riesgos y costos operativos con nuestra solución de telemática. Instalación en minutos, resultados inmediatos. Hardware incluido sin inversión inicial.",
    images: [
      {
        url: "/logo-horizontal.png",
        width: 1200,
        height: 630,
        alt: "Obid.io - Telemática para Camiones",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@obidio",
    creator: "@obidio",
    title: "Obid.io - Telemática Inteligente para Camiones",
    description:
      "Reduce averías 20% y ahorra hasta 15% en diésel con nuestra telemática avanzada. Hardware incluido, instalación en minutos.",
    images: ["/logo-horizontal.png"],
  },
  alternates: {
    canonical: "https://obid.io",
    languages: {
      "es-ES": "https://obid.io",
      "es-MX": "https://obid.io",
      "es-AR": "https://obid.io",
      "es-CO": "https://obid.io",
    },
  },
  category: "technology",
  classification: "Telemática y Gestión de Flotas",
  generator: "v0.dev",
  applicationName: "Obid.io",
  referrer: "origin-when-cross-origin",
  colorScheme: "light",
  themeColor: "#1E3A5F",
  viewport: "width=device-width, initial-scale=1",
  verification: {
    // Agregar cuando tengas los códigos de verificación
    // google: "código-de-verificación-google",
    // bing: "código-de-verificación-bing",
  },
  manifest: "/manifest.json",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-TZNX7W5P');`,
          }}
        />
        {/* End Google Tag Manager */}

        {/* Additional SEO Meta Tags */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="geo.region" content="LATAM" />
        <meta name="geo.placename" content="Latinomérica" />
        <meta name="target" content="all" />
        <meta name="audience" content="all" />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta httpEquiv="Content-Language" content="es" />

        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Favicon and Icons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Obid.io",
              url: "https://obid.io",
              logo: "https://obid.io/logo-horizontal.png",
              description: "Telemática avanzada para camiones que reduce riesgos y costos operativos en Latinomérica",
              foundingDate: "2024",
              industry: "Telemática y Gestión de Flotas",
              areaServed: {
                "@type": "Place",
                name: "Latinomérica",
              },
              service: {
                "@type": "Service",
                name: "Telemática para Camiones",
                description:
                  "Solución integral de telemática que convierte datos de vehículos en ahorros reales y pólizas de seguro justas",
                provider: {
                  "@type": "Organization",
                  name: "Obid.io",
                },
              },
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "sales",
                availableLanguage: "Spanish",
              },
            }),
          }}
        />

        {/* Website Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Obid.io",
              url: "https://obid.io",
              description: "Telemática avanzada para camiones en Latinomérica",
              inLanguage: "es",
              copyrightYear: "2024",
              copyrightHolder: {
                "@type": "Organization",
                name: "Obid.io",
              },
            }),
          }}
        />
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TZNX7W5P"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        {children}
      </body>
    </html>
  )
}
