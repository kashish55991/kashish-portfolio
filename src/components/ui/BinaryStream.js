'use client'

import { useState, useEffect } from 'react'

function generateBinaryLine(length = 35) {
  return Array.from({ length }, () => (Math.random() > 0.5 ? '1' : '0')).join('')
}

export default function BinaryStream({ lines = 20, speed = 500 }) {
  const [binaryLines, setBinaryLines] = useState([])

  useEffect(() => {
    const initial = Array.from({ length: lines }, () => generateBinaryLine())
    setBinaryLines(initial)

    const interval = setInterval(() => {
      setBinaryLines(prev => [
        generateBinaryLine(),
        ...prev.slice(0, lines - 1),
      ])
    }, speed)

    return () => clearInterval(interval)
  }, [lines, speed])

  return (
    <div className="h-full w-full font-mono text-xs text-[#00FFD1] opacity-70 leading-tight overflow-hidden p-2">
      {binaryLines.map((line, index) => (
        <div key={index}>{line}</div>
      ))}
    </div>
  )
}
