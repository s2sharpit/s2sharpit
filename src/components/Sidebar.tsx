"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import SidebarNav from "./SidebarNav";
import {
  FaGithub,
  FaLinkedin,
  FaXTwitter,
  FaRegEnvelope,
  FaSun,
  FaMoon,
} from "react-icons/fa6";
import { useTheme } from "next-themes";

export default function Sidebar() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  const socialLinks = [
    {
      icon: <FaGithub className="w-6 h-6" />,
      href: "https://github.com/s2sharpit",
      label: "GitHub",
    },
    {
      icon: <FaLinkedin className="w-6 h-6" />,
      href: "https://linkedin.com/in/s2sharpit",
      label: "LinkedIn",
    },
    {
      icon: <FaXTwitter className="w-6 h-6" />,
      href: "https://x.com/s2sharpit",
      label: "X",
    },
    {
      icon: <FaRegEnvelope className="w-6 h-6" />,
      href: "mailto:s2sharpit@gmail.com",
      label: "Email",
    },
  ];

  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:pt-20 lg:pb-12">
      <div>
        {/* Profile Avatar */}
        <div className="mb-4 relative w-20 h-20 rounded-full overflow-hidden border border-accent/20 p-0.5 bg-background shrink-0">
          <div className="w-full h-full rounded-full overflow-hidden relative">
            <Image
              src="/s2sharpit.png"
              alt="Tushar Saini"
              fill
              priority
              sizes="80px"
              className="object-cover"
            />
          </div>
        </div>

        {/* Branding */}
        <h1 className="text-5xl sm:text-6xl font-bold font-display tracking-tight text-foreground">
          Tushar Saini
        </h1>

        {/* Role */}
        <h2 className="text-foreground font-sans font-medium text-base sm:text-lg mt-2">
          Software Engineer
        </h2>

        {/* Location */}
        <h3 className="text-muted-text font-sans text-sm mt-1">
          Hyderabad, India
        </h3>

        {/* Tagline */}
        <p className="text-muted-text text-sm sm:text-base max-w-xs mt-2.5 leading-relaxed font-sans font-normal italic text-pretty">
          I build robust, accessible, and performant software for the web.
        </p>

        {/* Desktop Vertical Scroll Spy Menu */}
        <SidebarNav />
      </div>

      {/* Socials Panel & Theme Toggle */}
      <div className="mt-8 lg:mt-0 flex items-center justify-between lg:justify-start lg:gap-8">
        <ul
          className="flex items-center space-x-6"
          aria-label="Social media links"
        >
          {socialLinks.map((social, idx) => (
            <li key={idx}>
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-muted-text hover:text-accent transition-colors duration-300"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            </li>
          ))}
        </ul>

        {mounted ? (
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="flex items-center justify-center p-2 rounded-full border border-border/40 bg-accent/[0.03] text-muted-text hover:text-accent hover:border-accent/30 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer select-none"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
          >
            {theme === "dark" ? (
              <FaSun className="w-5 h-5 transition-transform duration-500 hover:rotate-45" />
            ) : (
              <FaMoon className="w-5 h-5 transition-transform duration-500 hover:-rotate-12" />
            )}
          </button>
        ) : (
          <div className="w-9 h-9" />
        )}
      </div>
    </header>
  );
}
