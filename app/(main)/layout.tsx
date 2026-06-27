import Navbar from "@/components/Navbar";
import ScrollToTop from "@/components/ScrollToTop";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import Image from "next/image";
import { Mail, MessageCircle } from "lucide-react";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      {children}
      <WhatsAppFloat />
      <ScrollToTop />
      <footer className="bg-surface-container-lowest pt-24 pb-12 border-t border-white/5 text-center relative overflow-hidden">
      {/* Subtle footer glow removed for professional look */}
      
      <div className="max-w-[1280px] mx-auto px-5 md:px-20 flex flex-col items-center relative z-10">
        <a className="flex flex-col items-center gap-4 mb-6" href="#">
          <div className="relative w-20 h-20 overflow-hidden rounded-2xl">
            <Image src="/logo.webp" alt="Volivar Logo" fill className="object-cover" />
          </div>
          <span className="text-[40px] font-bold tracking-tight en-text text-on-surface" dir="ltr">Volivar</span>
        </a>
        <p className="text-[28px] en-text text-primary mb-12" dir="ltr">Websites Delivered Fast.</p>
        <div className="flex gap-6 mb-12">
          <a href="https://wa.me/96894789593" target="_blank" rel="noreferrer" className="w-14 h-14 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface hover:text-primary hover:bg-primary/10 transition-all transform hover:-translate-y-1"><MessageCircle className="w-6 h-6" /></a>
          <a href="#" className="w-14 h-14 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface hover:text-primary hover:bg-primary/10 transition-all transform hover:-translate-y-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
          </a>
          <a href="#" className="w-14 h-14 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface hover:text-primary hover:bg-primary/10 transition-all transform hover:-translate-y-1"><Mail className="w-6 h-6" /></a>
        </div>
        <p className="text-[16px] text-on-surface-variant en-text mb-4" dir="ltr">© 2026 Volivar. All rights reserved.</p>
        <div className="flex flex-col items-center gap-3 mt-4 opacity-80 hover:opacity-100 transition-opacity">
          <span className="text-[12px] text-on-surface-variant font-medium">إحدى شركات</span>
          <Image src="/base54-logo.png" alt="Base 54" width={100} height={35} className="object-contain" />
        </div>
      </div>
      </footer>
    </>
  );
}
