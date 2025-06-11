import type { Metadata } from 'next';
import Head from 'next/head';
import './globals.css';

/**
 * Ajuste favicon: se declara como array con type & sizes
 * y se añade un <link rel="icon"> manual como respaldo.
 * Coloca /public/Recursos_v2.png en 32×32 (y 16×16 opcional).
 */
export const metadata: Metadata = {
  title: 'obid.io – Datos Telemáticos para Flotas',
  description:
    'Plataforma data-as-a-service que reduce siniestros y costos operativos en flotas comerciales de Latam.',
  generator: 'v0.dev',
  openGraph: {
    type: 'website',
    url: 'https://obid.io',
    title: 'obid.io – Datos Telemáticos para Flotas',
    description:
      'Plataforma data-as-a-service que reduce siniestros y costos operativos en flotas comerciales de Latam.',
    images: [
      {
        url: '/og-default.png',
        width: 1200,
        height: 630,
        alt: 'OBID hero image',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'obid.io – Datos Telemáticos para Flotas',
    description:
      'Plataforma data-as-a-service que reduce siniestros y costos operativos en flotas comerciales de Latam.',
    images: ['/Recursos_v1.png'],
  },
  
  openGraph: {
    type: 'website',
    url: 'https://obid.io',
    title: 'obid.io – Datos Telemáticos para Flotas',
    description:
      'Plataforma data-as-a-service que reduce siniestros y costos operativos en flotas comerciales de Latam.',
    images: [
      {
        url: 'https://obid.io/Recursos_v1.png', 
        width: 1200,
        height: 630,
        alt: 'obid.io – Datos Telemáticos para Flotas',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['https://obid.io/Recursos_v1.png'],
  },
  icons: {
    icon: [
      { url: '/Recursos_v2.png', type: 'image/png', sizes: '32x32' },
      { url: '/Recursos_v2.png', type: 'image/png', sizes: '16x16' },
    ],
    apple: '/Recursos_v2.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <Head>
        {/* Fallback explícito para navegadores que ignoren metadata.icons */}
        <link rel="icon" href="/Recursos_v2.png" type="image/png" />
      </Head>
      <body className="antialiased text-gray-900 bg-white dark:bg-neutral-950 dark:text-gray-100">
        {children}
      </body>
    </html>
  );
}
