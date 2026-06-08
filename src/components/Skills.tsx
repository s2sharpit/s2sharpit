"use client";

export default function Skills() {
  const skillCategories = [
    {
      category: "Languages",
      skills: ["Java", "Python", "JavaScript", "TypeScript"],
    },
    {
      category: "Backend",
      skills: [
        "Spring Boot",
        "Node.js",
        "FastAPI",
        "REST APIs",
        "Microservices",
        "JWT",
      ],
    },
    {
      category: "Frontend",
      skills: [
        "Angular",
        "React",
        "Next.js",
        "TailwindCSS",
        "HTML5",
        "CSS3",
        "SSR",
      ],
    },
    {
      category: "Databases",
      skills: ["MySQL", "PostgreSQL", "MongoDB", "SQL"],
    },
    {
      category: "DevOps & Cloud",
      skills: [
        "Docker",
        "GitHub Actions",
        "CI/CD",
        "AWS (EC2, S3, IAM)",
        "Linux",
        "Git",
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="scroll-mt-24 lg:scroll-mt-36"
      aria-label="Technical skills"
    >
      {/* Sticky Section Heading for Mobile */}
      <div className="sticky top-0 z-20 -mx-6 mb-4 bg-background/80 px-6 py-5 backdrop-blur-md lg:hidden">
        <h2 className="text-base sm:text-lg font-bold uppercase tracking-widest text-accent">
          Skills
        </h2>
      </div>

      {/* Skills Layout */}
      <div className="space-y-5">
        {skillCategories.map((group, idx) => (
          <div
            key={idx}
            className="grid grid-cols-1 sm:grid-cols-4 sm:gap-6 items-start"
          >
            {/* Category Title */}
            <div className="mb-1.5 sm:mb-0">
              <span className="text-xs font-bold uppercase tracking-widest text-muted-text font-sans pt-0.5 block">
                {group.category}
              </span>
            </div>

            {/* Flex Wrap Skill Tags Column */}
            <div className="sm:col-span-3 flex flex-wrap gap-2">
              {group.skills.map((skill, sIdx) => (
                <span
                  key={sIdx}
                  className="inline-flex items-center rounded-full border border-accent/15 bg-accent/10 px-3.5 py-1 text-xs font-medium text-accent/70 hover:bg-accent/15 hover:border-accent/30 hover:-translate-y-0.5 transition-all duration-300 select-none"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
