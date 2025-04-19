/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Add any other necessary configurations
};

module.exports = nextConfig;

// CSP (Content Security Policy) headers for Clarity
module.exports = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value:
              "script-src 'self' https://www.clarity.ms https://c.clarity.ms; connect-src 'self' https://www.clarity.ms https://c.clarity.ms;",
          },
        ],
      },
    ];
  },
};