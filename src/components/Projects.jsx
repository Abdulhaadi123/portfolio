
import React from 'react';
import { Github, Code } from 'lucide-react';

const Projects = () => {
 const projects = [
  {
    title: "Voice SMS Voice To Text",
    description: "Android app that captures your voice, converts it to text, and sends it as SMS.",
    technologies: ["React Native", "Voice Recognition", "SMS API"],
    category: "Mobile App",
    links: {
      live: "https://play.google.com/store/apps/details?id=com.createmessagebyvoice.voicenotes.aivoice"
    }
  },
  {
    title: "Restaurant Menu",
    description: "Web app showcasing a dynamic restaurant menu with item filtering and responsive design.",
    technologies: ["React.js", "HTML", "CSS", "JavaScript"],
    category: "Web Application",
    links: {
      live: "https://restaurant-menu-navy-six.vercel.app/"
    }
  },
  {
    title: "Product Pedia",
    description: "Online encyclopedia of products with search and categorization features.",
    technologies: ["React Native", "Node js", "Express", "Mongo", "QrCode"],
    category: "Mobile App",
    links: {
      live: "https://github.com/Talha5t5/ProductPedia"
    }
  },
  {
    title: "Campus Community",
    description: "Community platform for students to post, share, and collaborate on campus events.",
    technologies: ["React Native", "Node js", "Express", "Mongo",],
    category: "Mobile App",
    links: {
      live: "https://github.com/Talha5t5/Campus-Community"
    }
  },
  {
    title: "Vantage Cad Services",
    description: "Company website for Vantage CAD Services with portfolio and contact forms.",
    technologies: ["Wordpress","HTML", "CSS", "JavaScript"],
    category: "Website",
    links: {
      live: "https://vantagecadservices.com/"
    }
  },
  {
    title: "Headgear Hub",
    description: "E-commerce storefront for custom headgear with product galleries and checkout flow.",
    technologies: ["React.js", "HTML", "CSS", "JavaScript"],
    category: "Web Application",
    links: {
      live: "https://headgear-hub.vercel.app/"
    }
  },
  {
    title: "Qari Sahab",
    description: "Mobile app for Quran recitation and playback, with bookmarking and audio controls.",
    technologies: ["React Native", "Audio APIs"],
    category: "Mobile App",
    links: {
      live: "https://github.com/Talha5t5/QariSahabApp"
    }
  },
  {
    title: "Land Area Calculator by GPS",
    description: "GPS-based land measurement tool that calculates area from mapped coordinates.",
    technologies: ["React Native", "Geolocation API"],
    category: "Mobile App",
    links: {
      live: "https://github.com/Talha5t5/Land-Area-Calculator-by-GPS"
    }
  },
  {
    title: "Vyntril",
    description: "A CMS-powered site/project (details on request).",
    technologies: ["WordPress"],
    category: "Website",
    links: {
      live: "https://vyntril.com/"
    }
  }
];


  const categories = [...new Set(projects.map(project => project.category))];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Here are some of the projects I've worked on, showcasing my skills in full-stack development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden hover:border-blue-500/30 transition-all duration-300 group">
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                      <Code className="text-white" size={20} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </h3>
                      <span className="text-xs text-blue-400 bg-blue-400/10 px-2 py-1 rounded-full">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  {project.links && (
                    <div className="flex space-x-2">
                      {project.links.live && (
                        <a href={project.links.live} target="_blank" rel="noopener noreferrer" 
                           className="text-gray-400 hover:text-white transition-colors">
                          <Github size={20} />
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
                           className="text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium">
                          View Live →
                        </a>
                      )}
                      {project.links.website && (
                        <a href={project.links.website} target="_blank" rel="noopener noreferrer" 
                           className="text-purple-400 hover:text-purple-300 transition-colors text-sm font-medium">
                          Website →
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
