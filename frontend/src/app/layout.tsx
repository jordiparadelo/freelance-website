import type { Metadata } from "next";
import "@/styles/globals.css";

import { Inter } from "next/font/google";
import JsonLd from "@/components/JsonLd";
import { Footer, Navbar } from "@/components/layouts";
import SiteProvider from "@/lib/context/SiteProvider";
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
        <meta name="google-site-verification" content="H_Z2sICdLI7k2srgS_sepTNT9uO9p1bSlJgz1LRcBBM" />
      </head>
      <body className={inter.className}>
        <SiteProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </SiteProvider>
      </body>
    </html>
  );
}
