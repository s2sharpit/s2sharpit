export default () => {
    return (
        <section id="skills" className="snap-start absolutebottom-full h-screen p-20">
            <h1 className="text-center mt-5 mb-16 text-lg font-semibold"> <span className="text-4xl">Skills</span> <br />
                -----what i know-----</h1>
            <div className="flex flex-row justify-between">
                <div className="w-1/2 pr-10">
                    <h2 className="text-2xl font-bold mt-5">Objective</h2>
                    <p className="text-neutral-400 my-1">To innovate fascinating gadgets.</p>
                    <h2 className="text-2xl font-bold mt-7">Professional Skills</h2>
                    <ul className="text-neutral-400 my-1 list-disc ml-5 grid grid-cols-2">
                        <li className="">Strong Attention to Detail</li>
                        <li className="">Persistent Problem Solver</li>
                        <li className="">High Level of Accuracy</li>
                        <li className="">Natural Negotiator</li>
                    </ul>
                </div>
                <div className="w-1/2 pl-10">
                    <div className="mb-4">
                        <div className="flex mb-1 items-center justify-between">
                            <span>HTML</span>
                            <span>90%</span>
                        </div>
                        <div
                            className="h-2 w-full bg-white rounded-md relative html before:absolute before:h-2 before:w-[90%] before:bg-gray-500 before:rounded-md">
                        </div>
                    </div>
                    <div className="mb-4">
                        <div className="flex mb-1 items-center justify-between">
                            <span>CSS</span>
                            <span>90%</span>
                        </div>
                        <div
                            className="h-2 w-full bg-white rounded-md relative html before:absolute before:h-2 before:w-[90%] before:bg-gray-500 before:rounded-md">
                        </div>
                    </div>
                    <div className="mb-4">
                        <div className="flex mb-1 items-center justify-between">
                            <span>Javascript</span>
                            <span>80%</span>
                        </div>
                        <div
                            className="h-2 w-full bg-white rounded-md relative html before:absolute before:h-2 before:w-4/5 before:bg-gray-500 before:rounded-md">
                        </div>
                    </div>
                    <div className="mb-4">
                        <div className="flex mb-1 items-center justify-between">
                            <span>Python</span>
                            <span>90%</span>
                        </div>
                        <div
                            className="h-2 w-full bg-white rounded-md relative html before:absolute before:h-2 before:w-[90%] before:bg-gray-500 before:rounded-md">
                        </div>
                    </div>
                    <div className="mb-4">
                        <div className="flex mb-1 items-center justify-between">
                            <span>Java</span>
                            <span>80%</span>
                        </div>
                        <div
                            className="h-2 w-full bg-white rounded-md relative html before:absolute before:h-2 before:w-4/5 before:bg-gray-500 before:rounded-md">
                        </div>
                    </div>
                    <div className="mb-4">
                        <div className="flex mb-1 items-center justify-between">
                            <span>C++</span>
                            <span>60%</span>
                        </div>
                        <div
                            className="h-2 w-full bg-white rounded-md relative html before:absolute before:h-2 before:w-2/3 before:bg-gray-500 before:rounded-md">
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}