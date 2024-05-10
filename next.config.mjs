/** @type {import('next').NextConfig} */
const nextConfig = {
    // experimental: {
    //     optimizePackageImports: ['ant-design']
    // }
    async redirects() {
        return [
            {
                destination: "/auth/login",
                permanent: true,
                source: "/",
            },
            {
                destination: "/auth/login",
                permanent: true,
                source: "/auth",
            },
        ];
    },
};

export default nextConfig;
