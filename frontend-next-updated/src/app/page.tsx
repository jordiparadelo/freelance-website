import type { Metadata } from "next";
import { HOME_METADATA } from "@/app/seo.config";
import HomePage from "@/components/pages/HomePage";

export const metadata: Metadata = HOME_METADATA;

export default function Home() {
	return <HomePage />;
}
