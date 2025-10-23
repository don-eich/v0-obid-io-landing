"use client"

import { DialogFooter } from "@/components/ui/dialog"
import { useState } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

const DemoFormModal = ({ formAction }) => {
  const [isSubmitting, setIsSubmitting] = useState(false)

  return (
    <Dialog>
      <Button>Open Modal</Button>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Form Modal</DialogTitle>
          <DialogDescription>{/* Description text here */}</DialogDescription>
        </DialogHeader>
        <form action={formAction} className="space-y-3">
          <textarea
            id="message"
            name="message"
            rows={2}
            className="w-full px-3 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-foreground placeholder:text-muted-foreground resize-none"
            placeholder="Cuéntanos sobre tus necesidades específicas..."
            disabled={isSubmitting}
          />
          {/* rest of code here */}
        </form>
        <DialogFooter className="gap-2 pt-2">{/* rest of code here */}</DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default DemoFormModal
