/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: [
        "allowed-koala-21.clerk.accounts.dev",
        "oaidalleapiprodscus.blob.core.windows.net",
        "cdn.openai.com"
      ]
    },
  }

  module.exports = nextConfig

  