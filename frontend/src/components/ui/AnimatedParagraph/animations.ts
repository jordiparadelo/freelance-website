"use client";

import { useGSAP } from "@gsap/react";

import { gsap } from "gsap";
import SplitText from "gsap/SplitText";

import { useEffect, useRef, useState } from "react";

import { useWindowSize } from "usehooks-ts";

export const transition = { duration: 1.4, ease: [0.6, 0.01, 0.05, 0.9] };

const useParagraphAnimation = (
  element: React.RefObject<HTMLElement | null>,
) => {
  const [isReady, setIsReady] = useState(false);
  const splitRef = useRef<SplitText | null>(null);
  const { width: windowWidth } = useWindowSize();

  useEffect(() => {
    document.fonts.ready.then(() => {
      setIsReady(true);
    });
  }, []);

  useGSAP(
    () => {
      if (!element || !isReady) return;

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
        ease: "none",
        scrollTrigger: {
          scrub: true,
          trigger: target,
          start: "top center",
          end: "bottom center",
        },
      });
    },
    { scope: element, dependencies: [splitRef, windowWidth, isReady] },
  );
};

export default useParagraphAnimation;
