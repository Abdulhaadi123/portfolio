"use client";
import React, { useState, useEffect } from 'react';
import { Code, Github, Linkedin, Mail, Download, MousePointer } from 'lucide-react';
import Image from 'next/image';

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const roles = ['Mobile App Developer', 'React Native Expert', 'Full Stack Mobile App Developer', 'Cross-Platform Developer', 'Problem Solver'];

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
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-green-500/20 to-teal-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <div className="mb-8 relative">
            <div className="w-40 h-40 mx-auto mb-6 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 rounded-full flex items-center justify-center relative overflow-hidden group cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <Image src="/image2.png" width={126} height={126} className="text-white relative z-10 group-hover:rotate-12 transition-transform duration-300" alt='<>'></Image>
              {/* <Code size={56} className="text-white relative z-10 group-hover:rotate-12 transition-transform duration-300" /> */}
              <div className="absolute inset-0 rounded-full border-4 border-white/20 animate-spin" style={{ animationDuration: '8s' }}></div>
            </div>
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-gradient-to-r from-green-400 to-cyan-500 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
          </div>
          
          <h1 className="text-4xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient bg-300% relative">
            Talha Jabbar
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
          
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed backdrop-blur-sm bg-white/5 p-6 rounded-2xl border border-white/10">
            🚀 Passionate Mobile App Developer with 3+ years of experience building scalable cross-platform applications. 
            Skilled in React Native, MongoDB, Express.js, and Node.js, with expertise in deploying to Google Play Store 
            and integrating Firebase services.
            <br />
            <span className="text-cyan-400 font-semibold">✨ Focused on writing clean, maintainable code and delivering user-centric solutions ✨</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button 
              onClick={() => scrollToSection('projects')}
              className="group px-8 py-4 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 text-white rounded-xl font-semibold hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105 relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                <MousePointer size={20} />
                View My Work
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <button 
              onClick={() => window.open("/Talha's Resume.pdf", '_blank')}
              className="group px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-xl font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 backdrop-blur-sm bg-white/5 flex items-center justify-center gap-2"
            >
              <Download size={20} />
              Download Resume
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 border-2 border-purple-400 text-purple-400 rounded-xl font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300 backdrop-blur-sm bg-white/5"
            >
              Get In Touch
            </button>
          </div>
          
          <div className="flex justify-center space-x-8">
            <a href="https://github.com/Talha5t5" target="_blank" rel="noopener noreferrer" 
               className="group text-gray-400 hover:text-cyan-400 transition-all duration-300 transform hover:scale-125 relative">
              <Github size={32} />
              <div className="absolute -inset-2 bg-cyan-400/20 rounded-full opacity-0 group-hover:opacity-100 blur transition-opacity duration-300"></div>
            </a>
            <a href="https://www.linkedin.com/in/rana-talha-28275427a/" target="_blank" rel="noopener noreferrer" 
               className="group text-gray-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-125 relative">
              <Linkedin size={32} />
              <div className="absolute -inset-2 bg-blue-400/20 rounded-full opacity-0 group-hover:opacity-100 blur transition-opacity duration-300"></div>
            </a>
            <a href="mailto:rana.talha3d@gmail.com" 
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