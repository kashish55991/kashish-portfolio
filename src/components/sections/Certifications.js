'use client'

import { motion } from 'framer-motion'
import { FaCertificate } from 'react-icons/fa'

const certifications = [
  {
    title: 'TinyML: Applications of TinyML',
    provider: 'HarvardX (edX)',
    url: 'https://courses.edx.org/certificates/0b8a1bafd47e481192e06e1162e1585f',
  },
  {
    title: 'AI for Everyone',
    provider: 'DeepLearning.AI (Coursera)',
    url: 'https://coursera.org/share/07075eb00eedac0f3dad58bd0fe1f57b',
  },
]

export default function Certifications() {
  return (
    <section id="certifications" className="min-h-screen px-6 py-20 bg-[#0F1115] text-white relative overflow-hidden">
      {/* Background topography
      <div className="absolute inset-0 z-0 opacity-10 bg-[url('/topography.svg')] bg-repeat" /> */}

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 max-w-4xl mx-auto"
      >
        <h2 className="text-3xl font-bold text-[#00FFD1] text-center mb-12">
          Certifications
        </h2>

        <div className="space-y-6">
          {certifications.map((cert, index) => (
            <motion.a
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              whileHover={{ scale: 1.02 }}
              className="flex items-start gap-4 border border-[#00FFD1] bg-[#15191F] p-6 rounded-xl transition-all hover:shadow-lg"
            >
              <div className="text-3xl text-[#00FFD1]">
                <FaCertificate />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">{cert.title}</h3>
                <p className="text-sm text-gray-400">{cert.provider}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
