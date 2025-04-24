"use client";

import * as React from "react";
import { Button, buttonVariants } from "@/components/ui/button";
import { VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

interface ScrollProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  to: string;
}

function Scroll({
  to,
  className,
  onClick,
  ...props
}: ScrollProps) {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);

    if (!e.defaultPrevented) {
      document.getElementById(to)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Button
      onClick={handleClick}
      className={cn("hover:no-underline cursor-pointer capitalize", className)}
      {...props}
    />
  );
}

export default Scroll;