import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   images: {
    domains: ['screenshot.abstractapi.com', 'api.microlink.io'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'screenshot.abstractapi.com',
      },
      {
        protocol: 'https',
        hostname: 'api.microlink.io',
      },
      {
        protocol: 'https',
        hostname: '**.netlify.app',
      },
      // Agrega otros dominios que necesites
    ],
  },
};

export default nextConfig;
