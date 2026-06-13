"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";

interface ProfileAvatarProps {
  src: string;
  alt: string;
}

export default function ProfileAvatar({ src, alt }: ProfileAvatarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isRendered, setIsRendered] = useState(false);
  const [isAnimate, setIsAnimate] = useState(false);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    if (isOpen) {
      setIsRendered(true);
      document.body.style.overflow = "hidden";
      // Small delay to allow the browser to register the DOM before animating
      timer = setTimeout(() => setIsAnimate(true), 20);
    } else {
      setIsAnimate(false);
      timer = setTimeout(() => {
        setIsRendered(false);
        document.body.style.overflow = "";
      }, 250); // Matches transition duration
    }
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      // Restore scroll if component unmounts unexpectedly
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* Profile Avatar Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="mb-4 relative w-20 h-20 rounded-full overflow-hidden border border-accent/20 p-0.5 bg-background shrink-0 cursor-pointer group hover:scale-105 hover:border-accent hover:shadow-[0_0_15px_var(--accent)] focus:outline-none focus:ring-2 focus:ring-accent/50 focus:ring-offset-2 focus:ring-offset-background transition-all duration-300 ease-out"
        aria-label="View profile picture in large size"
      >
        <div className="w-full h-full rounded-full overflow-hidden relative">
          <Image
            src={src}
            alt={alt}
            fill
            priority
            sizes="80px"
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
      </button>

      {/* Lightbox / Dialog */}
      {isRendered &&
        createPortal(
          <div
            className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300 ease-out ${
              isAnimate
                ? "bg-black/60 backdrop-blur-xs opacity-100"
                : "bg-black/0 backdrop-blur-none opacity-0"
            }`}
            onClick={() => setIsOpen(false)}
            aria-modal="true"
            role="dialog"
          >
            {/* Close button */}
            <button
              onClick={() => setIsOpen(false)}
              className="fixed top-6 right-6 p-2 rounded-full border border-border/10 bg-background/40 text-foreground/70 hover:text-foreground hover:bg-background/80 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer shadow-lg"
              aria-label="Close dialog"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Dialog Content */}
            <div
              className={`relative max-w-full max-h-[80vh] aspect-square w-full sm:w-md overflow-hidden rounded-2xl border border-border/20 shadow-2xl transition-all duration-300 ease-out cursor-default ${
                isAnimate
                  ? "scale-100 opacity-100 translate-y-0"
                  : "scale-95 opacity-0 translate-y-4"
              }`}
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image itself
            >
              <Image
                src={src}
                alt={alt}
                fill
                priority
                sizes="(max-width: 640px) 320px, (max-width: 768px) 400px, 450px"
                className="object-cover"
              />
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}
