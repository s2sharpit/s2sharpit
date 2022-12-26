import projData from "../data/projData";

const project = (data) => {
    return (
        // <div
        //     className={"viewProject flex flex-col text-center justify-center w-full h-96 border-2 rounded-2xl border-gray-700 bg-cover bg-no-repeat bg-center " + (data.img)}>
        //     <div
        //         className="bg-gray-700 bg-opacity-70 h-full rounded-2xl p-5 m-2 opacity-0 transition-all duration-500">
        //         <h3 className="m-5 text-2xl font-bold capitalize">{ data.title }</h3>
        //         <p className="text-justify">{ data.para }</p>
        //     </div>
        // </div>
        <div className="h-80 w-80 bg-black rounded-2xl border border-neutral-700 p-5">
            <img src={ data.img } alt="" className="h-2/3 w-full rounded-2xl" />
            <h2 className="text-xl font-semibold mt-5">{ data.title }</h2>
            {/* <small className="text-justify p-0 m-0">{ data.para }</small> */}
            <a href={ data.url } target="_blank" className="mt-2 text-neutral-500 flex viewMore">Demo 
                <span class="material-symbols-outlined transition duration-300 ml-0.5">arrow_forward</span>
            </a>
        </div>
    )
}

export default () => {
    return (
        <section id="projects" className="snap-start h-screen p-20">
            <h1 className="text-center mt-3 mb-8 leading-7 text-md font-semibold text-neutral-400">
                <span className="text-4xl text-white">Projects</span><br />Most recent work
            </h1>
            <div className="flex justify-center space-x-10">
                {projData.map(data => project(data))}
            </div>
        </section>
    )
}