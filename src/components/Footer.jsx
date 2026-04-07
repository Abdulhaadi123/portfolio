import React from 'react';
import { Github, Linkedin, Mail, Code } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950/80 py-12 border-t border-white/10 backdrop-blur-xl">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                <Code className="text-white" size={20} />
              </div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-blue-300 to-indigo-300 bg-clip-text text-transparent">
                Talha Jabbar
              </h3>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Mobile App Developer passionate about creating innovative cross-platform applications with modern technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a href="#about" className="block text-gray-400 hover:text-white transition-colors">About</a>
              <a href="#skills" className="block text-gray-400 hover:text-white transition-colors">Skills</a>
              <a href="#experience" className="block text-gray-400 hover:text-white transition-colors">Experience</a>
              <a href="#projects" className="block text-gray-400 hover:text-white transition-colors">Projects</a>
              <a href="#contact" className="block text-gray-400 hover:text-white transition-colors">Contact</a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-2 text-gray-400">
              <p>rana.talha3d@gmail.com</p>
              <p>03229687307</p>
              <p>Islamabad, Pakistan</p>
            </div>
            <div className="flex space-x-4 mt-6">
              <a href="https://github.com/Talha5t5" target="_blank" rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/rana-talha-28275427a/" target="_blank" rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:rana.talha3d@gmail.com"
                  className="text-gray-400 hover:text-white transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Talha Jabbar. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm mt-2 md:mt-0">
              Built with Next.js, JavaScipt,Node Mailer & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;