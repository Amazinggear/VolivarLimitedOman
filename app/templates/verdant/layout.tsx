"use client";

import { Playfair_Display, Inter } from "next/font/google";
import { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Link from "next/link";
import { Menu, X, Search, User, ShoppingBag } from "lucide-react";
import { usePathname } from "next/navigation";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const navLinks = [
  { name: "تسوق الكل", href: "/templates/verdant" },
  { name: "العناية بالبشرة", href: "/templates/verdant/skincare" },
  { name: "العناية بالجسم", href: "/templates/verdant/body-care" },
  { name: "العناية بالشعر", href: "/templates/verdant/hair-care" },
  { name: "من نحن", href: "/templates/verdant/about" },
];

const drawerVariants: Variants = {
  hidden: { opacity: 0, height: 0 },
  visible: {
    opacity: 1,
    height: "auto",
    transition: { duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] },
  },
  exit: {
    opacity: 0,
    height: 0,
    transition: { duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07, delayChildren: 0.1 },
  },
};

const linkItem: Variants = {
  hidden: { opacity: 0, x: -16 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export default function VerdantLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line
    setMounted(true);
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
    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isLinkActive = (href: string) => {
    if (!mounted) return false;
    if (href === "/templates/verdant") return pathname === href;
    return pathname.startsWith(href);
  };

  return (
    <div
      dir="rtl"
      suppressHydrationWarning
      className={`${playfair.variable} ${inter.variable} min-h-screen bg-[#fcfbf5] text-[#1a1a1a] overflow-x-hidden flex flex-col`}
    >
      {/* ── HEADER ── */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#fbf9f2]/95 backdrop-blur-md shadow-sm border-b border-stone-200/60"
            : "bg-[#fbf9f2] border-b border-stone-200/50"
        }`}
      >
        <div className="max-w-[1280px] mx-auto flex items-center justify-between px-5 md:px-10 h-[70px]">
          {/* Logo */}
          <Link
            href="/templates/verdant"
            className="flex flex-col items-center leading-none hover:opacity-80 transition-opacity select-none"
          >
            <span
              className="text-[22px] font-bold tracking-[0.18em] text-[#1a1a1a] uppercase"
            >
              VERDANT
            </span>
            <span className="text-[9px] tracking-[0.35em] text-[#6a7c5a] uppercase font-medium -mt-0.5">
              organic
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link, i) => (
              <Link
                key={i}
                href={link.href}
                className={`text-[13px] font-medium tracking-wide transition-colors hover:text-[#6a7c5a] ${
                  isLinkActive(link.href)
                    ? "text-[#6a7c5a] border-b border-[#6a7c5a] pb-0.5"
                    : "text-stone-600"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Icons */}
          <div className="hidden md:flex items-center gap-5">
            <button
              aria-label="Search"
              className="text-stone-500 hover:text-[#6a7c5a] transition-colors"
            >
              <Search className="w-[18px] h-[18px]" />
            </button>
            <button
              aria-label="Account"
              className="text-stone-500 hover:text-[#6a7c5a] transition-colors"
            >
              <User className="w-[18px] h-[18px]" />
            </button>
            <button
              aria-label="Cart"
              className="text-stone-500 hover:text-[#6a7c5a] transition-colors relative"
            >
              <ShoppingBag className="w-[18px] h-[18px]" />
              <span className="absolute -top-2 -right-2 bg-[#6a7c5a] text-white text-[9px] font-bold w-[16px] h-[16px] rounded-full flex items-center justify-center">
                3
              </span>
            </button>
          </div>

          {/* Mobile Toggle */}
          <div className="flex lg:hidden items-center gap-4">
            <button
              aria-label="Cart"
              className="text-stone-500 hover:text-[#6a7c5a] transition-colors relative"
            >
              <ShoppingBag className="w-[18px] h-[18px]" />
              <span className="absolute -top-2 -right-2 bg-[#6a7c5a] text-white text-[9px] font-bold w-[16px] h-[16px] rounded-full flex items-center justify-center">
                3
              </span>
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle Menu"
              className="text-stone-600 hover:text-[#6a7c5a] transition-colors focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              key="mobile-drawer"
              variants={drawerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="absolute top-full left-0 w-full bg-[#fbf9f2]/98 backdrop-blur-md border-b border-stone-200 shadow-lg overflow-hidden lg:hidden z-40"
            >
              <motion.nav
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="flex flex-col px-6 py-5 gap-1"
              >
                {navLinks.map((link, i) => (
                  <motion.div key={i} variants={linkItem}>
                    <Link
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`block text-[15px] font-medium py-3 border-b border-stone-100 last:border-none transition-colors hover:text-[#6a7c5a] ${
                        isLinkActive(link.href)
                          ? "text-[#6a7c5a]"
                          : "text-stone-700"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  variants={linkItem}
                  className="flex items-center gap-5 pt-4 mt-2"
                >
                  <button className="flex items-center gap-2 text-stone-500 hover:text-[#6a7c5a] text-sm transition-colors">
                    <Search className="w-4 h-4" /> بحث
                  </button>
                  <button className="flex items-center gap-2 text-stone-500 hover:text-[#6a7c5a] text-sm transition-colors">
                    <User className="w-4 h-4" /> الحساب
                  </button>
                </motion.div>
              </motion.nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* ── FOOTER ── */}
      <footer className="bg-[#3d4f2e] text-white">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10 pt-16 pb-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
            {/* Brand */}
            <div>
              <div className="flex flex-col mb-5">
                <span
                  className="text-[20px] font-bold tracking-[0.18em] text-white uppercase"
                >
                  VERDANT
                </span>
                <span className="text-[9px] tracking-[0.35em] text-[#a8c08a] uppercase font-medium -mt-0.5">
                  organic
                </span>
              </div>
              <p className="text-white/60 text-sm leading-relaxed">
                نباتات نقية، تأثير ضئيل. نصنع منتجات العناية بالبشرة التي تحترم بشرتك وكوكبنا — مكوناً تلو الآخر.
              </p>
            </div>

            {/* Shop */}
            <div>
              <h4 className="text-[12px] font-semibold uppercase tracking-widest text-white/50 mb-5">
                تسوق
              </h4>
              <ul className="space-y-3">
                {["العناية بالبشرة", "العناية بالجسم", "العناية بالشعر", "جميع المنتجات"].map(
                  (item) => (
                    <li key={item}>
                      <Link
                        href="/templates/verdant"
                        className="text-white/70 text-sm hover:text-white transition-colors"
                      >
                        {item}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-[12px] font-semibold uppercase tracking-widest text-white/50 mb-5">
                الشركة
              </h4>
              <ul className="space-y-3">
                {[
                  { label: "من نحن", href: "/templates/verdant/about" },
                  { label: "الاستدامة", href: "/templates/verdant" },
                  { label: "الصحافة", href: "/templates/verdant" },
                ].map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-white/70 text-sm hover:text-white transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h4 className="text-[12px] font-semibold uppercase tracking-widest text-white/50 mb-5">
                تواصل معنا
              </h4>
              <ul className="space-y-3 mb-6">
                {["Instagram", "Pinterest", "hello@verdant.com"].map((item) => (
                  <li key={item}>
                    <span className="text-white/70 text-sm hover:text-white transition-colors cursor-pointer">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="text-white/50 text-xs mb-3 uppercase tracking-wider">
                النشرة البريدية
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="بريدك الإلكتروني"
                  className="flex-1 bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-[#a8c08a] transition-colors"
                />
                <button className="bg-[#6a7c5a] hover:bg-[#58694a] transition-colors text-white text-sm font-medium px-4 py-2 rounded-lg">
                  انضم
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40">
            <span suppressHydrationWarning>
              © {new Date().getFullYear()} Verdant Organic. جميع الحقوق محفوظة.
            </span>
            <span className="flex items-center gap-3">
              <span>طبيعي</span>
              <span className="w-px h-3 bg-white/20" />
              <span>نباتي</span>
              <span className="w-px h-3 bg-white/20" />
              <span>لم يختبر على الحيوانات</span>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
