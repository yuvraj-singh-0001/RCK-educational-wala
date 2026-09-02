export const metadata = {
  title: 'Live School & Coaching Portal Website Demo | SiteMint by Yuvraj Singh',
  description: 'Explore our live interactive School & Coaching Institute management website demo. Features course syllabus catalogs, online admission lead forms, test result lookups, and WhatsApp helpdesk. Built by Yuvraj Singh (SiteMint).',
  keywords: [
    'coaching institute portal demo',
    'school website demo',
    'online admission portal demo',
    'student test result board demo',
    'tuition center website sample',
    'school website developer',
    'education website developer India',
    'Yuvraj Singh website developer',
    'SiteMint education demo',
    'coaching portal developer'
  ],
  alternates: {
    canonical: 'https://sitemint.in/demos/education',
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
    title: 'Live School & Coaching Portal Demo | SiteMint by Yuvraj Singh',
    description: 'Test interactive course catalogs, student lead forms, syllabus viewer, and test score results.',
    url: 'https://sitemint.in/demos/education',
    siteName: 'SiteMint',
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Live Education Portal Demo - SiteMint',
    description: 'Test interactive coaching and school website demo created by Yuvraj Singh (SiteMint).',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'SiteMint School & Coaching Institute Portal Demo',
  applicationCategory: 'EducationalApplication',
  operatingSystem: 'All',
  url: 'https://sitemint.in/demos/education',
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
  description: 'Interactive educational platform demo showcasing online course directories, admission registration inquiries, student exam results, and automated WhatsApp contact.',
  offers: {
    '@type': 'Offer',
    price: '2999',
    priceCurrency: 'INR',
    availability: 'https://schema.org/InStock',
  },
};

export default function EducationDemoLayout({ children }) {
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
