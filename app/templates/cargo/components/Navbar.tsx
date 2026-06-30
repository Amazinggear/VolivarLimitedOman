"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import MagneticButton from "./MagneticButton";

const navLinks = [
  { name: "الرئيسية", href: "/templates/cargo" },
  { name: "المشاريع", href: "/templates/cargo/projects" },
  { name: "الاستوديو", href: "/templates/cargo/studio" },
  { name: "تواصل", href: "/templates/cargo/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", isMenuOpen);
    return () => document.body.classList.remove("overflow-hidden");
  }, [isMenuOpen]);

  return (
    <motion.header
      initial={false}
      animate={{
        width: scrolled ? "85%" : "100%",
        top: scrolled ? "1rem" : "0rem",
        borderRadius: scrolled ? "9999px" : "0px",
        backgroundColor: scrolled ? "rgba(255,255,255,0.95)" : "rgba(0,0,0,0)",
        borderColor: scrolled ? "rgba(0,0,0,0.1)" : "rgba(0,0,0,0)",
        paddingTop: scrolled ? "0.75rem" : "1.5rem",
        paddingBottom: scrolled ? "0.75rem" : "1.5rem",
        boxShadow: scrolled ? "0 10px 40px -10px rgba(0,0,0,0.1)" : "none",
      }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className={`fixed left-1/2 -translate-x-1/2 z-50 border backdrop-blur-lg max-w-7xl flex flex-col`}
    >
      <nav className={`w-full px-6 md:px-8 flex items-center justify-between`}>
        {/* Logo */}
        <Link
          href="/templates/cargo"
          className="flex items-center gap-2 group"
          onClick={() => setIsMenuOpen(false)}
        >
          <span
            className={`text-xl font-black tracking-tighter transition-colors ${
              scrolled ? "text-black" : "text-white"
            }`}
          >
            CARGO
          </span>
          <span
            className={`text-[10px] tracking-[0.3em] uppercase font-bold transition-colors ${
              scrolled ? "text-neutral-500" : "text-white/90"
            }`}
          >
            ARCH.
          </span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/templates/cargo"
                ? pathname === "/templates/cargo"
                : pathname.startsWith(link.href);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`relative text-sm font-black tracking-wide transition-colors ${
                    scrolled
                      ? isActive
                        ? "text-black"
                        : "text-neutral-500 hover:text-black"
                      : isActive
                      ? "text-white"
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className={`absolute -bottom-1.5 right-0 h-[2px] w-full ${
                        scrolled ? "bg-black" : "bg-white"
                      }`}
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* CTA */}
        <MagneticButton className="hidden md:block">
          <Link
            href="/templates/cargo/contact"
            className={`inline-flex items-center px-6 py-2.5 rounded-full text-sm font-black tracking-wide transition-all duration-300 ${
              scrolled
                ? "bg-black text-white hover:bg-neutral-800"
                : "bg-white text-black hover:bg-white/90"
            }`}
          >
            ابدأ مشروعك
          </Link>
        </MagneticButton>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`md:hidden focus:outline-none transition-colors ${
            scrolled || isMenuOpen ? "text-black" : "text-white"
          }`}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className={`md:hidden overflow-hidden ${
              scrolled ? "" : "bg-white rounded-2xl mt-4 border border-black/5 shadow-xl mx-4"
            }`}
          >
            <ul className="flex flex-col px-6 py-6 gap-2">
              {navLinks.map((link, i) => {
                const isActive =
                  link.href === "/templates/cargo"
                    ? pathname === "/templates/cargo"
                    : pathname.startsWith(link.href);
                return (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i, duration: 0.4 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`block py-3 text-lg font-black border-b border-neutral-100 last:border-b-0 transition-colors ${
                        isActive ? "text-black" : "text-neutral-500 hover:text-black"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                );
              })}
              <MagneticButton>
                <Link
                  href="/templates/cargo/contact"
                  className="mt-4 block text-center py-3 rounded-full bg-black text-white font-black"
                  onClick={() => setIsMenuOpen(false)}
                >
                  ابدأ مشروعك
                </Link>
              </MagneticButton>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
