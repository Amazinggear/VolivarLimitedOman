"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const menuData = {
  coffee: [
    { id: 1, name: "إسبريسو أورورا", desc: "جرعة مزدوجة من حبوب أرابيكا المختصة والمحمصة بعناية.", price: "18 ر.س" },
    { id: 2, name: "فلات وايت", desc: "توازن مثالي بين الإسبريسو والحليب المبخر بقوام مخملي.", price: "22 ر.س" },
    { id: 3, name: "كيمكس (قهوة مقطرة)", desc: "تحضير يدوي يبرز إيحاءات الفواكه والشوكولاتة الداكنة.", price: "26 ر.س" },
    { id: 4, name: "كورتادو", desc: "جرعة إسبريسو مع كمية متساوية من الحليب المبخر.", price: "20 ر.س" },
  ],
  signature: [
    { id: 5, name: "أورورا الذهبي", desc: "مشروبنا الخاص الممزوج بالزعفران ورقائق الذهب الصالحة للأكل.", price: "45 ر.س" },
    { id: 6, name: "لاتيه الورد المقطر", desc: "إسبريسو مع حليب وماء الورد الجبلي المحضر محلياً.", price: "32 ر.س" },
    { id: 7, name: "كولد برو المدخن", desc: "قهوة باردة منقوعة لـ 24 ساعة ومبخرة بخشب البلوط.", price: "35 ر.س" },
  ],
  pastries: [
    { id: 8, name: "كرواسون الزبدة الفرنسي", desc: "مخبوز طازجاً كل صباح بـ 84 طبقة من العجين المورق.", price: "16 ر.س" },
    { id: 9, name: "تارت التوت البري", desc: "عجينة مقرمشة محشوة بكريمة اللوز والتوت الطازج.", price: "28 ر.س" },
    { id: 10, name: "كيكة العسل الروسية", desc: "طبقات رقيقة من الكيك الممزوج بعسل السدر الجبلي.", price: "34 ر.س" },
  ]
};

export default function MenuPage() {
  const [activeTab, setActiveTab] = useState<keyof typeof menuData>("coffee");

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <main className="py-20 px-6 md:px-16 min-h-[70vh] flex flex-col items-center">
      <motion.div 
        initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h1 className="text-[40px] md:text-[60px] font-bold text-white mb-4">
          قائمة <span className="text-[#C5A059]">التذوق</span>
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          نقدم تشكيلة مختارة بعناية من أجود أنواع القهوة المختصة والمخبوزات الطازجة. كل صنف يروي قصة شغفنا بالكمال.
        </p>
      </motion.div>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-16">
        {[
          { id: "coffee", label: "القهوة الكلاسيكية" },
          { id: "signature", label: "إبداعات أورورا" },
          { id: "pastries", label: "المخبوزات والحلويات" },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as keyof typeof menuData)}
            className={`px-8 py-3 rounded-full text-sm font-bold transition-all duration-300 ${
              activeTab === tab.id 
                ? "bg-[#C5A059] text-black shadow-[0_0_20px_rgba(197,160,89,0.3)]" 
                : "bg-white/5 text-gray-300 hover:bg-white/10"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Menu Grid */}
      <motion.div 
        key={activeTab} // triggers re-animation when tab changes
        initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-[1000px] mx-auto"
      >
        {menuData[activeTab].map((item) => (
          <motion.div 
            key={item.id} 
            variants={fadeUp}
            className="flex flex-col gap-2 p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#C5A059]/50 transition-colors duration-500 group"
          >
            <div className="flex justify-between items-baseline border-b border-white/10 pb-4 mb-2 border-dashed group-hover:border-[#C5A059]/50 transition-colors">
              <h3 className="text-xl font-bold text-white group-hover:text-[#C5A059] transition-colors">{item.name}</h3>
              <span className="text-[#C5A059] font-bold en-text tracking-wider">{item.price}</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </main>
  );
}
