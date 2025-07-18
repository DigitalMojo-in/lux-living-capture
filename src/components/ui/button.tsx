
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-card hover:shadow-luxury",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        luxury: "luxury-gradient text-white hover:scale-105 shadow-luxury hover:shadow-accent font-montserrat font-semibold",
        gold: "accent-gradient text-luxury-charcoal hover:scale-105 shadow-accent font-montserrat font-semibold",
        hero: "bg-white/10 text-white border border-white/20 hover:bg-white/20 backdrop-blur-sm hover:scale-105 font-montserrat font-semibold",
        cta: "bg-red-600 hover:bg-red-700 text-white hover:scale-110 shadow-lg hover:shadow-xl font-montserrat font-bold tracking-wide transform transition-all duration-300 animate-pulse [&_svg]:animate-bounce",
        brand: "bg-brand-primary hover:bg-brand-primary/90 text-white font-semibold transition-all duration-300 hover:scale-105",
        brandOutline: "border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white transition-all duration-300",
        brandGhost: "text-brand-primary hover:bg-brand-primary/10 transition-all duration-300",
        redCta: "bg-red-600 hover:bg-red-700 text-white font-bold hover:scale-110 shadow-lg hover:shadow-xl transform transition-all duration-300 border-2 border-red-400 [&_svg]:animate-bounce",
        redGradient: "bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold hover:scale-110 shadow-lg hover:shadow-2xl transform transition-all duration-300 [&_svg]:animate-bounce",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-12 rounded-md px-8 text-base",
        xl: "h-16 rounded-lg px-12 text-lg font-bold",
        xxl: "h-20 rounded-xl px-16 text-xl font-bold",
        icon: "h-10 w-10",
        iconLg: "h-12 w-12",
        iconXl: "h-16 w-16",
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
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
