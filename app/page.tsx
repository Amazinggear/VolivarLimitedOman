"use client";

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import TemplatesSection from "@/components/TemplatesSection";
import ValueProposition from "@/components/ValueProposition";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background text-on-background selection:bg-primary/30 selection:text-white">
      <Navbar />
      <HeroSection />
      <TemplatesSection />
      <ValueProposition />
      <HowItWorks />
      <Pricing />
      <Footer />
    </main>
  );
}
