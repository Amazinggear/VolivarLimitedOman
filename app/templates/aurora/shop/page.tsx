"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, Star } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const products = [
  {
    id: 1,
    name: "مزيج أورورا الكلاسيكي",
    desc: "مزيج حصري من حبوب إثيوبيا وكولومبيا، بنكهات الشوكولاتة والكراميل.",
    price: "85 ر.س",
    weight: "250g",
    image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "قهوة كوستاريكا المختصة",
    desc: "معالجة عسلية، تتميز بإيحاءات الفواكه الاستوائية والعسل الصافي.",
    price: "110 ر.س",
    weight: "250g",
    image: "https://images.unsplash.com/photo-1587734195503-904fca47e0e9?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "أداة التقطير V60 (إصدار أورورا الذهبي)",
    desc: "قمع تقطير سيراميك مع طلاء ذهبي داخلي لحفظ الحرارة بشكل مثالي.",
    price: "145 ر.س",
    weight: "Equipment",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 4,
    name: "كوب أورورا الحافظ للحرارة",
    desc: "كوب أسود مطفي مع شعار أورورا، يحفظ الحرارة لمدة 6 ساعات.",
    price: "65 ر.س",
    weight: "350ml",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=800&auto=format&fit=crop"
  }
];

export default function ShopPage() {
  const [showToast, setShowToast] = useState(false);

  const handleAddToCart = () => {
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 2000);
  };

  return (
    <main className="py-20 px-6 md:px-16 min-h-screen">
      <motion.div 
        initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
        className="text-center mb-20"
      >
        <h1 className="text-[40px] md:text-[60px] font-bold text-white mb-4">
          متجر <span className="text-[#C5A059]">أورورا</span>
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          انقل تجربة المقهى الفاخرة إلى منزلك مع مختاراتنا من حبوب القهوة المحمصة طازجاً وأدوات التحضير الاحترافية.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-[1400px] mx-auto">
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-[#0A0A0A] border border-white/5 rounded-3xl overflow-hidden group hover:border-[#C5A059]/50 transition-all duration-500 flex flex-col"
          >
            {/* Image Container */}
            <div className="relative h-[300px] w-full overflow-hidden bg-[#111]">
              <Image 
                src={product.image} 
                alt={product.name} 
                fill 
                className="object-cover transform group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100" 
              />
              <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs text-white border border-white/10 en-text">
                {product.weight}
              </div>
            </div>

            {/* Content */}
            <div className="p-6 flex-1 flex flex-col">
              <div className="flex text-[#C5A059] mb-3">
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2">{product.name}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1">
                {product.desc}
              </p>
              
              <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/10">
                <span className="text-[#C5A059] font-bold text-xl en-text">{product.price}</span>
                <button 
                  onClick={handleAddToCart}
                  aria-label="أضف إلى السلة"
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-[#C5A059] hover:text-black transition-colors"
                >
                  <ShoppingBag className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Toast Notification */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 50, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: 50, x: "-50%" }}
            className="fixed bottom-10 left-1/2 bg-zinc-900 border border-[#C5A059] text-white px-6 py-3 rounded-full flex items-center gap-3 shadow-lg z-50 font-bold"
          >
            <span className="w-2 h-2 rounded-full bg-[#C5A059]" />
            تم إضافة المنتج للسلة
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
