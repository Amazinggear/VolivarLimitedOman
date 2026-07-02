"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Award, GraduationCap, Star, ArrowLeft } from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const doctors = [
  {
    name: "د. سارة المنصور",
    role: "استشارية تقويم الأسنان",
    image: "/images/lumina/doctors/sara.jpg",
    exp: "+15 سنة",
    bio: "متخصصة في تقويم الأسنان المعدني والشفاف، حاصلة على البورد الأمريكي في التقويم.",
    certs: ["البورد الأمريكي للتقويم", "ماجستير طب الأسنان", "عضو الجمعية الأمريكية"],
  },
  {
    name: "د. خالد العبدالله",
    role: "استشاري زراعة وتجميل الأسنان",
    image: "/images/lumina/doctors/khaled.jpg",
    exp: "+18 سنة",
    bio: "خبير في زراعة الأسنان والتجميل، أجرى أكثر من 3000 عملية زراعة ناجحة.",
    certs: ["البورد الأوروبي للزراعة", "زمالة في التجميل", "عضو ICOI"],
  },
  {
    name: "د. نورة الشمري",
    role: "أخصائية طب أسنان الأطفال",
    image: "/images/lumina/doctors/noura.jpg",
    exp: "+10 سنوات",
    bio: "متخصصة في علاج أسنان الأطفال بأسلوب لطيف يجعل الطفل يحب زيارة العيادة.",
    certs: ["بورد طب الأطفال", "ماجستير سلوك الأسنان", "عضو IAPD"],
  },
  {
    name: "د. عبدالعزيز الحربي",
    role: "استشاري علاج الجذور",
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=800&auto=format&fit=crop",
    exp: "+12 سنة",
    bio: "متخصص في علاج الجذور المتقدم بإستخدام المجهر وأحدث التقنيات الرقمية.",
    certs: ["بورد علاج الجذور", "زمالة مجهرية", "عضو AAE"],
  },
];

export default function LuminaDoctorsPage() {
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
            فريقنا الطبي
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-[40px] md:text-[60px] font-bold text-[#0F172A] mb-6"
          >
            أطباء <span className="text-[#0284C7]">يمنحونك الثقة</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-[#475569] text-[16px] md:text-[18px] max-w-[600px] mx-auto leading-relaxed"
          >
            نخبة من أمهر الأطباء المتخصصين بخبرات دولية وشغف لمنحك أفضل رعاية.
          </motion.p>
        </div>
      </section>

      {/* Doctors Grid */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          {doctors.map((doc, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.7 }}
              className="group bg-[#F8FAFC] rounded-[2rem] overflow-hidden border border-[#0F172A]/5 hover:border-[#0284C7]/30 hover:shadow-xl hover:shadow-[#0284C7]/10 transition-[border-color,box-shadow] duration-500"
            >
              <div className="grid grid-cols-1 sm:grid-cols-5">
                {/* Image */}
                <div className="sm:col-span-2 relative aspect-square sm:aspect-auto overflow-hidden">
                  <Image
                    src={doc.image}
                    alt={doc.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/40 to-transparent" />
                  <div className="absolute bottom-4 right-4 bg-[#0284C7] text-white text-[12px] font-bold px-3 py-1.5 rounded-full">
                    {doc.exp}
                  </div>
                </div>

                {/* Content */}
                <div className="sm:col-span-3 p-6 md:p-8 flex flex-col">
                  <div className="flex items-center gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} className="w-4 h-4 fill-[#FBBF24] text-[#FBBF24]" />
                    ))}
                  </div>
                  <h3 className="text-[22px] font-bold text-[#0F172A] mb-1">{doc.name}</h3>
                  <p className="text-[#0284C7] text-[14px] font-bold mb-4">{doc.role}</p>
                  <p className="text-[#475569] text-[14px] leading-relaxed mb-5">{doc.bio}</p>

                  <div className="space-y-2 mt-auto">
                    {doc.certs.map((cert, ci) => (
                      <div key={ci} className="flex items-center gap-2">
                        <GraduationCap className="w-4 h-4 text-[#0284C7] shrink-0" />
                        <span className="text-[#475569] text-[13px]">{cert}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href="/templates/lumina/reserve"
                    className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 rounded-full bg-[#0284C7]/10 text-[#0284C7] text-[13px] font-bold hover:bg-[#0284C7] hover:text-white transition-all duration-300 self-start"
                  >
                    <Calendar className="w-4 h-4" />
                    احجز مع الطبيب
                  </Link>
                </div>
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
              <Award className="w-12 h-12 text-white mx-auto mb-4" />
              <h2 className="text-[28px] md:text-[40px] font-bold text-white mb-4">
                احجز موعدك مع نخبة الأطباء
              </h2>
              <p className="text-white/80 text-[16px] max-w-[500px] mx-auto mb-8">
                استشارة أولى مجانية لتقييم حالتك ووضع خطة العلاج المناسبة.
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
    </>
  );
}
