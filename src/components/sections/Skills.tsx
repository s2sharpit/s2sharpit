import { MdOutlineVerified } from "react-icons/md";
import { Section, Wrapper } from "@/components/ui";
import { SectionHeader } from "../ui/section-header";
import skillData from "@/data/skillData";

interface Skill {
  title: string;
  end: {
    name: string;
    level: string;
  }[];
}

export default function Skills() {

    return (
      <Section id="skills">
        <SectionHeader title="Skills" description="My Technical Level" />

        <Wrapper variant={"skill"}>
          {skillData.map((data) => (
            <End key={data.title} data={data} />
          ))}
        </Wrapper>
      </Section>
    );
}

function End({ data }: { data: Skill }) {
  return (
    <div className="container bg-card border p-5 xs:p-6 lg:p-10 rounded-3xl">
      <h3 className="font-medium text-center mb-6">
        {data.title}
      </h3>
      <div className="grid grid-cols-2 gap-x-10 gap-y-5 w-fit mx-auto">
        {data.end.map((data) => (
          <Skill key={data.name} data={data} />
        ))}
      </div>
    </div>
  );
}

function Skill({ data }: { data: Skill["end"][number] }) {
  return (
    <div className="flex gap-x-2">
      <MdOutlineVerified className=" mt-0.5 text-xl" />
      <div className="grid gap-0.5">
        <h3 className="max-xs:text-sm font-medium">
          {data.name}
        </h3>
        <span className="text-xs text-muted-foreground">{data.level}</span>
      </div>
    </div>
  );
}
