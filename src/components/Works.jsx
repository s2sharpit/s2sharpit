import SectionTitle from "./SectionTitle";
import WorkItem from "./WorkItem";
import works from "../data/works"

export default function Works() {
    return (
        <div className="py-12">
            <SectionTitle id="Recent Works" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {works.map(work => <WorkItem key={work.title} work={work} />)}
            </div>
        </div>
    )
}