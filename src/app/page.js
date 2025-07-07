
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import ParticleBackground from '../components/ParticleBackground';
import FloatingElements from '../components/FloatingElements';

const Index = () => {
  return (
 <div
  className="
    min-h-screen
    bg-animate-pan
    relative
    overflow-hidden
  "
>
      <ParticleBackground />
      <FloatingElements />
      <div className="relative z-20">
        <Header />
        <Hero  />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
