/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath: '/manish-portfolio',
  assetPrefix: '/manish-portfolio/',
  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      path: false,
      crypto: false,
      stream: false,
      util: false,
      assert: false,
      os: false,
      url: false,
      zlib: false,
      http: false,
      https: false,
      buffer: false,
      process: false,
    }
    return config
  },
}

module.exports = nextConfig