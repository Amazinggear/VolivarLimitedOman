"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight, ChevronLeft, CheckCircle2, Info } from "lucide-react";
import Image from "next/image";

const templates = [
  {
    id: "cafe",
    title: "مقهى ومطعم (Premium)",
    category: "Cafe & Restaurant",
    image: "/mockups/cafe_mockup.png",
    desc: "تصميم دافئ مع منيو تفاعلي.",
    colors: ["#D97706", "#7C2D12", "#111827"],
    link: "/templates/aurora"
  },
  {
    id: "dental",
    title: "عيادة أسنان (تقويم وتجميل)",
    category: "Medical Clinic",
    image: "/mockups/dental_mockup_fixed.png",
    desc: "تصميم احترافي مع نظام حجز مواعيد.",
    colors: ["#0284C7", "#0F172A", "#FFFFFF"],
    link: "/templates/lumina"
  },
  {
    id: "store",
    title: "متجر منتجات طبيعية",
    category: "Organic E-Commerce",
    image: "/mockups/store_mockup.png",
    desc: "متجر متكامل للمنتجات الطبيعية.",
    colors: ["#16A34A", "#FDF4FF", "#1C1917"],
    link: "/templates/verdant"
  }
];

const TemplateCard = ({ tpl, idx }: { tpl: typeof templates[0], idx: number }) => {
  const [activeColor, setActiveColor] = useState(tpl.colors[0]);

  const getContrastYIQ = (hexcolor: string) => {
    hexcolor = hexcolor.replace("#", "");
    const r = parseInt(hexcolor.substr(0, 2), 16);
    const g = parseInt(hexcolor.substr(2, 2), 16);
    const b = parseInt(hexcolor.substr(4, 2), 16);
    const yiq = (r * 299 + g * 587 + b * 114) / 1000;
    return yiq >= 128 ? "#000000" : "#ffffff";
  };

  const textColor = getContrastYIQ(activeColor);

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: idx * 0.1 }}
      className="w-[82vw] max-w-[360px] sm:w-[85vw] sm:max-w-none md:w-auto md:min-w-[420px] flex-shrink-0 snap-center group"
    >
      <div 
        className="bg-[#0e101f]/75 backdrop-blur-md border rounded-2xl sm:rounded-[2rem] overflow-hidden relative transition-all duration-500 md:hover:-translate-y-2 flex flex-col h-full"
        style={{ borderColor: activeColor + '40', boxShadow: `0 0 40px ${activeColor}15` }}
      >
        
        {/* Image — using next/image for optimization */}
        <div className="h-[200px] sm:h-[240px] md:h-[280px] relative overflow-hidden bg-black shrink-0 border-b border-white/5">
          <Image 
            src={tpl.image} 
            alt={tpl.title} 
            fill
            sizes="(max-width: 640px) 82vw, (max-width: 768px) 85vw, 420px"
            loading="lazy"
            className="object-cover object-top opacity-90 group-hover:opacity-100 transition-all duration-500"
          />
          <div className="absolute inset-x-0 bottom-0 h-20 sm:h-24 bg-gradient-to-t from-[#0e101f] to-transparent"></div>
          <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-black/60 backdrop-blur-md border border-white/10 px-2.5 py-1 sm:px-3 rounded-full text-[11px] sm:text-[12px] font-medium text-gray-300 en-text z-10">
            {tpl.category}
          </div>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-5 md:p-6 flex flex-col flex-grow">
          <h3 className="text-[20px] sm:text-[22px] md:text-[24px] font-bold mb-2 text-white flex items-center gap-2 sm:gap-3">
            <span className="w-1.5 sm:w-2 h-5 sm:h-6 rounded-full transition-colors duration-500 shadow-lg" style={{ backgroundColor: activeColor, boxShadow: `0 0 10px ${activeColor}80` }}></span>
            {tpl.title}
          </h3>
          <p className="text-[13px] sm:text-[14px] text-gray-400 mb-4 sm:mb-6 leading-relaxed flex-grow">
            {tpl.desc}
          </p>

          {/* Colors Demo */}
          <div className="mb-4 sm:mb-6">
            <div className="flex gap-2 relative">
              {tpl.colors.map((color: string, i: number) => (
                <button
                  key={i} 
                  onClick={() => setActiveColor(color)}
                  className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 shadow-sm relative group/color transition-all duration-300 hover:scale-125 focus:outline-none ${activeColor === color ? 'scale-110 border-white' : 'border-[#222]'}`}
                  style={{ backgroundColor: color }}
                >
                  {/* Tooltip — hidden on mobile */}
                  <div className="hidden sm:block absolute -top-10 left-1/2 -translate-x-1/2 bg-white text-black text-[12px] font-bold px-3 py-1 rounded-lg opacity-0 group-hover/color:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-20 shadow-[0_4px_15px_rgba(255,255,255,0.3)] en-text">
                    {color}
                  </div>
                </button>
              ))}
            </div>
            {/* Clarification Note */}
            <div className="mt-3 sm:mt-4 p-2.5 sm:p-3 rounded-xl text-[11px] sm:text-[12.5px] flex items-start gap-2 transition-colors duration-500" style={{ backgroundColor: activeColor + '15', borderColor: activeColor + '30', borderWidth: 1 }}>
              <Info className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 mt-0.5 text-white" />
              <span className="text-gray-300 leading-relaxed">
                سيتم تخصيص الألوان <strong className="text-white">حسب هويتك وشعارك</strong>.
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-2.5 sm:gap-3">
            {tpl.link && (
              <a
                href={tpl.link}
                className="w-full py-3 sm:py-3.5 rounded-xl border text-[14px] sm:text-[15px] font-bold transition-all duration-500 flex items-center justify-center gap-2 hover:bg-white/10 min-h-[44px]"
                style={{ borderColor: activeColor, color: activeColor }}
              >
                عرض الموقع المباشر
              </a>
            )}
            <a
              href={`https://wa.me/96894789593?text=${encodeURIComponent(
                `مرحباً، أريد بناء موقع مشابه لنموذج (${tpl.title}).`
              )}`}
              target="_blank"
              rel="noreferrer"
              className="w-full py-3 sm:py-3.5 rounded-xl text-[14px] sm:text-[15px] font-bold transition-all duration-500 flex items-center justify-center gap-2 hover:opacity-90 hover:scale-[1.02] min-h-[44px]"
              style={{ backgroundColor: activeColor, color: textColor, boxShadow: `0 0 20px ${activeColor}40` }}
            >
              <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: textColor === '#000000' ? 'rgba(0,0,0,0.7)' : 'rgba(255,255,255,0.8)' }} />
              أريد مثل هذا التصميم
            </a>
          </div>
        </div>

      </div>
    </motion.div>
  );
};

export default function TemplatesSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (scrollRef.current) {
      const amount = dir === "left" ? -400 : 400;
      scrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
    }
  };

  return (
    <section id="templates" className="py-12 sm:py-16 md:py-[80px] bg-gradient-to-b from-[#060814] via-[#09112a] to-[#050711] text-white border-t border-white/5 relative overflow-hidden">
      <div className="px-4 sm:px-5 md:px-20 mb-8 sm:mb-12 max-w-[1400px] mx-auto flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6">
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-[28px] sm:text-[36px] md:text-[50px] font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-l from-white to-gray-400">
            اختر موقعك القادم
          </h2>
          <p className="text-[14px] sm:text-[16px] text-gray-400 max-w-2xl">
            نماذج حقيقية جاهزة لتخصيصها بالكامل لمشروعك.
          </p>
        </motion.div>
        
        {/* Hidden on mobile since they can just swipe */}
        <div className="hidden md:flex gap-3">
          <button onClick={() => scroll("right")} className="w-12 h-12 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center backdrop-blur-md border border-white/10 transition-colors">
            <ChevronRight className="w-6 h-6" />
          </button>
          <button onClick={() => scroll("left")} className="w-12 h-12 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center backdrop-blur-md border border-white/10 transition-colors">
            <ChevronLeft className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Netflix Style Horizontal Scroll */}
      <div 
        ref={scrollRef}
        className="flex overflow-x-auto gap-3 sm:gap-4 md:gap-6 px-4 sm:px-5 md:px-20 pb-8 sm:pb-12 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {templates.map((tpl, idx) => (
          <TemplateCard key={tpl.id} tpl={tpl} idx={idx} />
        ))}
      </div>
    </section>
  );
}
