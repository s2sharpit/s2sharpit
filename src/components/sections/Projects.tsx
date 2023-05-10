import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaArrowCircleUp } from "react-icons/fa";
import { Section, Subtle, Title, Wrapper } from "@/components/ui";
import Proj, { val } from "@/components/clients/Proj";
import projectData from "@/data/projectData";
import { useMemo } from "react";

export default function Projects() {
  const types = useMemo(() => ["All", "Web", "App"], []);
  
  const filteredData = useMemo(() => {
    return projectData.filter((data) => {
      return val === 0 || data.type === types[0];
    });
  }, [types]);

  return (
    <Section id="projects">
      <Title className="title">Projects</Title>
      <Subtle className="subTitle">Most Recent Works</Subtle>
      <Wrapper>
        <Proj />
        <div className="grid gap-6 xs:grid-cols-[350px] sm:grid-cols-[350px] md:grid-cols-2 sm:gap-8 md:gap-12 justify-center lg:px-8">
          {filteredData.map((data) => (
            <Project key={data.title} data={data} />
          ))}
        </div>
      </Wrapper>
    </Section>
  );
}

interface Project {
  title: string;
  img: string;
  techstack: string;
  type: string;
  github: string;
  url: string;
}

const Project = ({ data }: { data: Project }) => {
  return (
    <div className="bg-white border p-5 rounded-2xl">
      <Image
        priority
        quality={100}
        src={`/portfolio/${data.img}.png`}
        alt={data.title + "_img"}
        width={1000}
        height={1000}
        className="h-48 w-full rounded-2xl border border-border-color/10"
      />
      <div className="flex mt-5 items-center justify-between">
        <div className="text-sm">
          <h3 className="text-xl text-neutral-700 font-medium">{data.title}</h3>
          {data.techstack}
        </div>
        <div className="inline-flex items-center gap-x-3 text-neutral-700">
          <Link
            href={data.github}
            target="_blank"
            className="text-[1.7rem] hover:text-neutral-800 duration-300"
            aria-label="link"
          >
            <FaGithub />
          </Link>
          <Link
            href={data.url}
            target="_blank"
            className="text-[1.7rem] hover:text-neutral-800 duration-300"
            aria-label="link"
          >
            <FaArrowCircleUp className="rotate-45" />
          </Link>
        </div>
      </div>
    </div>
  );
};