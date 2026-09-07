import TeamClientPage from './TeamClientPage';

export const metadata = {
  title: 'Our Engineering & Creative Team | Yuvraj Singh | SiteMint Studio',
  description: 'Meet Yuvraj Singh (Founder & Lead Full-Stack Developer) and the dedicated 8-member engineering and creative team at SiteMint Studio. Building Next.js 15 web apps, Flutter mobile apps, cloud architecture, and digital solutions with 100% code ownership.',
  keywords: [
    'SiteMint team',
    'SiteMint engineering team',
    'Yuvraj Singh founder',
    'Yuvraj Singh full stack developer',
    'web developers team india',
    'full stack developer team',
    'cloud architecture engineers',
    'SSR deployment specialists',
    'Flutter app developers team',
    'video editing team',
    'social media managers team',
    'Next.js 15 developers india',
    'website developers india',
    'creative technology studio team',
    'SiteMint studio'
  ],
  alternates: {
    canonical: 'https://sitemint.in/team',
  },
  openGraph: {
    title: 'Our Engineering & Creative Team | Yuvraj Singh | SiteMint Studio',
    description: 'Meet Yuvraj Singh (Founder & Lead Full-Stack Developer) and the dedicated 8-member engineering team behind SiteMint Studio. Scalable web, mobile & cloud solutions.',
    url: 'https://sitemint.in/team',
    siteName: 'SiteMint',
    type: 'website',
    images: [
      {
        url: 'https://sitemint.in/team/Founder.png',
        width: 1200,
        height: 630,
        alt: 'Yuvraj Singh - Founder & Lead Full-Stack Developer at SiteMint Studio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Engineering & Creative Team | Yuvraj Singh | SiteMint Studio',
    description: 'Meet Yuvraj Singh (Founder & Lead Full-Stack Developer) and the dedicated team behind SiteMint Studio.',
    images: ['https://sitemint.in/team/Founder.png'],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'Our Team & Founder | SiteMint Studio',
  description: 'Meet Yuvraj Singh (Founder & Lead Full-Stack Developer) and the dedicated 8-member team at SiteMint Studio.',
  url: 'https://sitemint.in/team',
  mainEntity: {
    '@type': 'Person',
    name: 'Yuvraj Singh',
    jobTitle: 'Founder & Lead Full-Stack Developer',
    worksFor: {
      '@type': 'Organization',
      name: 'SiteMint Studio',
      url: 'https://sitemint.in',
    },
    sameAs: [
      'https://www.linkedin.com/in/yuvraj-singh-0001/',
      'https://sitemint.in/about',
    ],
    knowsAbout: [
      'Web & Software Development',
      'Cloud Architecture',
      'SSR Deployment',
      'Next.js 15',
      'Flutter Mobile Applications',
      'Client Project Engineering',
    ],
  },
};

export default function TeamPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <TeamClientPage />
    </>
  );
}

