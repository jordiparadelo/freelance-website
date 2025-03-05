import { type Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

// Styles
import "@/styles/globals.css";

// Components
import { Footer, Modal } from "@/components/layouts";
import { Suspense } from "react";
import SiteProvider from "@/context/SiteProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: {
		default: "Jordi Paradelo - Freelance Web Developer",
		template: "%s | Jordi Paradelo",
	},
	description:
		"Freelance web developer specialized in React, Next.js, and modern web technologies. Creating high-performance, scalable web applications with modern tech stack.",
	keywords: [
		"web development",
		"freelance",
		"React",
		"Next.js",
		"TypeScript",
		"frontend developer",
		"web developer",
		"UI/UX",
		"responsive design",
	],
	authors: [{ name: "Jordi Paradelo" }],
	creator: "Jordi Paradelo",
	publisher: "Jordi Paradelo",
	formatDetection: {
		email: false,
		address: false,
		telephone: false,
	},
	metadataBase: new URL("https://your-domain.com"), // Replace with your actual domain
	alternates: {
		canonical: "/",
	},
	openGraph: {
		title: "Jordi Paradelo - Freelance Web Developer",
		description:
			"Freelance web developer specialized in React, Next.js, and modern web technologies. Creating high-performance, scalable web applications with modern tech stack.",
		url: "https://your-domain.com", // Replace with your actual domain
		siteName: "Jordi Paradelo",
		images: [
			{
				url: "/og-image.jpg", // Add your OG image
				width: 1200,
				height: 630,
				alt: "Jordi Paradelo - Freelance Web Developer",
			},
		],
		locale: "en_US",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Jordi Paradelo - Freelance Web Developer",
		description:
			"Freelance web developer specialized in React, Next.js, and modern web technologies. Creating high-performance, scalable web applications with modern tech stack.",
		images: ["/og-image.jpg"], // Same as OG image
		creator: "@yourTwitterHandle", // Replace with your Twitter handle
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	verification: {
		google: "your-google-site-verification", // Add your Google verification code
		// other verification codes as needed
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<SiteProvider>
					{children}
					<Footer />
					<Suspense fallback="...loading">
						<Modal />
					</Suspense>
				</SiteProvider>
				<Analytics />
			</body>
		</html>
	);
}
