import serviceData from "@/data/serviceData";
import ServCli from "@/components/clients/Serv";
import { Section, Subtle, Title, Wrapper } from "@/components/ui";

export default function Services() {
  return (
    <Section id="services">
      <Title>Services</Title>
      <Subtle>What I Offer</Subtle>

      <Wrapper variant={'service'}>
        {serviceData.map((data) => (
          <div key={data.title} className="container relative bg-white pt-12 sm:pt-24 pb-5 sm:pb-8 max-sm:px-6 sm:pl-10 border rounded-2xl">
            <div className="text-neutral-700">
              <span className="text-4xl">{data.icon}</span>
              <h3 className="text-xl my-4 font-medium sm:w-1/2">
                {data.title}
              </h3>
            </div>
            <ServCli data={data} />
          </div>
        ))}
      </Wrapper>
    </Section>
  );
}