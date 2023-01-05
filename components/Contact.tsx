import Link from "next/link";
import contactData from "../data/contactData";
import { ArrowForward } from "@mui/icons-material";

export default function Contact() {
    return (
        <section id="contact" className="section">
            <h2 className="title">Get in Touch</h2>
            <span className="block mb-16 text-text-color text-center">Contact Me</span>

            <div className="max-w-4xl mx-auto grid max-sm:grid-cols-1 md:grid-cols-[repeat(2,max-content)] justify-center max-md:gap-y-14 gap-x-12 lg:gap-x-24 pb-12">
                <div className="">
                    <h3 className="text-xl text-center font-medium mb-6 text-title-color">Talk to Me</h3>
                    <div className="grid gap-y-4 grid-cols-1 sm:grid-cols-[300px] max-md:justify-center">
                        {contactData.map(data => <Card key={data.title} data={data} />)}
                    </div>
                </div>

                <div className="">
                    <h3 className="text-xl text-center font-medium mb-6 text-title-color">Write Me A Testimonial</h3>
                    <form className="sm:w-96 max-md:mx-auto">
                        <div className="relative mb-8 h-16">
                            <label htmlFor="name" className="absolute -top-3 left-5 text-xs p-1 bg-body-color z-20">Name</label>
                            <input type="name" name="name" required placeholder="Enter Your Name" className="absolute top-0 left-0 w-full h-full border-2 border-border-color/30 bg-transparent text-text-color outline-none rounded-xl p-6 z-10" />
                        </div>
                        <div className="relative mb-8 h-16">
                            <label htmlFor="email" className="absolute -top-3 left-5 text-xs p-1 bg-body-color z-20">Email</label>
                            <input type="email" name="email" required placeholder="Enter Your Email" className="absolute top-0 left-0 w-full h-full border-2 border-border-color/30 bg-transparent text-text-color outline-none rounded-xl p-6 z-10" />
                        </div>
                        {/* <div className="relative mb-8 h-16">
                            <input type="file" name="file" required placeholder="Enter Your Email" className="absolute top-0 left-0 w-full h-full border-2 border-border-color/30 bg-transparent text-text-color outline-none rounded-xl p-6 z-10" />
                        </div> */}
                        <div className="relative mb-8 h-44">
                            <label htmlFor="message" className="absolute -top-3 left-5 text-xs p-1 bg-body-color z-20">Testimonial</label>
                            <textarea name="message" required cols={30} rows={10} placeholder="Enter Your Testinomail" className="absolute top-0 left-0 w-full h-full border-2 border-border-color/30 bg-transparent text-text-color outline-none rounded-xl p-6 z-10 resize-none"></textarea>
                        </div>
                        <button disabled className="bg-title-color text-container-color py-4 md:py-5 px-7 md:px-8 rounded-2xl font-medium hover:bg-title-color-dark inline-flex items-center cursor-pointer">
                            Send Message
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
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

function Card({ data }: { data: any }) {
    return (
        <div className="bg-container-color border border-border-color/10 p-4 rounded-xl text-center">
            {data.icon}
            <h3 className="text-sm font-medium">{data.title}</h3>
            <span className="text-sm block mb-3">{data.desc}</span>

            <Link href={data.url} className="btn text-text-color text-sm inline-flex items-center justify-center gap-x-1">
                Write Me
                <ArrowForward fontSize="inherit" className="btnIcon transition duration-300" />
            </Link>
        </div>
    )
}