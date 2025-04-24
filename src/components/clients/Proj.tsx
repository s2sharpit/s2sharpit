"use client";

import { FaGithub, FaArrowCircleUp } from "react-icons/fa";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { LayoutGroup, motion } from "framer-motion";

const val = 0;

export default function Proj({ projectData }: { projectData: Project[] }) {
  const [activeIndex, setActiveIndex] = useState(val);
  const types = ["All", "Web", "App"];

  const filteredData = projectData.filter((data) => {
    return activeIndex === 0 || data.type === types[activeIndex];
  });

  return (
    <>
      <LayoutGroup>
        <ul className="flex items-center gap-4 justify-center mb-2 text-lg font-medium">
          {types.map((item, index) => (
            <li
              key={item}
              onClick={() => setActiveIndex(index)}
              className={`${
                activeIndex === index
                  ? "text-primary-foreground"
                  : "hover:bg-muted"
              } relative py-1 px-3 hover:cursor-pointer rounded-lg duration-300`}
            >
              {item}
              {index === activeIndex ? (
                <motion.div
                  className="absolute inset-0 bg-primary rounded-md z-[-1]"
                  layoutId="sidebar"
                  transition={{
                    type: "spring",
                    stiffness: 350,
                    damping: 30,
                  }}
                />
              ) : null}
            </li>
          ))}
        </ul>
      </LayoutGroup>
      <div className="grid gap-6 xs:grid-cols-[350px] sm:grid-cols-[350px] md:grid-cols-2 sm:gap-8 md:gap-12 justify-center lg:px-8">
        {filteredData.map((data) => (
          <Project key={data.title} data={data} />
        ))}
      </div>
    </>
  );
}

const Project = ({ data }: { data: Project }) => {
  return (
    <div className="container bg-card border p-5 rounded-2xl">
      <Image
        priority
        quality={100}
        src={`/portfolio/${data.img}.png`}
        alt={data.title + "_img"}
        width={1000}
        height={1000}
        className="h-48 w-full rounded-2xl border border-border-color/10 object-cover"
      />
      <div className="flex mt-5 items-center justify-between">
        <div className="text-sm">
          <h3 className="text-xl font-medium">{data.title}</h3>
          <p className="text-muted-foreground">{data.techstack}</p>
        </div>
        <div className="inline-flex items-center gap-x-3">
          <Link
            href={data.github}
            target="_blank"
            className="text-[1.7rem] hover:text-primary/90 duration-300"
            aria-label="link"
          >
            <FaGithub />
          </Link>
          {data.url && (
            <Link
              href={data.url}
              target="_blank"
              className="text-[1.7rem] hover:text-primary/90 duration-300"
              aria-label="link"
            >
              <FaArrowCircleUp className="rotate-45" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
