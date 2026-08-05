import React from 'react';
import { Github, ExternalLink, Code2 } from 'lucide-react';

const SectionHeading = ({ label, title, subtitle }) => (
  <div className="text-center mb-16">
    <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-violet-400 mb-3 px-3 py-1 rounded-full border border-violet-500/20 bg-violet-500/5">
      {label}
    </span>
    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mt-2">{title}</h2>
    <div className="mt-4 mx-auto w-16 h-1 rounded-full" style={{ background: 'linear-gradient(90deg,#7c3aed,#06b6d4)' }} />
    {subtitle && <p className="mt-5 text-slate-400 max-w-xl mx-auto text-sm">{subtitle}</p>}
  </div>
);

const categoryColors = {
  'AI SaaS':         { bg: 'bg-violet-500/10',  text: 'text-violet-300',  border: 'border-violet-500/20' },
  'AI Platform':     { bg: 'bg-fuchsia-500/10', text: 'text-fuchsia-300', border: 'border-fuchsia-500/20' },
  'AI System':       { bg: 'bg-purple-500/10',  text: 'text-purple-300',  border: 'border-purple-500/20' },
  'Backend API':     { bg: 'bg-blue-500/10',    text: 'text-blue-300',    border: 'border-blue-500/20' },
  'Web Application': { bg: 'bg-cyan-500/10',    text: 'text-cyan-300',    border: 'border-cyan-500/20' },
};

const Projects = () => {
  const projects = [
    {
      title: "Cordial-AI",
      description: "Clinical AI Documentation & Compliance Platform automating clinical transcription, CPT/ICD-10 code recommendation, and CMS compliance auditing via Deepgram, OpenAI GPT, and LangChain-Qdrant RAG.",
      technologies: ["React", "Python Flask", "Deepgram", "OpenAI GPT", "LangChain", "Qdrant"],
      category: "AI Platform",
      links: { live: "https://www.app.cordialhealthpc.com/" },
    },
    {
      title: "Precision Grading",
      description: "Professional grading and assessment web platform with high-performance UI and secure backend APIs, delivering a seamless experience for grading workflows and data management.",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "REST API", "Tailwind CSS"],
      category: "Web Application",
      links: { live: "https://precisiongrading.co.uk/" },
    },
    {
      title: "WoodWard",
      description: "AI-powered sales coaching SaaS platform with multi-role dashboards for Admins, Coaches, and Sales Reps. Features AI-driven call simulation, Playbooks system, Stripe billing, and performance analytics.",
      technologies: ["Next.js", "React", "TypeScript", "Stripe", "React Query", "Tailwind CSS"],
      category: "AI SaaS",
      links: { live: "https://www.outboundprospecting.ai/" },
    },
    {
      title: "Grace AI",
      description: "AI-powered platform delivering intelligent automation and conversational AI solutions built with a modern full-stack architecture for seamless, scalable AI-driven user experiences.",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "AI Integration", "Tailwind CSS"],
      category: "AI Platform",
      links: { live: "https://www.graceai.com.au/" },
    },
    {
      title: "World Link",
      description: "Full-stack web platform developed at Sparkix Technologies featuring real-time connectivity, scalable backend, and a modern responsive UI built with the MERN stack and Socket.io.",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.io", "Tailwind CSS"],
      category: "Web Application",
      links: { live: "https://world-link.sparkixtech.com/" },
    },
    {
      title: "AI Voice Outreach & Screening",
      description: "Multi-tenant voice calling platform streaming real-time, low-latency AI phone calls between Twilio Media Streams and OpenAI Realtime API via WebSockets, with automated scheduling and post-call AI analysis.",
      technologies: ["React", "TypeScript", "Node.js", "FastAPI", "Twilio", "OpenAI", "Supabase"],
      category: "AI System",
      links: { live: "https://ai-call-system.netlify.app/" },
    },
    {
      title: "Companion",
      description: "Scalable RESTful API backend for an AI-powered mobile app with JWT auth, OTP email verification, OAuth (Google/Apple), advanced task management, AI chat session management, and FCM push notifications.",
      technologies: ["Node.js", "TypeScript", "Express.js", "MongoDB", "Firebase FCM", "JWT"],
      category: "Backend API",
      links: { live: "https://github.com/Abdulhaadi123/companion-backend" },
    },
  ];

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <SectionHeading
          label="My Work"
          title="Featured Projects"
          subtitle="A selection of projects showcasing my expertise in full-stack and Generative AI development"
        />

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {projects.map((project, i) => {
            const cat = categoryColors[project.category] || categoryColors['Web Application'];
            const isGithub = project.links.live.includes('github');

            return (
              <div key={i} className="pro-card group flex flex-col">
                <div className="p-6 flex flex-col flex-1">

                  {/* Top row */}
                  <div className="flex items-start justify-between mb-4 gap-3">
                    <div className="flex items-center gap-3 flex-1 min-w-0">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 shadow-md"
                        style={{ background: 'linear-gradient(135deg,#7c3aed,#06b6d4)' }}>
                        <Code2 size={18} className="text-white" />
                      </div>
                      <div className="min-w-0">
                        <h3 className="text-base font-bold text-white group-hover:text-violet-300 transition-colors">
                          {project.title}
                        </h3>
                        <span className={`inline-block text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border mt-0.5 ${cat.bg} ${cat.text} ${cat.border}`}>
                          {project.category}
                        </span>
                      </div>
                    </div>
                    <a href={project.links.live} target="_blank" rel="noopener noreferrer"
                       className="shrink-0 text-slate-500 hover:text-violet-400 transition-colors duration-200">
                      {isGithub ? <Github size={18}/> : <ExternalLink size={18}/>}
                    </a>
                  </div>

                  {/* Description */}
                  <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1">
                    {project.description}
                  </p>

                  {/* Tech chips */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.technologies.map((tech, ti) => (
                      <span key={ti} className="px-2.5 py-1 text-[11px] font-medium rounded-full bg-white/[0.04] border border-white/[0.08] text-slate-400">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Footer link */}
                  <div className="pt-4 border-t border-white/[0.06]">
                    <a href={project.links.live} target="_blank" rel="noopener noreferrer"
                       className="inline-flex items-center gap-1.5 text-violet-400 hover:text-violet-300 text-xs font-semibold transition-colors duration-200 group/link">
                      {isGithub ? 'View on GitHub' : 'View Live'}
                      <ExternalLink size={11} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
