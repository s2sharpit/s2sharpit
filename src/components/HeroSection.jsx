export default function HeroSection() {
    return (
        <div id="hero" className="flex items-center justify-center flex-col py-20">
            <div className="text-center">
            <h1 className="text-2xl md:text-4xl mb1  md:mb-3 text-indigo-600 font-semibold dark:text-indigo-500">
                Hi, This is Tushar
            </h1>
            <p className="text-sm md:text-lg max-w-md mb-3 text-gray-600 dark:text-gray-300">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, totam.
            </p>
            <a href="#Recent Works" className="inline-block px-8 py-3 text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">See Works</a>
            </div>
        </div>
    )
}