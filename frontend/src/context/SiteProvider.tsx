import type React from "react";
import { LoadingCurtain } from "@/components/ui";
import ScrollProvider from "@/context/ScrollContext";
import { ThemeProvider } from "@/context/ThemeProvider";
import { TransitionPageProvider } from "@/context/TransitionPageContext";

const SiteProvider = ({ children }: { children: React.ReactNode }) => {
	return (
		<ThemeProvider>
			<TransitionPageProvider>
				{/* <LoadingCurtain /> */}
				<ScrollProvider>{children}</ScrollProvider>
			</TransitionPageProvider>
		</ThemeProvider>
	);
};

export default SiteProvider;
