"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import Footer from "../components/Footer";

const contactInfo = [
  {
    icon: Mail,
    label: "البريد الإبداعي",
    value: "hello@cargoarch.com",
    href: "mailto:hello@cargoarch.com",
  },
  {
    icon: Phone,
    label: "هاتف الاستوديو",
    value: "+968 9478 9593",
    href: "tel:+96894789593",
  },
  {
    icon: MapPin,
    label: "موقع الاستوديو",
    value: "🇨🇦 كيبيك، كندا",
  },
];

const projectTypes = ["سكني", "تجاري", "ثقافي", "تجديد", "أخرى"];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    type: projectTypes[0],
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: "", email: "", type: projectTypes[0], message: "" });
    }, 4000);
  };

  return (
    <main className="bg-white min-h-screen pt-32 md:pt-40">
      {/* Header */}
      <section className="px-6 md:px-12 max-w-[1600px] mx-auto mb-16 md:mb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] as const }}
        >
          <span className="block text-xs uppercase tracking-[0.3em] text-neutral-600 font-black mb-6">
            تواصل معنا
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.05] mb-8 text-neutral-900">
            لنبدأ <br />
            <span className="text-neutral-500">مشروعك القادم.</span>
          </h1>
          <p className="text-lg md:text-xl text-neutral-800 font-medium leading-loose max-w-2xl">
            لديك فكرة، موقع، أو حلم بمساحة؟ نحن نستمع قبل أن نصمم. شاركنا تفاصيل
            مشروعك وسنعود إليك خلال 48 ساعة.
          </p>
        </motion.div>
      </section>

      {/* Contact grid */}
      <section className="px-6 md:px-12 max-w-[1600px] mx-auto pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16">
          {/* Info column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] as const }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            {contactInfo.map((item) => {
              const Icon = item.icon;
              const content = (
                <div className="flex items-center gap-6 p-6 md:p-8 rounded-2xl border border-black/10 hover:border-black/30 hover:bg-black/[0.02] transition-all group">
                  <div className="w-14 h-14 rounded-full bg-black text-white flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-neutral-600 font-bold mb-1">{item.label}</p>
                    <p className="text-xl md:text-2xl font-bold text-black" dir={item.href?.startsWith("mailto") || item.href?.startsWith("tel") ? "ltr" : undefined}>
                      {item.value}
                    </p>
                  </div>
                </div>
              );
              return item.href ? (
                <a key={item.label} href={item.href} className="block">
                  {content}
                </a>
              ) : (
                <div key={item.label}>{content}</div>
              );
            })}

            {/* Hours */}
            <div className="p-6 md:p-8 rounded-2xl bg-neutral-900 text-white">
              <h4 className="text-xs uppercase tracking-[0.25em] text-white/80 font-bold mb-4">
                ساعات العمل
              </h4>
              <ul className="space-y-3 text-neutral-300">
                <li className="flex justify-between">
                  <span>الأحد - الخميس</span>
                  <span className="font-bold text-white" dir="ltr">9:00 - 18:00</span>
                </li>
                <li className="flex justify-between">
                  <span>الجمعة</span>
                  <span className="text-white/60">مغلق</span>
                </li>
                <li className="flex justify-between">
                  <span>السبت</span>
                  <span className="font-bold text-white" dir="ltr">10:00 - 14:00</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Form column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] as const }}
            className="lg:col-span-7"
          >
            <form
              onSubmit={handleSubmit}
              className="p-6 md:p-10 rounded-2xl border border-black/10 bg-white relative overflow-hidden"
            >
              {submitted && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="absolute inset-0 z-10 bg-white flex flex-col items-center justify-center gap-4 text-center px-6"
                >
                  <CheckCircle2 className="w-16 h-16 text-green-600" />
                  <h3 className="text-2xl font-black text-neutral-900">تم استلام رسالتك!</h3>
                  <p className="text-neutral-700 font-medium max-w-md">
                    شكراً لتواصلك مع CARGO. سنعود إليك خلال 48 ساعة كحد أقصى.
                  </p>
                </motion.div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    الاسم الكامل
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="اسمك"
                    className="w-full px-4 py-3 rounded-xl border border-black/10 focus:border-black focus:outline-none transition-colors bg-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    البريد الإلكتروني
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="you@example.com"
                    dir="ltr"
                    className="w-full px-4 py-3 rounded-xl border border-black/10 focus:border-black focus:outline-none transition-colors bg-white text-right"
                  />
                </div>
              </div>

              <div className="mt-6">
                <label className="block text-sm font-bold text-gray-700 mb-3">
                  نوع المشروع
                </label>
                <div className="flex flex-wrap gap-3">
                  {projectTypes.map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setForm({ ...form, type })}
                      className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all ${
                        form.type === type
                          ? "bg-black text-white"
                          : "bg-black/5 text-neutral-800 hover:bg-black/10"
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-6">
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  تفاصيل المشروع
                </label>
                <textarea
                  required
                  rows={6}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="أخبرنا عن فكرتك، الموقع، المساحة، والميزانية التقريبية..."
                  className="w-full px-4 py-3 rounded-xl border border-black/10 focus:border-black focus:outline-none transition-colors bg-white resize-none"
                />
              </div>

              <button
                type="submit"
                className="mt-8 w-full md:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-black text-white font-bold tracking-wide hover:bg-neutral-800 transition-all duration-300 hover:scale-[1.02]"
              >
                <Send className="w-5 h-5" />
                إرسال الطلب
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
