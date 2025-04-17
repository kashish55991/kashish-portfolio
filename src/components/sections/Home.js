'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import {
  SiC,
  SiGit,
  SiStmicroelectronics,
  SiTensorflow
} from 'react-icons/si'

export default function Home() {
  return (
    <section
      id="home"
      className="min-h-screen pb-30 pt-0 flex flex-col items-center justify-center text-white bg-[#0F1115]"
    >
      <div className="relative z-10 flex flex-col justify-center items-center w-full md:ml-20 px-6">

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center py-20"
        >
          {/* Profile Image with Static Image and Spinning Frame */}
          <div className="relative w-56 h-56 flex items-center justify-center">
            {/* Static Image */}
            <div className="w-48 h-48 rounded-full overflow-hidden z-10">
              <Image
                src="/Kashish Headshot.jpg"
                alt="Kashish"
                width={192}
                height={192}
                className="object-cover w-full h-full"
              />
            </div>

            {/* Spinning Hex Frame */}
            <div className="absolute w-56 h-56 z-20 pointer-events-none">
              <div className="hex-spin-border" />
            </div>
          </div>

          {/* Name and Role */}
          <h1 className="mt-8 text-4xl font-bold text-[#00FFD1]">Hey, I'm Kashish</h1>
          <p className="text-lg text-gray-300">Embedded Software Engineer</p>

          {/* Social Links */}
          <div className="flex space-x-6 mt-6 text-[#00FFD1] text-2xl">
            <a href="https://github.com/kashish55991" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            <a href="https://linkedin.com/in/kashishshah25" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="mailto:kashishharesh.shah@mavs.uta.edu"><MdEmail /></a>
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-2xl text-center"
        >
          <h2 className="text-2xl font-semibold text-[#00FFD1] mb-8">Tech I Use</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            <div className="flex flex-col items-center">
              <SiC className="text-4xl text-yellow-400" />
              <span className="mt-2 text-sm">Embedded C</span>
            </div>
            <div className="flex flex-col items-center">
              <SiTensorflow className="text-4xl text-blue-400" />
              <span className="mt-2 text-sm">TensorFlow</span>
            </div>
            <div className="flex flex-col items-center">
              <SiGit className="text-4xl text-cyan-400" />
              <span className="mt-2 text-sm">SCM</span>
            </div>
            <div className="flex flex-col items-center">
              <SiStmicroelectronics className="text-4xl text-sky-300" />
              <span className="mt-2 text-sm">Microcontrollers</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
