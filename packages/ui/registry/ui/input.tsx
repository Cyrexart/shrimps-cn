import * as React from "react"
import { cn } from "@/lib/utils"

export interface InputProps extends React.ComponentProps<"input"> {
  ref?: React.Ref<HTMLInputElement>
}

function Input({
  className,
  type,
  value,
  ref,
  ...props
}: InputProps) {

  return (
    <input
      ref={ref}
      type={type}
      value={value}
      data-slot="input-group-control"
      className={cn(
        "w-full min-w-0 outline-none",
        "h-11",
        "px-3",
        "bg-surface border-2 border-transparent rounded-lg",
        "text-base md:text-sm",
        "transition-[color,box-shadow,background-color] duration-base ease-out",
        "focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30",
        "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
        "aria-invalid:border-danger aria-invalid:ring-3 aria-invalid:ring-danger/20",
        "placeholder:text-on-muted/40",
        "file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-text",
        className
      )}
      {...props}
    />
  )
}

export { Input }
