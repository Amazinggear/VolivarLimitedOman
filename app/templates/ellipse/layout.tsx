import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "منصة تقنية | قالب Ellipse",
  description: "قالب منصة تقنية و SaaS بتصميم هندسي دائري أنيق من Volivar.",
};

export default function EllipseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-[#0A0A0A] text-white min-h-screen relative font-alexandria overflow-x-hidden">
      {children}
    </div>
  );
}