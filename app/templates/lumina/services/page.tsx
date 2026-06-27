"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Smile, Sparkles, ShieldCheck, Stethoscope, Heart, Award, ArrowLeft, CheckCircle2 } from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const services = [
  {
    icon: Smile,
    title: "تقويم الأسنان",
    desc: "نقدم أحدث تقنيات التقويم المعدني والشفاف لتصحيح اصطفاف الأسنان ومنحك ابتسامة متناسقة.",
    features: ["تقويم معدني تقليدي", "تقويم شفاف (إنفيزالاين)", "تقويم خلفي (للسان)", "متابعة دورية"],
    image: "https://images.unsplash.com/photo-1612277795421-9bc7706a4a34?q=80&w=1000&auto=format&fit=crop",
    color: "#0284C7",
  },
  {
    icon: Sparkles,
    title: "تجميل الأسنان",
    desc: "ابتسامة هوليوود بأحدث تقنيات التبييض والفينير واللومينير لتمنحك إطلالة ساحرة.",
    features: ["تبييض بالليزر", "فينير خزفي", "لومينير فائق الرقة", "إعادة تشكيل اللثة"],
    image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=1000&auto=format&fit=crop",
    color: "#38BDF8",
  },
  {
    icon: ShieldCheck,
    title: "زراعة الأسنان",
    desc: "زراعة دائمة تعوض الأسنان المفقودة بأداء طبيعي يدوم مدى الحياة بأحدث التقنيات.",
    features: ["زراعة فورية", "زراعة كومبيوترية", "عظام وزرع", "تاج خزفي"],
    image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?q=80&w=1000&auto=format&fit=crop",
    color: "#0EA5E9",
  },
  {
    icon: Stethoscope,
    title: "علاج الجذور",
    desc: "علاج عصب الأسنان بدون ألم بأحدث الأجهزة الرقمية لإنقاذ سنك الطبيعي.",
    features: ["علاج قنوات دقيق", "تجهيز حشوات", "إعادة بناء السن", "متابعة بعد العلاج"],
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1000&auto=format&fit=crop",
    color: "#0284C7",
  },
  {
    icon: Heart,
    title: "طب أسنان الأطفال",
    desc: "رعاية لطيفة لأسنان أطفالك في بيئة محببة وآمنة تجعلهم يحبون زيارة الطبيب.",
    features: ["فحص دوري", "وقاية بالفلورايد", "حشوات ملونة", "توعية صحية"],
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1000&auto=format&fit=crop",
    color: "#38BDF8",
  },
  {
    icon: Award,
    title: "حشوات تجميلية",
    desc: "حشوات بلون الأسنان الطبيعي تدوم طويلاً وتمنحك إطلالة طبيعية متناسقة.",
    features: ["حشوات كومبوزيت", "حشوات خزفية", "ترميم تجميلي", "ضمان الجودة"],
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1000&auto=format&fit=crop",
    color: "#0EA5E9",
  },
];

export default function LuminaServicesPage() {
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
            خدماتنا الطبية
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-[40px] md:text-[60px] font-bold text-[#0F172A] mb-6"
          >
            رعاية متكاملة <span className="text-[#0284C7]">لأسنانك</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-[#475569] text-[16px] md:text-[18px] max-w-[600px] mx-auto leading-relaxed"
          >
            نقدم باقة شاملة من خدمات طب وتجميل الأسنان بأحدث التقنيات وأمهر الأطباء المتخصصين.
          </motion.p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 space-y-20">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "lg:[direction:ltr]" : ""}`}
            >
              {/* Image */}
              <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-xl shadow-[#0284C7]/10 [direction:rtl]">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/30 to-transparent" />
                <div
                  className="absolute top-6 right-6 w-14 h-14 rounded-2xl flex items-center justify-center backdrop-blur-md"
                  style={{ backgroundColor: service.color + "30" }}
                >
                  <service.icon className="w-7 h-7 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="[direction:rtl]">
                <h2 className="text-[28px] md:text-[36px] font-bold text-[#0F172A] mb-4">{service.title}</h2>
                <p className="text-[#475569] text-[16px] leading-relaxed mb-6">{service.desc}</p>

                <div className="grid grid-cols-2 gap-3 mb-8">
                  {service.features.map((f, fi) => (
                    <div key={fi} className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 shrink-0" style={{ color: service.color }} />
                      <span className="text-[#0F172A] text-[14px] font-medium">{f}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href="/templates/lumina/reserve"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white text-[14px] font-bold transition-all duration-300 hover:-translate-y-0.5 shadow-lg"
                  style={{ backgroundColor: service.color, boxShadow: `0 8px 20px ${service.color}40` }}
                >
                  <Calendar className="w-4 h-4" />
                  احجز هذه الخدمة
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-[1280px] mx-auto px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-l from-[#0F172A] via-[#0284C7] to-[#38BDF8] p-10 md:p-16 text-center"
          >
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
            <div className="relative z-10">
              <h2 className="text-[28px] md:text-[40px] font-bold text-white mb-4">
                لم تجد ما تبحث عنه؟
              </h2>
              <p className="text-white/80 text-[16px] max-w-[500px] mx-auto mb-8">
                تواصل معنا وسيساعدك فريقنا في اختيار الخدمة المناسبة لك.
              </p>
              <Link
                href="/templates/lumina/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-[#0284C7] text-[15px] font-bold hover:bg-[#F8FAFC] transition-all duration-300 shadow-xl hover:-translate-y-0.5"
              >
                تواصل معنا
                <ArrowLeft className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
