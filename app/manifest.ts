import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Obid.io - Telemática para Camiones",
    short_name: "Obid.io",
    description: "Telemática avanzada que reduce riesgos y costos operativos para flotas de camiones en Latinomérica",
    start_url: "/",
    display: "standalone",
    background_color: "#1E3A5F",
    theme_color: "#1E3A5F",
    orientation: "portrait-primary",
    scope: "/",
    lang: "es",
    categories: ["business", "productivity", "utilities"],
    icons: [
      {
        src: "/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
        purpose: "any",
      },
    ],
  }
}
