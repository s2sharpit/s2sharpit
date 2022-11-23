import { useState } from 'react'
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Nav from './components/Nav';
import Projects from './components/Projects';
import Services from './components/Services';
import SideScroll from './components/SideScroll';
import Skills from './components/Skills';

function App() {
  const [count, setCount] = useState(0);

  //   var typed = new Typed(".typing", {
  //     strings: ["Developer", "Programmer", "Designer"],
  //     typeSpeed: 100,
  //     backSpeed: 60,
  //     loop: true
  // });
  // var typed = new Typed(".typed", {
  //     strings: ["Developer", "Programmer", "Designer"],
  //     typeSpeed: 100,
  //     backSpeed: 60,
  //     loop: true
  // });
  

  return (
    <div className="bg-[#050505] text-white overflow-hidden bg-[url('/media/bg_1.png')]grayscal bg-cover h-[100vh]">

      <Nav />
      <SideScroll />

      <main className="h-[100vh] overflow-y-scroll snap-y snap-mandatory scroll-smooth">
        <Home />
        <hr className="mx-10 border-neutral-800 border-dashed" />
        <About />
        <hr className="mx-10 border-neutral-800 border-dashed" />
        <Skills />
        <hr className="mx-10 border-neutral-800 border-dashed" />
        <Projects />
        <hr className="mx-10 border-neutral-800 border-dashed" />
        <Services />
        <hr className="mx-10 border-neutral-800 border-dashed" />
        <Contact />
      </main>
    </div>
  )
}

export default App
