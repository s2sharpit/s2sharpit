import Image from "next/image"
import Link from "next/link"
import projectsData from "../data/projectsjData";
import { ArrowForward } from "@mui/icons-material";
import { useState } from "react";

export default function Projects() {
    return (
        <section id="projects" className="pt-8 sm:pt-24 pb-8 px-8">
            <h2 className="text-3xl text-title-color text-center font-semibold">Projects</h2>
            <span className="block mb-16 text-text-color text-center">Most Recent Work</span>

            <div className="max-w-4xl mx-auto">

                {/* <ul className="flex items-center gap-8 justify-center mb-8 text-lg font-medium text-title-color">
                    <li className="hover:text-title-color-dark py-1 px-3 cursor-pointer rounded-lg bg-title-color text-container-color">All</li>
                    <li className="hover:text-title-color-dark py-1 px-3 cursor-pointer rounded-lg">Web</li>
                </ul> */}

                <div className="grid gap-6 xs:grid-cols-[350px] md:grid-cols-2 sm:gap-8 md:gap-12 justify-center md:px-8 lg:px-20">
                    {projectsData.map(data => <Project key={data.title} data={data} />)}
                </div>
            </div>
        </section>
    )
}

const Project = ({ data }: { data: any }) => {
    return (
        <div className="bg-container-color border border-black/10 p-5 rounded-2xl">
            <Image src={data.img} alt={data.title + "_img"} width={1000} height={1000} className="h-48 w-full rounded-2xl border border-black/10" />
            <h3 className="text-xl text-title-color font-medium mt-5">{data.title}</h3>
            <Link href={data.url} target="_blank" className="btn text-sm inline-flex items-center gap-x-1 cursor-pointer">
                Demo
                <ArrowForward fontSize="inherit" className="btnIcon transition duration-300" />
            </Link>
        </div>
    )
}