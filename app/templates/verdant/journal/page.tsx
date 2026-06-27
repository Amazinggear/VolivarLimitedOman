"use client";

import { motion, Variants, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

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

const categories = [
  "الكل", "العناية بالبشرة", "العناية بالجسم", "العناية بالشعر", "العافية", "الاستدامة", "المكونات"
];

const posts = [
  {
    title: "٥ نباتات ستشكرك بشرتك عليها",
    category: "العناية بالبشرة",
    date: "مايو ٢٠٢٤",
    image: "/images/verdant/journal_post4.png",
    excerpt: "تعرفي على أفضل النباتات والمستخلصات الطبيعية التي تساعد في تغذية بشرتك وتجديد حيويتها."
  },
  {
    title: "فن الطقوس الصباحية البطيئة",
    category: "العافية",
    date: "أبريل ٢٠٢٤",
    image: "/images/verdant/skincare_hero.png",
    excerpt: "كيف يمكن لبدء يومك بهدوء وروية أن يحسن صحتك العقلية والجسدية بشكل مذهل."
  },
  {
    title: "فهم ثمر الورد: ريتينول الطبيعة",
    category: "المكونات",
    date: "أبريل ٢٠٢٤",
    image: "/images/verdant/journal_post1.png",
    excerpt: "اكتشف الفوائد السحرية لزيت ثمر الورد كبديل طبيعي وفعال لمنتجات الريتينول الصناعية."
  },
  {
    title: "كيف تختار زيت الجسم المناسب",
    category: "العناية بالجسم",
    date: "مارس ٢٠٢٤",
    image: "/images/verdant/journal_post2.png",
    excerpt: "دليلك الشامل لمعرفة أنواع زيوت الجسم واختيار الزيت المثالي الذي يتناسب مع نوع بشرتك."
  },
  {
    title: "الحقيقة حول ملصقات 'طبيعي'",
    category: "الاستدامة",
    date: "مارس ٢٠٢٤",
    image: "/images/verdant/journal_post3.png",
    excerpt: "ما الذي تعنيه حقاً عبارة 'طبيعي ١٠٠٪' على المنتجات وكيف تفرّق بينها وبين التسويق المضلل."
  },
  {
    title: "دليل خبير النباتات لزيوت الشعر",
    category: "العناية بالشعر",
    date: "فبراير ٢٠٢٤",
    image: "/images/verdant/rosemary_extract_spotlight.png",
    excerpt: "كل ما تحتاج لمعرفته عن الزيوت الطبيعية الفعالة للحصول على شعر قوي ولامع وصحي."
  }
];

export default function JournalPage() {
  const [activeCategory, setActiveCategory] = useState("الكل");
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubscribed(true);
  };

  return (
    <main className="min-h-screen bg-[#fcfbf5] text-[#1a1a1a] font-ar pt-24" dir="rtl">
      {/* Hero Section */}
      <section className="relative px-6 py-20 md:py-32 bg-[#e6ede1] overflow-hidden">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.h1 
            variants={fadeUp}
            className="text-5xl md:text-7xl font-bold mb-6 text-[#1a1a1a]"
          >
            مجلة فيردانت
          </motion.h1>
          <motion.p 
            variants={fadeUp}
            className="text-lg md:text-xl text-stone-700 max-w-2xl mx-auto"
          >
            رؤى، طقوس، وقصص من عالم الجمال الطبيعي.
          </motion.p>
        </motion.div>
      </section>

      {/* Featured Post */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="group block cursor-pointer"
          >
            <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-3xl overflow-hidden bg-stone-100 mb-8">
              <Image 
                src="/images/verdant/journal_hero.png"
                alt="Featured Post"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="max-w-3xl">
              <div className="flex items-center gap-4 mb-4">
                <span className="px-3 py-1 bg-[#6a7c5a] text-white text-xs font-medium rounded-full">
                  العناية بالبشرة
                </span>
                <span className="text-stone-500 text-sm">يونيو ٢٠٢٤</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 group-hover:text-[#6a7c5a] transition-colors">
                الدليل الشامل لبناء روتين مستدام للعناية بالبشرة
              </h2>
              <p className="text-stone-600 text-lg mb-6 leading-relaxed">
                اكتشف كيف يمكن للعناية ببشرتك أن تكون لطيفة على البيئة أيضاً. خطوات عملية لروتين جمال يعتمد على المكونات الطبيعية والمستدامة.
              </p>
              <div className="text-[#6a7c5a] font-medium inline-flex items-center gap-2">
                اقرأ المزيد <span dir="ltr">&larr;</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories Bar */}
      <section className="px-6 mb-12">
        <div className="max-w-7xl mx-auto border-y border-stone-200 py-4">
          <div className="flex overflow-x-auto gap-8 no-scrollbar pb-2 md:pb-0 whitespace-nowrap">
            {categories.map((cat, idx) => (
              <button 
                key={idx}
                onClick={() => setActiveCategory(cat)}
                className={`text-sm md:text-base font-medium transition-colors ${activeCategory === cat ? 'text-[#6a7c5a] border-b-2 border-[#6a7c5a] pb-1' : 'text-stone-500 hover:text-[#1a1a1a]'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {posts.map((post, idx) => (
              <motion.div 
                key={idx} 
                variants={fadeUp} 
                whileHover={{ y: -8 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-6 bg-stone-100 shadow-sm group-hover:shadow-lg transition-shadow duration-300">
                  <Image 
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 px-3 py-1 bg-[#6a7c5a] text-white text-xs font-medium rounded-full shadow-md z-10">
                    {post.category}
                  </div>
                </div>
                <div>
                  <span className="text-stone-500 text-sm block mb-2">{post.date}</span>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-[#6a7c5a] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-stone-600 text-sm mb-4 leading-relaxed line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="text-[#1a1a1a] font-medium inline-flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
                    اقرأ المقال <span dir="ltr" className="text-[#6a7c5a]">&larr;</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-24 px-6 bg-[#6a7c5a] text-white text-center">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              انضم لمجتمع فيردانت
            </h2>
            <p className="text-white/80 text-lg mb-10">
              اشترك في النشرة البريدية للحصول على أحدث النصائح، الطقوس، والعروض الحصرية مباشرة في صندوق الوارد الخاص بك.
            </p>

            <AnimatePresence mode="wait">
              {!subscribed ? (
                <motion.form 
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -20 }}
                  onSubmit={handleSubscribe}
                  className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                  <input 
                    type="email" 
                    placeholder="أدخل بريدك الإلكتروني"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-white/50 w-full sm:w-auto flex-grow max-w-sm"
                  />
                  <button 
                    type="submit"
                    className="px-8 py-4 bg-white text-[#6a7c5a] rounded-full font-medium text-lg hover:bg-[#fcfbf5] transition-colors duration-300 whitespace-nowrap shadow-lg"
                  >
                    اشترك
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white/10 border border-white/20 rounded-2xl p-6"
                >
                  <div className="w-16 h-16 bg-white text-[#6a7c5a] rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
                    ✓
                  </div>
                  <h3 className="text-2xl font-bold mb-2">شكراً لانضمامك!</h3>
                  <p className="text-white/80">لقد تم تسجيل بريدك الإلكتروني بنجاح.</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </main>
  );
}


