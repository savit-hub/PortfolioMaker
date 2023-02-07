/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "akamai",
    path: "/PortfolioMaker",
  },
};

module.exports = nextConfig;
