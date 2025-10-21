"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Truck, Gauge, Droplet, AlertTriangle, MapPin } from "lucide-react"

interface VehicleStatusProps {
  vehicleId: string
  driver: string
  status: "active" | "idle" | "alert"
  speed: number
  fuel: number
  location: string
}

export function VehicleStatusCard({ vehicleId, driver, status, speed, fuel, location }: VehicleStatusProps) {
  const statusConfig = {
    active: { color: "bg-green-500", label: "En Ruta", textColor: "text-green-400" },
    idle: { color: "bg-amber-500", label: "Detenido", textColor: "text-amber-400" },
    alert: { color: "bg-red-500", label: "Alerta", textColor: "text-red-400" },
  }

  const config = statusConfig[status]

  return (
    <Card className="bg-gray-800/50 border-gray-700 hover:border-secondary/50 transition-all duration-300">
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-light rounded-lg flex items-center justify-center">
              <Truck className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-white">{vehicleId}</h3>
              <p className="text-sm text-gray-400">{driver}</p>
            </div>
          </div>
          <Badge className={`${config.color} text-white border-none`}>{config.label}</Badge>
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center text-gray-400">
              <Gauge className="w-4 h-4 mr-2" />
              <span>Velocidad</span>
            </div>
            <span className="text-white font-semibold">{speed} km/h</span>
          </div>

          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center text-gray-400">
              <Droplet className="w-4 h-4 mr-2" />
              <span>Combustible</span>
            </div>
            <div className="flex items-center">
              <div className="w-24 h-2 bg-gray-700 rounded-full mr-2 overflow-hidden">
                <div
                  className={`h-full ${fuel > 50 ? "bg-green-500" : fuel > 20 ? "bg-amber-500" : "bg-red-500"}`}
                  style={{ width: `${fuel}%` }}
                ></div>
              </div>
              <span className="text-white font-semibold">{fuel}%</span>
            </div>
          </div>

          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center text-gray-400">
              <MapPin className="w-4 h-4 mr-2" />
              <span>Ubicación</span>
            </div>
            <span className="text-white font-semibold text-right max-w-[150px] truncate">{location}</span>
          </div>

          {status === "alert" && (
            <div className="flex items-center mt-4 p-2 bg-red-500/10 border border-red-500/30 rounded-lg">
              <AlertTriangle className="w-4 h-4 text-red-400 mr-2" />
              <span className="text-sm text-red-400">Frenada brusca detectada</span>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
