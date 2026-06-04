"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  const name = "Tushar Saini";
  const letters = Array.from(name);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.06,
        delayChildren: 0.1,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        damping: 15,
        stiffness: 90,
      },
    },
  };

  const handleScrollDown = () => {
    const aboutSection = document.getElementById("about");
    aboutSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen w-full flex flex-col justify-between pt-24 pb-12 relative border-b border-border/40"
    >
      {/* Decorative fine-line accent column in background for editorial feel */}
      <div className="absolute top-0 left-1/4 w-[1px] h-full bg-border/20 z-0 hidden md:block" />

      {/* Main Hero Grid */}
      <div className="w-full max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 z-10 flex-grow flex items-center">
        <div className="col-span-1 md:col-span-3 flex flex-col items-start justify-center mt-8 md:mt-0">
          {/* Tagline Badge */}
          <div className="mb-6 py-1 px-3 border border-accent/20 rounded-full text-xs text-accent bg-accent/5 tracking-wider lowercase">
            portfolio.redesign
          </div>

          {/* Staggered Name */}
          <motion.h1
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-[clamp(4.5rem,11vw,8.5rem)] font-display font-bold leading-[0.85] tracking-tighter text-foreground mb-8 select-none"
          >
            {letters.map((char, index) => (
              <motion.span
                key={index}
                variants={letterVariants}
                className="inline-block"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.h1>

          {/* Info Blocks with rule lines */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-border/60">
            <div>
              <span className="block text-xs uppercase tracking-widest text-muted-text mb-1">role</span>
              <p className="text-foreground font-sans font-medium">Software Engineer</p>
            </div>
            <div>
              <span className="block text-xs uppercase tracking-widest text-muted-text mb-1">location</span>
              <p className="text-foreground font-sans font-medium">Kolkata, Bharat</p>
            </div>
            <div>
              <span className="block text-xs uppercase tracking-widest text-muted-text mb-1">philosophy</span>
              <p className="text-foreground font-sans text-sm italic leading-relaxed text-muted-text">
                "I like creating delightful, magical, and accessible art with code."
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Arrow at bottom */}
      <div className="w-full max-w-6xl mx-auto px-6 flex justify-between items-center z-10">
        <div className="text-xs uppercase tracking-widest text-muted-text font-sans">
          scroll down to explore
        </div>
        <button
          onClick={handleScrollDown}
          className="p-3 rounded-full border border-border/80 text-muted-text hover:text-accent hover:border-accent hover:-translate-y-1 transition-all duration-300 group cursor-pointer"
          aria-label="Scroll to About"
        >
          <ArrowDown className="w-4 h-4 animate-[bounce_2s_infinite]" />
        </button>
      </div>
    </section>
  );
}
