import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppFloatingBtn from '../components/WhatsAppFloatingBtn';

export const metadata = {
  metadataBase: new URL('https://sitemint.in'),
  title: {
    default: 'SiteMint | Affordable Website & Mobile App Development in India (Starting ₹3,999)',
    template: '%s | SiteMint'
  },
  description: 'SiteMint builds professional, high-converting websites and mobile apps at affordable, low-cost prices in India (Starting ₹3,999). 7-day delivery, free domain & hosting, WhatsApp integration, and 60-day free support.',
  keywords: [
    'low budget website development india',
    'affordable website developer india',
    'kam paise me website design',
    'cheap and best website maker for small business',
    'website developer starting 3999',
    'professional mobile app developer low cost',
    'bakery website design with online ordering',
    'school coaching institute portal developer',
    'ecommerce website in low budget india',
    'custom web application development',
    'website designer near me',
    'SiteMint'
  ],
  authors: [{ name: 'SiteMint Team', url: 'https://sitemint.in' }],
  creator: 'SiteMint',
  publisher: 'SiteMint',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: 'https://sitemint.in',
  },
  icons: {
    icon: [
      { url: '/Sitemint_logo.png', sizes: '32x32', type: 'image/png' },
      { url: '/Sitemint_logo.png', sizes: '192x192', type: 'image/png' },
      { url: '/Sitemint_logo.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/Sitemint_logo.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: ['/Sitemint_logo.png'],
  },
  verification: {
    google: 'google94f75fa3b98a3566',
  },
  openGraph: {
    title: 'SiteMint | Fast & Affordable Website & App Development in India',
    description: 'Transform your offline business into a 24/7 online growth engine. Professional Next.js websites, native mobile apps, and media studio starting at ₹3,999.',
    url: 'https://sitemint.in',
    siteName: 'SiteMint',
    images: [
      {
        url: 'https://sitemint.in/Sitemint_logo.png',
        width: 1024,
        height: 1024,
        type: 'image/png',
        alt: 'SiteMint - Web, App & Media Studio',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SiteMint | Fast & Affordable Website & App Development in India',
    description: 'Custom Next.js websites, mobile apps, and business growth studio starting at ₹3,999 in India.',
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

export default function RootLayout({ children }) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ProfessionalService',
        '@id': 'https://sitemint.in/#service',
        'name': 'SiteMint',
        'url': 'https://sitemint.in',
        'logo': 'https://sitemint.in/Sitemint_logo.png',
        'image': 'https://sitemint.in/Sitemint_logo.png',
        'description': 'Affordable website and app development company in India specializing in bakery websites, school coaching portals, e-commerce stores, and custom software.',
        'priceRange': '₹₹ (Starting ₹3,999)',
        'telephone': '+91 89206 83588',
        'email': 'contactsitemint@gmail.com',
        'address': {
          '@type': 'PostalAddress',
          'addressCountry': 'IN',
          'addressRegion': 'India'
        },
        'geo': {
          '@type': 'GeoCoordinates',
          'latitude': '26.8467',
          'longitude': '80.9462'
        },
        'openingHoursSpecification': {
          '@type': 'OpeningHoursSpecification',
          'dayOfWeek': [
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
            'Sunday'
          ],
          'opens': '09:00',
          'closes': '21:00'
        },
        'sameAs': [
          'https://www.instagram.com/sitemint.in/',
          'https://wa.me/918920683588'
        ],
        'offers': [
          {
            '@type': 'Offer',
            'name': 'Starter Business Website',
            'price': '3999',
            'priceCurrency': 'INR',
            'description': '5 Pages responsive business website with WhatsApp direct chat, contact form email notifications, and basic SEO.'
          },
          {
            '@type': 'Offer',
            'name': 'Business Website & Management',
            'price': '7999',
            'priceCurrency': 'INR',
            'description': '10 Dynamic pages, Razorpay UPI payment gateway, user dashboard, admin portal, and 6 months free maintenance.'
          },
          {
            '@type': 'Offer',
            'name': 'Professional Business System',
            'price': '17999',
            'priceCurrency': 'INR',
            'description': 'Unlimited pages, 1 Year Free Domain + 1 Year Cloud Hosting included, full user management, multi-entity admin, and 1 Year Maintenance.'
          },
          {
            '@type': 'Offer',
            'name': 'Mobile App Development (Android & iOS)',
            'price': '12999',
            'priceCurrency': 'INR',
            'description': 'Production-ready Android APK and iOS Flutter app with push notifications and cloud database API backend.'
          },
          {
            '@type': 'Offer',
            'name': 'Professional Video Editing & Viral Reels',
            'price': '499',
            'priceCurrency': 'INR',
            'description': 'Instagram Reels, YouTube Shorts, dynamic animated subtitles, sound FX, and commercial business video ads.'
          },
          {
            '@type': 'Offer',
            'name': 'Social Media Management & Digital Growth',
            'price': '4999',
            'priceCurrency': 'INR',
            'description': 'Complete management across 7-8 platforms, 30 daily high-res posts & carousels, and Meta Ads setup.'
          }
        ]
      },
      {
        '@type': 'WebSite',
        '@id': 'https://sitemint.in/#website',
        'url': 'https://sitemint.in',
        'name': 'SiteMint',
        'publisher': {
          '@id': 'https://sitemint.in/#service'
        }
      }
    ]
  };

  return (
    <html lang="en" className="scroll-smooth overflow-x-hidden w-full max-w-full">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="bg-white text-slate-900 antialiased min-h-screen flex flex-col selection:bg-purple-100 selection:text-purple-900 overflow-x-hidden w-full max-w-full">
        <Navbar />
        <main className="flex-1 w-full max-w-full overflow-x-hidden bg-white">{children}</main>
        <Footer />
        <WhatsAppFloatingBtn />
      </body>
    </html>
  );
}
