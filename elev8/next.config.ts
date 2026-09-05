import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.clerk.com",
      },
      {
        protocol: "https",
        hostname: "placehold.co",
      },
    ],
  },
  transpilePackages: [
    "jsonresume-theme-academic-cv-lite",
    "jsonresume-theme-architects-portfolio",
    "jsonresume-theme-art-deco",
    "jsonresume-theme-art-school-modern",
    "jsonresume-theme-brutalist",
    "jsonresume-theme-desert-modern",
    "jsonresume-theme-developer-mono",
    "jsonresume-theme-elegant",
    "jsonresume-theme-even",
    "jsonresume-theme-executive-slate",
    "jsonresume-theme-government-standard",
    "jsonresume-theme-macchiato",
    "jsonresume-theme-minimalist-grid",
    "jsonresume-theme-nordic-minimal",
    "jsonresume-theme-sidebar",
    "@jsonresume/core"
  ],
};

export default nextConfig;
