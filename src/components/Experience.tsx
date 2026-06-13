"use client";

import { LuArrowUpRight } from "react-icons/lu";

export default function Experience() {
  const experiences = [
    {
      timeline: "Sep 2025 – Present",
      role: "Software Engineer",
      company: "Capgemini",
      companyUrl: "https://www.capgemini.com",
      location: "Hyderabad, India",
      description:
        "Engineered Angular UI modules for an enterprise insurance platform serving 13M+ users, delivering end-to-end policy and claims workflows across Agile sprints. Underwent rigorous technical training in Java Core and Spring Boot backend development. Integrated RESTful APIs into Angular services and partnered with backend engineers through daily standups and code reviews to ship features on schedule with zero regressions. Triaged and resolved production defects by diagnosing root causes, applying targeted fixes, and validating resolutions to maintain platform stability at scale.",
      skills: [
        "Java",
        "Spring Boot",
        "Angular",
        "TypeScript",
        "REST APIs",
        "Agile",
        "Defect Triaging",
      ],
    },
    {
      timeline: "May – Aug 2023",
      role: "Open Source Contributor",
      company: "GirlScript Summer of Code (GSSoC)",
      companyUrl: "https://gssoc.girlscript.tech",
      location: "Remote",
      description:
        "Ranked 12 / 1,000+ contributors program-wide by shipping full-stack features across 10+ repositories over 4 months. Migrated 3 projects from React to Next.js, implementing SSR and restructuring codebases to cut page-load time by 30%. Closed 50+ bugs and merged 100+ pull requests across collaborative repos using MERN Stack, Next.js, and TypeScript.",
      skills: ["React", "Next.js", "TypeScript", "SSR", "Git", "MERN Stack"],
    },
  ];

  return (
    <section
      id="experience"
      className="scroll-mt-24 lg:scroll-mt-36"
      aria-label="Work experience"
    >
      {/* Sticky Section Heading for Mobile */}
      <div className="sticky top-0 z-20 -mx-6 mb-4 bg-background/80 px-6 py-5 backdrop-blur-md lg:hidden">
        <h2 className="text-base sm:text-lg font-bold uppercase tracking-widest text-accent">
          Experience
        </h2>
      </div>

      {/* Experience Cards Container */}
      <div className="group/list flex flex-col space-y-12">
        {experiences.map((exp, idx) => (
          <div
            key={idx}
            className="group grid grid-cols-1 md:grid-cols-12 gap-4 transition-all duration-300 lg:group-hover/list:opacity-50 lg:hover:opacity-100! lg:hover:bg-accent/2 p-4 -mx-4 rounded-lg lg:relative"
          >
            {/* Timeline Column */}
            <div className="md:col-span-3">
              <span className="text-[11px] font-mono uppercase tracking-wider text-muted-text/80">
                {exp.timeline}
              </span>
            </div>

            {/* Experience Detail Column */}
            <div className="md:col-span-9 space-y-3">
              {/* Role & Company Header */}
              <div>
                <h3 className="font-sans font-medium text-foreground text-base leading-snug">
                  <a
                    href={exp.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-baseline group/link text-foreground hover:text-accent font-semibold leading-tight"
                  >
                    <span className="inline-block">
                      {exp.role} · {exp.company}
                      <LuArrowUpRight className="inline-block h-3.5 w-3.5 shrink-0 transition-transform duration-300 translate-y-px ml-1 text-muted-text group-hover/link:text-accent group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                    </span>
                    <span className="absolute inset-0 hidden lg:block" />
                  </a>
                </h3>
                <span className="block text-xs text-muted-text/75 mt-0.5">
                  {exp.location}
                </span>
              </div>

              {/* Description Paragraph */}
              <p className="text-muted-text text-sm leading-relaxed text-justify">
                {exp.description}
              </p>

              {/* Technologies Used */}
              <div className="flex flex-wrap gap-2 pt-2">
                {exp.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="inline-flex items-center rounded-full border border-accent/15 bg-accent/10 px-3.5 py-1 text-xs font-medium text-accent/70 hover:bg-accent/15 hover:border-accent/30 hover:-translate-y-0.5 transition-all duration-300 select-none"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
