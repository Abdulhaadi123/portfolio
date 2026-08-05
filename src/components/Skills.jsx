"use client";
import React, { useState, useEffect, useMemo } from 'react';
import { Code2, Database, Cloud, Wrench, Smartphone, Award, TrendingUp, Zap, Brain } from 'lucide-react';

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [animateOnMount, setAnimateOnMount] = useState(false);

  const backgroundParticles = useMemo(
    () =>
      Array.from({ length: 50 }, (_, i) => ({
        id: i,
        left: (i * 37) % 100,
        top: (i * 53) % 100,
        delay: ((i % 10) * 0.2).toFixed(1),
        duration: (2.2 + (i % 5) * 0.45).toFixed(2),
      })),
    []
  );

  useEffect(() => {
    setAnimateOnMount(true);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const skillCategories = [
    {
      title: "Frontend",
      icon: Code2,
      color: "from-cyan-500 to-blue-500",
      skills: [
        { name: "React.js", level: 92, color: "bg-gradient-to-r from-cyan-400 to-blue-500" },
        { name: "Next.js", level: 90, color: "bg-gradient-to-r from-gray-400 to-slate-600" },
        { name: "TypeScript", level: 85, color: "bg-gradient-to-r from-blue-500 to-indigo-600" },
        { name: "Tailwind CSS", level: 90, color: "bg-gradient-to-r from-cyan-400 to-teal-500" },
        { name: "Redux", level: 82, color: "bg-gradient-to-r from-purple-500 to-violet-600" },
        { name: "JavaScript", level: 92, color: "bg-gradient-to-r from-yellow-400 to-orange-500" }
      ]
    },
    {
      title: "Backend & Database",
      icon: Database,
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "Node.js", level: 90, color: "bg-gradient-to-r from-green-400 to-emerald-500" },
        { name: "Express.js", level: 88, color: "bg-gradient-to-r from-gray-400 to-slate-500" },
        { name: "MongoDB", level: 88, color: "bg-gradient-to-r from-green-500 to-teal-500" },
        { name: "MySQL", level: 80, color: "bg-gradient-to-r from-orange-400 to-amber-500" },
        { name: "PostgreSQL", level: 78, color: "bg-gradient-to-r from-blue-500 to-cyan-600" },
        { name: "Socket.io", level: 85, color: "bg-gradient-to-r from-gray-600 to-gray-800" }
      ]
    },
    {
      title: "Generative AI & Tools",
      icon: Brain,
      color: "from-violet-500 to-purple-600",
      skills: [
        { name: "LLM Integration", level: 88, color: "bg-gradient-to-r from-violet-500 to-purple-600" },
        { name: "RAG Pipelines", level: 85, color: "bg-gradient-to-r from-pink-500 to-rose-600" },
        { name: "Vector Databases", level: 82, color: "bg-gradient-to-r from-indigo-500 to-blue-600" },
        { name: "AI Agents", level: 80, color: "bg-gradient-to-r from-cyan-500 to-teal-600" },
        { name: "Firebase FCM", level: 85, color: "bg-gradient-to-r from-yellow-400 to-orange-500" },
        { name: "Git & GitHub", level: 90, color: "bg-gradient-to-r from-gray-600 to-gray-800" }
      ]
    }
  ];

  const achievements = [
    {
      icon: Award,
      title: "3+ Years Experience",
      description: "Full-stack & AI development",
      color: "from-yellow-400 to-orange-500"
    },
    {
      icon: TrendingUp,
      title: "Production SaaS",
      description: "AI-powered platforms delivered",
      color: "from-green-400 to-emerald-500"
    },
    {
      icon: Zap,
      title: "AI & Web Expert",
      description: "MERN + Generative AI systems",
      color: "from-purple-400 to-pink-500"
    }
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/50 via-purple-900/30 to-slate-900/50"></div>
      <div className="absolute inset-0">
        {backgroundParticles.map((particle) => (
          <div
            key={particle.id}
            className="absolute w-1 h-1 bg-cyan-400/30 rounded-full animate-pulse"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-300 via-indigo-300 to-violet-300 bg-clip-text text-transparent">
              Technical Arsenal
            </span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            🔥 Technologies I use to craft exceptional digital experiences
          </p>
        </div>

        {/* Achievement Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className={`pro-card p-6 ${animateOnMount ? 'animate-fade-in-up' : 'opacity-0'
                }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-center space-x-4">
                <div className={`w-12 h-12 bg-gradient-to-r ${achievement.color} rounded-xl flex items-center justify-center`}>
                  <achievement.icon className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg">{achievement.title}</h3>
                  <p className="text-gray-400 text-sm">{achievement.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="group relative pro-card p-6 hover:transform hover:scale-105"
            >
              {/* Glassmorphism effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/0 rounded-2xl"></div>

              {/* Animated background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`}></div>

              <div className="relative z-10">
                <div className="flex items-center justify-center mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300`}>
                    <category.icon className="text-white" size={28} />
                  </div>
                </div>

                <h3 className="text-2xl font-semibold text-white mb-6 text-center group-hover:text-blue-300 transition-colors">
                  {category.title}
                </h3>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="group/skill cursor-pointer"
                      onMouseEnter={() => setHoveredSkill(`${index}-${skillIndex}`)}
                      onMouseLeave={() => setHoveredSkill(null)}
                    >
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-300 text-sm font-medium group-hover/skill:text-white transition-colors">
                          {skill.name}
                        </span>
                        <span className="text-blue-300 text-sm font-bold">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-slate-700/50 rounded-full h-3 overflow-hidden backdrop-blur-sm">
                        <div
                          className={`${skill.color} h-3 rounded-full transition-all duration-1000 ease-out relative overflow-hidden`}
                          style={{
                            width: hoveredSkill === `${index}-${skillIndex}` ? `${skill.level}%` : '0%'
                          }}
                        >
                          <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Core Competencies */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-300 to-indigo-300 bg-clip-text text-transparent">
                Core Competencies
              </span>
            </h3>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto"></div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "RAG Pipelines",
              "Vector Databases",
              "AI Agents",
              "Speech AI Integration",
              "Prompt Engineering",
              "JWT Authentication",
              "Stripe Integration",
              "Firebase FCM",
              "Socket.io Real-time",
              "RESTful API Design",
              "SaaS Platforms",
              "Twilio Media Streams",
              "OpenAI API",
              "LangChain",
              "Cron Job Automation"
            ].map((competency, idx) => (
              <div 
                key={idx}
                className="px-6 py-3 bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-full hover:border-blue-400/50 hover:bg-slate-700/50 transition-all duration-300 group cursor-default"
              >
                <span className="text-gray-300 group-hover:text-blue-300 font-medium transition-colors">
                  {competency}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 backdrop-blur-sm p-8 rounded-2xl border border-blue-400/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Build Something Amazing?
            </h3>
            <p className="text-gray-300 mb-6">
              Let's collaborate and bring your ideas to life with cutting-edge technology
            </p>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-8 py-3 rounded-full font-semibold hover:from-blue-400 hover:to-indigo-500 transition-all duration-300 transform hover:scale-105">
              Get In Touch
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }
        
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </section>
  );
};

export default Skills;

