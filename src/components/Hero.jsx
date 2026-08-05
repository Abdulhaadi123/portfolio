"use client";
import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Download, MousePointer } from 'lucide-react';
import Image from 'next/image';

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const roles = ['MERN Stack Developer', 'AI Engineer', 'Full Stack Developer', 'React & Next.js Expert', 'Problem Solver'];

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % roles.length;
      const fullText = roles[i];

      setText(isDeleting 
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 30 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 500);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden mt-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/15 to-indigo-500/15 rounded-full blur-3xl hero-orb"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-violet-500/15 to-blue-500/15 rounded-full blur-3xl hero-orb" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-cyan-500/10 to-teal-500/10 rounded-full blur-3xl hero-orb" style={{ animationDelay: '2.5s' }}></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-enter">
          <div className="mb-8 relative">
            <div className="w-40 h-40 mx-auto mb-6 bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-600 rounded-full flex items-center justify-center relative overflow-hidden group cursor-pointer shadow-2xl shadow-blue-950/50">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <Image src="/image2.png" width={126} height={126} className="text-white relative z-10 group-hover:rotate-6 transition-transform duration-300" alt='Profile' />
              <div className="absolute inset-0 rounded-full border-4 border-white/20 animate-spin" style={{ animationDuration: '8s' }}></div>
            </div>
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-blue-300 to-indigo-500 rounded-full hero-orb" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full hero-orb" style={{ animationDelay: '1s' }}></div>
          </div>
          
          <h1 className="text-4xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient bg-300% relative">
            Abdul Hadi
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent opacity-50 blur-sm"></div>
          </h1>
          
          <div className="h-16 mb-6">
            <h2 className="text-3xl md:text-4xl font-light">
              <span className="bg-gradient-to-r from-cyan-300 to-purple-400 bg-clip-text text-transparent">
                {text}
                <span className="animate-pulse">|</span>
              </span>
            </h2>
          </div>
          
          <p className="text-lg md:text-xl text-slate-200 mb-8 max-w-4xl mx-auto leading-relaxed backdrop-blur-sm bg-white/5 p-6 rounded-2xl border border-white/10">
            MERN Stack Developer & AI Engineer with 3+ years of experience building scalable, high-performance web applications and production-level Generative AI systems.
            Skilled in React, Next.js, Node.js, Express.js, MongoDB, and TypeScript — bridging the gap between LLMs and deterministic business logic.
            <br />
            <span className="text-blue-300 font-semibold">Focused on delivering clean, maintainable code and user-centric solutions.</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button 
              onClick={() => scrollToSection('projects')}
              className="group px-8 py-4 bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-600 text-white rounded-xl font-semibold hover:shadow-2xl hover:shadow-indigo-500/25 transition-all duration-300 transform hover:scale-105 relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                <MousePointer size={20} />
                View My Work
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <button 
              onClick={() => window.open("/Abdul Hadi CV.pdf", '_blank')}
              className="group px-8 py-4 border-2 border-blue-300 text-blue-200 rounded-xl font-semibold hover:bg-blue-300 hover:text-slate-900 transition-all duration-300 backdrop-blur-sm bg-white/5 flex items-center justify-center gap-2"
            >
              <Download size={20} />
              Download Resume
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 border-2 border-violet-300 text-violet-200 rounded-xl font-semibold hover:bg-violet-300 hover:text-slate-950 transition-all duration-300 backdrop-blur-sm bg-white/5"
            >
              Get In Touch
            </button>
          </div>
          
          <div className="flex justify-center space-x-8">
            <a href="https://github.com/Abdulhaadi123" target="_blank" rel="noopener noreferrer" 
               className="group text-gray-400 hover:text-cyan-400 transition-all duration-300 transform hover:scale-125 relative">
              <Github size={32} />
              <div className="absolute -inset-2 bg-cyan-400/20 rounded-full opacity-0 group-hover:opacity-100 blur transition-opacity duration-300"></div>
            </a>
            <a href="https://www.linkedin.com/in/abdul-hadi-dev/" target="_blank" rel="noopener noreferrer" 
               className="group text-gray-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-125 relative">
              <Linkedin size={32} />
              <div className="absolute -inset-2 bg-blue-400/20 rounded-full opacity-0 group-hover:opacity-100 blur transition-opacity duration-300"></div>
            </a>
            <a href="mailto:abdulhadi86411@gmail.com" 
               className="group text-gray-400 hover:text-purple-400 transition-all duration-300 transform hover:scale-125 relative">
              <Mail size={32} />
              <div className="absolute -inset-2 bg-purple-400/20 rounded-full opacity-0 group-hover:opacity-100 blur transition-opacity duration-300"></div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;