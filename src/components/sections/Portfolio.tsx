import serviceData from "@/data/serviceData";
import { Section, Subtle, Title, Wrapper } from "@/components/ui";
import Link from "next/link";
import { MdArrowForward } from "react-icons/md";

export default function Services() {
  return (
    <Section id="portfolio">
      <Title>Portfolio</Title>
      <Subtle>My Coding Profiles</Subtle>

      <Wrapper variant={"service"}>
        {serviceData.map((data) => (
          <Link
            key={data.title}
            href={data.url}
            target="_blank"
            aria-label="link"
            className="group container relative bg-white pt-12 sm:pt-24 pb-5 sm:pb-8 max-sm:px-6 sm:pl-10 border rounded-2xl"
          >
            <div className="text-neutral-700 sm:pt-2">
              <span className="text-4xl">{data.icon}</span>
              <h3 className="text-xl my-4 sm:my-6 font-medium sm:w1/2">
                {data.title}
              </h3>
            </div>
            <div className="text-neutral-700 text-sm inline-flex items-center gap-x-1">
              Visit
              <MdArrowForward className="transition duration-300 group-hover:translate-x-1" />
            </div>
          </Link>
        ))}
      </Wrapper>
    </Section>
  );
}
