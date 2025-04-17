'use client'

import { motion } from 'framer-motion'
import { FaRegNewspaper } from 'react-icons/fa'

export default function BlogList() {
  return (
    <section id="blog" className="min-h-screen px-6 py-20 bg-[#0F1115] text-white relative overflow-hidden">
      {/* Topographic background
      <div className="absolute inset-0 z-0 opacity-10 bg-[url('/topography.svg')] bg-repeat" /> */}

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 max-w-6xl mx-auto text-center"
      >
        <h2 className="text-3xl font-bold text-[#00FFD1] mb-12">Blog</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className="bg-[#15191F] border border-[#00FFD1] p-6 rounded-xl flex flex-col items-center justify-center shadow-md transition-all"
            >
              <FaRegNewspaper className="text-[#00FFD1] text-4xl mb-4" />
              <h3 className="text-xl font-semibold text-white">Blog Coming Soon</h3>
              <p className="text-sm text-gray-400 mt-2">Articles, projects, and tutorials in progress…</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
