"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, TrendingDown, AlertCircle, CheckCircle2 } from "lucide-react"

export function DashboardPreview() {
  return (
    <Card className="bg-gray-900 border-gray-800 overflow-hidden">
      <CardContent className="p-0">
        <div className="bg-gradient-to-r from-primary to-primary-light p-6 border-b border-gray-800">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-bold text-white mb-1">Dashboard de Flota</h3>
              <p className="text-white/70 text-sm">Actualizado hace 2 minutos</p>
            </div>
            <Badge className="bg-green-500/20 text-green-400 border-green-500/30">En Vivo</Badge>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6">
          <div className="bg-gray-800/50 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-400 text-sm">Vehículos Activos</span>
              <CheckCircle2 className="w-4 h-4 text-green-400" />
            </div>
            <div className="text-2xl font-bold text-white mb-1">48</div>
            <div className="flex items-center text-green-400 text-xs">
              <TrendingUp className="w-3 h-3 mr-1" />
              <span>+12% vs ayer</span>
            </div>
          </div>

          <div className="bg-gray-800/50 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-400 text-sm">Score Promedio</span>
              <div className="w-2 h-2 bg-secondary rounded-full"></div>
            </div>
            <div className="text-2xl font-bold text-white mb-1">8.4</div>
            <div className="flex items-center text-secondary text-xs">
              <TrendingUp className="w-3 h-3 mr-1" />
              <span>+0.3 esta semana</span>
            </div>
          </div>

          <div className="bg-gray-800/50 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-400 text-sm">Alertas</span>
              <AlertCircle className="w-4 h-4 text-amber-400" />
            </div>
            <div className="text-2xl font-bold text-white mb-1">3</div>
            <div className="flex items-center text-amber-400 text-xs">
              <TrendingDown className="w-3 h-3 mr-1" />
              <span>-60% vs semana pasada</span>
            </div>
          </div>

          <div className="bg-gray-800/50 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-400 text-sm">Ahorro Combustible</span>
              <div className="w-2 h-2 bg-accent rounded-full"></div>
            </div>
            <div className="text-2xl font-bold text-white mb-1">18%</div>
            <div className="flex items-center text-accent text-xs">
              <TrendingUp className="w-3 h-3 mr-1" />
              <span>vs mes anterior</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
