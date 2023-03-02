import { ArrowDownward, GitHub, Instagram, LinkedIn, Twitter } from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";

export default function Main() {

    const handleClickClose = (id: string) => {
        document.getElementById(id)?.scrollIntoView();
    }

    return (
        <section id="home">
            <div className="grid gap-10">
                <div className="grid gap-y-12 gap-x-5 md:gap-x-9 lg:gap-x-12 grid-cols-[0.5fr_2fr] sm:grid-cols-[100px_repeat(2,1fr)] md:grid-cols-[65px_1fr_max-content] pt-14 sm:pt-24 items-center">
                    <div className='grid gap-6 w-fit'>
                        <Link target='_blank' className="text-title-color hover:text-title-color-dark text-3xl duration-300" aria-label="link" href="https://www.linkedin.com/in/s2sharpit"><LinkedIn fontSize="inherit" /></Link>
                        <Link target='_blank' className="text-title-color hover:text-title-color-dark text-3xl duration-300" aria-label="link" href="https://github.com/s2sharpit"><GitHub fontSize="inherit" /></Link>
                        <Link target='_blank' className="text-title-color hover:text-title-color-dark text-3xl duration-300" aria-label="link" href="https://twitter.com/s2sharpit"><Twitter fontSize="inherit" /></Link>
                        <Link target='_blank' className="text-title-color hover:text-title-color-dark text-3xl duration-300" aria-label="link" href="https://www.instagram.com/s2sharpit"><Instagram fontSize="inherit" /></Link>
                    </div>

                    <div className="max-xs:ml-0 max-sm:ml-6 bg-[url('../public/s2sharpit.webp')] bg-no-repeat bg-center bg-cover shadow-profile sm:shadow-smProfile sm:order-1 sm:justify-self-center w-52 sm:w-64 md:w-72 h-52 sm:h-64 md:h-72 animate-profile -scale-x-100"></div>

                    <div className="max-xs:mx-4 max-sm:mx-6 max-sm:col-span-3">
                        <h3 className="text-4xl sm:text-3xl md:text-4xl lg:text-5xl mb-3 font-bold text-title-color">Tushar Saini
                            <svg className="ml-2 inline-block pb-1 h-9 md:h-full animate-wave origin-bottom"
                                width="40"
                                height="40"
                                viewBox="0 0 48 48"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M25.4995 32.0305L31.3495 33.1555L36.1495 8.48051C36.4495 6.83051 35.3995 5.18051 33.8245 4.88051C32.1745 4.58051 30.5995 5.70551 30.2995 7.35551L25.4995 32.0305Z"
                                    fill="#FFDD67"
                                ></path>
                                <path
                                    d="M33.8996 4.88018C33.6746 4.80518 33.5246 4.80518 33.2996 4.80518C34.6496 5.33018 35.3996 6.75518 35.0996 8.25518L30.2996 32.9302L31.3496 33.1552L36.1496 8.48018C36.5246 6.75518 35.4746 5.18018 33.8996 4.88018Z"
                                    fill="#EBA352"
                                ></path>
                                <path
                                    d="M19.4995 32.7802H26.5495V5.55518C26.5495 3.53018 24.9745 1.80518 23.0245 1.80518C21.1495 1.80518 19.4995 3.45518 19.4995 5.55518V32.7802Z"
                                    fill="#FFDD67"
                                ></path>
                                <path
                                    d="M23.0995 1.80518C22.9495 1.80518 22.7245 1.80518 22.5745 1.88018C24.2995 2.18018 25.5745 3.68018 25.5745 5.55518V32.8552H26.6245V5.55518C26.6245 3.45518 25.0495 1.80518 23.0995 1.80518Z"
                                    fill="#EBA352"
                                ></path>
                                <path
                                    d="M15.7495 32.7054L21.7495 31.1304L15.2245 6.30541C14.7745 4.58041 13.0495 3.53041 11.3995 3.90541C9.74948 4.35541 8.77448 6.08041 9.22448 7.80541L15.7495 32.7054Z"
                                    fill="#FFDD67"
                                ></path>
                                <path
                                    d="M11.3995 3.90541L10.9495 4.13041C12.4495 4.05541 13.7995 5.03041 14.2495 6.60541L20.7745 31.4304L21.8245 31.1304L15.2245 6.30541C14.7745 4.58041 13.0495 3.53041 11.3995 3.90541Z"
                                    fill="#EBA352"
                                ></path>
                                <path
                                    d="M2.99937 10.355C1.57437 11.03 1.12437 12.83 1.87437 14.33L11.7744 34.055L16.7994 31.505L6.89937 11.78C6.14937 10.28 4.42437 9.68 2.99937 10.355Z"
                                    fill="#FFDD67"
                                ></path>
                                <path
                                    d="M2.99956 10.355C2.84956 10.43 2.69956 10.505 2.54956 10.655C3.82456 10.28 5.24956 10.955 5.92456 12.305L15.8246 32.03L16.7996 31.58L6.89956 11.78C6.14956 10.28 4.42456 9.68 2.99956 10.355Z"
                                    fill="#EBA352"
                                ></path>
                                <path
                                    d="M46.2744 22.2801C45.0744 19.9551 41.3244 20.1051 37.4994 24.3051C34.7994 27.2301 34.2744 28.2051 31.5744 28.1301V25.0551C31.5744 25.0551 25.7994 20.7801 14.3244 22.7301C14.3244 22.7301 7.79945 23.6301 7.79945 27.0801C7.79945 27.0801 6.67445 35.4051 8.99945 40.6551C12.4494 48.4551 30.1494 50.4801 35.6994 37.2051C36.8244 34.5801 39.0744 32.6301 41.0994 30.1551C43.4244 27.1551 47.5494 24.7551 46.2744 22.2801Z"
                                    fill="#FFDD67"
                                ></path>
                                <path
                                    d="M46.2745 22.28C46.0495 21.83 45.7495 21.53 45.3745 21.23C45.4495 21.305 45.5245 21.38 45.5245 21.53C46.7995 24.08 42.6745 26.405 40.1995 29.405C38.1745 31.88 35.9245 33.83 34.7995 36.455C29.9995 47.93 16.0495 47.93 10.1995 42.68C15.5245 48.68 30.5245 49.28 35.5495 37.205C36.6745 34.58 38.9245 32.63 40.9495 30.155C43.4245 27.155 47.5495 24.755 46.2745 22.28ZM32.3245 28.13C27.4495 26.33 18.7495 29.63 19.9495 38.405C19.9495 30.23 27.3745 28.205 31.4245 28.205C32.0245 28.13 32.3245 28.13 32.3245 28.13Z"
                                    fill="#EBA352"
                                ></path>
                            </svg>
                        </h3>
                        <h4 className="relative text-title-color text-xl pl-14 md:pl-20 font-normal mb-4md:mb-3 before:content-start before:absolute before:w-10 md:before:w-16 before:h-[1px] before:bg-text-color before:left-0 before:top-3 md:before:top-4">Software Engineer</h4>
                        <h5 className="text-text-color font-medium my-1 md:my-2">Bhubaneswar, Bharat</h5>
                        <p className="max-w-sm text-justify mb-10 md:mb-12 text-text-color">I like creating <b>delightful, magical,</b> and <b>accessible</b> art with code.</p>
                        <span onClick={()=>handleClickClose('contact')} className="bg-title-color text-container-color py-4 md:py-5 px-7 md:px-8 rounded-2xl font-medium hover:bg-title-color-dark inline-flex items-center hover:cursor-pointer duration-300">
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
                        </span>
                    </div>
                </div>

                <div className="ml-[7.5rem] md:ml-28 max-sm:hidden">
                    <span onClick={()=>handleClickClose('about')} className="group inline-flex items-center hover:cursor-pointer duration-300">
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
                                className="group-hover:animate-wheel"
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
                    </span>
                </div>
            </div>
        </section>
    )
}