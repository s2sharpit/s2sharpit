"use client";

import { ArrowUpRight } from "lucide-react";

export default function Projects() {
  const projectsList = [
    {
      title: "PawProtect — AI-Powered Pet Insurance Platform",
      timeline: "Feb – May 2026",
      techstack: [
        "Java",
        "Spring Boot",
        "FastAPI",
        "Angular SSR",
        "MySQL",
        "Docker",
        "GitHub Actions",
        "Google Gemini AI",
      ],
      url: "https://pawprotect.s2sharpit.dev",
      github: "https://github.com/s2sharpit/pawprotect", // Fallback github link
      description:
        "Architected a microservices platform (Spring Boot + Angular SSR + FastAPI) containerised with Docker Compose for full dev/prod environment parity. Integrated Google Gemini AI to parse veterinary PDFs, extracting structured health data and returning eligibility decisions as validated JSON. Secured all API surfaces with JWT authentication, HTTP-only cookies, and SSR-compatible Bearer token forwarding; automated CI/CD via GitHub Actions to GHCR and DigitalOcean.",
    },
    {
      title: "CodeFusion — Developer Project Sharing Platform",
      timeline: "Mar – May 2024",
      techstack: ["Next.js", "Node.js", "MongoDB", "TailwindCSS", "GitHub API"],
      url: "https://codefusion.s2sharpit.dev",
      github: "https://github.com/s2sharpit/codefusion",
      description:
        "Built a full-stack platform enabling students to create portfolios, showcase projects with GitHub API-enriched metadata (descriptions, languages, topics, collaborators), and discover peers via search and filters. Shipped a likes / engagement system to surface trending work, driving platform interactivity and user retention.",
    },
    {
      title: "Drug Addiction Risk Prediction Model — ML Classification",
      timeline: "Feb – Jun 2025",
      techstack: ["Python", "Scikit-learn", "Pandas", "Matplotlib"],
      url: "https://github.com/s2sharpit/drug-addiction", // Fallback github link
      description:
        "Trained a supervised classification model predicting addiction risk, achieving 81% accuracy on a 13,000-sample test set. Benchmarked Random Forest, SVM, and Logistic Regression; applied feature selection and data cleaning to reduce overfitting and improve generalisation.",
    },
  ];

  return (
    <section
      id="projects"
      className="scroll-mt-24 lg:scroll-mt-36"
      aria-label="Projects showcase"
    >
      {/* Sticky Section Heading for Mobile */}
      <div className="sticky top-0 z-20 -mx-6 mb-4 bg-background/80 px-6 py-5 backdrop-blur-md lg:hidden">
        <h2 className="text-base sm:text-lg font-bold uppercase tracking-widest text-accent">
          Projects
        </h2>
      </div>

      {/* Projects Cards Container with Hover dimming mask */}
      <div className="group/list flex flex-col space-y-12">
        {projectsList.map((project, idx) => {
          const targetUrl = project.url;

          return (
            <div
              key={idx}
              className="group grid grid-cols-1 md:grid-cols-12 gap-4 transition-all duration-300 lg:group-hover/list:opacity-50 lg:hover:!opacity-100 lg:hover:bg-accent/[0.02] p-4 -mx-4 rounded-lg lg:relative"
            >
              {/* Timeline Column */}
              <div className="md:col-span-3">
                <span className="text-[11px] font-mono uppercase tracking-wider text-muted-text/80">
                  {project.timeline}
                </span>
              </div>

              {/* Detail Column */}
              <div className="md:col-span-9 space-y-3">
                {/* Title */}
                <div>
                  <h3 className="font-sans font-medium text-foreground text-base leading-snug">
                    <a
                      href={targetUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center group/link text-foreground hover:text-accent font-semibold"
                    >
                      <span>{project.title}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 ml-1 text-muted-text group-hover/link:text-accent transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                      <span className="absolute inset-0 z-20 hidden lg:block" />
                    </a>
                  </h3>
                </div>

                {/* Description Paragraph */}
                <p className="text-muted-text text-sm leading-relaxed text-justify">
                  {project.description}
                </p>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.techstack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="inline-flex items-center rounded-full border border-accent/15 bg-accent/10 px-3.5 py-1 text-xs font-medium text-accent/70 hover:bg-accent/15 hover:border-accent/30 hover:-translate-y-0.5 transition-all duration-300 select-none"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
