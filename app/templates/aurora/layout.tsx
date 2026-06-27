"use client";

import { Search, ShoppingCart, User, Coffee, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
  { name: "الرئيسية", href: "/templates/aurora" },
  { name: "المنيو", href: "/templates/aurora/menu" },
  { name: "قصتنا", href: "/templates/aurora/story" },
  { name: "المتجر", href: "/templates/aurora/shop" },
  { name: "فروعنا", href: "/templates/aurora/locations" },
  { name: "الحجز", href: "/templates/aurora/reserve" },
];

export default function AuroraLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isMenuOpen]);

  return (
    <div className="min-h-screen bg-[#050505] text-[#F3F3F3] selection:bg-[#C5A059] selection:text-white font-ar leading-relaxed tracking-wide overflow-x-hidden relative flex flex-col">
      {/* Background ambient glow - shared across all Aurora pages */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C5A059]/5 rounded-full blur-[120px] pointer-events-none z-0" />
      
      {/* Aurora Navbar */}
      <header className="relative z-50 flex items-center justify-between px-6 md:px-16 py-6 border-b border-white/5 bg-[#050505]/80 backdrop-blur-md">
        {/* Logo */}
        <Link href="/templates/aurora" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <Coffee className="w-8 h-8 text-[#C5A059]" />
          <div className="flex flex-col">
            <span className="text-[20px] font-bold tracking-wider text-[#C5A059] uppercase en-text" dir="ltr">AURORA</span>
            <span className="text-[10px] tracking-widest text-gray-400 uppercase en-text" dir="ltr">Coffee & Conversation</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link, i) => {
            const isActive = pathname === link.href || (pathname.startsWith(link.href) && link.href !== '/templates/aurora');
            // Edge case for Home so it doesn't always show active
            const isExactHome = pathname === '/templates/aurora' && link.href === '/templates/aurora';
            
            const isLinkActive = link.href === '/templates/aurora' ? isExactHome : isActive;

            return (
              <Link 
                key={i} 
                href={link.href} 
                className={`text-[13px] uppercase tracking-wider font-bold transition-colors hover:text-[#C5A059] ${isLinkActive ? "text-[#C5A059] border-b border-[#C5A059] pb-1" : "text-gray-300"}`}
              >
                {link.name}
              </Link>
            )
          })}
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-6">
          <button className="text-gray-300 hover:text-[#C5A059] transition-colors"><Search className="w-5 h-5" /></button>
          <Link href="/templates/aurora/shop" className="text-gray-300 hover:text-[#C5A059] transition-colors relative">
            <ShoppingCart className="w-5 h-5" />
            <span className="absolute -top-2 -right-2 bg-[#C5A059] text-black text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center en-text">1</span>
          </Link>
          <button className="text-gray-300 hover:text-[#C5A059] transition-colors"><User className="w-5 h-5" /></button>
          <Link href="/templates/aurora/reserve" className="px-6 py-2.5 rounded-full border border-[#C5A059] text-[#C5A059] text-[13px] font-bold tracking-wide hover:bg-[#C5A059] hover:text-black transition-all duration-300">
            احجز طاولة
          </Link>
        </div>

        {/* Mobile Toggle & Actions */}
        <div className="flex lg:hidden items-center gap-4">
          <Link href="/templates/aurora/shop" className="text-gray-300 hover:text-[#C5A059] transition-colors relative md:hidden">
            <ShoppingCart className="w-5 h-5" />
            <span className="absolute -top-2 -right-2 bg-[#C5A059] text-black text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center en-text">1</span>
          </Link>
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="text-gray-300 hover:text-[#C5A059] transition-colors focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute top-full left-0 w-full bg-[#050505]/95 backdrop-blur-lg border-b border-white/5 z-40 max-h-[calc(100vh-80px)] overflow-y-auto shadow-2xl lg:hidden"
          >
            <nav className="flex flex-col px-6 py-6 gap-4">
              {navLinks.map((link, i) => {
                const isActive = pathname === link.href || (pathname.startsWith(link.href) && link.href !== '/templates/aurora');
                const isExactHome = pathname === '/templates/aurora' && link.href === '/templates/aurora';
                const isLinkActive = link.href === '/templates/aurora' ? isExactHome : isActive;

                return (
                  <Link 
                    key={i} 
                    href={link.href} 
                    onClick={() => setIsMenuOpen(false)}
                    className={`text-[15px] uppercase tracking-wider font-bold transition-colors py-2 border-b border-white/5 last:border-b-0 hover:text-[#C5A059] ${isLinkActive ? "text-[#C5A059]" : "text-gray-300"}`}
                  >
                    {link.name}
                  </Link>
                );
              })}
              
              {/* Mobile Actions in Menu */}
              <div className="flex flex-col gap-4 mt-4 pt-4 border-t border-white/10 md:hidden">
                <div className="flex items-center gap-6 py-2">
                  <button className="text-gray-300 hover:text-[#C5A059] transition-colors flex items-center gap-2 text-sm">
                    <Search className="w-5 h-5" /> <span>بحث</span>
                  </button>
                  <Link href="/templates/aurora/shop" onClick={() => setIsMenuOpen(false)} className="text-gray-300 hover:text-[#C5A059] transition-colors relative flex items-center gap-2 text-sm">
                    <ShoppingCart className="w-5 h-5" /> <span>المتجر</span>
                    <span className="bg-[#C5A059] text-black text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center en-text">1</span>
                  </Link>
                  <button className="text-gray-300 hover:text-[#C5A059] transition-colors flex items-center gap-2 text-sm">
                    <User className="w-5 h-5" /> <span>حسابي</span>
                  </button>
                </div>
                <Link 
                  href="/templates/aurora/reserve" 
                  onClick={() => setIsMenuOpen(false)}
                  className="w-full text-center py-3 rounded-full border border-[#C5A059] text-[#C5A059] text-[14px] font-bold hover:bg-[#C5A059] hover:text-black transition-all duration-300"
                >
                  احجز طاولة
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <div className="flex-1 relative z-10 w-full">
        {children}
      </div>

      {/* Aurora Footer */}
      <footer className="relative z-20 border-t border-white/5 bg-[#050505] pt-16 pb-8 px-6 md:px-16 mt-auto">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <Coffee className="w-6 h-6 text-[#C5A059]" />
              <span className="text-[18px] font-bold tracking-wider text-[#C5A059] uppercase en-text" dir="ltr">AURORA</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              نقدم لكم أرقى تجربة قهوة في المدينة. مزيج من الفخامة والشغف في كل كوب.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 text-sm">روابط سريعة</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><Link href="/templates/aurora/menu" className="hover:text-[#C5A059] transition-colors">المنيو</Link></li>
              <li><Link href="/templates/aurora/story" className="hover:text-[#C5A059] transition-colors">قصتنا</Link></li>
              <li><Link href="/templates/aurora/locations" className="hover:text-[#C5A059] transition-colors">فروعنا</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-sm">ساعات العمل</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li>السبت - الخميس: 7 ص - 12 م</li>
              <li>الجمعة: 1 م - 1 ص</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-sm">النشرة البريدية</h4>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              اشترك ليصلك جديدنا من القهوة المختصة والعروض الحصرية.
            </p>
            <div className="flex items-center gap-2">
              <input type="email" placeholder="البريد الإلكتروني" className="bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm w-full focus:outline-none focus:border-[#C5A059] text-white" />
              <button className="bg-[#C5A059] text-black px-4 py-2.5 rounded-lg font-bold hover:bg-[#b08d30] transition-colors">
                اشترك
              </button>
            </div>
          </div>
        </div>
        
        <div className="max-w-[1200px] mx-auto text-center border-t border-white/5 pt-8 text-gray-500 text-xs" suppressHydrationWarning>
          جميع الحقوق محفوظة &copy; {new Date().getFullYear()} - مقهى أورورا.
        </div>
      </footer>
    </div>
  );
}
