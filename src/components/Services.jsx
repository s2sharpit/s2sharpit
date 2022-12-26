import servData from "../data/servData";

const service = (data) => {
    return (
        <div className="h-80 w-72 bg-black rounded-2xl border border-neutral-700 p-10">
            <span className="material-symbols-outlined mt-20">{ data.icon }</span>
            <h2 className="text-2xl w-1/2 font-semibold my-5">{ data.title }</h2>
            <button onClick className="text-neutral-500 flex viewMore">View More 
                <span class="material-symbols-outlined transition duration-300 ml-0.5">arrow_forward</span>
            </button>
        </div>
    )
}

export default () => {
    return (
        <section id="services"  className="snap-start h-screen p-20">
            <h1 className="text-center mt-3 mb-8 leading-7 text-md font-semibold text-neutral-400">
                <span className="text-4xl text-white">Services</span><br />What i offer
            </h1>
            <div className="flex justify-center space-x-14 items-center h-80">
                {servData.map(data => service(data))}
            </div>
        </section>
    );
};