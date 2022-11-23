import Project from "./Project"
import projData from "../data/projData";


export default () => {
    return (
        <section id="projects" className="snap-start absolutebottom-full h-screen p-20">
            <h1 className="text-center mt-3 mb-8 text-lg font-semibold"> <span className="text-4xl">Projects</span> <br />
                -----what i did-----</h1>
            <div className="flex space-x-10">
                {projData.map(data => (
                    <Project key={data.title} data={ data } />
                ))}
                
                 {/* <div className="relative flex flex-col text-center justify-center w-full h-96 ">
                <img src="media/Project/portfolio-1.jpg" alt="" className="rounded-3xl border-2 border-gray-700 h-96" />
                <p className="absolute m-5 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga deserunt aspernatur delectus laboriosam accusamus facilis? Reprehenderit quidem at voluptatem maxime, tenetur itaque. Voluptatum id ipsam commodi provident quos harum quod?</p>
                
            </div> */}
            </div>
        </section>
    )
}