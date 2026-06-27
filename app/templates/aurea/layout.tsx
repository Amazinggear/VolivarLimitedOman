import type { Metadata } from "next";
import Link from "next/link";
import { Search, Bell, User, Menu, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "أوريا | Aurea",
  description: "المنصة الأولى للخدمات المهنية الموثوقة",
};

export default function AureaLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div dir="rtl" className="min-h-screen bg-[#0A0A0C] text-[#F3F4F6] font-ar antialiased selection:bg-[#0066FF] selection:text-white">
      <main>
        {children}
      </main>
    </div>
  );
}
