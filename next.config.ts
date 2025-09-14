import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [],
  },
  swcMinify: true,
  experimental: {
    optimizeCss: true
  },
  
};

export default nextConfig;