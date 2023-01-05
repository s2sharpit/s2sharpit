import { VerifiedOutlined } from "@mui/icons-material";
import skillData from "../data/skillData";

export default function Skills() {
    return (
        <section id="skills" className="section">
            <h2 className="title">Skills</h2>
            <span className="block mb-16 text-text-color text-center">My Technical Level</span>

            <div className="grid gap-6 md:grid-cols-2 gap-x-8 md:gap-x-16 justify-center md:px-8">
                {skillData.map(data => <End key={data.title} data={data} />)}
            </div>
        </section>
    )
}

function End({ data }: { data: any }) {
    return (
        <div className="bg-container-color border border-border-color/10 p-5 xs:p-6 lg:p-10 rounded-3xl">
            <h3 className="font-medium text-title-color text-center mb-6">{data.title} Developer</h3>
            <div className="grid grid-cols-2 gap-x-10 gap-y-4 w-fit mx-auto">
                {(data.end).map((data: any) => <Skill key={data.name} data={data} />)}
            </div>
        </div>
    )
}

function Skill({ data }: { data: any }) {
    return (
        <div className="flex gap-x-2">
            <VerifiedOutlined fontSize="small" className="text-title-color mt-0.5" />
            <div>
                <h3 className="max-xs:text-sm font-medium text-title-color">{data.name}</h3>
                <span className="text-xs">{data.level}</span>
            </div>
        </div>
    )
}