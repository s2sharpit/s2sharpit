import { Skills, About, Main, Services, Qualification } from "@/components/sections";
import Contact from "@/components/sections/Contact";
import Portfolio from "@/components/sections/Portfolio";

export default function Home() {
  return (
    <main className="min-h-screen max-w-4xl mx-auto px-8">
      <Main />
      <About />
      <Skills />
      <Services />
      <Qualification />
      <Portfolio />
      <Contact />
    </main>
  );
}
