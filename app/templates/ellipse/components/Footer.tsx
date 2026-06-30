"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const footerLinks = [
  {
    label: "المنتج",
    items: [
      { name: "المميزات", href: "/templates/ellipse" },
      { name: "التسعير", href: "/templates/ellipse" },
      { name: "التكاملات", href: "/templates/ellipse" },
      { name: "التحديثات", href: "/templates/ellipse" },
      { name: "الطريق المستقبلي", href: "/templates/ellipse" },
    ],
  },
  {
    label: "الشركة",
    items: [
      { name: "عن المنصة", href: "/templates/ellipse/about" },
      { name: "الفريق", href: "/templates/ellipse/about" },
      { name: "الوظائف", href: "/templates/ellipse/about" },
      { name: "المدونة", href: "/templates/ellipse" },
      { name: "الصحافة", href: "/templates/ellipse" },
    ],
  },
  {
    label: "المساعدة",
    items: [
      { name: "مركز المساعدة", href: "/templates/ellipse/contact" },
      { name: "التوثيق", href: "/templates/ellipse" },
      { name: "مجتمع المطورين", href: "/templates/ellipse" },
      { name: "حالة الخدمة", href: "/templates/ellipse" },
      { name: "اتصل بنا", href: "/templates/ellipse/contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#0A0A0A] pt-32 pb-12 overflow-hidden border-t border-white/[0.03]">
      {/* Massive background ellipse text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 0.03, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-[20vw] font-black text-white tracking-tighter leading-none whitespace-nowrap"
        >
          ELLIPSE
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
            جاهز لبدء{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6366F1] to-[#8B5CF6]">
              الرحلة؟
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            انضم إلى آلاف الشركات التي تثق بمنصتنا لدفع عجلة التحول الرقمي.
            ابدأ اليوم مجاناً دون الحاجة لبطاقة ائتمان.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="group bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white px-8 py-4 rounded-full text-lg font-bold hover:shadow-[0_0_50px_rgba(99,102,241,0.5)] transition-all duration-500 hover:scale-[1.03] flex items-center gap-2">
              ابدأ مجاناً
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
            <button className="border border-white/10 bg-white/[0.03] backdrop-blur-sm text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-white/10 transition-all duration-300">
              تحدث مع المبيعات
            </button>
          </div>
        </motion.div>

        {/* Links grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div>
            <div className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] mb-4">
              ELLIPSE
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              منصة تقنية متطورة تمنح أعمالك قفزة نوعية نحو المستقبل الرقمي.
            </p>
          </div>
          {footerLinks.map((col) => (
            <div key={col.label}>
              <h4 className="text-white font-bold mb-4">{col.label}</h4>
              <ul className="space-y-2.5">
                {col.items.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-gray-500 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/[0.05] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-sm" suppressHydrationWarning>
            © {new Date().getFullYear()} ELLIPSE Platform. جميع الحقوق محفوظة.
          </p>
          <div className="flex gap-6">
            {["سياسة الخصوصية", "شروط الخدمة", "ملفات تعريف الارتباط"].map(
              (link) => (
                <a
                  key={link}
                  href="#"
                  className="text-gray-600 hover:text-gray-400 text-sm transition-colors"
                >
                  {link}
                </a>
              )
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}