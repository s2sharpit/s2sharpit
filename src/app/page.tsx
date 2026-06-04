import Sidebar from "@/components/Sidebar";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Spotlight from "@/components/Spotlight";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background text-foreground transition-colors duration-300">
      {/* Background Spotlight Radial Glow */}
      <Spotlight />

      {/* Content Container Grid */}
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-12 xl:px-16 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-8">
          
          {/* Left sticky sidebar panel */}
          <Sidebar />

          {/* Right scrollable content stream */}
          <main className="pt-24 lg:w-1/2 lg:pt-20 lg:pb-24 flex flex-col space-y-20 lg:space-y-24">
            <About />
            <Experience />
            <Projects />
            <Skills />

            {/* Integrated Copyright Footer */}
            <footer className="text-[10px] text-muted-text/70 tracking-wider lowercase pt-12 border-t border-border/20">
              designed & coded by Tushar Saini. built with Next.js & Tailwind CSS. 
              inspired by Brittany Chiang.
            </footer>
          </main>

        </div>
      </div>
    </div>
  );
}
