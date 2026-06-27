"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";

export default function AuroraCafePage() {
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <>

      <main className="relative z-10 w-full min-h-[calc(100vh-100px)] flex items-center">
        {/* Right Content (Text) */}
        <div className="w-full lg:w-1/2 px-6 md:px-16 pt-12 lg:pt-0 z-20 flex flex-col justify-center">
          <motion.h1 
            initial="hidden" animate="visible" variants={fadeUp}
            className="text-[50px] md:text-[80px] leading-[1.1] font-bold mb-6 text-white"
          >
            فنٌ في <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#FFF] to-[#C5A059]">
              كل حبة.
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8 }}
            className="text-gray-400 text-[16px] md:text-[20px] max-w-[500px] leading-relaxed mb-10"
          >
            استمتع بأرقى فنون تحضير القهوة والأجواء الراقية في قلب المدينة. كل رشفة تروي قصة من الشغف والإتقان.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.8 }}
            className="flex flex-wrap items-center gap-6"
          >
            <button className="px-8 py-4 rounded-full bg-transparent border border-[#C5A059] text-[#C5A059] hover:bg-[#C5A059] hover:text-black transition-all duration-300 text-[15px] font-bold tracking-wide">
              اكتشف المنيو
            </button>
            <button className="px-8 py-4 rounded-full text-white text-[15px] font-bold tracking-wide hover:text-[#C5A059] transition-colors relative group">
              حرفتنا
              <span className="absolute bottom-2 left-0 w-full h-[1px] bg-[#C5A059] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-right"></span>
            </button>
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
            src="/mockups/coffee_hero.png" 
            alt="Premium Coffee Beans" 
            fill 
            className="object-cover object-left"
            priority
          />
        </motion.div>
      </main>
    </>
  );
}
