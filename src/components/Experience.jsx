
import React from 'react';

const Experience = () => {
  const experiences = [
  {
    title: "Full Stack Developer",
    company: "Softwise Solution",
    location: "Onsite",
    period: "Oct 2024 – Present",
    description: [
      "Focused on developing high-performance, cross-platform mobile applications using React Native",
      "Collaborated with teams to deliver scalable, user-friendly mobile experiences",
      "Continually learned and applied best practices in real-world app development"
    ]
  },
  {
    title: "Junior Frontend Developer",
    company: "Outscalers",
    location: "Remote",
    period: "Jul 2024 – Sep 2024",
    description: [
      "Built responsive, mobile-first interfaces with seamless API integration",
      "Implemented dynamic app functionality using modern frontend technologies"
    ]
  },
  {
    title: "App Developer Intern",
    company: "Data App Studio",
    location: "Onsite",
    period: "Jan 2024 – May 2024",
    description: [
      "Developed front-end and mobile applications with a focus on responsive UI",
      "Integrated RESTful APIs to ensure smooth, user-centric app workflows"
    ]
  },
  {
    title: "React Developer Intern",
    company: "Green International",
    location: "Onsite",
    period: "Oct 2023 – Dec 2023",
    description: [
      "Contributed to React-based projects, developing and optimizing UI components",
      "Adhered to clean code principles and collaborated via Git for version control"
    ]
  }
];


  return (
    <section id="experience" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Professional Experience
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-600"></div>
            
            {experiences.map((exp, index) => (
              <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full border-4 border-slate-900"></div>
                
                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="bg-slate-700/50 p-6 rounded-xl border border-slate-600/50 hover:border-blue-500/30 transition-all duration-300">
                    <div className="mb-4">
                      <h3 className="text-xl font-semibold text-white mb-2">{exp.title}</h3>
                      <h4 className="text-blue-400 font-medium">{exp.company}</h4>
                      <div className="text-gray-400 text-sm mt-1">
                        <span>{exp.location}</span> • <span>{exp.period}</span>
                      </div>
                    </div>
                    <ul className="text-gray-300 space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
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
