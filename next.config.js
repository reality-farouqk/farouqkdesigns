/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: [
              "script-src 'self' https://www.clarity.ms https://c.clarity.ms https://www.googletagmanager.com https://va.vercel-scripts.com 'unsafe-inline' 'unsafe-eval'",
              "connect-src 'self' https://www.clarity.ms https://c.clarity.ms https://h.clarity.ms https://www.google-analytics.com https://www.googletagmanager.com https://va.vercel-scripts.com",
              "img-src 'self' data: http://localhost:3000 https://www.farouqkdesigns.com",
              "font-src 'self' http://localhost:3000 https://www.farouqkdesigns.com",
              "style-src 'self' 'unsafe-inline'",
            ].join("; "),
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;