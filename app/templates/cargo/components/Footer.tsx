"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import MagneticButton from "./MagneticButton";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white pt-24 pb-10 px-6 md:px-12 overflow-hidden relative">
      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-white/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1600px] mx-auto relative z-10">
        {/* Top CTA + Nav */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
            className="max-w-2xl"
          >
            <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-6 leading-[1.1]">
              لنبنِ شيئاً <br />
              <span className="text-neutral-400">يستحق البقاء.</span>
            </h2>
            <p className="text-neutral-300 leading-loose text-lg max-w-xl font-medium">
              نصمم المساحات التي تلهم الحياة وترتقي بالتجربة الإنسانية.
              نتخذ من الابتكار والبساطة نهجاً لتحقيق رؤى عملائنا.
            </p>
            <MagneticButton className="mt-8">
              <Link
                href="/templates/cargo/contact"
                className="inline-flex items-center px-8 py-4 rounded-full bg-white text-black font-bold tracking-wide hover:bg-neutral-200 transition-colors"
              >
                ابدأ مشروعك معنا
              </Link>
            </MagneticButton>
          </motion.div>

          {/* Nav columns */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] as const }}
            className="grid grid-cols-2 gap-12 md:gap-16"
          >
            <div>
              <h4 className="text-xs uppercase tracking-[0.25em] text-neutral-400 font-black mb-6">استكشف</h4>
              <ul className="space-y-4">
                <li><Link href="/templates/cargo" className="text-neutral-300 hover:text-white transition-colors font-bold">الرئيسية</Link></li>
                <li><Link href="/templates/cargo/projects" className="text-neutral-300 hover:text-white transition-colors font-bold">المشاريع</Link></li>
                <li><Link href="/templates/cargo/studio" className="text-neutral-300 hover:text-white transition-colors font-bold">الاستوديو</Link></li>
                <li><Link href="/templates/cargo/contact" className="text-neutral-300 hover:text-white transition-colors font-bold">تواصل</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-[0.25em] text-neutral-400 font-black mb-6">تواصل</h4>
              <ul className="space-y-4">
                <li><a href="mailto:hello@cargoarch.com" className="text-neutral-300 hover:text-white transition-colors font-bold" dir="ltr">hello@cargoarch.com</a></li>
                <li><a href="tel:+96894789593" className="text-neutral-300 hover:text-white transition-colors font-bold" dir="ltr">+968 9478 9593</a></li>
                <li className="text-neutral-300 font-bold">🇨🇦 كيبيك، كندا</li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Massive brand text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as const }}
          className="relative border-t border-white/10 pt-12"
        >
          <div className="text-[14vw] md:text-[12vw] font-black leading-none tracking-tighter text-white/90 select-none">
            CARGO
          </div>
          <div className="mt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-neutral-400 font-bold">
            <span>© {new Date().getFullYear()} CARGO ARCHITECTURE. جميع الحقوق محفوظة.</span>
            <span>تصميم وتطوير بواسطة Volivar</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
