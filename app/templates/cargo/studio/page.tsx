"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Footer from "../components/Footer";

const stats = [
  { num: "12+", label: "سنوات من الإبداع" },
  { num: "80+", label: "مشروع منجز" },
  { num: "15", label: "جائزة معمارية" },
  { num: "9", label: "دول حول العالم" },
];

const values = [
  {
    title: "الموقع أولاً",
    desc: "نبدأ كل مشروع بفهم عميق للموقع — ضوؤه، تضاريسه، وروحه. العمارة الحقيقية تنبثق من مكانها لا تُفرض عليه.",
  },
  {
    title: "المادة الصادقة",
    desc: "نختار مواد تُحكي قصتها مع الزمن. خرسانة تصقل، أخشاب تشيخ، حديد يصداً بكرامة — كل مادة لها صوتها الخاص.",
  },
  {
    title: "الضوء كقائد",
    desc: "نصمم المساحات حول رحلة الضوء الطبيعي عبر اليوم. الإضاءة ليست إضافة، بل هي الهيكل العظمي للتجربة.",
  },
];

export default function StudioPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const yImage = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <main className="bg-white min-h-screen">
      {/* Hero */}
      <section
        ref={heroRef}
        className="relative h-[80vh] w-full overflow-hidden bg-black flex items-center justify-center"
      >
        <motion.div
          style={{ y: yImage, opacity }}
          className="absolute inset-0 w-full h-full"
        >
          <Image
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop"
            alt="استوديو CARGO"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-50"
          />
        </motion.div>
        <motion.div
          style={{ opacity }}
          className="relative z-10 text-center px-4"
        >
          <motion.span
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] as const }}
            className="block text-sm uppercase tracking-[0.3em] text-white/90 font-black mb-6"
          >
            الاستوديو
          </motion.span>
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] as const }}
            className="text-5xl md:text-7xl lg:text-9xl font-black text-white uppercase tracking-tighter"
          >
            CARGO
          </motion.h1>
        </motion.div>
      </section>

      {/* Intro */}
      <section className="py-24 md:py-32 px-6 md:px-12 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as const }}
        >
          <h2 className="text-3xl md:text-5xl font-black leading-tight mb-10 text-neutral-900">
            نصمم مساحات <span className="text-neutral-500">تلهم الحياة</span> وترتقي
            بالتجربة الإنسانية.
          </h2>
          <div className="space-y-6 text-lg md:text-xl text-neutral-800 font-medium leading-loose">
            <p>
              CARGO ARCHITECTURE استوديو معماري متعدد التخصصات، نؤمن بأن العمارة
              ليست مجرد بناء، بل هي لغة صامتة تتحدث عن ساكنيها وعن زمانها. منذ
              تأسيسنا، نعمل على مشاريع تمتد من المسكن الخاص إلى المبنى التجاري
              والمساحة العامة.
            </p>
            <p>
              نجمع بين الحساسية الفنية والصرامة الهندسية، بين الخيال الحر والواقع
              المادي. كل مشروع نبدأه بسؤال جوهري: كيف يمكن لهذا المكان أن يخدم
              الإنسان بشكل أفضل؟ ومن هذا السؤال تنبثق كل قرار تصميمي.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Stats */}
      <section className="bg-neutral-900 text-white py-20 md:py-28 px-6 md:px-12">
        <div className="max-w-[1600px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.8,
                delay: idx * 0.1,
                ease: [0.16, 1, 0.3, 1] as const,
              }}
              className="text-center md:text-right"
            >
              <div className="text-5xl md:text-7xl font-black tracking-tighter mb-3">
                {stat.num}
              </div>
              <div className="text-sm uppercase tracking-widest text-neutral-400 font-bold">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="py-24 md:py-32 px-6 md:px-12 max-w-[1600px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
          className="mb-16 md:mb-24"
        >
          <span className="block text-xs uppercase tracking-[0.3em] text-neutral-600 font-black mb-4">
            فلسفتنا
          </span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-[1.1] text-neutral-900">
            ثلاث ركائز <span className="text-neutral-500">توجّه كل قرار.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {values.map((value, idx) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.9,
                delay: idx * 0.15,
                ease: [0.16, 1, 0.3, 1] as const,
              }}
              className="p-8 md:p-10 rounded-2xl border border-black/10 hover:border-black/30 transition-colors group"
            >
              <div className="text-5xl font-black text-neutral-300 mb-6 group-hover:text-black transition-colors">
                {String(idx + 1).padStart(2, "0")}
              </div>
              <h3 className="text-2xl font-black mb-4 text-neutral-900">{value.title}</h3>
              <p className="text-neutral-700 font-medium leading-loose">{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Quote */}
      <section className="bg-neutral-900 text-white py-24 md:py-32 px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as const }}
          className="max-w-4xl mx-auto text-center relative"
        >
          <div className="text-[150px] font-serif text-white/10 absolute top-0 left-1/2 -translate-x-1/2 leading-none pointer-events-none">
            &quot;
          </div>
          <p className="text-2xl md:text-4xl font-bold leading-relaxed relative z-10">
            المبنى الجيد لا يفرض نفسه، بل يدعو الإنسان لاكتشافه خطوة بخطوة. نحن
            نصمم رحلة، لا مجرد جدران.
          </p>
          <p className="mt-8 text-white/90 font-bold tracking-wider">
            — المؤسس، CARGO ARCHITECTURE
          </p>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
