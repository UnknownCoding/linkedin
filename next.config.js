/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["upload.wikimedia.org","olc.org",'images.genius.com'],
  },
}

module.exports = nextConfig

