import React from 'react'

const TechnicalSkills = () => {
 const skills = [
    "HTML5",
    "JAVASCRIPT",
    "CSS",
    "REACT",
    "TAILWIND",
    "GIT",
    "FIGMA",
  ];

  return (
    <section className="py-20 px-6 bg-black">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl text-center mb-8">
          Technical <span className="text-cyan-400">skills.</span>
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          With proficiency and dedication, I seamlessly integrate creativity 
          and functionality using cutting-edge technologies to deliver exceptional results.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="px-8 py-4 bg-[#1a1a1a] border border-gray-800 rounded-full hover:border-cyan-400 transition-colors"
            >
              <span className="text-sm tracking-wider">{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechnicalSkills