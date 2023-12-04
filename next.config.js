const withNextIntl = require('next-intl/plugin')();

/** @type {import('next').NextConfig} */

const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/theme')],
  },
};

module.exports = withNextIntl(nextConfig);
