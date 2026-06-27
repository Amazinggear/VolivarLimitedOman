"use client";

import { motion, Variants, AnimatePresence } from "framer-motion";
import { Calendar, Clock, User, Phone, Mail, CheckCircle2, ChevronLeft, Stethoscope, Smile, Sparkles, ShieldCheck, Heart } from "lucide-react";
import { useState } from "react";

const slideIn: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const successVariants: Variants = {
  hidden: { opacity: 0, scale: 0.88, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
  exit: {
    opacity: 0,
    scale: 0.92,
    y: -20,
    transition: { duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const STEPS = ["بيانات شخصية", "الخدمة والموعد", "تأكيد"];

const services = [
  { id: "ortho", name: "تقويم الأسنان", icon: Smile },
  { id: "cosmetic", name: "تجميل الأسنان", icon: Sparkles },
  { id: "implant", name: "زراعة الأسنان", icon: ShieldCheck },
  { id: "root", name: "علاج الجذور", icon: Stethoscope },
  { id: "kids", name: "طب أسنان الأطفال", icon: Heart },
  { id: "consult", name: "استشارة عامة", icon: Stethoscope },
];

const timeSlots = ["09:00 ص", "10:00 ص", "11:00 ص", "12:00 م", "01:00 م", "02:00 م", "03:00 م", "04:00 م", "05:00 م", "06:00 م", "07:00 م", "08:00 م"];

export default function LuminaReservePage() {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    date: "",
    time: "",
    notes: "",
  });

  const updateForm = (key: string, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const canProceed = () => {
    if (step === 0) return form.name && form.phone;
    if (step === 1) return form.service && form.date && form.time;
    return true;
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const today = new Date().toISOString().split("T")[0];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F0F9FF] to-white py-16 md:py-24 min-h-screen">
      <div className="absolute top-0 left-1/2 w-[600px] h-[600px] bg-[#0284C7]/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="relative max-w-[900px] mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-[#0284C7]/10 text-[#0284C7] text-sm font-bold mb-4">
            احجز موعدك
          </span>
          <h1 className="text-[36px] md:text-[48px] font-bold text-[#0F172A] mb-4">
            خطوة واحدة <span className="text-[#0284C7]">نحو ابتسامتك</span>
          </h1>
          <p className="text-[#475569] text-[16px] max-w-[500px] mx-auto">
            احجز موعدك في دقائق وسيتواصل معك فريقنا لتأكيد الحجز.
          </p>
        </motion.div>

        {/* Progress */}
        <div className="flex items-center justify-center gap-2 mb-10">
          {STEPS.map((s, i) => (
            <div key={i} className="flex items-center gap-2">
              <div
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-[13px] font-bold transition-all duration-300 ${
                  i === step
                    ? "bg-[#0284C7] text-white shadow-lg shadow-[#0284C7]/30"
                    : i < step
                    ? "bg-[#0284C7]/15 text-[#0284C7]"
                    : "bg-[#0F172A]/5 text-[#475569]"
                }`}
              >
                {i < step ? <CheckCircle2 className="w-4 h-4" /> : <span>{i + 1}</span>}
                <span className="hidden sm:inline">{s}</span>
              </div>
              {i < STEPS.length - 1 && (
                <div className={`w-6 sm:w-12 h-[2px] transition-colors duration-300 ${i < step ? "bg-[#0284C7]" : "bg-[#0F172A]/10"}`} />
              )}
            </div>
          ))}
        </div>

        {/* Form Card */}
        <AnimatePresence mode="wait">
          {submitted ? (
            <motion.div
              key="success"
              variants={successVariants}
              initial="hidden"
              animate="visible"
              className="bg-white rounded-[2rem] p-10 md:p-16 text-center shadow-xl shadow-[#0284C7]/10 border border-[#0F172A]/5"
            >
              <div className="w-20 h-20 rounded-full bg-[#0284C7]/10 flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-10 h-10 text-[#0284C7]" />
              </div>
              <h2 className="text-[28px] font-bold text-[#0F172A] mb-3">تم استلام طلبك!</h2>
              <p className="text-[#475569] text-[15px] leading-relaxed mb-8 max-w-[450px] mx-auto">
                شكراً {form.name}. تم استلام طلب حجزك بنجاح. سيتواصل معك فريقنا على رقمك
                <span dir="ltr" className="font-bold text-[#0284C7] mx-1">{form.phone}</span>
                خلال 24 ساعة لتأكيد الموعد.
              </p>

              <div className="bg-[#F8FAFC] rounded-2xl p-6 mb-8 text-right max-w-[400px] mx-auto">
                <div className="grid grid-cols-2 gap-4 text-[14px]">
                  <div className="text-[#475569]">الخدمة:</div>
                  <div className="font-bold text-[#0F172A]">{services.find((s) => s.id === form.service)?.name}</div>
                  <div className="text-[#475569]">التاريخ:</div>
                  <div className="font-bold text-[#0F172A]" dir="ltr">{form.date}</div>
                  <div className="text-[#475569]">الوقت:</div>
                  <div className="font-bold text-[#0F172A]">{form.time}</div>
                </div>
              </div>

              <button
                onClick={() => {
                  setSubmitted(false);
                  setStep(0);
                  setForm({ name: "", phone: "", email: "", service: "", date: "", time: "", notes: "" });
                }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0284C7] text-white text-[14px] font-bold hover:bg-[#0369A1] transition-all duration-300"
              >
                حجز موعد آخر
              </button>
            </motion.div>
          ) : (
            <motion.div
              key={step}
              variants={slideIn}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="bg-white rounded-[2rem] p-8 md:p-12 shadow-xl shadow-[#0284C7]/10 border border-[#0F172A]/5"
            >
              {/* Step 0: Personal Info */}
              {step === 0 && (
                <div className="space-y-6">
                  <h2 className="text-[22px] font-bold text-[#0F172A] mb-2">بياناتك الشخصية</h2>
                  <p className="text-[#475569] text-[14px] -mt-2 mb-4">سنحتاج هذه البيانات للتواصل معك وتأكيد الحجز.</p>

                  <div>
                    <label className="block text-[14px] font-bold text-[#0F172A] mb-2">الاسم الكامل *</label>
                    <div className="relative">
                      <User className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#94A3B8]" />
                      <input
                        type="text"
                        value={form.name}
                        onChange={(e) => updateForm("name", e.target.value)}
                        placeholder="أدخل اسمك الكامل"
                        className="w-full bg-[#F8FAFC] border border-[#0F172A]/10 rounded-2xl pr-12 pl-4 py-4 text-[15px] text-[#0F172A] focus:outline-none focus:border-[#0284C7] focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[14px] font-bold text-[#0F172A] mb-2">رقم الجوال *</label>
                    <div className="relative">
                      <Phone className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#94A3B8]" />
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => updateForm("phone", e.target.value)}
                        placeholder="05xxxxxxxx"
                        dir="ltr"
                        className="w-full bg-[#F8FAFC] border border-[#0F172A]/10 rounded-2xl pr-12 pl-4 py-4 text-[15px] text-[#0F172A] focus:outline-none focus:border-[#0284C7] focus:bg-white transition-all text-right"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[14px] font-bold text-[#0F172A] mb-2">البريد الإلكتروني (اختياري)</label>
                    <div className="relative">
                      <Mail className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#94A3B8]" />
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) => updateForm("email", e.target.value)}
                        placeholder="example@email.com"
                        dir="ltr"
                        className="w-full bg-[#F8FAFC] border border-[#0F172A]/10 rounded-2xl pr-12 pl-4 py-4 text-[15px] text-[#0F172A] focus:outline-none focus:border-[#0284C7] focus:bg-white transition-all text-right"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 1: Service & Date */}
              {step === 1 && (
                <div className="space-y-8">
                  <h2 className="text-[22px] font-bold text-[#0F172A] mb-2">اختر الخدمة والموعد</h2>

                  <div>
                    <label className="block text-[14px] font-bold text-[#0F172A] mb-3">الخدمة المطلوبة *</label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {services.map((s) => (
                        <button
                          key={s.id}
                          onClick={() => updateForm("service", s.id)}
                          className={`flex flex-col items-center gap-2 p-4 rounded-2xl border-2 transition-all duration-300 ${
                            form.service === s.id
                              ? "border-[#0284C7] bg-[#0284C7]/10 text-[#0284C7]"
                              : "border-[#0F172A]/10 bg-[#F8FAFC] text-[#475569] hover:border-[#0284C7]/40"
                          }`}
                        >
                          <s.icon className="w-6 h-6" />
                          <span className="text-[13px] font-bold text-center">{s.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-[14px] font-bold text-[#0F172A] mb-3">التاريخ *</label>
                    <div className="relative">
                      <Calendar className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#94A3B8]" />
                      <input
                        type="date"
                        min={today}
                        value={form.date}
                        onChange={(e) => updateForm("date", e.target.value)}
                        className="w-full bg-[#F8FAFC] border border-[#0F172A]/10 rounded-2xl pr-12 pl-4 py-4 text-[15px] text-[#0F172A] focus:outline-none focus:border-[#0284C7] focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[14px] font-bold text-[#0F172A] mb-3">الوقت *</label>
                    <div className="grid grid-cols-3 md:grid-cols-4 gap-2">
                      {timeSlots.map((t) => (
                        <button
                          key={t}
                          onClick={() => updateForm("time", t)}
                          className={`flex items-center justify-center gap-1.5 py-3 rounded-xl border-2 text-[13px] font-bold transition-all duration-300 ${
                            form.time === t
                              ? "border-[#0284C7] bg-[#0284C7] text-white"
                              : "border-[#0F172A]/10 bg-[#F8FAFC] text-[#475569] hover:border-[#0284C7]/40"
                          }`}
                        >
                          <Clock className="w-3.5 h-3.5" />
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-[14px] font-bold text-[#0F172A] mb-2">ملاحظات (اختياري)</label>
                    <textarea
                      value={form.notes}
                      onChange={(e) => updateForm("notes", e.target.value)}
                      placeholder="أخبرنا عن حالتك أو أي استفسار..."
                      rows={3}
                      className="w-full bg-[#F8FAFC] border border-[#0F172A]/10 rounded-2xl px-4 py-3 text-[15px] text-[#0F172A] focus:outline-none focus:border-[#0284C7] focus:bg-white transition-all resize-none"
                    />
                  </div>
                </div>
              )}

              {/* Step 2: Confirm */}
              {step === 2 && (
                <div className="space-y-6">
                  <h2 className="text-[22px] font-bold text-[#0F172A] mb-2">تأكيد الحجز</h2>
                  <p className="text-[#475569] text-[14px] -mt-2 mb-4">راجع بياناتك قبل التأكيد.</p>

                  <div className="bg-[#F8FAFC] rounded-2xl p-6 space-y-4">
                    <div className="flex items-center justify-between pb-4 border-b border-[#0F172A]/5">
                      <span className="text-[#475569] text-[14px]">الاسم:</span>
                      <span className="font-bold text-[#0F172A] text-[15px]">{form.name}</span>
                    </div>
                    <div className="flex items-center justify-between pb-4 border-b border-[#0F172A]/5">
                      <span className="text-[#475569] text-[14px]">الجوال:</span>
                      <span className="font-bold text-[#0F172A] text-[15px]" dir="ltr">{form.phone}</span>
                    </div>
                    {form.email && (
                      <div className="flex items-center justify-between pb-4 border-b border-[#0F172A]/5">
                        <span className="text-[#475569] text-[14px]">البريد:</span>
                        <span className="font-bold text-[#0F172A] text-[15px]" dir="ltr">{form.email}</span>
                      </div>
                    )}
                    <div className="flex items-center justify-between pb-4 border-b border-[#0F172A]/5">
                      <span className="text-[#475569] text-[14px]">الخدمة:</span>
                      <span className="font-bold text-[#0F172A] text-[15px]">{services.find((s) => s.id === form.service)?.name}</span>
                    </div>
                    <div className="flex items-center justify-between pb-4 border-b border-[#0F172A]/5">
                      <span className="text-[#475569] text-[14px]">التاريخ:</span>
                      <span className="font-bold text-[#0F172A] text-[15px]" dir="ltr">{form.date}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[#475569] text-[14px]">الوقت:</span>
                      <span className="font-bold text-[#0F172A] text-[15px]">{form.time}</span>
                    </div>
                  </div>

                  {form.notes && (
                    <div className="bg-[#0284C7]/5 rounded-2xl p-4">
                      <div className="text-[13px] font-bold text-[#0284C7] mb-1">ملاحظاتك:</div>
                      <p className="text-[#475569] text-[14px]">{form.notes}</p>
                    </div>
                  )}
                </div>
              )}

              {/* Navigation */}
              <div className="flex items-center justify-between mt-10 pt-6 border-t border-[#0F172A]/5">
                <button
                  onClick={() => setStep((s) => Math.max(0, s - 1))}
                  disabled={step === 0}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-[#475569] text-[14px] font-bold hover:bg-[#0F172A]/5 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  <ChevronLeft className="w-4 h-4 rotate-180" />
                  السابق
                </button>

                {step < STEPS.length - 1 ? (
                  <button
                    onClick={() => setStep((s) => s + 1)}
                    disabled={!canProceed()}
                    className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-[#0284C7] text-white text-[14px] font-bold hover:bg-[#0369A1] transition-all duration-300 shadow-lg shadow-[#0284C7]/30 disabled:opacity-40 disabled:cursor-not-allowed disabled:shadow-none"
                  >
                    التالي
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    onClick={handleSubmit}
                    className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-[#0284C7] text-white text-[14px] font-bold hover:bg-[#0369A1] transition-all duration-300 shadow-lg shadow-[#0284C7]/30"
                  >
                    <CheckCircle2 className="w-4 h-4" />
                    تأكيد الحجز
                  </button>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
