import { HTMLAttributes, forwardRef } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const wrapperVariants = cva(
  "mt-16 mx-auto max-w-4xl grid gap-6 gap-x-8 md:gap-x-16 justify-center place-items-center",
  {
    variants: {
      variant: {
        default: "",
        about: "max-md:gap-y-10 md:grid-cols-[0.9fr_1.1fr]",
        skill: " md:grid-cols-2 md:px-8",
        service:
          "grid-cols-1 xs:grid-cols-[350px] sm:grid-cols-[repeat(2,218px)] md:grid-cols-3 lg:grid-cols-[repeat(3,240px)] md:justify-between gap-x-9 lg:gap-x-11 place-items-stretch",
        contact:
          'max-sm:grid-cols-1 md:grid-cols-[repeat(2,max-content)] max-md:gap-y-14 gap-x-12 lg:gap-x-24 pb-12 place-items-stretch',
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

interface WrapperProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof wrapperVariants> {}

const Wrapper = forwardRef<HTMLDivElement, WrapperProps>(
  ({ className, variant, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        {...props}
        className={cn(wrapperVariants({ variant, className }))}
      >
        {children}
      </div>
    );
  }
);

Wrapper.displayName = "Wrapper";

export default Wrapper;
