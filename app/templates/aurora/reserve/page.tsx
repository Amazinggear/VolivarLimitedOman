"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, Users, Coffee, ChevronDown } from "lucide-react";
import { useState } from "react";

export default function ReservePage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <main className="min-h-[85vh] py-20 px-6 md:px-16 flex items-center justify-center relative">
      {/* Background Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#C5A059]/5 rounded-full blur-[150px] pointer-events-none z-0" />

      <motion.div 
        initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
        className="w-full max-w-[1000px] bg-[#0A0A0A]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-16 relative z-10 flex flex-col md:flex-row gap-16 shadow-2xl"
      >
        {/* Info Side */}
        <div className="w-full md:w-5/12 flex flex-col justify-center">
          <Coffee className="w-12 h-12 text-[#C5A059] mb-8" />
          <h1 className="text-[36px] md:text-[48px] font-bold text-white mb-6 leading-tight">
            احجز <span className="text-[#C5A059]">طاولتك</span> لتجربة استثنائية
          </h1>
          <p className="text-gray-400 mb-10 leading-relaxed text-lg">
            نسعد باستقبالك في مساحتنا الراقية. الرجاء إكمال النموذج لتأكيد حجزك، وسنقوم بتجهيز كل شيء لراحتك.
          </p>
          <div className="space-y-4 text-gray-300 text-sm">
            <p className="flex items-center gap-3"><Clock className="w-5 h-5 text-[#C5A059]"/> نرجو الحضور قبل الموعد بـ 10 دقائق.</p>
            <p className="flex items-center gap-3"><Users className="w-5 h-5 text-[#C5A059]"/> للحجوزات لأكثر من 6 أشخاص، يرجى التواصل هاتفياً.</p>
          </div>
        </div>

        {/* Form Side */}
        <div className="w-full md:w-7/12">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-gray-400 text-sm">الاسم الكريم</label>
                  <input required type="text" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-[#C5A059] transition-colors" placeholder="مثال: أحمد عبد الله" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-gray-400 text-sm">رقم الجوال</label>
                  <input required type="tel" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-[#C5A059] transition-colors text-right en-text" placeholder="+966 5X XXX XXXX" dir="ltr" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-gray-400 text-sm">التاريخ</label>
                  <div className="relative aurora-input-wrapper">
                    <Calendar className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 pointer-events-none" />
                    <input required type="date" className="bg-white/5 border border-white/10 rounded-xl pr-12 pl-4 py-3.5 text-white focus:outline-none focus:border-[#C5A059] transition-colors w-full" />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-gray-400 text-sm">الوقت</label>
                  <div className="relative aurora-input-wrapper">
                    <Clock className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 pointer-events-none" />
                    <input required type="time" className="bg-white/5 border border-white/10 rounded-xl pr-12 pl-4 py-3.5 text-white focus:outline-none focus:border-[#C5A059] transition-colors w-full en-text" />
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-gray-400 text-sm">عدد الأشخاص</label>
                <div className="relative w-full">
                  <select required className="bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-[#C5A059] transition-colors appearance-none w-full">
                    <option value="1">شخص واحد</option>
                    <option value="2">شخصين</option>
                    <option value="3">3 أشخاص</option>
                    <option value="4">4 أشخاص</option>
                    <option value="5">5 أشخاص</option>
                    <option value="6">6 أشخاص</option>
                  </select>
                  <ChevronDown className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 pointer-events-none" />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-gray-400 text-sm">ملاحظات إضافية (اختياري)</label>
                <textarea rows={3} className="bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-[#C5A059] transition-colors resize-none" placeholder="مثال: حساسية من نوع معين، احتفال بمناسبة..."></textarea>
              </div>

              <button type="submit" className="w-full mt-4 bg-[#C5A059] text-black font-bold text-lg py-4 rounded-xl hover:bg-[#b08d30] transition-colors shadow-[0_0_30px_rgba(197,160,89,0.3)] hover:shadow-[0_0_40px_rgba(197,160,89,0.5)]">
                تأكيد الحجز
              </button>
            </form>
          ) : (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
              className="h-full flex flex-col items-center justify-center text-center space-y-6 bg-white/5 rounded-2xl p-10 border border-[#C5A059]/30"
            >
              <div className="w-24 h-24 rounded-full bg-[#C5A059]/20 flex items-center justify-center">
                <Coffee className="w-12 h-12 text-[#C5A059]" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">تم استلام طلبك بنجاح!</h3>
                <p className="text-gray-400">سنتواصل معك قريباً لتأكيد الحجز النهائي. شكراً لاختيارك أورورا.</p>
              </div>
              <button onClick={() => setIsSubmitted(false)} className="text-[#C5A059] underline text-sm mt-4">إجراء حجز آخر</button>
            </motion.div>
          )}
        </div>

      </motion.div>
    </main>
  );
}
