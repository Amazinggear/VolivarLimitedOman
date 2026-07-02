"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Calendar, ShieldCheck, Sparkles, Award, ArrowLeft, Star, CheckCircle2, Clock, Users, Smile, Stethoscope, Heart } from "lucide-react";

// ── Variants ──────────────────────────────────────────────────────────────────

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const imageVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const badgeVariants: Variants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

// ── Data ──────────────────────────────────────────────────────────────────────

const services = [
  { icon: Smile, title: "تقويم الأسنان", desc: "تقويم معدني وشفاف بأحدث التقنيات لابتسامة مثالية.", color: "#0284C7" },
  { icon: Sparkles, title: "تجميل الأسنان", desc: "تبييض، فينير، ولومينير لابتسامة هوليوود.", color: "#38BDF8" },
  { icon: ShieldCheck, title: "زراعة الأسنان", desc: "زراعة دائمة تمنحك ثقة وأداءً يدوم مدى الحياة.", color: "#0EA5E9" },
  { icon: Stethoscope, title: "علاج الجذور", desc: "علاج عصب الأسنان بدون ألم بأحدث الأجهزة.", color: "#0284C7" },
  { icon: Heart, title: "طب أسنان الأطفال", desc: "رعاية لطيفة لأسنان أطفالك في بيئة محببة.", color: "#38BDF8" },
  { icon: Award, title: "حشوات تجميلية", desc: "حشوات بلون الأسنان الطبيعي تدوم طويلاً.", color: "#0EA5E9" },
];

const stats = [
  { icon: Users, value: "+15,000", label: "مريض سعيد" },
  { icon: Award, value: "+20", label: "سنوات خبرة" },
  { icon: Smile, value: "+8,500", label: "ابتسامة جديدة" },
  { icon: Clock, value: "24/7", label: "خدمة طوارئ" },
];

const steps = [
  { num: "01", title: "احجز موعدك", desc: "احجز عبر الموقع أو الواتساب في دقائق." },
  { num: "02", title: "الفحص والتشخيص", desc: "فحص شامل بأحدث الأجهزة وتشخيص دقيق." },
  { num: "03", title: "خطة العلاج", desc: "خطة علاج واضحة وشفافة مع كل التفاصيل." },
  { num: "04", title: "ابتسامتك الجديدة", desc: "علاج احترافي ومتابعة بعد الجلسات." },
];

const testimonials = [
  { name: "أحمد العتيبي", role: "تقويم أسنان", text: "تجربة رائعة من البداية للنهاية. الطاقم محترف جداً والنتيجة فاقت توقعاتي. أنصح الجميع بعيادة لومينا.", rating: 5 },
  { name: "نورة القحطاني", role: "تبييض وفينير", text: "ابتسامتي تغيرت بالكامل! دقة في المواعيد ونظافة عالية وأطباء على أعلى مستوى. شكراً لومينا.", rating: 5 },
  { name: "خالد المطيري", role: "زراعة أسنان", text: "كنت قلق من الزراعة لكن الطبيب شرح لي كل شيء وراحتي كانت أولوية. تجربة بدون ألم نهائياً.", rating: 5 },
];

// ── Component ─────────────────────────────────────────────────────────────────

export default function LuminaHomePage() {
  return (
    <>
      {/* ── Hero Section ─────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#F0F9FF] via-white to-white">
        {/* Decorative blobs */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#0284C7]/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#38BDF8]/10 rounded-full blur-[100px] translate-x-1/3 translate-y-1/3 pointer-events-none" />

        <div className="relative max-w-[1280px] mx-auto px-6 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="z-20 flex flex-col justify-center"
          >
            <motion.div variants={badgeVariants} className="mb-6 self-start">
              <span className="relative inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#0284C7]/30 bg-[#0284C7]/10 text-[#0284C7] text-sm font-bold">
                <span className="absolute inset-0 rounded-full border border-[#0284C7]/30 animate-ping opacity-50" />
                <Sparkles className="w-4 h-4" />
                ابتسامتك تستحق الأفضل
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-[44px] md:text-[64px] leading-[1.1] font-bold mb-6 text-[#0F172A]"
            >
              ابتسامة <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-l from-[#0284C7] to-[#38BDF8]">
                تليق بثقتك
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-[#475569] text-[16px] md:text-[19px] max-w-[520px] leading-relaxed mb-10"
            >
              في عيادة لومينا نقدم رعاية أسنان متكاملة بأحدث التقنيات العالمية وأمهر الأطباء.
              من التقويم والتجميل إلى الزراعة، نمنحك الابتسامة التي طالما حلمت بها.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4">
              <Link
                href="/templates/lumina/reserve"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#0284C7] text-white text-[15px] font-bold hover:bg-[#0369A1] transition-all duration-300 shadow-lg shadow-[#0284C7]/30 hover:shadow-xl hover:shadow-[#0284C7]/40 hover:-translate-y-0.5"
              >
                <Calendar className="w-5 h-5" />
                احجز موعدك الآن
              </Link>
              <Link
                href="/templates/lumina/services"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white border border-[#0F172A]/10 text-[#0F172A] text-[15px] font-bold hover:border-[#0284C7] hover:text-[#0284C7] transition-all duration-300"
              >
                خدماتنا
                <ArrowLeft className="w-5 h-5" />
              </Link>
            </motion.div>

            {/* Trust badges */}
            <motion.div variants={fadeUp} className="mt-12 flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-3 space-x-reverse">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-9 h-9 rounded-full border-2 border-white bg-gradient-to-br from-[#0284C7] to-[#38BDF8] flex items-center justify-center text-white text-xs font-bold">
                      {i}
                    </div>
                  ))}
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} className="w-3.5 h-3.5 fill-[#FBBF24] text-[#FBBF24]" />
                    ))}
                  </div>
                  <span className="text-[12px] text-[#475569] mt-0.5">+15,000 مريض سعيد</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            className="relative z-10"
          >
            <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-[#0284C7]/20">
              <Image
                src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1200&auto=format&fit=crop"
                alt="عيادة أسنان لومينا"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/40 via-transparent to-transparent" />
            </div>

            {/* Floating card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="absolute -bottom-6 -right-6 md:-right-12 bg-white rounded-2xl p-5 shadow-xl shadow-[#0F172A]/10 border border-[#0F172A]/5 max-w-[220px]"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#0284C7]/10 flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6 text-[#0284C7]" />
                </div>
                <div>
                  <div className="text-[20px] font-bold text-[#0F172A] leading-none">100%</div>
                  <div className="text-[12px] text-[#475569] mt-1">تعقيم وأمان</div>
                </div>
              </div>
            </motion.div>

            {/* Floating card 2 */}
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="absolute -top-6 -left-6 md:-left-12 bg-white rounded-2xl p-5 shadow-xl shadow-[#0F172A]/10 border border-[#0F172A]/5"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#38BDF8]/10 flex items-center justify-center">
                  <Award className="w-6 h-6 text-[#38BDF8]" />
                </div>
                <div>
                  <div className="text-[20px] font-bold text-[#0F172A] leading-none">+20</div>
                  <div className="text-[12px] text-[#475569] mt-1">سنة خبرة</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Stats Section ────────────────────────────────────────────────────── */}
      <section className="py-16 bg-[#0F172A]">
        <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="text-center"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#0284C7]/15 flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-7 h-7 text-[#38BDF8]" />
              </div>
              <div className="text-[32px] md:text-[40px] font-bold text-white leading-none mb-2">{stat.value}</div>
              <div className="text-[14px] text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Services Section ────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1280px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-[#0284C7]/10 text-[#0284C7] text-sm font-bold mb-4">
              خدماتنا
            </span>
            <h2 className="text-[36px] md:text-[48px] font-bold text-[#0F172A] mb-4">
              رعاية شاملة <span className="text-[#0284C7]">لأسنانك</span>
            </h2>
            <p className="text-[#475569] text-[16px] md:text-[18px] max-w-[600px] mx-auto leading-relaxed">
              نقدم باقة متكاملة من خدمات طب الأسنان بأحدث التقنيات وأمهر الأطباء.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="group relative bg-[#F8FAFC] rounded-3xl p-8 border border-[#0F172A]/5 hover:border-[#0284C7]/30 hover:bg-white hover:shadow-xl hover:shadow-[#0284C7]/10 transition-[border-color,box-shadow,background-color] duration-500"
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundColor: service.color + "15" }}
                >
                  <service.icon className="w-7 h-7" style={{ color: service.color }} />
                </div>
                <h3 className="text-[22px] font-bold text-[#0F172A] mb-3">{service.title}</h3>
                <p className="text-[#475569] text-[15px] leading-relaxed mb-6">{service.desc}</p>
                <Link
                  href="/templates/lumina/services"
                  className="inline-flex items-center gap-2 text-[#0284C7] text-[14px] font-bold group-hover:gap-3 transition-all"
                >
                  اعرف المزيد
                  <ArrowLeft className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works ────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-[#F8FAFC]">
        <div className="max-w-[1280px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-[#0284C7]/10 text-[#0284C7] text-sm font-bold mb-4">
              كيف نعمل
            </span>
            <h2 className="text-[36px] md:text-[48px] font-bold text-[#0F172A] mb-4">
              رحلتك نحو <span className="text-[#0284C7]">ابتسامة مثالية</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="relative bg-white rounded-3xl p-8 border border-[#0F172A]/5"
              >
                <div className="text-[64px] font-bold text-[#0284C7]/10 leading-none mb-4">{step.num}</div>
                <h3 className="text-[20px] font-bold text-[#0F172A] mb-3">{step.title}</h3>
                <p className="text-[#475569] text-[14px] leading-relaxed">{step.desc}</p>
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -left-3 w-6 h-[2px] bg-[#0284C7]/20" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ──────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1280px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-l from-[#0F172A] via-[#0284C7] to-[#38BDF8] p-10 md:p-16 text-center"
          >
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
            <div className="relative z-10">
              <h2 className="text-[32px] md:text-[44px] font-bold text-white mb-4">
                جاهز لابتسامة جديدة؟
              </h2>
              <p className="text-white/80 text-[16px] md:text-[18px] max-w-[600px] mx-auto mb-8 leading-relaxed">
                احجز موعدك اليوم واحصل على استشارة مجانية مع نخبة من أطباء الأسنان.
              </p>
              <Link
                href="/templates/lumina/reserve"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-[#0284C7] text-[15px] font-bold hover:bg-[#F8FAFC] transition-all duration-300 shadow-xl hover:-translate-y-0.5"
              >
                <Calendar className="w-5 h-5" />
                احجز استشارتك المجانية
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Testimonials ────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-[#F8FAFC]">
        <div className="max-w-[1280px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-[#0284C7]/10 text-[#0284C7] text-sm font-bold mb-4">
              آراء مرضانا
            </span>
            <h2 className="text-[36px] md:text-[48px] font-bold text-[#0F172A] mb-4">
              قصص <span className="text-[#0284C7]">حقيقية</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="bg-white rounded-3xl p-8 border border-[#0F172A]/5 shadow-sm"
              >
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, s) => (
                    <Star key={s} className="w-5 h-5 fill-[#FBBF24] text-[#FBBF24]" />
                  ))}
                </div>
                <p className="text-[#475569] text-[15px] leading-relaxed mb-6">"{t.text}"</p>
                <div className="flex items-center gap-3 pt-6 border-t border-[#0F172A]/5">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#0284C7] to-[#38BDF8] flex items-center justify-center text-white font-bold">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-[#0F172A] text-[15px]">{t.name}</div>
                    <div className="text-[13px] text-[#475569]">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ──────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-square rounded-[2.5rem] overflow-hidden shadow-2xl shadow-[#0284C7]/20">
              <Image
                src="https://images.unsplash.com/photo-1629909615184-74f495363b67?q=80&w=1200&auto=format&fit=crop"
                alt="عيادة لومينا"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-[#0284C7] text-white rounded-2xl p-6 shadow-xl">
              <div className="text-[36px] font-bold leading-none">98%</div>
              <div className="text-[13px] mt-2 opacity-90">رضا المرضى</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-[#0284C7]/10 text-[#0284C7] text-sm font-bold mb-4">
              لماذا لومينا؟
            </span>
            <h2 className="text-[36px] md:text-[44px] font-bold text-[#0F172A] mb-6">
              نحن هنا لنمنحك <span className="text-[#0284C7]">أفضل رعاية</span>
            </h2>
            <p className="text-[#475569] text-[16px] leading-relaxed mb-8">
              نجمع بين الخبرة الطبية والتقنيات الحديثة لنقدم لك تجربة علاجية مريحة وآمنة.
            </p>

            <div className="space-y-4">
              {[
                "أطباء متخصصون معتمدون دولياً",
                "أحدث أجهزة التشخيص والعلاج",
                "تعقيم صارم وفق المعايير العالمية",
                "خطط سداد مرنة وتأمين طبي",
                "متابعة بعد العلاج لضمان النتائج",
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="w-6 h-6 text-[#0284C7] shrink-0" />
                  <span className="text-[#0F172A] text-[15px] font-medium">{item}</span>
                </motion.div>
              ))}
            </div>

            <Link
              href="/templates/lumina/reserve"
              className="inline-flex items-center gap-2 mt-10 px-8 py-4 rounded-full bg-[#0284C7] text-white text-[15px] font-bold hover:bg-[#0369A1] transition-all duration-300 shadow-lg shadow-[#0284C7]/30 hover:-translate-y-0.5"
            >
              <Calendar className="w-5 h-5" />
              احجز موعدك
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
