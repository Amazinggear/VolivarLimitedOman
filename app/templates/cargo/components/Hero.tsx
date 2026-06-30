"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import MagneticButton from "./MagneticButton";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Direct transform without spring smoothing — prevents scroll lag/delay
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const yImage = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section ref={ref} className="relative h-screen w-full overflow-hidden bg-black flex items-center justify-center">
      {/* Parallax Image */}
      <motion.div style={{ y: yImage, opacity }} className="absolute inset-0 w-full h-full">
        <Image 
          src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop"
          alt="صورة معمارية للمشروع"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-60"
        />
      </motion.div>

      {/* Title */}
      <motion.div style={{ y: yText, opacity }} className="relative z-10 text-center px-4">
        <motion.h1 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as const, delay: 0.2 }}
          className="text-6xl md:text-8xl lg:text-[10rem] font-black text-white uppercase tracking-tighter"
        >
          شقة إليبس
        </motion.h1>
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as const, delay: 0.4 }}
          className="text-xl md:text-3xl text-neutral-300 mt-6 font-bold"
        >
          🇨🇦 كندا، مدينة كيبيك
        </motion.p>
      </motion.div>

      {/* Scroll indicator */}
      <MagneticButton className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-white/90 text-sm tracking-widest uppercase text-center w-full block font-bold">استكشف</span>
        <div className="w-[1px] h-12 bg-white/30 relative overflow-hidden">
          <motion.div 
            animate={{ y: ["-100%", "100%"] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            className="w-full h-full bg-white absolute top-0"
          />
          </div>
        </motion.div>
      </MagneticButton>
    </section>
  );
}
