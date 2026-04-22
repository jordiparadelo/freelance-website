"use client";

import Lottie from "lottie-react";
import type React from "react";
import { useRef } from "react";
import { useIntersectionObserver } from "usehooks-ts";
import "./styles.scss";

interface SectionLabelProps {
  label: string;
  animationData: object;
  className?: string;
}

const SectionLabel: React.FC<SectionLabelProps> = ({
  label,
  animationData,
  className,
}) => {
  const iconRef = useRef(null);

  const [ref] = useIntersectionObserver({
    threshold: 0.5,
    root: null,
    rootMargin: "-150px",
  });

  const iconProps = {
    animationData: animationData,
    autoplay: true,
    height: 10,
    width: 10,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div
      className={`section-label ${className || ""}`}
      ref={ref}
      // data-active={entry?.isIntersecting}
    >
      <Lottie
        {...iconProps}
        lottieRef={iconRef}
        className="section-label__icon"
      />
      <p className="section-label__text">{label}</p>
    </div>
  );
};

export default SectionLabel;
