"use client";

import { Calendar, Phone, Menu, X, Stethoscope, Mail, MapPin, Clock, Share2, MessageCircle, Send } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
  { name: "الرئيسية", href: "/templates/lumina" },
  { name: "خدماتنا", href: "/templates/lumina/services" },
  { name: "أطباؤنا", href: "/templates/lumina/doctors" },
  { name: "تواصل معنا", href: "/templates/lumina/contact" },
  { name: "احجز موعد", href: "/templates/lumina/reserve" },
];

export default function LuminaLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

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

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div dir="rtl" className="min-h-screen bg-[#F8FAFC] text-[#0F172A] font-ar antialiased selection:bg-[#0284C7] selection:text-white">
      {/* Top Bar */}
      <div className="hidden lg:block bg-[#0F172A] text-white/80 text-[13px]">
        <div className="max-w-[1280px] mx-auto px-6 h-10 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-[#38BDF8]" />
              <span dir="ltr">+966 11 234 5678</span>
            </span>
            <span className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-[#38BDF8]" />
              info@lumina-dental.com
            </span>
          </div>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <Clock className="w-3.5 h-3.5 text-[#38BDF8]" />
              السبت - الخميس: 9 ص - 9 م
            </span>
            <div className="flex items-center gap-3">
              <a href="#" className="hover:text-[#38BDF8] transition-colors"><Share2 className="w-4 h-4" /></a>
              <a href="#" className="hover:text-[#38BDF8] transition-colors"><MessageCircle className="w-4 h-4" /></a>
              <a href="#" className="hover:text-[#38BDF8] transition-colors"><Send className="w-4 h-4" /></a>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.06)]" : "bg-white/80 backdrop-blur-md"}`}>
        <div className="max-w-[1280px] mx-auto px-6 h-[80px] flex items-center justify-between">
          {/* Logo */}
          <Link href="/templates/lumina" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#0284C7] to-[#0F172A] flex items-center justify-center shadow-lg shadow-[#0284C7]/20 group-hover:scale-105 transition-transform duration-300">
              <Stethoscope className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-[22px] font-bold text-[#0F172A] leading-none tracking-tight">لومينا</span>
              <span className="text-[10px] tracking-[0.3em] text-[#0284C7] uppercase mt-1">DENTAL CLINIC</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = mounted && (pathname === link.href || (pathname.startsWith(link.href) && link.href !== '/templates/lumina'));
              const isExactHome = pathname === '/templates/lumina' && link.href === '/templates/lumina';
              const isLinkActive = mounted && (link.href === '/templates/lumina' ? isExactHome : isActive);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 text-[15px] font-bold transition-colors duration-300 rounded-full ${isLinkActive ? "text-[#0284C7]" : "text-[#475569] hover:text-[#0284C7]"}`}
                >
                  {link.name}
                  {isLinkActive && (
                    <motion.span
                      layoutId="navIndicator"
                      className="absolute inset-0 -z-10 bg-[#0284C7]/10 rounded-full"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/templates/lumina/reserve"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0284C7] text-white text-[14px] font-bold hover:bg-[#0369A1] transition-all duration-300 shadow-lg shadow-[#0284C7]/25 hover:shadow-xl hover:shadow-[#0284C7]/30 hover:-translate-y-0.5"
            >
              <Calendar className="w-4 h-4" />
              احجز موعدك
            </Link>
          </div>

          {/* Mobile Toggle */}
          <div className="flex lg:hidden items-center gap-3">
            <Link href="/templates/lumina/reserve" className="w-10 h-10 rounded-full bg-[#0284C7] text-white flex items-center justify-center">
              <Calendar className="w-5 h-5" />
            </Link>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="w-10 h-10 rounded-full bg-[#0F172A]/5 text-[#0F172A] flex items-center justify-center focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {/* Mobile Drawer */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="absolute top-full left-0 w-full bg-white/98 backdrop-blur-xl border-b border-[#0F172A]/5 z-40 max-h-[calc(100vh-80px)] overflow-y-auto shadow-2xl lg:hidden"
              >
                <nav className="flex flex-col px-6 py-6 gap-2">
                  {navLinks.map((link, i) => {
                    const isActive = mounted && (pathname === link.href || (pathname.startsWith(link.href) && link.href !== '/templates/lumina'));
                    const isExactHome = pathname === '/templates/lumina' && link.href === '/templates/lumina';
                    const isLinkActive = mounted && (link.href === '/templates/lumina' ? isExactHome : isActive);

                    return (
                      <Link
                        key={i}
                        href={link.href}
                        onClick={() => setIsMenuOpen(false)}
                        className={`text-[16px] font-bold transition-colors py-3 px-4 rounded-xl border-b border-[#0F172A]/5 last:border-b-0 ${isLinkActive ? "text-[#0284C7] bg-[#0284C7]/10" : "text-[#475569] hover:text-[#0284C7] hover:bg-[#0284C7]/5"}`}
                      >
                        {link.name}
                      </Link>
                    );
                  })}

                  <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-[#0F172A]/10">
                    <a href="tel:+966112345678" className="flex items-center gap-3 text-[#475569] text-sm">
                      <Phone className="w-5 h-5 text-[#0284C7]" />
                      <span dir="ltr">+966 11 234 5678</span>
                    </a>
                    <span className="flex items-center gap-3 text-[#475569] text-sm">
                      <MapPin className="w-5 h-5 text-[#0284C7]" />
                      الرياض، حي العليا
                    </span>
                  </div>
                </nav>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 relative z-10 w-full">
        {children}
      </div>

      {/* Footer */}
      <footer className="relative z-20 bg-[#0F172A] text-white pt-20 pb-8 px-6 md:px-12 mt-auto">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#38BDF8] to-[#0284C7] flex items-center justify-center">
                <Stethoscope className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-[20px] font-bold leading-none">لومينا</span>
                <span className="text-[10px] tracking-[0.3em] text-[#38BDF8] uppercase mt-1">DENTAL CLINIC</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              نقدم رعاية أسنان متكاملة بأحدث التقنيات وأمهر الأطباء. ابتسامتك تستحق الأفضل.
            </p>
            <div className="flex items-center gap-3">
              <a href="#" className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#0284C7] flex items-center justify-center transition-colors"><Share2 className="w-4 h-4" /></a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#0284C7] flex items-center justify-center transition-colors"><MessageCircle className="w-4 h-4" /></a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#0284C7] flex items-center justify-center transition-colors"><Send className="w-4 h-4" /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-sm">روابط سريعة</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><Link href="/templates/lumina/services" className="hover:text-[#38BDF8] transition-colors">خدماتنا</Link></li>
              <li><Link href="/templates/lumina/doctors" className="hover:text-[#38BDF8] transition-colors">أطباؤنا</Link></li>
              <li><Link href="/templates/lumina/reserve" className="hover:text-[#38BDF8] transition-colors">احجز موعد</Link></li>
              <li><Link href="/templates/lumina/contact" className="hover:text-[#38BDF8] transition-colors">تواصل معنا</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-sm">ساعات العمل</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>السبت - الأربعاء: 9 ص - 9 م</li>
              <li>الخميس: 9 ص - 6 م</li>
              <li>الجمعة: مغلق</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-sm">تواصل معنا</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex items-center gap-2"><Phone className="w-4 h-4 text-[#38BDF8]" /><span dir="ltr">+966 11 234 5678</span></li>
              <li className="flex items-center gap-2"><Mail className="w-4 h-4 text-[#38BDF8]" />info@lumina-dental.com</li>
              <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-[#38BDF8]" />الرياض، حي العليا</li>
            </ul>
          </div>
        </div>

        <div className="max-w-[1280px] mx-auto text-center border-t border-white/5 pt-8 text-gray-500 text-xs" suppressHydrationWarning>
          جميع الحقوق محفوظة &copy; {new Date().getFullYear()} - عيادة لومينا لطب الأسنان.
        </div>
      </footer>
    </div>
  );
}
