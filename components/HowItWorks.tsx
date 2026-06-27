"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import { Layers, UploadCloud, Rocket } from "lucide-react";
import Image from "next/image";

export default function HowItWorks() {
  const steps = [
    {
      id: "01",
      title: "اختر نوع نشاطك",
      description: "حدد النموذج الأقرب لمجال عملك من مكتبتنا المتنوعة والمصممة بعناية فائقة.",
      icon: <Layers className="w-5 h-5 text-white" />,
      image: "/choose_template.png"
    },
    {
      id: "02",
      title: "أرسل الشعار والمعلومات",
      description: "زودنا بتفاصيلك، شعارك، وصورك لنقوم بتخصيص الموقع بالكامل ليعكس هويتك.",
      icon: <UploadCloud className="w-5 h-5 text-white" />,
      image: "/upload_assets.png"
    },
    {
      id: "03",
      title: "استلم موقعك",
      description: "موقعك جاهز ومباشر على الإنترنت خلال 72 ساعة فقط. مستعد لاستقبال عملائك.",
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

  return (
    <section id="how-it-works" className="py-[120px] px-5 md:px-20 bg-background relative overflow-hidden" ref={containerRef}>
      
      {/* Background Ambient Effects */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-primary-container/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-[1000px] mx-auto relative z-10">
        
        <div className="text-center mb-24 relative z-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[40px] md:text-[56px] font-bold mb-6 text-on-surface tracking-tight"
          >
            كيف يعمل <span className="en-text text-primary font-black">Volivar</span>؟
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[20px] text-on-surface-variant max-w-2xl mx-auto"
          >
            مسار واضح وسريع يوصلك للنجاح الرقمي بثلاث خطوات فقط.
          </motion.p>
        </div>

        {/* Sticky Laser Timeline Area */}
        <div className="relative pt-10 pb-20 md:py-20 flex flex-col items-center">
          
          {/* The Track (Background Line) */}
          <div className="absolute top-0 bottom-0 left-[20px] md:left-1/2 md:-translate-x-1/2 w-1 bg-surface-container rounded-full" />
          
          {/* The Glowing Laser (Foreground Line) */}
          <motion.div 
            className="absolute top-0 left-[20px] md:left-1/2 md:-translate-x-1/2 w-1 bg-gradient-to-b from-primary via-[#00c3ff] to-primary rounded-full shadow-[0_0_15px_rgba(0,87,255,0.8)] origin-top"
            style={{ scaleY: smoothProgress, bottom: 0 }}
          />

          <div className="flex flex-col gap-20 md:gap-32 w-full relative z-10">
            {steps.map((step, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div key={step.id} className={`flex w-full items-center ${isEven ? 'md:justify-start' : 'md:justify-end'} pl-14 md:pl-0 relative`}>
                  
                  {/* Step Node (Circle on Timeline) */}
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ margin: "-200px", once: true }}
                    className="absolute left-[8px] md:left-1/2 md:-translate-x-1/2 w-7 h-7 rounded-full bg-background border-[3px] border-primary flex items-center justify-center shadow-[0_0_20px_rgba(0,87,255,0.5)] z-20"
                  >
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </motion.div>

                  {/* Step Content Card */}
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? -50 : 50, rotateY: isEven ? -10 : 10 }}
                    whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                    viewport={{ margin: "-150px", once: true }}
                    transition={{ type: "spring", stiffness: 100, damping: 20 }}
                    className={`w-full md:w-[45%] bg-surface-container-low border border-white/5 rounded-[2rem] p-8 md:p-10 shadow-2xl relative overflow-hidden group perspective-[1000px]`}
                  >
                    {/* The Background Generated Image to add life */}
                    <div className="absolute inset-0 opacity-40 mix-blend-overlay transition-transform duration-700 group-hover:scale-105 pointer-events-none -z-10">
                      <Image src={step.image} alt={step.title} fill className="object-cover" />
                    </div>
                    {/* Dark gradient overlay so text remains perfectly readable */}
                    <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low via-surface-container-low/90 to-surface-container-low/60 -z-10 pointer-events-none" />

                    <div className="flex justify-between items-start mb-6 relative z-10">
                      <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-[0_0_15px_rgba(0,87,255,0.6)] group-hover:scale-110 transition-transform duration-300">
                        {step.icon}
                      </div>
                      <span className="text-[60px] md:text-[80px] font-black en-text text-white/5 leading-none select-none tracking-tighter -mt-4">
                        {step.id}
                      </span>
                    </div>
                    <div className="relative z-10">
                      <h3 className="text-[24px] md:text-[28px] font-bold text-white mb-4 drop-shadow-md">{step.title}</h3>
                      <p className="text-[16px] md:text-[18px] text-on-surface-variant leading-relaxed">
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
