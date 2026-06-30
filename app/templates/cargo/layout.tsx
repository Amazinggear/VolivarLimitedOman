import type { Metadata } from "next";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: "مكتب هندسي ومعماري | Cargo Clone",
  description: "استعراض المشاريع الهندسية والمعمارية بأناقة ووضوح.",
};

export default function CargoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white text-neutral-900 min-h-screen relative font-alexandria overflow-x-hidden">
      <Navbar />
      {children}
    </div>
  );
}
