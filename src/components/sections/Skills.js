'use client'

import { motion } from 'framer-motion'

const skills = [
  {
    title: '🧠 Embedded Systems',
    items: 'FreeRTOS, RTOS, ARM Cortex, Edge AI, TinyML, Bare-metal',
  },
  {
    title: '📟 Microcontrollers',
    items: 'STM32, EFR32, TI Launchpad, Raspberry Pi, Arduino',
  },
  {
    title: '💬 Languages',
    items: 'C, C++, Python, MicroPython, Bash, Assembly',
  },
  {
    title: '🔌 Protocols',
    items: 'LoRaWAN, UART, SPI, I2C, GPIO, ADC, BLE, Modbus, TCP/IP',
  },
  {
    title: '🧰 Tools',
    items: 'Git, Eagle PCB, JIRA, MATLAB, Wireshark',
  },
  {
    title: '💻 IDEs',
    items: 'STM32CubeIDE, IAR, VS Code, Arduino IDE, Eclipse',
  },
]

export default function Skills() {
  return (
    <section id="skills" className="min-h-screen px-6 py-20 bg-[#0F1115] text-white relative overflow-hidden">
      {/* Topographic background */}
      {/* <div className="absolute inset-0 z-0 opacity-10 bg-[url('/topography.svg')] bg-repeat" /> */}

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 max-w-6xl mx-auto"
      >
        <h2 className="text-3xl font-bold text-[#00FFD1] text-center mb-12">
          Skills
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              className="p-6 border border-[#00FFD1] rounded-xl shadow-lg bg-[#15191F] transition-all"
            >
              <h3 className="text-lg font-semibold text-[#00FFD1] mb-2">
                {skill.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">{skill.items}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
