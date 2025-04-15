"use client";

import React from "react";
import { motion } from "framer-motion";
import { SiEdx, SiCoursera } from "react-icons/si";

export default function Certifications({ id, sectionRef }) {
  return (
    <motion.section
      id={id}
      ref={sectionRef}
      className="mt-32 space-y-6 max-w-3xl mx-auto text-gray-300 px-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-semibold text-cyan-400">Licenses & Certifications</h2>

      <div className="space-y-4">
        <a
          href="https://courses.edx.org/certificates/0b8a1bafd47e481192e06e1162e1585f"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 p-4 bg-[#1e1e1e] border border-gray-700 rounded-lg hover:border-cyan-500 transition"
        >
          <SiEdx className="text-pink-500 w-6 h-6" />
          <div>
            <h4 className="font-semibold text-white">Fundamentals of TinyML</h4>
            <p className="text-sm text-gray-400">HarvardX (edX)</p>
          </div>
        </a>

        <a
          href="https://coursera.org/share/07075eb00eedac0f3dad58bd0fe1f57b"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 p-4 bg-[#1e1e1e] border border-gray-700 rounded-lg hover:border-cyan-500 transition"
        >
          <SiCoursera className="text-blue-400 w-6 h-6" />
          <div>
            <h4 className="font-semibold text-white">Embedded Machine Learning</h4>
            <p className="text-sm text-gray-400">Edge Impulse (Coursera)</p>
          </div>
        </a>
      </div>
    </motion.section>
  );
}
