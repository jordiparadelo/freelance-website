"use client";

// Libs
import { useGSAP } from "@gsap/react";
import type React from "react";
import { useRef } from "react";
// Animation
import { curveAnimation } from "./animations";

interface CurvesProps {
  className?: string;
  orientation?: "top" | "bottom";
  fill?: string;
}

const Curves: React.FC<CurvesProps> = ({ className, orientation, fill }) => {
  const componentRef = useRef<SVGSVGElement | null>(null);

  useGSAP(
    () => {
      if (componentRef.current) {
        curveAnimation(componentRef.current);
      }
    },
    { scope: componentRef },
  );

  return (
    <svg
      viewBox="0 0 1440 55"
      fill={fill || "currentColor"}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      ref={componentRef}
      style={{
        transform: "translateY(calc(100% - 1px))",
        maxWidth: "100vw",
        rotate: orientation === "top" ? "z 180deg" : "0deg",
        overflow: "hidden",
        position: "absolute",
        top: orientation === "top" ? 0 : undefined,
        left: 0,
        bottom: orientation === "bottom" ? 0 : undefined,
      }}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1450 30c-207 16-458 25-730 25-273 0-523-9-720-25V0h1440v30Z"
      />
    </svg>
  );
};

export default Curves;
