"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Mail, Phone } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <>
      {/* Pre-Footer CTA */}
      <section className="py-16 sm:py-20 md:py-[120px] px-4 sm:px-5 md:px-20 relative bg-primary-container overflow-hidden">
        {/* Abstract background shapes */}
        <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-[100px] sm:-top-[200px] -right-[100px] sm:-right-[200px] w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-white/10 rounded-full blur-[60px] sm:blur-[100px]" />
          <div className="absolute -bottom-[100px] sm:-bottom-[200px] -left-[100px] sm:-left-[200px] w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-black/20 rounded-full blur-[60px] sm:blur-[100px]" />
        </div>

        <div className="max-w-[1280px] mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 md:gap-10">
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-right"
          >
            <h2 className="text-[28px] sm:text-[36px] md:text-[48px] font-black mb-3 sm:mb-4 text-on-primary-container">
              مستعد لإطلاق موقعك؟
            </h2>
            <p className="text-[15px] sm:text-[18px] md:text-[20px] text-on-primary-container/80 max-w-xl">
              لا تدع منافسيك يسبقونك. ابدأ رحلتك الرقمية اليوم واحصل على موقع احترافي خلال 72 ساعة.
            </p>
          </motion.div>

          <motion.a 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            href="https://wa.me/96894789593"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center justify-center gap-2 sm:gap-3 bg-on-primary-container text-primary-container font-black text-[16px] sm:text-[18px] md:text-[20px] px-7 sm:px-10 py-4 sm:py-5 rounded-full hover:scale-105 transition-transform duration-300 shadow-[0_20px_40px_rgba(0,0,0,0.2)] min-h-[48px] shrink-0"
          >
            تواصل معنا الآن
            <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6 group-hover:-translate-x-2 transition-transform" />
          </motion.a>
        </div>
      </section>

      {/* Main Footer */}
      <footer className="bg-[#050505] w-full pt-12 sm:pt-16 md:pt-20 pb-24 sm:pb-12 md:pb-10 border-t border-white/5 relative overflow-hidden">
        {/* Subtle glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] sm:w-[800px] h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200px] sm:w-[400px] h-[100px] sm:h-[200px] bg-primary/5 blur-[60px] sm:blur-[100px] rounded-full pointer-events-none" />

        <div className="max-w-[1280px] mx-auto px-4 sm:px-5 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12 mb-10 sm:mb-12 md:mb-16">
            {/* Brand */}
            <div className="flex flex-col items-center md:items-start text-center md:text-right">
              <motion.a 
                whileHover={{ scale: 1.05 }}
                href="#" 
                className="mb-4 sm:mb-6"
              >
                <div className="relative w-60 h-16 overflow-hidden">
                  <Image src="/logo.png" alt="Volivar Logo" fill sizes="240px" className="object-contain logo-zoom" />
                </div>
              </motion.a>
              <p className="text-[14px] sm:text-[16px] text-gray-400 leading-relaxed max-w-sm">
                نبني تجارب رقمية استثنائية للعلامات التجارية الطموحة. جودة لا تُضاهى وسرعة تفوق التوقعات.
              </p>
            </div>

            {/* Quick Links */}
            <div className="flex flex-col items-center md:items-start text-center md:text-right">
              <h3 className="text-[18px] sm:text-[20px] font-bold text-white mb-4 sm:mb-6">روابط سريعة</h3>
              <ul className="flex flex-col gap-3 sm:gap-4 text-[14px] sm:text-[16px]">
                <li><a className="text-gray-400 hover:text-primary hover:translate-x-2 transition-all inline-block" href="#how-it-works">كيف نعمل</a></li>
                <li><a className="text-gray-400 hover:text-primary hover:translate-x-2 transition-all inline-block" href="#templates">النماذج المتاحة</a></li>
                <li><a className="text-gray-400 hover:text-primary hover:translate-x-2 transition-all inline-block" href="#pricing">الباقات والأسعار</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div className="flex flex-col items-center md:items-start text-center md:text-right">
              <h3 className="text-[18px] sm:text-[20px] font-bold text-white mb-4 sm:mb-6">تواصل معنا</h3>
              <ul className="flex flex-col gap-3 sm:gap-4 text-[14px] sm:text-[16px]">
                <li>
                  <a className="text-gray-400 hover:text-primary transition-colors flex items-center gap-3 justify-center md:justify-start" href="https://wa.me/96894789593" target="_blank" rel="noreferrer" dir="ltr">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="en-text">+968 9478 9593</span>
                  </a>
                </li>
                <li>
                  <a className="text-gray-400 hover:text-primary transition-colors flex items-center gap-3 justify-center md:justify-start" href="mailto:hello@volivar.com" dir="ltr">
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="en-text">hello@volivar.com</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-6 sm:pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4 text-center">
            <p className="text-[13px] sm:text-[15px] text-gray-500" suppressHydrationWarning>© {new Date().getFullYear()} Volivar. جميع الحقوق محفوظة.</p>
            <div className="flex gap-4 sm:gap-6 text-[13px] sm:text-[15px]">
              <a href="#" className="text-gray-500 hover:text-white transition-colors">سياسة الخصوصية</a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors">الشروط والأحكام</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
