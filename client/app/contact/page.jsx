import ContactClientPage from './ContactClientPage';

export const metadata = {
  title: 'Contact SiteMint Studio | Direct Web & App Development Inquiry India',
  description: 'Connect with SiteMint Studio for custom Next.js websites, Flutter mobile apps, video editing, and social media management. Direct 24/7 WhatsApp inquiry & 15-minute response.',
  keywords: [
    'contact SiteMint studio',
    'web development quote india',
    'mobile app development inquiry',
    'hire website developer whatsapp',
    'SiteMint phone number email',
    'SiteMint office location india',
    'contact sitemint team'
  ],
  alternates: {
    canonical: 'https://sitemint.in/contact',
  },
  openGraph: {
    title: 'Contact SiteMint Studio | Direct Project Inquiry',
    description: 'Get a 100% free consultation & customized project cost quote within 15 minutes. Web development, mobile apps, and creative media studio.',
    url: 'https://sitemint.in/contact',
    siteName: 'SiteMint',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact SiteMint Studio | Web & App Inquiries',
    description: 'Get in touch with our engineering & creative studio team directly on WhatsApp or Call.',
  },
};

const contactJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ContactPage',
      '@id': 'https://sitemint.in/contact/#webpage',
      'url': 'https://sitemint.in/contact',
      'name': 'Contact SiteMint Studio',
      'description': 'Direct contact channels, WhatsApp inquiry, and official email support for SiteMint Studio.',
      'publisher': {
        '@type': 'Organization',
        'name': 'SiteMint',
        'url': 'https://sitemint.in',
        'logo': 'https://sitemint.in/Sitemint_logo.png',
      },
    },
    {
      '@type': 'ContactPoint',
      'telephone': '+91 89206 83588',
      'contactType': 'customer support',
      'email': 'contactsitemint@gmail.com',
      'areaServed': 'IN',
      'availableLanguage': ['en', 'hi'],
    },
  ],
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
      />
      <ContactClientPage />
    </>
  );
}
