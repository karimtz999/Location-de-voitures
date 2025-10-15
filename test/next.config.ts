import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // optional flags go here
  },
  webpack(config, options) {
    // `config` is typed (webpack.Configuration),
    // `options` includes things like `isServer`, `dev`, etc.
    return config;
  },
};

export default nextConfig;
