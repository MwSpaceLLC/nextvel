/** @type {import('next').NextConfig} */

const {i18n} = require('./next-i18next.config');

const nextConfig = {
    i18n,
    reactStrictMode: true,
    images: {
        domains: []
    },

    // response limit
    api: {
        responseLimit: '4mb'
    },

    // seo sitemap /rewrites
    async rewrites() {
        return [
            {
                source: '/sitemap.xml',
                destination: '/api/sitemap'
            }
        ]
    }
}

module.exports = nextConfig
