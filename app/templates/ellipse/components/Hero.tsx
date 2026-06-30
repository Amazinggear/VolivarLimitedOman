"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const yEllipses = useTransform(scrollYProgress, [0, 1], [0, -250]);
  const rotateEllipse = useTransform(scrollYProgress, [0, 1], [0, 45]);
  const scaleEllipse = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const opacityOverlay = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.05, 0.12]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[130vh] bg-[#0A0A0A] pt-32 pb-20 overflow-hidden"
    >
      {/* Geometric elliptical background layers */}
      <motion.div
        style={{ y: yEllipses, rotate: rotateEllipse, scale: scaleEllipse, willChange: "transform" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none"
      >
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border will-change-transform"
            style={{
              width: `${120 + i * 140}px`,
              height: `${(120 + i * 140) * 0.6}px`,
              borderColor:
                i % 2 === 0 ? "rgba(99, 102, 241, 0.15)" : "rgba(139, 92, 246, 0.08)",
              borderWidth: i === 0 ? 3 : 1,
            }}
            animate={{
              rotate: i % 2 === 0 ? 360 : -360,
            }}
            transition={{
              duration: 60 + i * 20,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </motion.div>

      {/* Grid lines overlay */}
      <motion.div
        style={{ opacity: opacityOverlay }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(99,102,241,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(99,102,241,0.06)_1px,transparent_1px)] bg-[size:80px_80px]" />
      </motion.div>

      {/* Floating gradient orbs */}
      <motion.div
        animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-[#6366F1] opacity-[0.06] blur-[100px] pointer-events-none will-change-transform"
      />
      <motion.div
        animate={{ x: [0, -50, 0], y: [0, 40, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] rounded-full bg-[#8B5CF6] opacity-[0.05] blur-[80px] pointer-events-none will-change-transform"
      />

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center justify-center h-full pt-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#6366F1]/20 bg-[#6366F1]/5 backdrop-blur-sm"
        >
          <span className="w-2 h-2 rounded-full bg-[#6366F1] animate-pulse" />
          <span className="text-sm font-medium text-[#6366F1] tracking-wide">منصة تقنية متكاملة</span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[1.05] mb-6 max-w-4xl">
            حلول تقنية{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6366F1] to-[#8B5CF6]">متطورة</span>{" "}
            <br />
            لمستقبل أعمالك
          </h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mb-12 leading-relaxed">
            منصة SaaS متكاملة مصممة بهندسة دائرية أنيقة. نبني أدوات ذكية تمنح عملك قفزة نوعية نحو التحول الرقمي.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white px-8 py-4 rounded-full text-lg font-bold hover:shadow-[0_0_40px_rgba(99,102,241,0.4)] transition-shadow duration-500 hover:scale-[1.03]">
              ابدأ الآن مجاناً
            </button>
            <button className="border border-white/10 bg-white/5 backdrop-blur-sm text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-white/10 hover:border-white/20 transition-all duration-300">
              شاهد العرض التوضيحي
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-24 flex flex-wrap items-center justify-center gap-8 md:gap-16"
        >
          {[{ value: "+250", label: "عميل نشط" }, { value: "+99.9%", label: "وقت تشغيل" }, { value: "+50", label: "دولة" }].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#6366F1] to-[#8B5CF6]">{s.value}</div>
              <div className="text-sm text-gray-500 mt-1">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}