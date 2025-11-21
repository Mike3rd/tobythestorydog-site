import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "texhejymskbpalmgsteh.supabase.co",
      },
    ],
  },
};

export default nextConfig;
