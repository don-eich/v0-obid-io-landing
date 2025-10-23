import Head from 'next/head';

export default function SiteHead({
  title = 'obid.io – Datos Telemáticos para Flotas',
  description = 'Plataforma data‑as‑a‑service que reduce siniestros y costos operativos en flotas comerciales de Latam.',
  url = 'https://obid.io',
  image = 'https://obid.io/public/Recursos_v2.png',
}: {
  title?: string;
  description?: string;
  url?: string;
  image?: string;
}) {
  return (
    <Head>
      {/* SEO básico */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {/* OG / Social */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Favicon */}
      <link rel="icon" href="/public/Recursos_v2.png" sizes="any" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />
    </Head>
  );
}
