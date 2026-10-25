import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    dangerouslyAllowLocalIP: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "zrmmapecnuinszykoiqy.supabase.co",
        pathname: "/storage/v1/object/public/**",
      },
    ],
  },
};
export default nextConfig;
