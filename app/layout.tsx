import type { Metadata } from 'next'
import './globals.css'
import SiteHead from '@/components/ui/SiteHead';

export const metadata = { /* opcional, si usas next/metadata */ };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <SiteHead />
        {children}
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: 'v0 App',
  description: 'Created with v0',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
