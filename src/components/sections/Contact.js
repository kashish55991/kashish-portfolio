"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Contact({ id, sectionRef }) {
  return (
    <motion.section
      id={id}
      ref={sectionRef}
      className="mt-32 max-w-3xl mx-auto text-gray-300 space-y-4 pb-64 px-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-semibold text-cyan-400">Contact</h2>

      <p>📩 Let’s build something awesome together! I’d love to hear from you.</p>

      <ul className="space-y-2">
        <li>
          <strong>Email:</strong>{" "}
          <a
            href="mailto:kashishharesh.shah@mavs.uta.edu"
            className="text-cyan-400 underline hover:text-cyan-300"
          >
            kashishharesh.shah@mavs.uta.edu
          </a>
        </li>
        <li>
          <strong>LinkedIn:</strong>{" "}
          <a
            href="https://linkedin.com/in/kashishshah25"
            target="_blank"
            className="text-cyan-400 underline hover:text-cyan-300"
          >
            linkedin.com/in/kashishshah25
          </a>
        </li>
        <li>
          <strong>GitHub:</strong>{" "}
          <a
            href="https://github.com/kashish55991"
            target="_blank"
            className="text-cyan-400 underline hover:text-cyan-300"
          >
            github.com/kashish55991
          </a>
        </li>
      </ul>
    </motion.section>
  );
}
