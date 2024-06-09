/**
 * This is the configuration file for Next.js.
 *
 * Learn more: https://nextjs.org/docs/api-reference/next.config.js/introduction
 *
 * @type {import('next').NextConfig}
 */
module.exports = {
    // Next.js Image Optimization Configuration
    // https://nextjs.org/docs/api-reference/next/image#configuration
    images: {
        // Enable/Disable Unoptimized Image Generation
        // https://nextjs.org/docs/api-reference/next/image#configuration
        unoptimized: false,

        // Enable/Disable Static Image Generation (Recommended)
        // https://nextjs.org/docs/api-reference/next/image#configuration
        // For more information, see:
        // https://nextjs.org/docs/api-reference/next/image#configuring-next-image-for-production
        domains: ['i.imgur.com'],

        // Enable/Disable Blur-Up Placeholder Images (Recommended)
        // https://nextjs.org/docs/api-reference/next/image#configuration
        // For more information, see:
        // https://nextjs.org/docs/api-reference/next/image#configuring-next-image-for-production
        loader: 'default',

        // Enable/Disable Image Sizes Attribute (Recommended)
        // https://nextjs.org/docs/api-reference/next/image#configuration
        // For more information, see:
        // https://nextjs.org/docs/api-reference/next/image#configuring-next-image-for-production
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],

        // Enable/Disable Next.js Image Component Format Support
        // https://nextjs.org/docs/api-reference/next/image#configuration
        // For more information, see:
        // https://nextjs.org/docs/api-reference/next/image#configuring-next-image-for-production
        // supported formats: "image/avif", "image/webp", "image/jpeg"
        // default: ["image/avif", "image/webp"]
        formats: ['image/avif', 'image/webp'],
    },
};
