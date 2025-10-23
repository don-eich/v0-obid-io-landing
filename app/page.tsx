"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Truck,
  Shield,
  TrendingDown,
  Zap,
  BarChart3,
  Bell,
  Fuel,
  Clock,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Menu,
  X,
} from "lucide-react"
import { DemoFormModal } from "@/components/demo-form-modal"
import { AnimatedMetric } from "@/components/animated-metric"
import { RiskScoreGauge } from "@/components/risk-score-gauge"
import { VehicleStatusCard } from "@/components/vehicle-status-card"

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-gray-800 bg-black/50 backdrop-blur-xl">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="/images/design-mode/Logo_Solido_WT.png"
              alt="Obid.io"
              width={120}
              height={40}
              className="h-10 w-auto"
              priority
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#como-funciona" className="text-gray-300 hover:text-white transition-colors">
              Cómo Funciona
            </a>
            <a href="#beneficios" className="text-gray-300 hover:text-white transition-colors">
              Beneficios
            </a>
            <a href="#precios" className="text-gray-300 hover:text-white transition-colors">
              Precios
            </a>
            <Button
              onClick={() => setIsDemoModalOpen(true)}
              className="bg-gradient-to-r from-secondary to-accent text-white hover:opacity-90"
            >
              Solicitar Demo
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-gray-800">
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
              <a
                href="#como-funciona"
                className="text-gray-300 hover:text-white transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Cómo Funciona
              </a>
              <a
                href="#beneficios"
                className="text-gray-300 hover:text-white transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Beneficios
              </a>
              <a
                href="#precios"
                className="text-gray-300 hover:text-white transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Precios
              </a>
              <Button
                onClick={() => {
                  setIsDemoModalOpen(true)
                  setMobileMenuOpen(false)
                }}
                className="bg-gradient-to-r from-secondary to-accent text-white w-full"
              >
                Solicitar Demo
              </Button>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-secondary/20 text-secondary border-secondary/30">
                <Sparkles className="w-3 h-3 mr-1" />
                Telemática Inteligente para Latinoamérica
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Datos Telemáticos.{" "}
                <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                  Riesgo Cero.
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Telemetría inteligente con <strong className="text-accent">Inteligencia Artificial.</strong>{" "}
                Transformamos datos vehiculares en <strong className="text-secondary">recomendaciones</strong> que
                optimizan operaciones y reducen riesgos.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  onClick={() => setIsDemoModalOpen(true)}
                  className="text-lg px-8 py-6 bg-gradient-to-r from-secondary to-accent text-white hover:opacity-90"
                >
                  Solicitar Demo Gratuita
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-6 border-gray-600 text-white hover:bg-gray-800 bg-transparent"
                  onClick={() => document.getElementById("como-funciona")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Ver Cómo Funciona
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-accent/20 blur-3xl"></div>
              <Card className="bg-gray-900 border-gray-800 overflow-hidden relative">
                <CardContent className="p-8">
                  <div className="bg-gradient-to-r from-primary to-primary-light p-6 rounded-lg mb-6">
                    <h3 className="text-xl font-bold text-white mb-2">Dashboard en Tiempo Real</h3>
                    <p className="text-white/70 text-sm">Monitoreo completo de tu flota</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-800/50 rounded-lg p-4">
                      <div className="text-green-400 text-2xl font-bold mb-1">48</div>
                      <div className="text-gray-400 text-sm">Vehículos Activos</div>
                    </div>
                    <div className="bg-gray-800/50 rounded-lg p-4">
                      <div className="text-secondary text-2xl font-bold mb-1">8.4</div>
                      <div className="text-gray-400 text-sm">Score Promedio</div>
                    </div>
                    <div className="bg-gray-800/50 rounded-lg p-4">
                      <div className="text-amber-400 text-2xl font-bold mb-1">3</div>
                      <div className="text-gray-400 text-sm">Alertas Activas</div>
                    </div>
                    <div className="bg-gray-800/50 rounded-lg p-4">
                      <div className="text-accent text-2xl font-bold mb-1">18%</div>
                      <div className="text-gray-400 text-sm">Ahorro Combustible</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-8 mt-20">
            <Card className="bg-gray-800/50 border-gray-700 backdrop-blur">
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-accent mb-2">
                  <AnimatedMetric value={20} suffix="%" />
                </div>
                <p className="text-gray-300">Menos averías en 90 días</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-800/50 border-gray-700 backdrop-blur">
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-secondary mb-2">
                  <AnimatedMetric value={15} suffix="%" />
                </div>
                <p className="text-gray-300">Ahorro en combustible</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-800/50 border-gray-700 backdrop-blur">
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">
                  <AnimatedMetric value={20} suffix=" min" />
                </div>
                <p className="text-gray-300">Instalación del hardware</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="como-funciona" className="py-20 px-4 bg-black/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/20 text-secondary border-primary/30">Proceso Simple</Badge>
            <h2 className="text-3xl lg:text-5xl font-bold mb-4">Cómo Funciona Obid.io</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Tres pasos simples para transformar tu operación logística
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-primary/20 to-primary/5 border-primary/30 backdrop-blur">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mb-6">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">1. Instalación Rápida</h3>
                <p className="mb-4 text-gray-300">
                  Hardware OBD-II plug & play que se instala en 3 minutos. Sin cables, sin complicaciones.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center">
                    <CheckCircle2 className="w-4 h-4 text-green-400 mr-2" />
                    Compatible con cualquier camión post-2008
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="w-4 h-4 text-green-400 mr-2" />
                    Hardware incluido sin costo inicial
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-secondary/20 to-secondary/5 border-secondary/30 backdrop-blur">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center mb-6">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">2. Datos en Tiempo Real</h3>
                <p className="mb-4 text-gray-300">
                  Monitoreo continuo de ubicación, conducción, combustible y mantenimiento predictivo.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center">
                    <CheckCircle2 className="w-4 h-4 text-green-400 mr-2" />
                    Dashboard intuitivo y alertas instantáneas
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="w-4 h-4 text-green-400 mr-2" />
                    Reportes automáticos semanales
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-accent/20 to-accent/5 border-accent/30 backdrop-blur">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center mb-6">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">3. Resultados Inmediatos</h3>
                <p className="mb-4 text-gray-300">
                  Mejora tu Obidio Rank y accede a seguros más económicos mientras reduces costos operativos.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center">
                    <CheckCircle2 className="w-4 h-4 text-green-400 mr-2" />
                    Pólizas personalizadas según tu conducción
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="w-4 h-4 text-green-400 mr-2" />
                    ROI positivo desde el primer mes
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Obidio Rank Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-accent/20 text-accent border-accent/30">
                <Shield className="w-3 h-3 mr-1" />
                Exclusivo de Obid.io
              </Badge>
              <h2 className="text-3xl lg:text-5xl font-bold mb-6">
                Obidio Rank: Tu Score de <span className="text-secondary">Riesgo Vehicular</span>
              </h2>
              <p className="text-xl text-gray-300 mb-6">
                Nuestro algoritmo propietario analiza más de 50 variables de conducción para asignar un score de riesgo
                de 0 a 10. A mayor score, menor riesgo y mejores condiciones en tu seguro.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Monitoreo de Conducción</h4>
                    <p className="text-gray-400 text-sm">Aceleraciones, frenadas, giros, excesos de velocidad y más</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Mantenimiento Predictivo</h4>
                    <p className="text-gray-400 text-sm">Alertas tempranas antes de que ocurran fallas costosas</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Optimización de Rutas</h4>
                    <p className="text-gray-400 text-sm">Reduce kilómetros innecesarios y ahorra combustible</p>
                  </div>
                </div>
              </div>
              <Button
                size="lg"
                onClick={() => setIsDemoModalOpen(true)}
                className="bg-gradient-to-r from-primary to-secondary text-white"
              >
                Calcula tu Obidio Rank
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>

            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-8 border border-gray-700">
              <RiskScoreGauge score={8.4} />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="beneficios" className="py-20 px-4 bg-black/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-secondary/20 text-secondary border-secondary/30">Beneficios Reales</Badge>
            <h2 className="text-3xl lg:text-5xl font-bold mb-4">Por Qué Elegir Obid.io</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Más que telemática, una solución integral para reducir costos y riesgos
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-gray-800/50 border-gray-700 hover:border-secondary/50 transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center mb-4">
                  <TrendingDown className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Reduce Costos de Seguro</h3>
                <p className="text-gray-300">
                  Pólizas personalizadas basadas en tu conducción real. Paga menos por conducir mejor.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700 hover:border-accent/50 transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center mb-4">
                  <Fuel className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-2">Ahorro en Combustible</h3>
                <p className="text-gray-300">Hasta 15% menos de consumo optimizando rutas y estilos de conducción.</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700 hover:border-primary/50 transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Mantenimiento Predictivo</h3>
                <p className="text-gray-300">
                  Detecta problemas antes de que ocurran. Reduce paradas no planificadas 20%.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700 hover:border-secondary/50 transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center mb-4">
                  <Bell className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Alertas en Tiempo Real</h3>
                <p className="text-gray-300">
                  Notificaciones instantáneas de eventos críticos y comportamientos riesgosos.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700 hover:border-accent/50 transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center mb-4">
                  <Truck className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-2">Gestión de Flota Simplificada</h3>
                <p className="text-gray-300">
                  Dashboard intuitivo para controlar toda tu operación desde un solo lugar.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700 hover:border-primary/50 transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Seguridad Total</h3>
                <p className="text-gray-300">
                  Datos encriptados y almacenados en servidores certificados en Latinoamérica.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Live Dashboard Preview */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">
              <BarChart3 className="w-3 h-3 mr-1" />
              Dashboard en Vivo
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold mb-4">Controla Tu Flota en Tiempo Real</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Visualiza el estado de cada vehículo, conductor y ruta desde cualquier dispositivo
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <VehicleStatusCard
              vehicleId="CAM-001"
              driver="Carlos Rodríguez"
              status="active"
              speed={85}
              fuel={72}
              location="Ruta 5, Montevideo"
            />
            <VehicleStatusCard
              vehicleId="CAM-002"
              driver="María González"
              status="idle"
              speed={0}
              fuel={45}
              location="Centro Logístico, Canelones"
            />
            <VehicleStatusCard
              vehicleId="CAM-003"
              driver="Pedro Martínez"
              status="alert"
              speed={95}
              fuel={28}
              location="Ruta 1, San José"
            />
          </div>

          <div className="text-center">
            <Button
              size="lg"
              onClick={() => setIsDemoModalOpen(true)}
              className="bg-gradient-to-r from-secondary to-accent text-white"
            >
              Ver Demo Completo
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="precios" className="py-20 px-4 bg-black/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-accent/20 text-accent border-accent/30">Plan Piloto</Badge>
            <h2 className="text-3xl lg:text-5xl font-bold mb-4">Comienza Sin Inversión Inicial</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Prueba Obid.io durante 90 días con hardware incluido. Solo pagas si funciona para ti.
            </p>
          </div>

          <Card className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-700 overflow-hidden">
            <CardContent className="p-0">
              <div className="bg-gradient-to-r from-secondary to-accent p-6 text-center">
                <h3 className="text-2xl font-bold text-white mb-2">Plan Piloto 90 Días</h3>
                <p className="text-white/80">Hardware incluido • Sin compromiso • Soporte 24/7</p>
              </div>

              <div className="p-8 text-foreground bg-card">
                <div className="text-center mb-8">
                  <div className="text-5xl font-bold mb-2">
                    $35 <span className="text-2xl text-foreground">USD/mes</span>
                  </div>
                  <p className="text-accent">por vehículo • mínimo 5 vehículos</p>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Hardware OBD-II incluido</p>
                      <p className="text-sm text-gray-400">Sin costo inicial, instalación en 30 minutos</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Dashboard completo en tiempo real</p>
                      <p className="text-sm text-gray-400">Acceso ilimitado para toda tu flota</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Obidio Rank y reportes semanales</p>
                      <p className="text-sm text-gray-400">Insights accionables para reducir costos</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Alertas y notificaciones ilimitadas</p>
                      <p className="text-sm text-gray-400">WhatsApp, email y SMS en eventos críticos</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Soporte técnico prioritario</p>
                      <p className="text-sm text-gray-400">Equipo dedicado en español, disponible 24/7</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Garantía de satisfacción</p>
                      <p className="text-sm text-gray-400">Si no ves resultados, no pagas*</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-accent/10 to-secondary/10 rounded-xl p-6 border border-accent/20 mb-8">
                  <div className="flex items-start gap-3">
                    <Sparkles className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold mb-2">Oferta de Lanzamiento</p>
                      <p className="text-sm text-foreground">
                        Las primeras <strong className="text-accent">10 empresas</strong> que se unan obtienen el primer
                        mes <strong className="text-accent">15% de descuento</strong> y acceso prioritario a nuevas
                        funcionalidades.
                      </p>
                    </div>
                  </div>
                </div>

                <Button
                  size="lg"
                  onClick={() => setIsDemoModalOpen(true)}
                  className="w-full text-lg py-6 bg-gradient-to-r from-secondary to-accent text-white hover:opacity-90"
                >
                  Comenzar Plan Piloto
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>

                <p className="text-center text-sm text-gray-400 mt-4">
                  Sin permanencia • Cancela cuando quieras • Hardware en comodato • *Aplican Restricciones*
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="bg-gradient-to-br from-primary via-secondary to-accent border-none overflow-hidden relative">
            <div className="absolute inset-0 bg-black/20"></div>
            <CardContent className="p-12 text-center relative z-10">
              <Badge className="mb-4 bg-white/20 text-white border-none">
                <Sparkles className="w-3 h-3 mr-1" />
                Únete a Obid.io
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white">¿Listo para Transformar tu Operación?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Únete a las empresas que ya están ahorrando miles de dólares cada mes con Obid.io
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  onClick={() => setIsDemoModalOpen(true)}
                  className="text-lg px-8 py-6 bg-white text-primary hover:bg-gray-100"
                >
                  Solicitar Demo Ahora
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-6 border-white text-white hover:bg-white/10 bg-transparent"
                  onClick={() => document.getElementById("precios")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Ver Plan Piloto
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-12 px-4 bg-black/30">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-2 md:col-span-1">
              <Image
                src="/images/design-mode/Logo_Solido_WT.png"
                alt="Obid.io"
                width={150}
                height={50}
                className="h-12 w-auto mb-4"
              />
              <p className="text-gray-400 text-sm">
                Telemática inteligente que transforma datos en ahorros reales para flotas latinoamericanas.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Producto</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#como-funciona" className="hover:text-white transition-colors">
                    Cómo Funciona
                  </a>
                </li>
                <li>
                  <a href="#beneficios" className="hover:text-white transition-colors">
                    Beneficios
                  </a>
                </li>
                <li>
                  <a href="#precios" className="hover:text-white transition-colors">
                    Precios
                  </a>
                </li>
                <li>
                  <button onClick={() => setIsDemoModalOpen(true)} className="hover:text-white transition-colors">
                    Demo
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Sobre Nosotros
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Casos de Éxito
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contacto
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Términos y Condiciones
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Política de Privacidad
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Política de Cookies
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            <p>© {new Date().getFullYear()} Obid.io. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>

      {/* Demo Modal */}
      <DemoFormModal open={isDemoModalOpen} onOpenChange={setIsDemoModalOpen} />
    </div>
  )
}
