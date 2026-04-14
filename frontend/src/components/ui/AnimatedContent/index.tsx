"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type React from "react";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

interface AnimatedContentProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const AnimatedContent = ({
  children,
  className,
  delay = 0,
}: AnimatedContentProps) => {
  const componentRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (componentRef.current) {
        gsap.from(componentRef.current.children, {
          y: 50,
          opacity: 0,
          duration: 1,
          stagger: 0.2,
          delay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: componentRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        });
      }
    },
    { scope: componentRef },
  );

  return (
    <div ref={componentRef} className={className}>
      {children}
    </div>
  );
};

export default AnimatedContent;
