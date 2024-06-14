/**
 * This is the configuration file for Next.js.
 *
 * Learn more: https://nextjs.org/docs/api-reference/next.config.js/introduction
 *
 * @type {import('next').NextConfig}
 */
const nextConfig = {
	webpack(config) {
	  // Add the SVGR loader
	  config.module.rules.push({
		test: /\.svg$/,
		use: ['@svgr/webpack'],
	  });
  
	  return config;
	},
	images: {
	  // Enable/Disable Unoptimized Image Generation
	  unoptimized: false,
  
	  // Enable/Disable Static Image Generation (Recommended)
	  domains: ['i.imgur.com'],
  
	  // Enable/Disable Blur-Up Placeholder Images (Recommended)
	  loader: 'default',
  
	  // Enable/Disable Image Sizes Attribute (Recommended)
	  deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
	  imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  
	  // Enable/Disable Next.js Image Component Format Support
	  formats: ['image/avif', 'image/webp'],
	},
  };
  
  module.exports = nextConfig;
  