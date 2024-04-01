import React, { createContext, useContext } from "react";

export const TransitionContext = createContext(undefined);

const initialState = gsap.timeline({ paused: true });

export const Transition = ({ children }) => {
    const [timeline, setTimeline] = useState(initialState);
	return (
		<TransitionContext.Provider value={{timeline, setTimeline}}>
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


