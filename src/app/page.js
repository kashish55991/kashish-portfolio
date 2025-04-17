'use client'

import Navbar from '@/components/ui/Navbar'
import Sidebar from '@/components/ui/Sidebar'
import Home from '@/components/sections/Home'
import About from '@/components/sections/About'
import Experience from '@/components/sections/Experience'
import Skills from '@/components/sections/Skills'
import Projects from '@/components/sections/Projects'
import BlogList from '@/components/sections/Blogs'
import Certifications from '@/components/sections/Certifications'
import Contact from '@/components/sections/Contact'

export default function Page() {
  return (
    <div className="bg-[#0F1115] text-white overflow-x-hidden">
      <Navbar />    {/* ✅ Top horizontal navbar */}
      <Sidebar />   {/* ✅ Left vertical panel */}
      
      {/* Main Content pushed right + below navbar */}
      <main className="pt-20 md:ml-[300px]">
        <Home />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <BlogList />
        <Certifications />
        <Contact />
      </main>
    </div>
  )
}
