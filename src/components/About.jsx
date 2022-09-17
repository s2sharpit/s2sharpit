import SectionTitle from "./SectionTitle";

export default function About() {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 py-20">
            <div className="w-full md:w-3/5">
                <SectionTitle id="About Me" />
                <p className="text-gray-600 dark:text-gray-300">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, nemo sunt? Aperiam ex quia voluptatibus excepturi velit natus aliquid consequatur illum quas! Nemo itaque non, minus veritatis sint, earum officia magni facere id incidunt voluptatibus repudiandae quis accusamus libero esse!
                </p>
                <a href="mailto:s2sharpit@gmail.com" className="block mt-3 md:text-lg font-sans text-gray-700 dark:text-gray-300 underline hover:text-indigo-500 dark:hover:text-indigo-500">s2sharpit@gmail.com</a>
            </div>
            <img src="tushar.jpg" alt="Tushar Saini" className="w-full md:w-2/5 rounded-lg object-cover hover:scale-95 transition" />
        </div>
    )
}