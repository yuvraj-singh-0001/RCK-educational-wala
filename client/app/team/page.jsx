import TeamClientPage from './TeamClientPage';

export const metadata = {
  title: 'Our Team | Engineers, Designers & Media Creators at SiteMint Studio',
  description: 'Meet the passionate software engineers, web developers, mobile app developers, video editors, and social media strategists behind SiteMint Studio.',
  keywords: [
    'SiteMint team',
    'Yuvraj Singh founder',
    'web developers team india',
    'flutter app developers team',
    'video editing team',
    'social media managers team',
    'SiteMint engineering team'
  ],
  alternates: {
    canonical: 'https://sitemint.in/team',
  },
  openGraph: {
    title: 'Our Team | SiteMint Web Development & Creative Technology Studio',
    description: 'Get to know the faces behind SiteMint Studio. Genuine engineers & creators delivering production-grade digital software.',
    url: 'https://sitemint.in/team',
    siteName: 'SiteMint',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Team | SiteMint Studio',
    description: 'Meet the developers, designers, and creative minds behind SiteMint Studio.',
  },
};

export default function TeamPage() {
  return <TeamClientPage />;
}
