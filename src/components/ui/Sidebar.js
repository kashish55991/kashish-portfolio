'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import BinaryStreamWrapper from '@/components/ui/BinaryStreamWrapper'
import AnimatedCodeSnippet from '@/components/ui/AnimatedCodeSnippet'
import { Menu, X } from 'lucide-react'

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <motion.aside
      animate={{ width: collapsed ? 64 : 300 }}
      transition={{ duration: 0.3 }}
      className="hidden md:flex fixed top-0 left-0 h-screen bg-[#0F1115] p-4 z-40"
    >
      <div className="flex flex-col w-full h-full">
        {/* Collapse Toggle */}
        <div className="flex justify-end mb-4">
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="text-gray-400 hover:text-white p-1"
          >
            {collapsed ? <Menu className="w-5 h-5" /> : <X className="w-5 h-5" />}
          </button>
        </div>

        {/* Centered Content */}
        {!collapsed && (
          <div className="flex-grow flex flex-col justify-center items-start gap-10 pl-[calc((100vw-1536px)/2+1.5rem)]">
            {/* Code Snippet */}
            <div className="w-full max-w-xs bg-[#1A1D23] p-3 rounded-md border border-[#00FFD1]/30 font-mono text-xs text-[#00FFD1] shadow-inner">
              <AnimatedCodeSnippet />
            </div>

            {/* Binary Stream */}
            <div className="w-full max-w-xs h-52 bg-[#0F1115] overflow-hidden border border-[#00FFD1]/30 rounded-md shadow-inner">
              <BinaryStreamWrapper lines={20} speed={100} />
            </div>
          </div>
        )}
      </div>
    </motion.aside>
  )
}
