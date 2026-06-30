"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight, ChevronLeft, CheckCircle2, Info } from "lucide-react";

const templates = [
  {
    id: "cafe",
    title: "مقهى ومطعم (Premium)",
    category: "Cafe & Restaurant",
    image: "/mockups/cafe_mockup.png",
    desc: "أجواء دافئة، منيو تفاعلي يفتح الشهية، وتجربة مستخدم تجعل رائحة القهوة تصل للعميل.",
    colors: ["#D97706", "#7C2D12", "#111827"],
    link: "/templates/aurora"
  },
  {
    id: "dental",
    title: "عيادة أسنان (تقويم وتجميل)",
    category: "Medical Clinic",
    image: "/mockups/dental_mockup.png",
    desc: "احترافية مطلقة، ثقة طبية، وحجز مواعيد مباشر بكل سهولة وراحة للمريض.",
    colors: ["#0284C7", "#0F172A", "#FFFFFF"],
    link: "/templates/lumina"
  },
  {
    id: "store",
    title: "متجر منتجات طبيعية",
    category: "Organic E-Commerce",
    image: "/mockups/store_mockup.png",
    desc: "تصميم نقي يعكس الطبيعة، جاهز لبيع المنتجات العضوية بلمسة عصرية.",
    colors: ["#16A34A", "#FDF4FF", "#1C1917"],
    link: "/templates/verdant"
  },
  {
    id: "outfit",
    title: "استوديو إبداعي (طابع سينمائي حركي)",
    category: "Creative Studio",
    image: "/assets/thumbnails/outfit_hero.svg",
    desc: "تصميم مذهل بتأثيرات حركية متقدمة وتمرير سلس. مثالي للوكالات الإبداعية، استوديوهات التصميم، والمحافظ الشخصية المتميزة.",
    colors: ["#EDE4DD", "#FF0001", "#000000"],
    link: "/templates/outfit"
  },
  {
    id: "ellipse",
    title: "منصة تقنية (SaaS | طابع هندسي دائري)",
    category: "Tech & SaaS",
    image: "/assets/thumbnails/ellipse_hero.svg",
    desc: "تصميم هندسي دائري أنيق لمنصات SaaS والتقنية. حركات سلسة، تدرجات لونية جذابة، وتجربة مستخدم مستقبلية تخطف الأنفاس.",
    colors: ["#6366F1", "#8B5CF6", "#0A0A0A"],
    link: "/templates/ellipse"
  },
  {
    id: "cargo",
    title: "مكتب هندسي ومعماري (Cargo)",
    category: "Architecture & Design",
    image: "/mockups/cargo_mockup.png",
    desc: "عرض مذهل للمشاريع الهندسية والمعمارية، يعتمد على صور ضخمة وتمرير ناعم جداً لعرض أدق تفاصيل التصميم بأناقة متناهية.",
    colors: ["#ffffff", "#000000", "#d1d5db"],
    link: "/templates/cargo"
  }
];

const TemplateCard = ({ tpl, idx }: { tpl: typeof templates[0], idx: number }) => {
  const [activeColor, setActiveColor] = useState(tpl.colors[0]);

  // Helper to get black or white text depending on background color brightness
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
      className="w-[85vw] md:w-auto md:min-w-[420px] flex-shrink-0 snap-center group"
    >
      <div 
        className="bg-[#111] border rounded-[2rem] overflow-hidden relative transition-all duration-500 hover:-translate-y-2 flex flex-col h-full"
        style={{ borderColor: activeColor + '40', boxShadow: `0 0 40px ${activeColor}15` }}
      >
        
        {/* Image */}
        <div className="h-[280px] relative overflow-hidden bg-black shrink-0 border-b border-white/5">
          <img 
            src={tpl.image} 
            alt={tpl.title} 
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 transition-all duration-500"
          />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#111] to-transparent"></div>
          <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full text-[12px] font-medium text-gray-300 en-text z-10">
            {tpl.category}
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-[24px] font-bold mb-2 text-white flex items-center gap-3">
            <span className="w-2 h-6 rounded-full transition-colors duration-500 shadow-lg" style={{ backgroundColor: activeColor, boxShadow: `0 0 10px ${activeColor}80` }}></span>
            {tpl.title}
          </h3>
          <p className="text-[14px] text-gray-400 mb-6 leading-relaxed flex-grow">
            {tpl.desc}
          </p>

          {/* Colors Demo */}
          <div className="mb-6">
            <div className="flex gap-2 relative">
              {tpl.colors.map((color: string, i: number) => (
                <button
                  key={i} 
                  onClick={() => setActiveColor(color)}
                  className={`w-8 h-8 rounded-full border-2 shadow-sm relative group/color transition-all duration-300 hover:scale-125 focus:outline-none ${activeColor === color ? 'scale-110 border-white' : 'border-[#222]'}`}
                  style={{ backgroundColor: color }}
                >
                  {/* Tooltip */}
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white text-black text-[12px] font-bold px-3 py-1 rounded-lg opacity-0 group-hover/color:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-20 shadow-[0_4px_15px_rgba(255,255,255,0.3)] en-text">
                    {color}
                  </div>
                </button>
              ))}
            </div>
            {/* Clarification Note for the Client */}
            <div className="mt-4 p-3 rounded-xl text-[12.5px] flex items-start gap-2 transition-colors duration-500" style={{ backgroundColor: activeColor + '15', borderColor: activeColor + '30', borderWidth: 1 }}>
              <Info className="w-4 h-4 shrink-0 mt-0.5 text-white" />
              <span className="text-gray-300 leading-relaxed">
                <strong className="text-white">تنبيه:</strong> هذه الألوان للعرض فقط، سيتم تصميم الموقع <strong className="text-white">بألوان هويتك وشعارك بالكامل</strong> لضمان التفرد.
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            {tpl.link && (
              <a
                href={tpl.link}
                className="w-full py-3.5 rounded-xl border text-[15px] font-bold transition-all duration-500 flex items-center justify-center gap-2 hover:bg-white/10"
                style={{ borderColor: activeColor, color: activeColor }}
              >
                عرض الموقع المباشر
              </a>
            )}
            <a
              href={`https://wa.me/96894789593?text=${encodeURIComponent(
                `مرحباً Volivar، أعجبني نموذج (${tpl.title}) وأريد بناء موقع احترافي مشابه له يطعن قلب العميل!`
              )}`}
              target="_blank"
              rel="noreferrer"
              className="w-full py-3.5 rounded-xl text-[15px] font-bold transition-all duration-500 flex items-center justify-center gap-2 hover:opacity-90 hover:scale-[1.02]"
              style={{ backgroundColor: activeColor, color: textColor, boxShadow: `0 0 20px ${activeColor}40` }}
            >
              <CheckCircle2 className="w-5 h-5" style={{ color: textColor === '#000000' ? 'rgba(0,0,0,0.7)' : 'rgba(255,255,255,0.8)' }} />
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
    <section id="templates" className="py-[80px] bg-[#0a0a0a] text-white border-t border-white/5 relative overflow-hidden">
      <div className="px-5 md:px-20 mb-12 max-w-[1400px] mx-auto flex flex-col md:flex-row md:items-end justify-between gap-6">
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-[36px] md:text-[50px] font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-l from-white to-gray-400">
            اختر موقعك القادم
          </h2>
          <p className="text-[16px] text-gray-400 max-w-2xl">
            نماذج حقيقية جاهزة للانطلاق. اصدم منافسيك بموقع احترافي يحبس الأنفاس! سنقوم بتخصيصه بالكامل ليناسب مشروعك.
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
        className="flex overflow-x-auto gap-4 md:gap-6 px-5 md:px-20 pb-12 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {templates.map((tpl, idx) => (
          <TemplateCard key={tpl.id} tpl={tpl} idx={idx} />
        ))}
      </div>
    </section>
  );
}
