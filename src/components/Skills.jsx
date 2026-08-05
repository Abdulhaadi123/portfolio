"use client";
import React, { useState } from 'react';
import { Code2, Database, Brain, Zap, TrendingUp, Award } from 'lucide-react';

const SectionHeading = ({ label, title, subtitle }) => (
  <div className="text-center mb-16">
    <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-violet-400 mb-3 px-3 py-1 rounded-full border border-violet-500/20 bg-violet-500/5">
      {label}
    </span>
    <h2 className="text-4xl md:text-5xl font-black text-white mt-2">{title}</h2>
    <div className="mt-4 mx-auto w-16 h-1 rounded-full" style={{ background: 'linear-gradient(90deg,#7c3aed,#06b6d4)' }} />
    {subtitle && <p className="mt-5 text-slate-400 max-w-xl mx-auto text-sm">{subtitle}</p>}
  </div>
);

const skillCategories = [
  {
    title: "Frontend",
    icon: Code2,
    gradient: "from-violet-500 to-indigo-500",
    skills: [
      { name: "React.js",    level: 92 },
      { name: "Next.js",     level: 90 },
      { name: "TypeScript",  level: 85 },
      { name: "Tailwind CSS",level: 92 },
      { name: "Redux",       level: 82 },
      { name: "JavaScript",  level: 93 },
    ],
  },
  {
    title: "Backend & Database",
    icon: Database,
    gradient: "from-cyan-500 to-blue-500",
    skills: [
      { name: "Node.js",     level: 90 },
      { name: "Express.js",  level: 88 },
      { name: "MongoDB",     level: 88 },
      { name: "MySQL",       level: 80 },
      { name: "PostgreSQL",  level: 78 },
      { name: "Socket.io",   level: 85 },
    ],
  },
  {
    title: "Generative AI",
    icon: Brain,
    gradient: "from-fuchsia-500 to-violet-500",
    skills: [
      { name: "LLM Integration",   level: 88 },
      { name: "RAG Pipelines",      level: 85 },
      { name: "Vector Databases",   level: 82 },
      { name: "AI Agents",          level: 80 },
      { name: "Prompt Engineering", level: 87 },
      { name: "Firebase FCM",       level: 85 },
    ],
  },
];

const achievements = [
  { icon: Award,     value: "3+",   label: "Years Experience",      gradient: "from-amber-400 to-orange-500" },
  { icon: TrendingUp,value: "20+",  label: "Projects Delivered",    gradient: "from-emerald-400 to-teal-500" },
  { icon: Zap,       value: "AI+Web",label: "Full-Stack & AI Expert",gradient: "from-violet-500 to-fuchsia-500" },
];

const Skills = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* subtle mesh bg */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-violet-600/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <SectionHeading label="What I Know" title="Technical Arsenal" subtitle="Technologies I use to craft exceptional digital experiences" />

        {/* Achievement stats */}
        <div className="grid md:grid-cols-3 gap-5 mb-14 max-w-3xl mx-auto">
          {achievements.map(({ icon: Icon, value, label, gradient }, i) => (
            <div key={i} className="pro-card p-5 flex items-center gap-4">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center shrink-0 shadow-lg`}>
                <Icon size={22} className="text-white" />
              </div>
              <div>
                <p className="text-2xl font-black text-white">{value}</p>
                <p className="text-xs text-slate-400 font-medium">{label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Skill cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((cat, ci) => (
            <div key={ci} className="pro-card p-6 group">
              {/* Card header */}
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${cat.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <cat.icon size={20} className="text-white" />
                </div>
                <h3 className="text-base font-bold text-white">{cat.title}</h3>
              </div>

              {/* Skills */}
              <div className="space-y-4">
                {cat.skills.map((skill, si) => {
                  const key = `${ci}-${si}`;
                  const isHovered = hovered === key;
                  return (
                    <div key={si}
                      onMouseEnter={() => setHovered(key)}
                      onMouseLeave={() => setHovered(null)}
                      className="cursor-default"
                    >
                      <div className="flex justify-between mb-1.5">
                        <span className={`text-sm font-medium transition-colors duration-200 ${isHovered ? 'text-white' : 'text-slate-400'}`}>
                          {skill.name}
                        </span>
                        <span className="text-xs font-bold text-violet-400">{skill.level}%</span>
                      </div>
                      <div className="skill-track">
                        <div
                          className="skill-fill"
                          style={{ width: isHovered ? `${skill.level}%` : '0%' }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Core competencies cloud */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-center text-xl font-bold text-white mb-6">Core Competencies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "RAG Pipelines","Vector Databases","AI Agents","Speech AI Integration",
              "Prompt Engineering","JWT Authentication","Stripe Integration","Firebase FCM",
              "Socket.io Real-time","RESTful API Design","SaaS Platforms","Twilio Media Streams",
              "OpenAI API","LangChain","Cron Job Automation","OAuth 2.0",
            ].map((c, i) => (
              <span key={i}
                className="px-4 py-2 text-xs font-medium rounded-full border border-violet-500/15 bg-violet-500/5 text-slate-300 hover:border-violet-400/40 hover:text-violet-300 hover:bg-violet-500/10 transition-all duration-200 cursor-default">
                {c}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="inline-block pro-card px-10 py-8 max-w-xl w-full">
            <h3 className="text-xl font-bold text-white mb-2">Ready to build something amazing?</h3>
            <p className="text-slate-400 text-sm mb-6">Let's collaborate and bring your ideas to life.</p>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 rounded-xl font-semibold text-white text-sm transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-violet-500/25"
              style={{ background: 'linear-gradient(135deg,#7c3aed,#6366f1,#06b6d4)' }}
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
