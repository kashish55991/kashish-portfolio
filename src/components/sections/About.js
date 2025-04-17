'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen px-6 py-20 bg-[#0F1115] text-white relative overflow-hidden"
    >
      {/* Topographic background
      <div className="absolute inset-0 z-0 opacity-10 bg-[url('/topography.svg')] bg-repeat" /> */}

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-10"
      >
        {/* Profile Image */}
        <div className="w-64 h-64 rounded-xl overflow-hidden shadow-xl border-4 border-[#00FFD1]">
          <Image
            src="/Kashish Headshot.jpg"
            alt="Kashish Shah"
            width={256}
            height={256}
            className="object-cover w-full h-full"
          />
        </div>

        {/* About Text */}
        <div className="max-w-2xl text-center md:text-left">
          <h2 className="text-3xl font-bold text-[#00FFD1] mb-4">About Me</h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            I’m a full-stack engineer with a strong background in embedded systems, AI/ML, and cloud integration. My passion lies in crafting elegant solutions for complex problems — whether it’s developing predictive models, fine-tuning a microcontroller’s firmware, or building robust web platforms.
          </p>
          <p className="mt-4 text-gray-400 text-base">
            I strive to bridge the gap between low-level embedded innovation and modern software architecture. Let&apos;s build something awesome.
          </p>
        </div>
      </motion.div>
    </section>
  )
}
