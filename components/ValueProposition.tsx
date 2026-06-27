"use client";

import { motion } from "framer-motion";
import { MonitorSmartphone, Zap, Touchpad, ShieldCheck, X, Check } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function ValueProposition() {
  const comparisonRows = [
    { title: "التكلفة", free: "غير متوقعة", ag: "عالية جداً", vol: "اقتصادية ومدروسة" },
    { title: "وقت التسليم", free: "أسابيع / أشهر", ag: "أشهر", vol: "72 ساعة فقط" },
    { title: "الجودة والتصميم", free: "متذبذبة", ag: "ممتازة (معقدة)", vol: "احترافية ومبهرة" },
    { title: "الصيانة والدعم", free: "معدوم غالباً", ag: "عقود مكلفة", vol: "دعم مستمر وموثوق" },
  ];

  const benefits = [
    {
      icon: <MonitorSmartphone className="w-6 h-6 md:w-8 md:h-8 text-primary" />,
      title: "متجاوب بالكامل",
      description: "يعمل بشكل مثالي ومبهر على الهواتف والأجهزة اللوحية دون أي تشوه.",
      image: "/responsive_ui.png",
      angle: 0
    },
    {
      icon: <Zap className="w-6 h-6 md:w-8 md:h-8 text-primary" />,
      title: "سرعة خارقة",
      description: "أداء محسن وتقنيات تضمن تحميل سريع لعدم فقدان أي زائر.",
      image: "/fast_performance.png",
      angle: 90
    },
    {
      icon: <Touchpad className="w-6 h-6 md:w-8 md:h-8 text-primary" />,
      title: "تجربة تفاعلية",
      description: "واجهات زجاجية وحركات دقيقة لتجربة عميل لا تُنسى.",
      image: "/interactive_ui.png",
      angle: 180
    },
    {
      icon: <ShieldCheck className="w-6 h-6 md:w-8 md:h-8 text-primary" />,
      title: "أمان وموثوقية",
      description: "حماية متقدمة لضمان أمان بيانات زوارك وبناء ثقتهم.",
      image: "/secure_shield.png",
      angle: 270
    }
  ];

  const [hoveredBenefit, setHoveredBenefit] = useState<number | null>(null);

  return (
    <>
      {/* Comparison Section */}
      <section id="comparison" className="py-[140px] px-5 md:px-20 relative bg-background overflow-hidden">
        {/* Ambient Glows */}
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-primary-container/10 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
        
        <div className="max-w-[1200px] mx-auto relative z-10">
          <div className="text-center mb-24 relative z-20">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[40px] md:text-[56px] font-bold mb-6 text-on-surface tracking-tight"
            >
              لماذا تختار <span className="en-text text-primary font-black">Volivar</span>؟
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-[20px] text-on-surface-variant max-w-2xl mx-auto"
            >
              الفرق واضح. نحن لا نبني مجرد موقع، نحن نبني منصة رقمية تتفوق على كل البدائل التقليدية.
            </motion.p>
          </div>

          {/* Desktop Comparison Table */}
          <div className="hidden md:flex w-full items-end justify-center gap-6 relative">
            
            {/* Features List (Left side in LTR, Right side in RTL) */}
            <div className="w-1/4 flex flex-col gap-0 pb-10">
              <div className="h-[120px] flex items-end pb-8 px-6 text-[20px] font-bold text-on-surface-variant opacity-80">
                نقطة المقارنة
              </div>
              {comparisonRows.map((row, idx) => (
                <div key={idx} className="h-[100px] flex items-center px-6 text-[18px] font-bold text-on-surface border-t border-white/5">
                  {row.title}
                </div>
              ))}
            </div>

            {/* Freelancer Column */}
            <div className="w-1/4 flex flex-col gap-0 pb-10 grayscale opacity-60 hover:opacity-100 transition-opacity">
              <div className="h-[120px] flex flex-col justify-end text-center pb-8 px-6">
                <div className="text-[22px] font-bold text-on-surface/60 mb-1">مبرمج مستقل</div>
                <div className="en-text text-[13px] text-on-surface-variant opacity-50 font-bold uppercase tracking-widest">Freelancer</div>
              </div>
              {comparisonRows.map((row, idx) => (
                <div key={idx} className="h-[100px] flex flex-col items-center justify-center gap-2 border-t border-white/5 text-on-surface-variant">
                  <X className="w-5 h-5 text-red-500" />
                  <span className="font-semibold text-[15px]">{row.free}</span>
                </div>
              ))}
            </div>

            {/* Agency Column */}
            <div className="w-1/4 flex flex-col gap-0 pb-10 grayscale opacity-60 hover:opacity-100 transition-opacity">
              <div className="h-[120px] flex flex-col justify-end text-center pb-8 px-6">
                <div className="text-[22px] font-bold text-on-surface/60 mb-1">وكالة إعلانية</div>
                <div className="en-text text-[13px] text-on-surface-variant opacity-50 font-bold uppercase tracking-widest">Agency</div>
              </div>
              {comparisonRows.map((row, idx) => (
                <div key={idx} className="h-[100px] flex flex-col items-center justify-center gap-2 border-t border-white/5 text-on-surface-variant">
                  <X className="w-5 h-5 text-red-500" />
                  <span className="font-semibold text-[15px]">{row.ag}</span>
                </div>
              ))}
            </div>

            {/* Volivar Glow Pillar Column */}
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
              className="w-1/4 flex flex-col gap-0 bg-primary/10 border border-primary/30 rounded-[3rem] shadow-[0_0_60px_rgba(0,87,255,0.2)] overflow-hidden relative"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-transparent to-primary/5 pointer-events-none -z-10" />
              
              <div className="h-[140px] flex flex-col justify-end text-center pb-8 px-6 relative z-10 pt-8">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-1.5 bg-primary rounded-b-full shadow-[0_0_20px_rgba(0,87,255,1)]"></div>
                <div className="text-[36px] font-black en-text text-white mb-1 drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">Volivar</div>
                <div className="text-[16px] text-primary font-bold">الخيار الذكي</div>
              </div>

              {comparisonRows.map((row, idx) => (
                <div key={idx} className="h-[100px] flex flex-col items-center justify-center gap-2 border-t border-primary/20 text-white relative z-10 group hover:bg-primary/10 transition-colors">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center border border-primary/50 shadow-[0_0_15px_rgba(0,87,255,0.5)] group-hover:scale-110 transition-transform">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-bold text-[16px] drop-shadow-md">{row.vol}</span>
                </div>
              ))}
              <div className="h-6"></div>
            </motion.div>
          </div>

          {/* Mobile View */}
          <div className="md:hidden flex flex-col gap-8">
            <div className="bg-primary/10 border border-primary/30 rounded-[2.5rem] p-8 shadow-[0_0_40px_rgba(0,87,255,0.15)] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-primary/20 blur-[60px] rounded-full pointer-events-none -z-10" />
              <h3 className="text-[40px] font-black en-text text-white mb-8 text-center drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">Volivar</h3>
              <div className="flex flex-col gap-6 relative z-10">
                {comparisonRows.map((row, idx) => (
                  <div key={idx} className="flex justify-between items-center border-b border-white/10 pb-4 last:border-0 last:pb-0">
                    <span className="font-bold text-[15px] text-on-surface/80">{row.title}</span>
                    <div className="flex items-center gap-2 bg-primary/20 pl-4 pr-1 py-1 rounded-full border border-primary/30">
                      <span className="font-bold text-white text-[14px]">{row.vol}</span>
                      <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center shadow-[0_0_10px_rgba(0,87,255,0.8)]">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-surface-container-low border border-white/5 rounded-3xl p-6 text-center opacity-70">
                <h4 className="font-bold text-[18px] mb-1">مبرمج مستقل</h4>
                <div className="en-text text-[11px] text-on-surface-variant opacity-50 font-bold uppercase tracking-widest mb-6">Freelancer</div>
                <div className="flex flex-col gap-4">
                  {comparisonRows.map((row, idx) => (
                    <div key={idx} className="flex flex-col items-center gap-1">
                      <span className="text-[12px] text-on-surface-variant">{row.title}</span>
                      <div className="flex items-center gap-1 text-red-400">
                        <X className="w-3 h-3" />
                        <span className="text-[13px] font-bold">{row.free}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-surface-container-low border border-white/5 rounded-3xl p-6 text-center opacity-70">
                <h4 className="font-bold text-[18px] mb-1">وكالة إعلانية</h4>
                <div className="en-text text-[11px] text-on-surface-variant opacity-50 font-bold uppercase tracking-widest mb-6">Agency</div>
                <div className="flex flex-col gap-4">
                  {comparisonRows.map((row, idx) => (
                    <div key={idx} className="flex flex-col items-center gap-1">
                      <span className="text-[12px] text-on-surface-variant">{row.title}</span>
                      <div className="flex items-center gap-1 text-red-400">
                        <X className="w-3 h-3" />
                        <span className="text-[13px] font-bold">{row.ag}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Orbital Ring Benefits Section */}
      <section className="py-[100px] md:py-[160px] px-5 md:px-20 bg-surface-container-lowest relative border-y border-white/5 overflow-hidden flex flex-col items-center justify-center min-h-[90vh]">
        <div className="text-center mb-16 md:mb-20 relative z-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[36px] md:text-[48px] font-bold mb-4 text-on-surface"
          >
            ماذا سيحصل عملاؤك؟
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[18px] text-on-surface-variant max-w-2xl mx-auto"
          >
            نحن نبني تجارب مستخدم تفوق التوقعات لضمان ولاء عملائك.
          </motion.p>
        </div>

        {/* Mobile View: Vertical Stack */}
        <div className="md:hidden flex flex-col gap-8 w-full max-w-md relative z-10">
          {/* Center Logo for Mobile */}
          <div className="flex justify-center mb-4">
            <div className="w-24 h-24 rounded-full bg-surface-container border border-primary/30 shadow-[0_0_50px_rgba(0,87,255,0.4)] flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-primary/20 rounded-full animate-ping opacity-30" />
              <Image src="/logo.webp" alt="Volivar Logo" width={60} height={60} className="relative z-10 object-contain drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] mix-blend-screen" />
            </div>
          </div>

          {benefits.map((benefit, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-surface-container-low/90 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-full h-full opacity-30 mix-blend-overlay">
                <Image src={benefit.image} alt={benefit.title} fill className="object-cover" />
              </div>
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-full bg-primary/20 border border-primary/50 flex items-center justify-center mb-4 shadow-[0_0_20px_rgba(0,87,255,0.5)]">
                  {benefit.icon}
                </div>
                <h3 className="text-[20px] font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-[15px] text-on-surface-variant leading-relaxed">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Desktop View: Orbital Ring */}
        <div className="hidden md:flex relative w-full max-w-[900px] aspect-[2/1] items-center justify-center">
          {/* Center Logo */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
            <div className="w-32 h-32 rounded-full bg-surface-container border border-primary/30 shadow-[0_0_50px_rgba(0,87,255,0.4)] flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-primary/20 rounded-full animate-ping opacity-30" />
              <Image src="/logo.webp" alt="Volivar Logo" width={80} height={80} className="relative z-10 object-contain drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] mix-blend-screen" />
            </div>
          </div>

          {/* Orbiting Elements */}
          <div className="absolute inset-0 z-20">
            {benefits.map((benefit, idx) => {
              return (
                <motion.div
                  key={idx}
                  className={`absolute flex flex-col items-center justify-center gap-4 transition-all duration-500 w-56 ${hoveredBenefit === idx ? 'scale-110 z-50' : 'scale-100 z-20'}`}
                  style={{
                    top: idx === 0 ? '0%' : idx === 2 ? 'auto' : '50%',
                    bottom: idx === 2 ? '0%' : 'auto',
                    left: idx === 3 ? '0%' : idx === 1 ? 'auto' : '50%',
                    right: idx === 1 ? '0%' : 'auto',
                    transform: `translate(${idx === 3 ? '0' : idx === 1 ? '0' : '-50%'}, ${idx === 0 ? '0' : idx === 2 ? '0' : '-50%'})`,
                  }}
                  onMouseEnter={() => setHoveredBenefit(idx)}
                  onMouseLeave={() => setHoveredBenefit(null)}
                >
                  <div className={`w-20 h-20 rounded-full flex items-center justify-center border-2 transition-all duration-300 cursor-pointer backdrop-blur-md relative overflow-hidden ${hoveredBenefit === idx ? 'bg-primary/20 border-primary shadow-[0_0_40px_rgba(0,87,255,0.8)]' : 'bg-surface-container-low border-white/10 hover:border-primary/50'}`}>
                    {/* Tiny background image in the circle */}
                    <div className="absolute inset-0 opacity-40 mix-blend-overlay">
                       <Image src={benefit.image} alt={benefit.title} fill className="object-cover" />
                    </div>
                    <div className="relative z-10">
                      {benefit.icon}
                    </div>
                  </div>
                  
                  {/* Info Card - Reveals on Hover (Desktop) */}
                  <div className={`absolute w-72 bg-surface-container-low/95 backdrop-blur-2xl border border-white/10 rounded-2xl p-6 shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-500 pointer-events-auto overflow-hidden ${hoveredBenefit === idx ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} ${idx === 0 ? 'top-24' : idx === 2 ? 'bottom-24' : idx === 1 ? 'right-24' : 'left-24'}`}>
                    {/* Vibrant Background image for the card */}
                    <div className="absolute inset-0 opacity-30 mix-blend-screen -z-10 pointer-events-none">
                       <Image src={benefit.image} alt={benefit.title} fill className="object-cover" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low via-surface-container-low/80 to-transparent -z-10 pointer-events-none" />
                    
                    <h3 className="text-[20px] font-bold text-white mb-2">{benefit.title}</h3>
                    <p className="text-[14px] text-on-surface-variant leading-relaxed relative z-10">{benefit.description}</p>
                  </div>

                  {/* Connecting Laser Line */}
                  {hoveredBenefit === idx && (
                    <div className="absolute top-1/2 left-1/2 w-[250px] h-[2px] bg-gradient-to-r from-primary via-blue-400 to-transparent -z-10 origin-left"
                         style={{ transform: `rotate(${benefit.angle + 90}deg)` }}
                    />
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Grid Background for Ring Section */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] z-0 pointer-events-none mix-blend-overlay"></div>
          <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />
        </div>
      </section>
    </>
  );
}
