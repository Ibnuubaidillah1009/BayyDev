"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden py-20 md:py-0">
      {/* Animated gradient mesh blobs */}
      <div className="absolute top-1/4 left-1/4 w-72 md:w-96 h-72 md:h-96 bg-violet-600/20 rounded-full blur-3xl animate-blob" />
      <div className="absolute top-1/3 right-1/4 w-72 md:w-96 h-72 md:h-96 bg-indigo-600/15 rounded-full blur-3xl animate-blob animation-delay-2000" />
      <div className="absolute bottom-1/4 left-1/3 w-72 md:w-96 h-72 md:h-96 bg-purple-600/10 rounded-full blur-3xl animate-blob animation-delay-4000" />

      <div className="container mx-auto px-5 md:px-8 lg:px-12 flex flex-col md:flex-row items-center gap-10 lg:gap-20 relative z-10">

        {/* Profile Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex-shrink-0"
        >
          <div className="relative">
            {/* Gradient ring */}
            <div className="absolute -inset-1 bg-gradient-to-br from-violet-500 via-indigo-500 to-purple-600 rounded-full blur-sm opacity-70" />
            <div className="relative w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-[#0a0a0f] ring-1 ring-white/10">
              <Image
                src="/images/Profile.jpeg"
                alt="Ibnu Ubaidillah - Frontend Developer Profile Picture"
                fill
                sizes="(max-width: 768px) 192px, (max-width: 1024px) 256px, 320px"
                priority
                className="object-cover object-top"
              />
            </div>
          </div>
        </motion.div>

        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="flex flex-col text-center md:text-left flex-1"
        >
          <span className="text-xs md:text-sm text-violet-400 font-semibold tracking-[0.2em] uppercase mb-4">
            Software Engineering Student
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.1]">
            Hi, I&apos;m{" "}
            <span className="gradient-text">Ibnu Ubaidillah</span>
          </h1>
          <p className="text-base md:text-lg text-neutral-400 leading-relaxed max-w-xl mb-8">
            I&apos;m currently an 11th-grade Software Engineering (PPLG) student at SMKN 1 Bangil.
            I am passionate about writing clean code, building intuitive user interfaces, and continuously learning new technologies to solve real-world problems. Let&apos;s build something exceptional together.
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <a href="#projects" className="px-7 py-3 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-medium hover:shadow-lg hover:shadow-violet-500/25 transition-all duration-300 text-sm">
              View Projects
            </a>
            <a href="#contact" className="px-7 py-3 rounded-full glass glass-hover text-white font-medium transition-all duration-300 text-sm">
              Contact Me
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
