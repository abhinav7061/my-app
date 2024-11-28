import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com', 'assets.aceternity.com', 'images.unsplash.com'],
  },
};

export default nextConfig;
