import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  output: 'standalone',
  images: { unoptimized: true },
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  serverExternalPackages: ['@prisma/client', 'bcryptjs', 'jsonwebtoken'],
};
export default nextConfig;