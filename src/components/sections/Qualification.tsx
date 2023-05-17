
import { Section, Subtle, Title, Wrapper } from "@/components/ui";
import QualiCli from "@/components/clients/QualiCli";

interface Qualifi {
  key: number;
  quali: {
    name: string;
    desc: string;
    duration: string;
    url?: string;
  }[];
}

export default async function Qualification() {

  const req = await fetch(`${process.env.URL}/api/quali`);
  const qualifiData: Qualifi[] = (!req.ok) ? [] : await req.json();
  
  return (
    <Section id="qualification">
      <Title className="title">Qualification</Title>
      <Subtle className="subTitle">My Personal Journey</Subtle>
      <Wrapper>
        <QualiCli qualifiData={qualifiData} />
      </Wrapper>
    </Section>
  );
}

