"use client";

import { motion, useInView } from "framer-motion";
import { CheckCircle2, Star } from "lucide-react";
import { useRef, useState } from "react";

export default function Pricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px" });

  const [selectedHosting, setSelectedHosting] = useState<string>("basic");

  const plans = [
    {
      name: "Starter",
      originalPrice: 79,
      price: 59,
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
      originalPrice: 149,
      price: 99,
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
      originalPrice: 299,
      price: 199,
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

  const hostingPlans = [
    {
      id: "basic",
      name: "أساسي",
      price: "10",
      currency: "ر.ع",
      features: "استضافة، أمان، دعم فني",
    },
    {
      id: "advanced",
      name: "متقدم",
      price: "20",
      currency: "ر.ع",
      features: "تعديلات شهرية، أولوية الدعم، نسخ احتياطي",
    }
  ];

  const handleOrder = (plan: { name: string; price: number }) => {
    const selectedHostingPlan = hostingPlans.find(h => h.id === selectedHosting);
    const hostingName = selectedHostingPlan ? selectedHostingPlan.name : "بدون استضافة";
    const hostingPrice = selectedHostingPlan ? parseInt(selectedHostingPlan.price) : 0;
    const total = plan.price + hostingPrice;
    
    const messageText = `مرحبا Volivar ! أود طلب الباقة التالية:
- الباقة: ${plan.name} (${plan.price} ر.ع)
- الاستضافة والصيانة: ${hostingName} (${hostingPrice} ر.ع)
--------------------------------------
الإجمالي: ${total} ر.ع.`;

    const phone = "96894789593";
    const encoded = encodeURIComponent(messageText);
    const whatsappUrl = `https://wa.me/${phone}?text=${encoded}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <motion.section 
      id="pricing" 
      ref={ref}
      animate={{ 
        backgroundColor: isInView ? "#ffffff" : "#0e0e0e",
        color: isInView ? "#111111" : "#e5e2e1"
      }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="py-16 sm:py-20 md:py-[140px] px-4 sm:px-5 md:px-20 relative overflow-hidden"
    >
      <div className="max-w-[1280px] mx-auto relative z-10">
        <div className="text-center mb-10 sm:mb-14 md:mb-20">
          <motion.h2 
            animate={{ color: isInView ? "#000000" : "#ffffff" }}
            className="text-[28px] sm:text-[36px] md:text-[48px] font-bold mb-4 sm:mb-6"
          >
            باقات شفافة، <span className="text-primary font-black">بدون مفاجآت</span>
          </motion.h2>
          <motion.p 
            animate={{ color: isInView ? "#4b5563" : "#c3c5d9" }}
            className="text-[15px] sm:text-[16px] md:text-[18px] max-w-2xl mx-auto"
          >
            اختر الباقة المناسبة لك.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 md:gap-8 items-center mb-12 sm:mb-16 md:mb-20">
          {plans.map((plan, idx) => (
            <div key={idx} className={`relative group ${plan.highlight ? 'z-20' : 'z-10'}`}>
              
              {/* Static Border + Animated Rotating Highlight — animation disabled on mobile via CSS */}
              <div className={`absolute -inset-[2px] rounded-2xl sm:rounded-[2.5rem] overflow-hidden pointer-events-none transition-all duration-300 ${isInView ? 'bg-gray-200' : 'bg-white/10'} ${plan.highlight ? 'opacity-100' : 'opacity-60 group-hover:opacity-100'}`}>
                <div className="hidden sm:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] aspect-square bg-[conic-gradient(from_0deg,transparent_0_270deg,#0057ff_360deg)] pricing-spin-animation" />
                <div className="sm:hidden absolute inset-0 bg-primary/20" />
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
                className="p-6 sm:p-8 md:p-10 flex flex-col rounded-2xl sm:rounded-[2.5rem] relative transition-shadow duration-300 h-full w-full border-[1px] border-transparent"
                style={{
                  boxShadow: plan.highlight 
                    ? (isInView ? "0 40px 80px -20px rgba(0,87,255,0.15)" : "0 0 50px rgba(0,87,255,0.15)")
                    : (isInView ? "0 10px 30px -10px rgba(0,0,0,0.05)" : "0 10px 30px -10px rgba(0,0,0,0.5)")
                }}
              >
                {plan.highlight && (
                  <div className="absolute -top-4 sm:-top-5 right-6 sm:right-10 bg-gradient-to-r from-primary to-blue-400 text-white font-bold text-[12px] sm:text-[14px] px-4 sm:px-6 py-1.5 sm:py-2 rounded-full shadow-[0_10px_20px_rgba(0,87,255,0.3)] flex items-center gap-1.5 sm:gap-2 z-30">
                    <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-white" />
                    الأكثر طلباً
                  </div>
                )}
                
                <motion.h3 
                  animate={{ color: plan.highlight ? "#004de6" : (isInView ? "#0f172a" : "#ffffff") }}
                  className="text-[28px] sm:text-[32px] md:text-[36px] font-black mb-2 en-text text-left relative z-10" 
                  dir="ltr"
                >
                  {plan.name}
                </motion.h3>
                
                <motion.div 
                  animate={{ borderColor: isInView ? "#e2e8f0" : "rgba(255,255,255,0.1)" }}
                  transition={{ duration: 0.4 }}
                  className="mb-6 sm:mb-8 pb-6 sm:pb-8 border-b relative z-10 flex flex-col gap-2"
                >
                  {/* Original Price (with line-through) */}
                  <div className="flex items-center gap-1 text-[16px] sm:text-[18px] font-bold opacity-50 line-through">
                    <span>{plan.originalPrice}</span>
                    <span>ر.ع</span>
                  </div>

                  {/* Discounted Price & Badge */}
                  <div className="flex items-center justify-between w-full">
                    <div className={`flex items-end gap-1.5 font-black ${plan.highlight ? 'text-[#004de6]' : (isInView ? 'text-[#004de6]' : 'text-primary')}`}>
                      <span className="text-[48px] sm:text-[56px] md:text-[64px] leading-none tracking-tight">
                        {plan.price}
                      </span>
                      <motion.span animate={{ color: isInView ? "#475569" : "#94a3b8" }} className="text-[15px] sm:text-[16px] md:text-[18px] mb-2 font-bold">
                        ر.ع
                      </motion.span>
                    </div>
                    
                    <span className="text-[12px] sm:text-[13px] font-extrabold bg-red-500 text-white px-2.5 py-1 rounded-full shadow-sm">
                      خصم {Math.round(((plan.originalPrice - plan.price) / plan.originalPrice) * 100)}%
                    </span>
                  </div>
                </motion.div>

                <ul className="flex flex-col gap-3 sm:gap-4 md:gap-5 mb-8 sm:mb-10 md:mb-12 flex-grow relative z-10">
                  {plan.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-3 sm:gap-4">
                      <div className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center shrink-0 ${plan.highlight ? 'bg-[#004de6]/10' : (isInView ? 'bg-gray-200' : 'bg-white/10')}`}>
                        <CheckCircle2 className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${plan.highlight ? 'text-[#004de6]' : (isInView ? 'text-gray-600' : 'text-white/60')}`} />
                      </div>
                      <motion.span animate={{ color: isInView ? "#1e293b" : "#e2e8f0" }} className="text-[14px] sm:text-[15px] md:text-[16px] font-semibold leading-relaxed">
                        {feature}
                      </motion.span>
                    </li>
                  ))}
                </ul>

                <button 
                  onClick={() => handleOrder(plan)}
                  className={`w-full py-3.5 sm:py-4 rounded-full font-bold text-[15px] sm:text-[16px] md:text-[18px] transition-all duration-500 overflow-hidden relative group/btn z-10 min-h-[48px] ${
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

        {/* Interactive Hosting & Maintenance Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16 md:mt-20"
        >
          <div className="text-center mb-6 sm:mb-8 md:mb-10">
            <h3 className={`text-[22px] sm:text-[26px] md:text-[28px] font-bold mb-6 sm:mb-8 ${isInView ? 'text-gray-900' : 'text-white'}`}>
              الاستضافة والصيانة (اختياري)
            </h3>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 max-w-2xl mx-auto">
            {hostingPlans.map((plan) => {
              const isSelected = selectedHosting === plan.id;
              return (
                <button
                  key={plan.id}
                  onClick={() => setSelectedHosting(plan.id)}
                  className={`relative flex flex-col p-5 sm:p-6 rounded-xl sm:rounded-[1rem] transition-all duration-300 overflow-hidden w-full sm:w-1/2 text-right border-[1.5px] min-h-[48px] ${
                    isSelected 
                      ? (isInView ? "bg-[#f0f6ff] border-[#0057ff]" : "bg-[#0057ff]/10 border-[#0057ff]") 
                      : (isInView ? "bg-[#f4f7f9] border-transparent hover:border-gray-200" : "bg-white/5 border-transparent hover:bg-white/10")
                  }`}
                >
                  <div className="flex justify-between items-start w-full">
                    <div className="flex flex-col gap-1">
                      <span className={`font-bold text-[16px] sm:text-[18px] ${isInView ? 'text-gray-900' : 'text-white'}`}>
                        {plan.name}
                      </span>
                      <div className="flex items-center gap-1 font-bold">
                        <span className="text-[18px] sm:text-[20px] text-[#0057ff]">{plan.price}</span>
                        <span className={`text-[12px] sm:text-[13px] ${isInView ? 'text-gray-500' : 'text-gray-400'}`}>{plan.currency}</span>
                      </div>
                    </div>
                    <div className={`mt-1 shrink-0 ${isSelected ? 'text-[#0057ff]' : 'text-transparent'}`}>
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                  </div>
                  
                  <span className={`text-[12px] sm:text-[13px] mt-3 sm:mt-4 font-medium leading-relaxed ${isInView ? 'text-gray-500' : 'text-gray-400'}`}>
                    {plan.features}
                  </span>

                  {isSelected && (
                    <motion.div 
                      layoutId="hosting-glow"
                      className="absolute inset-0 bg-[#0057ff]/[0.02]"
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
