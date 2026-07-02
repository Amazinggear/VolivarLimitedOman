"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function HeroSection() {
  const [isDesktop, setIsDesktop] = useState<boolean | null>(null);
  const [autoplayFailed, setAutoplayFailed] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isDesktop !== null && videoRef.current) {
      videoRef.current.play().catch((err) => {
        console.warn("Hero background video autoplay blocked or failed:", err);
        setAutoplayFailed(true);
      });
    }
  }, [isDesktop]);
  return (
    <section id="home" className="relative min-h-[100svh] flex items-center justify-center pt-20 pb-16 px-4 sm:px-5 md:px-20 overflow-hidden bg-background">
      {/* Background Video — dynamically served for desktop vs mobile to save bandwidth & performance */}
      {isDesktop !== null && !autoplayFailed ? (
        <video
          ref={videoRef}
          key={isDesktop ? "desktop" : "mobile"}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="/hero-bg-poster.webp"
          className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
          src={isDesktop ? "/hero-bg-desktop.mp4" : "/hero-bg-mobile.mp4"}
        />
      ) : (
        /* Render static poster image as fallback when server-rendering, on initial client load, or if autoplay fails */
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center z-0 opacity-40 pointer-events-none"
          style={{ backgroundImage: "url('/hero-bg-poster.webp')" }}
        />
      )}
      {/* Radial vignette dark overlay for contrast and blending edges */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(19,19,19,0.3)_0%,rgba(19,19,19,0.85)_100%)] z-0 pointer-events-none" />

      {/* Aggressive glowing background — positioned left behind text on desktop */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 w-[200px] h-[200px] sm:w-[500px] sm:h-[500px] md:w-[800px] md:h-[800px] bg-primary/20 blur-[60px] sm:blur-[120px] md:blur-[150px] rounded-full pointer-events-none mix-blend-screen z-0" />
      <div className="hidden sm:block absolute bottom-0 right-0 w-[350px] h-[350px] md:w-[500px] md:h-[500px] bg-[#004ee7]/20 blur-[100px] md:blur-[120px] rounded-full pointer-events-none mix-blend-screen z-0" />
      
      {/* Grid overlay */}
      <div className="hidden sm:block absolute inset-0 z-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-[1280px] mx-auto w-full flex flex-col justify-center lg:justify-end items-center lg:items-start text-center lg:text-left z-10 relative min-h-[85svh] pt-24 pb-16 lg:pb-28 px-4 sm:px-6 md:px-20">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-6 sm:gap-8 w-full lg:max-w-2xl text-center lg:text-left items-center lg:items-start"
        >
          <h1 className="text-[36px] sm:text-[50px] md:text-[72px] lg:text-[80px] leading-[1.1] font-black tracking-tight text-white drop-shadow-2xl">
            موقعك جاهز <br className="sm:hidden lg:inline" />
            خلال <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-[#8bafff] to-white">72 ساعة</span>
          </h1>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 mt-6 w-full sm:w-auto justify-center lg:justify-start items-center">
            <a href="#pricing" className="btn-primary px-8 sm:px-10 py-4 sm:py-5 rounded-full text-[16px] sm:text-[20px] font-bold flex items-center justify-center gap-3 group relative overflow-hidden min-h-[48px] w-full sm:w-auto">
              <span className="relative z-10">ابدأ الآن</span>
              <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6 relative z-10 group-hover:-translate-x-2 transition-transform" />
              <div className="absolute inset-0 bg-white/20 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-out z-0" />
            </a>
            <a href="#templates" className="bg-white/5 hover:bg-white/10 border border-white/10 px-8 sm:px-10 py-4 sm:py-5 rounded-full text-[16px] sm:text-[20px] font-bold flex items-center justify-center transition-all duration-300 text-white backdrop-blur-md min-h-[48px] w-full sm:w-auto">
              شاهد النماذج
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
