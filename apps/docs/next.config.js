const { withContentlayer } = require("next-contentlayer");
const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
    transpilePackages: ["@hopper-ui"],
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "assets.workleap.com",
                port: "",
                pathname: "/hopper/**"
            }
        ]
    },
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/i,
            use: ["@svgr/webpack"]
        });

        config.resolve.alias = {
            ...config.resolve.alias
        }

        return config;
    }
};

module.exports = withContentlayer(nextConfig);
