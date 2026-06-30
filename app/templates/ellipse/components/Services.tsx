"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Shield, Zap, Globe, BarChart3, Layers, Cpu } from "lucide-react";

const services = [
  {
    icon: Shield,
    title: "أمان متقدم",
    desc: "تشفير من الطراز العسكري وحماية متعددة الطبقات لبياناتك الحساسة.",
  },
  {
    icon: Zap,
    title: "أداء فائق السرعة",
    desc: "بنية تحتية موزعة عالمياً تضمن استجابة فورية في كل الظروف.",
  },
  {
    icon: Globe,
    title: "انتشار عالمي",
    desc: "خوادم في أكثر من 50 منطقة حول العالم لتجربة مستخدم سلسة أينما كان عملاؤك.",
  },
  {
    icon: BarChart3,
    title: "تحليلات ذكية",
    desc: "لوحات معلومات تفاعلية وذكاء اصطناعي لتحليل سلوك المستخدمين واتخاذ قرارات أفضل.",
  },
  {
    icon: Layers,
    title: "تكامل مرن",
    desc: "واجهات برمجية مفتوحة تتكامل بسلاسة مع أدواتك الحالية دون تعقيد.",
  },
  {
    icon: Cpu,
    title: "ذكاء اصطناعي",
    desc: "نماذج تعلم آلي مخصصة لأتمتة المهام وتحسين تجربة المستخدم النهائي.",
  },
];

export default function Services() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);

  return (
    <section
      ref={targetRef}
      className="relative py-32 bg-[#0A0A0A] overflow-hidden border-t border-white/[0.03]"
    >
      {/* Background elliptical accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full border border-[#6366F1]/5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[360px] rounded-full border border-[#8B5CF6]/3" />
      </div>

      <motion.div style={{ y, willChange: "transform" }} className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-[#6366F1] text-sm font-bold tracking-[0.2em] uppercase mb-4 block">
              خدماتنا
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
              كل ما تحتاجه في{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6366F1] to-[#8B5CF6]">
                منصة واحدة
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
              مجموعة متكاملة من الخدمات التقنية المصممة لتسريع نمو أعمالك الرقمية
              بأعلى معايير الجودة والأمان.
            </p>
          </motion.div>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: idx * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="group relative p-8 rounded-2xl border border-white/[0.05] bg-white/[0.02] backdrop-blur-sm hover:border-[#6366F1]/20 hover:bg-[#6366F1]/[0.03] transition-all duration-500"
            >
              {/* Glow on hover */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-[#6366F1]/10 via-transparent to-[#8B5CF6]/10" />
              </div>

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#6366F1]/20 to-[#8B5CF6]/10 flex items-center justify-center mb-6 group-hover:from-[#6366F1]/30 group-hover:to-[#8B5CF6]/20 transition-all duration-500">
                  <service.icon className="w-7 h-7 text-[#6366F1] group-hover:text-white transition-colors duration-500" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-500 leading-relaxed">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}