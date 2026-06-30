"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const yImage1 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const yImage2 = useTransform(scrollYProgress, [0, 1], [0, -300]);

  return (
    <section ref={containerRef} className="relative min-h-[120vh] bg-[#ede4dd] pt-32 pb-20 overflow-hidden">
      {/* Background large typography */}
      <motion.div 
        style={{ y: yText, willChange: "transform" }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-10"
      >
        <h1 className="text-[25vw] font-black tracking-tighter text-black/20 leading-none whitespace-nowrap">
          إبداع
        </h1>
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between h-full gap-12 pt-20">
        
        {/* Main Text Content */}
        <div className="flex-1 max-w-2xl text-right">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="will-change-transform"
          >
            <h1 className="text-6xl md:text-8xl font-black text-black leading-[1.1] mb-6">
              نصنع <br />
              <span className="text-[#FF0001]">المستحيل</span> <br />
              بلمسة فنية
            </h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="will-change-transform"
          >
            <p className="text-xl md:text-2xl text-neutral-700 font-medium max-w-lg mb-10 leading-relaxed">
              استوديو تصميم وحركة يدمج بين الفن والتكنولوجيا لإنشاء تجارب بصرية استثنائية لا تُنسى.
            </p>
            <button
              onClick={() => document.getElementById('showcase')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-block bg-black text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-[#FF0001] transition-colors duration-300 will-change-transform"
            >
              اكتشف أعمالنا
            </button>
          </motion.div>
        </div>

        {/* Parallax Images */}
        <div className="flex-1 relative w-full h-[600px] hidden md:flex justify-end gap-6">
          <motion.div style={{ y: yImage1, willChange: "transform" }} className="w-1/2 h-[80%] rounded-2xl overflow-hidden mt-20 shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop"
              alt="Creative Studio"
              fetchPriority="high"
              decoding="async"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <motion.div style={{ y: yImage2, willChange: "transform" }} className="w-1/2 h-full rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1200&auto=format&fit=crop"
              alt="Design Work"
              fetchPriority="high"
              decoding="async"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

