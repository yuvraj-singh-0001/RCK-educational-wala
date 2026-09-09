import PricingSection from '../../components/PricingSection';
import FaqSection from '../../components/FaqSection';

export const metadata = {
  title: 'Affordable Website & App Development Pricing in India | Starting ₹3,999 | SiteMint',
  description: 'Transparent website, mobile app, video editing & social media management pricing in India starting at ₹3,999. Free domain, high-speed hosting, SSL, WhatsApp chat, and 60 days free technical support with zero hidden charges.',
  keywords: [
    'website development pricing india',
    'low budget website cost starting 3999',
    'affordable website packages india',
    'mobile app development cost india',
    'video editing package price',
    'social media marketing pricing',
    'cheap and best website design charges',
    'kam budget me website banwaye',
    'best web development company in india',
    'low cost android ios app developer',
    'SiteMint pricing plans'
  ],
  alternates: {
    canonical: 'https://sitemint.in/pricing',
  },
  openGraph: {
    title: 'Affordable Website & App Development Pricing in India | SiteMint',
    description: 'Starter ₹3,999 | Business Pro ₹7,999 | Mobile App ₹12,999. 7-day fast delivery, free domain & hosting, 100% code ownership.',
    url: 'https://sitemint.in/pricing',
    siteName: 'SiteMint',
    type: 'website',
    images: [
      {
        url: 'https://sitemint.in/Sitemint_logo.png',
        width: 1200,
        height: 630,
        alt: 'SiteMint Transparent Indian Development Pricing',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Website & App Development Pricing Plans | SiteMint',
    description: 'Transparent pricing with zero hidden charges. Starting ₹3,999 with free domain, hosting & WhatsApp integration.',
    images: ['https://sitemint.in/Sitemint_logo.png'],
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
};

export default function PricingPage() {
  // Schema.org Structured Data for Google, Bing & AI Search Engine Optimization (GEO)
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        'itemListElement': [
          {
            '@type': 'ListItem',
            'position': 1,
            'name': 'Home',
            'item': 'https://sitemint.in'
          },
          {
            '@type': 'ListItem',
            'position': 2,
            'name': 'Pricing Plans',
            'item': 'https://sitemint.in/pricing'
          }
        ]
      },
      {
        '@type': 'ProfessionalService',
        '@id': 'https://sitemint.in/#service',
        'name': 'SiteMint - Web & Mobile App Development India',
        'url': 'https://sitemint.in/pricing',
        'logo': 'https://sitemint.in/Sitemint_logo.png',
        'image': 'https://sitemint.in/Sitemint_logo.png',
        'description': 'Affordable website development, mobile apps, video editing, and social media management packages in India starting at ₹3,999 with 7-day delivery & 100% code ownership.',
        'priceRange': '₹3,999 - ₹39,999',
        'telephone': '+91 89206 83588',
        'email': 'contactsitemint@gmail.com',
        'aggregateRating': {
          '@type': 'AggregateRating',
          'ratingValue': '4.9',
          'reviewCount': '520',
          'bestRating': '5',
          'worstRating': '1'
        },
        'address': {
          '@type': 'PostalAddress',
          'addressCountry': 'IN',
          'addressRegion': 'India'
        }
      },
      {
        '@type': 'OfferCatalog',
        'name': 'SiteMint Official Service Packages',
        'url': 'https://sitemint.in/pricing',
        'itemListElement': [
          {
            '@type': 'Offer',
            'itemOffered': {
              '@type': 'Service',
              'name': 'Starter Business Website Package',
              'description': '5 custom responsive pages, 1-click WhatsApp lead widget, click-to-call, contact form, admin panel & 60 days support.'
            },
            'price': '3999',
            'priceCurrency': 'INR'
          },
          {
            '@type': 'Offer',
            'itemOffered': {
              '@type': 'Service',
              'name': 'Business Website & E-commerce Package',
              'description': '10 dynamic pages, product catalog, Razorpay 0% UPI payment gateway, user dashboard & 6 months maintenance.'
            },
            'price': '7999',
            'priceCurrency': 'INR'
          },
          {
            '@type': 'Offer',
            'itemOffered': {
              '@type': 'Service',
              'name': 'Starter Dual-Platform Mobile App (Android + iOS)',
              'description': 'Flutter cross-platform mobile app, OTP login, Firebase push notifications & full source code.'
            },
            'price': '12999',
            'priceCurrency': 'INR'
          }
        ]
      },
      {
        '@type': 'FAQPage',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': 'What is the starting price for website development at SiteMint?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Website development packages at SiteMint start at just ₹3,999. This includes 5 custom pages, mobile responsive design, WhatsApp chat widget, contact form, and 60 days free technical support.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Are there any hidden or monthly surprise renewal charges?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'No. SiteMint provides 100% transparent Indian pricing with zero hidden charges and zero monthly lock-in fees. You get full source code ownership.'
            }
          },
          {
            '@type': 'Question',
            'name': 'How fast will my website or mobile app be delivered?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Starter website packages are delivered in just 7 days. Business websites take 10-14 days, and mobile apps take 14-21 days.'
            }
          }
        ]
      }
    ]
  };

  return (
    <div className="w-full max-w-full overflow-hidden bg-slate-50/50">
      {/* Schema.org Structured Data Injection for Search Engines & AI LLMs */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PricingSection />
      <FaqSection />
    </div>
  );
}
