'use client'

import { motion } from 'framer-motion'
import { FaBriefcase } from 'react-icons/fa'

const experiences = [
  {
    company: 'Digi International',
    title: 'Embedded Software Engineer Intern',
    duration: 'May 2023 – Aug 2023',
    details: [
      'Enhanced ThreadX RTOS & STM32WLE5 SDK for industrial gateway product.',
      'Optimized 2-stage bootloader (SPI Flash, WWDG, XMODEM).',
      'Integrated Modbus and edge data parsing with IoT cloud delivery.',
    ],
  },
  {
    company: 'Haxiot (acquired by Digi)',
    title: 'Firmware Engineering Intern',
    duration: 'Aug 2022 – Dec 2022',
    details: [
      'Developed I2C/SPI drivers for sensors on STM32WL.',
      'Reduced latency in LPWAN telemetry via event-driven architecture.',
      'Debugged LoRaWAN Class A/C transmission flows and OTA updates.',
    ],
  },
  {
    company: 'UTARI',
    title: 'Student Research Engineer',
    duration: 'Jan 2021 – May 2022',
    details: [
      'Built C++ robotic arm modules (pick/place, FSM control) on ROS.',
      'Integrated Gazebo simulation + low-level STM32 control board.',
      'Published academic work on human-robot interaction feedback.',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="min-h-screen px-6 py-20 bg-[#0F1115] text-white relative overflow-hidden">
      {/* Background pattern */}

      {/* <div className="absolute inset-0 z-0 opacity-10 bg-[url('/topography.svg')] bg-repeat" /> */}

      <div className="relative z-10 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-[#00FFD1] text-center mb-16">
          Experience
        </h2>

        <div className="relative border-l-2 border-[#00FFD1] pl-8 space-y-12">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="relative pl-10"
          >
            {/* Timeline Dot */}
            <div className="absolute left-0 top-2 w-5 h-5 bg-[#00FFD1] rounded-full flex items-center justify-center shadow-md">
              <FaBriefcase className="text-black text-xs" />
            </div>

            {/* Content */}
            <div>
              <p className="text-sm text-gray-400 mb-1">{exp.duration}</p>
              <h3 className="text-xl font-semibold">
                {exp.title}{' '}
                <span className="text-[#00FFD1]">@ {exp.company}</span>
              </h3>
              <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
                {exp.details.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
        </div>
      </div>
    </section>
  )
}
