"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-[100vh] flex items-center justify-center pt-24 pb-20 px-5 md:px-20 overflow-hidden bg-background">
      {/* Aggressive glowing background */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/20 blur-[150px] rounded-full pointer-events-none mix-blend-screen z-0" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#004ee7]/20 blur-[120px] rounded-full pointer-events-none mix-blend-screen z-0" />
      
      {/* Grid overlay */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-[1280px] mx-auto w-full flex flex-col lg:flex-row-reverse items-center justify-between gap-12 z-10 relative mt-10">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-6 lg:w-1/2 text-right items-end"
        >
          <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-5 py-2 w-fit backdrop-blur-md">
            <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse shadow-[0_0_10px_#0057ff]"></span>
            <span className="text-[12px] md:text-[14px] text-white font-bold tracking-wide">
              متاحون الآن لاستقبال مشاريع جديدة 🚀
            </span>
          </div>

          <h1 className="text-[50px] md:text-[70px] lg:text-[85px] leading-[1.1] font-black tracking-tight text-white drop-shadow-2xl">
            موقعك جاهز <br />
            خلال <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-[#8bafff] to-white">72 ساعة</span>
          </h1>

          <p className="text-[18px] md:text-[22px] text-on-surface-variant max-w-xl font-medium leading-relaxed">
            مواقع احترافية مجهزة ومستضافة بالكامل لشركتك أو عيادتك أو متجرك خلال 72 ساعة فقط.
          </p>

          <div className="flex flex-col sm:flex-row-reverse gap-5 mt-6 w-full sm:w-auto">
            <a href="#pricing" className="btn-primary px-10 py-5 rounded-full text-[20px] font-bold flex items-center justify-center gap-3 group relative overflow-hidden">
              <span className="relative z-10">ابدأ الآن</span>
              <ArrowLeft className="w-6 h-6 relative z-10 group-hover:-translate-x-2 transition-transform" />
              <div className="absolute inset-0 bg-white/20 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-out z-0" />
            </a>
            <a href="#templates" className="bg-white/5 hover:bg-white/10 border border-white/10 px-10 py-5 rounded-full text-[20px] font-bold flex items-center justify-center transition-all duration-300 text-white backdrop-blur-md">
              شاهد النماذج
            </a>
          </div>
        </motion.div>

        {/* Visual / 3D Element Mockup */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="lg:w-1/2 relative w-full aspect-square md:aspect-video lg:aspect-square flex justify-center items-center"
        >
          <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full z-0 pointer-events-none" />
          <motion.img 
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            src="/hero-abstract.png" 
            alt="Volivar Premium Web Design Mockup" 
            className="w-[90%] h-[90%] object-cover rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-10 border border-white/10"
          />
          {/* Floating glass elements to add depth */}
          <motion.div 
            animate={{ y: [0, -20, 0] }} 
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-10 -right-5 md:-right-10 w-40 h-32 bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl z-20 flex flex-col items-center justify-center shadow-2xl"
          >
            <span className="text-primary text-4xl font-black en-text">+300%</span>
            <span className="text-white text-xs font-bold text-center mt-2 px-2">معدل تحويل أعلى</span>
          </motion.div>
          <motion.div 
            animate={{ y: [0, 20, 0] }} 
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-10 -left-5 md:-left-10 bg-white/5 border border-white/10 backdrop-blur-xl rounded-xl z-20 flex items-center justify-center shadow-2xl gap-3 px-6 py-4"
          >
            <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
               <span className="text-blue-500 text-lg">🚀</span>
            </div>
            <div className="flex flex-col">
              <span className="text-white text-sm font-bold en-text">SEO Optimized</span>
              <span className="text-gray-400 text-xs font-medium">تصدر نتائج البحث</span>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
