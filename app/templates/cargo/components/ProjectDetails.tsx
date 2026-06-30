"use client";

import { motion } from "framer-motion";

export default function ProjectDetails() {
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } },
  };

  return (
    <section className="py-24 md:py-32 bg-white text-black px-6 md:px-12 max-w-7xl mx-auto">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-12 gap-12"
      >
        
        {/* Left Column - Details */}
        <div className="md:col-span-4 flex flex-col gap-8">
          <motion.div variants={itemVariants}>
            <h4 className="text-sm text-neutral-600 uppercase tracking-widest mb-2 font-black">العميل</h4>
            <p className="text-lg font-bold text-neutral-900">عائلة سيمون</p>
          </motion.div>
          <motion.div variants={itemVariants}>
            <h4 className="text-sm text-neutral-600 uppercase tracking-widest mb-2 font-black">النوع</h4>
            <p className="text-lg font-bold text-neutral-900">سكني / تجديد شامل</p>
          </motion.div>
          <motion.div variants={itemVariants}>
            <h4 className="text-sm text-neutral-600 uppercase tracking-widest mb-2 font-black">السنة</h4>
            <p className="text-lg font-bold text-neutral-900">2024</p>
          </motion.div>
          <motion.div variants={itemVariants}>
            <h4 className="text-sm text-neutral-600 uppercase tracking-widest mb-2 font-black">المساحة</h4>
            <p className="text-lg font-bold text-neutral-900">1,200 قدم مربع</p>
          </motion.div>
        </div>

        {/* Right Column - Description */}
        <div className="md:col-span-8">
          <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl font-black mb-10 leading-tight text-neutral-900">
            مبنى سكني منحوت للاستفادة القصوى من الموقع والضوء، في حوار سلس مع النسيج الحضري.
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg md:text-xl text-neutral-800 font-medium leading-loose">
            يهدف هذا المشروع إلى إعادة تصور مساحة المعيشة الحضرية من خلال إدخال عناصر طبيعية وخطوط منحنية تكسر جمود العمارة التقليدية. تم تصميم "شقة إليبس" لتكون ملاذاً هادئاً يدمج بين الوظيفة والجمال، حيث تلعب الإضاءة الطبيعية الدور الأهم في إبراز تفاصيل المواد المستخدمة كالأخشاب الدافئة والخرسانة المصقولة.
          </motion.p>
        </div>

      </motion.div>
    </section>
  );
}
