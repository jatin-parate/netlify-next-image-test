/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        hostname: "cdn.shopify.com",
        port: "",
        pathname: "/app-store/listing_images/**",
        protocol: "https",
      },
    ],
  },
};

module.exports = nextConfig;
