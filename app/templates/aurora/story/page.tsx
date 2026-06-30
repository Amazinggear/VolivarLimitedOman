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
        initial={{ opacity: 0, scale: 0.95 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 1.5 }}
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

        {/* Section 3 */}
        <div className="flex flex-col md:flex-row items-center gap-16">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={textVariants}
            className="w-full md:w-1/2 flex flex-col gap-6"
          >
            <h2 className="text-[30px] font-bold text-white border-r-4 border-[#C5A059] pr-6">أجواء لا تُنسى</h2>
            <p className="text-gray-400 leading-relaxed text-lg text-justify">
              كل زاوية في أورورا مصممة لتمنحك شعوراً بالراحة والإلهام. الإضاءة الدافئة، الموسيقى الهادئة، ورائحة القهوة التي تملأ المكان تجعل من زيارتك تجربة حسية متكاملة، سواء كنت تبحث عن مكان للتركيز والعمل، أو للقاء الأصدقاء.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1 }}
            className="w-full md:w-1/2 h-[400px] relative rounded-3xl overflow-hidden group"
          >
            <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-700 z-10" />
            <Image src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=2000&auto=format&fit=crop" alt="Cafe Atmosphere" fill className="object-cover transform group-hover:scale-110 transition-transform duration-1000" />
          </motion.div>
        </div>

        {/* Timeline Section */}
        <div className="w-full mt-12 mb-12 relative">
          <h2 className="text-[32px] font-bold text-center text-white mb-16 relative z-10">مسيرتنا عبر الزمن</h2>
          
          {/* The Central/Right vertical line */}
          <div className="absolute right-6 md:right-1/2 top-24 bottom-6 w-0.5 bg-[#C5A059]/30 -translate-x-1/2 z-0" />

          {/* Timeline Items */}
          <div className="flex flex-col gap-16 relative z-10">
            
            {/* Milestone 1 */}
            <div className="flex flex-col md:flex-row items-start md:items-center relative">
              {/* The Dot Wrapper */}
              <span className="absolute right-6 md:right-1/2 w-0.5 h-5 -translate-x-1/2 z-20 flex items-center justify-center">
                <div className="w-5 h-5 rounded-full bg-[#C5A059] border-4 border-[#050505] shadow-[0_0_10px_#C5A059] shrink-0" />
              </span>
              
              {/* Content Card (Left on Desktop, Full on Mobile) */}
              <div className="w-full md:w-1/2 pr-12 md:pr-0 md:pl-16 text-right md:text-left order-2 md:order-1">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[#C5A059]/50 transition-colors duration-300">
                  <span className="text-[#C5A059] text-sm font-bold en-text">2018</span>
                  <h3 className="text-xl font-bold text-white mt-1 mb-2">تأسست عام ٢٠١٨</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    البداية المتواضعة في زاوية صغيرة من المدينة، بشغف لتقديم أفضل كوب قهوة محمص طازج في المنطقة.
                  </p>
                </div>
              </div>
              {/* Empty Space for Desktop (Right side) */}
              <div className="hidden md:block w-1/2 order-2" />
            </div>

            {/* Milestone 2 */}
            <div className="flex flex-col md:flex-row items-start md:items-center relative">
              {/* The Dot Wrapper */}
              <span className="absolute right-6 md:right-1/2 w-0.5 h-5 -translate-x-1/2 z-20 flex items-center justify-center">
                <div className="w-5 h-5 rounded-full bg-[#C5A059] border-4 border-[#050505] shadow-[0_0_10px_#C5A059] shrink-0" />
              </span>
              
              {/* Empty Space for Desktop (Left side) */}
              <div className="hidden md:block w-1/2 order-1" />
              
              {/* Content Card (Right on Desktop, Full on Mobile) */}
              <div className="w-full md:w-1/2 pr-12 md:pl-0 md:pr-16 text-right order-2">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[#C5A059]/50 transition-colors duration-300">
                  <span className="text-[#C5A059] text-sm font-bold en-text">2020</span>
                  <h3 className="text-xl font-bold text-white mt-1 mb-2">التوسع والنضج</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    افتتاح فرعنا الثاني المتميز والبدء في تحميص حبوبنا الخاصة في معملنا الخاص لضمان الجودة الفريدة.
                  </p>
                </div>
              </div>
            </div>

            {/* Milestone 3 */}
            <div className="flex flex-col md:flex-row items-start md:items-center relative">
              {/* The Dot Wrapper */}
              <span className="absolute right-6 md:right-1/2 w-0.5 h-5 -translate-x-1/2 z-20 flex items-center justify-center">
                <div className="w-5 h-5 rounded-full bg-[#C5A059] border-4 border-[#050505] shadow-[0_0_10px_#C5A059] shrink-0" />
              </span>
              
              {/* Content Card (Left on Desktop, Full on Mobile) */}
              <div className="w-full md:w-1/2 pr-12 md:pr-0 md:pl-16 text-right md:text-left order-2 md:order-1">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[#C5A059]/50 transition-colors duration-300">
                  <span className="text-[#C5A059] text-sm font-bold en-text">2022</span>
                  <h3 className="text-xl font-bold text-white mt-1 mb-2">مدرسة القهوة</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    إطلاق ورش عمل متخصصة لتدريب صانعي القهوة المبتدئين ونشر ثقافة القهوة المختصة في مجتمعنا.
                  </p>
                </div>
              </div>
              {/* Empty Space for Desktop (Right side) */}
              <div className="hidden md:block w-1/2 order-2" />
            </div>

            {/* Milestone 4 */}
            <div className="flex flex-col md:flex-row items-start md:items-center relative">
              {/* The Dot Wrapper */}
              <span className="absolute right-6 md:right-1/2 w-0.5 h-5 -translate-x-1/2 z-20 flex items-center justify-center">
                <div className="w-5 h-5 rounded-full bg-[#C5A059] border-4 border-[#050505] shadow-[0_0_10px_#C5A059] shrink-0" />
              </span>
              
              {/* Empty Space for Desktop (Left side) */}
              <div className="hidden md:block w-1/2 order-1" />
              
              {/* Content Card (Right on Desktop, Full on Mobile) */}
              <div className="w-full md:w-1/2 pr-12 md:pl-0 md:pr-16 text-right order-2">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[#C5A059]/50 transition-colors duration-300">
                  <span className="text-[#C5A059] text-sm font-bold en-text">2026</span>
                  <h3 className="text-xl font-bold text-white mt-1 mb-2">الرؤية المستقبلية</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    أن نكون الوجهة الأولى لعشاق القهوة في المنطقة مع الحفاظ على روح الشغف والابتكار المستمر.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Section 4: Quote */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 1 }}
          className="w-full py-20 relative text-center"
        >
          <div className="text-[150px] font-serif text-[#C5A059]/10 absolute top-0 left-1/2 -translate-x-1/2 leading-none pointer-events-none">&quot;</div>
          <p className="text-2xl md:text-4xl text-white font-bold leading-relaxed max-w-4xl mx-auto relative z-10">
            &quot;القهوة ليست مجرد مشروب، إنها لغة عالمية للتواصل, لحظة صفاء في عالم صاخب، وتجربة يجب أن تُعاش بكل حواسك.&quot;
          </p>
          <p className="mt-8 text-[#C5A059] font-bold tracking-wider">- المؤسس</p>
        </motion.div>

      </div>
    </main>
  );
}
