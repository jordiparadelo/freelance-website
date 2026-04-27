"use client";

import { useGSAP } from "@gsap/react";

import { gsap } from "gsap";
import SplitText from "gsap/SplitText";

import { useRef } from "react";

import { useWindowSize } from "usehooks-ts";

export const transition = { duration: 1.4, ease: [0.6, 0.01, 0.05, 0.9] };

const useParagraphAnimation = (
  element: React.RefObject<HTMLElement | null>,
) => {
  const splitRef = useRef<SplitText | null>(null);
  const { width: windowWidth } = useWindowSize();

  useGSAP(
    () => {
      if (!element) return;

      const target = element.current;

      if (!splitRef.current || document.fonts) {
        splitRef.current = new SplitText(target, {
          type: "words, lines",
          mask: "lines",
          linesClass: "line",
        });
      }

      gsap.set(splitRef.current?.words, { opacity: 0 });

      gsap.to(splitRef.current?.words, {
        opacity: 1,
        delay: (index) => 0.1 * index,
        scrollTrigger: {
          scrub: true,
          trigger: target,
          start: "top center",
          end: "bottom center",
        },
      });
    },
    { scope: element, dependencies: [splitRef, windowWidth] },
  );
};

export default useParagraphAnimation;
