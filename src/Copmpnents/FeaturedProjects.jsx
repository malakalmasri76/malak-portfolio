import React from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const FeaturedProjects = () => {
  const projects = [
    {
      title: "Trippy App",
      category: "React.js Web Application",
      description:
        "A responsive travel planning web application built with React. Features interactive UI components and dynamic data rendering.",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800",
      github: "https://github.com/malakalmasri76/Trippy-App",
    },
    {
      title: "Melody Shop",
      category: "React.js E-commerce UI",
      description:
        "A modern e-commerce shop interface developed using React. Showcases component-based architecture and interactive UI design.",
      image:
        "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=800",
      github: "https://github.com/malakalmasri76/Melody-shop",
    },
    {
      title: "Weather App",
    category: "React.js Weather Application",
    description:
      "A weather forecast application built with React that fetches real-time weather data and displays current conditions in a clean, user-friendly interface.",
    image: "https://images.unsplash.com/photo-1501630834273-4b5604d2ee31?w=800",
    github: "https://github.com/malakalmasri76/Weather-App"
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-black">
      <div className="container mx-auto">
        <h2 className="text-4xl text-center mb-16">
          Featured <span className="text-cyan-400">projects.</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#1a1a1a] rounded-lg overflow-hidden border border-gray-800 hover:border-cyan-400 transition-colors group"
            >
              <div className="aspect-video bg-gray-800 overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl mb-2">{project.title}</h3>
                <p className="text-cyan-400 text-sm mb-3">{project.category}</p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {project.description}
                </p>
                <a
                  href={project.github}
                  target="_blank"
                  className="text-cyan-400"
                >
                  View on GitHub →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
