import React from "react";
import { Github, Instagram, Linkedin } from "lucide-react";
import { Motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="py-12 px-6 bg-black border-t border-gray-800">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="text-2xl mb-4">Malak.Dev</div>
            <p className="text-gray-400 text-sm">
              Creating digital experiences that inspire and engage.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a
                  href="#home"
                  className="hover:text-cyan-400 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="hover:text-cyan-400 transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-cyan-400 transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-cyan-400 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="mb-4">Follow Me</h4>
            <div className="flex gap-3">
              <motion.a
            whileHover={{ scale: 1.05, backgroundColor: "#22d3ee" }} // تكبير وتغيير لون الخلفية للأزرق الفاتح
            whileTap={{ scale: 0.95 }}
            href="https://github.com/malakalmasri76"
            className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center "
          >
            <Github className="w-5 h-5" />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05, backgroundColor: "#22d3ee" }} // تكبير وتغيير لون الخلفية للأزرق الفاتح
            whileTap={{ scale: 0.95 }}
            href="https://www.linkedin.com/in/malak-almasri/"
            className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center "
          >
            <Linkedin className="w-5 h-5" />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05, backgroundColor: "#22d3ee" }} // تكبير وتغيير لون الخلفية للأزرق الفاتح
            whileTap={{ scale: 0.95 }}
            href="https://www.instagram.com/m.l.k_13/"
            className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center "
          >
            <Instagram className="w-5 h-5" />
          </motion.a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>
            Designed & Developed by{" "}
            <span className="text-cyan-400">Malak Almasri</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
