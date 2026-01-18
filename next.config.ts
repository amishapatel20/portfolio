import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    // Ensure Turbopack treats this folder as the root so
    // dependencies like tailwindcss resolve from ./node_modules
    root: __dirname,
  },
};

export default nextConfig;
