"use client";

import type React from "react";
import { createContext, useContext, useState } from "react";
import type { Capability } from "@/types";

interface CapabilityContextType {
  capability: Capability["group"];
  setCapability: (capability: Capability["group"]) => void;
}

const CapabilityContext = createContext<CapabilityContextType | undefined>(
  undefined,
);

const CapabilityProvider = ({ children }: { children: React.ReactNode }) => {
  const [capability, setCapability] = useState<Capability["group"]>("All");

  return (
    <CapabilityContext.Provider value={{ capability, setCapability }}>
      {children}
    </CapabilityContext.Provider>
  );
};

const useCapability = () => {
  const context = useContext(CapabilityContext);
  if (!context) {
    throw new Error("useCapability must be used within a CapabilityProvider");
  }
  return context;
};

export { CapabilityProvider, useCapability };
