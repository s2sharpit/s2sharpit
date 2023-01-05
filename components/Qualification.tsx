import { useState } from "react";
import qualifiData from "../data/qualifiData";
import { BusinessCenter, BusinessCenterOutlined, CalendarMonthOutlined, School, SchoolOutlined } from "@mui/icons-material";
import Link from "next/link";

let toggle = false;
export default function Qualification() {
    const [state, setState] = useState<number>(1);
    return (
        <section id="qualification">
            <h2 className="title">Qualification</h2>
            <span className="subTitle">My Personal Journey</span>

                <div className="flex justify-center mb-8 md:text-lg">
                    <div onClick={() => setState(1)} className={(state === 1 ? "text-title-color-dark" : "text-title-color") + " inline-flex items-center font-medium mx-3 sm:mx-4 cursor-pointer hover:text-title-color-dark"}>
                        {state === 1 ? <School /> : <SchoolOutlined />}
                        <span className="ml-1">Education</span>
                    </div>
                    <div onClick={() => setState(2)} className={(state === 2 ? "text-title-color-dark" : "text-title-color") + " inline-flex items-center font-medium mx-3 sm:mx-4 cursor-pointer hover:text-title-color-dark"}>
                        {state === 2 ? <BusinessCenter /> : <BusinessCenterOutlined />}
                        <span className="ml-1">Certifications</span>
                    </div>
                </div>

                <div className="max-w-sm mx-auto">
                    {/* 2 times */}
                    {qualifiData.map((data) => <Qualifi key={data.key} data={data} state={state} />)}
                </div>
        </section>
    )
}

function Qualifi({ data, state }: { data: any, state: number }) {
    toggle = false;
    return (
        <div className={(state === data.key ? "" : "hidden")}>
            {(data.quali).map((data: any) => <Quali key={data.name} data={data} />)}
        </div>
    )
}

function Quali({ data }: { data: any }) {
    toggle =! toggle;
    return (
        <div className="laChild grid grid-cols-[1fr_max-content_1fr] gap-2 gap-x-6">
            <div className={(toggle ? "hidden" : "")}></div>
            <div className={(toggle ? "order-last" : "")}>
                <span className="inline-block h-[13px] w-[13px] bg-text-color rounded-full"></span>
                <div className="lChild w-[1px] h-full bg-text-color -translate-y-2 translate-x-[6px]"></div>
            </div>
            <div>
                <Link href={data.url || ""} target="_blank" className={(!data.url && "pointer-events-none") + " font-medium text-title-color hover:text-title-color-dark"}>{data.name}</Link>
                <div className="text-sm mb-4">{data.desc}</div>
                <div className="text-sm"><CalendarMonthOutlined fontSize="inherit" className="mb-1 mr-1" />{data.duration}</div>
            </div>
        </div>
    )
}