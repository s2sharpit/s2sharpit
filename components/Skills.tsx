import { VerifiedOutlined } from "@mui/icons-material";
import skillData from "../data/skillData";

export default function Skills() {
    return (
        <section id="skills" className="pt-8 sm:pt-24 pb-8 px-8">
            <h2 className="text-3xl text-title-color text-center font-semibold">Skills</h2>
            <span className="block mb-16 text-text-color text-center">My Technical Level</span>

            <div className="max-w-4xl mx-auto grid gap-6 md:grid-cols-2 gap-x-8 md:gap-x-12 justify-center md:px-8 lg:px-16">
                {skillData.map(data => <End key={data.title} data={data} />)}
            </div>
        </section>
    )
}

function End({ data }: { data: any }) {
    return (
        <div className="bg-container-color border border-black/10 p-5 xs:p-6 lg:p-10 rounded-3xl">
            <h3 className="font-medium text-center mb-6">{data.title} Developer</h3>
            <div className="grid grid-cols-2 gap-x-10 gap-y-4 w-fit mx-auto">
                {(data.end).map((data: any) => <Skill key={data.name} data={data} />)}
            </div>
        </div>
    )
}

function Skill({ data }: { data: any }) {
    return (
        <div className="flex gap-x-2">
            <VerifiedOutlined fontSize="small" className="text-title-color" />
            <div>
                <h3 className="max-xs:text-sm font-medium text-title-color">{data.name}</h3>
                <span className="text-xs">{data.level}</span>
            </div>
        </div>
    )
}