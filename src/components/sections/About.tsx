import Image from "next/image";
import Link from "next/link";
import aboutData from "@/data/aboutData";
import { Svg } from "@/components/Svg";
import { buttonVariants } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { Section, Wrapper } from "@/components/ui";

import type { JSX } from "react";
import { SectionHeader } from "../ui/section-header";

export default function About() {
  return (
    <Section id="about">
      <SectionHeader title="About Me" description="My Introduction" />

      <Wrapper variant={"about"}>
        <Image
          priority
          src={"/s2sharpit.png"}
          quality={100}
          width={400}
          height={400}
          alt="about_img"
          className="w-56 md:w-80 rounded-3xl max-md:justify-self-center"
        />

        <div className="max-md:text-center">
          <div className="max-w-md grid gap-2 grid-cols-3 mx-auto max-w-d mb-8">
            {aboutData.map((data) => (
              <Box key={data.title} data={data} />
            ))}
          </div>

          <p className="max-w-md mx-auto px-4 mb-8 md:mb-10 text-sm text-justify">
            I am an aspiring <b>software engineer</b> with <b>experience</b> in{" "}
            <b>web development</b> and <b>UI/UX design.</b> I have a passion for{" "}
            <b>creating intuitive</b> and <b>visually appealing</b> interfaces
            that <b>enhance</b> user experience. With a strong foundation in{" "}
            <b>computer science</b> and <b>design principles</b>, I can deliver{" "}
            <b>high-quality</b> products that meet the needs of my{" "}
            <b>clients.</b> I am always looking for new challenges and
            opportunities to learn and grow as a <b>developer</b>.
          </p>
          <Link
            target="_blank"
            className={cn(buttonVariants({ size: "lg" }))}
            href="/cv"
          >
            Download CV
            <Svg.Cv />
          </Link>
        </div>
      </Wrapper>
    </Section>
  );
}

interface Box {
  title: string;
  subTitle: string;
  icon: JSX.Element;
}

function Box({ data }: { data: Box }) {
  return (
    <div className="container bg-card border rounded-xl grid place-items-center py-3 md:py-5 px-2 md:px-4">
      <span className="text-2xl">{data.icon}</span>
      <h3 className="text-sm font-medium">{data.title}</h3>
      <span className="text-xs text-muted-foreground">{data.subTitle}</span>
    </div>
  );
}
