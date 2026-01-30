// app/sitemap.js

import { caseStudies } from './data/caseStudies';

export default async function sitemap() {
  const baseUrl = 'https://www.farouqkdesigns.com';

  // Static routes
  const staticUrls = [
    { url: `${baseUrl}`, lastModified: new Date().toISOString(), changefreq: 'weekly', priority: 1.0 },
    { url: `${baseUrl}/about`, lastModified: new Date().toISOString(), changefreq: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/services`, lastModified: new Date().toISOString(), changefreq: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/case-studies`, lastModified: new Date().toISOString(), changefreq: 'monthly', priority: 0.7 },
  ];

  // Case studies from local data file (app/data/case-studies.ts)
  const caseStudyUrls = (Array.isArray(caseStudies) ? caseStudies : []).map((cs) => ({
    url: `${baseUrl}/case-studies/${cs.slug}`,
    lastModified: new Date().toISOString(),
    changefreq: 'monthly',
    priority: 0.7,
  }));

  return [...staticUrls, ...caseStudyUrls];
}
