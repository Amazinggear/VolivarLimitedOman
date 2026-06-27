"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { useState } from "react";

// ─── Variants ──────────────────────────────────────────────────────────────
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

// ─── Data ───────────────────────────────────────────────────────────────────
const TABS = ["الكل", "منظفات", "سيروم", "مرطبات", "العناية بالعين", "علاجات"];

interface Product {
  name: string;
  description: string;
  price: string;
  image: string;
}

const PRODUCTS: Product[] = [
  {
    name: "زيت الوجه النباتي",
    description: "زيت وجه نباتي 100% خفيف الوزن — 30 مل",
    price: "$42.00",
    image: "/images/verdant/vegan_face_oil.png",
  },
  {
    name: "كريم الوجه المرطب",
    description: "ترطيب عميق، إشراقة تدوم طوال اليوم",
    price: "$56.00",
    image: "/images/verdant/hydrating_face_cream.png",
  },
  {
    name: "سيروم الورد للوجه",
    description: "سيروم تجديد البشرة بثمر الورد والببتيد",
    price: "$68.00",
    image: "/images/verdant/rose_face_serum.png",
  },
  {
    name: "منظف رغوي لطيف",
    description: "يزيل الشوائب دون تجريد البشرة",
    price: "$34.00",
    image: "/images/verdant/gentle_cleanser.png",
  },
  {
    name: "سيروم فيتامين سي المفتح",
    description: "يوحد لون البشرة بشكل ملحوظ خلال 4 أسابيع",
    price: "$74.00",
    image: "/images/verdant/vitaminc_serum.png",
  },
  {
    name: "كريم تجديد محيط العين",
    description: "يشد ويفتح المنطقة الرقيقة حول العين",
    price: "$52.00",
    image: "/images/verdant/renewing_eye_cream.png",
  },
  {
    name: "تونر حمض الهيالورونيك",
    description: "تونر حمض الهيالورونيك متعدد الأوزان لامتلاء البشرة",
    price: "$38.00",
    image: "/images/verdant/hyaluronic_toner.png",
  },
  {
    name: "بلسم الترميم الليلي",
    description: "بلسم ليلي مكثف لترميم البشرة",
    price: "$62.00",
    image: "/images/verdant/night_repair_balm.png",
  },
];

// ─── Product Card ────────────────────────────────────────────────────────────
function ProductCard({ product }: { product: Product }) {
  return (
    <motion.div
      variants={cardVariant}
      className="group relative flex flex-col"
    >
      {/* Image */}
      <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-[#e6ede1]">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-cover transition-transform duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-105"
        />
        {/* Hover Add to Cart */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileHover={{ opacity: 1, y: 0 }}
          className="absolute bottom-0 inset-x-0 hidden group-hover:flex items-center justify-center pb-4"
        >
          <button
            className="bg-[#6a7c5a] text-white text-sm font-medium px-5 py-2 rounded-full shadow-lg
                       opacity-0 translate-y-3 transition-all duration-300 
                       group-hover:opacity-100 group-hover:translate-y-0"
          >
            أضف للسلة
          </button>
        </motion.div>
      </div>

      {/* Info */}
      <div className="mt-4 flex flex-col gap-1">
        <h3
          className="text-[#1a1a1a] text-base font-semibold leading-snug"
        >
          {product.name}
        </h3>
        <p
          className="text-stone-500 text-sm leading-relaxed"
        >
          {product.description}
        </p>
        <span
          className="text-[#6a7c5a] font-semibold text-sm mt-1"
        >
          {product.price}
        </span>
      </div>
    </motion.div>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────
export default function SkincareePage() {
  const [activeTab, setActiveTab] = useState("الكل");

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#fcfbf5" }}>
      {/* ── Hero Banner ──────────────────────────────────────────────────── */}
      <section
        className="px-4 sm:px-8 py-16 sm:py-24 text-center"
        style={{ backgroundColor: "#e6ede1" }}
      >
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="max-w-2xl mx-auto"
        >
          <span
            className="inline-block bg-white/70 text-[#6a7c5a] text-xs font-medium tracking-widest uppercase
                       px-4 py-2 rounded-full mb-6 border border-[#6a7c5a]/20"
          >
            جميع منتجات العناية بالبشرة
          </span>
          <h1
            className="text-5xl sm:text-6xl font-bold text-[#1a1a1a] mb-4"
          >
            العناية بالبشرة
          </h1>
          <p
            className="text-stone-500 text-lg leading-relaxed"
          >
            تركيبات نقية وطبيعية لبشرة مشرقة وصحية.
          </p>
        </motion.div>
      </section>

      {/* ── Filter Bar ───────────────────────────────────────────────────── */}
      <section className="sticky top-0 z-20 bg-[#fcfbf5]/90 backdrop-blur-sm border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="flex items-center gap-0 overflow-x-auto scrollbar-none">
            {TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative shrink-0 px-5 py-4 text-sm font-medium transition-colors duration-200
                  ${
                    activeTab === tab
                      ? "text-[#6a7c5a]"
                      : "text-stone-500 hover:text-[#1a1a1a]"
                  }`}
              >
                {tab}
                {activeTab === tab && (
                  <motion.div
                    layoutId="underline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#6a7c5a]"
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Products Grid ─────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 py-16">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8"
        >
          {PRODUCTS.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </motion.div>
      </section>

      {/* ── Featured Ingredient ───────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 py-16">
        <div className="rounded-3xl overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-0"
             style={{ backgroundColor: "#e6ede1" }}>
          {/* Text */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col justify-center px-8 sm:px-12 py-12 sm:py-16"
          >
            <span
              className="text-[#6a7c5a] text-xs font-semibold tracking-widest uppercase mb-4"
            >
              مكون مميز
            </span>
            <h2
              className="text-3xl sm:text-4xl font-bold text-[#1a1a1a] mb-6 leading-tight"
            >
              زيت ثمر الورد
            </h2>
            <p
              className="text-stone-600 text-base leading-relaxed mb-4"
            >
              يستخرج زيت ثمر الورد من بذور شجيرات الورد البري، وهو من أقوى المكونات الطبيعية لتجديد البشرة. غني بالفيتامينات أ، جـ، وهـ — بالإضافة إلى الأحماض الدهنية الأساسية — يقلل بشكل ملحوظ من الخطوط الدقيقة، يوحد لون البشرة، ويعيد لها مرونتها مع كل قطرة.
            </p>
            <p
              className="text-stone-600 text-base leading-relaxed"
            >
              يتم عصر ثمر الورد على البارد بطرق مستدامة في تشيلي، مما يحافظ على أقصى قدر من الفعالية مع احترام البيئة التي يأتي منها.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {["مكافحة الشيخوخة", "تفتيح", "ترطيب", "إخفاء الندبات"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="bg-white/60 text-[#6a7c5a] text-xs font-medium px-4 py-1.5 rounded-full border border-[#6a7c5a]/20"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative min-h-[320px] md:min-h-0"
          >
            <Image
              src="/images/verdant/rosehip_oil_spotlight.png"
              alt="Rosehip Oil ingredient spotlight"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-8 text-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-xl mx-auto"
        >
          <h2
            className="text-3xl sm:text-4xl font-bold text-[#1a1a1a] mb-4"
          >
            لست متأكداً من أين تبدأ؟
          </h2>
          <p
            className="text-stone-500 text-base mb-8"
          >
            أجب عن بعض الأسئلة وسنقوم ببناء روتين مخصص لنوع بشرتك واحتياجاتك الفريدة.
          </p>
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="bg-[#6a7c5a] text-white font-semibold text-sm tracking-wide
                       px-8 py-4 rounded-full hover:bg-[#5a6b4a] transition-colors duration-200"
          >
            قم باختبار البشرة
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
}


