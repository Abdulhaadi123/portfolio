import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

const SectionHeading = ({ label, title }) => (
  <div className="text-center mb-16">
    <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-violet-400 mb-3 px-3 py-1 rounded-full border border-violet-500/20 bg-violet-500/5">
      {label}
    </span>
    <h2 className="text-4xl md:text-5xl font-black text-white mt-2">{title}</h2>
    <div className="mt-4 mx-auto w-16 h-1 rounded-full" style={{ background: 'linear-gradient(90deg,#7c3aed,#06b6d4)' }} />
  </div>
);

const Experience = () => {
  const experiences = [
    {
      title: "MERN Stack Developer",
      company: "Sparkix Technologies",
      location: "Pakistan",
      period: "Sep 2025 – Present",
      current: true,
      description: [
        "Developed and maintained scalable full-stack applications using MongoDB, Express.js, React.js, and Node.js",
        "Built responsive UIs with React and Tailwind CSS; designed secure RESTful APIs for seamless integration",
        "Integrated real-time features using Socket.io and Firebase Cloud Messaging (FCM), implemented cron jobs for task automation",
        "Optimized performance, maintained clean code, collaborated cross-functionally to ship efficient solutions",
      ],
    },
    {
      title: "Full Stack Developer",
      company: "ClickTake Technologies",
      location: "Pakistan",
      period: "Jul 2025 – Aug 2025",
      current: false,
      description: [
        "Designed and maintained scalable web apps across React.js front-end and Node.js / Express.js back-end",
        "Ensured seamless integration between user interfaces and server-side logic",
        "Managed relational databases; wrote optimized SQL queries for retrieval, storage, and performance tuning",
        "Delivered high-quality, secure digital solutions aligned with business goals",
      ],
    },
    {
      title: "Software Developer",
      company: "Softwise Solution",
      location: "Pakistan",
      period: "Jan 2024 – Dec 2024",
      current: false,
      description: [
        "Designed and optimized interactive UI components with React, HTML, and CSS for responsive experiences",
        "Used MongoDB, Express.js, and Node.js for backend development, integrating APIs and managing data efficiently",
      ],
    },
  ];

  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-6">
        <SectionHeading label="My Journey" title="Work Experience" />

        <div className="max-w-3xl mx-auto relative">
          {/* Vertical line */}
          <div className="absolute left-5 top-0 bottom-0 w-px"
            style={{ background: 'linear-gradient(180deg,#7c3aed 0%,#06b6d4 100%)' }} />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <div key={i} className="relative pl-16">
                {/* Dot */}
                <div className="absolute left-[14px] top-6 -translate-x-1/2">
                  <div className="timeline-dot" />
                </div>

                <div className="pro-card p-6 group">
                  {/* Header row */}
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-lg font-bold text-white">{exp.title}</h3>
                        {exp.current && (
                          <span className="px-2 py-0.5 text-[10px] font-bold rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 uppercase tracking-wider">
                            Current
                          </span>
                        )}
                      </div>
                      <p className="text-violet-400 font-semibold text-sm mt-0.5">{exp.company}</p>
                    </div>
                    <div className="flex flex-col items-end gap-1 text-xs text-slate-500">
                      <span className="flex items-center gap-1.5">
                        <Calendar size={11} /> {exp.period}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin size={11} /> {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Bullets */}
                  <ul className="space-y-2">
                    {exp.description.map((item, j) => (
                      <li key={j} className="flex items-start gap-3 text-slate-400 text-sm leading-relaxed">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full shrink-0"
                          style={{ background: 'linear-gradient(135deg,#7c3aed,#06b6d4)' }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
