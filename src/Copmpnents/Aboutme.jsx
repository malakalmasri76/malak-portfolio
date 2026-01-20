import React from "react";
import { Download } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import aboutme from "../assets/aboutme.webp";
import { motion } from "framer-motion";

const Aboutme = () => {
  return (
    <motion.section
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      id="about"
      className="py-20 px-6"
    >
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl text-center mb-16">
          About <span className="text-cyan-400">me.</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="w-80 h-80 mx-auto rounded-full overflow-hidden border-4 border-cyan-400">
              <ImageWithFallback
                src={aboutme}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute top-0 left-0 bg-orange-500 w-12 h-12 rounded-full flex items-center justify-center">
              <span className="text-2xl">🎨</span>
            </div>
            <div className="absolute top-20 right-8 bg-yellow-400 w-12 h-12 rounded-full flex items-center justify-center">
              <span className="text-2xl">✨</span>
            </div>
            <div className="absolute bottom-20 left-4 bg-blue-500 w-12 h-12 rounded-full flex items-center justify-center">
              <span className="text-2xl">💻</span>
            </div>
            <div className="absolute bottom-4 right-12 bg-green-500 w-12 h-12 rounded-full flex items-center justify-center">
              <span className="text-2xl">🎯</span>
            </div>
          </div>

          <div>
            <p className="text-gray-400 mb-4 leading-relaxed">
              I am a passionate{" "}
              <span className="text-cyan-400">Frontend Developer</span> and
              Computer Engineering student with a strong focus on building
              responsive, user-friendly web interfaces using modern JavaScript
              technologies and React.
            </p>

            <p className="text-gray-400 mb-4 leading-relaxed">
              I specialize in transforming designs into clean, accessible, and
              interactive user interfaces through component-based architecture,
              React Hooks, and modern CSS techniques such as Flexbox and CSS
              Grid.
            </p>

            <p className="text-gray-400 mb-6 leading-relaxed">
              I am passionate about performance, accessibility, and continuous
              learning, and I enjoy working on real-world projects that enhance
              user experience and bring ideas to life through code.
            </p>

            <motion.a
              whileHover={{ scale: 1.05, backgroundColor: "#ffffff" }} // تكبير وتغيير لون الخلفية للأزرق الفاتح
              whileTap={{ scale: 0.95 }}
              href="/Malak_Almasri_CV.pdf"
              download
              className="bg-cyan-400 text-black px-6 py-3 rounded  flex items-center gap-2 w-fit"
            >
              <Download className="w-5 h-5" />
              Download CV
            </motion.a>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Aboutme;
