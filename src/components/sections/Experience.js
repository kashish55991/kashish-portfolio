"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export default function Experience({ id, sectionRef }) {
  const jobs = [
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
        "Collaborated with backend team for telemetry & provisioning",
      ],
    },
    {
      title: "Haxiot, Inc",
      time: "Feb 2021 – Apr 2021",
      bullets: [
        "Tested and debugged STM32 bare-metal devices",
        "Built provisioning tools using Python and Raspberry Pi",
        "Configured LoRaWAN for multiple product lines",
      ],
    },
    {
      title: "UTARI – UT Arlington Research Institute",
      time: "Jan 2019 – Feb 2021",
      bullets: [
        "Developed Smart Seat Cushion firmware (Metro M4)",
        "Used C, C++, CircuitPython for embedded control",
        "Integrated BLE (nrf51), SPI, gesture button RGB input",
        "Built automated testing system and Eagle PCB layouts",
      ],
    },
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
      <h2 className="text-3xl font-semibold text-cyan-400">Experience</h2>

      {jobs.map((job, i) => (
        <Card key={i} className="bg-[#1e1e1e] border border-gray-700">
          <CardContent className="pt-4 space-y-2">
            <h3 className="text-lg font-semibold text-white">{job.title}</h3>
            <p className="text-sm text-gray-500">{job.time}</p>
            <ul className="list-disc ml-5 text-sm space-y-1 text-gray-300">
              {job.bullets.map((item, idx) => (
                <li key={`${job.title}-${idx}`}>{item}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ))}
    </motion.section>
  );
}
