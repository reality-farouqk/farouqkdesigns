// app/robots.js

export default function robots() {
  return {
    rules: [
      {
        userAgent: '*', // Applies to all web robots (e.g., Googlebot, Bingbot)
        allow: '/', // Allow crawling of the entire site
        // disallow: ['/private/', '/admin'], // Example of blocking specific directories
      },
      {
        userAgent: 'Googlebot', // Specific rule for Google's crawler
        allow: '/',
        // disallow: '/cgi-bin/',
      },
    ],
    sitemap: 'https://www.farouqkdesigns.com/sitemap.xml',
  }
}