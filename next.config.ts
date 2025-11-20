import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    domains: ["texhejymskbpalmgsteh.supabase.co"], // ✅ add your Supabase storage domain
  },
};

export default nextConfig;
