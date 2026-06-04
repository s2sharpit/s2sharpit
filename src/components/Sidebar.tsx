"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import SidebarNav from "./SidebarNav";

// Custom Minimalist Outline Icons (Brittany Chiang style)
const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" rx="0.5" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const XIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const MailIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

export default function Sidebar() {
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  const socialLinks = [
    {
      icon: <GithubIcon className="w-5 h-5" />,
      href: "https://github.com/s2sharpit",
      label: "GitHub",
    },
    {
      icon: <LinkedinIcon className="w-5 h-5" />,
      href: "https://linkedin.com/in/s2sharpit",
      label: "LinkedIn",
    },
    {
      icon: <XIcon className="w-5 h-5" />,
      href: "https://x.com/s2sharpit",
      label: "X",
    },
    {
      icon: <MailIcon className="w-5 h-5" />,
      href: "mailto:s2sharpit@gmail.com",
      label: "Email",
    },
  ];

  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:pt-20 lg:pb-12">
      <div>
        {/* Profile Avatar */}
        <div className="mb-4 relative w-20 h-20 rounded-full overflow-hidden border border-accent/20 p-0.5 bg-background flex-shrink-0">
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

      {/* Socials Panel */}
      <div className="mt-8 lg:mt-0">
        <ul
          className="flex items-center space-x-5"
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
      </div>
    </header>
  );
}
