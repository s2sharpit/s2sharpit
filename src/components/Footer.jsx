export default function Footer() {
    return (
        <div className="py-5 bg-slate-800 text-center text-gray-300 rounded-t-lg ">
            <a href="#hero" className="block text-xl md:text-2xl font-semibold">Tushar Saini</a>
            <a href="mailto:s2sharpit@gmail.com" className="font-sans text-sm md:text-base hover:text-indigo-500">s2sharpit@gmail.com</a>
            <p className="text-sm font-sans mt-2 text-gray-500">Tushar Saini &copy; {new Date().getFullYear()}. All rights reserved.</p>
        </div>
    )
}