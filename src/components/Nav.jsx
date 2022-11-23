import { useState } from "react";
import Link from "./Link";
import navData from "../data/navData";

export default () => {
    const [toggle, setToggle] = useState(false);

    return (
        <nav
            className="text-neutral-300 flex md:justify-end z-10 md:p-5 md:pb-8 fixed top-0 left-0 right-0 bg-gradient-to-b from-[#050505] via-[#050505] to-transparent bg[url('/media/bg_1.png')]">
            <button className={"flex absolute z-10 pointer bg-transparent m-5 md:hidden " + (toggle && "opened")}
                onClick={() => setToggle(!toggle) }
                aria-label="Main Menu">
                <svg width="60" height="60" viewBox="0 0 100 100" fill="black" stroke="black">
                    <path className="line line1"
                        d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
                    <path className="line line2" d="M 20,50 H 80" />
                    <path className="line line3"
                        d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
                </svg>
            </button>
            {/* <h1 className="text-4xl font-semibold">My Portfolio</h1> */}
            <ul className={"md:flex flex-col md:flex-row w-screen h-screen backdrop-blur-none md:bg-transparent justify-center md:w-auto md:h-auto gap-10 font-semibold items-center transition-all " + (toggle ? "flex transition-all duration-500 ease-linear backdrop-blur-3xl" : "hidden") }>
                {navData.map(data => (
                    <Link key={data.title} data={data} />
                ))}
            </ul>
        </nav>
    )
}