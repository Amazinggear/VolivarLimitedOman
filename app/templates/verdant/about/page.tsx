"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { Leaf, Shield, Rabbit } from "lucide-react";

// In RTL, "Start" is Right and "End" is Left.
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

export default function AboutPage() {
  return (
    <div className="w-full" dir="rtl">
      {/* ── HERO SECTION ── */}
      <section className="pt-32 pb-24 bg-gradient-to-b from-[#e6ede1] to-[#fcfbf5] px-5">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            <h1 
              className="text-4xl md:text-6xl font-bold text-[#1a1a1a] mb-6 leading-tight"
            >
              متجذرون في الطبيعة.<br />مدعومون بالعلم.
            </h1>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto leading-relaxed">
              تبدأ قصتنا بإيمان بسيط: أن أقوى مكونات العناية بالبشرة وأكثرها فعالية موجودة بالفعل في الطبيعة. كان علينا فقط اكتشافها.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── OUR STORY ── */}
      <section className="py-24 bg-[#fcfbf5]">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInStart}
            >
              <h2 
                className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-6"
              >
                كيف بدأنا
              </h2>
              <div className="space-y-6 text-stone-600 leading-relaxed text-lg">
                <p>
                  وُلدت ڤيردانت أورجانيك من رحم المعاناة. بعد سنوات من النضال مع البشرة الحساسة وعدم العثور على شيء سوى المواد الكيميائية القاسية أو المنتجات &quot;الطبيعية&quot; غير الفعالة على الرفوف، قرر مؤسسونا ابتكار ما لم يتمكنوا من العثور عليه.
                </p>
                <p>
                  أمضينا ثلاث سنوات في العمل جنباً إلى جنب مع كيميائيين نباتيين وأطباء جلدية لتطوير طرق الاستخلاص الخاصة بنا. النتيجة؟ عناية بالبشرة تقدم نتائج مرئية دون المساومة على النقاء أو المعايير الأخلاقية.
                </p>
                <p>
                  اليوم، نواصل تركيب كل منتج داخلياً، لضمان عدم المساومة على معاييرنا الصارمة، من البذرة إلى السيروم.
                </p>
              </div>
            </motion.div>
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInEnd}
              className="relative aspect-square lg:aspect-[4/5] rounded-2xl overflow-hidden"
            >
              <Image
                src="/images/verdant/about_hero.png"
                alt="المكونات النباتية"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── OUR VALUES ── */}
      <section className="py-24 bg-[#f5f2ea]">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="text-center mb-16"
          >
            <h2 
              className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-4"
            >
              قيمنا الأساسية
            </h2>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: <Leaf className="w-8 h-8 text-[#6a7c5a]" />,
                title: "الأرض أولاً",
                desc: "تغليف قابل لإعادة التدوير بنسبة 100٪، شحن محايد للكربون، وشراكات زراعية متجددة."
              },
              {
                icon: <Shield className="w-8 h-8 text-[#6a7c5a]" />,
                title: "نزاهة المكونات",
                desc: "خالي تماماً من البارابين، والكبريتات، والعطور الاصطناعية، والألوان الصناعية. دائماً وأبداً."
              },
              {
                icon: <Rabbit className="w-8 h-8 text-[#6a7c5a]" />,
                title: "خالي من القسوة",
                desc: "معتمدون من Leaping Bunny ونباتيون بكل فخر. نختبر منتجاتنا على أنفسنا، ولا نختبرها أبداً على الحيوانات."
              }
            ].map((val, idx) => (
              <motion.div key={idx} variants={fadeUp} className="bg-white p-10 rounded-2xl text-center shadow-sm">
                <div className="w-16 h-16 rounded-full bg-[#fcfbf5] flex items-center justify-center mx-auto mb-6">
                  {val.icon}
                </div>
                <h3 className="text-xl font-bold text-[#1a1a1a] mb-4">
                  {val.title}
                </h3>
                <p className="text-stone-600 text-sm leading-relaxed">
                  {val.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── MEET THE FOUNDERS ── */}
      <section className="py-24 bg-[#fcfbf5]">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10">
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="text-3xl md:text-4xl font-bold text-center text-[#1a1a1a] mb-16"
          >
            تعرفوا على المؤسسين
          </motion.h2>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto"
          >
            <motion.div variants={fadeUp} className="group">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden mb-6">
                <Image
                  src="/images/verdant/emma_hartley.png"
                  alt="إيما هارتلي"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <h3 className="text-2xl font-bold text-[#1a1a1a] mb-1">
                إيما هارتلي
              </h3>
              <p className="text-[#6a7c5a] font-medium text-sm mb-4">الشريك المؤسس ومسؤولة التركيبات</p>
              <p className="text-stone-600 text-sm leading-relaxed">
                بفضل خلفيتها في الكيمياء النباتية، تقود إيما عمليات تطوير المنتجات، لضمان أن تكون كل تركيبة لطيفة وفعالة على حد سواء.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="group">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden mb-6">
                <Image
                  src="/images/verdant/james_verdant.png"
                  alt="جيمس ڤيردانت"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <h3 className="text-2xl font-bold text-[#1a1a1a] mb-1">
                جيمس ڤيردانت
              </h3>
              <p className="text-[#6a7c5a] font-medium text-sm mb-4">الشريك المؤسس وعالم النبات</p>
              <p className="text-stone-600 text-sm leading-relaxed">
                يشرف جيمس على برنامج المصادر الأخلاقية الخاص بنا، حيث يجوب العالم لعقد شراكات مع المزارعين العضويين والتعاونيات المستدامة.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── CERTIFICATIONS ── */}
      <section className="py-16 border-t border-stone-200 bg-[#fcfbf5]">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10">
          <div className="flex flex-wrap justify-center gap-6 md:gap-12">
            {["عضوي معتمد من USDA", "شهادة Leaping Bunny", "معتمد من EWG", "شركة B Corp معتمدة"].map((cert, idx) => (
              <div key={idx} className="bg-stone-100 px-6 py-4 rounded-lg flex items-center justify-center">
                <span className="font-bold text-stone-500 text-sm tracking-wider uppercase">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="py-24 bg-[#6a7c5a] text-center px-5"
      >
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="max-w-2xl mx-auto"
        >
          <h2 
            className="text-3xl md:text-5xl font-bold text-white mb-6"
          >
            ابدئي رحلتكِ الطبيعية
          </h2>
          <p className="text-[#e6ede1] mb-10 text-lg">
            اختبري الفرق مع العناية بالبشرة النباتية النقية وعالية الفعالية.
          </p>
          <Link 
            href="/templates/verdant/skincare"
            className="inline-block bg-white text-[#6a7c5a] px-10 py-4 rounded-full font-bold hover:bg-[#fcfbf5] transition-colors shadow-lg hover:shadow-xl"
          >
            تسوقي المجموعة
          </Link>
        </motion.div>
      </motion.section>
    </div>
  );
}


