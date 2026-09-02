export const metadata = {
  title: 'Live Bakery & Cake Ordering Website Demo | SiteMint by Yuvraj Singh',
  description: 'Explore our live interactive Bakery & Cake ordering website demo. Features custom cake design generator, flavor and weight selector, live cart, and 1-click WhatsApp checkout. Built by Yuvraj Singh (SiteMint).',
  keywords: [
    'bakery website demo',
    'cake ordering online demo',
    'bakery website developer',
    'restaurant whatsapp order demo',
    'bakery digital menu template',
    'online cake shop demo',
    'custom cake website',
    'Yuvraj Singh website developer',
    'SiteMint bakery demo',
    'kam budget bakery website',
    'food delivery website developer'
  ],
  alternates: {
    canonical: 'https://sitemint.in/demos/bakery',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Live Bakery & Cake Online Ordering Demo | SiteMint by Yuvraj Singh',
    description: 'Explore live interactive cake ordering website with custom weight calculators, flavor selectors, and direct WhatsApp order dispatch.',
    url: 'https://sitemint.in/demos/bakery',
    siteName: 'SiteMint',
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Live Bakery Website Demo - SiteMint',
    description: 'Test interactive online bakery shop demo created by Yuvraj Singh (SiteMint).',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'SiteMint Bakery & Cake Online Ordering Website Demo',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'All',
  url: 'https://sitemint.in/demos/bakery',
  author: {
    '@type': 'Person',
    name: 'Yuvraj Singh',
    url: 'https://sitemint.in',
    jobTitle: 'Full Stack Web & Mobile App Developer',
  },
  provider: {
    '@type': 'Organization',
    name: 'SiteMint',
    url: 'https://sitemint.in',
  },
  description: 'Interactive online bakery and cake ordering platform demo showcasing custom cake builders, flavor selections, instant weight pricing, and WhatsApp checkout.',
  offers: {
    '@type': 'Offer',
    price: '2999',
    priceCurrency: 'INR',
    availability: 'https://schema.org/InStock',
  },
};

export default function BakeryDemoLayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
