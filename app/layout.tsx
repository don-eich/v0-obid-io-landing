import type { Metadata } from 'next';
import './globals.css';

/**
 * Configuración SEO/OG centralizada — Next generará automáticamente las <meta> tags.
 * Ajusta openGraph.images y icons según tus assets en /public.
 */
export const metadata: Metadata = {
  title: 'obid.io – Datos Telemáticos para Flotas',
  description:
    'Plataforma data‑as‑a‑service que reduce siniestros y costos operativos en flotas comerciales de Latam.',
  generator: 'v0.dev',
  openGraph: {
    type: 'website',
    url: 'https://obid.io',
    title: 'obid.io – Datos Telemáticos para Flotas',
    description:
      'Plataforma data‑as‑a‑service que reduce siniestros y costos operativos en flotas comerciales de Latam.',
    images: [
      {
        url: '/public/Recursos_v2.png',
        width: 1200,
        height: 630,
        alt: 'obid.io hero image',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'obid.io – Datos Telemáticos para Flotas',
    description:
      'Plataforma data‑as‑a‑service que reduce siniestros y costos operativos en flotas comerciales de Latam.',
    images: ['/public/Recursos_v2.png'],
  },
  icons: {
    icon: '/public/Recursos_v2.png',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="antialiased text-gray-900 bg-white dark:bg-neutral-950 dark:text-gray-100">
        {children}
      </body>
    </html>
  );
}

