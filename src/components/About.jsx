import React from 'react';
import { MapPin, Briefcase, GraduationCap, Github, Linkedin } from 'lucide-react';

const SectionHeading = ({ label, title }) => (
  <div className="text-center mb-16">
    <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-violet-400 mb-3 px-3 py-1 rounded-full border border-violet-500/20 bg-violet-500/5">
      {label}
    </span>
    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mt-2">
      {title}
    </h2>
    <div className="mt-4 mx-auto w-16 h-1 rounded-full" style={{ background: 'linear-gradient(90deg,#7c3aed,#06b6d4)' }} />
  </div>
);

const About = () => {
  const stats = [
    { value: '3+',  label: 'Years Experience' },
    { value: '20+', label: 'Projects Delivered' },
    { value: '4',   label: 'Companies Worked' },
    { value: '∞',   label: 'Lines of Code' },
  ];

  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-6">
        <SectionHeading label="Who I Am" title="About Me" />

        {/* Stats row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-16 max-w-3xl mx-auto">
          {stats.map(({ value, label }) => (
            <div key={label} className="pro-card p-4 sm:p-5 text-center">
              <p className="text-2xl sm:text-3xl font-black text-gradient-primary mb-1">{value}</p>
              <p className="text-[11px] sm:text-xs text-slate-400 font-medium">{label}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto items-start">

          {/* Left – Summary */}
          <div className="space-y-5">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: 'linear-gradient(135deg,#7c3aed,#06b6d4)' }}>
                <Briefcase size={18} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-white">Professional Summary</h3>
            </div>

            <p className="text-slate-400 leading-relaxed text-sm">
              MERN Stack Developer &amp; AI Engineer with <span className="text-violet-300 font-semibold">3+ years</span> of hands-on experience
              building scalable, high-performance web applications using React, Next.js, Node.js, Express.js,
              MongoDB, and TypeScript.
            </p>
            <p className="text-slate-400 leading-relaxed text-sm">
              Also builds production-level Generative AI systems — RAG pipelines, Vector Databases, AI Agents,
              and Speech AI integrations — bridging the gap between LLMs and deterministic business logic.
              Delivered production-ready SaaS platforms, RESTful backends, and AI-powered tools across diverse domains.
            </p>

            <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-2">
              <div className="flex items-center gap-2 text-slate-400 text-sm">
                <MapPin size={14} className="text-violet-400 shrink-0" />
                DHA Multan, Pakistan
              </div>
              <div className="flex items-center gap-2 text-slate-400 text-sm">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                Open to work
              </div>
            </div>

            <div className="flex flex-wrap gap-3 pt-1">
              <a href="https://github.com/Abdulhaadi123" target="_blank" rel="noopener noreferrer"
                 className="flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-700/50 bg-white/[0.03] text-slate-400 hover:text-white hover:border-slate-500 text-sm transition-all duration-200 font-medium">
                <Github size={15}/> GitHub
              </a>
              <a href="https://www.linkedin.com/in/abdul-hadi-6b2162247/" target="_blank" rel="noopener noreferrer"
                 className="flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-700/50 bg-white/[0.03] text-slate-400 hover:text-sky-400 hover:border-sky-500/40 text-sm transition-all duration-200 font-medium">
                <Linkedin size={15}/> LinkedIn
              </a>
            </div>
          </div>

          {/* Right – Education + Skills quick chips */}
          <div className="space-y-5">
            <div className="pro-card p-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: 'linear-gradient(135deg,#6366f1,#8b5cf6)' }}>
                  <GraduationCap size={18} className="text-white" />
                </div>
                <h4 className="text-lg font-bold text-white">Education</h4>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full mt-1.5 shrink-0" style={{ background: 'linear-gradient(135deg,#7c3aed,#06b6d4)' }} />
                <div>
                  <h5 className="text-white font-semibold text-sm">BS Computer Science</h5>
                  <p className="text-slate-400 text-xs mt-0.5">PMAS Arid University, Rawalpindi</p>
                </div>
              </div>
            </div>

            <div className="pro-card p-6">
              <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-widest">Core Stack</h4>
              <div className="flex flex-wrap gap-2">
                {['React.js','Next.js','Node.js','Express.js','MongoDB','TypeScript',
                  'LLM / RAG','AI Agents','Socket.io','Tailwind CSS'].map(t => (
                  <span key={t} className="px-3 py-1 text-xs font-medium rounded-full border border-violet-500/20 bg-violet-500/5 text-violet-300 hover:border-violet-400/50 hover:bg-violet-500/10 transition-all cursor-default">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
