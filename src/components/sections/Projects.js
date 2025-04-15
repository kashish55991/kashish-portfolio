"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Projects({ id, sectionRef }) {
  return (
    <motion.section
      id={id}
      ref={sectionRef}
      className="mt-32 max-w-3xl mx-auto text-gray-300 px-4 space-y-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-semibold text-cyan-400">Projects</h2>
      <p className="text-gray-400">
        🚧 Projects are currently under development. Stay tuned for exciting LoRa, TinyML, and Embedded AI showcases!
      </p>
    </motion.section>
  );
}
