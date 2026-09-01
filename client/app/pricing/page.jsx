import PricingSection from '../../components/PricingSection';
import FaqSection from '../../components/FaqSection';
import { Zap, Sparkles } from 'lucide-react';

export const metadata = {
  title: 'Affordable Website & App Development Pricing in India | Starting ₹3,999 | SiteMint',
  description: 'Transparent website, mobile app, video editing & social media management pricing in India starting at ₹3,999. Free domain, high-speed hosting, SSL, WhatsApp chat, and 60 days free technical support with zero hidden charges.',
  keywords: [
    'website development pricing india',
    'low budget website cost starting 3999',
    'affordable website packages india',
    'mobile app development cost',
    'video editing package price',
    'social media marketing pricing',
    'cheap and best website design charges',
    'kam budget me website banwaye'
  ],
  alternates: {
    canonical: 'https://sitemint.in/pricing',
  },
  openGraph: {
    title: 'Affordable Website & App Development Pricing in India | SiteMint',
    description: 'Starter ₹3,999 | Business Pro ₹7,999 | Mobile App ₹12,999. 7-day fast delivery, free domain & hosting.',
    url: 'https://sitemint.in/pricing',
    siteName: 'SiteMint',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Website & App Development Pricing Plans | SiteMint',
    description: 'Transparent pricing with zero hidden charges. Starting ₹3,999 with free domain, hosting & WhatsApp integration.',
  },
};

export default function PricingPage() {
  return (
    <div className="w-full max-w-full overflow-hidden bg-white">
      {/* Primary Semantic H1 Header Banner */}
      <div className="pt-8 pb-4 sm:pt-12 sm:pb-6 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-50 border border-violet-200 text-violet-800 text-xs font-bold uppercase tracking-wider mb-4 shadow-2xs">
          <Zap className="w-3.5 h-3.5 text-violet-600" /> 100% Transparent Indian Pricing
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-3">
          Affordable Website & App <span className="gradient-text-hero">Development Pricing</span>
        </h1>
        <p className="text-slate-600 text-xs sm:text-base max-w-2xl mx-auto leading-relaxed">
          Starting at ₹3,999 with 7-day delivery, free domain & hosting, WhatsApp integration, and 100% full source code ownership.
        </p>
      </div>

      <PricingSection />
      <FaqSection />
    </div>
  );
}
