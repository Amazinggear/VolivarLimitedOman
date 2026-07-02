"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Layers, UploadCloud, Rocket } from "lucide-react";
import Image from "next/image";

export default function HowItWorks() {
  const steps = [
    {
      id: "01",
      title: "اختر نوع نشاطك",
      description: "حدد النموذج الأنسب لعملك.",
      icon: <Layers className="w-5 h-5 text-white" />,
      image: "/choose_template.png"
    },
    {
      id: "02",
      title: "أرسل الشعار والمعلومات",
      description: "زودنا بشعارك ومعلوماتك لتخصيص موقعك.",
      icon: <UploadCloud className="w-5 h-5 text-white" />,
      image: "/upload_assets.png"
    },
    {
      id: "03",
      title: "استلم موقعك",
      description: "موقعك جاهز ومباشر خلال 72 ساعة.",
      icon: <Rocket className="w-5 h-5 text-white" />,
      image: "/launch_site.png"
    }
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  return (
    <section id="how-it-works" className="py-16 sm:py-20 md:py-[120px] px-4 sm:px-5 md:px-20 bg-gradient-to-b from-[#04060f] via-[#0a122e] to-[#020308] relative overflow-hidden" ref={containerRef}>
      
      {/* Background Ambient Effects — reduced on mobile */}
      <div className="absolute top-1/4 left-0 w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] md:w-[500px] md:h-[500px] bg-primary/5 rounded-full blur-[80px] sm:blur-[120px] md:blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] md:w-[500px] md:h-[500px] bg-primary-container/10 rounded-full blur-[80px] sm:blur-[120px] md:blur-[150px] pointer-events-none" />

      <div className="max-w-[1000px] mx-auto relative z-10">
        
        <div className="text-center mb-12 sm:mb-16 md:mb-24 relative z-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[28px] sm:text-[36px] md:text-[56px] font-bold mb-4 sm:mb-6 text-on-surface tracking-tight"
          >
            كيف يعمل <span className="en-text text-primary font-black">Volivar</span>؟
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[16px] sm:text-[18px] md:text-[20px] text-on-surface-variant max-w-2xl mx-auto"
          >
            ثلاث خطوات لنجاحك الرقمي.
          </motion.p>
        </div>

        {/* Sticky Laser Timeline Area */}
        <div className="relative pt-6 pb-10 sm:pt-8 sm:pb-16 md:py-20 flex flex-col items-center">
          
          {/* The Track (Background Line) */}
          <div className="absolute top-0 bottom-0 left-[20px] md:left-1/2 md:-translate-x-1/2 w-1 bg-surface-container rounded-full" />
          
          {/* The Glowing Laser (Foreground Line) */}
          <motion.div 
            className="absolute top-0 left-[20px] md:left-1/2 md:-translate-x-1/2 w-1 bg-gradient-to-b from-primary via-[#00c3ff] to-primary rounded-full shadow-[0_0_15px_rgba(0,87,255,0.8)] origin-top"
            style={{ scaleY: isMobile ? 1 : smoothProgress, bottom: 0 }}
          />

          <div className="flex flex-col gap-12 sm:gap-16 md:gap-32 w-full relative z-10">
            {steps.map((step, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div key={step.id} className={`flex w-full items-center ${isEven ? 'md:justify-start' : 'md:justify-end'} pl-12 sm:pl-14 md:pl-0 relative`}>
                  
                  {/* Step Node (Circle on Timeline) */}
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ margin: "-100px", once: true }}
                    className="absolute left-[8px] md:left-1/2 md:-translate-x-1/2 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-background border-[3px] border-primary flex items-center justify-center shadow-[0_0_20px_rgba(0,87,255,0.5)] z-20"
                  >
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-primary" />
                  </motion.div>

                  {/* Step Content Card */}
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ margin: "-80px", once: true }}
                    transition={{ type: "spring", stiffness: 100, damping: 20 }}
                    className="w-full md:w-[45%] bg-[#12152a]/50 backdrop-blur-md border border-white/[0.05] rounded-2xl sm:rounded-[2rem] p-5 sm:p-7 md:p-10 shadow-2xl relative overflow-hidden group"
                  >
                    {/* The Background Generated Image to add life */}
                    <div className="absolute inset-0 opacity-30 sm:opacity-40 mix-blend-overlay transition-transform duration-700 group-hover:scale-105 pointer-events-none -z-10">
                      <Image 
                        src={step.image} 
                        alt={step.title} 
                        fill 
                        sizes="(max-width: 768px) 85vw, 45vw"
                        loading="lazy"
                        className="object-cover" 
                      />
                    </div>
                    {/* Dark gradient overlay so text remains perfectly readable */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#12152a] via-[#12152a]/90 to-[#12152a]/60 -z-10 pointer-events-none" />

                    <div className="flex justify-between items-start mb-4 sm:mb-6 relative z-10">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary flex items-center justify-center shadow-[0_0_15px_rgba(0,87,255,0.6)] group-hover:scale-110 transition-transform duration-300">
                        {step.icon}
                      </div>
                      <span className="text-[40px] sm:text-[60px] md:text-[80px] font-black en-text text-white/5 leading-none select-none tracking-tighter -mt-2 sm:-mt-4">
                        {step.id}
                      </span>
                    </div>
                    <div className="relative z-10">
                      <h3 className="text-[20px] sm:text-[24px] md:text-[28px] font-bold text-white mb-2 sm:mb-4 drop-shadow-md">{step.title}</h3>
                      <p className="text-[14px] sm:text-[16px] md:text-[18px] text-on-surface-variant leading-relaxed">
                        {step.description}
                      </p>
                    </div>

                    {/* Interactive Glow Hover effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                  </motion.div>

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
