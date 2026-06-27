"use client";

import { motion, Variants } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, Share2 } from "lucide-react";
import { useState } from "react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export default function LuminaContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setForm({ name: "", email: "", subject: "", message: "" });
    }, 4000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "اتصل بنا",
      value: "+966 11 234 5678",
      sub: "السبت - الخميس، 9 ص - 9 م",
      href: "tel:+966112345678",
    },
    {
      icon: Mail,
      title: "راسلنا",
      value: "info@lumina-dental.com",
      sub: "نرد خلال 24 ساعة",
      href: "mailto:info@lumina-dental.com",
    },
    {
      icon: MapPin,
      title: "زورنا",
      value: "الرياض، حي العليا",
      sub: "طريق الملك فهد، برج لومينا",
      href: "#",
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#F0F9FF] to-white py-20 md:py-28">
        <div className="absolute top-0 left-1/2 w-[600px] h-[600px] bg-[#0284C7]/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="relative max-w-[1280px] mx-auto px-6 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block px-4 py-2 rounded-full bg-[#0284C7]/10 text-[#0284C7] text-sm font-bold mb-4"
          >
            تواصل معنا
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-[40px] md:text-[60px] font-bold text-[#0F172A] mb-6"
          >
            نحن هنا <span className="text-[#0284C7]">لمساعدتك</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-[#475569] text-[16px] md:text-[18px] max-w-[600px] mx-auto leading-relaxed"
          >
            سواء كان لديك استفسار أو ترغب بحجز موعد، فريقنا جاهز للرد عليك.
          </motion.p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {contactInfo.map((info, i) => (
            <motion.a
              key={i}
              href={info.href}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group bg-[#F8FAFC] rounded-3xl p-8 border border-[#0F172A]/5 hover:border-[#0284C7]/30 hover:bg-white hover:shadow-xl hover:shadow-[#0284C7]/10 transition-all duration-500 text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#0284C7]/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500">
                <info.icon className="w-8 h-8 text-[#0284C7]" />
              </div>
              <h3 className="text-[18px] font-bold text-[#0F172A] mb-2">{info.title}</h3>
              <p className="text-[#0F172A] text-[16px] font-bold mb-1" dir={info.icon === Phone ? "ltr" : "rtl"}>{info.value}</p>
              <p className="text-[#475569] text-[13px]">{info.sub}</p>
            </motion.a>
          ))}
        </div>
      </section>

      {/* Form + Map */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white rounded-[2rem] p-8 md:p-10 shadow-xl shadow-[#0284C7]/10 border border-[#0F172A]/5"
          >
            <h2 className="text-[26px] font-bold text-[#0F172A] mb-2">أرسل رسالة</h2>
            <p className="text-[#475569] text-[14px] mb-8">سنرد عليك في أقرب وقت ممكن.</p>

            {sent ? (
              <div className="bg-[#0284C7]/10 rounded-2xl p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-[#0284C7] flex items-center justify-center mx-auto mb-4">
                  <Send className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-[20px] font-bold text-[#0F172A] mb-2">تم إرسال رسالتك!</h3>
                <p className="text-[#475569] text-[14px]">شكراً لتواصلك معنا. سنرد عليك قريباً.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-[14px] font-bold text-[#0F172A] mb-2">الاسم</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="اسمك الكامل"
                    className="w-full bg-[#F8FAFC] border border-[#0F172A]/10 rounded-2xl px-4 py-3.5 text-[15px] text-[#0F172A] focus:outline-none focus:border-[#0284C7] focus:bg-white transition-all"
                  />
                </div>

                <div>
                  <label className="block text-[14px] font-bold text-[#0F172A] mb-2">البريد الإلكتروني</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="example@email.com"
                    dir="ltr"
                    className="w-full bg-[#F8FAFC] border border-[#0F172A]/10 rounded-2xl px-4 py-3.5 text-[15px] text-[#0F172A] focus:outline-none focus:border-[#0284C7] focus:bg-white transition-all text-right"
                  />
                </div>

                <div>
                  <label className="block text-[14px] font-bold text-[#0F172A] mb-2">الموضوع</label>
                  <input
                    type="text"
                    required
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    placeholder="موضوع رسالتك"
                    className="w-full bg-[#F8FAFC] border border-[#0F172A]/10 rounded-2xl px-4 py-3.5 text-[15px] text-[#0F172A] focus:outline-none focus:border-[#0284C7] focus:bg-white transition-all"
                  />
                </div>

                <div>
                  <label className="block text-[14px] font-bold text-[#0F172A] mb-2">الرسالة</label>
                  <textarea
                    required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="اكتب رسالتك هنا..."
                    rows={5}
                    className="w-full bg-[#F8FAFC] border border-[#0F172A]/10 rounded-2xl px-4 py-3.5 text-[15px] text-[#0F172A] focus:outline-none focus:border-[#0284C7] focus:bg-white transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#0284C7] text-white text-[15px] font-bold hover:bg-[#0369A1] transition-all duration-300 shadow-lg shadow-[#0284C7]/30 hover:-translate-y-0.5"
                >
                  <Send className="w-5 h-5" />
                  إرسال الرسالة
                </button>
              </form>
            )}
          </motion.div>

          {/* Map + Info */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            {/* Map */}
            <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-xl shadow-[#0284C7]/10 border border-[#0F172A]/5">
              <iframe
                src="https://www.openstreetmap.org/export/embed.html?bbox=46.6753%2C24.6877%2C46.6953%2C24.7077&layer=mapnik&marker=24.6977%2C46.6853"
                className="w-full h-full"
                style={{ border: 0 }}
                loading="lazy"
                title="موقع عيادة لومينا"
              />
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/966112345678"
              className="bg-gradient-to-l from-[#25D366] to-[#128C7E] text-white rounded-[2rem] p-8 flex items-center gap-5 hover:-translate-y-1 transition-transform duration-300 shadow-xl shadow-[#25D366]/20"
            >
              <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center shrink-0">
                <MessageCircle className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-[18px] font-bold mb-1">تواصل عبر واتساب</h3>
                <p className="text-white/80 text-[13px]">رد فوري على استفساراتك</p>
              </div>
            </a>

            {/* Hours */}
            <div className="bg-white rounded-[2rem] p-8 shadow-xl shadow-[#0284C7]/10 border border-[#0F172A]/5">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#0284C7]/10 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-[#0284C7]" />
                </div>
                <h3 className="text-[18px] font-bold text-[#0F172A]">ساعات العمل</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between pb-3 border-b border-[#0F172A]/5">
                  <span className="text-[#475569] text-[14px]">السبت - الأربعاء</span>
                  <span className="font-bold text-[#0F172A] text-[14px]">9:00 ص - 9:00 م</span>
                </div>
                <div className="flex items-center justify-between pb-3 border-b border-[#0F172A]/5">
                  <span className="text-[#475569] text-[14px]">الخميس</span>
                  <span className="font-bold text-[#0F172A] text-[14px]">9:00 ص - 6:00 م</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#475569] text-[14px]">الجمعة</span>
                  <span className="font-bold text-[#EF4444] text-[14px]">مغلق</span>
                </div>
              </div>

              <div className="flex items-center gap-3 mt-6 pt-6 border-t border-[#0F172A]/5">
                <span className="text-[#475569] text-[13px]">تابعنا:</span>
                <div className="flex items-center gap-2">
                  <a href="#" className="w-9 h-9 rounded-full bg-[#0F172A]/5 hover:bg-[#0284C7] hover:text-white flex items-center justify-center transition-colors"><Share2 className="w-4 h-4" /></a>
                  <a href="#" className="w-9 h-9 rounded-full bg-[#0F172A]/5 hover:bg-[#0284C7] hover:text-white flex items-center justify-center transition-colors"><MessageCircle className="w-4 h-4" /></a>
                  <a href="#" className="w-9 h-9 rounded-full bg-[#0F172A]/5 hover:bg-[#0284C7] hover:text-white flex items-center justify-center transition-colors"><Send className="w-4 h-4" /></a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
