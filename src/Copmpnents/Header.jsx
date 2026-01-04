import React from "react";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-sm border-b border-gray-800">
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2 text-xl">
          <img src={logo} alt="Logo" className="w-8 h-8" />
          Malak.Dev
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a href="#home" className="hover:text-cyan-400 transition-colors">
            Home
          </a>
          <a href="#projects" className="hover:text-cyan-400 transition-colors">
            Related projects
          </a>
          <a href="#about" className="hover:text-cyan-400 transition-colors">
            About me
          </a>
          <a href="#contact" className="hover:text-cyan-400 transition-colors">
            Contact
          </a>
        </div>
        <a
          href="#contact"
          className="bg-cyan-400 text-black px-6 py-2 rounded hover:bg-cyan-300 transition-colors"
        >
          Work With Me
        </a>
      </nav>
    </header>
  );
};

export default Header;
