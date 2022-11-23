export default () => {
    return (
        <section
            id="services"
            className="snap-start absolutebottom-full h-screen p-20"
        >
            <h1 className="text-center mt-5 mb-16 text-lg font-semibold">
                {" "}
                <span className="text-4xl">Services</span> <br />
                -----things i provide-----
            </h1>
            <div className="flex space-x-10 items-center h-80">
                <div className="relative viewService w-full h-64 border-2 rounded-3xl hover:h-[27rem] transition-all duration-300">
                    <div className="flex flex-col rounded-3xl p-6 bg-gradient-to-tr from-yellow-500 via-purple-600 to-blue-500 text-center items-center justify-center h-64 border-b-2">
                        <div className="">Service 1</div>
                        <div className="">I just provide SERVICE-1</div>
                    </div>
                    <div className="absolute bottom-0 -z-10 flex-col text-center items-center justify-center h-max p-5 border-t2 transition-all duration-1000">
                        <div className="font-bold underline underline-offset-4">
                            About Serivce 1
                        </div>
                        <div className="text-justify">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Praesentium eveniet eaque iste, perspiciatis quasi vero aliquid,
                            soluta repellat fugiat quam velit aliquam possimus. Rem, maiores?
                        </div>
                    </div>
                </div>
                <div className="relative viewService w-full h-64 border-2 rounded-3xl hover:h-[27rem] transition-all duration-300">
                    <div className="flex flex-col rounded-3xl p-6 bg-gradient-to-tr from-blue-800 via-green-800 to-purple-800 text-center items-center justify-center h-64 border-b-2">
                        <div className="">Service 1</div>
                        <div className="">I just provide SERVICE-1</div>
                    </div>
                    <div className="absolute bottom-0 -z-10 flex-col text-center items-center justify-center h-max p-5 border-t2 transition-all duration-1000">
                        <div className="font-bold underline underline-offset-4">
                            About Serivce 1
                        </div>
                        <div className="text-justify">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Praesentium eveniet eaque iste, perspiciatis quasi vero aliquid,
                            soluta repellat fugiat quam velit aliquam possimus. Rem, maiores?
                        </div>
                    </div>
                </div>
                <div className="relative viewService w-full h-64 border-2 rounded-3xl hover:h-[27rem] transition-all duration-300">
                    <div className="flex flex-col rounded-3xl p-6 bg-gradient-to-tr from-blue-800 via-green-800 to-purple-800 text-center items-center justify-center h-64 border-b-2">
                        <div className="">Service 1</div>
                        <div className="">I just provide SERVICE-1</div>
                    </div>
                    <div className="absolute bottom-0 -z-10 flex-col text-center items-center justify-center h-max p-5 border-t2 transition-all duration-1000">
                        <div className="font-bold underline underline-offset-4">
                            About Serivce 1
                        </div>
                        <div className="text-justify">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Praesentium eveniet eaque iste, perspiciatis quasi vero aliquid,
                            soluta repellat fugiat quam velit aliquam possimus. Rem, maiores?
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
