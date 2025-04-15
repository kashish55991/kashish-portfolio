"use client";

import React from "react";
import { motion } from "framer-motion";

export default function About({ id, sectionRef }) {
  return (
    <motion.section
      id={id}
      ref={sectionRef}
      className="mt-32 space-y-4 max-w-3xl mx-auto text-gray-300 px-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-semibold text-cyan-400">About Me</h2>

      <p>
        Passionate and result-driven Embedded Software Engineer with a master’s degree in electrical engineering,
        specializing in real-time systems, firmware development, and connected IoT solutions. Currently at Digi
        International, where I design and optimize embedded software for industrial-grade IoT systems for Low Power
        Devices using LoRaWAN.
      </p>

      <p>
        My core strengths lie in low-level embedded programming (C/C++), working with ARM Cortex microcontrollers, and
        building real-time applications using FreeRTOS and bare-metal design patterns. I have delivered reliable,
        power-efficient solutions for constrained environments, and have hands-on experience with UART, SPI, I2C,
        LoRaWAN, and BLE.
      </p>

      <p>
        Recently, I have expanded my expertise into AI at the Edge and TinyML, completing certifications on:
        <br />• Fundamentals of TinyML from Harvard University on EdX
        <br />• Introduction to Embedded Machine Learning by Edge Impulse on Coursera
      </p>

      <p>
        🚀 I thrive at the intersection of embedded systems and intelligent edge computing—developing smarter,
        more adaptive systems close to the data source.
      </p>

      <div className="pt-4 text-sm text-gray-400">
        <h3 className="text-xl text-cyan-300 font-semibold mb-2">🔧 Core Skills:</h3>
        <ul className="list-disc pl-6 space-y-1">
          <li>Edge AI, TinyML</li>
          <li>Embedded C/C++, ARM Cortex, STM32</li>
          <li>RTOS (FreeRTOS), Bare-metal, Low-power Systems</li>
          <li>IoT Protocols – UART, SPI, I2C, LoRaWAN, BLE</li>
          <li>Device Drivers, Bootloaders, Memory Management</li>
          <li>
            Tools: IAR, STM32CubeIDE, Edge Impulse, TensorFlow Lite, JTAG
          </li>
          <li>Agile Dev: Git, Jira, Confluence, Bitbucket, CI/CD</li>
        </ul>
      </div>
    </motion.section>
  );
}
