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
        <p className="text-muted-text font-sans text-sm md:text-base leading-relaxed text-justify">
          Software engineer with hands-on experience across full-stack
          development, agentic AI systems, and automated deployment pipelines.
          Currently at Capgemini, engineering modules for an enterprise
          insurance platform that serves 13 million users. Outside of that, I
          independently architect AI-powered platforms that connect large
          language models, microservices, and CI/CD infrastructure — built to be
          production-ready from day one, not just demo-ready.
          <br /> I think at the product level before writing a line of code. My
          focus is on systems that are scalable, AI-augmented, and maintainable
          — not just functional.
          <br /> Open to backend, full-stack, and AI engineering roles where I
          can contribute meaningfully from day one.
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
