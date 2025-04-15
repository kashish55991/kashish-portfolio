"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  SiStmicroelectronics,
  SiCplusplus,
  SiTensorflow,
  SiPython,
  SiGit,
  SiArduino,
} from "react-icons/si";

export default function Skills({ id, sectionRef }) {
  const skills = [
    { title: "🧠 Embedded Systems", items: "FreeRTOS, RTOS, ARM Cortex, Edge AI, TinyML, Bare-metal" },
    { title: "📟 Microcontrollers", items: "STM32, EFR32, TI Launchpad, Raspberry Pi, Arduino" },
    { title: "💬 Languages", items: "C, C++, Python, MicroPython, Bash, Assembly" },
    { title: "🔌 Protocols", items: "LoRaWAN, UART, SPI, I2C, GPIO, ADC, BLE, Modbus, TCP/IP" },
    { title: "🧰 Tools", items: "Git, Eagle PCB, JIRA, MATLAB, Wireshark" },
    { title: "💻 IDEs", items: "STM32CubeIDE, IAR, VS Code, Arduino IDE, Eclipse" },
  ];

  return (
    <motion.section
      id={id}
      ref={sectionRef}
      className="mt-32 space-y-6 max-w-3xl mx-auto text-gray-300 px-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-semibold text-cyan-400">Skills</h2>

      <div className="grid md:grid-cols-2 gap-6 text-sm">
        {skills.map((block, i) => (
          <div key={`skill-${i}`}>
            <h4 className="font-bold text-white mb-1">{block.title}</h4>
            <p>{block.items}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 text-cyan-400 flex flex-wrap gap-5 text-2xl justify-center md:justify-start">
        <SiStmicroelectronics title="STM32" />
        <SiCplusplus title="C++" />
        <SiTensorflow title="TinyML" />
        <SiPython title="Python" />
        <SiGit />
        <SiArduino />
      </div>
    </motion.section>
  );
}
