"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
  { name: "الرئيسية", href: "/templates/oria" },
  { name: "الخدمات", href: "/templates/oria/services" },
  { name: "استكشف", href: "/templates/oria/explore" },
];

export default function OriaLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div dir="rtl" className="min-h-screen bg-[#0A0A0A] text-white font-ar antialiased selection:bg-[#06B6D4] selection:text-white flex flex-col">
      {/* Navigation */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? "bg-[#0A0A0A]/70 backdrop-blur-md border-b border-white/5" : "bg-transparent"}`}>
        <div className="max-w-[1400px] mx-auto px-6 h-[80px] flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/templates/oria" className="flex items-center gap-3 group">
            <span className="text-[26px] font-bold text-white tracking-wide">أوريا</span>
            <div className="flex gap-1 items-center">
                <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                <div className="w-2 h-2 rounded-full bg-red-500"></div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-5 py-2 text-[15px] font-medium transition-colors duration-300 rounded-full ${isActive ? "text-white" : "text-white/60 hover:text-white"}`}
                >
                  {link.name}
                  {isActive && (
                    <motion.span
                      layoutId="oriaNavIndicator"
                      className="absolute inset-0 -z-10 bg-white/10 rounded-full border border-white/5"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/templates/oria/login"
              className="px-6 py-2.5 rounded-full text-white/80 text-[14px] font-medium hover:text-white hover:bg-white/5 transition-all duration-300 bg-white/5"
            >
              تسجيل الدخول
            </Link>
            <Link
              href="/templates/oria/register"
              className="relative px-6 py-2.5 rounded-full bg-[#2563EB] text-white text-[14px] font-bold transition-all duration-300 hover:bg-[#1D4ED8]"
            >
              حساب جديد
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="w-10 h-10 rounded-full bg-white/5 text-white flex items-center justify-center focus:outline-none lg:hidden border border-white/10"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 w-full bg-[#0A0A0A]/95 backdrop-blur-xl border-b border-white/10 z-40 lg:hidden shadow-2xl"
            >
              <div className="flex flex-col px-6 py-8 gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-[16px] font-medium text-white/80 hover:text-white py-3 border-b border-white/5 last:border-0"
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-white/10">
                  <Link
                    href="/templates/oria/login"
                    className="w-full text-center py-3 rounded-xl bg-white/5 text-white font-medium"
                  >
                    تسجيل الدخول
                  </Link>
                  <Link
                    href="/templates/oria/register"
                    className="w-full text-center py-3 rounded-xl bg-[#2563EB] text-white font-bold"
                  >
                    حساب جديد
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Content */}
      <main className="flex-1 relative z-10 w-full flex flex-col">
        {children}
      </main>
      
      {/* Footer Minimalist */}
      <footer className="relative z-20 border-t border-white/5 bg-[#0A0A0A] py-8 mt-auto">
        <div className="max-w-[1400px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-white/40 text-sm">
            <span>&copy; {new Date().getFullYear()} أوريا للخدمات المهنية. جميع الحقوق محفوظة.</span>
          </div>
          <div className="flex gap-4">
            <Link href="#" className="text-white/40 hover:text-[#06B6D4] transition-colors text-sm">الشروط والأحكام</Link>
            <Link href="#" className="text-white/40 hover:text-[#06B6D4] transition-colors text-sm">سياسة الخصوصية</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
