import type { NextConfig } from 'next'
import type { Configuration as WebpackConfig } from 'webpack'

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  webpack(config: WebpackConfig) {
    // SVGR configuration
    config.module = config.module || {};
    config.module.rules = config.module.rules || [];

    // Remove the default SVG loader rule
    const fileLoaderRule = config.module.rules.find((rule) => {
      if (typeof rule !== 'object') return false;
      if (!rule || typeof rule.test !== 'object') return false;
      return rule.test instanceof RegExp && rule.test.toString().includes('svg');
    });

    config.module.rules.push(
      fileLoaderRule && typeof fileLoaderRule === 'object'
        ? {
            ...fileLoaderRule,
            test: /\.svg$/i,
            resourceQuery: /url/, // *.svg?url
          }
        : {
            test: /\.svg$/i,
            resourceQuery: /url/,
            type: 'asset',
          },
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        resourceQuery: { not: [/url/] }, // exclude if *.svg?url
        use: ['@svgr/webpack'],
      }
    );

    // Modify the file loader rule to ignore *.svg, since we have it handled now.
    if (fileLoaderRule && typeof fileLoaderRule === 'object') {
      fileLoaderRule.exclude = /\.svg$/i;
    }

    return config;
  },
}

export default nextConfig
