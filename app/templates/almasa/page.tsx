"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function AlMasaHome() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const products = [
    {
      id: 1,
      name: "أوروم كرونوغراف",
      collection: "مجموعة الحرفيين",
      price: "٤٥,٠٠٠ ر.س",
      image: "https://images.unsplash.com/photo-1587836147124-a5851f53e4bb?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 2,
      name: "رويال أوك إكليبس",
      collection: "الإصدار المحدود",
      price: "١٢٠,٠٠٠ ر.س",
      image: "https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 3,
      name: "نوفا توربيون",
      collection: "التعقيدات الكبرى",
      price: "٨٥,٠٠٠ ر.س",
      image: "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 4,
      name: "أسترا بلاتينيوم",
      collection: "المجموعة الكلاسيكية",
      price: "٦٢,٥٠٠ ر.س",
      image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=800&auto=format&fit=crop",
    }
  ];

  return (
    <div className="flex flex-col bg-[#050505]">
      {/* Parallax Hero Section */}
      <section ref={containerRef} className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
        <motion.div 
          style={{ y: heroY, opacity: heroOpacity }}
          className="absolute inset-0 z-0"
        >
          <Image
            src="https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=2000&auto=format&fit=crop"
            alt="صناعة الساعات الفاخرة"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Subtle gradient vignette instead of muddy black */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#050505_120%)]"></div>
          <div className="absolute inset-0 bg-black/30"></div>
        </motion.div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-20">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="text-[11px] tracking-[0.4em] text-white/70 uppercase mb-8"
          >
            تراث يتخطى الزمن
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="text-5xl md:text-7xl lg:text-8xl font-light text-white leading-tight tracking-wide"
          >
            المعيار العالمي <br />
            <span className="italic font-serif text-white/90">للفخامة</span>
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-16"
          >
            <Link href="#collections" className="group inline-flex flex-col items-center gap-4">
              <span className="text-[10px] tracking-[0.2em] text-white/50 uppercase group-hover:text-white transition-colors duration-500">اكتشف</span>
              <div className="w-[1px] h-12 bg-white/20 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-white animate-[scroll-down_2s_ease-in-out_infinite]"></div>
              </div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Editorial Story Section */}
      <section className="py-32 md:py-48 px-6 relative z-20 bg-[#050505]">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-32 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              <p className="text-[11px] tracking-[0.3em] text-[#808080] uppercase mb-8">الفلسفة</p>
              <h2 className="text-3xl md:text-5xl font-light text-white leading-[1.4] mb-10">
                لا نصنع ساعات فقط، بل <span className="italic font-serif text-white/70">نصوغ التاريخ</span> لحظة بلحظة.
              </h2>
              <p className="text-[#A0A0A0] leading-loose font-light mb-12 max-w-md">
                كل قطعة تخرج من مشغلنا هي ثمرة مئات الساعات من العمل اليدوي الدقيق. نجمع بين المهارات المتوارثة منذ قرون والابتكارات الهندسية الدقيقة لنقدم لك تحفة فنية تنبض بالحياة على معصمك.
              </p>
              <Link href="/templates/almasa/atelier" className="inline-flex items-center gap-4 group">
                <span className="w-12 h-[1px] bg-white transition-all duration-500 group-hover:w-20"></span>
                <span className="text-[11px] tracking-[0.2em] text-white uppercase">اكتشف مشغلنا</span>
              </Link>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="relative h-[600px] w-full"
            >
              <Image
                src="https://images.unsplash.com/photo-1622434641406-a158123450f9?q=80&w=1000&auto=format&fit=crop"
                alt="حرفية صناعة الساعات"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* New Collection Grid - Editorial Style */}
      <section id="collections" className="py-32 bg-[#0A0A0A] relative z-20">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24">
            <div>
              <p className="text-[11px] tracking-[0.3em] text-[#808080] uppercase mb-6">الإصدارات الحديثة</p>
              <h2 className="text-3xl md:text-5xl font-light text-white">مجموعة <span className="italic font-serif text-white/70">الروائع</span></h2>
            </div>
            <Link href="/templates/almasa/shop" className="text-[11px] tracking-[0.2em] text-white uppercase mt-8 md:mt-0 hover:text-white/70 transition-colors">
              عرض المجموعة الكاملة
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
            {products.map((product, index) => (
              <motion.div 
                key={product.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
                className="group cursor-pointer"
              >
                <div className="relative h-[450px] w-full overflow-hidden bg-[#050505] mb-8">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover object-center opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 ease-out"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <span className="text-[11px] tracking-[0.2em] text-white uppercase border border-white/30 px-6 py-3 backdrop-blur-sm hover:bg-white hover:text-black transition-colors duration-300">
                      التفاصيل
                    </span>
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-[10px] tracking-[0.2em] text-[#808080] uppercase mb-3">{product.collection}</p>
                  <h3 className="text-lg text-white font-light tracking-wide mb-4">{product.name}</h3>
                  <p className="text-sm text-[#A0A0A0] font-light">{product.price}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Styles for specific animations */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scroll-down {
          0% { transform: translateY(-100%); }
          50% { transform: translateY(0); }
          100% { transform: translateY(100%); }
        }
      `}} />
    </div>
  );
}
