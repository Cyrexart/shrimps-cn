import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { Loader2, Check } from "lucide-react"
import { cn } from "@/lib/utils"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean
  loading?: boolean
  success?: boolean
  ref?: React.Ref<HTMLButtonElement>
}

const buttonVariants = cva(
  [
    "inline-flex items-center justify-center",
    "gap-2",
    "whitespace-nowrap font-medium",
    "transition-all duration-base ease-out",
    "active:scale-[0.85] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    "disabled:pointer-events-none disabled:opacity-40",
    "[&_svg]:pointer-events-none [&_svg]:shrink-0",
  ].join(" "),
  {
    variants: {
      variant: {
        default: "bg-brand text-on-brand hover:bg-brand-hover shadow-sm",
        secondary: "bg-surface text-on-surface hover:bg-surface-hover",
        outline: "bg-transparent text-text border-2 border-brand hover:bg-brand hover:text-on-brand",
        ghost: "bg-transparent text-text hover:bg-brand hover:text-on-brand",
        destructive: "bg-danger text-on-danger hover:bg-danger-hover shadow-sm",
        link: "bg-transparent text-brand underline-offset-4 hover:underline p-0 h-auto",
      },
      size: {
        sm: "h-8  rounded-full px-4 text-xs  gap-1.5 [&_svg]:size-3.5",
        default: "h-10 rounded-full px-6 text-sm [&_svg]:size-4",
        lg: "h-12 rounded-full px-8 text-base gap-2.5 [&_svg]:size-5",
        icon: "h-10 w-10 rounded-full [&_svg]:size-4",
        "icon-sm": "h-8 w-8 rounded-full [&_svg]:size-3.5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const ICON_SIZES = new Set(["icon", "icon-sm"])

function useButton({
  loading,
  success,
  disabled,
  size,
}: Pick<ButtonProps, "loading" | "success" | "disabled" | "size">) {
  return {
    isDisabled: disabled || loading || success,
    isLoading: loading,
    isSuccess: success,
    isIconButton: ICON_SIZES.has(size ?? ""),
  }
}


function Button({ className, variant, size, asChild = false, loading, success, disabled, ref, children, ...props }: ButtonProps) {
  const { isDisabled, isLoading, isSuccess, isIconButton } = useButton({ loading, success, disabled, size })
  const Comp = asChild && !isLoading && !isSuccess ? Slot : "button"

  return (
    <Comp
      ref={ref}
      disabled={isDisabled}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      {isLoading ? (
        <>
          <Loader2 className="animate-spin" />
          {!isIconButton && children}
        </>
      ) : isSuccess ? (
        <>
          <Check />
          {!isIconButton && children}
        </>
      ) : children}
    </Comp>
  )
}

Button.displayName = "Button"

export { Button, buttonVariants }
