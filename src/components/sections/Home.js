"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  SiGithub,
  SiLinkedin,
  SiStmicroelectronics,
  SiCplusplus,
  SiTensorflow,
  SiPython,
} from "react-icons/si";

export default function Home({ id, sectionRef }) {
  return (
    <motion.section
      id={id}
      ref={sectionRef}
      className="min-h-screen max-w-4xl mx-auto flex flex-col justify-center items-center text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Circular Headshot with Gradient Frame */}
      <div className="relative w-56 h-56">
        <div className="absolute inset-0 rounded-full p-[4px] bg-gradient-to-tr from-cyan-400 via-cyan-600 to-blue-800 animate-spin-slow"></div>
        <div className="relative z-10 w-full h-full rounded-full overflow-hidden bg-[#0f0f0f] border-4 border-[#111] flex items-center justify-center">
          <Image
            src="/Kashish Headshot.jpg"
            alt="Kashish Shah"
            width={212}
            height={212}
            className="rounded-full object-cover shadow-lg"
          />
        </div>
      </div>

      {/* Name & Role */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
        Hello, I'm <span className="text-cyan-400">Kashish Shah</span>
      </h1>
      <h2 className="text-xl text-cyan-300 font-mono">// Embedded Systems Engineer</h2>
      <p className="text-gray-400 max-w-xl mx-auto">
        Specializing in real-time systems, firmware architecture, and embedded AI on ultra-low-power devices.
      </p>

      {/* CTA Buttons */}
      <div className="flex justify-center gap-4 mt-4">
        <a href="mailto:kashishharesh.shah@mavs.uta.edu">
          <Button className="bg-cyan-500 text-black hover:bg-cyan-600 shadow-md">Let's Talk</Button>
        </a>
        <a href="https://linkedin.com/in/kashishshah25" target="_blank" rel="noreferrer">
          <SiLinkedin className="text-[#0077B5] w-6 h-6 hover:scale-110 transition" />
        </a>
        <a href="https://github.com/kashish55991" target="_blank" rel="noreferrer">
          <SiGithub className="text-white w-6 h-6 hover:scale-110 transition" />
        </a>
      </div>

      {/* Tech Icons */}
      <div className="mt-6 flex flex-wrap gap-6 text-cyan-400 text-2xl justify-center">
        <SiStmicroelectronics title="STM32" />
        <SiCplusplus title="C++" />
        <SiTensorflow title="TinyML" />
        <SiPython title="Python" />
      </div>
    </motion.section>
  );
}
