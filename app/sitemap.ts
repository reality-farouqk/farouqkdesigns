// app/sitemap.ts

import { MetadataRoute } from 'next';
import { caseStudies } from './data/caseStudies';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.farouqkdesigns.com';

  // Static routes
  const staticUrls: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
    { url: `${baseUrl}/case-studies`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
  ];

  // Case studies from local data file
  const caseStudyUrls: MetadataRoute.Sitemap = (Array.isArray(caseStudies) ? caseStudies : []).map((cs) => ({
    url: `${baseUrl}/case-studies/${cs.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticUrls, ...caseStudyUrls];
}
