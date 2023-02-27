import Image from "next/image"
import Link from "next/link"
import portfolioData from "../data/portfolioData";
import { GitHub, OutboundOutlined } from "@mui/icons-material";
import { useMemo, useState } from "react";

export default function Portfolio() {

    const [activeIndex, setActiveIndex] = useState(0);
    const types = useMemo(() => ["All", "Web", "App"], []);

    
    const filteredData = useMemo(() => {
        return portfolioData.filter(data => {
            return activeIndex === 0 || data.type === types[activeIndex];
        });
    }, [activeIndex, types]);

    return (
        <section id="portfolio">
            <h2 className="title">Portfolio</h2>
            <span className="subTitle">Most Recent Works</span>
            <div className="max-w-4xl mx-auto">
                <ul className="flex items-center gap-4 justify-center mb-8 text-lg font-medium text-title-color">
                    {types.map((d, index) =>
                        <li
                          key={d}
                          onClick={() => setActiveIndex(index)}
                          className={`${activeIndex === index 
                            ? "bg-title-color-dark text-container-color"
                            : "hover:text-title-color-dark"}
                            py-1 px-3 cursor-pointer rounded-lg`}
                        >{d}</li>
                    )}
                </ul>
                <div className="grid gap-6 xs:grid-cols-[350px] md:grid-cols-2 sm:gap-8 md:gap-12 justify-center lg:px-8">
                    {filteredData.map(data => <Project key={data.title} data={data} />)}
                </div>
            </div>
        </section>
    )
}

const Project = ({ data }: { data: any }) => {
    return (
        <div className="bg-container-color border border-border-color/10 p-5 rounded-2xl">
            <Image src={`/portfolio/${data.img}.png`} alt={data.title + "_img"} width={1000} height={1000} className="h-48 w-full rounded-2xl border border-border-color/10" />
            <div className="flex mt-5 items-center justify-between">
                <div className="text-sm">
                    <h3 className="text-xl text-title-color font-medium">{data.title}</h3>
                    {data.techstack}
                </div>
                <div className="inline-flex items-center gap-x-3 text-title-color">
                    <Link href={data.github} target="_blank" className="text-[1.7rem] hover:text-title-color-dark" aria-label="link"><GitHub fontSize="inherit" /></Link>
                    <Link href={data.url} target="_blank" className="text-3xl hover:text-title-color-dark" aria-label="link"><OutboundOutlined fontSize="inherit" /></Link>
                </div>
            </div>
        </div>
    )
}