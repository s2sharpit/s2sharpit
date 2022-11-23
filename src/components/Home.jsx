import AutoType from "./AutoType"

export default () => {
    return (
        <section id="home"
            className="snap-start relative top-0left-0right-0 h-screen min-w-full px-7 py-32 md:px-20">
            {/* <div className="absolute -z-10 -bottom-20 left-10 w-96 h-96 bg-pink-500 rounded-full filter blur-3xl opacity-20 mix-blend-exclusion animate-[bounce_17s_infinite]"></div>
            <div className="absolute top-36 right-96 w-96 h-96 bg-blue-600 rounded-full filtr blur-3xl opacity-20 mix-blend-exclusion animate-[bounce_20s_infinite]"></div>
            <div className="absolute z-10 -bottom-10 left-96 w-96 h-96 bg-orange-600 rounded-full filtr blur-3xl opacity-20 mix-blend-exclusion animate-[bounce_20s_infinite]"></div> */}
            <div className="text-xl md:text-2xl text-white/75 font-mono">WELCOME TO MY PORTFOLIO!</div>
            <div className="text-4xl md:text-7xl text-white my-5 md:mt-10 font-thin"><b className="font-bold">Tushar</b> Saini
            </div>
            <div className="flex text-3xl md:text-4xl text-white/75 md:mx-2 mb10"><img className="w-8 inline"
                    src="./media/RedTriangleRight.svg" alt="" /> <AutoType /></div>
            {/* <a className="px-4 py-2 my-7 mx-2 inline-block font-bold text-lg text-white hover:text-black hover:bg-white hover:border-white border-red-600 border-2 rounded-lg duration-300" href="#" target="_blank">Hire Me</a> */}
            <div className="flex z-50 flex-col md:flex-row gap-8 w-fit mt-10 mx-5">
                <a href="https://www.linkedin.com/in/s2sharpit/" target="_blank">
                    <img className="w-6 h-6" src="./media/LinkedIn.svg" alt="" />
                </a>
                <a href="https://github.com/s2sharpit" target="_blank">
                    <img className="w-6 h-6" src="./media/GitHub.svg" alt="" />
                </a>
                {/* <a href="https://discordapp.com/users/s2sharpit#0572" target="_blank">
                <img className="w-6 h-6" src="./media/Discord.svg" alt="" />
            </a> */}
                <a href="https://twitter.com/s2sharpit" target="_blank">
                    <img className="w-6 h-6" src="./media/Twitter.svg" alt="" />
                </a>
                {/* <a href="#" target="_blank">
                <img className="w-6 h-6" src="./media/Telegram.svg" alt="" />
            </a> */}
                <a href="https://www.instagram.com/s2sharpit/" target="_blank">
                    <img className="w-6 h-6" src="./media/Insta.svg" alt="" />
                </a>
            </div>
            {/* <div className="hidden md:block w-2/5 my-5">I love exploring and creating 🚀 I'm a lifelong learner 🎓 and I
                might have a thing for traditional Neapolitan Pizza 🍕</div> */}
            <div
                className="absolute bg-[url('/media/S2shar.png')] -rotate-6 grayscale bg[linear-gradient(transparent,transparent,#011f25),url('/media/S2sharpit.png')] bg-contain bg-right-bottom bg-no-repeat w-[40vh] md:w-[50vh] lg:w-[65vh] h-4/6 md:h-[80vh] lg:h-[90vh] my-12 lg:my-0 bottom-0 right-0 mr-7 md:mr-20">
            </div>
        </section>
    )
}