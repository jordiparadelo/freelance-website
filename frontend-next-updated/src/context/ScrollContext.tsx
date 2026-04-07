"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

import type React from "react";
import { createContext, useContext, useLayoutEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

interface LenisOptions {
  duration?: number;
  easing?: (t: number) => number;
  offset?: number;
  immediate?: boolean;
  lock?: boolean;
  force?: boolean;
  onComplete?: () => void;
}

interface ScrollContextType {
  lenis: Lenis | null;
  scrollTo: (
    target: string | number | HTMLElement,
    options?: LenisOptions,
  ) => void;
}

const ScrollContext = createContext<ScrollContextType | null>(null);

export const useScroll = () => {
  const context = useContext(ScrollContext);
  if (!context) {
    throw new Error("useScroll must be used within a ScrollProvider");
  }
  return context;
};

const EASING_FN = {
  lenisDefault: (t: number) => Math.min(1, 1.001 - 2 ** (-10 * t)),
  easeOutCubic: (t: number) => 1 - (1 - t) ** 3,
};

const lenisConfig = {
  duration: 1.2,
  easing: EASING_FN.lenisDefault,
  smoothWheel: true,
  wheelMultiplier: 1,
  touchMultiplier: 2,
  infinite: false,
  anchors: true,
  autoRaf: true,
};

const ScrollProvider = ({ children }: { children: React.ReactNode }) => {
  const lenisRef = useRef<Lenis | null>(null);

  useLayoutEffect(() => {
    // Initialize Lenis with configuration
    lenisRef.current = new Lenis(lenisConfig);

    // Get the Lenis instance
    const lenis = lenisRef.current;

    // Sync Lenis scroll with GSAP ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    // Create the RAF loop
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    // Disable GSAP ticker lag smoothing
    gsap.ticker.lagSmoothing(0);

    // Handle window resize
    const resize = () => {
      lenis.resize();
    };

    window.addEventListener("resize", resize, { passive: true });

    // Clean up
    return () => {
      if (lenis) {
        window.removeEventListener("resize", resize);
        gsap.ticker.remove(lenis.raf);
        lenis.destroy();
      }
    };
  }, []);

  // Scroll to function with enhanced options
  const scrollTo = (
    target: string | number | HTMLElement,
    options: LenisOptions = {
      offset: 50,
      duration: 2,
      easing: (t) => Math.min(1, 1.001 - 2 ** (-10 * t)),
    },
  ) => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(target, {
        offset: 0, // Default offset
        duration: lenisConfig.duration,
        easing: lenisConfig.easing,
        ...options,
      });
    }
  };

  return (
    <ScrollContext.Provider value={{ lenis: lenisRef.current, scrollTo }}>
      {children}
    </ScrollContext.Provider>
  );
};

export default ScrollProvider;
