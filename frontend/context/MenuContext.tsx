"use client";

import { usePathname } from 'next/navigation';
import React, { createContext, useContext, useState, useEffect } from "react";
import { useWindowSize } from "@uidotdev/usehooks";

interface MenuContextProps {
	scrollPosition: number;
	setScrollPosition: React.Dispatch<React.SetStateAction<number>>;
}

const MenuContext = createContext<MenuContextProps | undefined>(undefined);

export const useMenuContext = () => {
	const context = useContext(MenuContext);
	if (!context) {
		throw new Error("useMenuContext must be used within a MenuProvider");
	}
	return context;
};

export const MenuProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const [scrollPosition, setScrollPosition] = useState(0);
	const size = useWindowSize();
	const pathname = usePathname();

	useEffect(() => {
		let pageHeight: number;

		if (typeof window !== "undefined") {
			pageHeight = document?.body.scrollHeight - window.innerHeight;
		}

		const handleScroll: any = () => {
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
