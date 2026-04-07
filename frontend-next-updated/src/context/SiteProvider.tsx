import React from "react";
// Context
import { MenuProvider } from "@/context/MenuContext";
import { TransitionProvider } from "@/context/TransitionContext";
import { ThemeProvider } from "@/context/ThemeProvider";
import ScrollProvider from "@/context/ScrollContext";

const SiteProvider = ({ children }: { children: React.ReactNode }) => {
	return (
		<ThemeProvider>
			<TransitionProvider>
				<ScrollProvider>
					<MenuProvider>{children}</MenuProvider>
				</ScrollProvider>
			</TransitionProvider>
		</ThemeProvider>
	);
};

export default SiteProvider;
