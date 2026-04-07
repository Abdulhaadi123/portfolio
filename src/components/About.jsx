
import React from 'react';
import { User, Code, Github } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <User className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-semibold text-white">Professional Summary</h3>
            </div>

            <p className="text-gray-300 leading-relaxed">
              Mobile App Developer with 3+ years of experience building scalable cross-platform applications using React
              Native and full-stack technologies including Node.js, Express.js, and MongoDB. Skilled in developing high-performance
              mobile apps, RESTful API integration, and responsive UI development.
            </p>

            <p className="text-gray-300 leading-relaxed">
              Experienced in deploying applications to Google Play Store, integrating Firebase services, and implementing
              mobile monetization using Google AdMob. Passionate about building user-focused applications with clean,
              maintainable code.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="pro-card p-4">
                <h4 className="text-blue-300 font-semibold mb-2">Location</h4>
                <p className="text-gray-300">Islamabad, Pakistan</p>
              </div>
              <div className="pro-card p-4">
                <h4 className="text-blue-300 font-semibold mb-2">Experience</h4>
                <p className="text-gray-300">3+ Years</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="pro-card p-6">
              <div className="flex items-center space-x-4 mb-4">
                <Code className="text-blue-400" size={24} />
                <h4 className="text-xl font-semibold text-white">Education</h4>
              </div>
              <div className="space-y-4">
                <div>
                  <h5 className="text-blue-300 font-medium">Bachelor of Science in Computer Science</h5>
                  <p className="text-gray-300">PMAS Arid Agriculture University, Rawalpindi</p>
                </div>
                <div>
                  <h5 className="text-blue-300 font-medium">F.Sc (Pre-Medical)</h5>
                  <p className="text-gray-300">Rangers College</p>
                </div>
              </div>
            </div>

            <div className="pro-card p-6">
              <div className="flex items-center space-x-4 mb-4">
                <Github className="text-indigo-300" size={24} />
                <h4 className="text-xl font-semibold text-white">Portfolio Links</h4>
              </div>
              <div className="space-y-2">
                <a href="https://github.com/Talha5t5" target="_blank" rel="noopener noreferrer"
                  className="block text-indigo-300 hover:text-indigo-200 transition-colors">
                  GitHub Profile
                </a>
                <a href="https://www.linkedin.com/in/rana-talha-28275427a/" target="_blank" rel="noopener noreferrer"
                  className="block text-blue-300 hover:text-blue-200 transition-colors">
                  LinkedIn Profile
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
