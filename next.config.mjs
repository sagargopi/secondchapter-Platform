/** @type {import('next').NextConfig} */
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  webpack: (config) => {
    // Handle dependency resolution for vaul
    config.resolve.alias = {
      ...config.resolve.alias,
      'react$': require.resolve('react'),
      'react-dom$': require.resolve('react-dom'),
    };
    return config;
  },
}

export default nextConfig
