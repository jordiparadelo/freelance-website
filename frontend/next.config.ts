import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	reactCompiler: true,
	images: {
		dangerouslyAllowLocalIP: true,
		remotePatterns: [
			{
				protocol: "http",
				hostname: "localhost",
				port: "1337",
				pathname: "/uploads/**",
			},
			{
				protocol: "http",
				hostname: "127.0.0.1",
				port: "1337",
				pathname: "/uploads/**",
			},
			{
				protocol: "https",
				hostname: "brave-acoustics-c71e878341.media.strapiapp.com",
				port: "",
				pathname: "/**",
			},
		],
	},
};
export default nextConfig;
