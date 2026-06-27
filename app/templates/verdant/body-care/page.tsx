"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";

// ─── Variants ──────────────────────────────────────────────────────────────
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
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
interface Product {
  name: string;
  description: string;
  price: string;
  image: string;
}

const PRODUCTS: Product[] = [
  {
    name: "غسول الجسم النباتي",
    description: "أوكالبتوس ونعناع لإنعاش حواسك",
    price: "$42.00",
    image:
      "/images/verdant/vegan_body_wash.png",
  },
  {
    name: "زيت الجسم المغذي",
    description: "ترطيب عميق ولمعان طبيعي",
    price: "$56.00",
    image:
      "/images/verdant/nourishing_body_oil.png",
  },
  {
    name: "زبدة الجسم بالشيا",
    description: "تغذية غنية للبشرة الجافة",
    price: "$68.00",
    image:
      "/images/verdant/shea_body_butter.png",
  },
  {
    name: "مقشر الجسم",
    description: "تجديد وتنعيم البشرة بلطف",
    price: "$34.00",
    image:
      "/images/verdant/body_scrub.png",
  },
  {
    name: "أملاح الاستحمام المهدئة",
    description: "استرخاء وهدوء بعد يوم طويل",
    price: "$45.00",
    image:
      "/images/verdant/bath_salts.png",
  },
  {
    name: "كريم القدمين الملطف",
    description: "عناية فائقة وراحة للقدمين",
    price: "$28.00",
    image:
      "/images/verdant/foot_cream.png",
  },
];

// ─── Icons ──────────────────────────────────────────────────────────────────
const DropletIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
  </svg>
);
const HeartIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);
const ShieldIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

// ─── Product Card ────────────────────────────────────────────────────────────
function ProductCard({ product }: { product: Product }) {
  return (
    <motion.div
      variants={cardVariant}
      className="group relative flex flex-col text-right font-ar"
      dir="rtl"
    >
      <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-[#e6ede1]">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 33vw"
          className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-105"
        />
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileHover={{ opacity: 1, y: 0 }}
          className="absolute bottom-0 inset-x-0 hidden group-hover:flex items-center justify-center pb-4"
        >
          <button className="bg-[#6a7c5a] text-white text-sm font-medium px-5 py-2 rounded-full shadow-lg font-ar opacity-0 translate-y-3 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
            أضف إلى السلة
          </button>
        </motion.div>
      </div>

      <div className="mt-4 flex flex-col gap-1 px-1">
        <h3
          className="text-[#1a1a1a] text-lg font-semibold leading-snug font-ar"
        >
          {product.name}
        </h3>
        <p
          className="text-stone-500 text-sm leading-relaxed font-ar"
        >
          {product.description}
        </p>
        <span
          className="text-[#6a7c5a] font-semibold text-sm mt-1 font-ar"
        >
          {product.price}
        </span>
      </div>
    </motion.div>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────
export default function BodyCarePage() {
  return (
    <div
      className="min-h-screen font-ar"
      style={{ backgroundColor: "#fcfbf5" }}
      dir="rtl"
    >
      {/* ── Hero Banner ──────────────────────────────────────────────────── */}
      <section
        className="px-4 sm:px-8 py-20 sm:py-28 text-center"
        style={{ backgroundColor: "#e6ede1" }}
      >
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="max-w-2xl mx-auto flex flex-col items-center"
        >
          <h1
            className="text-5xl sm:text-6xl font-bold text-[#1a1a1a] mb-6 font-ar"
          >
            العناية بالجسم
          </h1>
          <p
            className="text-stone-600 text-lg sm:text-xl leading-relaxed font-ar max-w-lg"
          >
            طقوس مغذية لجسمك، مصممة ببراعة نباتية.
          </p>
        </motion.div>
      </section>

      {/* ── Featured Banner (Full Width) ─────────────────────────────────── */}
      <section className="relative w-full h-[50vh] min-h-[400px]">
        <Image
          src="/images/verdant/bodycare_hero.png"
          alt="The Ritual Collection"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#6a7c5a]/60" />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4 text-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <h2
              className="text-4xl sm:text-5xl font-bold mb-6 font-ar"
            >
              مجموعة الطقوس
            </h2>
            <button className="bg-white text-[#6a7c5a] px-8 py-3 rounded-full font-semibold text-sm hover:bg-[#fcfbf5] transition-colors font-ar">
              استكشف المجموعة
            </button>
          </motion.div>
        </div>
      </section>

      {/* ── Products Grid ─────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 py-20">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-10 sm:gap-x-8 sm:gap-y-12"
        >
          {PRODUCTS.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </motion.div>
      </section>

      {/* ── The Verdant Ritual Section ───────────────────────────────────── */}
      <section
        className="py-20 px-4 sm:px-8"
        style={{ backgroundColor: "#f5f2ea" }}
      >
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2
              className="text-3xl sm:text-4xl font-bold text-[#1a1a1a] mb-4 font-ar"
            >
              طقوس فيردانت
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-10"
          >
            <motion.div
              variants={cardVariant}
              className="flex flex-col items-center"
            >
              <div className="w-16 h-16 rounded-full bg-[#e6ede1] text-[#6a7c5a] flex items-center justify-center mb-6">
                <DropletIcon />
              </div>
              <h3
                className="text-xl font-bold text-[#1a1a1a] mb-3 font-ar"
              >
                1. تنظيف
              </h3>
              <p className="text-stone-500 text-center font-ar max-w-xs">
                إزالة الشوائب بلطف لتجهيز البشرة لاستقبال التغذية.
              </p>
            </motion.div>

            <motion.div
              variants={cardVariant}
              className="flex flex-col items-center"
            >
              <div className="w-16 h-16 rounded-full bg-[#e6ede1] text-[#6a7c5a] flex items-center justify-center mb-6">
                <HeartIcon />
              </div>
              <h3
                className="text-xl font-bold text-[#1a1a1a] mb-3 font-ar"
              >
                2. تغذية
              </h3>
              <p className="text-stone-500 text-center font-ar max-w-xs">
                ترطيب عميق باستخدام زيوت نباتية ومستخلصات غنية.
              </p>
            </motion.div>

            <motion.div
              variants={cardVariant}
              className="flex flex-col items-center"
            >
              <div className="w-16 h-16 rounded-full bg-[#e6ede1] text-[#6a7c5a] flex items-center justify-center mb-6">
                <ShieldIcon />
              </div>
              <h3
                className="text-xl font-bold text-[#1a1a1a] mb-3 font-ar"
              >
                3. حماية
              </h3>
              <p className="text-stone-500 text-center font-ar max-w-xs">
                حفظ الرطوبة وبناء حاجز طبيعي ضد العوامل الخارجية.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className="py-24 px-4 sm:px-8 text-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-xl mx-auto flex flex-col items-center"
        >
          <h2
            className="text-3xl sm:text-4xl font-bold text-[#1a1a1a] mb-8 font-ar leading-tight"
          >
            أكمل روتين العناية بجسمك
          </h2>
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="bg-[#6a7c5a] text-white font-semibold text-lg px-8 py-4 rounded-full hover:bg-[#5a6b4a] transition-colors duration-300 shadow-lg font-ar"
          >
            تسوق جميع المنتجات
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
}


