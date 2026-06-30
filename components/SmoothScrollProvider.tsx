"use client";

import { ReactNode } from "react";

/**
 * Smooth scroll is DISABLED globally.
 * Lenis was causing a noticeable scroll delay/lag across all pages.
 * Native browser scrolling is now used — instant and responsive.
 */
export default function SmoothScrollProvider({ children }: { children: ReactNode }) {
  return <>{children}</>;
}