import AutoType from "./AutoType"

export default () => {
    return (
        <section id="about" className="snap-start absolute-z-10top-full h-screen p-20 bgwhite">
            <h1 className="text-center mt-3 mb-8 leading-7 text-md font-semibold text-neutral-400">
                <span className="text-4xl text-white">About</span><br />Who i am
            </h1>
            <div className="flex flex-row justify-between">
                <div className="w-1/2 pr-10">
                    <h2 className="flex text-2xl font-bold my-5">Hello I'm Tushar, <br className="lg:hidden" /> a <span
                        className="typed text-purple-500 pl-3"><AutoType /></span></h2>
                    <p className="text-justify text-neutral-400">One of those challenges is creating a strong online
                        presence. One that not only reflects your constantly evolving brand and identity but one that
                        speaks to your customers, as well. As a beginner ,I'm lookin' forward to improve
                        everyday."Practise makes a man perfect". I believe in a less is more approach. Work tirelessly,
                        not to satisfy others but for your own satisfaction.</p>
                </div>
                <div className="w-1/2 pl-10">
                    <h2 className="text-3xl font-bold my-5">Education</h2>
                    <h3 className="text-xl"> <span className="font-semibold">ITER, Siksha 'O' Anusandhan,</span> Bhubaneswar -
                        <i>B Tech. CSE</i>
                        <p className="text-xs mb-1 text-neutral-400">NOVEMBER 2021 - PRESENT</p>
                        <p className="text-base text-neutral-400">Doing B Tech. in Computer Science & Engineering.</p>
                    </h3>
                    <h3 className="text-xl mt-7"> <span className="font-semibold">Gurukul Kurukshetra,</span> Kurukshetra -
                        <i>XII (CBSE)</i>
                        <p className="text-xs mb-1 text-neutral-400">APRIL 2013 - MARCH 2021</p>
                        <p className="text-base text-neutral-400">Studied from Class 5th - 12th from CBSE Board in Boarding
                            School.</p>
                    </h3>
                </div>
            </div>
        </section>
    )
}