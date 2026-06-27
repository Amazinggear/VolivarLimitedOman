import type { Metadata } from "next";
import Link from "next/link";
import { Search, ShoppingBag, User, Menu } from "lucide-react";

export const metadata: Metadata = {
  title: "الماسة | Al-Masa",
  description: "المعيار العالمي للفخامة",
};

export default function AlMasaLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div dir="rtl" className="min-h-screen bg-[#050505] text-[#FAFAFA] font-ar antialiased selection:bg-[#EAEAEA] selection:text-[#050505]">
      {/* Navigation - Ultra Minimalist Glassmorphism */}
      <nav className="fixed top-0 w-full z-50 bg-[#050505]/60 backdrop-blur-2xl border-b border-white/[0.05] transition-all duration-300">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 h-[88px] flex items-center justify-between">
          <div className="flex items-center gap-16">
            <Link href="/templates/almasa" className="text-2xl font-light tracking-[0.2em] text-white">
              الماسة
            </Link>
            <div className="hidden md:flex items-center gap-10 text-[11px] font-light tracking-[0.15em] uppercase text-[#A0A0A0]">
              <Link href="/templates/almasa" className="hover:text-white transition-colors duration-500 relative group">
                الرئيسية
                <span className="absolute -bottom-3 left-0 w-full h-[1px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-right"></span>
              </Link>
              <Link href="/templates/almasa/shop" className="hover:text-white transition-colors duration-500 relative group">
                المتجر
                <span className="absolute -bottom-3 left-0 w-full h-[1px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-right"></span>
              </Link>
              <Link href="/templates/almasa/collections" className="hover:text-white transition-colors duration-500 relative group">
                المجموعات
                <span className="absolute -bottom-3 left-0 w-full h-[1px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-right"></span>
              </Link>
              <Link href="/templates/almasa/atelier" className="hover:text-white transition-colors duration-500 relative group">
                المشغل
                <span className="absolute -bottom-3 left-0 w-full h-[1px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-right"></span>
              </Link>
            </div>
          </div>
          
          <div className="flex items-center gap-8">
            <button className="text-[#A0A0A0] hover:text-white transition-colors duration-500">
              <Search className="w-[18px] h-[18px] stroke-[1.5]" />
            </button>
            <Link href="/templates/almasa/account" className="hidden md:block text-[#A0A0A0] hover:text-white transition-colors duration-500">
              <User className="w-[18px] h-[18px] stroke-[1.5]" />
            </Link>
            <button className="text-[#A0A0A0] hover:text-white transition-colors duration-500 relative group">
              <ShoppingBag className="w-[18px] h-[18px] stroke-[1.5]" />
              <span className="absolute -top-1.5 -right-2 w-3.5 h-3.5 bg-white text-[#050505] text-[9px] flex items-center justify-center rounded-full font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                0
              </span>
            </button>
            <button className="md:hidden text-[#A0A0A0] hover:text-white transition-colors duration-500">
              <Menu className="w-[20px] h-[20px] stroke-[1.5]" />
            </button>
          </div>
        </div>
      </nav>

      <main>
        {children}
      </main>
      
      {/* Footer - Minimalist & Spacious */}
      <footer className="mt-32 border-t border-white/[0.05] bg-[#020202]">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 py-24">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8">
            <div className="md:col-span-4 flex flex-col justify-between">
              <div>
                <h3 className="text-3xl font-light tracking-[0.2em] text-white mb-8">الماسة</h3>
                <p className="text-[#808080] text-sm leading-loose font-light max-w-sm">
                  نعيد تعريف الفخامة من خلال حرفية استثنائية وتصاميم تتجاوز حدود الزمن. تحف فنية تُتوارث عبر الأجيال.
                </p>
              </div>
            </div>
            
            <div className="md:col-span-2">
              <h4 className="text-white mb-8 text-[11px] tracking-[0.2em] font-medium uppercase">المتجر</h4>
              <ul className="space-y-5 text-sm text-[#808080] font-light">
                <li><Link href="#" className="hover:text-white transition-colors duration-300">الساعات الفاخرة</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors duration-300">المجوهرات الراقية</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors duration-300">الإكسسوارات</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors duration-300">إصدارات محدودة</Link></li>
              </ul>
            </div>
            
            <div className="md:col-span-2">
              <h4 className="text-white mb-8 text-[11px] tracking-[0.2em] font-medium uppercase">الدار</h4>
              <ul className="space-y-5 text-sm text-[#808080] font-light">
                <li><Link href="#" className="hover:text-white transition-colors duration-300">تاريخنا</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors duration-300">الحرفية</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors duration-300">الاستدامة</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors duration-300">المعارض</Link></li>
              </ul>
            </div>
            
            <div className="md:col-span-4">
              <h4 className="text-white mb-8 text-[11px] tracking-[0.2em] font-medium uppercase">القائمة البريدية</h4>
              <p className="text-[#808080] text-sm mb-6 font-light leading-loose">
                كن أول من يكتشف إبداعاتنا الجديدة والإصدارات الخاصة التي لا تُعرض للعامة.
              </p>
              <div className="flex border-b border-white/[0.1] focus-within:border-white transition-colors duration-500 pb-2">
                <input 
                  type="email" 
                  placeholder="بريدك الإلكتروني" 
                  className="bg-transparent border-none outline-none text-white w-full text-sm font-light placeholder:text-[#505050]"
                />
                <button className="text-[11px] tracking-[0.1em] text-white uppercase ml-4 hover:opacity-70 transition-opacity">
                  تسجيل
                </button>
              </div>
            </div>
          </div>
          
          <div className="mt-24 pt-8 border-t border-white/[0.05] flex flex-col md:flex-row items-center justify-between text-[11px] tracking-wider text-[#606060] font-light">
            <p>© {new Date().getFullYear()} الماسة. جميع الحقوق محفوظة.</p>
            <div className="flex gap-8 mt-6 md:mt-0">
              <Link href="#" className="hover:text-white transition-colors duration-300">الشروط والأحكام</Link>
              <Link href="#" className="hover:text-white transition-colors duration-300">الخصوصية</Link>
              <Link href="#" className="hover:text-white transition-colors duration-300">إمكانية الوصول</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
