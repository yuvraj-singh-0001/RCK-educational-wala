import TechnologiesClientPage from './TechnologiesClientPage';

export const metadata = {
  title: '30+ Technologies & Software Tools We Use | SiteMint Studio',
  description: 'Explore the 30+ production-grade software tools, frameworks, databases, mobile engines, video editing suites, and ad platforms used by SiteMint Studio (Next.js 15, React 19, Flutter, Node.js, AWS, Tailwind CSS, Premiere Pro, Meta Ads).',
  keywords: [
    'SiteMint tech stack',
    'technologies we use',
    'Next.js 15 web development india',
    'Flutter mobile app development stack',
    'Node.js backend framework',
    'MongoDB and PostgreSQL database',
    'AWS cloud infrastructure india',
    'Premiere Pro video editing studio',
    'Meta Ads and Google Ads management',
    'Tailwind CSS styling architecture',
    'SiteMint software tools'
  ],
  alternates: {
    canonical: 'https://sitemint.in/technologies',
  },
  openGraph: {
    title: '30+ Technologies & Software Tools We Use | SiteMint Studio',
    description: 'Detailed tech stack breakdown across Web, Mobile, Cloud, Databases, Video Editing, and Social Growth engines at SiteMint Studio.',
    url: 'https://sitemint.in/technologies',
    siteName: 'SiteMint',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '30+ Technologies & Software Tools | SiteMint Studio',
    description: 'Explore our complete 30+ production-grade digital software ecosystem.',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TechArticle',
  name: '30+ Modern Technologies & Software Tools We Use at SiteMint',
  description: 'Comprehensive technical breakdown of frameworks, mobile engines, databases, cloud architecture, video suites, and growth marketing tools used at SiteMint Studio.',
  url: 'https://sitemint.in/technologies',
  author: {
    '@type': 'Organization',
    name: 'SiteMint Studio',
    url: 'https://sitemint.in',
  },
};

export default function TechnologiesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <TechnologiesClientPage />
    </>
  );
}
