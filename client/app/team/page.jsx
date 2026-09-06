import TeamClientPage from './TeamClientPage';

export const metadata = {
  title: 'Our Team & Engineers | SiteMint Web Development Studio',
  description: 'Meet the passionate software engineers, full stack developers, cloud architects, mobile app developers, and creative minds behind SiteMint Studio. We build clean, scalable digital solutions.',
  keywords: [
    'SiteMint team',
    'SiteMint engineering team',
    'Yuvraj Singh founder',
    'web developers team india',
    'full stack developer team',
    'cloud architects team',
    'flutter app developers team',
    'video editing team',
    'social media managers team',
    'Next.js developers india',
    'website developers india',
    'creative agency team'
  ],
  alternates: {
    canonical: 'https://sitemint.in/team',
  },
  openGraph: {
    title: 'Our Team & Engineers | SiteMint Web Development Studio',
    description: 'Get to know the faces behind SiteMint Studio. Genuine engineers & creators delivering production-grade digital software and scalable cloud architecture.',
    url: 'https://sitemint.in/team',
    siteName: 'SiteMint',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Team & Engineers | SiteMint Studio',
    description: 'Meet the full stack developers, designers, and creative minds behind SiteMint Studio.',
  },
};

export default function TeamPage() {
  return <TeamClientPage />;
}
