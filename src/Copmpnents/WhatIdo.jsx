import React from 'react'
import { Code, Layout, Zap} from 'lucide-react';

const WhatIdo = () => {
  const services = [
  {
    icon: Code,
    title: "Frontend Development",
    description:
      "Building responsive, high-performance web interfaces using React, modern JavaScript (ES6+), and component-based architecture."
  },
  {
    icon: Layout,
    title: "UI Implementation",
    description:
      "Transforming UI/UX designs into clean, accessible, and pixel-perfect user interfaces with HTML, CSS, Flexbox, and CSS Grid."
  },
  {
    icon: Zap,
    title: "Interactive Experiences",
    description:
      "Creating smooth, interactive user experiences with React Hooks, reusable components, and optimized performance."
  }
];


  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <h2 className="text-4xl text-center mb-16">
          What I <span className="text-cyan-400">do.</span>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index}
                className={`p-8 rounded-lg border ${
                  index === 0 
                    ? 'bg-cyan-400 border-cyan-400 text-black' 
                    : 'bg-[#1a1a1a] border-gray-800'
                }`}
              >
                <Icon className={`w-8 h-8 mb-4 ${index === 0 ? 'text-black' : 'text-cyan-400'}`} />
                <h3 className="text-xl mb-3">{service.title}</h3>
                <p className={index === 0 ? 'text-black/80' : 'text-gray-400'}>
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default WhatIdo