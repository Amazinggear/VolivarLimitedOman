"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Mail, Phone } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <>
      {/* Pre-Footer CTA */}
      <section className="py-[120px] px-5 md:px-20 relative bg-primary-container overflow-hidden">
        {/* Abstract background shapes */}
        <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-[200px] -right-[200px] w-[600px] h-[600px] bg-white/10 rounded-full blur-[100px]" />
          <div className="absolute -bottom-[200px] -left-[200px] w-[600px] h-[600px] bg-black/20 rounded-full blur-[100px]" />
        </div>

        <div className="max-w-[1280px] mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-right"
          >
            <h2 className="text-[36px] md:text-[48px] font-black mb-4 text-on-primary-container">
              مستعد لإطلاق موقعك؟
            </h2>
            <p className="text-[18px] md:text-[20px] text-on-primary-container/80 max-w-xl">
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
            className="group flex items-center justify-center gap-3 bg-on-primary-container text-primary-container font-black text-[20px] px-10 py-5 rounded-full hover:scale-105 transition-transform duration-300 shadow-[0_20px_40px_rgba(0,0,0,0.2)]"
          >
            تواصل معنا الآن
            <ArrowLeft className="w-6 h-6 group-hover:-translate-x-2 transition-transform" />
          </motion.a>
        </div>
      </section>

      {/* Main Footer */}
      <footer className="bg-[#050505] w-full pt-20 pb-10 border-t border-white/5 relative overflow-hidden">
        {/* Subtle glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-primary/5 blur-[100px] rounded-full pointer-events-none" />

        <div className="max-w-[1280px] mx-auto px-5 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            {/* Brand */}
            <div className="flex flex-col items-center md:items-start text-center md:text-right">
              <motion.a 
                whileHover={{ scale: 1.05 }}
                href="#" 
                className="text-[32px] text-white font-black en-text flex items-center gap-3 mb-6"
              >
                <div className="relative w-12 h-12 overflow-hidden rounded-xl">
                  <Image src="/logo.webp" alt="Volivar Logo" fill className="object-cover" />
                </div>
                Volivar
              </motion.a>
              <p className="text-[16px] text-gray-400 leading-relaxed max-w-sm">
                نبني تجارب رقمية استثنائية للعلامات التجارية الطموحة. جودة لا تُضاهى وسرعة تفوق التوقعات.
              </p>
            </div>

            {/* Quick Links */}
            <div className="flex flex-col items-center md:items-start text-center md:text-right">
              <h3 className="text-[20px] font-bold text-white mb-6">روابط سريعة</h3>
              <ul className="flex flex-col gap-4 text-[16px]">
                <li><a className="text-gray-400 hover:text-primary hover:translate-x-2 transition-all inline-block" href="#how-it-works">كيف نعمل</a></li>
                <li><a className="text-gray-400 hover:text-primary hover:translate-x-2 transition-all inline-block" href="#templates">النماذج المتاحة</a></li>
                <li><a className="text-gray-400 hover:text-primary hover:translate-x-2 transition-all inline-block" href="#pricing">الباقات والأسعار</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div className="flex flex-col items-center md:items-start text-center md:text-right">
              <h3 className="text-[20px] font-bold text-white mb-6">تواصل معنا</h3>
              <ul className="flex flex-col gap-4 text-[16px]">
                <li>
                  <a className="text-gray-400 hover:text-primary transition-colors flex items-center gap-3 justify-end md:justify-start" href="https://wa.me/96894789593" target="_blank" rel="noreferrer" dir="ltr">
                    <Phone className="w-5 h-5" />
                    <span className="en-text">+968 9478 9593</span>
                  </a>
                </li>
                <li>
                  <a className="text-gray-400 hover:text-primary transition-colors flex items-center gap-3 justify-end md:justify-start" href="mailto:hello@volivar.com" dir="ltr">
                    <Mail className="w-5 h-5" />
                    <span className="en-text">hello@volivar.com</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-center">
            <p className="text-[15px] text-gray-500">© {new Date().getFullYear()} Volivar. جميع الحقوق محفوظة.</p>
            <div className="flex gap-6 text-[15px]">
              <a href="#" className="text-gray-500 hover:text-white transition-colors">سياسة الخصوصية</a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors">الشروط والأحكام</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
