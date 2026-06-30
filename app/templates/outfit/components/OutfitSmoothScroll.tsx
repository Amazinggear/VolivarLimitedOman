"use client";

import { ReactNode, useEffect } from "react";
import Lenis from "@studio-freight/lenis";

/**
 * Snappy smooth scroll scoped to the Outfit template.
 * lerp=0.1 → responsive, no heavy lag. GPU-friendly rAF loop.
 */
export default function OutfitSmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.0,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      infinite: false,
      smoothWheel: true,
      lerp: 0.1,
      orientation: "vertical",
      gestureOrientation: "vertical",
      touchMultiplier: 1.5,
      wheelMultiplier: 1.0,
    });

    let rafId = 0;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
