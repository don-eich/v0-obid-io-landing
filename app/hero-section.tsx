"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, Zap, ArrowRight, Play, Sparkles } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-light to-secondary opacity-95"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-secondary/20 via-transparent to-transparent"></div>

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-secondary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-primary-foreground">
            <Badge className="mb-6 bg-secondary/20 text-secondary-foreground border-secondary/30 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 mr-2" />
              Telemetría con IA
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Datos telemáticos.{" "}
              <span className="bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">
                Riesgo cero.
              </span>
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-primary-foreground/90 leading-relaxed">
              Conectamos datos telemáticos de flotas con IA para generar recomendaciones operativas y scores de riesgo
              en tiempo real.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="text-lg px-8 py-6 bg-gradient-to-r from-accent to-accent-light hover:opacity-90 text-accent-foreground"
              >
                Comenzar Ahora
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 bg-background/10 border-primary-foreground/20 text-primary-foreground hover:bg-background/20 backdrop-blur-sm"
              >
                <Play className="mr-2 w-5 h-5" />
                Ver Demo
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-12">
              <div>
                <div className="text-3xl font-bold text-accent mb-1">40%</div>
                <div className="text-sm text-primary-foreground/70">Menos accidentes</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-secondary mb-1">20%</div>
                <div className="text-sm text-primary-foreground/70">Ahorro combustible</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-400 mb-1">48h</div>
                <div className="text-sm text-primary-foreground/70">Setup rápido</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-primary-foreground/10">
              <Image
                src="/images/hero-telemetry.jpg"
                alt="Telemetría vehicular con IA"
                width={600}
                height={600}
                className="w-full h-auto"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent"></div>
            </div>

            <div className="absolute -bottom-6 -left-6 animate-float">
              <Card className="bg-background/95 backdrop-blur-sm border-secondary/20 shadow-xl">
                <CardContent className="p-4 flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-foreground">Conducción Segura</div>
                    <div className="text-2xl font-bold text-green-600">98%</div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="absolute -top-6 -right-6 animate-float-delayed">
              <Card className="bg-background/95 backdrop-blur-sm border-accent/20 shadow-xl">
                <CardContent className="p-4 flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent-light rounded-lg flex items-center justify-center">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-foreground">Alertas Activas</div>
                    <div className="text-2xl font-bold text-accent">3</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
