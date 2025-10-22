import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Shield,
  TrendingDown,
  AlertTriangle,
  Brain,
  Activity,
  Gauge,
  Truck,
  MapPin,
  Zap,
  BarChart3,
  CheckCircle2,
  Target,
  Users,
  Building2,
  ArrowRight,
  Sparkles,
} from "lucide-react"
import Link from "next/link"
import { DashboardPreview } from "@/components/dashboard-preview"
import { RiskScoreGauge } from "@/components/risk-score-gauge"
import { VehicleStatusCard } from "@/components/vehicle-status-card"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Obid.io
            </div>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="#solucion" className="text-muted-foreground hover:text-primary transition-colors">
              Solución
            </Link>
            <Link href="#tecnologia" className="text-muted-foreground hover:text-primary transition-colors">
              Tecnología
            </Link>
            <Link href="#beneficios" className="text-muted-foreground hover:text-primary transition-colors">
              Beneficios
            </Link>
            <Button className="bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:opacity-90">
              Solicitar Demo
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-light to-secondary opacity-95"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center text-primary-foreground max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">Datos telemáticos. Riesgo cero.</h1>
            <p className="text-xl lg:text-2xl mb-8">Conectamos datos telemáticos de flotas con IA</p>
          </div>
        </div>
      </section>

      {/* El Problema Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-destructive/10 text-destructive border-destructive/20">
              El Problema que Resolvemos
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Los desafíos de la gestión de flotas
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Las empresas pierden millones cada año por falta de visibilidad operativa
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-destructive/50 transition-all duration-300 hover:shadow-lg group">
              <CardContent className="p-8 text-center">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto">
                    <AlertTriangle className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute inset-0 bg-red-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">Riesgos Invisibles</h3>
                <p className="text-muted-foreground text-lg">
                  Sin datos en tiempo real, es imposible identificar conductores de alto riesgo antes de un incidente
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-accent/50 transition-all duration-300 hover:shadow-lg group">
              <CardContent className="p-8 text-center">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent-light rounded-2xl flex items-center justify-center mx-auto">
                    <TrendingDown className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute inset-0 bg-accent/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">Costos Elevados</h3>
                <p className="text-muted-foreground text-lg">
                  Primas de seguro genéricas que no reflejan el comportamiento real de tus conductores
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg group">
              <CardContent className="p-8 text-center">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-light rounded-2xl flex items-center justify-center mx-auto">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">Falta de Control</h3>
                <p className="text-muted-foreground text-lg">
                  Información fragmentada que dificulta la toma de decisiones operativas estratégicas
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Dashboard Preview Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Vista Previa</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Controla tu flota desde un{" "}
              <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                solo lugar
              </span>
            </h2>
          </div>
          <div className="max-w-5xl mx-auto">
            <DashboardPreview />
          </div>
        </div>
      </section>

      {/* Nuestra Solución Section */}
      <section id="solucion" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-secondary/10 text-secondary border-secondary/20">Nuestra Solución</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Telemetría inteligente con{" "}
              <span className="bg-gradient-to-r from-secondary to-secondary-light bg-clip-text text-transparent">
                IA avanzada
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Transformamos datos vehiculares en insights accionables para optimizar operaciones y reducir riesgos
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="bg-gradient-to-br from-secondary/10 to-accent/10 rounded-2xl p-12 shadow-xl">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-secondary to-secondary-light rounded-xl flex items-center justify-center">
                    <Brain className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">IA Avanzada</h3>
                    <p className="text-muted-foreground">Procesamiento neuronal</p>
                  </div>
                </div>
                <div className="h-48 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <Activity className="w-16 h-16 text-secondary mx-auto mb-4 animate-pulse" />
                    <p className="text-muted-foreground">Análisis en tiempo real</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-gradient-to-br from-secondary to-secondary-light rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Brain className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">IA Predictiva</h3>
                  <p className="text-muted-foreground">
                    Algoritmos de machine learning que predicen riesgos antes de que ocurran
                  </p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-gradient-to-br from-accent to-accent-light rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Activity className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">Monitoreo en Tiempo Real</h3>
                  <p className="text-muted-foreground">
                    Seguimiento continuo de comportamiento de conducción y estado del vehículo
                  </p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary-light rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Gauge className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">Score de Riesgo</h3>
                  <p className="text-muted-foreground">
                    Calificación personalizada por conductor y vehículo basada en datos reales
                  </p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <MapPin className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">Geolocalización</h3>
                  <p className="text-muted-foreground">Tracking GPS preciso con análisis de rutas y zonas de riesgo</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Additional Features */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Zap className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">Alertas Instantáneas</h3>
                <p className="text-muted-foreground">
                  Notificaciones automáticas ante eventos críticos o comportamientos de riesgo
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <BarChart3 className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">Reportes Avanzados</h3>
                <p className="text-muted-foreground">
                  Dashboards interactivos con métricas clave y tendencias operativas
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Risk Score Visualization */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-secondary/10 text-secondary border-secondary/20">Score de Riesgo</Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Calificación precisa basada en{" "}
                <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                  datos reales
                </span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Nuestro algoritmo analiza múltiples variables para generar un score objetivo que refleja el verdadero
                riesgo de cada conductor y vehículo
              </p>
              <div className="space-y-4">
                {[
                  "Comportamiento de conducción histórico",
                  "Cumplimiento de normas de tránsito",
                  "Condiciones de manejo del vehículo",
                  "Frecuencia de mantenimientos",
                  "Patrones de uso y rutas",
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle2 className="w-5 h-5 text-secondary mr-3" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gray-900 rounded-2xl p-8 shadow-xl">
              <RiskScoreGauge score={8.4} />
            </div>
          </div>
        </div>
      </section>

      {/* Vehicle Status Cards */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-accent/20 text-accent-foreground border-accent/30">Monitoreo en Vivo</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Visibilidad completa de tu{" "}
              <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                flota en tiempo real
              </span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <VehicleStatusCard
              vehicleId="TRK-001"
              driver="Juan Pérez"
              status="active"
              speed={85}
              fuel={78}
              location="Ruta 1, km 45, Canelones"
            />
            <VehicleStatusCard
              vehicleId="TRK-002"
              driver="María González"
              status="idle"
              speed={0}
              fuel={92}
              location="Montevideo, Ciudad Vieja"
            />
            <VehicleStatusCard
              vehicleId="TRK-003"
              driver="Carlos Ruiz"
              status="alert"
              speed={105}
              fuel={34}
              location="Ruta 5, km 120, Florida"
            />
          </div>
        </div>
      </section>

      {/* Tecnología Section */}
      <section id="tecnologia" className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-accent/20 text-accent-foreground border-accent/30">Tecnología Avanzada</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Datos que{" "}
              <span className="bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">
                capturamos
              </span>
            </h2>
            <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto">
              Telemetría completa y análisis en tiempo real para decisiones informadas
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Columna 1: Datos del Vehículo */}
            <Card className="bg-background/10 border-primary-foreground/10 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-secondary to-secondary-light rounded-lg flex items-center justify-center mr-4">
                    <Truck className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Datos del Vehículo</h3>
                </div>
                <div className="space-y-4">
                  {[
                    "Velocidad y aceleración",
                    "RPM del motor",
                    "Consumo de combustible",
                    "Temperatura del motor",
                    "Estado de frenos",
                    "Nivel de batería",
                    "Presión de neumáticos",
                    "Códigos de diagnóstico (DTC)",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle2 className="w-5 h-5 text-secondary mr-3" />
                      <span className="text-primary-foreground/90">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Columna 2: Comportamiento del Conductor */}
            <Card className="bg-background/10 border-primary-foreground/10 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent-light rounded-lg flex items-center justify-center mr-4">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-card">Comportamiento del Conductor</h3>
                </div>
                <div className="space-y-4">
                  {[
                    "Frenadas bruscas",
                    "Aceleraciones agresivas",
                    "Excesos de velocidad",
                    "Tiempo de ralentí",
                    "Giros bruscos",
                    "Horas de conducción",
                    "Uso del cinturón",
                    "Patrones de riesgo",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle2 className="w-5 h-5 text-accent mr-3" />
                      <span className="text-primary-foreground/90">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12">
            <div className="bg-gradient-to-r from-gray-800 to-gray-700 rounded-2xl p-12 shadow-2xl">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="w-20 h-20 bg-gradient-to-br from-secondary to-secondary-light rounded-full flex items-center justify-center mx-auto mb-4">
                    <Gauge className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">100+</div>
                  <p className="text-gray-300">Métricas en tiempo real</p>
                </div>
                <div>
                  <div className="w-20 h-20 bg-gradient-to-br from-accent to-accent-light rounded-full flex items-center justify-center mx-auto mb-4">
                    <Activity className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">24/7</div>
                  <p className="text-gray-300">Monitoreo continuo</p>
                </div>
                <div>
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary-light rounded-full flex items-center justify-center mx-auto mb-4">
                    <Brain className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">AI</div>
                  <p className="text-gray-300">Predicción inteligente</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Beneficios Section */}
      <section id="beneficios" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Beneficios Clave</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Valor para todos los{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                involucrados
              </span>
            </h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Para Flotas */}
            <Card className="border-2 border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-xl">
              <CardContent className="p-8">
                <div className="flex items-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-light rounded-2xl flex items-center justify-center mr-4">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">Para Flotas</h3>
                    <p className="text-muted-foreground">Optimiza operaciones y reduce costos</p>
                  </div>
                </div>
                <div className="mb-8">
                  <div className="h-48 bg-gradient-to-br from-primary/20 to-primary-light/20 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <Truck className="w-16 h-16 text-primary mx-auto mb-4" />
                      <p className="text-muted-foreground font-semibold">Optimización de Flotas</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  {[
                    { text: "Reduce accidentes hasta 40%", icon: Shield },
                    { text: "Ahorra 15-20% en combustible", icon: TrendingDown },
                    { text: "Mejora vida útil de vehículos", icon: Truck },
                    { text: "Optimiza rutas y tiempos", icon: MapPin },
                    { text: "Capacita conductores con datos", icon: Target },
                    { text: "Reportes para aseguradoras", icon: BarChart3 },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center p-3 rounded-lg hover:bg-primary/5 transition-colors">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <span className="text-foreground font-medium">{item.text}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Para Aseguradoras */}
            <Card className="border-2 border-secondary/20 hover:border-secondary/50 transition-all duration-300 hover:shadow-xl">
              <CardContent className="p-8">
                <div className="flex items-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-secondary to-secondary-light rounded-2xl flex items-center justify-center mr-4">
                    <Building2 className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">Para Aseguradoras</h3>
                    <p className="text-muted-foreground">Primas precisas basadas en riesgo real</p>
                  </div>
                </div>
                <div className="mb-8">
                  <div className="h-48 bg-gradient-to-br from-secondary/20 to-secondary-light/20 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <BarChart3 className="w-16 h-16 text-secondary mx-auto mb-4" />
                      <p className="text-muted-foreground font-semibold">Analytics Dashboard</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  {[
                    { text: "Scoring de riesgo en tiempo real", icon: Gauge },
                    { text: "Reduce siniestralidad", icon: Shield },
                    { text: "Primas personalizadas (UBI)", icon: BarChart3 },
                    { text: "Datos verificados y trazables", icon: CheckCircle2 },
                    { text: "Validación de reclamos", icon: Activity },
                    { text: "Retención de buenos clientes", icon: Target },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center p-3 rounded-lg hover:bg-secondary/5 transition-colors"
                    >
                      <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center mr-4">
                        <item.icon className="w-5 h-5 text-secondary" />
                      </div>
                      <span className="text-foreground font-medium">{item.text}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Final Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary-light to-accent opacity-95"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-accent/20 via-transparent to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-primary-foreground">
            <Badge className="mb-6 bg-background/20 text-primary-foreground border-primary-foreground/30 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 mr-2" />
              Empieza Hoy
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Transforma la gestión de tu flota con{" "}
              <span className="bg-gradient-to-r from-background to-background/80 bg-clip-text text-transparent">
                inteligencia artificial
              </span>
            </h2>
            <p className="text-xl mb-8 text-primary-foreground/90 leading-relaxed max-w-2xl mx-auto">
              Únete a las empresas que ya están reduciendo costos y riesgos con datos en tiempo real
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="text-lg px-10 py-6 bg-background text-foreground hover:bg-background/90 shadow-xl"
              >
                Solicitar Demo Gratuita
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-10 py-6 bg-background/10 border-primary-foreground/30 text-primary-foreground hover:bg-background/20 backdrop-blur-sm"
              >
                Hablar con Ventas
              </Button>
            </div>
            <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm">
              <div className="flex items-center">
                <CheckCircle2 className="w-5 h-5 mr-2" />
                <span>Sin compromiso</span>
              </div>
              <div className="flex items-center">
                <CheckCircle2 className="w-5 h-5 mr-2" />
                <span>Instalación en 48hrs</span>
              </div>
              <div className="flex items-center">
                <CheckCircle2 className="w-5 h-5 mr-2" />
                <span>Soporte 24/7</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} Obid.io. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  )
}
