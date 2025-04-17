'use client'

import { useEffect, useState } from 'react'

const codeLines = [
  { type: 'comment', text: '// main.c — when hope is a strategy ⚡' },
  { type: 'include', text: '#include <nerves.h>' },
  { type: 'include', text: '#include <luck.h>' },
  { type: 'empty', text: '' },
  { type: 'function', text: 'int main() {' },
  { type: 'call', text: '    flashFirmware();' },
  { type: 'call', text: '    prayToTheDevGods();' },
  { type: 'condition', text: '    if (!magicSmokeReleased())' },
  { type: 'returnSuccess', text: '        return SUCCESS;' },
  { type: 'returnPanic', text: '    return PANIC;' },
  { type: 'closing', text: '}' },
]

const getLineClass = (type) => {
  switch (type) {
    case 'comment':
      return 'text-[#00FFD1]/80'
    case 'include':
      return 'text-green-400'
    case 'function':
      return 'text-cyan-300'
    case 'call':
      return 'text-yellow-300'
    case 'condition':
      return 'text-yellow-300'
    case 'returnSuccess':
      return 'text-lime-400'
    case 'returnPanic':
      return 'text-red-400'
    case 'closing':
      return 'text-[#00FFD1]'
    default:
      return ''
  }
}

export default function AnimatedCodeSnippet() {
  const [visibleLines, setVisibleLines] = useState(0)

  useEffect(() => {
    if (visibleLines < codeLines.length) {
      const timeout = setTimeout(() => {
        setVisibleLines((prev) => prev + 1)
      }, 250) // speed of line reveal
      return () => clearTimeout(timeout)
    }
  }, [visibleLines])

  return (
    <pre className="bg-[#1A1D23] p-3 rounded-md border border-[#00FFD1]/30 font-mono text-xs shadow-inner whitespace-pre-wrap">
      {codeLines.slice(0, visibleLines).map((line, i) => (
        <div key={i} className={getLineClass(line.type)}>
          {line.text}
        </div>
      ))}
    </pre>
  )
}
