import type { Metadata } from "next";
import { Alexandria, Outfit } from "next/font/google";
import "./globals.css";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";

const alexandria = Alexandria({
  subsets: ["arabic", "latin"],
  variable: "--font-alexandria",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["400", "700", "900"],
});

export const metadata: Metadata = {
  title: "Volivar | موقعك جاهز خلال 72 ساعة",
  description: "Volivar يبني مواقع احترافية للشركات والمتاجر والعيادات والمطاعم بدون تعقيد وبدون انتظار أشهر.",
  icons: {
    icon: "/logo.webp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className="dark overflow-x-hidden" suppressHydrationWarning>
      <body
        className={`${alexandria.variable} ${outfit.variable} font-alexandria antialiased selection:bg-primary-container selection:text-white overflow-x-hidden`}
      >
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
        <WhatsAppFloat />
      </body>
    </html>
  );
}
