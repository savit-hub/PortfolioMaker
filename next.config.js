/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: "/PortfolioMaker",
  images: {
    loader: "akamai",
    path: "/PortfolioMaker",
  },
};

module.exports = nextConfig;
