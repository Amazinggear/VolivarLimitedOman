"use client";

import { motion } from "framer-motion";
import { MonitorSmartphone, Zap, Touchpad, ShieldCheck } from "lucide-react";
import Image from "next/image";

export default function ValueProposition() {
  const benefits = [
    {
      icon: <MonitorSmartphone className="w-8 h-8 text-primary" />,
      title: "متجاوب بالكامل",
      description: "يعمل بشكل مثالي ومبهر على الهواتف والأجهزة اللوحية دون أي تشوه.",
      image: "/responsive_ui.png"
    },
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: "سرعة خارقة",
      description: "أداء محسن وتقنيات تضمن تحميل سريع لعدم فقدان أي زائر.",
      image: "/fast_performance.png"
    },
    {
      icon: <Touchpad className="w-8 h-8 text-primary" />,
      title: "تجربة تفاعلية",
      description: "واجهات زجاجية وحركات دقيقة لتجربة عميل لا تُنسى.",
      image: "/interactive_ui.png"
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-primary" />,
      title: "أمان وموثوقية",
      description: "حماية متقدمة لضمان أمان بيانات زوارك وبناء ثقتهم.",
      image: "/secure_shield.png"
    }
  ];

  return (
    <section id="benefits" className="py-[120px] px-5 md:px-20 relative bg-background overflow-hidden border-t border-white/5">
      {/* Ambient Glows */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
      
      {/* Grid overlay */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-[1280px] mx-auto relative z-10">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[40px] md:text-[56px] font-bold mb-6 text-white tracking-tight"
          >
            ماذا سيحصل عملاؤك؟
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[20px] text-gray-400 max-w-2xl mx-auto"
          >
            نحن نبني تجارب مستخدم تفوق التوقعات لضمان نجاح علامتك التجارية.
          </motion.p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="bg-[#0f0f11] border border-white/5 hover:border-primary/20 rounded-[2rem] p-8 shadow-2xl relative overflow-hidden group transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image background effect */}
              <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity mix-blend-overlay pointer-events-none z-0">
                <Image src={benefit.image} alt={benefit.title} fill className="object-cover" />
              </div>
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-14 h-14 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(0,87,255,0.2)] group-hover:scale-105 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-[22px] font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-[15px] text-gray-400 leading-relaxed">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
