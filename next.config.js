const withNextIntl = require("next-intl/plugin")();

/** @type {import("next").NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "out",
  trailingSlash: true,
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true }
};

module.exports = withNextIntl(nextConfig);
