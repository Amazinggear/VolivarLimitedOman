"use client";

import { useState } from "react";
import HeroSection from "./components/HeroSection";
import ServiceGrid from "./components/ServiceGrid";
import BookingModal from "./components/BookingModal";

export default function AureaPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <>
      <HeroSection onOpenBooking={() => setIsBookingOpen(true)} />
      <ServiceGrid onOpenBooking={() => setIsBookingOpen(true)} />
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </>
  );
}
