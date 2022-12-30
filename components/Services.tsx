import { ArrowForward, CheckCircleOutline, Close } from "@mui/icons-material";
import serviceData from "../data/serviceData";
import { SetStateAction, useState } from "react";

export default function Services() {
    return (
        <section id="services" className="pt-8 sm:pt-24 pb-8 px-8">
            <h2 className="text-3xl text-title-color text-center font-semibold">Services</h2>
            <span className="block mb-16 text-text-color text-center">What I Offer</span>

            <div className="max-w-4xl mx-auto grid gap-6 sm:grid-cols-[repeat(2,218px)] md:grid-cols-[repeat(3,218px)] lg:grid-cols-[repeat(3,270px)] justify-center gap-x-9">
                {serviceData.map(data => <Service key={data.title} data={data} />)}
            </div>
        </section>
    )
}

function Service({ data }: { data: any }) {
    const [state, setState] = useState(false);
    return (
        <div className="relative bg-container-color pt-14 sm:pt-24 pb-5 sm:pb-8 pl-6 sm:pl-10 max-sm:pr-2 border border-black/10 rounded-2xl">
            <div className="text-title-color">
                {data.icon}
                <h3 className="text-xl mb-4 font-medium w-1/2">{data.title}</h3>
            </div>
            <span onClick={()=>setState(true)} className="btn text-title-color text-sm inline-flex items-center gap-x-1 cursor-pointer">
                View More
                <ArrowForward fontSize="inherit" className="btnIcon transition duration-300" />
            </span>

            <div className={(state ? "opacity-100 visible" : "opacity-0 invisible") + " fixed top-0 left-0 right-0 bottom-0 bg-black/50 z-[500] flex justify-center items-center max-sm:pt-16 px-6 sm:px-4 max-sm:pb-10 transition duration-300"}>
                <div className="w-[500px] relative bg-container-color pt-16 pb-10 px-10 rounded-3xl">
                    <Close fontSize="small" onClick={()=>setState(false)} className="absolute top-6 right-6 text-title-color cursor-pointer" />
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