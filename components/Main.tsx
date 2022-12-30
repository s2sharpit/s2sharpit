import Social from "./main/Social";
import Data from "./main/Data";
import ScrollDown from "./main/ScrollDown";

export default function Main() {
    return (
        <section id="home" className="pt-8 sm:pt-24 pb-8 px-8">
            <div className="max-w-4xl mx-auto grid gap-10">
                <div className="grid gap-5 md:gap-6 grid-cols-[0.5fr_3fr] sm:grid-cols-[100px_repeat(2,1fr)] md:grid-cols-[116px_repeat(2,1fr)] pt-14 sm:pt-24 items-center">
                    <Social />

                    <div className="bg-[url('../public/s2sharpit.jpeg')] bg-no-repeat bg-center bg-cover shadow-profile sm:shadow-smProfile sm:order-1 sm:justify-self-center w-52 sm:w-64 md:w-72 h-52 sm:h-64 md:h-72 animate-profile -scale-x-100 grayscale"></div>

                    <Data />
                </div>

                <ScrollDown />
            </div>
        </section>
    )
}