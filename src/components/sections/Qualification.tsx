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
  try {
    const req = await fetch(`${process.env.URL}/api/quali`);
    if (!req.ok) {
      throw new Error("Failed to fetch qualification data");
    }
    const qualifiData: Qualifi[] = await req.json();

    return (
      <Section id="qualification">
        <Title className="title">Qualification</Title>
        <Subtle className="subTitle">My Personal Journey</Subtle>
        <Wrapper>
          <QualiCli qualifiData={qualifiData} />
        </Wrapper>
      </Section>
    );
  } catch (error) {
    console.error(error);
    return <div>Error: Failed to fetch qualification data</div>;
  }
}
