"use client";
import React, { useState, useEffect } from 'react';
import { Menu, Github, Linkedin, Mail } from 'lucide-react';
import Image from 'next/image';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-slate-950/85 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/20' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-200 to-indigo-300 bg-clip-text text-transparent flex items-center space-x-2">
            <Image src="/image.png" width={30} height={30} className='mr-2' alt="Brand" />
            Abdul Hadi
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('about')} className="text-slate-300 hover:text-white transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('skills')} className="text-slate-300 hover:text-white transition-colors">
              Skills
            </button>
            <button onClick={() => scrollToSection('experience')} className="text-slate-300 hover:text-white transition-colors">
              Experience
            </button>
            <button onClick={() => scrollToSection('projects')} className="text-slate-300 hover:text-white transition-colors">
              Projects
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-slate-300 hover:text-white transition-colors">
              Contact
            </button>
          </div>

          {/* Social Links */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="https://github.com/Abdulhaadi123" target="_blank" rel="noopener noreferrer" 
               className="text-slate-300 hover:text-white transition-colors">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/abdul-hadi-dev/" target="_blank" rel="noopener noreferrer" 
               className="text-slate-300 hover:text-white transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="mailto:abdulhadi86411@gmail.com" 
               className="text-slate-300 hover:text-white transition-colors">
              <Mail size={20} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2 rounded-lg border border-white/10 bg-white/5"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu size={24} />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-slate-900/95 rounded-xl border border-white/10 animate-enter">
            <div className="flex flex-col space-y-3">
              <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-white transition-colors text-left px-4">
                About
              </button>
              <button onClick={() => scrollToSection('skills')} className="text-gray-300 hover:text-white transition-colors text-left px-4">
                Skills
              </button>
              <button onClick={() => scrollToSection('experience')} className="text-gray-300 hover:text-white transition-colors text-left px-4">
                Experience
              </button>
              <button onClick={() => scrollToSection('projects')} className="text-gray-300 hover:text-white transition-colors text-left px-4">
                Projects
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-white transition-colors text-left px-4">
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;