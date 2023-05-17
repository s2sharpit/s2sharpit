import { Section, Subtle, Title, Wrapper } from "@/components/ui";
import Proj from "@/components/clients/Proj";

interface Project {
  title: string;
  img: string;
  techstack: string;
  type: string;
  github: string;
  url: string;
}

export default async function Projects() {
  const req = await fetch(`${process.env.URL}/api/projects`);
  const projectData: Project[] = !req.ok ? [] : await req.json();

  return (
    <Section id="projects">
      <Title className="title">Projects</Title>
      <Subtle className="subTitle">Most Recent Works</Subtle>
      <Wrapper>
        <Proj projectData={projectData}/>
      </Wrapper>
    </Section>
  );
}
