import { Skills, About, Main, Portfolio, Qualification, Projects } from "@/components/sections";
import Contact from "@/components/sections/Contact";
export default function Home() {
  return (
    <main className="min-h-screen max-w-4xl mx-auto px-8">
      <Main />
      <About />
      <Skills />
      <Portfolio />
      <Qualification />
      <Projects />
      <Contact />
    </main>
  );
}
