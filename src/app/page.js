"use client";

import React, { useRef, useState, useEffect } from "react";
import Sidebar from "@/components/ui/Sidebar";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home as HomeIcon,
  Info,
  Briefcase,
  Settings,
  Mail,
  FileText,
  Folder,
} from "lucide-react";

import Home from "@/components/sections/Home";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Skills from "@/components/sections/Skills";
import Certifications from "@/components/sections/Certifications";
import Projects from "@/components/sections/Projects";
import Blogs from "@/components/sections/Blogs";
import Contact from "@/components/sections/Contact";

const navItems = [
  { id: "home", label: "Home", icon: <HomeIcon className="w-4 h-4" /> },
  { id: "about", label: "About", icon: <Info className="w-4 h-4" /> },
  { id: "experience", label: "Experience", icon: <Briefcase className="w-4 h-4" /> },
  { id: "skills", label: "Skills", icon: <Settings className="w-4 h-4" /> },
  { id: "certifications", label: "Certifications", icon: <FileText className="w-4 h-4" /> },
  { id: "projects", label: "Projects", icon: <Folder className="w-4 h-4" /> },
  { id: "blogs", label: "Blogs", icon: <Folder className="w-4 h-4" /> },
  { id: "contact", label: "Contact", icon: <Mail className="w-4 h-4" /> },
];



export default function Page() {
  const [activeSection, setActiveSection] = useState("home");
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const sectionRefs = {
    home: useRef(null),
    about: useRef(null),
    experience: useRef(null),
    skills: useRef(null),
    certifications: useRef(null),
    projects: useRef(null),
    blogs: useRef(null),
    contact: useRef(null),
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible?.target?.id) {
          setActiveSection(visible.target.id);
        }
      },
      {
        rootMargin: "-30% 0px -10% 0px",
        threshold: 0.1,
      }
    );

    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar
        collapsed={sidebarCollapsed}
        setCollapsed={setSidebarCollapsed}
        activeSection={activeSection}
        sectionRefs={sectionRefs}
      />
      <aside className="hidden md:flex fixed top-0 left-0 w-64 h-screen bg-[#161616] p-6 border-r border-gray-800 shadow-lg flex-col z-50">
        <motion.h1 className="text-2xl font-bold mb-8 text-cyan-400">Kashish Shah</motion.h1>
        <nav className="flex flex-col gap-3 text-sm font-medium">
          {navItems.map(({ id, label, icon }) => (
            <motion.button
              key={`nav-${id}`}
              onClick={() => sectionRefs[id]?.current?.scrollIntoView({ behavior: "smooth" })}
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
      <main
        className={`flex-1 p-6 transition-all duration-300 ${
          sidebarCollapsed ? "md:ml-16" : "md:ml-64"
        }`}
      >
        <AnimatePresence>
          <Home id="home" sectionRef={sectionRefs.home} />
          <About id="about" sectionRef={sectionRefs.about} />
          <Experience id="experience" sectionRef={sectionRefs.experience} />
          <Skills id="skills" sectionRef={sectionRefs.skills} />
          <Certifications id="certifications" sectionRef={sectionRefs.certifications} />
          <Projects id="projects" sectionRef={sectionRefs.projects} />
          <Blogs id="blogs" sectionRef={sectionRefs.blogs} />
          <Contact id="contact" sectionRef={sectionRefs.contact} />
        </AnimatePresence>
      </main>
    </div>
  );
}
