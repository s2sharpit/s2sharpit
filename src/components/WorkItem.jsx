export default function WorkItem({ work }) {
    return (
        <a href={work.workUrl} target="_blank" rel="noreferrer" className="bg-slate-300 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 rounded-lg overflow-hidden hover:scale-105 transition">
            <img src={work.imgUrl} alt={work.title} className="w-full h-36 md:h-48 object-cover" />
            <div className="text-gray-600 dark:text-gray-300 p-5 w-full">
                <h3 className="text-lg md:text-xl mb-2 md:mb-3 font-semibold">{work.title}</h3>
                <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm">{work.tech.map(item =>
                    <span key={item} className="inline-block px-2 py-1 bg-slate-200 dark:bg-slate-900 rounded-md">{item}</span>
                )}</p>
            </div>
        </a>
    )
}