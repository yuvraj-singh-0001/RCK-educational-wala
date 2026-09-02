export const metadata = {
  title: 'Instant Website & App Development Cost Calculator India (Starting ₹3,999) | SiteMint',
  description: 'Calculate the exact development cost for business websites, e-commerce stores, bakery online ordering, coaching portals, and Android/iOS mobile apps in India. Instant price breakdown starting from ₹3,999 with 350 free daily Gmail notifications and zero hidden fees.',
  keywords: [
    'website development cost calculator india',
    'how much does a website cost in india',
    'app development cost estimator',
    'website price calculator india',
    'low budget website calculator starting 3999',
    'ecommerce website cost estimate india',
    'mobile app development cost calculator',
    'custom software pricing estimator india',
    'website design price breakdown 2025',
    'instant web design quotation'
  ],
  alternates: {
    canonical: 'https://sitemint.in/calculator',
  },
  openGraph: {
    title: 'Instant Website & App Cost Calculator in India | SiteMint',
    description: 'Calculate your custom website or mobile app cost with itemized feature breakdown and 1-click WhatsApp quote send.',
    url: 'https://sitemint.in/calculator',
    siteName: 'SiteMint',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Website & Mobile App Cost Estimator | SiteMint',
    description: 'Instant transparent project quotation calculator for websites, apps, and video editing.',
  },
};

export default function CalculatorLayout({ children }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    'name': 'SiteMint Website & Mobile App Cost Calculator',
    'url': 'https://sitemint.in/calculator',
    'applicationCategory': 'BusinessApplication',
    'operatingSystem': 'All',
    'offers': {
      '@type': 'AggregateOffer',
      'lowPrice': '3999',
      'highPrice': '24999',
      'priceCurrency': 'INR',
      'offerCount': '12'
    },
    'description': 'Interactive real-time cost calculator for websites, mobile applications, video editing, and custom software in India.'
  };

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
