"use client";
import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import Image from 'next/image';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const navLinks = ['about', 'skills', 'experience', 'projects', 'contact'];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled
        ? 'bg-[#050811]/80 backdrop-blur-2xl border-b border-violet-500/10 shadow-2xl shadow-black/40'
        : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-600 to-cyan-500 flex items-center justify-center shadow-lg shadow-violet-500/30">
              <span className="text-white font-black text-sm">AH</span>
            </div>
            <span className="text-white font-bold text-lg tracking-tight">Abdul Hadi</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => scrollToSection(link)}
                className="px-4 py-2 text-sm text-slate-400 hover:text-white capitalize rounded-lg hover:bg-white/5 transition-all duration-200 font-medium tracking-wide"
              >
                {link}
              </button>
            ))}
          </div>

          {/* Social + CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a href="https://github.com/Abdulhaadi123" target="_blank" rel="noopener noreferrer"
               className="text-slate-400 hover:text-white transition-colors duration-200">
              <Github size={18} />
            </a>
            <a href="https://www.linkedin.com/in/abdul-hadi-6b2162247/" target="_blank" rel="noopener noreferrer"
               className="text-slate-400 hover:text-sky-400 transition-colors duration-200">
              <Linkedin size={18} />
            </a>
            <a href="mailto:abdulhadi86411@gmail.com"
               className="text-slate-400 hover:text-violet-400 transition-colors duration-200">
              <Mail size={18} />
            </a>
            <button
              onClick={() => scrollToSection('contact')}
              className="ml-2 px-4 py-2 rounded-lg text-sm font-semibold text-white transition-all duration-300 hover:scale-105"
              style={{ background: 'linear-gradient(135deg,#7c3aed,#06b6d4)' }}
            >
              Hire Me
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-white p-2 rounded-lg border border-white/10 bg-white/5"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 px-2 bg-[#0a0f1e]/95 rounded-2xl border border-violet-500/15 backdrop-blur-xl animate-enter">
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => scrollToSection(link)}
                className="w-full text-left px-4 py-3 text-slate-300 hover:text-white capitalize hover:bg-white/5 rounded-xl transition-all duration-200 font-medium"
              >
                {link}
              </button>
            ))}
            <div className="flex items-center gap-4 px-4 pt-4 mt-2 border-t border-white/5">
              <a href="https://github.com/Abdulhaadi123" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white"><Github size={18}/></a>
              <a href="https://www.linkedin.com/in/abdul-hadi-6b2162247/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-sky-400"><Linkedin size={18}/></a>
              <a href="mailto:abdulhadi86411@gmail.com" className="text-slate-400 hover:text-violet-400"><Mail size={18}/></a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;