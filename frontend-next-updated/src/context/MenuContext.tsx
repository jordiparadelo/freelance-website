"use client";

import { usePathname } from "next/navigation";
import type React from "react";
import { createContext, useContext, useLayoutEffect, useState } from "react";
import { useWindowSize } from "usehooks-ts";

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
