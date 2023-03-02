import { GitHub, Instagram, LinkedIn, Twitter } from "@mui/icons-material";
import Link from "next/link";

export default function Footer() {

    const handleClickClose = (id: string) => {
        document.getElementById(id)?.scrollIntoView();
    }
    
    return (
        <footer id="footer" className="bg-container-color border-t border-t-border-color/10">
            <div className="max-w-4xl mx-auto pt-8 pb-24">
                <span onClick={()=>handleClickClose('home')} className="block text-title-color text-center mb-8 text-2xl font-medium hover:cursor-pointer">Tushar Saini</span>
                <ul className="flex justify-center gap-x-6 mb-8">
                    {['about', 'qualification', 'testimonials'].map(name => 
                        <li key={name} onClick={()=>handleClickClose(name)} className="text-title-color hover:text-title-color-dark capitalize hover:cursor-pointer">{name}</li>
                    )}
                </ul>
                <div className="flex justify-center text-container-color gap-x-5">
                    <Link target='_blank' className="bg-title-color text-xl p-1 md:p-2 rounded md:rounded-lg inline-flex hover:bg-title-color-dark duration-300" aria-label="link" href="https://www.linkedin.com/in/s2sharpit"><LinkedIn /></Link>
                    <Link target='_blank' className="bg-title-color text-xl p-1 md:p-2 rounded md:rounded-lg inline-flex hover:bg-title-color-dark duration-300" aria-label="link" href="https://github.com/s2sharpit"><GitHub /></Link>
                    <Link target='_blank' className="bg-title-color text-xl p-1 md:p-2 rounded md:rounded-lg inline-flex hover:bg-title-color-dark duration-300" aria-label="link" href="https://twitter.com/s2sharpit"><Twitter /></Link>
                    <Link target='_blank' className="bg-title-color text-xl p-1 md:p-2 rounded md:rounded-lg inline-flex hover:bg-title-color-dark duration-300" aria-label="link" href="https://www.instagram.com/s2sharpit"><Instagram /></Link>
                </div>
                <span className="block mt-16 text-title-color text-center text-sm">&#169; <span className="max-sm:hidden">s2sharpit - </span>Tushar Saini. All rights reserved</span>
            </div>
        </footer>
    )
}