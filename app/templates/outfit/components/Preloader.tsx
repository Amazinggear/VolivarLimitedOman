"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 500);
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ y: 0, opacity: 1 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center text-white will-change-transform"
        >
          {/* Animated Images behind text simulating outfit.hellohello.is intro */}
          <div className="absolute inset-0 overflow-hidden opacity-30 mix-blend-screen pointer-events-none">
            <motion.img 
              src="https://images.unsplash.com/photo-1558655146-d09347e92766?w=800"
              initial={{ scale: 1.5, opacity: 0 }}
              animate={{ scale: 1, opacity: progress > 30 ? 1 : 0 }}
              transition={{ duration: 0.5 }}
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover will-change-transform"
            />
            <motion.img 
              src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800"
              initial={{ scale: 1.5, opacity: 0 }}
              animate={{ scale: 1, opacity: progress > 70 ? 1 : 0 }}
              transition={{ duration: 0.5 }}
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover will-change-transform"
            />
          </div>

          <div className="relative z-10 flex flex-col items-center">
            <div className="text-8xl font-black mb-4 tracking-tighter">
              {Math.min(progress, 100)}%
            </div>
            <div className="text-xl font-bold tracking-widest uppercase text-[#FF0001]">
              OUTFIT استوديو
            </div>
            
            {/* Loading Bar */}
            <div className="w-[300px] h-[2px] bg-white/20 mt-8 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-white will-change-transform"
                initial={{ width: "0%" }}
                animate={{ width: `${Math.min(progress, 100)}%` }}
                transition={{ duration: 0.2 }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
