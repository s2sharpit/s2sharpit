import { ArrowDownward, GitHub, Instagram, LinkedIn, Twitter } from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";

export default function Main() {
    return (
        <section id="home" className="pt-8 sm:pt-24 pb-8 px-8">
            <div className="max-w-4xl mx-auto grid gap-10">
                <div className="grid gap-y-12 gap-x-5 md:gap-x-6 grid-cols-[0.5fr_2fr] sm:grid-cols-[100px_repeat(2,1fr)] md:grid-cols-[116px_repeat(2,1fr)] pt-14 sm:pt-24 items-center">
                    <div className='grid gap-6 w-fit'>
                        <Link target='_blank' className="text-title-color hover:text-title-color-dark text-3xl" href="https://www.linkedin.com/in/s2sharpit"><LinkedIn fontSize="inherit" /></Link>
                        <Link target='_blank' className="text-title-color hover:text-title-color-dark text-3xl" href="https://github.com/s2sharpit"><GitHub fontSize="inherit" /></Link>
                        <Link target='_blank' className="text-title-color hover:text-title-color-dark text-3xl" href="https://twitter.com/s2sharpit"><Twitter fontSize="inherit" /></Link>
                        <Link target='_blank' className="text-title-color hover:text-title-color-dark text-3xl" href="https://www.instagram.com/s2sharpit"><Instagram fontSize="inherit" /></Link>
                    </div>

                    <div className="max-xs:ml-0 max-sm:ml-6 bg-[url('../public/s2sharpit.jpeg')] bg-no-repeat bg-center bg-cover shadow-profile sm:shadow-smProfile sm:order-1 sm:justify-self-center w-52 sm:w-64 md:w-72 h-52 sm:h-64 md:h-72 animate-profile -scale-x-100 grayscale"></div>

                    <div className="max-sm:ml-6 max-sm:col-span-3">
                        <h1 className="text-4xl lg:text-5xl mb-3 font-semibold text-title-color">Tushar Saini
                            <Image src={"hand.svg"} width={40} height={40} alt="hand_pic" className="ml-2 inline-block pb-1 w-6 md:w-10 h-6 md:h-10" />
                        </h1>
                        <h3 className="relative text-title-color text-xl pl-14 md:pl-20 font-normal mb-4 md:mb-3 before:content-start before:absolute before:w-10 md:before:w-16 before:h-[1px] before:bg-text-color before:left-0 before:top-3 md:before:top-4">Software Engineer</h3>
                        <p className="max-w-none md:max-w-sm max-xs:text-justify md:text-justify mb-10 md:mb-12 text-text-color">I&apos;m creative designer and software engineer based in Bhubaneswar Bharat, and I&apos;m very passionate and dedicated to my work.</p>
                        <a href="#contact" className="bg-title-color text-container-color py-4 md:py-5 px-7 md:px-8 rounded-2xl font-medium hover:bg-title-color-dark inline-flex items-center">
                            Say Hello
                            <svg className="ml-2"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="var(--container-color)"
                            >
                                <path
                                    d="M14.2199 21.9352C13.0399 21.9352 11.3699 21.1052 10.0499 17.1352L9.32988 14.9752L7.16988 14.2552C3.20988 12.9352 2.37988 11.2652 2.37988 10.0852C2.37988 8.91525 3.20988 7.23525 7.16988 5.90525L15.6599 3.07525C17.7799 2.36525 19.5499 2.57525 20.6399 3.65525C21.7299 4.73525 21.9399 6.51525 21.2299 8.63525L18.3999 17.1252C17.0699 21.1052 15.3999 21.9352 14.2199 21.9352ZM7.63988 7.33525C4.85988 8.26525 3.86988 9.36525 3.86988 10.0852C3.86988 10.8052 4.85988 11.9052 7.63988 12.8252L10.1599 13.6652C10.3799 13.7352 10.5599 13.9152 10.6299 14.1352L11.4699 16.6552C12.3899 19.4352 13.4999 20.4252 14.2199 20.4252C14.9399 20.4252 16.0399 19.4352 16.9699 16.6552L19.7999 8.16525C20.3099 6.62525 20.2199 5.36525 19.5699 4.71525C18.9199 4.06525 17.6599 3.98525 16.1299 4.49525L7.63988 7.33525Z"
                                    fill="var(--container-color)"
                                ></path>
                                <path
                                    d="M10.11 14.7052C9.92005 14.7052 9.73005 14.6352 9.58005 14.4852C9.29005 14.1952 9.29005 13.7152 9.58005 13.4252L13.16 9.83518C13.45 9.54518 13.93 9.54518 14.22 9.83518C14.51 10.1252 14.51 10.6052 14.22 10.8952L10.64 14.4852C10.5 14.6352 10.3 14.7052 10.11 14.7052Z"
                                    fill="var(--container-color)"
                                ></path>
                            </svg>
                        </a>
                    </div>
                </div>

                <div className="ml-28 md:ml-36 max-sm:hidden">
                    <a href="#about" className="scroll inline-flex items-center">
                        <svg
                            width="32px"
                            height="32px"
                            className="home__scroll-mouse"
                            viewBox="0 0 247 390"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            style={{
                                fillRule: "evenodd",
                                clipRule: "evenodd",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeMiterlimit: "1.5",
                            }}

                        >
                            <path
                                className="wheel"
                                d="M123.359,79.775l0,72.843"
                                style={{
                                    fill: "none",
                                    stroke: "var(--title-color)",
                                    strokeWidth: "20px",
                                }}
                            ></path>
                            <path
                                id="mouse"
                                d="M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z"
                                style={{
                                    fill: "none",
                                    stroke: "var(--title-color)",
                                    strokeWidth: "20px",
                                }}
                            ></path>
                        </svg>
                        <span className="text-title-color font-medium ml-0.5 mr-1">Scroll Down</span>
                        <ArrowDownward fontSize="small" className="text-title-color" />
                    </a>
                </div>
            </div>
        </section>
    )
}