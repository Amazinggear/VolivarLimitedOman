"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";

export default function StoryPage() {
  const textVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  return (
    <main className="min-h-screen py-20 px-6 md:px-16 flex flex-col items-center overflow-hidden">
      
      {/* Hero Title */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.5 }}
        className="text-center mb-24 mt-10 relative"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#C5A059]/10 rounded-full blur-[100px] pointer-events-none" />
        <h1 className="text-[50px] md:text-[80px] font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#FFF] to-[#C5A059] mb-6 relative z-10">
          بداية الحكاية
        </h1>
        <p className="text-[#C5A059] tracking-[0.2em] uppercase text-sm font-bold en-text">Est. 2018</p>
      </motion.div>

      {/* Story Sections */}
      <div className="max-w-[1200px] mx-auto w-full flex flex-col gap-32">
        
        {/* Section 1 */}
        <div className="flex flex-col md:flex-row items-center gap-16">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={textVariants}
            className="w-full md:w-1/2 flex flex-col gap-6"
          >
            <h2 className="text-[30px] font-bold text-white border-r-4 border-[#C5A059] pr-6">شغف وُلد من رحلة</h2>
            <p className="text-gray-400 leading-relaxed text-lg text-justify">
              لم تكن أورورا مجرد فكرة لمقهى عابر، بل كانت حصيلة رحلة طويلة في جبال أمريكا اللاتينية وحقول البن في إثيوبيا. بحثنا عن تلك الحبة المثالية التي لا تقدم فقط جرعة كافيين، بل تروي قصة الأرض التي زُرعت فيها، والأيدي التي قطفتها.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1 }}
            className="w-full md:w-1/2 h-[400px] relative rounded-3xl overflow-hidden group"
          >
            <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-700 z-10" />
            <Image src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=2000&auto=format&fit=crop" alt="Coffee Farm" fill className="object-cover transform group-hover:scale-110 transition-transform duration-1000" />
          </motion.div>
        </div>

        {/* Section 2 (Reverse) */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-16">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={textVariants}
            className="w-full md:w-1/2 flex flex-col gap-6"
          >
            <h2 className="text-[30px] font-bold text-white border-r-4 border-[#C5A059] pr-6">فن التحميص</h2>
            <p className="text-gray-400 leading-relaxed text-lg text-justify">
              نؤمن بأن التحميص هو فن استخراج الروح الحقيقية للقهوة. في معملنا، نستخدم أحدث المحامص المتطورة مع لمسة بشرية خبيرة لتحديد اللحظة الدقيقة التي تتحول فيها الحبة الخضراء إلى كنز عطري يحمل نوتات الشوكولاتة، الكراميل، أو الأزهار البرية.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1 }}
            className="w-full md:w-1/2 h-[400px] relative rounded-3xl overflow-hidden group"
          >
            <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-700 z-10" />
            <Image src="https://images.unsplash.com/photo-1611162458324-aae1eb4129a4?q=80&w=2000&auto=format&fit=crop" alt="Coffee Roasting" fill className="object-cover transform group-hover:scale-110 transition-transform duration-1000" />
          </motion.div>
        </div>

        {/* Section 3: Quote */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }}
          className="w-full py-20 relative text-center"
        >
          <div className="text-[150px] font-serif text-[#C5A059]/10 absolute top-0 left-1/2 -translate-x-1/2 leading-none pointer-events-none">&quot;</div>
          <p className="text-2xl md:text-4xl text-white font-bold leading-relaxed max-w-4xl mx-auto relative z-10">
            &quot;القهوة ليست مجرد مشروب، إنها لغة عالمية للتواصل، لحظة صفاء في عالم صاخب، وتجربة يجب أن تُعاش بكل حواسك.&quot;
          </p>
          <p className="mt-8 text-[#C5A059] font-bold tracking-wider">- المؤسس</p>
        </motion.div>

      </div>
    </main>
  );
}
