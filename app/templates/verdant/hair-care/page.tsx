"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";

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
      staggerChildren: 0.1,
    }
  }
};

const products = [
  {
    name: "ماسك الشعر العشبي",
    desc: "مزيج إكليل الجبل والنعناع",
    price: "٣٤.٠٠ دولار",
    image: "/images/verdant/herbal_hair_mask.png"
  },
  {
    name: "سيروم إحياء الفروة",
    desc: "النعناع الفلفلي وشجرة الشاي",
    price: "٤٢.٠٠ دولار",
    image: "/images/verdant/scalp_revival_serum.png"
  },
  {
    name: "زيت الشعر المغذي",
    desc: "مزيج الأرجان والجوجوبا",
    price: "٤٨.٠٠ دولار",
    image: "/images/verdant/nourishing_hair_oil.png"
  },
  {
    name: "شامبو نباتي",
    desc: "أساس الصبار واللافندر",
    price: "٢٨.٠٠ دولار",
    image: "/images/verdant/vegan_shampoo.png"
  },
  {
    name: "ماسك الترطيب العميق",
    desc: "زبدة الشيا وجوز الهند",
    price: "٣٦.٠٠ دولار",
    image: "/images/verdant/deep_hydration_mask.png"
  },
  {
    name: "إكسير يترك على الشعر",
    desc: "زيت الورد والكاميليا",
    price: "٥٢.٠٠ دولار",
    image: "/images/verdant/leave_in_elixir.png"
  }
];

const hairTypes = [
  { name: "جاف وتالف", icon: "💧" },
  { name: "فروة دهنية", icon: "🌿" },
  { name: "خفيف وضعيف", icon: "✨" },
  { name: "مجعد وملتف", icon: "〰️" }
];

export default function HairCarePage() {
  return (
    <main className="min-h-screen bg-[#fcfbf5] text-[#1a1a1a] font-ar pt-24" dir="rtl">
      {/* Hero Banner */}
      <section className="relative px-6 py-20 md:py-32 bg-gradient-to-b from-[#e6ede1] to-[#d4e0c9] overflow-hidden">
        <motion.div 
          className="max-w-4xl mx-auto text-center relative z-10"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.h1 
            variants={fadeUp}
            className="text-5xl md:text-7xl font-bold mb-6 text-[#1a1a1a]"
          >
            العناية بالشعر
          </motion.h1>
          <motion.p 
            variants={fadeUp}
            className="text-lg md:text-xl text-stone-700 max-w-2xl mx-auto"
          >
            تركيبات نباتية لتقوية وتغذية واستعادة الحيوية الطبيعية لشعرك.
          </motion.p>
        </motion.div>
      </section>

      {/* Products Grid */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {products.map((product, idx) => (
              <motion.div key={idx} variants={fadeUp} className="group cursor-pointer">
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden mb-6 bg-stone-100">
                  <Image 
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                  
                  {/* Add to Cart Hover Button */}
                  <div className="absolute bottom-4 left-4 right-4 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <button className="w-full py-3 bg-white text-[#1a1a1a] rounded-xl font-medium shadow-lg hover:bg-[#6a7c5a] hover:text-white transition-colors duration-300">
                      أضف للسلة
                    </button>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">
                    {product.name}
                  </h3>
                  <p className="text-stone-500 text-sm mb-2">{product.desc}</p>
                  <p className="text-[#6a7c5a] font-medium">{product.price}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Hair Type Finder Section */}
      <section className="py-24 px-6 bg-[#f5f2ea]">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              اكتشف ما يناسب شعرك
            </h2>
            <p className="text-stone-500 max-w-lg mx-auto">
              لست متأكداً من أين تبدأ؟ اختر نوع شعرك أدناه للحصول على توصيات نباتية مخصصة لك.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {hairTypes.map((type, idx) => (
              <motion.div 
                key={idx}
                variants={fadeUp}
                className="bg-white p-8 rounded-2xl text-center shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="text-4xl mb-6">{type.icon}</div>
                <h3 className="text-xl font-semibold mb-6">
                  {type.name}
                </h3>
                <button className="text-[#6a7c5a] font-medium hover:text-[#5a6a4c] transition-colors inline-flex items-center gap-2">
                  تسوق لي <span dir="ltr">&larr;</span>
                </button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Ingredient Spotlight */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
            <motion.div 
              className="w-full md:w-1/2"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] } }}
              viewport={{ once: true }}
            >
              <div className="relative aspect-square md:aspect-[4/5] rounded-3xl overflow-hidden bg-gradient-to-br from-[#e6ede1] to-[#6a7c5a]/20">
                <Image 
                  src="/images/verdant/rosemary_extract_spotlight.png"
                  alt="Rosemary Extract"
                  fill
                  className="object-cover mix-blend-multiply opacity-80"
                />
              </div>
            </motion.div>
            <motion.div 
              className="w-full md:w-1/2"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] } }}
              viewport={{ once: true }}
            >
              <span className="text-[#6a7c5a] font-semibold tracking-wider text-sm uppercase mb-4 block">
                تسليط الضوء على المكونات
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                قوة مستخلص إكليل الجبل
              </h2>
              <p className="text-stone-600 text-lg leading-relaxed mb-8">
                يحظى مستخلص إكليل الجبل بالتقدير لقرون في طب الأعشاب التقليدي، فهو ينشط الدورة الدموية في فروة الرأس، مما يعزز نمو شعر أقوى وأكثر كثافة. يتم استخلاص إكليل الجبل الخاص بنا على البارد للحفاظ على عناصره الغذائية الفعالة.
              </p>
              <button className="px-8 py-4 bg-[#1a1a1a] text-white rounded-full font-medium hover:bg-[#6a7c5a] transition-colors duration-300">
                استكشف مجموعة إكليل الجبل
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 bg-[#6a7c5a] text-white text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-3xl mx-auto"
        >
          <motion.h2 
            variants={fadeUp} 
            className="text-4xl md:text-6xl font-bold mb-8"
          >
            غيّر روتين العناية بشعرك
          </motion.h2>
          <motion.button 
            variants={fadeUp}
            className="px-8 py-4 bg-white text-[#6a7c5a] rounded-full font-medium text-lg hover:bg-[#fcfbf5] transition-colors duration-300"
          >
            تسوق جميع منتجات العناية بالشعر
          </motion.button>
        </motion.div>
      </section>
    </main>
  );
}


