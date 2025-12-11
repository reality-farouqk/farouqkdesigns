// app/sitemap.js

import fs from 'fs/promises';
import path from 'path';

export default async function sitemap() {
  const baseUrl = 'https://farouqkdesigns.com';

  // Try to load case studies from an API if provided, otherwise fall back to local files.
  async function getCaseStudiesFromApi() {
    const apiUrl = process.env.CASE_STUDIES_API_URL;
    if (!apiUrl) return [];
    try {
      const res = await fetch(apiUrl);
      if (!res.ok) return [];
      const items = await res.json();
      // Normalize possible shapes: { slug, updatedAt } or { slug, updated_at } etc.
      return items.map(item => ({
        slug: item.slug || item.id || '',
        lastModified: (item.updatedAt || item.updated_at || item.modified || item.publishedAt || null) || null,
      })).filter(i => i.slug);
    } catch {
      return [];
    }
  }

  async function getCaseStudiesFromFiles() {
    const candidates = [
      path.join(process.cwd(), 'content', 'case-studies'),
      path.join(process.cwd(), 'case-studies'),
      path.join(process.cwd(), 'data', 'case-studies'),
    ];

    for (const dir of candidates) {
      try {
        const stat = await fs.stat(dir);
        if (!stat.isDirectory()) continue;
        const files = await fs.readdir(dir);
        const mdFiles = files.filter(f => /\.(md|mdx|json|html|txt)$/i.test(f));
        const list = await Promise.all(mdFiles.map(async file => {
          const filePath = path.join(dir, file);
          const s = await fs.stat(filePath);
          const slug = file.replace(/\.(md|mdx|json|html|txt)$/i, '');
          return {
            slug,
            lastModified: s.mtime.toISOString(),
          };
        }));
        return list;
      } catch {
        // try next candidate
      }
    }
    return [];
  }

  // 1. Fetch dynamic data (e.g., blog posts)
  // const posts = await getBlogPosts(); 

  // 2. Map dynamic data to sitemap format
  // const postUrls = posts.map(post => ({
  //   url: `${baseUrl}/blog/${post.slug}`,
  //   lastModified: post.updatedAt,
  // }));

  // 3. Define static routes
  const staticUrls = [
    { url: baseUrl, lastModified: new Date().toISOString() },
    { url: `${baseUrl}/about`, lastModified: new Date().toISOString() },
    { url: `${baseUrl}/services`, lastModified: new Date().toISOString() },
  ];

  // Load case studies (API if configured, otherwise from local files)
  const caseStudies = (process.env.CASE_STUDIES_API_URL)
    ? await getCaseStudiesFromApi()
    : await getCaseStudiesFromFiles();

  const caseStudyUrls = caseStudies.map(cs => ({
    url: `${baseUrl}/case-studies/${cs.slug}`,
    lastModified: cs.lastModified || new Date().toISOString(),
  }));

  // Return combined list of static and dynamic URLs
  return [...staticUrls, ...caseStudyUrls /* , ...postUrls */];
}