"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Home,
  Info,
  Briefcase,
  Settings,
  Mail,
  FileText,
  Folder,
  Menu,
  X,
} from "lucide-react";

const navItems = [
  { id: "home", label: "Home", icon: <Home className="w-5 h-5" /> },
  { id: "about", label: "About", icon: <Info className="w-5 h-5" /> },
  { id: "experience", label: "Experience", icon: <Briefcase className="w-5 h-5" /> },
  { id: "skills", label: "Skills", icon: <Settings className="w-5 h-5" /> },
  { id: "certifications", label: "Certifications", icon: <FileText className="w-5 h-5" /> },
  { id: "projects", label: "Projects", icon: <Folder className="w-5 h-5" /> },
  { id: "blogs", label: "Blogs", icon: <Folder className="w-5 h-5" /> },
  { id: "contact", label: "Contact", icon: <Mail className="w-5 h-5" /> },
];

export default function Sidebar({ activeSection, sectionRefs}) {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const toggleDesktop = () => setCollapsed(!collapsed);
  const toggleMobile = () => setMobileOpen(!mobileOpen);

  const NavList = ({ isMobile }) => (
    <nav className="flex flex-col gap-2 text-sm font-medium">
      {navItems.map(({ id, label, icon }) => (
        <motion.button
          key={id}
          onClick={() => {
            sectionRefs[id]?.current?.scrollIntoView({ behavior: "smooth" });
            if (isMobile) toggleMobile();
          }}
          whileHover={{ scale: 1.05 }}
          className={`flex items-center gap-3 px-4 py-2 rounded-lg transition ${
            activeSection === id
              ? "bg-cyan-700 text-white font-semibold"
              : "hover:bg-[#1c1c1c] hover:text-cyan-300 text-gray-400"
          }`}
        >
          {icon}
          {!collapsed && <span>{label}</span>}
        </motion.button>
      ))}
    </nav>
  );

  return (
    <>
      {/* Mobile Hamburger */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <button
          onClick={toggleMobile}
          className="p-2 rounded-md bg-[#161616] border border-gray-700 shadow-lg text-white"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <motion.aside
        initial={{ x: "-100%" }}
        animate={{ x: mobileOpen ? 0 : "-100%" }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 left-0 w-64 h-full bg-[#161616] border-r border-gray-800 shadow-lg p-6 z-40 md:hidden"
      >
        <h1 className="text-xl font-bold text-cyan-400 mb-6">Kashish Shah</h1>
        <NavList isMobile />
      </motion.aside>

      {/* Desktop Sidebar */}
      <motion.aside
        animate={{ width: collapsed ? 64 : 256 }}
        transition={{ duration: 0.3 }}
        className="hidden md:flex fixed top-0 left-0 h-screen bg-[#161616] border-r border-gray-800 shadow-lg p-4 flex-col z-40"
      >
        <div className="flex items-center justify-between mb-6">
          {!collapsed && <h1 className="text-xl font-bold text-cyan-400">Kashish</h1>}
          <button
            onClick={toggleDesktop}
            className="text-gray-400 hover:text-white p-1"
          >
            {collapsed ? <Menu className="w-5 h-5" /> : <X className="w-5 h-5" />}
          </button>
        </div>
        <NavList />
      </motion.aside>
    </>
  );
}
