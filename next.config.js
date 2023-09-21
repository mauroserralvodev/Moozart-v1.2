/** @type {import('next').NextConfig} */
const nextConfig = {
    swcMinify: true,
    experimental: {
      pageEnv: true,
      scrollRestoration: true,
      externalDir: true,
      // reactRoot: "concurrent",
      // concurrentFeatures: true,
    }
}

module.exports = nextConfig
