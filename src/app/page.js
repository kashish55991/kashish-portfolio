"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Linkedin } from 'lucide-react';

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');

  const sections = {
    about: (
      <section id="about" className="mt-12 space-y-6">
        <h2 className="text-3xl font-semibold text-cyan-400 border-b border-gray-700 pb-2">About Me</h2>
        <p className="text-gray-400 leading-relaxed">
          Passionate Embedded Software Engineer with a master’s in Electrical Engineering. I specialize in real-time systems, firmware, and TinyML on ultra-low-power MCUs. I love solving real-world problems through efficient firmware architecture, edge computing, and robust communication protocols.
        </p>
      </section>
    ),
    experience: (
      <section id="experience" className="mt-12 space-y-6">
        <h2 className="text-3xl font-semibold text-cyan-400 border-b border-gray-700 pb-2">Experience</h2>
        <Card className="bg-[#1e1e1e] border border-gray-800">
          <CardContent className="pt-4">
            <h3 className="text-lg font-semibold text-white">Software Engineer I – Digi International</h3>
            <p className="text-sm text-gray-500">Apr 2021 – Present</p>
            <ul className="list-disc ml-5 mt-2 space-y-1 text-sm text-gray-400">
              <li>Developed embedded firmware for industrial LoRaWAN IoT devices.</li>
              <li>Built AT commands, bootloaders, and testing frameworks.</li>
              <li>Integrated BLE, GPS, and sensor protocols.</li>
            </ul>
          </CardContent>
        </Card>
      </section>
    ),
    skills: (
      <section id="skills" className="mt-12 space-y-6">
        <h2 className="text-3xl font-semibold text-cyan-400 border-b border-gray-700 pb-2">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-sm text-gray-300">
          <div>
            <h4 className="font-semibold text-white">Embedded Systems</h4>
            <p>FreeRTOS, Memory, Bootloaders</p>
          </div>
          <div>
            <h4 className="font-semibold text-white">MCUs</h4>
            <p>STM32, EFR32, Raspberry Pi</p>
          </div>
          <div>
            <h4 className="font-semibold text-white">Languages</h4>
            <p>C, C++, Python, Bash</p>
          </div>
          <div>
            <h4 className="font-semibold text-white">Protocols</h4>
            <p>LoRaWAN, BLE, UART, SPI</p>
          </div>
          <div>
            <h4 className="font-semibold text-white">Tools</h4>
            <p>Git, JTAG, IAR, Edge Impulse</p>
          </div>
        </div>
      </section>
    ),
    contact: (
      <section id="contact" className="mt-12 space-y-6">
        <h2 className="text-3xl font-semibold text-cyan-400 border-b border-gray-700 pb-2">Contact</h2>
        <p className="text-gray-400">
          Want to collaborate or have a cool embedded project? Let&apos;s connect.
        </p>
      </section>
    )
  };

  return (
    <div className="flex min-h-screen bg-[#0f0f0f] text-gray-100">
      {/* Sidebar Navigation */}
      <aside className="w-64 bg-[#161616] shadow-lg p-6 sticky top-0 h-screen hidden md:block border-r border-gray-800">
        <h1 className="text-2xl font-bold mb-8 text-cyan-400">Kashish Shah</h1>
        <nav className="space-y-4 text-sm font-medium">
          <button onClick={() => setActiveSection('home')} className="block text-left w-full hover:text-cyan-400">Home</button>
          <button onClick={() => setActiveSection('about')} className="block text-left w-full hover:text-cyan-400">About</button>
          <button onClick={() => setActiveSection('experience')} className="block text-left w-full hover:text-cyan-400">Experience</button>
          <button onClick={() => setActiveSection('skills')} className="block text-left w-full hover:text-cyan-400">Skills</button>
          <button onClick={() => setActiveSection('contact')} className="block text-left w-full hover:text-cyan-400">Contact</button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        {activeSection === 'home' && (
          <section className="text-center space-y-6 py-20">
            <Image
              src="/Kashish Headshot.jpg"
              alt="Kashish Shah Headshot"
              width={160}
              height={160}
              className="mx-auto rounded-full object-contain shadow-md border border-gray-700"
            />
            <h2 className="text-5xl font-bold">Talk is cheap.<br />Show me the code.</h2>
            <p className="text-gray-400 max-w-xl mx-auto text-lg">
              I build secure, low-power embedded systems with LoRaWAN and AI at the edge.
            </p>
            <div className="flex justify-center gap-4">
              <a href="mailto:kashishharesh.shah@mavs.uta.edu">
                <Button className="bg-cyan-500 text-black hover:bg-cyan-600"><Mail className="mr-2 w-4 h-4" /> Email</Button>
              </a>
              <a href="https://www.linkedin.com/in/kashishshah25" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="border-gray-600 text-gray-300 hover:text-white hover:border-white">
                  <Linkedin className="mr-2 w-4 h-4" /> LinkedIn
                </Button>
              </a>
            </div>
            <div className="mt-10 max-w-2xl mx-auto bg-[#1a1a1a] text-left p-6 rounded-lg shadow-md border border-gray-700">
              <pre className="text-xs text-cyan-300 whitespace-pre-wrap">
                {`// Code Snippet Example
void setup() {
  Serial.begin(9600);
  LoRa.begin(868E6);
  pinMode(LED_BUILTIN, OUTPUT);
}

void loop() {
  LoRa.beginPacket();
  LoRa.print("Hello from Kashish's device!");
  LoRa.endPacket();
  digitalWrite(LED_BUILTIN, HIGH);
  delay(1000);
  digitalWrite(LED_BUILTIN, LOW);
  delay(1000);
}`}
              </pre>
            </div>
          </section>
        )}

        {activeSection !== 'home' && sections[activeSection]}
      </main>
    </div>
  );
}