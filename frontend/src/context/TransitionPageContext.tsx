"use client";

import gsap from "gsap";

import type React from "react";
import { createContext, useContext, useEffect, useState } from "react";

import { useScrollLock } from "usehooks-ts";

interface TransitionPageContextType {
  timeline: gsap.core.Timeline;
  setTimeline: React.Dispatch<React.SetStateAction<gsap.core.Timeline>>;
  isTransitioning: boolean | null;
  setIsTransitioning: React.Dispatch<React.SetStateAction<boolean | null>>;
}

export const TransitionPageContext = createContext<
  TransitionPageContextType | undefined
>(undefined);

const initialState = gsap.timeline({ paused: true });

export const TransitionPageProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [timeline, setTimeline] = useState<gsap.core.Timeline>(initialState);
  const [isPageTransitioning, setIsTransitioning] = useState<boolean | null>(
    null,
  );
  const { lock, unlock } = useScrollLock({
    autoLock: false,
    lockTarget: "#scrollable",
  });

  useEffect(() => {
    if (!isPageTransitioning) {
      setIsTransitioning(false);
    }

    isPageTransitioning ? lock() : unlock();
  }, [isPageTransitioning, lock, unlock]);

  return (
    <TransitionPageContext.Provider
      value={{
        timeline,
        setTimeline,
        isTransitioning: isPageTransitioning,
        setIsTransitioning,
      }}
    >
      {children}
    </TransitionPageContext.Provider>
  );
};

export const useTransitionPage = () => {
  const context = useContext(TransitionPageContext);
  if (!context) {
    throw new Error(
      "useTransitionContext must be used within a TransitionProvider",
    );
  }
  return context;
};
