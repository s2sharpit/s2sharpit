import { ArrowForward, CheckCircleOutline, Close } from "@mui/icons-material";
import serviceData from "../data/serviceData";
import { SetStateAction, useState } from "react";

export default function Services() {
    return (
        <section id="services">
            <h2 className="title">Services</h2>
            <span className="subTitle">What I Offer</span>

            <div className="max-w-4xl mx-auto grid gap-6 xs:grid-cols-[350px] sm:grid-cols-[repeat(2,218px)] md:grid-cols-3 lg:grid-cols-[repeat(3,240px)] justify-center md:justify-between gap-x-9 lg:gap-x-11">
                {serviceData.map(data => <Service key={data.title} data={data} />)}
            </div>
        </section>
    )
}

function Service({ data }: { data: any }) {
    const [state, setState] = useState(false);
    return (
        <div className="relative bg-container-color pt-12 sm:pt-24 pb-5 sm:pb-8 max-sm:px-6 sm:pl-10 border border-border-color/10 rounded-2xl">
            <div className="text-title-color">
                {data.icon}
                <h3 className="text-xl mb-4 font-medium sm:w-1/2">{data.title}</h3>
            </div>
            <span onClick={() => setState(true)} className="group text-title-color text-sm inline-flex items-center gap-x-1 hover:cursor-pointer">
                View More
                <span className="transition duration-300 group-hover:translate-x-1">
                    <ArrowForward fontSize="inherit" />
                </span>
            </span>

            <div className={(state ? "opacity-100 visible" : "opacity-0 invisible") + " fixed top-0 left-0 right-0 bottom-0 bg-bg-color z-[500] flex justify-center items-center max-sm:pt-16 px-6 sm:px-4 max-sm:pb-10 transition duration-300"}>
                <div className="w-[500px] relative bg-container-color pt-16 pb-10 px-10 rounded-3xl">
                    <Close fontSize="small" onClick={() => setState(false)} className="absolute top-6 right-6 text-title-color hover:cursor-pointer" />
                    <h3 className="text-center text-lg font-medium mb-4 text-title-color">{data.title}</h3>
                    <p className="text-center text-sm sm:px-10 md:px-14 mb-8">Service with more than 3 years of experience.Providing quality work to clients and companies.</p>

                    <ul className="grid gap-6 gap-y-3">
                        {(data.ul).map((data: any) => <Li key={data.li} data={data} />)}
                    </ul>
                </div>
            </div>
        </div>
    )
}

function Li({ data }: { data: any }) {
    return (
        <li className="flex items-center gap-x-2">
            <CheckCircleOutline fontSize="small" className="text-title-color" />
            <p className="text-sm">{data.li}</p>
        </li>
    )
}