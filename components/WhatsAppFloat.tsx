"use client";

import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import { useState } from "react";

export default function WhatsAppFloat() {
  const [isExpanded, setIsExpanded] = useState(false);
  const phone = "96894789593";
  const message = encodeURIComponent("مرحباً Volivar! أريد بناء موقع احترافي لمشروعي.");

  return (
    <div className="fixed bottom-[100px] md:bottom-8 right-5 md:right-8 z-[100] flex flex-col items-end gap-3">
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="bg-[#075e54] text-white rounded-2xl p-5 shadow-2xl max-w-[280px] relative"
          >
            <button
              onClick={() => setIsExpanded(false)}
              className="absolute top-2 left-2 w-7 h-7 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center shrink-0">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-[13px] font-bold">Volivar</p>
                <p className="text-[11px] text-white/70">متاحون للرد السريع</p>
              </div>
            </div>
            <p className="text-[12px] text-white/80 mb-4 leading-relaxed">
              أهلًا! كيف نقدر نساعدك في بناء موقعك الاحترافي؟
            </p>
            <a
              href={`https://wa.me/${phone}?text=${message}`}
              target="_blank"
              rel="noreferrer"
              onClick={() => setIsExpanded(false)}
              className="block w-full text-center py-2.5 rounded-xl bg-[#25D366] text-white text-[13px] font-bold hover:bg-[#1ebe57] transition-colors"
            >
              ابدأ المحادثة
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsExpanded(!isExpanded)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="w-[60px] h-[60px] rounded-full flex items-center justify-center shadow-[0_8px_30px_rgba(37,211,102,0.4)] relative group"
        style={{ background: isExpanded ? "#fff" : "#25D366" }}
      >
        {isExpanded ? (
          <X className="w-7 h-7 text-[#075e54]" />
        ) : (
          <MessageCircle className="w-8 h-8 text-white" />
        )}
      </motion.button>
    </div>
  );
}