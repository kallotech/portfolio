import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  assetPrefix: process.env.GITHUB_ACTIONS ? '/portfolio/' : undefined,
};

export default nextConfig;
