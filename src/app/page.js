import React from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Linkedin } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex min-h-screen text-gray-900">
      {/* Sidebar Navigation */}
      <aside className="w-64 bg-white shadow-lg p-6 sticky top-0 h-screen hidden md:block">
        <h1 className="text-2xl font-bold mb-8">Kashish Shah</h1>
        <nav className="space-y-4 text-sm font-medium">
          <a href="#about" className="block hover:text-blue-600">About</a>
          <a href="#experience" className="block hover:text-blue-600">Experience</a>
          <a href="#skills" className="block hover:text-blue-600">Skills</a>
          <a href="#contact" className="block hover:text-blue-600">Contact</a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <section className="text-center space-y-4">
          <Image
            src="/Kashish Headshot.jpg"
            alt="Kashish Shah Headshot"
            width={160}
            height={160}
            className="mx-auto rounded-full object-contain shadow-md border"
          />
          <h2 className="text-4xl font-bold">Kashish Shah</h2>
          <p className="text-xl">Embedded Systems & Firmware Engineer</p>
          <div className="flex justify-center gap-4">
            <a href="mailto:kashishharesh.shah@mavs.uta.edu">
              <Button><Mail className="mr-2 w-4 h-4" /> Email</Button>
            </a>
            <a href="https://www.linkedin.com/in/kashishshah25" target="_blank" rel="noopener noreferrer">
              <Button variant="outline"><Linkedin className="mr-2 w-4 h-4" /> LinkedIn</Button>
            </a>
          </div>
        </section>

        <section id="about" className="mt-12 space-y-6">
          <h2 className="text-2xl font-semibold border-b pb-2">About Me</h2>
          <p>
            Passionate and result-driven Embedded Software Engineer with a master’s degree in electrical engineering, specializing in real-time systems, firmware development, and connected IoT solutions. Currently at Digi International, where I design and optimize embedded software for industrial-grade IoT systems for Low Power Devices using LoRaWAN.
            <br /><br />
            My core strengths lie in low-level embedded programming (C/C++), working with ARM Cortex microcontrollers, and building real-time applications using FreeRTOS and bare-metal design patterns. I’ve delivered reliable, power-efficient solutions for constrained environments, and have hands-on experience with UART, SPI, I2C, LoRaWAN, and BLE.
            <br /><br />
            Recently, I’ve expanded my expertise into AI at the Edge and TinyML, completing certifications on:
            <br />- Fundamentals of TinyML from Harvard University on EdX
            <br />- Introduction to Embedded Machine Learning by Edge Impulse on Coursera
            <br /><br />
            These credentials have enabled me to integrate lightweight AI models into embedded devices for tasks such as anomaly detection, environmental pattern recognition, and predictive maintenance—all on ultra-low-power microcontrollers.
            <br /><br />
            🚀 I thrive at the intersection of embedded systems and intelligent edge computing—developing smarter, more adaptive systems close to the data source.
            <br /><br />
            🔧 Core Skills:
            <br />• Edge AI, TinyML
            <br />• Embedded C/C++, ARM Cortex, STM32
            <br />• RTOS (FreeRTOS), Bare-metal, Low-power Systems
            <br />• IoT and Communication Protocols – UART, SPI, I2C, LoRaWAN, BLE
            <br />• Device Drivers, Bootloaders, Memory Management
            <br />• Tools: IAR, STM32CubeIDE, Edge Impulse, TensorFlow Lite, JTAG
            <br />• Agile Development: Git, Jira, Confluence, Bit Bucket, CI/CD
            <br /><br />
            🤝 Let&rsquo;s connect if you are building intelligent edge/IoT products or exploring how embedded AI can unlock new capabilities in connected devices!
          </p>
        </section>

        <section id="experience" className="mt-12 space-y-6">
          <h2 className="text-2xl font-semibold border-b pb-2">Experience</h2>
          <Card>
            <CardContent className="pt-4">
              <h3 className="text-lg font-semibold">Software Engineer I – Digi International</h3>
              <p className="text-sm text-gray-600">Apr 2021 – Present</p>
              <ul className="list-disc ml-5 mt-2 space-y-1 text-sm">
                <li>Developed firmware for IoT devices in LoRaWAN ecosystem.</li>
                <li>Built AT Command and API Frames for XBee LoRa device.</li>
                <li>Integrated sensors and communication protocols (UART, SPI, I2C, etc.).</li>
                <li>Implemented X-Modem Bootloader and unit tests using Unity and pytest.</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-4">
              <h3 className="text-lg font-semibold">Embedded Engineering Intern – Haxiot, Inc</h3>
              <p className="text-sm text-gray-600">Feb 2021 – Apr 2021</p>
              <ul className="list-disc ml-5 mt-2 space-y-1 text-sm">
                <li>Tested and debugged STM32-based devices for connectivity.</li>
                <li>Developed Python test fixtures for cloud provisioning.</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-4">
              <h3 className="text-lg font-semibold">Firmware Engineering Intern – UTARI</h3>
              <p className="text-sm text-gray-600">Jan 2019 – Feb 2021</p>
              <ul className="list-disc ml-5 mt-2 space-y-1 text-sm">
                <li>Firmware development for a Smart Seat Cushion with BLE communication.</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        <section id="skills" className="mt-12 space-y-6">
          <h2 className="text-2xl font-semibold border-b pb-2">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
            <div>
              <h4 className="font-semibold">Embedded Systems</h4>
              <p>FreeRTOS, ARM, Memory Management, Edge AI</p>
            </div>
            <div>
              <h4 className="font-semibold">MCUs</h4>
              <p>STM32, EFR32, TI Launchpad, Raspberry Pi</p>
            </div>
            <div>
              <h4 className="font-semibold">Languages</h4>
              <p>Embedded C, C++, Python, Bash</p>
            </div>
            <div>
              <h4 className="font-semibold">Protocols</h4>
              <p>LoRaWAN, UART, SPI, I2C, BLE, Modbus</p>
            </div>
            <div>
              <h4 className="font-semibold">Tools</h4>
              <p>Git, Unity, pytest, Eagle PCB, MATLAB</p>
            </div>
          </div>
        </section>

        <section id="contact" className="mt-12 space-y-6">
          <h2 className="text-2xl font-semibold border-b pb-2">Contact</h2>
          <p>
            Feel free to reach out for collaboration, questions, or opportunities via email or LinkedIn.
          </p>
        </section>
      </main>
    </div>
  );
}