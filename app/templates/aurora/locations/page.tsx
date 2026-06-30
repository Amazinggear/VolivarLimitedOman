"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Image from "next/image";

export default function LocationsPage() {
  const branches = [
    {
      id: 1,
      name: "فرع العقيق (الرئيسي)",
      address: "طريق الملك فهد، حي العقيق، الرياض",
      phone: "+966 50 123 4567",
      hours: "7:00 ص - 12:00 م (الجمعة 1:00 م - 1:00 ص)",
      image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: 2,
      name: "فرع واجهة الرياض",
      address: "منطقة البلازا، واجهة الرياض",
      phone: "+966 50 987 6543",
      hours: "8:00 ص - 1:00 ص (الجمعة 2:00 م - 2:00 ص)",
      image: "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?q=80&w=1000&auto=format&fit=crop"
    }
  ];

  return (
    <main className="py-20 px-6 md:px-16 min-h-screen">
      <motion.div 
        initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
        className="text-center mb-20"
      >
        <h1 className="text-[40px] md:text-[60px] font-bold text-white mb-4">
          فروعنا <span className="text-[#C5A059]">حولك</span>
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          ننتظرك في فروعنا المصممة لتكون مساحتك المفضلة للإلهام والعمل واللقاءات الدافئة.
        </p>
      </motion.div>

      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {branches.map((branch, index) => (
          <motion.div 
            key={branch.id}
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.2, duration: 0.8 }}
            className="bg-[#0A0A0A] border border-white/5 rounded-3xl overflow-hidden group hover:border-[#C5A059]/30 transition-colors duration-500 flex flex-col"
          >
            <div className="relative h-[250px] w-full overflow-hidden">
              <Image src={branch.image} alt={branch.name} fill className="object-cover transform group-hover:scale-105 transition-transform duration-1000 opacity-80 group-hover:opacity-100" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-transparent" />
            </div>
            
            <div className="p-8 relative -mt-10 z-10 flex flex-col flex-1">
              <h2 className="text-2xl font-bold text-white mb-6 group-hover:text-[#C5A059] transition-colors">{branch.name}</h2>
              
              <div className="space-y-5 flex-1">
                <div className="flex items-start gap-4 text-gray-400">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-[#C5A059]" />
                  </div>
                  <div className="pt-2">{branch.address}</div>
                </div>
                
                <div className="flex items-start gap-4 text-gray-400">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-[#C5A059]" />
                  </div>
                  <div className="pt-2 en-text" dir="ltr">{branch.hours}</div>
                </div>

                <div className="flex items-start gap-4 text-gray-400">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-[#C5A059]" />
                  </div>
                  <div className="pt-2 en-text" dir="ltr">{branch.phone}</div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex gap-4">
                <button className="flex-1 bg-white/5 hover:bg-[#C5A059] text-white hover:text-black py-3 rounded-xl font-bold transition-colors">
                  اتجاهات الخريطة
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Stats Section */}
      <section className="max-w-[1200px] mx-auto mt-24 border-t border-white/5 pt-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="flex flex-col gap-2">
            <span className="text-[40px] md:text-[50px] font-bold text-[#C5A059] en-text">8+</span>
            <span className="text-gray-400 text-sm">سنوات من الإبداع</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-[40px] md:text-[50px] font-bold text-[#C5A059] en-text">1,500+</span>
            <span className="text-gray-400 text-sm">كوب يومياً</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-[40px] md:text-[50px] font-bold text-[#C5A059] en-text">2</span>
            <span className="text-gray-400 text-sm">فروع رئيسية</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-[40px] md:text-[50px] font-bold text-[#C5A059] en-text">24/7</span>
            <span className="text-gray-400 text-sm">دعم متكامل</span>
          </div>
        </div>
      </section>
    </main>
  );
}
