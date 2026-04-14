import type { Metadata } from "next";
import "@/styles/globals.css";

import { Inter } from "next/font/google";
import { Suspense } from "react";
import JsonLd from "@/components/JsonLd";
import { Footer, Navbar } from "@/components/layouts";
import SiteProvider from "@/context/SiteProvider";
import { METADATA, ORGANIZATION_DATA } from "./seo.config";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = METADATA;

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<JsonLd data={ORGANIZATION_DATA} />
			</head>
			<body className={inter.className}>
				<SiteProvider>
					<Navbar />
					{children}
					<Footer />
				</SiteProvider>
			</body>
		</html>
	);
}
