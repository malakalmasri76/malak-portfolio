import React from "react";
import logo from "/public/assets/logo.png";
import { motion } from "motion/react";
const Motion = motion;

const Header = () => {
  return (
    <Motion.header
      initial={{ y: -100, opacity: 0 }} // يبدأ من خارج الشاشة (فوق) ويكون شفافاً
      animate={{ y: 0, opacity: 1 }} // يتحرك لمكانه الطبيعي ويظهر
      transition={{ duration: 0.8, ease: "easeOut" }} // سرعة ونوع الحركة
      className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-sm border-b border-gray-800"
    >
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2 text-xl">
          <img src={logo} alt="Logo" className="w-8 h-8" />
          <Motion.a
            href="#"
            whileHover={{ scale: 1.05, color: "#22d3ee" }} // تكبير بسيط عند المرور
            whileTap={{ scale: 0.95 }} // تأثير ضغطة عند النقر
            className="inline-block" // ضروري لتطبيق الحركة بشكل صحيح
          >
            <h1 className="text-2xl font-bold cursor-pointer">Malak Dev.</h1>
          </Motion.a>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <Motion.a
            whileHover={{ scale: 1.1, color: "#22d3ee" }} // تكبير وتغيير اللون للأزرق
            whileTap={{ scale: 0.9 }}
            href="#home"
          >
            Home
          </Motion.a>
          <Motion.a
            whileHover={{ scale: 1.1, color: "#22d3ee" }} // تكبير وتغيير اللون للأزرق
            whileTap={{ scale: 0.9 }}
            href="#projects"
          >
            Related projects
          </Motion.a>
          <Motion.a
            whileHover={{ scale: 1.1, color: "#22d3ee" }} // تكبير وتغيير اللون للأزرق
            whileTap={{ scale: 0.9 }}
            href="#about"
          >
            About me
          </Motion.a>
          <Motion.a
            whileHover={{ scale: 1.1, color: "#22d3ee" }} // تكبير وتغيير اللون للأزرق
            whileTap={{ scale: 0.9 }}
            href="#contact"
          >
            Contact
          </Motion.a>
        </div>
        <Motion.a
          whileHover={{ scale: 1.05, backgroundColor: "#ffffff" }} // تكبير وتغيير لون الخلفية للأزرق الفاتح
          whileTap={{ scale: 0.95 }}
          href="#contact"
          className="bg-cyan-400 text-black px-6 py-2 rounded"
        >
          Work With Me
        </Motion.a>
      </nav>
    </Motion.header>
  );
};

export default Header;
