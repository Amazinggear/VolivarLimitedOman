"use client";

import { motion } from "framer-motion";
import { Wrench, Zap, Scale, FileText, ArrowRight, Activity, CalendarDays } from "lucide-react";
import React, { useRef, useState, MouseEvent } from "react";

const services = [
  {
    id: "plumber",
    title: "Emergency Plumbing",
    description: "24/7 instant dispatch for leaks, bursts, and clogs.",
    icon: <Wrench className="w-6 h-6" />,
    type: "emergency",
    colSpan: "md:col-span-2",
    rowSpan: "md:row-span-1"
  },
  {
    id: "electrician",
    title: "Electrical Repair",
    description: "Certified electricians available for immediate troubleshooting.",
    icon: <Zap className="w-6 h-6" />,
    type: "emergency",
    colSpan: "md:col-span-1",
    rowSpan: "md:row-span-2"
  },
  {
    id: "lawyer",
    title: "Corporate Legal Counsel",
    description: "Schedule consultations with top-tier corporate attorneys.",
    icon: <Scale className="w-6 h-6" />,
    type: "professional",
    colSpan: "md:col-span-1",
    rowSpan: "md:row-span-1"
  },
  {
    id: "consultant",
    title: "Contract Review",
    description: "AI-assisted and expert-verified contract analysis.",
    icon: <FileText className="w-6 h-6" />,
    type: "professional",
    colSpan: "md:col-span-1",
    rowSpan: "md:row-span-1"
  }
];

function BentoCard({ service, onOpenBooking }: { service: typeof services[0], onOpenBooking: () => void }) {
  const divRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!divRef.current || isFocused) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(1);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
      className={`relative overflow-hidden rounded-3xl bg-[#111115] border border-white/5 cursor-pointer ${service.colSpan} ${service.rowSpan}`}
      onClick={onOpenBooking}
    >
      <div
        ref={divRef}
        onMouseMove={handleMouseMove}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="absolute inset-0 z-0 transition-opacity duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(0, 102, 255, 0.15), transparent 40%)`,
        }}
      />
      
      <div className="relative z-10 p-8 h-full flex flex-col justify-between">
        <div>
          <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${
            service.type === 'emergency' 
              ? 'bg-red-500/10 text-red-400' 
              : 'bg-[#0066FF]/10 text-[#00CCFF]'
          }`}>
            {service.icon}
          </div>
          <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
          <p className="text-[#9CA3AF] leading-relaxed mb-6">{service.description}</p>
        </div>

        <div className="mt-auto">
          {service.type === 'emergency' ? (
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 w-fit">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
              </span>
              <span className="text-xs font-semibold text-red-400 uppercase tracking-wider">Available for 30-Min Dispatch</span>
            </div>
          ) : (
            <div className="flex items-center justify-between group">
              <span className="text-sm font-semibold text-white">Schedule Consultation</span>
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[#0066FF] transition-colors">
                <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function ServiceGrid({ onOpenBooking }: { onOpenBooking: () => void }) {
  return (
    <section className="py-24 bg-[#0A0A0C] relative">
      <div className="max-w-[1440px] mx-auto px-6 md:px-8">
        
        <div className="mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Specialized Services. <br />
            <span className="text-[#9CA3AF]">On-Demand.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[280px]">
          {services.map((service) => (
            <BentoCard key={service.id} service={service} onOpenBooking={onOpenBooking} />
          ))}
        </div>

      </div>
    </section>
  );
}
