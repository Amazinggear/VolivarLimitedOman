"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-white text-neutral-900 font-alexandria flex items-center justify-center px-6">
      <div className="text-center max-w-2xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
          className="text-[22vw] md:text-[18vw] font-black text-black leading-none mb-4 tracking-tighter"
        >
          404
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] as const }}
          className="text-3xl md:text-5xl font-black mb-6"
        >
          هذه المساحة لم تُبنَ بعد.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] as const }}
          className="text-lg text-neutral-800 font-medium leading-loose mb-10 max-w-md mx-auto"
        >
          يبدو أن الصفحة التي تبحث عنها لم تُصمم بعد. دعنا نعيدك إلى مساحة مألوفة.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] as const }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="/templates/cargo"
            className="inline-block bg-black text-white px-8 py-4 rounded-full font-bold hover:bg-neutral-800 transition-all duration-300 hover:scale-[1.02]"
          >
            العودة للرئيسية
          </Link>
          <Link
            href="/templates/cargo/projects"
            className="inline-block border border-black/20 text-black px-8 py-4 rounded-full font-bold hover:border-black transition-all duration-300"
          >
            استعراض المشاريع
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
