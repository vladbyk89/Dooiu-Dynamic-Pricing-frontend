/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
        // domains: [
        //     'media.licdn.com',
        //     'pbs.twimg.com',
        //     'd28hgpri8am2if.cloudfront.net',
        // ],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**',
            },
        ],
    },
};

export default nextConfig;
