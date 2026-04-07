
import React from 'react';
import { Code2, Zap, Star, Sparkles, Cpu, Globe } from 'lucide-react';

const FloatingElements = () => {
  const elements = [
    { Icon: Code2, delay: '3s', position: 'top-20 left-10' },
    { Icon: Zap, delay: '2s', position: 'top-40 right-20' },
    { Icon: Star, delay: '4s', position: 'bottom-40 left-20' },
    { Icon: Sparkles, delay: '1s', position: 'top-60 left-1/3' },
    { Icon: Cpu, delay: '3s', position: 'bottom-20 right-10' },
    { Icon: Globe, delay: '5s', position: 'top-1/3 right-1/4' },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {elements.map(({ Icon, delay, position }, index) => (
        <div
          key={index}
          className={`absolute ${position} hero-orb opacity-10`}
          style={{
            animationDelay: delay,
            animationDuration: '10s',
          }}
        >
          <Icon 
            size={22}
            className="text-blue-200"
            style={{
              animationDelay: delay,
              animationDuration: '10s',
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default FloatingElements;
