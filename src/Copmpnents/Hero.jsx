import React from "react";
import { Github, Mail, Linkedin, Instagram } from "lucide-react";
import background from "../assets/background.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
    <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90 backdrop-blur-sm" />

      <div className="relative z-10 container mx-auto text-center max-w-3xl">
        <h1 className="text-5xl md:text-6xl mb-6">
          Hi, I am <span className="text-cyan-400">Malak Almasri</span>
        </h1>
        <p className="text-gray-400 text-lg mb-8 leading-relaxed">
          A seasoned <span className="text-cyan-400">Frontend Developer</span>{" "}
          transforming ideas into stunning
          <br />
          digital experiences. Let's create something amazing!
        </p>

        <div className="flex items-center justify-center gap-4">
          <a
            href="https://github.com/malakalmasri76"
            className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:bg-cyan-400 transition-colors"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://mail.google.com/mail/u/1/#inbox?compose=new"
            className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:bg-cyan-400 transition-colors"
          >
            <Mail className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/malak-almasri/"
            className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:bg-cyan-400 transition-colors"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="https://www.instagram.com/m.l.k_13/"
            className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:bg-cyan-400 transition-colors"
          >
            <Instagram className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
