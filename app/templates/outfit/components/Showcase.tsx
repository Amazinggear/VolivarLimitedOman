"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const projects = [
  { id: 1, title: "مشروع ألفا", category: "تصميم الهوية", img: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=1200&auto=format&fit=crop" },
  { id: 2, title: "حملة الألوان", category: "إخراج فني", img: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=1200&auto=format&fit=crop" },
  { id: 3, title: "المستقبل الرقمي", category: "تصميم واجهات", img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop" },
  { id: 4, title: "الضوء والظل", category: "تصوير احترافي", img: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?q=80&w=1200&auto=format&fit=crop" },
];

export default function Showcase() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  // 4 panels × 50vw + 3 gaps × 3rem ≈ 200vw + ~9rem.
  // Move track left by (totalWidth - 100vw) so the last panel fully reveals.
  // Using vw units keeps it responsive. ~-150% covers 200vw track minus viewport.
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "150%"]);

  return (
    <section id="showcase" ref={targetRef} className="relative h-[300vh] bg-black text-white">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        
        {/* Intro text for showcase */}
        <div className="absolute top-20 right-12 md:right-24 z-10 pointer-events-none">
          <h2 className="text-4xl md:text-6xl font-black mb-4">أعمالنا <span className="text-[#FF0001]">المميزة</span></h2>
          <p className="text-gray-400 max-w-sm text-lg">
            قم بالتمرير للأسفل لاستكشاف مجموعة مختارة من أفضل مشاريعنا التي قمنا بتنفيذها بحب وشغف.
          </p>
        </div>

        <motion.div style={{ x, willChange: "transform" }} className="flex gap-12 px-12 md:px-24">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="group relative h-[60vh] w-[80vw] md:w-[50vw] flex-shrink-0 rounded-3xl overflow-hidden bg-neutral-900 mt-20"
            >
              <img 
                src={project.img} 
                alt={project.title}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100 will-change-transform"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
              
              <div className="absolute bottom-8 right-8 left-8 flex justify-between items-end">
                <div>
                  <h3 className="text-3xl md:text-5xl font-bold mb-2 text-white translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100 will-change-transform">{project.title}</h3>
                  <p className="text-xl text-gray-300 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-200 will-change-transform">{project.category}</p>
                </div>
                <div className="w-16 h-16 rounded-full bg-[#FF0001] flex items-center justify-center translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-300 will-change-transform">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
