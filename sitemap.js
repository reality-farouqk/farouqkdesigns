// Compatibility wrapper: re-export sitemap from app/sitemap.js
module.exports = require('./app/sitemap.js').default || require('./app/sitemap.js');