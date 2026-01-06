import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Force Next.js to use Webpack instead of Turbopack
  webpack: (config) => {
    return config;
  },
};

export default nextConfig;
