"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LeadForm from "@/components/ui/LeadForm";

export default function LeadFormModal({ trigger }: { trigger: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
      setTimeout(() => {
        inputRef.current?.focus();
      }, 250);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <span onClick={() => setOpen(true)} className="cursor-pointer">{trigger}</span>
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              className="bg-white rounded-xl shadow-xl max-w-md w-full mx-4 p-6 relative max-h-[85vh] overflow-y-auto"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              <button
                onClick={() => setOpen(false)}
                className="absolute top-3 right-3 text-gray-500 hover:text-red-600 text-2xl font-bold z-10 w-8 h-8 flex items-center justify-center"
                aria-label="Cerrar"
              >
                ×
              </button>
              <LeadForm autoFocusRef={inputRef} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
