"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function AuroraCafePage() {
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <>
      <main className="relative z-10 w-full min-h-[calc(100vh-100px)] flex items-center">
        {/* Right Content (Text) */}
        <div className="w-full lg:w-1/2 px-6 md:px-16 pt-12 lg:pt-0 z-20 flex flex-col justify-center text-right">
          <motion.h1 
            initial="hidden" animate="visible" variants={fadeUp}
            className="text-[50px] md:text-[80px] leading-[1.1] font-bold mb-6 text-white text-right"
          >
            فنٌ في <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#FFF] to-[#C5A059]">
              كل حبة.
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8 }}
            className="text-gray-400 text-[16px] md:text-[20px] max-w-[500px] leading-relaxed mb-10 ml-auto text-right"
          >
            استمتع بأرقى فنون تحضير القهوة والأجواء الراقية في قلب المدينة. كل رشفة تروي قصة من الشغف والإتقان.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.8 }}
            className="flex flex-wrap items-center gap-6 justify-end w-full"
          >
            <Link href="/templates/aurora/menu" className="px-8 py-4 rounded-full bg-[#C5A059] text-black hover:bg-[#b08b47] hover:shadow-[0_0_20px_rgba(197,160,89,0.4)] transition-all duration-300 text-[15px] font-bold tracking-wide text-center">
              اكتشف المنيو
            </Link>
            <Link href="/templates/aurora/reserve" className="px-8 py-4 rounded-full bg-transparent border border-[#C5A059] text-[#C5A059] hover:bg-[#C5A059] hover:text-black transition-all duration-300 text-[15px] font-bold tracking-wide text-center">
              احجز طاولتك
            </Link>
          </motion.div>
        </div>

        {/* Left Content (Image) */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2, duration: 1.2, ease: "easeOut" }}
          className="absolute left-0 top-0 w-full lg:w-3/5 h-full z-0 opacity-30 lg:opacity-100 pointer-events-none"
        >
          {/* Gradient to blend with background on the right side */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#050505]/20 to-[#050505] z-10 hidden lg:block" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/20 to-transparent z-10" />
          
          <Image 
            src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2000&auto=format&fit=crop" 
            alt="حبوب قهوة مميزة" 
            fill 
            className="object-cover object-left opacity-60"
            priority
          />
        </motion.div>
      </main>
    </>
  );
}
