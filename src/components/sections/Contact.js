'use client'

import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen px-6 py-20 bg-[#0F1115] text-white relative overflow-hidden">
      {/* Background pattern
      <div className="absolute inset-0 z-0 opacity-10 bg-[url('/topography.svg')] bg-repeat" /> */}

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 max-w-3xl mx-auto text-center"
      >
        <h2 className="text-3xl font-bold text-[#00FFD1] mb-12">Get In Touch</h2>

        <p className="text-gray-400 text-lg mb-8">
          Want to collaborate, hire, or just say hi? Reach out via email or socials!
        </p>

        <div className="flex justify-center space-x-8 text-[#00FFD1] text-3xl mb-12">
          <a href="mailto:you@example.com" target="_blank" rel="noopener noreferrer">
            <FaEnvelope />
          </a>
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        </div>

        {/* Optional Message Form (non-functional placeholder) */}
        <div className="bg-[#15191F] border border-[#00FFD1] rounded-xl p-6">
          <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 bg-[#0F1115] text-white border border-gray-700 rounded-md focus:outline-none focus:border-[#00FFD1] transition"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 bg-[#0F1115] text-white border border-gray-700 rounded-md focus:outline-none focus:border-[#00FFD1] transition"
            />
            <textarea
              placeholder="Your Message"
              rows="5"
              className="w-full px-4 py-2 bg-[#0F1115] text-white border border-gray-700 rounded-md focus:outline-none focus:border-[#00FFD1] transition"
            ></textarea>
            <button
              type="submit"
              disabled
              className="w-full py-2 px-4 bg-[#00FFD1] text-black font-semibold rounded-md cursor-not-allowed opacity-70"
            >
              Message Coming Soon
            </button>
          </form>
        </div>
      </motion.div>
    </section>
  )
}
