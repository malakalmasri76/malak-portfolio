import React from "react";
import { motion } from "motion/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules"; // أضفنا Navigation هنا
import { client, urlFor } from "../sanityClient";
import { useEffect, useState } from "react";

// استيراد ستايلات Swiper
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation"; // أضفنا ستايل التنقل
const Motion = motion;

const FeaturedProjects = () => {
  const [projects, setProjects] = useState([]);

useEffect(() => {
  client.fetch(`*[_type == "project"]`)
    .then((data) => setProjects(data))
    .catch(console.error);
}, []);

  return (
    <Motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      id="projects"
      className="py-20 bg-black text-white relative overflow-hidden"
    >
      <div className="container mx-auto px-12 relative">
        {" "}
        {/* px-12 لترك مساحة للأسهم */}
        <h2 className="text-4xl text-center mb-16 font-bold">
          Featured <span className="text-cyan-400">projects.</span>
        </h2>
        <div className="relative group">
          <Swiper
            modules={[Pagination, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={true}
            pagination={{
              clickable: true,
              el: ".custom-pagination", // ربط النقاط بالعنصر بالأسفل
            }}
            
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            watchSlidesProgress={true}
            className="pb-10"
          >
            {projects.map((project, index) => (
              <SwiperSlide key={index}>
                <Motion.div
                  whileHover={{
                    y: -15, // يتحرك للأعلى قليلاً
                    scale: 1.03, // يكبر حجمه بنسبة بسيطة
                    rotateX: 5, // ميلان خفيف يعطي إحساس 3D
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="bg-[#1a1a1a] h-112.5 rounded-xl overflow-hidden border border-gray-800 hover:border-cyan-400 hover:shadow-[0_20px_50px_rgba(34,211,238,0.2)] transition-all duration-100 group/card flex flex-col cursor-pointer"
                >
                  <div className="aspect-video bg-gray-800 overflow-hidden relative">
                    <img
                      src={urlFor(project.image).url()}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover/card:scale-110 transition-transform duration-500"
                    />
                  </div>

                  <div className="p-6 flex flex-col grow">
                    <h3 className="text-xl font-semibold mb-2 group-hover/card:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-cyan-500/80 text-xs font-medium mb-3 uppercase tracking-wider">
                      {project.category}
                    </p>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">
                      {project.description}
                    </p>

                    <div className="flex gap-4 mt-auto">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium hover:text-cyan-400 transition-colors border-b border-transparent hover:border-cyan-400"
                      >
                        GitHub →
                      </a>
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-medium hover:text-cyan-400 transition-colors border-b border-transparent hover:border-cyan-400"
                        >
                          Live Demo →
                        </a>
                      )}
                    </div>
                  </div>
                </Motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* هـذا العنصر هو الذي كان مفقوداً (النقاط) */}
          <div className="custom-pagination flex justify-center gap-2 mt-8"></div>
        </div>
      </div>

      <style>{`
      
        /* جعل الحاوية تسمح برؤية الأسهم خارجها */
        .swiper {
          overflow: visible !important;
           padding-top: 20px !important; /* مساحة علوية ليتحرك الكارد فيها */
          padding-bottom: 50px !important;
        }
        .swiper-slide {
          overflow: visible !important;
        }

        /* تحريك الأسهم للجوانب */
        .swiper-button-next {
          right: -50px !important;
          color: #22d3ee !important;
        }
        .swiper-button-prev {
          left: -50px !important;
          color: #22d3ee !important;
        }

        .swiper-button-next:after,
        .swiper-button-prev:after {
          font-size: 24px !important;
        }

        /* تنسيق النقاط المخصص */
        .custom-pagination .swiper-pagination-bullet {
          background: #444 !important;
          width: 12px;
          height: 6px;
          border-radius: 3px;
          opacity: 1;
          cursor: pointer;
        }
        .custom-pagination .swiper-pagination-bullet-active {
          background: #22d3ee !important;
          width: 30px;
          box-shadow: 0 0 10px rgba(34, 211, 238, 0.5);
        }

        /* إخفاء الأسهم على الموبايل لتجنب خروجها من الشاشة */
        @media (max-width: 1100px) {
          .swiper-button-next,
          .swiper-button-prev {
            display: none !important;
          }
        }
      `}</style>
    </Motion.section>
  );
};

export default FeaturedProjects;
