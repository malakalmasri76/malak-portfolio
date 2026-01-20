import React from 'react';
import { Code, Layout, Zap } from 'lucide-react';
import { motion } from 'framer-motion'; // 1. استيراد motion

const WhatIdo = () => {
  const services = [
    {
      icon: Code,
      title: "Frontend Development",
      description: "Building responsive, high-performance web interfaces using React, modern JavaScript (ES6+), and component-based architecture."
    },
    {
      icon: Layout,
      title: "UI Implementation",
      description: "Transforming UI/UX designs into clean, accessible, and pixel-perfect user interfaces with HTML, CSS, Flexbox, and CSS Grid."
    },
    {
      icon: Zap,
      title: "Interactive Experiences",
      description: "Creating smooth, interactive user experiences with React Hooks, reusable components, and optimized performance."
    }
  ];

  // إعدادات حركة الظهور
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // الفرق الزمني بين ظهور كل بطاقة
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="py-20 px-6 overflow-hidden">
      <div className="container mx-auto">
        {/* تحريك العنوان */}
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl text-center mb-16"
        >
          What I <span className="text-cyan-400">do.</span>
        </motion.h2>
        
        {/* تحريك الحاوية (Grid) */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div 
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, transition: { duration: 0.2 } }} // حركة عند تمرير الماوس
                className={`p-8 rounded-lg border cursor-default transition-colors duration-300 ${
                  index === 0 
                    ? 'bg-cyan-400 border-cyan-400 text-black shadow-lg shadow-cyan-400/20' 
                    : 'bg-[#1a1a1a] border-gray-800 hover:border-cyan-400/50'
                }`}
              >
                <Icon className={`w-8 h-8 mb-4 ${index === 0 ? 'text-black' : 'text-cyan-400'}`} />
                <h3 className="text-xl mb-3 font-semibold">{service.title}</h3>
                <p className={index === 0 ? 'text-black/80' : 'text-gray-400'}>
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default WhatIdo;