/** @type {import('next').NextConfig} */
const repoName = 'friends-trading-company';
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  // On GitHub Pages, the site is hosted at /repo-name/
  // But in local development, we want it at /
  basePath: isProd ? `/${repoName}` : '',
  assetPrefix: isProd ? `/${repoName}/` : '',
  trailingSlash: isProd ? true : false,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com'
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com'
      }
    ]
  }
};

export default nextConfig;
