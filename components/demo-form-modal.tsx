"use client"

import type React from "react"

import { useState } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Loader2, CheckCircle2, AlertCircle, Sparkles } from "lucide-react"
import { submitDemoRequest } from "@/app/actions/submit-demo"

interface DemoFormModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function DemoFormModal({ open, onOpenChange }: DemoFormModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null
    message: string
  }>({ type: null, message: "" })

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: "" })

    const formData = new FormData(event.currentTarget)
    const result = await submitDemoRequest(formData)

    setIsSubmitting(false)
    setSubmitStatus({
      type: result.success ? "success" : "error",
      message: result.message,
    })

    if (result.success) {
      // Reset form after 3 seconds and close modal
      setTimeout(() => {
        onOpenChange(false)
        setSubmitStatus({ type: null, message: "" })
        ;(event.target as HTMLFormElement).reset()
      }, 3000)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] bg-background border-border">
        <DialogHeader>
          <div className="flex items-center gap-2 mb-2">
            <Badge className="bg-gradient-to-r from-secondary to-accent text-white border-none">
              <Sparkles className="w-3 h-3 mr-1" />
              Demo Gratuita
            </Badge>
          </div>
          <DialogTitle className="text-2xl font-bold text-foreground">Solicita tu demostración</DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Completa el formulario y te contactaremos en menos de 24 horas para coordinar tu demo personalizada.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">
              Nombre completo <span className="text-destructive">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-3 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-foreground placeholder:text-muted-foreground"
              placeholder="Juan Pérez"
              disabled={isSubmitting}
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">
              Email corporativo <span className="text-destructive">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-3 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-foreground placeholder:text-muted-foreground"
              placeholder="juan@empresa.com"
              disabled={isSubmitting}
            />
          </div>

          <div>
            <label htmlFor="company" className="block text-sm font-medium text-foreground mb-1.5">
              Empresa <span className="text-destructive">*</span>
            </label>
            <input
              type="text"
              id="company"
              name="company"
              required
              className="w-full px-3 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-foreground placeholder:text-muted-foreground"
              placeholder="Transportes SA"
              disabled={isSubmitting}
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1.5">
              Teléfono
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="w-full px-3 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-foreground placeholder:text-muted-foreground"
              placeholder="+598 99 123 456"
              disabled={isSubmitting}
            />
          </div>

          <div>
            <label htmlFor="fleetSize" className="block text-sm font-medium text-foreground mb-1.5">
              Tamaño de flota
            </label>
            <select
              id="fleetSize"
              name="fleetSize"
              className="w-full px-3 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-foreground"
              disabled={isSubmitting}
            >
              <option value="">Selecciona una opción</option>
              <option value="1-5">1-5 vehículos</option>
              <option value="6-10">6-10 vehículos</option>
              <option value="11-25">11-25 vehículos</option>
              <option value="26-50">26-50 vehículos</option>
              <option value="51-100">51-100 vehículos</option>
              <option value="100+">Más de 100 vehículos</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">
              Mensaje (opcional)
            </label>
            <textarea
              id="message"
              name="message"
              rows={3}
              className="w-full px-3 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-foreground placeholder:text-muted-foreground resize-none"
              placeholder="Cuéntanos sobre tus necesidades específicas..."
              disabled={isSubmitting}
            />
          </div>

          {submitStatus.type && (
            <div
              className={`flex items-center gap-2 p-3 rounded-lg ${
                submitStatus.type === "success"
                  ? "bg-green-500/10 text-green-600 border border-green-500/20"
                  : "bg-red-500/10 text-red-600 border border-red-500/20"
              }`}
            >
              {submitStatus.type === "success" ? (
                <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
              ) : (
                <AlertCircle className="w-5 h-5 flex-shrink-0" />
              )}
              <p className="text-sm">{submitStatus.message}</p>
            </div>
          )}

          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              className="flex-1"
              disabled={isSubmitting}
            >
              Cancelar
            </Button>
            <Button
              type="submit"
              className="flex-1 bg-gradient-to-r from-primary to-secondary text-primary-foreground"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Enviando...
                </>
              ) : (
                "Solicitar Demo"
              )}
            </Button>
          </div>

          <p className="text-xs text-muted-foreground text-center pt-2">
            Al enviar este formulario, aceptas que Obid.io se ponga en contacto contigo.
          </p>
        </form>
      </DialogContent>
    </Dialog>
  )
}
