import { useRender } from "@base-ui/react/use-render";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const textVariants = cva("break-words antialiased", {
  variants: {
    variant: {
      display:
        "text-4xl leading-tight font-bold tracking-tight text-balance text-text",
      heading:
        "text-2xl leading-snug font-semibold tracking-tight text-balance text-text",
      title:
        "text-lg leading-snug font-medium tracking-tight text-balance text-text",
      body: "text-base leading-relaxed font-normal text-pretty text-text",
      label: "text-sm leading-none font-medium tracking-wide text-text",
      caption: "text-xs leading-normal font-normal text-pretty text-muted",
      code: "font-mono text-sm leading-relaxed text-text [font-variant-ligatures:none]",
    },
    align: {
      start: "text-left",
      center: "text-center",
      end: "text-right",
    },
    overflow: {
      clip: "truncate",
      "clamp-2": "line-clamp-2",
      "clamp-3": "line-clamp-3",
      "clamp-4": "line-clamp-4",
    },
  },
  defaultVariants: {
    variant: "body",
  },
});

type TextVariants = VariantProps<typeof textVariants>;

const variantDefaultTag: Record<
  NonNullable<TextVariants["variant"]>,
  React.ElementType
> = {
  display: "h1",
  heading: "h2",
  title: "h3",
  body: "p",
  label: "span",
  caption: "span",
  code: "code",
};

export interface TextProps
  extends useRender.ComponentProps<"span">, TextVariants {
  as?: React.ElementType;
}

export function Text({
  as,
  render,
  variant,
  align,
  overflow,
  className,
  ...props
}: TextProps) {
  const resolvedVariant = variant ?? "body";
  const Tag = as ?? variantDefaultTag[resolvedVariant];

  return useRender({
    render: render ?? <Tag />,
    props: {
      "data-slot": "text",
      className: cn(
        textVariants({ variant: resolvedVariant, align, overflow }),
        className,
      ),
      ...props,
    },
  });
}
