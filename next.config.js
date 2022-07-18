/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  experimental: {
    images: {
      allowFutureImage: true
    }
  },
  distDir: 'out'
}

module.exports = nextConfig
