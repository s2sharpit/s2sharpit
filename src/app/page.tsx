import { Skills, About, Hero, Projects } from "@/components/sections";
// import Contact from "@/components/sections/Contact";
export default function Home() {
  return (
    <main className="min-h-screen max-w-5xl mx-auto px-8">
      <Hero />
      <About />
      <Skills />
      <Projects />
      {/* <Contact /> */}
    </main>
  );
}
