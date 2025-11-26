import type { Metadata } from 'next';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://aitron.com';
const siteName = process.env.NEXT_PUBLIC_SITE_NAME || 'AITRON';

export const siteConfig = {
  name: siteName,
  description: 'AITRON: Unlock Smarter Infrastructure. Modernize electrical systems with AI-powered diagnostics and automation.',
  url: baseUrl,
  ogImage: `${baseUrl}/og-image.png`,
  twitter: '@aitron_ai',
  keywords: [
    'smart infrastructure',
    'AI electrical systems',
    'energy management',
    'automation',
    'IoT',
    'smart buildings',
    'electrical diagnostics',
  ],
};

export const generateBaseMetadata = (): Metadata => {
  return {
    title: {
      default: `${siteName} - Unlock Smarter Infrastructure`,
      template: `%s | ${siteName}`,
    },
    description: siteConfig.description,
    keywords: siteConfig.keywords,
    authors: [{ name: siteName }],
    creator: siteName,
    metadataBase: new URL(baseUrl),
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: baseUrl,
      siteName: siteName,
      title: `${siteName} - Unlock Smarter Infrastructure`,
      description: siteConfig.description,
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: `${siteName} - Unlock Smarter Infrastructure`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${siteName} - Unlock Smarter Infrastructure`,
      description: siteConfig.description,
      images: [siteConfig.ogImage],
      creator: siteConfig.twitter,
    },
    robots: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
      googleBot: 'index, follow',
    },
    verification: {
      google: 'google-site-verification-code', // Add actual Google Search Console verification code
      yandex: 'yandex-verification-code', // Add Yandex verification if needed
    },
  };
};

export const structuredData = {
  organization: {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteName,
    url: baseUrl,
    logo: `${baseUrl}/logo.png`,
    description: siteConfig.description,
    sameAs: [
      'https://www.linkedin.com/company/aitron', // Update with actual socials
      'https://twitter.com/aitron_ai',
      'https://github.com/aitron',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      url: baseUrl,
    },
  },
  website: {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    url: baseUrl,
    name: siteName,
    description: siteConfig.description,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${baseUrl}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  },
  product: {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: siteName,
    description: siteConfig.description,
    url: baseUrl,
    applicationCategory: 'EnterpriseApplication',
    offers: {
      '@type': 'Offer',
      url: baseUrl,
    },
  },
};
