/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "source.unsplash.com",
        port: "",
        pathname: "/random/**",
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
    serverActions: true
  },
  env: {
    siteKey: '6LfwnicpAAAAAAqOpnZ6JyZ8t8EwBhll2RmlBYRf'
  }
};
module.exports = nextConfig;
