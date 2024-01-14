/* eslint-disable import/no-extraneous-dependencies, import/extensions */
import './src/libs/Env.mjs';
import withBundleAnalyzer from '@next/bundle-analyzer';

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
export default bundleAnalyzer({
  eslint: {
    dirs: ['.'],
  },
  poweredByHeader: false,
  reactStrictMode: true,
  rewrites: async () => [
    {
      source: '/public/100days/index.html',
      destination: '/pages/portfolio/api/100days.ts',
    },
  ],
  webpack: (config) => {
    // config.externals is needed to resolve the following errors:
    // Module not found: Can't resolve 'bufferutil'
    // Module not found: Can't resolve 'utf-8-validate'
    config.externals.push({
      bufferutil: 'bufferutil',
      'utf-8-validate': 'utf-8-validate',
    });
    // needed to resolve an error: Module not found: Can't resolve 'fs'
    // eslint-disable-next-line no-param-reassign
    config.resolve.fallback = {
      fs: false,
    };

    return config;
  },
});
