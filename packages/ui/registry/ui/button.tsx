import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends ButtonPrimitive.Props, VariantProps<typeof buttonVariants> {}

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-medium whitespace-nowrap transition-all duration-base ease-out focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none active:scale-[0.85] disabled:pointer-events-none disabled:opacity-40 aria-invalid:border-danger aria-invalid:ring-2 aria-invalid:ring-danger/40 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-brand text-on-brand shadow-sm hover:bg-brand-hover",
        secondary: "bg-surface text-on-surface hover:bg-surface-hover",
        outline:
          "border-2 border-brand bg-transparent text-text hover:bg-brand hover:text-on-brand aria-expanded:bg-brand aria-expanded:text-on-brand",
        ghost:
          "bg-transparent text-text hover:bg-brand hover:text-on-brand aria-expanded:bg-brand aria-expanded:text-on-brand",
        destructive: "bg-danger text-on-danger shadow-sm hover:bg-danger-hover",
        link: "h-auto bg-transparent p-0 text-brand underline-offset-4 hover:underline",
      },
      size: {
        sm: "h-8 gap-1.5 rounded-full px-4 text-xs [&_svg]:size-3.5",
        default: "h-10 rounded-full px-6 text-sm [&_svg]:size-4",
        lg: "h-12 gap-2.5 rounded-full px-8 text-base [&_svg]:size-5",
        icon: "h-10 w-10 rounded-full [&_svg]:size-4",
        "icon-sm": "h-8 w-8 rounded-full [&_svg]:size-3.5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({ className, variant, size, ...props }: ButtonProps) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
