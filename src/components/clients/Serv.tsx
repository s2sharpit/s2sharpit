"use client";

import { useState } from "react";
import { MdArrowForward, MdOutlineCheckCircle, MdClose } from "react-icons/md";
import { Button } from "@/components/ui";

interface Serv {
  title: string;
  ul: {
    li: string;
  }[];
}

export default function ServCli ({ data }: { data: Serv }) {
  const [state, setState] = useState(false);
  return (
    <>
      <button
        onClick={() => setState(true)}
        className="group text-neutral-700 text-sm inline-flex items-center gap-x-1"
      >
        View More
        <MdArrowForward className="transition duration-300 group-hover:translate-x-1" />
      </button>

      <div
        className={`${
          state ? "opacity-100 visible" : "opacity-0 invisible"
        } fixed top-0 left-0 right-0 bottom-0 bg-neutral-800/60 z-[500] flex justify-center items-center max-sm:pt-16 px-6 sm:px-4 max-sm:pb-10 transition duration-300`}
      >
        <div className="container w-[500px] relative bg-white pt-16 pb-10 px-10 rounded-3xl">
          <Button
            variant={"link"}
            onClick={() => setState(false)}
            className="absolute top-4 right-4 text-xl"
          >
            <MdClose />
          </Button>
          <h3 className="text-center text-lg font-medium mb-4 text-neutral-700">
            {data.title}
          </h3>
          <p className="text-center text-sm sm:px-10 md:px-14 mb-8">
            Service with more than 3 years of experience.Providing quality work
            to clients and companies.
          </p>

          <ul className="grid gap-6 gap-y-3">
            {data.ul.map(({ li }) => (
              <li key={li} className="flex items-center gap-x-2">
                <MdOutlineCheckCircle className="text-neutral-700 text-xl" />
                <p className="text-sm">{li}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};