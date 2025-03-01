import { type Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

// Styles
import "@unocss/reset/tailwind.css";
import "@/styles/globals.css";

// Context
import { MenuProvider } from "@/context/MenuContext";
import { TransitionProvider } from "@/context/TransitionContext";
import ScrollProvider from "@/context/ScrollContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: {
		default: "Jordi Paradelo - Freelance Web Developer",
		template: "%s | Jordi Paradelo",
	},
	description: "Freelance web developer specialized in React, Next.js, and modern web technologies.",
	keywords: ["web development", "freelance", "React", "Next.js", "TypeScript"],
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<ScrollProvider>
					<MenuProvider>
						<TransitionProvider>
							{children}
						</TransitionProvider>
					</MenuProvider>
				</ScrollProvider>
				{/* <Analytics /> */}
			</body>
		</html>
	);
}
