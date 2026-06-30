import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  [
    "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium",
    "transition-all duration-[250ms] [transition-timing-function:var(--ease-spring)]",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    "disabled:pointer-events-none disabled:opacity-40",
    "active:scale-[0.96]",
    "[&_svg]:pointer-events-none [&_svg]:shrink-0",
  ].join(" "),
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:brightness-110 shadow-sm",
        secondary:
          "bg-background/10 text-foreground/10 border border-border hover:bg-accent",
        outline:
          "border border-border bg-transparent text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary",
        ghost:
          "bg-transparent text-foreground hover:bg-primary hover:text-primary-foreground",
        destructive:
          "bg-destructive text-foreground hover:brightness-110 shadow-sm",
        link:
          "bg-transparent text-primary underline-offset-4 hover:underline p-0 h-auto",
      },
      size: {
        sm: "h-8  rounded-full px-4 text-xs  gap-1.5 [&_svg]:size-3.5",
        default: "h-10 rounded-full px-6 text-sm  gap-2   [&_svg]:size-4",
        lg: "h-12 rounded-full px-8 text-base gap-2.5 [&_svg]:size-5",
        icon: "h-10 w-10 rounded-full [&_svg]:size-4",
        "icon-sm": "h-8  w-8  rounded-full [&_svg]:size-3.5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
