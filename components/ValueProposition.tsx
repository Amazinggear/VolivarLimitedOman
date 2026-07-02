"use client";

import { motion } from "framer-motion";
import { MonitorSmartphone, Zap, Touchpad, ShieldCheck } from "lucide-react";
import Image from "next/image";

export default function ValueProposition() {
  const benefits = [
    {
      icon: <MonitorSmartphone className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />,
      title: "متجاوب بالكامل",
      description: "يعمل بشكل مثالي على الهواتف والأجهزة اللوحية.",
      image: "/responsive_ui.png"
    },
    {
      icon: <Zap className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />,
      title: "سرعة خارقة",
      description: "تحميل سريع لضمان عدم فقدان أي زائر.",
      image: "/fast_performance.png"
    },
    {
      icon: <Touchpad className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />,
      title: "تجربة تفاعلية",
      description: "واجهات وحركات لتجربة عميل مميزة.",
      image: "/interactive_ui.png"
    },
    {
      icon: <ShieldCheck className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />,
      title: "أمان وموثوقية",
      description: "حماية متقدمة لبيانات زوارك.",
      image: "/secure_shield.png"
    }
  ];

  return (
    <section id="benefits" className="py-16 sm:py-20 md:py-[120px] px-4 sm:px-5 md:px-20 relative bg-gradient-to-b from-[#050711] via-[#081024] to-[#04060f] overflow-hidden border-t border-white/5">
      {/* Ambient Glows — reduced on mobile */}
      <div className="absolute top-1/4 left-1/4 w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] md:w-[600px] md:h-[600px] bg-primary/5 rounded-full blur-[80px] sm:blur-[120px] md:blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] md:w-[600px] md:h-[600px] bg-primary/5 rounded-full blur-[80px] sm:blur-[120px] md:blur-[150px] pointer-events-none" />
      
      {/* Grid overlay */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-[1280px] mx-auto relative z-10">
        <div className="text-center mb-12 sm:mb-16 md:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[28px] sm:text-[36px] md:text-[56px] font-bold mb-4 sm:mb-6 text-white tracking-tight"
          >
            ماذا سيحصل عملاؤك؟
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[16px] sm:text-[18px] md:text-[20px] text-gray-400 max-w-2xl mx-auto"
          >
            نبني تجارب مستخدم مميزة لضمان نجاحك.
          </motion.p>
        </div>

        {/* Benefits Grid — 2 cols on mobile, 4 on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 md:gap-8">
          {benefits.map((benefit, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="bg-[#13162b]/40 backdrop-blur-md border border-white/[0.06] hover:border-primary/40 rounded-2xl sm:rounded-[2rem] p-4 sm:p-6 md:p-8 shadow-2xl relative overflow-hidden group transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image background effect */}
              <div className="absolute inset-0 opacity-15 sm:opacity-20 group-hover:opacity-30 transition-opacity mix-blend-overlay pointer-events-none z-0">
                <Image 
                  src={benefit.image} 
                  alt={benefit.title} 
                  fill 
                  sizes="(max-width: 640px) 45vw, (max-width: 1024px) 50vw, 25vw"
                  loading="lazy"
                  className="object-cover" 
                />
              </div>
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center mb-3 sm:mb-4 md:mb-6 shadow-[0_0_20px_rgba(0,87,255,0.2)] group-hover:scale-105 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-[16px] sm:text-[18px] md:text-[22px] font-bold text-white mb-1.5 sm:mb-2 md:mb-3">{benefit.title}</h3>
                <p className="text-[12px] sm:text-[13px] md:text-[15px] text-gray-400 leading-relaxed">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
