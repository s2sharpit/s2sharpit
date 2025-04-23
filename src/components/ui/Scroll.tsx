"use client";

import { HTMLAttributes, useCallback } from "react";
import { VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/Button";
import * as React from "react";

interface ScrollProps
  extends HTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  to: string;
}

const Scroll = React.forwardRef<HTMLButtonElement, ScrollProps>(
  ({ className, size, variant, children, to, ...props }, ref) => {
    const handleClick = useCallback((e: { preventDefault: () => void; }) => {
      e.preventDefault();
      const element = document.getElementById(to);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, [to]);
    return (
      <button
        {...props}
        ref={ref}
        onClick={handleClick}
        className={cn(buttonVariants({ variant, size, className }))}
      >
        {children}
      </button>
    );
  }
);

Scroll.displayName = "Scroll";

export default Scroll;
