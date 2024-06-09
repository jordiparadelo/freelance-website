
import { Suspense } from "react";
// import  {  Head } from "next/document";

// Components
import { Navbar, Footer, Modal } from "@/layouts";
// Fonts
import { Manrope } from "next/font/google";
// Styles
import "@/styles/globals.css";
// Images
import ogImage from '@/public/assets/open-graph.png';

export const metadata = {
	title: "Freelancer | Web Designer & Developer",
	description:
		"Welcome to my portfolio showcasing my skills as a freelancer designer and developer.",
	keywords:
		"freelancer, designer, developer, portfolio, webflow, figma, web animations, gsap",
	author: "Jordi Paradelo Palazzo",
	og: {
		title: "Jordi Paradelo Palazo | Freelance Web Designer & Developer",
		type: "website",
		url: "https://jordiparadelo.com",
		siteName: "Jordi Paradelo Palazo | Portfolio",
		description:
			"Freelance Web Designer & Developer based in Barcelona. I create beautiful and functional websites for clients.",
		image: {
			url: ogImage,
			secureUrl: ogImage,
			type: "image/png",
			width: 800,
			height: 600,
			alt: "Jordi Paradelo Palazo",
		},
	},
};


// Fonts
const manrope = Manrope({
	subsets: ["latin"],
	display: "swap",
});

export default function RootLayout({ children }) {
	return (
		<html
			lang='en'
			data-theme='dark'
		>
			<body
				suppressHydrationWarning={true}
			>
				{/* <Navbar /> */}
				<main>{children}</main>
				<Footer />
				<Suspense fallback={null}>
					<Modal />
				</Suspense>
			</body>
		</html>
	);
}
