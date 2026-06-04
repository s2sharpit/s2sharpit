"use client";

import { useEffect, useState } from "react";

export default function Spotlight() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Hide spotlight on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    const updateMousePosition = (e: MouseEvent) => {
      const container = document.getElementById("spotlight-container");
      if (container) {
        container.style.setProperty("--mouse-x", `${e.clientX}px`);
        container.style.setProperty("--mouse-y", `${e.clientY}px`);
      }
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  if (!mounted) return null;

  return (
    <div
      id="spotlight-container"
      className="pointer-events-none fixed inset-0 z-30 hidden lg:block transition duration-300"
      style={{
        background: "radial-gradient(600px at var(--mouse-x, 0px) var(--mouse-y, 0px), var(--spotlight-color), var(--spotlight-color-transparent) 80%)"
      }}
    />
  );
}
