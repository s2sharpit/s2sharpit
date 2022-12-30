import { GitHub, Instagram, LinkedIn, Twitter } from "@mui/icons-material";
import Link from "next/link";

export default function Footer() {
    return (
        <footer id="footer" className="bg-container-color border border-black/10">
            <div className="max-w-4xl mx-auto pt-8 pb-24">
                <h1 className="text-title-color text-center mb-8 text-2xl font-medium">Tushar Saini</h1>
                <ul className="flex justify-center gap-x-6 mb-8">
                    <li className=""><a className="text-title-color hover:text-title-color-dark" href="#about">About</a></li>
                    <li className=""><a className="text-title-color hover:text-title-color-dark" href="#projects">Projects</a></li>
                    <li className=""><a className="text-title-color hover:text-title-color-dark" href="#testimonials">Testimonials</a></li>
                </ul>
                <div className="flex justify-center gap-x-5">
                    <Link target='_blank' className="bg-title-color text-container-color text-xl p-1 md:p-2 rounded md:rounded-lg inline-flex hover:bg-title-color-dark" href="https://www.linkedin.com/in/s2sharpit"><LinkedIn /></Link>
                    <Link target='_blank' className="bg-title-color text-container-color text-xl p-1 md:p-2 rounded md:rounded-lg inline-flex hover:bg-title-color-dark" href="https://github.com/s2sharpit"><GitHub /></Link>
                    <Link target='_blank' className="bg-title-color text-container-color text-xl p-1 md:p-2 rounded md:rounded-lg inline-flex hover:bg-title-color-dark" href="https://twitter.com/s2sharpit"><Twitter /></Link>
                    <Link target='_blank' className="bg-title-color text-container-color text-xl p-1 md:p-2 rounded md:rounded-lg inline-flex hover:bg-title-color-dark" href="https://www.instagram.com/s2sharpit"><Instagram /></Link>
                </div>
                <span className="block mt-16 text-title-color text-center text-sm">&#169; <span className="max-sm:hidden">s2sharpit - </span>Tushar Saini. All rigths reserved</span>
            </div>
        </footer>
    )
}