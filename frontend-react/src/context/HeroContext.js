"use client";

import React, { useState, useEffect, useCallback } from "react";

const HeroContext = React.createContext();

export const useHeroContext = () => {
  const context = React.useContext(HeroContext);
  if (!context) {
    throw new Error("useMenuContext must be used within a MenuProvider");
  }
  return context;
};

export const HeroProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  }, []);

  return (
    <HeroContext.Provider value={{ isOpen,setIsOpen, toggleMenu }}>
      {children}
    </HeroContext.Provider>
  );
};

export const useHero = () => {
  const { isOpen,setIsOpen, toggleMenu } = useHeroContext();
  return { isOpen,setIsOpen, toggleMenu };
};

