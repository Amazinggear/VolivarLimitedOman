"use client";

import { useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X, Home, LayoutTemplate, CreditCard, MessageCircle, Layers } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  const navLinks = [
    { label: 'الرئيسية', href: '#', icon: Home },
    { label: 'النماذج', href: '#templates', icon: LayoutTemplate },
    { label: 'كيف نعمل', href: '#how-it-works', icon: Layers },
    { label: 'الأسعار', href: '#pricing', icon: CreditCard },
  ];

  return (
    <>
      {/* Desktop Dynamic Island Navbar */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className={`hidden md:flex fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-in-out ${
          isScrolled 
            ? "w-[800px] h-16 bg-surface/90 backdrop-blur-3xl border border-white/10 shadow-2xl rounded-full px-6" 
            : "w-[1200px] h-24 bg-transparent border-transparent px-0"
        } items-center justify-between`}
      >
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group relative z-50 shrink-0">
          <div className={`relative overflow-hidden rounded-full transition-all duration-500 ${isScrolled ? 'w-10 h-10' : 'w-14 h-14'}`}>
            <Image src="/logo.webp" alt="Volivar Logo" fill className="object-cover mix-blend-screen group-hover:scale-110 transition-transform duration-300" />
          </div>
          <span className={`font-black tracking-tight en-text text-on-surface group-hover:text-primary transition-colors ${isScrolled ? 'text-[22px]' : 'text-[28px]'}`}>
            Volivar
          </span>
        </a>

        {/* Desktop Links */}
        <div className="flex items-center gap-8 text-[15px] font-bold">
          {navLinks.map((link, idx) => (
            <a key={idx} href={link.href} className="relative group text-on-surface-variant hover:text-white transition-colors duration-300 py-2 flex items-center gap-2">
              {link.label}
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full rounded-full"></span>
            </a>
          ))}
        </div>

        {/* CTA */}
        <a href="https://wa.me/96894789593" target="_blank" rel="noreferrer" className={`btn-primary font-bold whitespace-nowrap shrink-0 flex items-center justify-center ${isScrolled ? 'px-6 py-2 text-[14px]' : 'px-8 py-3 text-[16px]'}`}>
          تواصل معنا
        </a>
      </motion.nav>

      {/* Mobile Top Header (Just Logo) */}
      <div className="md:hidden fixed top-0 left-0 w-full p-5 flex justify-between items-center z-40 bg-gradient-to-b from-background to-transparent pointer-events-none">
        <a href="#" className="flex items-center gap-3 pointer-events-auto">
          <div className="relative w-10 h-10 overflow-hidden rounded-full shadow-lg">
            <Image src="/logo.webp" alt="Volivar Logo" fill className="object-cover mix-blend-screen" />
          </div>
          <span className="text-[22px] font-black tracking-tight en-text text-on-surface drop-shadow-md">
            Volivar
          </span>
        </a>
      </div>

      {/* Mobile Bottom Dock Navbar */}
      <motion.nav 
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30, delay: 0.2 }}
        className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-[400px] h-16 bg-surface/90 backdrop-blur-3xl border border-white/10 shadow-[0_-10px_40px_rgba(0,0,0,0.5)] rounded-full z-50 flex items-center justify-around px-2"
      >
        {navLinks.map((link, idx) => {
          const Icon = link.icon;
          return (
            <a key={idx} href={link.href} className="flex flex-col items-center justify-center w-14 h-14 rounded-full hover:bg-white/5 transition-colors group relative">
              <Icon className="w-5 h-5 text-on-surface-variant group-hover:text-primary transition-colors" />
              <span className="text-[10px] font-bold text-on-surface-variant mt-1 group-hover:text-primary transition-colors">{link.label}</span>
            </a>
          );
        })}
        
        <div className="w-[1px] h-8 bg-white/10 mx-1"></div>
        
        <a href="https://wa.me/96894789593" target="_blank" rel="noreferrer" className="flex flex-col items-center justify-center w-14 h-14 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors group">
          <MessageCircle className="w-5 h-5 text-primary" />
          <span className="text-[10px] font-bold text-primary mt-1">تواصل</span>
        </a>
      </motion.nav>
    </>
  );
}
