"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { type RefObject, useLayoutEffect, useRef } from "react";
import { useTransitionPage } from "@/context/TransitionPageContext";

export function loadingAnimation(selector: RefObject<HTMLElement | null>) {
  const timeline = useRef<gsap.core.Timeline | null>(null);

  const { setIsTransitioning } = useTransitionPage();

  useGSAP(
    () => {
      timeline.current?.kill();

      if (!timeline.current) {
        timeline.current = gsap.timeline({
          paused: true,
          onStart: () => setIsTransitioning(true),
          onComplete: () => setIsTransitioning(false),
          defaults: {
            duration: 0.5,
            ease: "power3.inOut",
          },
        });
      }

      timeline.current
        .to('[data-target="loading-bar"]', {
          "--progress": "100%",
          duration: 5,
        })
        .from('[data-target="text"]', {
          autoAlpha: 0,
        })
        .to(selector.current, {
          yPercent: -100,
        });
    },
    { scope: selector },
  );

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    timeline.current?.play();
  }, []);
}
