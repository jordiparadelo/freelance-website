import { type Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

// Styles
import "@/styles/globals.css";

// Context
import { MenuProvider } from "@/context/MenuContext";
import { TransitionProvider } from "@/context/TransitionContext";
import { ThemeProvider } from "@/context/ThemeProvider";
import ScrollProvider from "@/context/ScrollContext";

// Components
import { Footer, Modal } from "@/components/layouts";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: {
		default: "Jordi Paradelo - Freelance Web Developer",
		template: "%s | Jordi Paradelo",
	},
	description:
		"Freelance web developer specialized in React, Next.js, and modern web technologies.",
	keywords: ["web development", "freelance", "React", "Next.js", "TypeScript"],
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<ThemeProvider>
					<TransitionProvider>
						<ScrollProvider>
							<MenuProvider>
								{children}
								<Footer />
								<Suspense fallback={null}>
									<Modal />
								</Suspense>
							</MenuProvider>
						</ScrollProvider>
					</TransitionProvider>
				</ThemeProvider>
				<Analytics />
			</body>
		</html>
	);
}
