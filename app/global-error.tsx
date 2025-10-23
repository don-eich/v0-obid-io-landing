"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { RefreshCw, Home, AlertTriangle } from "lucide-react"
import Link from "next/link"
import { useEffect } from "react"

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Global error:", error)
  }, [error])

  return (
    <html lang="es">
      <body>
        <div className="min-h-screen bg-gradient-to-br from-red-900 via-gray-900 to-black text-white">
          {/* Header simplificado */}
          <header className="border-b border-gray-800 bg-black/20 backdrop-blur">
            <div className="container mx-auto px-4 h-16 flex items-center">
              <Link href="/" className="flex items-center">
                <div className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Obid.io
                </div>
              </Link>
            </div>
          </header>

          <div className="container mx-auto px-4 py-20">
            <div className="max-w-3xl mx-auto text-center">
              {/* Error Icon */}
              <div className="mb-8">
                <div className="w-24 h-24 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <AlertTriangle className="w-12 h-12 text-red-400" />
                </div>
                <Badge className="text-lg px-6 py-2 bg-red-500/20 text-red-400 border border-red-500/30">
                  Error del sistema
                </Badge>
              </div>

              {/* Main Message */}
              <div className="mb-12">
                <h1 className="text-3xl lg:text-4xl font-bold mb-4">
                  Algo salió mal en nuestro <span className="text-red-400">sistema</span>
                </h1>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-6">
                  Nuestro equipo técnico ha sido notificado automáticamente. Mientras tanto, puedes intentar recargar la
                  página o volver al inicio.
                </p>
                {process.env.NODE_ENV === "development" && (
                  <Card className="bg-gray-800/50 border-gray-700 text-left max-w-2xl mx-auto">
                    <CardContent className="p-4">
                      <p className="text-sm text-gray-400 mb-2">Error técnico:</p>
                      <code className="text-xs text-red-300 break-all">{error.message}</code>
                    </CardContent>
                  </Card>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                <Button onClick={reset} size="lg" className="text-lg px-8 py-4 bg-red-600 hover:bg-red-700 rounded-xl">
                  <RefreshCw className="w-5 h-5 mr-2" />
                  Intentar de nuevo
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-4 bg-transparent border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white rounded-xl"
                >
                  <Link href="/">
                    <Home className="w-5 h-5 mr-2" />
                    Volver al inicio
                  </Link>
                </Button>
              </div>

              {/* Contact Information */}
              <div className="text-center">
                <p className="text-gray-400 mb-4">Si el problema persiste, contáctanos</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <span className="text-obid-secondary">contacto@obid.io</span>
                  <span className="text-obid-accent">Soporte técnico 24/7</span>
                </div>
              </div>
            </div>
          </div>

          {/* Footer simplificado */}
          <footer className="border-t border-gray-800 py-8 bg-black/20">
            <div className="container mx-auto px-4 text-center">
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} Obid.io. Telemática que transforma tu operación.
              </p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}
