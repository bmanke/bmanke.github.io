/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    reactStrictMode: true,
    typescript: {
        ignoreBuildErrors: true,
    }
};

export { nextConfig };

export default nextConfig;