/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Static export for GitHub Pages
  output: "export",
  // Ensure assets and pages are served from the repository subpath
  basePath: "/aitron",
  assetPrefix: "/aitron",
  // Create folder-per-page (index.html under each folder) which works better for Pages
  trailingSlash: true,
};

module.exports = nextConfig;
