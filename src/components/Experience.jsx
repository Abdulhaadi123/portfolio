
import React from 'react';

const Experience = () => {
  const experiences = [
  {
    title: "MERN Stack Developer",
    company: "Sparkix Technologies",
    location: "Pakistan",
    period: "Sep 2025 – Present",
    description: [
      "Developed and maintained scalable full-stack applications using MongoDB, Express.js, React.js, and Node.js",
      "Built responsive user interfaces with React and Tailwind CSS, and designed secure RESTful APIs for seamless integration",
      "Integrated real-time features using Socket.io and Firebase Cloud Messaging (FCM), and implemented cron jobs for task automation",
      "Optimized performance, maintained clean code, and collaborated with teams to deliver efficient solutions"
    ]
  },
  {
    title: "Full Stack Developer",
    company: "ClickTake Technologies",
    location: "Pakistan",
    period: "Jul 2025 – Aug 2025",
    description: [
      "Designed, developed, and maintained scalable web applications across front-end (React.js) and back-end (Node.js, Express.js) environments",
      "Ensured seamless integration between user interfaces and server-side logic",
      "Managed relational databases by writing optimized SQL queries for data retrieval, storage, and performance tuning",
      "Delivered high-quality, efficient, and secure digital solutions aligned with business goals"
    ]
  },
  {
    title: "Software Developer",
    company: "Softwise Solution",
    location: "Pakistan",
    period: "Jan 2024 – Dec 2024",
    description: [
      "Designed and optimized interactive UI components using React, HTML, and CSS, ensuring responsive and visually appealing user interfaces",
      "Utilized MongoDB, Express.js, and Node.js for backend development, integrating APIs and ensuring efficient data management and communication between server and front-end"
    ]
  }
];


  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-300 to-indigo-300 bg-clip-text text-transparent">
              Professional Experience
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-indigo-600"></div>
            
            {experiences.map((exp, index) => (
              <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full border-4 border-slate-900"></div>
                
                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="pro-card p-6">
                    <div className="mb-4">
                      <h3 className="text-xl font-semibold text-white mb-2">{exp.title}</h3>
                      <h4 className="text-blue-300 font-medium">{exp.company}</h4>
                      <div className="text-gray-400 text-sm mt-1">
                        <span>{exp.location}</span> • <span>{exp.period}</span>
                      </div>
                    </div>
                    <ul className="text-gray-300 space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className="w-2 h-2 bg-blue-300 rounded-full mt-2 mr-3 flex-shrink-0"></span>
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
