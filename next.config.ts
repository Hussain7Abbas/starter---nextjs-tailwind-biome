import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      new URL('https://framerusercontent.com/images/**'),
    ],
  },
};

export default nextConfig;
