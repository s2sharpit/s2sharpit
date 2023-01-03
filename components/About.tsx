import Image from "next/image";
import infoData from "../data/infoData"
import Link from "next/link";

export default function About() {
    return (
        <section id="about" className="pt-8 sm:pt-24 pb-8 px-8">
            <h2 className="text-3xl text-title-color text-center font-semibold">About Me</h2>
            <span className="block mb-16 text-text-color text-center">My Introduction</span>

            <div className="max-w-4xl mx-auto grid gap-6 max-md:gap-y-10 grid-cols-1 md:grid-cols-[0.9fr_1.2fr] items-center gap-x-8">
                <Image src={"/s2sharpit.jpeg"} width={400} height={400} alt="about_img" className="w-56 md:w-80 rounded-3xl justify-self-center" />

                <div className="max-md:text-center">
                    <div className="grid gap-2 grid-cols-2 xs:grid-cols-3 mx-auto max-w-md mb-8">
                        {infoData.map(data => <Box key={data.title} data={data} />)}
                    </div>

                    <p className="max-w-md mx-auto px-4 mb-8 md:mb-10 text-sm text-justify">I am a <b>software engineer</b> with <b>experience</b> in <b>web development</b> and <b>UI/UX design.</b> I have a passion for <b>creating intuitive</b> and <b>visually appealing</b> interfaces that <b>enhance</b> user experience. With a strong foundation in <b>computer science</b> and <b>design principles</b>, I am able to deliver <b>high-quality</b> products that meet the needs of my <b>clients.</b> I am always looking for new challenges and opportunities to learn and grow as a <b>developer</b>.</p>

                    <Link target="_blank" href={"https://drive.google.com/file/d/16Bn8xX8vIYZ4tNV3Axu7T6dLeI4-dXQG/view?usp=sharing"} className="bg-title-color text-container-color mx-4 md:mx-8 py-4 md:py-5 px-7 md:px-8 rounded-2xl font-medium hover:bg-title-color-dark inline-flex items-center">
                        Download CV
                        <svg
                            className="ml-2"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                        >
                            <path
                                d="M15.25 22.7502H9.25C3.82 22.7502 1.5 20.4302 1.5 15.0002V9.00024C1.5 3.57024 3.82 1.25024 9.25 1.25024H14.25C14.66 1.25024 15 1.59024 15 2.00024C15 2.41024 14.66 2.75024 14.25 2.75024H9.25C4.64 2.75024 3 4.39024 3 9.00024V15.0002C3 19.6102 4.64 21.2502 9.25 21.2502H15.25C19.86 21.2502 21.5 19.6102 21.5 15.0002V10.0002C21.5 9.59024 21.84 9.25024 22.25 9.25024C22.66 9.25024 23 9.59024 23 10.0002V15.0002C23 20.4302 20.68 22.7502 15.25 22.7502Z"
                                fill="var(--container-color)"
                            ></path>
                            <path
                                d="M22.25 10.7502H18.25C14.83 10.7502 13.5 9.42023 13.5 6.00023V2.00023C13.5 1.70023 13.68 1.42023 13.96 1.31023C14.24 1.19023 14.56 1.26023 14.78 1.47023L22.78 9.47023C22.99 9.68023 23.06 10.0102 22.94 10.2902C22.82 10.5702 22.55 10.7502 22.25 10.7502ZM15 3.81023V6.00023C15 8.58023 15.67 9.25023 18.25 9.25023H20.44L15 3.81023Z"
                                fill="var(--container-color)"
                            ></path>
                            <path
                                d="M13.25 13.7502H7.25C6.84 13.7502 6.5 13.4102 6.5 13.0002C6.5 12.5902 6.84 12.2502 7.25 12.2502H13.25C13.66 12.2502 14 12.5902 14 13.0002C14 13.4102 13.66 13.7502 13.25 13.7502Z"
                                fill="var(--container-color)"
                            ></path>
                            <path
                                d="M11.25 17.7502H7.25C6.84 17.7502 6.5 17.4102 6.5 17.0002C6.5 16.5902 6.84 16.2502 7.25 16.2502H11.25C11.66 16.2502 12 16.5902 12 17.0002C12 17.4102 11.66 17.7502 11.25 17.7502Z"
                                fill="var(--container-color)"
                            ></path>
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    )
}

function Box({ data }: { data: any }) {
    return (
        <div className="bg-container-color border-border-color/10 border rounded-xl text-center py-3 md:py-5 px-2 md:px-4">
            {data.icon}
            <h3 className="text-sm font-medium text-title-color">{data.title}</h3>
            <span className="text-xs">{data.subTitle}</span>
        </div>
    )
}