import * as React from "react";
import { Slot, Slottable } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";

const buttonIcons = {
  arrow: { component: ArrowRight, className: "transition-all duration-300" },
} as const;

type ButtonIcon = keyof typeof buttonIcons;

const buttonVariants = cva(
  "cursor-pointer inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-xl text-sm font-medium transition-all duration-300 hover:scale-[.98] active:scale-95 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-ring/50 focus-visible:ring-[3px] tracking-[-0.03rem] [&>svg:first-child]:-ml-0.5 [&>svg:last-child]:-mr-0.5 group",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 shadow-[inset_0px_2.5px_0px_0px_rgba(255,255,255,0.2)]",
        outline:
          "border hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        "primary-outline":
          "border border-primary text-primary bg-transparent hover:bg-primary hover:text-primary-foreground",
        secondary:
          "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2 rounded-xl",
        sm: "h-8 rounded-xl gap-1.5 px-3",
        lg: "h-12 rounded-xl px-7 text-base",
        icon: "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  endIcon,
  children,
  startIcon,
  iconClassName,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
    endIcon?: ButtonIcon;
    startIcon?: ButtonIcon;
    iconClassName?: string;
  }) {
  const Comp = asChild ? Slot : "button";
  const endIconDef = endIcon ? buttonIcons[endIcon] : null;
  const startIconDef = startIcon ? buttonIcons[startIcon] : null;

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      {startIconDef && (
        <startIconDef.component className={cn(startIconDef.className, iconClassName)} />
      )}
      <Slottable>{children}</Slottable>
      {endIconDef && (
        <endIconDef.component className={cn(endIconDef.className, iconClassName)} />
      )}
    </Comp>
  );
}

export { Button, buttonVariants };
