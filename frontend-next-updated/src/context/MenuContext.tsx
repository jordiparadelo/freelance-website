"use client";

import { useWindowSize } from "@uidotdev/usehooks";

import { usePathname } from "next/navigation";

import React, { createContext, useContext, useState, useLayoutEffect } from "react";

interface MenuContextType {
	scrollPosition: number;
	setScrollPosition: React.Dispatch<React.SetStateAction<number>>;
}

const MenuContext = createContext<MenuContextType | undefined>(undefined);

export const useMenuContext = () => {
	const context = useContext(MenuContext);
	if (!context) {
		throw new Error("useMenuContext must be used within a MenuProvider");
	}
	return context;
};

export const MenuProvider = ({ children }: { children: React.ReactNode }) => {
	const [scrollPosition, setScrollPosition] = useState(0);
	const size = useWindowSize();
	const pathname = usePathname();

	useLayoutEffect(() => {
		let pageHeight: number = 0;

		if (typeof window !== "undefined") {
			pageHeight = document?.body.scrollHeight - window.innerHeight;
		}

		const handleScroll = () => {
			const scrollPercent = Math.round((window.scrollY / pageHeight) * 100);
			setScrollPosition(scrollPercent);
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [size, pathname]);

	return (
		<MenuContext.Provider value={{ scrollPosition, setScrollPosition }}>
			{children}
		</MenuContext.Provider>
	);
};

export const useMenu = () => {
	const { scrollPosition, setScrollPosition } = useMenuContext();
	// Add your logic to trigger the menu based on scroll position or any other condition
	return { scrollPosition, setScrollPosition };
};
