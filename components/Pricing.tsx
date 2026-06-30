"use client";

import { motion, useInView } from "framer-motion";
import { CheckCircle2, Star, Plus } from "lucide-react";
import { useRef, useState } from "react";

export default function Pricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px" });

  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);

  const toggleAddon = (id: string) => {
    setSelectedAddons(prev => 
      prev.includes(id) ? prev.filter(a => a !== id) : [...prev, id]
    );
  };

  const plans = [
    {
      name: "Starter",
      price: "49",
      monthly: "+ 5 ريال شهرياً",
      features: [
        "صفحة هبوط احترافية",
        "استضافة ونطاق مجاني",
        "ربط واتساب مباشر"
      ],
      highlight: false,
      buttonText: "ابدأ الآن",
    },
    {
      name: "Business",
      price: "99",
      monthly: "+ 10 ريال شهرياً",
      features: [
        "موقع متعدد الصفحات",
        "ربط واتساب والخرائط",
        "نموذج حجز اتصال",
        "دعم فني وصيانة"
      ],
      highlight: true,
      buttonText: "اطلب الباقة الآن",
    },
    {
      name: "Pro",
      price: "199",
      monthly: "+ 20 ريال شهرياً",
      features: [
        "تصميم مخصص بالكامل",
        "متجر إلكتروني متكامل",
        "تحسين محركات البحث",
        "دعم متكامل 24/7"
      ],
      highlight: false,
      buttonText: "ابدأ كالمحترفين",
    }
  ];

  const addons = [
    { id: "seo", title: "تحسين SEO متقدم", price: "40", icon: "🚀" },
    { id: "lang", title: "لغة إضافية", price: "30", icon: "🌍" },
    { id: "logo", title: "تصميم شعار احترافي", price: "50", icon: "🎨" },
    { id: "copy", title: "كتابة محتوى إبداعي", price: "45", icon: "✍️" },
  ];

  return (
    <motion.section 
      id="pricing" 
      ref={ref}
      animate={{ 
        backgroundColor: isInView ? "#ffffff" : "#0e0e0e",
        color: isInView ? "#111111" : "#e5e2e1"
      }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="py-[140px] px-5 md:px-20 relative overflow-hidden"
    >
      <div className="max-w-[1280px] mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            animate={{ color: isInView ? "#000000" : "#ffffff" }}
            className="text-[36px] md:text-[48px] font-bold mb-6"
          >
            باقات شفافة، <span className="text-primary font-black">بدون مفاجآت</span>
          </motion.h2>
          <motion.p 
            animate={{ color: isInView ? "#4b5563" : "#c3c5d9" }}
            className="text-[18px] max-w-2xl mx-auto"
          >
            استثمارك الرقمي يبدأ من هنا. اختر الباقة التي تناسب حجم طموحك، وسنتكفل بالباقي.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center mb-20">
          {plans.map((plan, idx) => (
            <div key={idx} className={`relative group ${plan.highlight ? 'z-20' : 'z-10'}`}>
              
              {/* Static Border + Animated Rotating Highlight */}
              <div className={`absolute -inset-[2px] rounded-[2.5rem] overflow-hidden pointer-events-none transition-all duration-300 ${isInView ? 'bg-gray-200' : 'bg-white/10'} ${plan.highlight ? 'opacity-100' : 'opacity-60 group-hover:opacity-100'}`}>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] aspect-square bg-[conic-gradient(from_0deg,transparent_0_270deg,#0057ff_360deg)] animate-[spin_3s_linear_infinite]" />
              </div>
              
              {/* Inner Card */}
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  opacity: { delay: idx * 0.1, duration: 0.4 },
                  y: { delay: idx * 0.1, duration: 0.4 },
                  backgroundColor: { duration: 0.4 }
                }}
                animate={{
                  backgroundColor: isInView 
                    ? (plan.highlight ? "#ffffff" : "#f8fafc") 
                    : (plan.highlight ? "#111111" : "#1a1a1a"),
                }}
                className={`p-10 flex flex-col rounded-[2.5rem] relative transition-shadow duration-300 h-full w-full border-[1px] border-transparent`}
                style={{
                  boxShadow: plan.highlight 
                    ? (isInView ? "0 40px 80px -20px rgba(0,87,255,0.15)" : "0 0 50px rgba(0,87,255,0.15)")
                    : (isInView ? "0 10px 30px -10px rgba(0,0,0,0.05)" : "0 10px 30px -10px rgba(0,0,0,0.5)")
                }}
              >
                {plan.highlight && (
                  <div className="absolute -top-5 right-10 bg-gradient-to-r from-primary to-blue-400 text-white font-bold text-[14px] px-6 py-2 rounded-full shadow-[0_10px_20px_rgba(0,87,255,0.3)] flex items-center gap-2 z-30">
                    <Star className="w-4 h-4 fill-white" />
                    الأكثر طلباً
                  </div>
                )}
                
                <motion.h3 
                  animate={{ color: plan.highlight ? "#004de6" : (isInView ? "#0f172a" : "#ffffff") }}
                  className="text-[36px] font-black mb-2 en-text text-left relative z-10" 
                  dir="ltr"
                >
                  {plan.name}
                </motion.h3>
                
                <motion.div 
                  animate={{ borderColor: isInView ? "#e2e8f0" : "rgba(255,255,255,0.1)" }}
                  transition={{ duration: 0.4 }}
                  className="mb-8 pb-8 border-b relative z-10"
                >
                  <div className={`flex items-end gap-2 font-black ${plan.highlight ? 'text-[#004de6]' : (isInView ? 'text-[#004de6]' : 'text-primary')}`}>
                    <span className="text-[64px] leading-none tracking-tight">{plan.price}</span>
                    <motion.span animate={{ color: isInView ? "#475569" : "#94a3b8" }} className="text-[18px] mb-2 font-bold">ريال تجهيز</motion.span>
                  </div>
                  <motion.div animate={{ color: isInView ? "#334155" : "#cbd5e1" }} className="mt-4 font-bold text-[16px] flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${plan.highlight ? 'bg-[#004de6]' : (isInView ? 'bg-[#004de6]' : 'bg-primary/50')}`} />
                    {plan.monthly}
                  </motion.div>
                </motion.div>

                <ul className="flex flex-col gap-5 mb-12 flex-grow relative z-10">
                  {plan.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-4">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${plan.highlight ? 'bg-[#004de6]/10' : (isInView ? 'bg-gray-200' : 'bg-white/10')}`}>
                        <CheckCircle2 className={`w-4 h-4 ${plan.highlight ? 'text-[#004de6]' : (isInView ? 'text-gray-600' : 'text-white/60')}`} />
                      </div>
                      <motion.span animate={{ color: isInView ? "#1e293b" : "#e2e8f0" }} className="text-[16px] font-semibold leading-relaxed">
                        {feature}
                      </motion.span>
                    </li>
                  ))}
                </ul>

                <button 
                  className={`w-full py-4 rounded-full font-bold text-[18px] transition-all duration-500 overflow-hidden relative group/btn z-10 ${
                    plan.highlight 
                      ? "bg-[#004de6] text-white shadow-[0_15px_30px_rgba(0,77,230,0.3)] hover:shadow-[0_20px_40px_rgba(0,77,230,0.4)] hover:-translate-y-1" 
                      : (isInView ? "bg-white text-gray-900 border-2 border-gray-200 hover:border-primary hover:text-primary shadow-sm" : "bg-white/5 text-white hover:bg-white/10 border-2 border-white/10")
                  }`}
                >
                  {plan.highlight && (
                    <div className="absolute inset-0 -translate-x-[150%] skew-x-[30deg] bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover/btn:animate-[shine_1.5s_ease-in-out]" />
                  )}
                  <span className="relative z-10">{plan.buttonText}</span>
                </button>
              </motion.div>
            </div>
          ))}
        </div>

        {/* Interactive Add-on Services Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="text-center mb-10">
            <h3 className={`text-[28px] font-bold mb-3 ${isInView ? 'text-gray-900' : 'text-white'}`}>
              خدمات إضافية حسب الطلب
            </h3>
            <p className={`text-[16px] ${isInView ? 'text-gray-600' : 'text-gray-400'}`}>
              خصص باقتك بضغطة زر واحدة. أضف الميزات التي تحتاجها فقط.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {addons.map((addon) => {
              const isSelected = selectedAddons.includes(addon.id);
              return (
                <button
                  key={addon.id}
                  onClick={() => toggleAddon(addon.id)}
                  className={`relative flex items-center gap-3 px-6 py-4 rounded-full transition-all duration-300 overflow-hidden ${
                    isSelected 
                      ? "bg-primary text-white shadow-[0_10px_20px_rgba(0,87,255,0.2)] border-2 border-primary scale-105" 
                      : `border-2 ${isInView ? 'bg-white border-gray-200 text-gray-700 hover:border-primary/50' : 'bg-white/5 border-white/10 text-white hover:bg-white/10'}`
                  }`}
                >
                  <span className="text-[20px]">{addon.icon}</span>
                  <span className="font-bold text-[16px]">{addon.title}</span>
                  <span className={`text-[14px] font-black en-text ml-2 pl-4 border-l ${isSelected ? 'border-white/20' : (isInView ? 'border-gray-200' : 'border-white/10')}`}>
                    +{addon.price} OMR
                  </span>

                  {/* Add/Remove Icon */}
                  <div className={`mr-2 w-6 h-6 rounded-full flex items-center justify-center transition-colors ${isSelected ? 'bg-white text-primary' : (isInView ? 'bg-gray-100 text-gray-400' : 'bg-white/10 text-white/50')}`}>
                    {isSelected ? <CheckCircle2 className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>

                  {/* Ripple effect on select */}
                  {isSelected && (
                    <motion.div 
                      layoutId={`glow-${addon.id}`}
                      className="absolute inset-0 bg-white/10"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </motion.div>

      </div>

      <style jsx global>{`
        @keyframes shine {
          100% { transform: translateX(150%) skew-x(30deg); }
        }
      `}</style>
    </motion.section>
  );
}
