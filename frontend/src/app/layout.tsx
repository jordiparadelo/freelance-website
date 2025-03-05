import "@/styles/globals.css";
import { Footer, Modal } from "@/components/layouts";
import SiteProvider from "@/context/SiteProvider";
import JsonLd from "@/components/JsonLd";
import { ORGANIZATION_DATA, METADATA } from "@/app/seo.config";

import { Analytics } from "@vercel/analytics/react";

import { type Metadata } from "next";
import { Inter } from "next/font/google";

import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = METADATA

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {

	return (
		<html lang='en'>
			<head>
				<JsonLd data={ORGANIZATION_DATA} />
			</head>
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
