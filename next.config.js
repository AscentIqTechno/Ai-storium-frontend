/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_CHAT_GPT_API_KEY: process.env.NEXT_CHAT_GPT_API_KEY,
  },
  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      canvas: false, // Prevents pdfjs-dist from trying to use Node.js canvas
    };
    return config;
  },
};

module.exports = nextConfig;
