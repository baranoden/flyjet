/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  publicRuntimeConfig: {
    NEXT_PUBLIC_API: process.env.NEXT_PUBLIC_API,
  },
};

module.exports = nextConfig;
