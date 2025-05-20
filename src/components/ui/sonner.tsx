
import { useTheme } from "next-themes"
import { Toaster as Sonner, toast } from "sonner"

type ToasterProps = React.ComponentProps<typeof Sonner>

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg rounded-lg p-4 md:p-6",
          description: "group-[.toast]:text-muted-foreground mt-1",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground rounded-md",
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground rounded-md",
          closeButton:
            "group-[.toast]:text-foreground/50 group-[.toast]:opacity-0 group-[.toast]:transition-opacity group-[.toast]:hover:text-foreground group-[.toast]:group-hover:opacity-100 group-[.toast]:focus:opacity-100"
        },
        duration: 5000, // 5 seconds auto-dismiss
        closeButton: true,
        role: "status", // ARIA role for screen readers
      }}
      closeButton
      position="top-right"
      expand={false}
      richColors={false}
      {...props}
    />
  )
}

export { Toaster, toast }
