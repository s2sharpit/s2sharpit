import { Section, Wrapper } from "@/components/ui";
import Proj from "@/components/clients/Proj";
import { SectionHeader } from "../ui/section-header";


export default async function Projects() {
  try {
    const req = await fetch(`${process.env.URL}/api/projects`);
    if (!req.ok) {
      throw new Error("Failed to fetch project data");
    }
    const projectData: Project[] = await req.json();

    return (
      <Section id="projects">
        <SectionHeader title="Projects" description="Most Recent Works" />

        <Wrapper>
          <Proj projectData={projectData} />
        </Wrapper>
      </Section>
    );
  } catch (error) {
    console.error(error);
    return <div>Error: Failed to fetch project data</div>;
  }
}
