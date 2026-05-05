import type React from "react";
import { createContext, useContext, useState } from "react";

type ExperienceContextType = {
  activeExperience: number | null;
  setActiveExperience: React.Dispatch<React.SetStateAction<number | null>>;
};

const ExperienceContext = createContext<ExperienceContextType | undefined>(
  undefined,
);

export const useExperience = () => {
  const context = useContext(ExperienceContext);
  if (!context) {
    throw new Error("useExperience must be used within an ExperienceProvider");
  }
  return context;
};

export const ExperienceProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [activeExperience, setActiveExperience] = useState<null | number>(null);
  return (
    <ExperienceContext.Provider
      value={{ activeExperience, setActiveExperience }}
    >
      {children}
    </ExperienceContext.Provider>
  );
};
