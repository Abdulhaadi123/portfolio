
import React from 'react';
import { Github, ExternalLink, Code } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "WoodWard",
      description: "AI-powered sales coaching SaaS platform with multi-role dashboards for Admins, Coaches, and Sales Reps. Features AI-driven call simulation, Playbooks system, Stripe billing, and performance analytics.",
      technologies: ["Next.js", "React", "TypeScript", "Stripe", "React Query", "Tailwind CSS"],
      category: "AI SaaS",
      links: { live: "https://www.outboundprospecting.ai/" }
    },
    {
      title: "AI Voice Outreach & Candidate Screening",
      description: "Multi-tenant voice calling platform streaming real-time, low-latency AI phone calls between Twilio Media Streams and OpenAI Realtime API via WebSockets, with automated scheduling and post-call AI analysis.",
      technologies: ["React", "TypeScript", "Node.js", "Express", "FastAPI", "Twilio", "OpenAI", "Supabase"],
      category: "AI System",
      links: { live: "https://ai-call-system.netlify.app/" }
    },
    {
      title: "Cordial-AI",
      description: "Clinical AI Documentation & Compliance Platform automating clinical transcription, medical billing code (CPT/ICD-10) recommendation, and CMS compliance auditing using Deepgram, OpenAI GPT, and LangChain-Qdrant RAG pipeline.",
      technologies: ["React", "Python Flask", "Deepgram", "OpenAI GPT", "LangChain", "Qdrant", "RAG"],
      category: "AI Platform",
      links: { live: "https://www.app.cordialhealthpc.com/" }
    },
    {
      title: "Companion",
      description: "Scalable RESTful API backend for an AI-powered mobile app with JWT-based auth, OTP email verification, OAuth (Google/Apple), advanced task management with timezone support, AI chat session management, and FCM push notifications.",
      technologies: ["Node.js", "TypeScript", "Express.js", "MongoDB", "Firebase FCM", "JWT", "node-cron"],
      category: "Backend API",
      links: { live: "https://github.com/Abdulhaadi123/companion-backend" }
    },
    {
      title: "World Link",
      description: "Full-stack web platform developed at Sparkix Technologies, featuring real-time connectivity, scalable backend, and a modern responsive UI built with the MERN stack and Socket.io.",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.io", "Tailwind CSS"],
      category: "Web Application",
      links: { live: "https://world-link.sparkixtech.com/" }
    },
    {
      title: "Precision Grading",
      description: "Professional grading and assessment web platform with a clean, high-performance UI and secure backend APIs. Delivers seamless user experience for grading workflows and data management.",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "REST API", "Tailwind CSS"],
      category: "Web Application",
      links: { live: "https://precisiongrading.co.uk/" }
    },
    {
      title: "Grace AI",
      description: "AI-powered platform delivering intelligent automation and conversational AI solutions. Built with a modern full-stack architecture to provide seamless, scalable AI-driven experiences for users.",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "AI Integration", "Tailwind CSS"],
      category: "AI Platform",
      links: { live: "https://www.graceai.com.au/" }
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-300 to-indigo-300 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Here are some of the projects I've worked on, showcasing my expertise in full-stack and AI development
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="pro-card overflow-hidden group">
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                      <Code className="text-white" size={20} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </h3>
                      <span className="text-xs text-blue-300 bg-blue-400/10 px-2 py-1 rounded-full">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  {project.links && (
                    <div className="flex space-x-2">
                      {project.links.live && (
                        <a href={project.links.live} target="_blank" rel="noopener noreferrer"
                           className="text-gray-400 hover:text-white transition-colors">
                          {project.links.live.includes('github') ? <Github size={20} /> : <ExternalLink size={20} />}
                        </a>
                      )}
                    </div>
                  )}
                </div>

                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="text-xs bg-slate-700/50 text-gray-300 px-3 py-1 rounded-full border border-slate-600/50">
                      {tech}
                    </span>
                  ))}
                </div>

                {project.links && (
                  <div className="mt-4 pt-4 border-t border-slate-700/50">
                    <div className="flex space-x-4">
                      {project.links.live && (
                        <a href={project.links.live} target="_blank" rel="noopener noreferrer"
                           className="text-blue-300 hover:text-blue-200 transition-colors text-sm font-medium">
                          {project.links.live.includes('github') ? 'View on GitHub →' : 'View Live →'}
                        </a>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
