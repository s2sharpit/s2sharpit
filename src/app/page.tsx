import { Skills, About, Main, Services, Qualification, Projects } from "@/components/sections";
import Contact from "@/components/sections/Contact";
export default function Home() {
  return (
    <main className="min-h-screen max-w-4xl mx-auto px-8">
      <Main />
      <About />
      {/* @ts-expect-error Async Server Component */}
      <Skills />
      <Services />
      {/* @ts-expect-error Async Server Component */}
      <Qualification />
      {/* @ts-expect-error Async Server Component */}
      <Projects />
      <Contact />
    </main>
  );
}
