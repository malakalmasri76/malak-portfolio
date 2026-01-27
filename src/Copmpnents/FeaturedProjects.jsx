import React from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Motion } from "framer-motion";

const FeaturedProjects = () => {
  const projects = [
    {
      title: "Product Page",
      category: "HTML5 • CSS3 • JavaScript (Vanilla)",
      description:
        "A simple and responsive product page built with React. Displays product details with a clean UI and reusable components.",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800",
      github: "https://github.com/malakalmasri76/Product-page",
      demo: "https://product-page-rouge.vercel.app/",
    },

    {
      title: "Trippy App",
      category: "React.js • Grid • Responsive Design",
      description:
        "A responsive travel planning web application built with React. Features interactive UI components and dynamic data rendering.",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800",
      github: "https://github.com/malakalmasri76/Trippy-App",
      demo: "https://trippy-website-ten.vercel.app/",
    },
    {
      title: "Personal Portfolio",
      category: "React • HTML • Tailwind CSS • TypeScript",
      description:
        "A personal portfolio website built with React to showcase projects, skills, and contact information with a clean and modern design.",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800",
      github: "https://github.com/malakalmasri76/portfolio",
      demo: "https://portfolio-tau-eight-34.vercel.app/",
    },

    {
      title: "Weather App",
      category: "React.js • Axios • Flexbox",
      description:
        "A weather forecast application built with React that fetches real-time weather data and displays current conditions in a clean, user-friendly interface.",
      image:
        "https://images.unsplash.com/photo-1501630834273-4b5604d2ee31?w=800",
      github: "https://github.com/malakalmasri76/Weather-App",
      demo: "https://weather-app-kappa-five-46.vercel.app/",
    },
    {
      title: "Portfolio Website",
      category: "React • HTML • Tailwind CSS • JavaScript",
      description:
        "Personal portfolio website showcasing my front-end projects and skills.Built with a clean layout and responsive design.",
      image:
        "https://images.unsplash.com/photo-1501630834273-4b5604d2ee31?w=800",
      github: "https://github.com/malakalmasri76/Weather-App",
      demo: "https://weather-app-kappa-five-46.vercel.app/",
    },
  ];
  return (
    <motion.section
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      id="projects"
      className="py-20 px-6 bg-black"
    >
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
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="cursor-pointer"
                >
                  <h3 className="text-xl mb-2">{project.title}</h3>
                </motion.div>
                <p className="text-cyan-400 text-sm mb-3">{project.category}</p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex gap-4 mt-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:underline"
                  >
                    GitHub →
                  </a>

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-400 hover:underline"
                    >
                      Live Demo →
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default FeaturedProjects;
