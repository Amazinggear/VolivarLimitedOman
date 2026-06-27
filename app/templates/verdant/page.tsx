"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Leaf, Globe, FlaskConical, Star, ArrowRight } from "lucide-react";
import Image from "next/image";

// In RTL, "Start" is Right and "End" is Left.
// ─── Variants ──────────────────────────────────────────────────────────────
const fadeInStart: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }
  }
};

const fadeInEnd: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }
  }
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const scaleUp: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
  }
};

const products = [
  {
    id: 1,
    name: "زيت الوجه النباتي",
    desc: "سيروم مغذي للاستخدام اليومي",
    price: "$48",
    image: "/images/verdant/vegan_face_oil.png"
  },
  {
    id: 2,
    name: "كريم الوجه المرطب",
    desc: "حاجز ترطيب عميق للبشرة",
    price: "$52",
    image: "/images/verdant/hydrating_face_cream.png"
  },
  {
    id: 3,
    name: "غسول الجسم النباتي",
    desc: "تنظيف يومي لطيف ومنعش",
    price: "$34",
    image: "/images/verdant/vegan_body_wash.png"
  },
  {
    id: 4,
    name: "ماسك الشعر العشبي",
    desc: "علاج مجدد ومقوي للشعر",
    price: "$42",
    image: "/images/verdant/herbal_hair_mask.png"
  }
];

const testimonials = [
  {
    name: "سارة الجعفري",
    text: "زيت الوجه النباتي غيّر ملمس بشرتي بالكامل. أصبحت مشرقة طبيعياً دون الشعور بأي دهون زائدة."
  },
  {
    name: "مريم خليل",
    text: "أخيراً وجدت علامة تجارية تتوافق مع قيمي وتقدم نتائج حقيقية. رائحة غسول الجسم لا تُقاوم."
  },
  {
    name: "ليلى محمود",
    text: "بشرتي الحساسة تعشق هذا الكريم المرطب. أستخدمه منذ أشهر واختفى الاحمرار تماماً."
  }
];

export default function VerdantHome() {
  return (
    <div className="w-full" dir="rtl">
      {/* ── HERO SECTION ── */}
      <section className="relative min-h-[90vh] bg-[#e6ede1] overflow-hidden flex items-center">
        <div className="absolute inset-0 grid grid-cols-1 lg:grid-cols-2">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeInEnd}
            className="relative h-[40vh] lg:h-full w-full lg:rounded-br-[120px] overflow-hidden z-10"
          >
            <Image
              src="/images/verdant/home_hero.png"
              alt="جمال طبيعي من ڤيردانت"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
          <div className="hidden lg:block bg-[#e6ede1]"></div>
        </div>

        <div className="max-w-[1280px] w-full mx-auto px-5 md:px-10 relative z-20 pt-[40vh] lg:pt-0">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeInStart}
            className="lg:max-w-xl py-12 lg:py-24 lg:mr-auto lg:ml-0"
          >
            <div className="inline-block px-4 py-1.5 border border-[#6a7c5a]/30 rounded-full text-xs font-bold tracking-wider text-[#6a7c5a] mb-6 bg-white/50 backdrop-blur-sm">
              خالي من القسوة | نباتي | طبيعي
            </div>
            <h1 
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.2] mb-6 text-[#1a1a1a]"
            >
              اكتشفي إشراقتكِ<br />الطبيعية.
            </h1>
            <p className="text-lg text-stone-600 mb-10 max-w-md leading-relaxed">
              اكتشفي مستحضرات العناية بالبشرة النباتية النقية، المصممة خصيصاً لتغذية بشرتكِ وحمايتها واستعادة توازنها الطبيعي.
            </p>
            <div className="flex flex-wrap items-center gap-5">
              <Link 
                href="/templates/verdant/skincare"
                className="bg-[#6a7c5a] text-white px-8 py-4 rounded-full font-medium hover:bg-[#58694a] transition-colors flex items-center gap-2 group"
              >
                تسوقي المجموعة
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CURATED PRODUCTS ── */}
      <section className="py-24 bg-[#fcfbf5]">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10">
          <div className="flex items-end justify-between mb-12">
            <div>
              <motion.h2 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeUp}
                className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-3"
              >
                منتجاتنا المختارة
              </motion.h2>
              <motion.p 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeUp}
                className="text-stone-500"
              >
                التركيبات النباتية الأحب لقلوب عملائنا.
              </motion.p>
            </div>
            <div className="hidden md:flex items-center gap-3">
              <button className="w-10 h-10 rounded-full border border-stone-200 flex items-center justify-center text-stone-500 hover:border-[#6a7c5a] hover:text-[#6a7c5a] transition-colors">
                <ArrowRight className="w-4 h-4" />
              </button>
              <button className="w-10 h-10 rounded-full border border-stone-200 flex items-center justify-center text-stone-500 hover:border-[#6a7c5a] hover:text-[#6a7c5a] transition-colors">
                <ArrowLeft className="w-4 h-4" />
              </button>
            </div>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {products.map((product) => (
              <motion.div key={product.id} variants={fadeUp} className="group cursor-pointer">
                <div className="relative aspect-[4/5] overflow-hidden bg-stone-100 mb-5 rounded-sm">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 backdrop-blur text-[#1a1a1a] text-xs font-bold px-3 py-1.5 rounded-full">
                    إضافة سريعة
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-[#1a1a1a] text-lg mb-1">{product.name}</h3>
                  <p className="text-sm text-stone-500 mb-2">{product.desc}</p>
                  <p className="text-[#6a7c5a] font-bold">{product.price}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── WHY VERDANT ── */}
      <section className="py-24 bg-[#f5f2ea]">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <h2 
              className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-4"
            >
              معيار ڤيردانت
            </h2>
            <p className="text-stone-600 leading-relaxed">
              نؤمن بقوة الطبيعة، مدعومة بالعلم. تم ابتكار تركيباتنا بأقصى درجات الاحترام لسلامة بشرتك ولبيئتنا.
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16"
          >
            {[
              {
                icon: <Leaf className="w-8 h-8 text-[#6a7c5a]" />,
                title: "مكونات نقية",
                desc: "نستخلص مكوناتنا النباتية مباشرة من الطبيعة، ونختارها بعناية لفعاليتها المثبتة ولطفها على البشرة."
              },
              {
                icon: <Globe className="w-8 h-8 text-[#6a7c5a]" />,
                title: "مصادر مستدامة",
                desc: "من المزرعة إلى الزجاجة، نضمن حصاد كل مكون بأخلاقية وتعبئته في مواد قابلة لإعادة التدوير."
              },
              {
                icon: <FlaskConical className="w-8 h-8 text-[#6a7c5a]" />,
                title: "مدعوم بالعلم",
                desc: "تم تطوير منتجاتنا بالتعاون مع خبراء لضمان مستويات درجة الحموضة المثالية واستقرار المكونات الفعالة."
              }
            ].map((feature, idx) => (
              <motion.div key={idx} variants={scaleUp} className="text-center flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-6 shadow-sm">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-[#1a1a1a] mb-3">
                  {feature.title}
                </h3>
                <p className="text-stone-600 leading-relaxed text-sm">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── BANNER ── */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="py-16 bg-[#6a7c5a] text-center px-5"
      >
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="max-w-3xl mx-auto flex flex-col items-center"
        >
          <h2 
            className="text-3xl md:text-5xl font-bold text-white mb-6"
          >
            منتجاتنا الأكثر مبيعاً — خصم يصل إلى 20%
          </h2>
          <p className="text-[#e6ede1] mb-8 text-lg">
            ارتقي بروتينكِ اليومي مع تركيباتنا النباتية الأكثر طلباً. عرض لفترة محدودة.
          </p>
          <Link 
            href="/templates/verdant/skincare"
            className="bg-white text-[#6a7c5a] px-8 py-3.5 rounded-full font-bold hover:bg-[#fcfbf5] transition-colors shadow-lg hover:shadow-xl"
          >
            تسوقي الآن
          </Link>
        </motion.div>
      </motion.section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-24 bg-[#fcfbf5]">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10">
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="text-3xl md:text-4xl font-bold text-center text-[#1a1a1a] mb-16"
          >
            آراء مجتمعنا
          </motion.h2>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {testimonials.map((test, idx) => (
              <motion.div 
                key={idx} 
                variants={fadeUp}
                className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#6a7c5a] text-[#6a7c5a]" />
                  ))}
                </div>
                <p className="text-stone-600 mb-6 italic leading-relaxed text-sm font-medium">
                  &quot;{test.text}&quot;
                </p>
                <p className="font-bold text-[#1a1a1a] text-sm">
                  — {test.name}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}


