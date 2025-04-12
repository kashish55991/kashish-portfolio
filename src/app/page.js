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
} from "lucide-react";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const navItems = [
  { id: "home", label: "Home", icon: <Home className="w-4 h-4" /> },
  { id: "about", label: "About", icon: <Info className="w-4 h-4" /> },
  { id: "experience", label: "Experience", icon: <Briefcase className="w-4 h-4" /> },
  { id: "skills", label: "Skills", icon: <Settings className="w-4 h-4" /> },
  { id: "contact", label: "Contact", icon: <Mail className="w-4 h-4" /> },
];

export default function HomePage() {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

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
              whileTap={{ scale: 0.97 }}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                activeSection === id
                  ? "bg-cyan-700 text-white font-semibold shadow-inner"
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="max-w-5xl mx-auto"
          >
            {/* Home */}
            {activeSection === "home" && (
              <div className="flex flex-col-reverse md:flex-row items-center gap-10 md:gap-20 mt-10">
                <div className="flex-1 text-center md:text-left space-y-4">
                  <h1 className="text-5xl font-bold">
                    Hello, I'm{" "}
                    <span className="text-cyan-400">Kashish Shah</span>
                  </h1>
                  <p className="text-gray-400 text-lg">
                    Embedded Systems & Firmware Engineer
                  </p>
                  <p className="text-gray-500">
                    Building low-power intelligent IoT systems with STM32, FreeRTOS, and TinyML.
                  </p>
                  <div className="flex justify-center md:justify-start gap-4 mt-4">
                    <a href="mailto:kashishharesh.shah@mavs.uta.edu">
                      <Button className="bg-cyan-500 text-black hover:bg-cyan-600">
                        Let's Talk
                      </Button>
                    </a>
                    <a
                      href="https://linkedin.com/in/kashishshah25"
                      target="_blank"
                      className="text-[#0077B5]"
                    >
                      <SiLinkedin className="w-6 h-6 hover:scale-110 transition" />
                    </a>
                    <a
                      href="https://github.com/kashish55991"
                      target="_blank"
                      className="text-white"
                    >
                      <SiGithub className="w-6 h-6 hover:scale-110 transition" />
                    </a>
                  </div>
                </div>

                <motion.div
                  className="w-64 h-64 bg-[#1a1a1a] rounded-3xl shadow-lg border border-cyan-700 p-3"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6 }}
                >
                  <Image
                    src="/Kashish Headshot.jpg"
                    alt="Kashish Shah"
                    width={300}
                    height={300}
                    className="object-cover w-full h-full rounded-2xl"
                  />
                </motion.div>
              </div>
            )}

            {/* About */}
            {activeSection === "about" && (
              <div className="space-y-4 text-gray-300 max-w-3xl mx-auto mt-10">
                <h2 className="text-3xl font-semibold text-cyan-400">About Me</h2>
                <p>
                  Passionate and result-driven Embedded Software Engineer with a master’s degree...
                </p>
                {/* Truncated for space. Add full text here. */}
              </div>
            )}

            {/* Experience */}
            {activeSection === "experience" && (
              <div className="space-y-6 mt-10 max-w-3xl mx-auto text-gray-300">
                <h2 className="text-3xl font-semibold text-cyan-400">Experience</h2>

                {/* Digi */}
                <Card className="bg-[#1e1e1e] border border-gray-700">
                  <CardContent className="pt-4 space-y-2">
                    <h3 className="text-lg font-semibold text-white">Digi International</h3>
                    <p className="text-sm text-gray-500">Apr 2021 – Present</p>
                    <ul className="list-disc ml-5 text-sm space-y-1 text-gray-300">
                      <li>Firmware for LoRaWAN XBee devices.</li>
                      <li>Developed AT/API commands, bootloaders, unit tests, and sensor interfaces.</li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Haxiot */}
                <Card className="bg-[#1e1e1e] border border-gray-700">
                  <CardContent className="pt-4 space-y-2">
                    <h3 className="text-lg font-semibold text-white">Haxiot, Inc</h3>
                    <p className="text-sm text-gray-500">Feb 2021 – Apr 2021</p>
                    <ul className="list-disc ml-5 text-sm space-y-1 text-gray-300">
                      <li>Tested STM32 devices, developed Python provisioning scripts.</li>
                    </ul>
                  </CardContent>
                </Card>

                {/* UTARI */}
                <Card className="bg-[#1e1e1e] border border-gray-700">
                  <CardContent className="pt-4 space-y-2">
                    <h3 className="text-lg font-semibold text-white">UTARI</h3>
                    <p className="text-sm text-gray-500">Jan 2019 – Feb 2021</p>
                    <ul className="list-disc ml-5 text-sm space-y-1 text-gray-300">
                      <li>Built BLE-powered Smart Cushion using Metro M4, nRF51, SPI.</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* Skills */}
            {activeSection === "skills" && (
              <div className="mt-10 space-y-6 max-w-3xl mx-auto text-gray-300">
                <h2 className="text-3xl font-semibold text-cyan-400">Skills</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-white mb-1">🧠 Embedded Skills</h4>
                    <p>FreeRTOS, ARM Architecture, Debugging, Memory Management, Edge AI, TinyML</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">🔌 Protocols</h4>
                    <p>LoRaWAN, UART, SPI, I2C, GPIO, ADC, BLE, Modbus</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">🛠 Tools</h4>
                    <p>VS Code, STM32Cube, Eagle PCB, Jira, Git, MATLAB</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">🧾 Languages</h4>
                    <p>C, C++, Python, MicroPython, Bash, ARM Assembly</p>
                  </div>
                </div>
              </div>
            )}

            {/* Contact */}
            {activeSection === "contact" && (
              <div className="mt-10 space-y-4 max-w-3xl mx-auto text-gray-300">
                <h2 className="text-3xl font-semibold text-cyan-400">Contact</h2>
                <p>Let’s connect and build awesome embedded projects 🚀</p>
                <ul className="space-y-2">
                  <li>📧 <a href="mailto:kashishharesh.shah@mavs.uta.edu" className="text-cyan-400">Email</a></li>
                  <li>🔗 <a href="https://linkedin.com/in/kashishshah25" className="text-cyan-400">LinkedIn</a></li>
                  <li>💻 <a href="https://github.com/kashish55991" className="text-cyan-400">GitHub</a></li>
                </ul>
              </div>
            )}
          </motion.section>
        </AnimatePresence>
      </main>
    </div>
  );
}
