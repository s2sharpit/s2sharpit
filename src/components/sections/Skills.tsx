import { MdOutlineVerified } from "react-icons/md";
import skillData from "@/data/skillData";
import { Section, Subtle, Title, Wrapper } from "@/components/ui";

export default function Skills() {
    return (
        <Section id="skills">
            <Title>Skills</Title>
            <Subtle>My Technical Level</Subtle>
            <Wrapper variant={'skill'}>
                {skillData.map(data => <End key={data.title} data={data} />)}
            </Wrapper>
        </Section>
    )
}

interface End {
    title: string;
    end: {
        name: string;
        level: string;
    }[]
}

function End({ data }: { data: End }) {
    return (
        <div className="container bg-white border p-5 xs:p-6 lg:p-10 rounded-3xl">
            <h3 className="font-medium text-neutral-700 text-center mb-6">{data.title}</h3>
            <div className="grid grid-cols-2 gap-x-10 gap-y-5 w-fit mx-auto">
                {(data.end).map(data => <Skill key={data.name} data={data} />)}
            </div>
        </div>
    )
}

function Skill({ data }: { data: End["end"][number] }) {
    return (
      <div className="flex gap-x-2">
        <MdOutlineVerified className="text-neutral-700 mt-0.5 text-xl" />
        <div className="grid gap-0.5">
          <h3 className="max-xs:text-sm font-medium text-neutral-700">
            {data.name}
          </h3>
          <span className="text-xs">{data.level}</span>
        </div>
      </div>
    );
}