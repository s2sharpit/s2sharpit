import AutoType from "./AutoType"
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';

export default () => (
    <section id="home"
        className="snap-start relative top-0left-0right-0 h-screen min-w-full px-7 py-32 md:px-20">
        {/* <div className="absolute -z-10 -bottom-20 left-10 w-96 h-96 bg-pink-500 rounded-full filter blur-3xl opacity-20 mix-blend-exclusion animate-[bounce_17s_infinite]"></div>
        <div className="absolute top-36 right-96 w-96 h-96 bg-blue-600 rounded-full filtr blur-3xl opacity-20 mix-blend-exclusion animate-[bounce_20s_infinite]"></div>
        <div className="absolute z-10 -bottom-10 left-96 w-96 h-96 bg-orange-600 rounded-full filtr blur-3xl opacity-20 mix-blend-exclusion animate-[bounce_20s_infinite]"></div> */}
        <div className="text-xl md:text-2xl text-white/75 font-mono">WELCOME TO MY PORTFOLIO!</div>
        <div className="text-4xl md:text-7xl text-white my-5 md:mt-10 font-thin"><b className="font-bold">Tushar</b> Saini
        </div>
        <div className="flex items-end text-3xl md:text-4xl text-white/75 md:mx-2 mb10">
            {/* <ArrowRightIcon className="text-red-600" fontSize="inherit" /> */}
            <img className="w-8 inline" src="./media/RedTriangleRight.svg" alt="" />
            <AutoType />
        </div>
        <div className="flex z-50 flex-col md:flex-row gap-8 w-fit mt-10 mx-5 text-[1.7rem]">
            <a className="hover:text-neutral-300" href="https://www.linkedin.com/in/s2sharpit/" target="_blank"><LinkedInIcon fontSize="inherit" /></a>
            <a className="hover:text-neutral-300" href="https://github.com/s2sharpit" target="_blank"><GitHubIcon fontSize="inherit" /></a>
            <a className="hover:text-neutral-300" href="https://twitter.com/s2sharpit" target="_blank"><TwitterIcon fontSize="inherit" /></a>
            <a className="hover:text-neutral-300" href="#" target="_blank"><TelegramIcon fontSize="inherit" /></a>
            <a className="hover:text-neutral-300" href="https://www.instagram.com/s2sharpit/" target="_blank"><InstagramIcon fontSize="inherit" /></a>
            {/* <a href="https://discordapp.com/users/s2sharpit#0572" target="_blank">
        <img className="w-6 h-6" src="./media/Discord.svg" alt="" />
    </a> */}
        </div>
        {/* <div className="hidden md:block w-2/5 my-5">I love exploring and creating 🚀 I'm a lifelong learner 🎓 and I
            might have a thing for traditional Neapolitan Pizza 🍕</div> */}
        <div
            className="absolute bg-[url('/media/S2sharpit.png')] -rotate6 grayscale bg[linear-gradient(transparent,transparent,#011f25),url('/media/S2sharpit.png')] bg-contain bg-right-bottom bg-no-repeat w-[40vh] md:w-[50vh] lg:w-[65vh] h-4/6 md:h-[80vh] lg:h-[90vh] my-12 lg:my-0 bottom-0 right-0 mr-7 md:mr-20">
        </div>
    </section>
)