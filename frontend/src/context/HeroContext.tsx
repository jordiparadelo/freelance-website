"use client";

import React, { useState, useCallback } from "react";

interface HeroContextType {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  toggleMenu: () => void;
}

const HeroContext = React.createContext<HeroContextType | undefined>(undefined);

export const useHeroContext = () => {
  const context = React.useContext(HeroContext);
  if (!context) {
    throw new Error("useMenuContext must be used within a MenuProvider");
  }
  return context;
};

export const HeroProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  }, []);

  return (
    <HeroContext.Provider value={{ isOpen, setIsOpen, toggleMenu }}>
      {children}
    </HeroContext.Provider>
  );
};

export const useHero = () => {
  const { isOpen, setIsOpen, toggleMenu } = useHeroContext();
  return { isOpen, setIsOpen, toggleMenu };
};

