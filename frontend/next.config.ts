// Import necessary types from Next.js
/** @type {import('next').NextConfig} */

const nextConfig = {
  webpack: (config: any, { isServer }: { isServer: boolean }) => {
   
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            babel: false,
            icon: true,
          },
        },
      ],
    });

    return config;
  },
};

module.exports = nextConfig;
