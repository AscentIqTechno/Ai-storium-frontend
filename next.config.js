/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    env: {
      NEXT_CHAT_GPT_API_KEY: process.env.NEXT_CHAT_GPT_API_KEY,
    },
  };
  
  module.exports = nextConfig;
  