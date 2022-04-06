/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // basePath: '/countries',
  images: { 
    domains: ['flagcdn.com', 'upload.wikimedia.org'],
    // formats: ['webp', 'png', 'jpg', 'svg'],
  },
}

module.exports = nextConfig
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'