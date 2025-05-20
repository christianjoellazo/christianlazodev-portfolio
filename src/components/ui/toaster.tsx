
import { useToast } from "@/hooks/use-toast"
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast"
import { AnimatePresence, motion } from "framer-motion"
import { X } from "lucide-react"

export function Toaster() {
  const { toasts } = useToast()

  return (
    <ToastProvider>
      <AnimatePresence>
        {toasts.map(function ({ id, title, description, action, ...props }) {
          return (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Toast {...props} className="group">
                <div className="grid gap-1">
                  {title && <ToastTitle>{title}</ToastTitle>}
                  {description && (
                    <ToastDescription>{description}</ToastDescription>
                  )}
                </div>
                {action}
                <ToastClose className="absolute right-2 top-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <X size={16} aria-hidden="true" />
                  <span className="sr-only">Close</span>
                </ToastClose>
              </Toast>
            </motion.div>
          )
        })}
      </AnimatePresence>
      <ToastViewport className="p-4 md:p-6 lg:p-8" />
    </ToastProvider>
  )
}
