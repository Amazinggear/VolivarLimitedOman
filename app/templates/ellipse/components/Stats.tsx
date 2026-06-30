"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const statsData = [
  { value: "99.99%", label: "وقت تشغيل", suffix: "" },
  { value: "50ms", label: "متوسط زمن الاستجابة", suffix: "" },
  { value: "10M+", label: "مستخدم نشط", suffix: "" },
  { value: "150+", label: "تكامل جاهز", suffix: "" },
];

export default function Stats() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.98]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0.3]);

  return (
    <section ref={targetRef} className="relative py-40 bg-[#0A0A0A] overflow-hidden">
      {/* Animated elliptical bands */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 3 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-[0.5px] will-change-transform"
            style={{
              width: `${300 + i * 200}px`,
              height: `${(300 + i * 200) * 0.55}px`,
              borderColor: i === 1 ? "rgba(99,102,241,0.12)" : "rgba(255,255,255,0.03)",
            }}
            animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
            transition={{
              duration: 40 + i * 15,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <motion.div style={{ scale, opacity, willChange: "transform" }} className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-5xl font-black text-white mb-4"
          >
            أرقام{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6366F1] to-[#8B5CF6]">
              تتحدث
            </span>
          </motion.h2>
          <p className="text-gray-500 text-lg">ثقة آلاف الشركات حول العالم</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {statsData.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: idx * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative text-center group"
            >
              {/* Background ellipse accent */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="w-32 h-20 rounded-full bg-[#6366F1]/5 blur-2xl" />
              </div>

              <div className="relative">
                <div className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400 mb-3 tabular-nums">
                  {stat.value}
                </div>
                <div className="text-gray-500 font-medium">{stat.label}</div>
              </div>

              {/* Divider for all but last */}
              {idx < statsData.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-px h-12 bg-gradient-to-b from-transparent via-[#6366F1]/20 to-transparent -translate-y-1/2" />
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}