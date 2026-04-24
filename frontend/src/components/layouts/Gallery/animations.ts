"use client";

import { useGSAP } from "@gsap/react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const galleryAnimations = (
  element: React.RefObject<HTMLDivElement | null>,
) => {
  const OFFSET_TRANSLATION = 20;
  gsap.registerPlugin(ScrollTrigger, useGSAP);

  useGSAP(
    () => {
      if (!element) return;
      const screenHeight = window.innerHeight;

      gsap.set(element?.current, {
        transform: `translateX(${-OFFSET_TRANSLATION}%)`,
      });

      const animation = gsap.to(element?.current, {
        translateX: 100,
      });

      ScrollTrigger.create({
        animation: animation,
        trigger: element.current,
        scrub: true,
        start: `top+=20% bottom`,
        end: `bottom+=${screenHeight} bottom`,
      });
    },
    { scope: element },
  );
};
