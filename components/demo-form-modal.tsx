import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@radix-ui/react-dialog"
import { Textarea } from "@radix-ui/react-textarea"
import { Button } from "@radix-ui/react-button"

const DemoFormModal = ({ formAction }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Open Modal</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Form Modal</DialogTitle>
        </DialogHeader>
        <form action={formAction} className="space-y-3">
          <Textarea
            id="message"
            name="message"
            placeholder="Cuéntanos sobre tu flota y necesidades"
            rows={2}
            className="resize-none"
          />
          {/* rest of code here */}
        </form>
        <DialogFooter className="gap-2 pt-2">{/* rest of code here */}</DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default DemoFormModal
