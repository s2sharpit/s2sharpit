"use client";

import { useEffect, useState } from "react";

export default function SidebarNav() {
  const [activeSection, setActiveSection] = useState("about");

  const navItems = [
    { name: "about", href: "#about" },
    { name: "experience", href: "#experience" },
    { name: "projects", href: "#projects" },
    { name: "skills", href: "#skills" },
  ];

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-25% 0px -55% 0px",
      threshold: 0.1,
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      // Find the entry that is intersecting
      const visibleEntry = entries.find((entry) => entry.isIntersecting);
      if (visibleEntry) {
        setActiveSection(visibleEntry.target.id);
      }
    };

    const observer = new IntersectionObserver(
      handleIntersection,
      observerOptions,
    );

    navItems.forEach((item) => {
      const el = document.getElementById(item.name);
      if (el) {
        observer.observe(el);
      }
    });

    return () => {
      navItems.forEach((item) => {
        const el = document.getElementById(item.name);
        if (el) {
          observer.unobserve(el);
        }
      });
    };
  }, []);

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string,
  ) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="hidden lg:block mt-8" aria-label="Table of contents">
      <ul className="flex flex-col space-y-1 w-max">
        {navItems.map((item) => {
          const isActive = activeSection === item.name;

          return (
            <li key={item.name}>
              <a
                href={item.href}
                onClick={(e) => handleScroll(e, item.name)}
                className="group flex items-center py-1.5 transition-all duration-300"
              >
                {/* Horizontal active indicator line */}
                <span
                  className={`mr-4 h-[1px] transition-all duration-300 ${
                    isActive
                      ? "w-16 bg-accent"
                      : "w-8 bg-muted-text/40 group-hover:w-16 group-hover:bg-foreground"
                  }`}
                />

                {/* Section Title */}
                <span
                  className={`text-xs uppercase font-bold tracking-widest transition-all duration-300 ${
                    isActive
                      ? "text-accent"
                      : "text-muted-text group-hover:text-foreground"
                  }`}
                >
                  {item.name}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
