/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  poweredByHeader: false,
  // Optimazing and compression js chunks and bundles
  swcMinify: process.env.NODE_ENV !== 'development',
  // Enable type checking for Link and Router.push, etc.
  experimental: {
    typedRoutes: true,
  },
};

module.exports = nextConfig;
