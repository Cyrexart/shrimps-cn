import * as React from "react"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export interface InputProps extends React.ComponentProps<"input"> {
  error?: string
  clearable?: boolean
  onClear?: () => void
  ref?: React.Ref<HTMLInputElement>
}

interface ClearButtonProps {
  onClick: () => void
}

function ClearButton({ onClick }: ClearButtonProps) {
  return (
    <Button
      type="button"
      variant="ghost"
      size="icon-sm"
      onClick={onClick}
      className="absolute right-1 top-1/2 -translate-y-1/2 opacity-75 "
    >
      <X />
    </Button>
  )
}

function useInput({
  error,
  clearable,
  value,
}: Pick<InputProps, "error" | "clearable" | "value">) {
  return {
    hasError: !!error,
    showClear: clearable && !!value,
  }
}

function Input({
  className,
  type,
  error,
  clearable,
  onClear,
  value,
  ref,
  ...props
}: InputProps) {
  const { hasError, showClear } = useInput({ error, clearable, value })

  return (
    <div className="flex flex-col w-full gap-1.5">
      <div className="relative w-full">
        <input
          ref={ref}
          type={type}
          value={value}
          aria-invalid={hasError || undefined}
          className={cn(
            "w-full min-w-0 outline-none",
            "h-11",
            "px-3", clearable && "pr-9",
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
        {showClear && onClear && <ClearButton onClick={onClear} />}
      </div>
      {hasError && (
        <p className="px-3 text-xs text-danger">{error}</p>
      )}
    </div>
  )
}

export { Input }
