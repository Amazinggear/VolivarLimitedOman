"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#ede4dd] pt-32 pb-12 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-10">
          <div>
            <h2 className="text-4xl md:text-7xl font-black mb-6 leading-tight">
              هل لديك فكرة <br />
              <span className="text-[#FF0001]">مجنونة؟</span>
            </h2>
            <p className="text-xl text-neutral-600 max-w-md">
              نحن هنا لنحول أفكارك غير المألوفة إلى تجارب رقمية حقيقية تتنفس. تواصل معنا لنبدأ رحلة الإبداع.
            </p>
          </div>
          
          <div className="flex flex-col gap-4 text-right">
            <nav className="flex gap-6 mb-2 justify-end">
              <Link href="/templates/outfit" className="text-neutral-700 font-bold hover:text-[#FF0001] transition-colors">الرئيسية</Link>
              <Link href="/templates/outfit/about" className="text-neutral-700 font-bold hover:text-[#FF0001] transition-colors">عن الاستوديو</Link>
              <Link href="/templates/outfit/contact" className="text-neutral-700 font-bold hover:text-[#FF0001] transition-colors">تواصل معنا</Link>
            </nav>
            <a href="mailto:hello@outfit.is" className="text-2xl font-bold hover:text-[#FF0001] transition-colors">
              hello@outfit.is
            </a>
            <a href="tel:+96894789593" className="text-2xl font-bold hover:text-[#FF0001] transition-colors">
              +968 9478 9593
            </a>
            <div className="flex gap-6 mt-6 justify-end">
              {['انستغرام', 'تويتر', 'لينكد إن', 'بيهانس'].map((social) => (
                <a key={social} href="#" className="text-neutral-500 font-bold hover:text-black transition-colors">
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Massive bottom text */}
        <div className="relative border-t border-black/10 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-[12vw] font-black leading-none tracking-tighter will-change-transform"
          >
            OUTFIT
          </motion.div>
          <div className="text-neutral-500 font-medium whitespace-nowrap" suppressHydrationWarning>
            © {new Date().getFullYear()} OUTFIT Studio. جميع الحقوق محفوظة.
          </div>
        </div>
      </div>
    </footer>
  );
}
