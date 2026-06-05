"use client";

import { LuArrowUpRight } from "react-icons/lu";

export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-24 lg:scroll-mt-36"
      aria-label="About me"
    >
      {/* Sticky Section Heading for Mobile */}
      <div className="sticky top-0 z-20 -mx-6 mb-4 bg-background/80 px-6 py-5 backdrop-blur-md lg:hidden">
        <h2 className="text-base sm:text-lg font-bold uppercase tracking-widest text-accent">
          About
        </h2>
      </div>

      <div className="space-y-6">
        {/* Bio paragraph */}
        <p className="text-foreground font-sans text-sm md:text-base leading-relaxed text-muted-text text-justify">
          Software engineer specializing in building high-performance web applications and robust user experiences. 
          Experienced in engineering clean, modular frontends using Angular, React, and Next.js, alongside designing 
          scalable backend architectures and RESTful microservices using Java Core, Spring Boot, Node.js, and FastAPI. 
          Focused on delivering production-ready software that balances database query optimization, clean APIs, and refined user interfaces.
        </p>

        {/* CV Link */}
        <div className="pt-4">
          <a
            href="/cv"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-baseline group/link text-foreground hover:text-accent font-medium text-sm transition-colors duration-300"
          >
            <span className="inline-block">
              View curriculum vitae
              <LuArrowUpRight className="inline-block h-3.5 w-3.5 shrink-0 transition-transform duration-300 translate-y-px ml-1 text-muted-text group-hover/link:text-accent group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
