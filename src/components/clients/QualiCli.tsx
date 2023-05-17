"use client";

import { useState } from "react";
import Link from "next/link";
import {
  MdBusinessCenter,
  MdOutlineBusinessCenter,
  MdSchool,
  MdOutlineSchool,
  MdOutlineCalendarMonth,
} from "react-icons/md";
import { Button } from "@/components/ui";

interface Qualifi {
  key: number;
  quali: {
    name: string;
    desc: string;
    duration: string;
    url?: string;
  }[];
}
export default function QualiCli({qualifiData}: {qualifiData: Qualifi[]}) {
  const [state, setState] = useState(1);
  return (
    <>
      <div className="flex mb-2 md:text-lg space-x-3">
        <Button
          variant={"link"}
          onClick={() => setState(1)}
          active={state === 1}
        >
          <span className="mr-1 text-2xl">
            {state === 1 ? <MdSchool /> : <MdOutlineSchool />}
          </span>
          Education
        </Button>
        <Button
          variant={"link"}
          onClick={() => setState(2)}
          active={state === 2}
        >
          <span className="mr-1 text-2xl">
            {state === 2 ? <MdBusinessCenter /> : <MdOutlineBusinessCenter />}
          </span>
          Certifications
        </Button>
      </div>
      <div className="max-w-sm mx-auto">
        {/* 2 times */}
        {qualifiData.map((data) => (
          <Qualifi key={data.key} data={data} val={state} />
        ))}
      </div>
    </>
  );
}

function Qualifi({ data, val }: { data: Qualifi, val: number }) {
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
