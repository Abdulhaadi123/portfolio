"use client";
import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const year = new Date().getFullYear();

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const navLinks = [
    { label: 'About',      id: 'about' },
    { label: 'Skills',     id: 'skills' },
    { label: 'Experience', id: 'experience' },
    { label: 'Projects',   id: 'projects' },
    { label: 'Contact',    id: 'contact' },
  ];

  const socials = [
    { icon: Github,   href: 'https://github.com/Abdulhaadi123',                      label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/abdul-hadi-6b2162247/',      label: 'LinkedIn' },
    { icon: Mail,     href: 'mailto:abdulhadi86411@gmail.com',                        label: 'Email' },
  ];

  return (
    <footer className="relative border-t border-white/[0.06] bg-[#050811]/80 backdrop-blur-2xl">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-10 mb-10">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center shadow-lg shadow-violet-500/20"
                style={{ background: 'linear-gradient(135deg,#7c3aed,#06b6d4)' }}>
                <span className="text-white font-black text-sm">AH</span>
              </div>
              <span className="text-white font-bold text-lg">Abdul Hadi</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
              MERN Stack Developer &amp; AI Engineer building scalable web apps and production-level Generative AI systems.
            </p>
            <div className="flex items-center gap-3 mt-5">
              {socials.map(({ icon: Icon, href, label }) => (
                <a key={label} href={href}
                   target={href.startsWith('mailto') ? undefined : '_blank'}
                   rel="noopener noreferrer"
                   aria-label={label}
                   className="w-9 h-9 rounded-lg border border-white/[0.08] bg-white/[0.03] flex items-center justify-center text-slate-500 hover:text-white hover:border-violet-500/30 hover:bg-violet-500/10 transition-all duration-200">
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5">Navigation</h4>
            <ul className="space-y-2.5">
              {navLinks.map(({ label, id }) => (
                <li key={id}>
                  <button
                    onClick={() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-slate-500 hover:text-violet-400 text-sm transition-colors duration-200 font-medium"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5">Contact</h4>
            <ul className="space-y-2.5">
              <li>
                <a href="mailto:abdulhadi86411@gmail.com" className="text-slate-500 hover:text-violet-400 text-sm transition-colors duration-200">
                  abdulhadi86411@gmail.com
                </a>
              </li>
              <li><p className="text-slate-500 text-sm">+92 312 652 6771</p></li>
              <li><p className="text-slate-500 text-sm">DHA Multan, Pakistan</p></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-white/[0.05]">
          <p className="text-slate-600 text-xs">
            © {year} Abdul Hadi. All rights reserved.
          </p>
          <p className="text-slate-600 text-xs">
            Built with Next.js · Node Mailer · Tailwind CSS
          </p>
          <button
            onClick={scrollTop}
            className="w-9 h-9 rounded-lg border border-white/[0.08] bg-white/[0.03] flex items-center justify-center text-slate-500 hover:text-white hover:border-violet-500/30 hover:bg-violet-500/10 transition-all duration-200"
            aria-label="Back to top"
          >
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;