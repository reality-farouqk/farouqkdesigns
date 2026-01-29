import React from 'react';
import Script from 'next/script';

export default function SchemaMarkup() {
  // Organization Schema
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Farouqk Designs',
    url: 'https://www.farouqkdesigns.com',
    logo: 'https://www.farouqkdesigns.com/farouqkdesignslogo-transparent.svg',
    description: 'Web design and copywriting for founders & entrepreneurs',
    sameAs: [
      'https://twitter.com/farouqkdesigns',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      email: 'contact@farouqkdesigns.com',
    },
  };

  // Service Schema
  const servicesSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: [
      {
        '@type': 'Service',
        name: 'Landing Page Design',
        description: 'Conversion-optimized landing pages designed to turn visitors into leads or customers.',
        provider: {
          '@type': 'Organization',
          name: 'Farouqk Designs',
        },
      },
      {
        '@type': 'Service',
        name: 'Business Website Design',
        description: 'Clean, professional websites that position your brand as credible and trustworthy.',
        provider: {
          '@type': 'Organization',
          name: 'Farouqk Designs',
        },
      },
      {
        '@type': 'Service',
        name: 'Website Copywriting',
        description: 'Clear, persuasive copy that communicates your value and moves users to act.',
        provider: {
          '@type': 'Organization',
          name: 'Farouqk Designs',
        },
      },
      {
        '@type': 'Service',
        name: 'UI / UX Design',
        description: 'User-first layouts that are simple, intuitive, and built for conversion.',
        provider: {
          '@type': 'Organization',
          name: 'Farouqk Designs',
        },
      },
    ],
  };

  // Pricing Schema
  const pricingSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: [
      {
        '@type': 'Product',
        name: 'Basic Package',
        description: 'One-time website or landing page setup with full ownership',
        offers: {
          '@type': 'Offer',
          priceCurrency: 'USD',
          price: '999',
        },
      },
      {
        '@type': 'Product',
        name: 'Full Marketing Tier',
        description: 'Complete solution including email marketing, booking system, lead magnets, and SEO',
        offers: {
          '@type': 'Offer',
          priceCurrency: 'USD',
          price: '2500',
        },
      },
    ],
  };

  return (
    <>
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <Script
        id="services-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(servicesSchema),
        }}
      />
      <Script
        id="pricing-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(pricingSchema),
        }}
      />
    </>
  );
}
