import { Section, Wrapper } from "@/components/ui";
import Proj from "@/components/clients/Proj";
import { SectionHeader } from "@/components/ui/section-header";
import projectData from "@/data/projectData"


export default function Projects() {
    return (
      <Section id="projects" className="mb-12">
        <SectionHeader title="Projects" description="Most Recent Works" />

        <Wrapper>
          <Proj projectData={projectData} />
        </Wrapper>
      </Section>
    );
}
