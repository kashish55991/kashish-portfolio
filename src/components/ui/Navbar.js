'use client'

import { useEffect, useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Blog', href: '#blog' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 100 // adjust for navbar height
      const sections = navLinks.map((link) => {
        const id = link.href.replace('#', '')
        const element = document.getElementById(id)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetBottom = offsetTop + element.offsetHeight
          return { id, inView: scrollPos >= offsetTop && scrollPos < offsetBottom }
        }
        return { id, inView: false }
      })

      const active = sections.find((s) => s.inView)
      if (active) setActiveSection(active.id)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#0F1115]/80 backdrop-blur-md border-b border-[#00FFD1]/10">
      <div className="w-full flex items-center justify-between px-18 py-4 text-white">
        {/* Logo */}
        <a href="#" className="text-2xl font-bold text-[#00FFD1]">
          Kashish Shah
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 text-sm font-medium">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`transition duration-200 ${
                activeSection === link.href.replace('#', '')
                  ? 'text-[#00FFD1] underline underline-offset-4'
                  : 'text-white hover:text-[#00FFD1]'
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-2xl">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#15191F] border-t border-[#00FFD1]/20 px-6 py-4 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`block text-sm ${
                activeSection === link.href.replace('#', '')
                  ? 'text-[#00FFD1] underline underline-offset-4'
                  : 'text-white hover:text-[#00FFD1]'
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}
