"use client";

import { Capability } from "@/types";
import React, { createContext, useContext, useState } from "react";

interface CapabilityContextType {
	capability: Capability["group"];
	setCapability: (capability: Capability["group"]) => void;
}

const CapabilityContext = createContext<CapabilityContextType | undefined>(
	undefined
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
