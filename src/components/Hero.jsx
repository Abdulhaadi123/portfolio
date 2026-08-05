"use client";
import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Download, ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const roles = ['MERN Stack Developer', 'AI Engineer', 'Full Stack Developer', 'React & Next.js Expert', 'RAG Pipeline Builder'];

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % roles.length;
      const fullText = roles[i];
      setText(isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1)
      );
      setTypingSpeed(isDeleting ? 25 : 120);
      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1800);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };
    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">

      {/* ── Background orbs ── */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="hero-orb absolute top-[12%] left-[8%]  w-[520px] h-[520px] rounded-full bg-[radial-gradient(circle,rgba(124,58,237,0.18)_0%,transparent_70%)] blur-3xl" />
        <div className="hero-orb absolute bottom-[8%]  right-[6%]  w-[420px] h-[420px] rounded-full bg-[radial-gradient(circle,rgba(6,182,212,0.13)_0%,transparent_70%)] blur-3xl" style={{ animationDelay: '4s' }} />
        <div className="hero-orb absolute top-[55%] left-[50%]  w-[300px] h-[300px] rounded-full bg-[radial-gradient(circle,rgba(165,180,252,0.10)_0%,transparent_70%)] blur-2xl" style={{ animationDelay: '8s' }} />
        {/* grid lines */}
        <div className="absolute inset-0 opacity-[0.025]"
          style={{ backgroundImage: 'linear-gradient(rgba(139,92,246,1) 1px,transparent 1px),linear-gradient(90deg,rgba(139,92,246,1) 1px,transparent 1px)', backgroundSize: '60px 60px' }} />
      </div>

      <div className="container mx-auto px-6 pt-28 pb-16 relative z-10">
        <div className="animate-enter text-center max-w-4xl mx-auto">

          {/* ── Avatar ── */}
          <div className="flex justify-center mb-10">
            <div className="relative">
              {/* spinning gradient ring */}
              <div className="absolute -inset-[3px] rounded-full animate-spin"
                style={{ background: 'conic-gradient(from 0deg, #7c3aed, #6366f1, #06b6d4, #7c3aed)', animationDuration: '6s' }} />
              {/* Avatar circle */}
              <div className="relative w-36 h-36 rounded-full border-4 border-[#050811] flex items-center justify-center shadow-2xl shadow-violet-900/60 overflow-hidden"
                style={{ background: 'linear-gradient(135deg, #0f0c29, #302b63, #24243e)' }}>
                {/* glow blob */}
                <div className="absolute w-28 h-28 rounded-full blur-2xl opacity-60"
                  style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.8) 0%, rgba(6,182,212,0.4) 60%, transparent 100%)' }} />
                {/* AH text */}
                <span className="relative z-10 text-4xl font-black tracking-tight select-none"
                  style={{ background: 'linear-gradient(135deg, #e0e7ff, #a78bfa, #67e8f9)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  AH
                </span>
              </div>
              {/* status badge */}
              <span className="absolute -bottom-1 -right-1 flex items-center gap-1 bg-[#050811] border border-violet-500/30 text-emerald-400 text-[10px] font-semibold px-2 py-0.5 rounded-full shadow-lg">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Available
              </span>
            </div>
          </div>

          {/* ── Eyebrow ── */}
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles size={14} className="text-violet-400" />
            <span className="text-violet-400 text-sm font-medium tracking-widest uppercase">MERN · AI · Full Stack</span>
            <Sparkles size={14} className="text-violet-400" />
          </div>

          {/* ── Name ── */}
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black mb-5 leading-[1.05] tracking-tight">
            <span className="text-gradient-hero">Abdul Hadi</span>
          </h1>

          {/* ── Typewriter ── */}
          <div className="h-14 flex items-center justify-center mb-8">
            <p className="text-xl sm:text-2xl font-light text-slate-300">
              <span className="text-white font-semibold">{text}</span>
              <span className="inline-block w-[2px] h-6 bg-violet-400 ml-1 animate-pulse align-middle" />
            </p>
          </div>

          {/* ── Bio ── */}
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto mb-10 px-2">
            Building scalable web apps & production-level AI systems — RAG pipelines, AI agents, and SaaS platforms — with React, Next.js, Node.js, and MongoDB.{' '}
            <span className="text-violet-300 font-medium">3+ years · Clean code · User-first.</span>
          </p>

          {/* ── CTA buttons ── */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button
              onClick={() => scrollToSection('projects')}
              className="group relative px-8 py-3.5 rounded-xl font-semibold text-white text-sm overflow-hidden transition-all duration-300 hover:scale-105"
              style={{ background: 'linear-gradient(135deg,#7c3aed,#6366f1,#06b6d4)', backgroundSize: '200% 200%' }}
            >
              <span className="relative z-10 flex items-center gap-2">
                View My Work
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>

            <button
              onClick={() => window.open('/Abdul Hadi CV.pdf', '_blank')}
              className="group px-8 py-3.5 rounded-xl font-semibold text-sm text-violet-300 border border-violet-500/40 bg-violet-500/5 hover:bg-violet-500/15 hover:border-violet-400/60 hover:text-white transition-all duration-300 flex items-center gap-2 hover:scale-105"
            >
              <Download size={16} />
              Download CV
            </button>

            <button
              onClick={() => scrollToSection('contact')}
              className="group px-8 py-3.5 rounded-xl font-semibold text-sm text-slate-300 border border-slate-600/40 bg-white/[0.03] hover:bg-white/[0.07] hover:border-slate-400/50 hover:text-white transition-all duration-300 hover:scale-105"
            >
              Get In Touch
            </button>
          </div>

          {/* ── Social links ── */}
          <div className="flex items-center justify-center gap-5">
            {[
              { href: 'https://github.com/Abdulhaadi123',             icon: Github,   label: 'GitHub',   color: 'hover:text-white   hover:shadow-white/20' },
              { href: 'https://www.linkedin.com/in/abdul-hadi-6b2162247/', icon: Linkedin, label: 'LinkedIn', color: 'hover:text-sky-400  hover:shadow-sky-400/30' },
              { href: 'mailto:abdulhadi86411@gmail.com',               icon: Mail,     label: 'Email',    color: 'hover:text-violet-400 hover:shadow-violet-400/30' },
            ].map(({ href, icon: Icon, label, color }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                aria-label={label}
                className={`group w-11 h-11 rounded-full flex items-center justify-center border border-slate-700/50 bg-white/[0.03] text-slate-400 transition-all duration-300 hover:scale-110 hover:border-transparent ${color} hover:shadow-lg`}
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;