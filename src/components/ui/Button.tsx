import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { Loader2 } from "lucide-react";
import * as React from "react";

const buttonVariants = cva(
  "active:scale-95 inline-flex items-center justify-center rounded-md font-medium transition-all focus:outline-none active:ring-2 active:ring-slate-400 active:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer capitalize",
  {
    variants: {
      variant: {
        default: "bg-neutral-800 text-neutral-200 hover:bg-neutral-900",
        destructive: "text-neutral-200 hover:bg-red-600",
        outline:
          "bg-neutral-900 text-neutral-500 hover:bg-neutral-800 border border-neutral-200",
        subtle: "bg-neutral-100 text-neutral-900 hover:bg-neutral-200",
        ghost:
          "bg-transparent hover:bg-neutral-100 data-[state=open]:bg-transparent",
        link: "bg-transparent underline-offset-4hover:underline text-neutral-700 hover:text-neutral-800",
      },
        // const css = 'mx-3 sm:mx-4';
      size: {
        default: "p-[0.375rem] md:p-2 md:rounded-lg",
        sm: "h-9 px-2 rounded-md",
        lg: "py-4 md:py-5 px-7 md:px-8 rounded-2xl md:rounded-2xl",
        none: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
  active?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, variant, active, isLoading, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ size, variant, className }), active && 'text-neutral-800')}
        ref={ref}
        disabled={isLoading}
        {...props}
      >
        {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { buttonVariants };

export default Button;
