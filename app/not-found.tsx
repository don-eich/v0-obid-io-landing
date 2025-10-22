import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Home, Search, Truck, Phone, Mail } from "lucide-react"
import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-obid-primary via-gray-900 to-black text-white">
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
        <div className="max-w-4xl mx-auto text-center">
          {/* Error Code */}
          <div className="mb-8">
            <div className="text-8xl lg:text-9xl font-bold text-obid-accent mb-4">404</div>
            <Badge className="text-lg px-6 py-2 bg-obid-secondary/20 text-obid-secondary border border-obid-secondary/30">
              Página no encontrada
            </Badge>
          </div>

          {/* Main Message */}
          <div className="mb-12">
            <h1 className="text-3xl lg:text-4xl font-bold mb-4">
              ¡Ups! Esta ruta no está en nuestro <span className="text-obid-secondary">mapa</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Parece que tomaste un desvío. No te preocupes, nuestro sistema de navegación te ayudará a volver al camino
              correcto.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button asChild size="lg" className="text-lg px-8 py-4 bg-obid-accent hover:bg-obid-accent/90 rounded-xl">
              <Link href="/">
                <Home className="w-5 h-5 mr-2" />
                Volver al inicio
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-lg px-8 py-4 bg-transparent border-obid-secondary text-obid-secondary hover:bg-obid-secondary hover:text-white rounded-xl"
            >
              <Link href="/#como-funciona">
                <Search className="w-5 h-5 mr-2" />
                Explorar soluciones
              </Link>
            </Button>
          </div>

          {/* Quick Navigation Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <Card className="bg-gradient-to-br from-obid-primary/30 to-obid-primary/10 border-obid-primary/30 backdrop-blur hover:from-obid-primary/40 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-obid-primary/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Truck className="w-6 h-6 text-obid-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2">Nuestra Solución</h3>
                <p className="text-gray-300 text-sm mb-4">Descubre cómo Obid.io transforma la gestión de tu flota</p>
                <Button
                  asChild
                  variant="ghost"
                  size="sm"
                  className="text-obid-primary hover:text-white hover:bg-obid-primary"
                >
                  <Link href="/#como-funciona">Ver más</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-obid-secondary/30 to-obid-secondary/10 border-obid-secondary/30 backdrop-blur hover:from-obid-secondary/40 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-obid-secondary/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Search className="w-6 h-6 text-obid-secondary" />
                </div>
                <h3 className="font-bold text-lg mb-2">Planes y Precios</h3>
                <p className="text-gray-300 text-sm mb-4">Conoce nuestro plan piloto sin inversión inicial</p>
                <Button
                  asChild
                  variant="ghost"
                  size="sm"
                  className="text-obid-secondary hover:text-white hover:bg-obid-secondary"
                >
                  <Link href="/#precios">Ver planes</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-obid-accent/30 to-obid-accent/10 border-obid-accent/30 backdrop-blur hover:from-obid-accent/40 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-obid-accent/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-6 h-6 text-obid-accent" />
                </div>
                <h3 className="font-bold text-lg mb-2">Solicitar Demo</h3>
                <p className="text-gray-300 text-sm mb-4">Agenda una demostración personalizada</p>
                <Button
                  asChild
                  variant="ghost"
                  size="sm"
                  className="text-obid-accent hover:text-white hover:bg-obid-accent"
                >
                  <Link href="/#precios">Contactar</Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Statistics Section */}
          <div className="bg-black/30 rounded-2xl p-8 mb-12 backdrop-blur">
            <h2 className="text-2xl font-bold mb-6">Mientras estás aquí, conoce nuestros resultados</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-obid-accent mb-2">20%</div>
                <div className="text-gray-300">Menos averías</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-obid-secondary mb-2">15%</div>
                <div className="text-gray-300">Ahorro en diésel</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">3min</div>
                <div className="text-gray-300">Instalación</div>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="text-center">
            <p className="text-gray-400 mb-4">¿Necesitas ayuda? Estamos aquí para ti</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center gap-2 text-obid-secondary">
                <Mail className="w-4 h-4" />
                <span>contacto@obid.io</span>
              </div>
              <div className="flex items-center gap-2 text-obid-accent">
                <Phone className="w-4 h-4" />
                <span>Soporte 24/7</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer simplificado */}
      <footer className="border-t border-gray-800 py-8 bg-black/20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-4">
            <div className="text-xl font-bold text-white mb-4">Obid.io</div>
          </div>
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Obid.io. Telemática que transforma tu operación.
          </p>
        </div>
      </footer>
    </div>
  )
}
