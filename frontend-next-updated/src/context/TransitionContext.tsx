"use client";

import React, { createContext, useContext, useState } from "react";

import gsap from "gsap";

interface TransitionContextType {
	timeline: gsap.core.Timeline;
	setTimeline: React.Dispatch<React.SetStateAction<gsap.core.Timeline>>;
}

export const TransitionContext = createContext<TransitionContextType | undefined>(undefined);

const initialState = gsap.timeline({ paused: true });

export const TransitionProvider = ({ children }: { children: React.ReactNode }) => {
	const [timeline, setTimeline] = useState<gsap.core.Timeline>(initialState);

	return (
		<TransitionContext.Provider value={{ timeline, setTimeline }}>
			{children}
		</TransitionContext.Provider>
	);
};

export const useTransition = () => {
	const context = useContext(TransitionContext);
	if (!context) {
		throw new Error("useTransitionContext must be used within a TransitionProvider");
	}
	return context;
};


