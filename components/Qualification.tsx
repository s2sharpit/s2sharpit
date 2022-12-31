import { useState } from "react";
import qualifiData from "../data/qualifiData";
import { BusinessCenter, BusinessCenterOutlined, CalendarMonthOutlined, School, SchoolOutlined } from "@mui/icons-material";

let toggle = false;
export default function Qualification() {
    const [state, setState] = useState(1);
    return (
        <section id="qaulification" className="pt-8 sm:pt-24 pb-8 px-8">
            <h2 className="text-3xl text-title-color text-center font-semibold">Qualification</h2>
            <span className="block mb-16 text-text-color text-center">My Personal Journey</span>

            <div className="max-w-3xl mx-6 md:mx-auto">
                <div className="flex justify-center mb-8 md:text-lg">
                    <div onClick={()=>setState(1)} className={(state === 1 ? "text-title-color-dark" : "text-title-color") + " inline-flex items-center font-medium mx-3 sm:mx-4 cursor-pointer hover:text-title-color-dark"}>
                        { state === 1 ? <School /> : <SchoolOutlined />}
                        <span className="ml-1">Education</span>
                    </div>
                    <div onClick={()=>setState(2)} className={(state === 2 ? "text-title-color-dark" : "text-title-color") + " inline-flex items-center font-medium mx-3 sm:mx-4 cursor-pointer hover:text-title-color-dark"}>
                        {state === 2 ? <BusinessCenter /> : <BusinessCenterOutlined />}
                        <span className="ml-1">Certifications</span>
                    </div>
                </div>

                <div className="grid sm:grid-cols-[0.7fr] md:grid-cols-[0.5fr] justify-center">
                    {/* 2 times */}
                    {qualifiData.map((data) => <Qualifi key={data.key} data={data} state={state} />)}

                </div>
            </div>
        </section>
    )
}

function Qualifi({ data, state }: { data: any, state: number }) {
    { toggle = false }
    return (
        <div className={(state === data.key ? "" : "hidden")}>
            {/* vary times */}
            {(data.quali).map((data: any) => <Quali key={data.name} data={data} />)}

        </div>
    )
}

function Quali({ data }: { data: any }) {
    { toggle = !toggle }
    return (
        <div className="laChild grid grid-cols-[1fr_max-content_1fr] gap-2 md:gap-x-6">
            <div className={(toggle ? "hidden" : " ")}></div>
            <div className={(toggle ? "hidden" : "")}>
                <span className="inline-block h-[13px] w-[13px] bg-text-color rounded-full"></span>
                <div className="lChild w-[1px] h-full bg-text-color -translate-y-2 translate-x-[6px]"></div>
            </div>
            <div>
                <h3 className="font-medium text-title-color">{data.name}</h3>
                <span className="inline-block text-sm mb-4">{data.desc}</span>
                <div className="text-sm"><CalendarMonthOutlined fontSize="inherit" className="mb-1 mr-1" />{data.duration}</div>
            </div>
            <div className={(toggle ? "" : "hidden")}>
                <span className="inline-block h-[13px] w-[13px] bg-text-color rounded-full"></span>
                <div className="lChild w-[1px] h-full bg-text-color -translate-y-2 translate-x-[6px]"></div>
            </div>
        </div>
    )
}