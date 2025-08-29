import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
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
        hostname: '*.netlify.app',
      },
      {
        protocol: 'https',
        hostname: 'www.youtube.com',
      },
      {
        protocol: 'https',
        hostname: 'i.ytimg.com', // Para las miniaturas de YouTube
      },
    ],
  },
};

export default nextConfig;
