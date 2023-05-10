'use client'

import { HTMLAttributes, forwardRef, useCallback } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/Button";
import * as React from 'react'

interface ScrollProps
  extends HTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
      to: string,
    }

const Scroll = React.forwardRef<HTMLButtonElement, ScrollProps>(
  ({ className, size, variant, children, to, ...props }, ref) => {
    const handleClick = useCallback(() => {
      const element = document.getElementById(to);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, [to]);
    return (
      <button {...props} ref={ref} onClick={handleClick} className={cn(buttonVariants({ variant, size, className }))}>
        {children}
      </button>
    );
  }
);

Scroll.displayName = "Scroll";

export default Scroll;
