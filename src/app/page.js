"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  Info,
  Briefcase,
  Settings,
  Mail,
  Menu,
  X,
  FileText,
} from "lucide-react";
import { SiGithub, SiLinkedin, SiCplusplus, SiStmicroelectronics, SiTensorflow, SiPython, SiGit, SiArduino, SiEdx, SiCoursera } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const navItems = [
  { id: "home", label: "Home", icon: <Home className="w-4 h-4" /> },
  { id: "about", label: "About", icon: <Info className="w-4 h-4" /> },
  { id: "experience", label: "Experience", icon: <Briefcase className="w-4 h-4" /> },
  { id: "skills", label: "Skills", icon: <Settings className="w-4 h-4" /> },
  { id: "certifications", label: "Certifications", icon: <FileText className="w-4 h-4" /> },
  { id: "contact", label: "Contact", icon: <Mail className="w-4 h-4" /> },
];

export default function HomePage() {
  const [activeSection, setActiveSection] = useState("home");

  return (
    <div className="flex min-h-screen bg-[#0f0f0f] text-gray-100">
      {/* Sidebar */}
      <aside className="md:w-64 bg-[#161616] border-r border-gray-800 shadow-lg p-6 hidden md:flex flex-col sticky top-0 h-screen">
        <motion.h1
          className="text-2xl font-bold mb-8 text-cyan-400"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
        >
          Kashish Shah
        </motion.h1>
        <nav className="flex flex-col gap-3 text-sm font-medium">
          {navItems.map(({ id, label, icon }) => (
            <motion.button
              key={id}
              onClick={() => setActiveSection(id)}
              whileHover={{ scale: 1.05 }}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition ${
                activeSection === id
                  ? "bg-cyan-700 text-white font-semibold"
                  : "hover:bg-[#1c1c1c] hover:text-cyan-300 text-gray-400"
              }`}
            >
              {icon}
              {label}
            </motion.button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <AnimatePresence mode="wait">
          <motion.section
            key={activeSection}
            className="max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
          {activeSection === "home" && (
            <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-10 md:gap-20">
              {/* Left Panel */}
              <div className="flex-1 text-center md:text-left space-y-4">
                <h1 className="text-4xl font-extrabold text-cyan-400 font-mono leading-tight"> Kashish Shah </h1>
                <h1 className="text-2xl text-cyan-400 font-mono"> Embedded Software Engineer</h1>
                <p className="text-gray-400 text-lg">
                  Specializing in real-time systems, firmware architecture, and embedded AI.
                </p>

                <div className="flex justify-center md:justify-start gap-4 mt-6">
                  <a href="mailto:kashishharesh.shah@mavs.uta.edu">
                    <Button className="bg-cyan-500 text-black hover:bg-cyan-600 shadow-md">
                      Let&apos;s Talk
                    </Button>
                  </a>
                  <a href="https://linkedin.com/in/kashishshah25" target="_blank">
                    <SiLinkedin className="text-[#0077B5] w-6 h-6 hover:scale-110 transition" />
                  </a>
                  <a href="https://github.com/kashish55991" target="_blank">
                    <SiGithub className="text-white w-6 h-6 hover:scale-110 transition" />
                  </a>
                </div>
              </div>

              {/* Right Panel - Headshot or Visual */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="w-full max-w-sm bg-gradient-to-br from-[#1f1f1f] to-[#0f0f0f] rounded-3xl p-4 border border-gray-800 shadow-lg"
              >
                <div className="overflow-hidden rounded-2xl">
                  <Image
                    src="/Kashish Headshot.jpg"
                    alt="Kashish Shah"
                    width={500}
                    height={500}
                    className="rounded-2xl object-cover w-full h-auto"
                  />
                </div>
              </motion.div>
            </div>
          )}

      {/* About */}
      {activeSection === "about" && (
        <div className="mt-10 space-y-4 max-w-3xl mx-auto text-gray-300">
          <h2 className="text-3xl font-semibold text-cyan-400">About Me</h2>
          <p>
            Passionate and result-driven Embedded Software Engineer with a master’s degree in electrical engineering, specializing in real-time systems, firmware development, and connected IoT solutions. Currently at Digi International, where I design and optimize embedded software for industrial-grade IoT systems for Low Power Devices using LoRaWAN.
            <br /><br />
            My core strengths lie in low-level embedded programming (C/C++), working with ARM Cortex microcontrollers, and building real-time applications using FreeRTOS and bare-metal design patterns. I’ve delivered reliable, power-efficient solutions for constrained environments, and have hands-on experience with UART, SPI, I2C, LoRaWAN, and BLE.
            <br /><br />
            Recently, I’ve expanded my expertise into AI at the Edge and TinyML, completing certifications on:
            <br />- Fundamentals of TinyML from Harvard University on EdX
            <br />- Introduction to Embedded Machine Learning by Edge Impulse on Coursera
            <br /><br />
            🚀 I thrive at the intersection of embedded systems and intelligent edge computing—developing smarter, more adaptive systems close to the data source.
          </p>
        </div>
      )}

      {/* Experience */}
      {activeSection === "experience" && (
        <div className="mt-10 space-y-6 max-w-3xl mx-auto text-gray-300">
          <h2 className="text-3xl font-semibold text-cyan-400">Experience</h2>
          {[
            {
              title: "Digi International",
              time: "Apr 2021 – Present",
              bullets: [
                "Developed scalable LoRaWAN firmware (US915, EU868)",
                "Built AT Command and API support for XBee LoRa devices",
                "Integrated sensors (temperature, GPS, accelerometer)",
                "Implemented DFU/XMODEM bootloaders for upgrades",
                "Created automated test frameworks with Unity & Pytest",
                "Improved RF performance with spectrum analyzer tools",
                "Collaborated with backend team for telemetry & provisioning"
              ]
            },
            {
              title: "Haxiot, Inc",
              time: "Feb 2021 – Apr 2021",
              bullets: [
                "Tested and debugged STM32 bare-metal devices",
                "Built provisioning tools using Python and Raspberry Pi",
                "Configured LoRaWAN for multiple product lines"
              ]
            },
            {
              title: "UTARI – UT Arlington Research Institute",
              time: "Jan 2019 – Feb 2021",
              bullets: [
                "Developed Smart Seat Cushion firmware (Metro M4)",
                "Used C, C++, CircuitPython for embedded control",
                "Integrated BLE (nrf51), SPI, gesture button RGB input",
                "Built automated testing system and Eagle PCB layouts"
              ]
            }
          ].map((job, i) => (
            <Card key={i} className="bg-[#1e1e1e] border border-gray-700">
              <CardContent className="pt-4 space-y-2">
                <h3 className="text-lg font-semibold text-white">{job.title}</h3>
                <p className="text-sm text-gray-500">{job.time}</p>
                <ul className="list-disc ml-5 text-sm space-y-1 text-gray-300">
                  {job.bullets.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Skills */}
      {activeSection === "skills" && (
        <div className="mt-10 space-y-6 max-w-5xl mx-auto text-gray-300">
          <h2 className="text-3xl font-semibold text-cyan-400">Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-sm">
            <div><h4 className="font-bold text-white mb-1">🧠 Embedded Systems</h4><p>FreeRTOS, RTOS, ARM Cortex, Edge AI, TinyML, Bare-metal</p></div>
            <div><h4 className="font-bold text-white mb-1">📟 Microcontrollers</h4><p>STM32, EFR32, TI Launchpad, Raspberry Pi, Arduino</p></div>
            <div><h4 className="font-bold text-white mb-1">💬 Languages</h4><p>C, C++, Python, MicroPython, Bash, Assembly</p></div>
            <div><h4 className="font-bold text-white mb-1">🔌 Protocols</h4><p>LoRaWAN, UART, SPI, I2C, GPIO, ADC, BLE, Modbus, TCP/IP</p></div>
            <div><h4 className="font-bold text-white mb-1">🧰 Tools</h4><p>Git, Eagle PCB, JIRA, MATLAB, Wireshark</p></div>
            <div><h4 className="font-bold text-white mb-1">💻 IDEs</h4><p>STM32CubeIDE, IAR, VS Code, Arduino IDE, Eclipse</p></div>
          </div>
          <div className="mt-6 text-cyan-400 flex flex-wrap gap-5 text-2xl justify-center md:justify-start">
            <SiStmicroelectronics title="STM32" />
            <SiCplusplus title="C++" />
            <SiTensorflow title="TinyML" />
            <SiPython title="Python" />
            <SiGit />
            <SiArduino />
          </div>
        </div>
      )}
            {/* Certifications */}
            {activeSection === "certifications" && (
              <div className="mt-10 space-y-6 max-w-3xl mx-auto text-gray-300">
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
              </div>
            )}

            {/* Contact */}
            {activeSection === "contact" && (
              <div className="mt-10 max-w-3xl mx-auto text-gray-300 space-y-3">
                <h2 className="text-3xl font-semibold text-cyan-400">Contact</h2>
                <p>📩 Feel free to reach out for collaboration, questions, or opportunities.</p>
                <ul className="space-y-2">
                  <li>Email: <a className="text-cyan-400" href="mailto:kashishharesh.shah@mavs.uta.edu">kashishharesh.shah@mavs.uta.edu</a></li>
                  <li>LinkedIn: <a className="text-cyan-400" href="https://linkedin.com/in/kashishshah25">linkedin.com/in/kashishshah25</a></li>
                  <li>GitHub: <a className="text-cyan-400" href="https://github.com/kashish55991">github.com/kashish55991</a></li>
                </ul>
              </div>
            )}
          </motion.section>
        </AnimatePresence>
      </main>
    </div>
  );
}
