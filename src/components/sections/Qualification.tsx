"use client";
import { MdOutlineCalendarMonth } from "react-icons/md";
import Link from "next/link";
import { Section, Subtle, Title, Wrapper } from "@/components/ui";
import QualiCli, { val } from "@/components/clients/QualiCli";

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
  const qualifiData: Qualifi[] = await req.json();

  // if (!qualifiData.ok) return [];

  return (
    <Section id="qualification">
      <Title className="title">Qualification</Title>
      <Subtle className="subTitle">My Personal Journey</Subtle>
      <Wrapper>
        <QualiCli />
        <div className="max-w-sm mx-auto">
          {/* 2 times */}
          {qualifiData.map((data) => (
            <Qualifi key={data.key} data={data} />
          ))}
        </div>
      </Wrapper>
    </Section>
  );
}

function Qualifi({ data }: { data: Qualifi }) {
  let toggle = false;  
  
  function Quali({ data }: { data: Qualifi["quali"][number] }) {
    toggle = !toggle;
    return (
      <div className="group grid grid-cols-[1fr_max-content_1fr] gap-2 gap-x-6">
        <div className={`${toggle && "hidden"}`}></div>
        <div className={`${toggle && "order-last"}`}>
          <span className="inline-block h-[13px] w-[13px] bg-neutral-500 rounded-full"></span>
          <div className="group-last:hidden w-[1px] h-full bg-neutral-500 -translate-y-2 translate-x-[6px]"></div>
        </div>
        <div>
          <Link
            href={data.url ?? "#"}
            target="_blank"
            className={`${
              !data.url && "pointer-events-none"
            } font-medium text-neutral-700 hover:text-neutral-800`}
          >
            {data.name}
          </Link>
          <div className="text-sm mb-4">{data.desc}</div>
          <div className="text-sm">
            <MdOutlineCalendarMonth className="mb-0.5 mr-1 inline" />
            {data.duration}
          </div>
        </div>
      </div>
    );

  }
  return (
    <div className={val === data.key ? "" : "hidden"}>
      {data.quali.map((data) => (
        <Quali key={data.name} data={data} />
      ))}
    </div>
  );
}
