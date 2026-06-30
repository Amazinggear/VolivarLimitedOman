import type { Metadata } from "next";
import OutfitSmoothScroll from "./components/OutfitSmoothScroll";

export const metadata: Metadata = {
  title: "استوديو إبداعي | قالب Outfit",
  description: "قالب استوديو إبداعي بطابع سينمائي حركي من Volivar.",
};

export default function OutfitLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <OutfitSmoothScroll>
      <div className="bg-[#ede4dd] text-neutral-900 min-h-screen relative font-alexandria overflow-x-hidden">
        {children}
      </div>
    </OutfitSmoothScroll>
  );
}
