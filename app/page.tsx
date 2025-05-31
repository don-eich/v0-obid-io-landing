import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Truck, Zap, Shield, BarChart3, Clock, DollarSign, Wrench, ArrowRight, Cloud } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import LeadForm from "@/components/ui/LeadForm"
import LeadFormModal from "@/components/ui/LeadFormModal";


export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center">
            <Image src="/logo-horizontal.png" alt="Obid.io" width={120} height={40} className="h-8 w-auto" />
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="#como-funciona" className="text-gray-600 hover:text-obid-primary transition-colors">
              Cómo funciona
            </Link>
            <Link href="#precios" className="text-gray-600 hover:text-obid-primary transition-colors">
              Precios
            </Link>
            <LeadFormModal trigger={<Button
              variant="outline"
              size="sm"
              className="border-obid-primary text-obid-primary hover:bg-obid-primary hover:text-white"
            >
              Solicitar demo
            </Button>
            } />
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-obid-primary via-gray-900 to-black text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-obid-secondary/10 to-obid-accent/10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Datos telemáticos, <span className="text-obid-secondary">riesgo cero</span>.
          </h1>
          <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Convertimos cada kilómetro de tu camión en ahorro real y pólizas justas.
          </p>
          <LeadFormModal trigger={<Button size="lg" className="text-lg px-8 py-4 bg-obid-accent hover:bg-obid-accent/90 text-white rounded-xl">
            👉 Quiero mi piloto
          </Button>
          } />
        </div>
      </section>

      {/* Pain Points + Opportunity */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">¿Por qué ahora?</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="bg-gradient-to-br from-red-500/30 to-red-600/30 border-red-500/30 backdrop-blur">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-red-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <DollarSign className="w-8 h-8 text-red-400" />
                </div>
                <p className="text-gray-900 text-lg">
                  <span className="font-bold text-red-500 text-2xl">USD 8,000 M</span>
                  <br />
                  se pierden cada año en Latam por siniestros y averías mal gestionadas.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-orange-500/30 to-orange-600/30 border-orange-500/30 backdrop-blur">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-orange-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <BarChart3 className="w-8 h-8 text-orange-400" />
                </div>
                <p className="text-gray-900 text-lg">
                  Solo <span className="font-bold text-orange-500 text-2xl">3 de cada 10</span>
                  <br />
                  empresas de flotas comparte datos con su aseguradora.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-yellow-500/30 to-yellow-600/30 border-yellow-500/30 backdrop-blur">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-yellow-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Truck className="w-8 h-8 text-yellow-400" />
                </div>

                <p className="text-gray-900 text-lg">
                  Más de <span className="font-bold text-yellow-500 text-2xl">3 millones</span>
                  <br />
                  de camiones circulan sin un score de conducción.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center">
            <LeadFormModal trigger={<Badge className="text-lg px-8 py-3 bg-obid-secondary text-white rounded-xl">
              Solicita tu demo
            </Badge>
            } />
          </div>
        </div>
      </section>

      {/* Statistics Section - Inspired by the circular stats reference */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Resultados que <span className="text-obid-accent">transforman</span> tu operación
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Nuestros clientes experimentan mejoras inmediatas en eficiencia y reducción de costos
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-48 h-48 mx-auto mb-6 rounded-full border-4 border-obid-accent/30 flex items-center justify-center bg-gradient-to-br from-obid-accent/10 to-obid-accent/5">
                <div className="text-center">
                  <div className="text-5xl font-bold text-obid-accent mb-2">20%</div>
                  <div className="text-gray-300 text-sm">Menos averías</div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="w-48 h-48 mx-auto mb-6 rounded-full border-4 border-obid-secondary/30 flex items-center justify-center bg-gradient-to-br from-obid-secondary/10 to-obid-secondary/5">
                <div className="text-center">
                  <div className="text-5xl font-bold text-obid-secondary mb-2">15%</div>
                  <div className="text-gray-300 text-sm">Ahorro en combustible</div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="w-48 h-48 mx-auto mb-6 rounded-full border-4 border-green-400/30 flex items-center justify-center bg-gradient-to-br from-green-400/10 to-green-400/5">
                <div className="text-center">
                  <div className="text-5xl font-bold text-green-400 mb-2">3min</div>
                  <div className="text-gray-300 text-sm">Instalación</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 bg-gradient-to-br from-obid-primary to-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-8">Nuestra propuesta de valor</h2>
            <p className="text-lg text-gray-200 leading-relaxed">
              Instalamos nuestro obidio, leemos la telemática de tu camión, subimos los datos a la nube y los convertimos en
              un <span className="font-semibold text-obid-secondary">Obidio Rank</span>: un indicador claro de riesgo,
              mantenimiento y eficiencia que tu aseguradora y tu equipo operativo pueden usar desde el primer día.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-gradient-to-br from-green-500/20 to-green-600/20 border-green-500/30 backdrop-blur">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center">
                    <Wrench className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-green-600 mb-2">–20% averías</h3>
                    <p className="text-gray-900">al anticipar fallas de frenos, suspensiones y sobrecarga.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-obid-secondary/20 to-obid-secondary/30 border-obid-secondary/30 backdrop-blur">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-obid-secondary/20 rounded-xl flex items-center justify-center">
                    <Zap className="w-6 h-6 text-obid-secondary" />
                  </div>
                  <div>

                    <h3 className="font-bold text-xl text-obid-secondary mb-2">Hasta 15% ahorro en combustible</h3>
                    <p className="text-gray-900">corrigiendo hábitos críticos.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 border-purple-500/30 backdrop-blur">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center">
                    <Shield className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-purple-600 mb-2">Primas UBI</h3>
                    <p className="text-gray-900">paga seguro según cómo conduces, no según un promedio.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-obid-accent/20 to-obid-accent/30 border-obid-accent/30 backdrop-blur">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-obid-accent/20 rounded-xl flex items-center justify-center">
                    <Clock className="w-6 h-6 text-obid-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-obid-accent mb-2">Instalación en minutos</h3>
                    <p className="text-gray-900">sin talleres, sin cables.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How it Works - Inspired by the 3-step process reference */}
      <section id="como-funciona" className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">¿Cómo funciona?</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Step 1 */}
            <div className="text-center relative">
              <div className="w-20 h-20 bg-gradient-to-br from-obid-accent to-obid-accent/80 rounded-2xl flex items-center justify-center mx-auto mb-6 relative">
                <span className="text-2xl font-bold text-white">1</span>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-obid-accent rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold text-white">1</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">Conecta</h3>
              <p className="text-gray-300 text-lg">Enchufamos el obidio al puerto OBD de tu camión.</p>
              {/* Arrow */}
              <div className="hidden md:block absolute top-10 -right-4 text-obid-accent">
                <ArrowRight className="w-8 h-8" />
              </div>
            </div>

            {/* Step 2 */}
            <div className="text-center relative">
              <div className="w-20 h-20 bg-gradient-to-br from-obid-secondary to-obid-secondary/80 rounded-2xl flex items-center justify-center mx-auto mb-6 relative">
                <Cloud className="w-8 h-8 text-white" />
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-obid-accent rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold text-white">2</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">Conduce</h3>
              <p className="text-gray-300 text-lg">
                El dispositivo detecta frenados bruscos, consumo, tiempos muertos y sube todo vía red celular.
              </p>
              {/* Arrow */}
              <div className="hidden md:block absolute top-10 -right-4 text-obid-accent">
                <ArrowRight className="w-8 h-8" />
              </div>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-obid-primary to-obid-primary/80 rounded-2xl flex items-center justify-center mx-auto mb-6 relative">
                <BarChart3 className="w-8 h-8 text-white" />
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-obid-accent rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold text-white">3</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">Decide</h3>
              <p className="text-gray-300 text-lg">
                Mostramos en tu panel alertas y ahorros; tu aseguradora recibe un score certificado para ajustar la prima.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="precios" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Planes y precios</h2>
          </div>
          <div className="max-w-2xl mx-auto">
            <Card className="border-2 border-obid-secondary/30 shadow-2xl bg-white">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <Badge className="mb-4 bg-obid-secondary text-white px-4 py-1">Plan piloto</Badge>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">Obidio Starter</h3>
                  <div className="text-2xl font-bold text-obid-primary mb-2">Escribinos</div>
                </div>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-obid-secondary" />
                    <span className="text-gray-700 text-lg">Dispositivo Obidio</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-obid-secondary" />
                    <span className="text-gray-700 text-lg">Obidio Rank</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-obid-secondary" />
                    <span className="text-gray-700 text-lg">Panel web + API</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-obid-secondary" />
                    <span className="text-gray-700 text-lg">Soporte remoto 24/7</span>
                  </div>
                </div>
                <div className="text-center">
                  <Badge variant="secondary" className="mb-6 bg-green-100 text-green-800 px-4 py-2">
                    Hardware incluido, sin inversión inicial
                  </Badge>
                  <LeadFormModal trigger={<Button className="w-full bg-obid-accent hover:bg-obid-accent/90 text-white py-3 text-lg rounded-xl">
                    Comenzar ahora
                  </Button>
                  } />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-obid-primary via-gray-900 to-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-8">
            Conecta tus camiones <span className="text-obid-accent">este trimestre</span>.
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <LeadFormModal trigger={<Button size="lg" className="text-lg px-8 py-4 bg-obid-accent hover:bg-obid-accent/90 rounded-xl">
              Iniciar piloto
            </Button>
            } />
            <LeadFormModal trigger={<Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-4 bg-transparent border-obid-secondary text-obid-secondary hover:bg-obid-secondary hover:text-white rounded-xl"
            >
              Solicitar demo
            </Button>
            } />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-6">
              <Image
                src="/logo-horizontal.png"
                alt="Obid.io"
                width={150}
                height={50}
                className="h-10 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed text-lg">
              Obid.io nació para que ninguna empresa pague por riesgos que puede evitar. Con hardware propio y analítica
              local, ponemos la telemática pesada al alcance de toda flota latinoamericana.
            </p>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Obid.io. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
