"use client";

import { useGSAP } from "@gsap/react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import type { RefObject } from "react";

const useListAnimation = (selector: RefObject<HTMLElement | null>) => {
  gsap.registerPlugin(ScrollTrigger, useGSAP);

  const config = {
    offset: "100",
    debugger: false,
  };

  useGSAP(
    () => {
      const elements = {
        list_items: selector.current?.querySelectorAll<HTMLLIElement>("li"),
      };

      const animationTween = (element: HTMLLIElement) => {
        const animProps = {
          opacity: 0.25,
          scale: 0.9,
          // filter: "blur(10px)",
        };

        const animation = gsap
          .timeline()
          .from(element, {
            ...animProps,
          })
          .to(element, {
            duration: 0.5,
          })
          .to(element, {
            ...animProps,
          });

        return animation;
      };

      elements.list_items?.forEach((item) => {
        ScrollTrigger.create({
          trigger: item,
          start: `top-=${config.offset}% center`,
          end: `bottom+=${config.offset}% center`,
          markers: config.debugger,
          scrub: true,
          animation: animationTween(item),
        });
      });
    },
    {
      scope: selector,
    },
  );
};

export default useListAnimation;
