import CostCalculator from '../../components/CostCalculator';
import FaqSection from '../../components/FaqSection';
import { Calculator, Sparkles } from 'lucide-react';

export const metadata = {
  title: 'Instant Website & App Development Cost Calculator | SiteMint',
  description: 'Calculate the exact development cost for your business website, bakery online ordering system, coaching portal, or mobile app with transparent itemized price breakdown in India.',
  keywords: [
    'website development cost calculator',
    'app development cost estimator',
    'website price calculator india',
    'instant web design quote',
    'low budget website calculator',
    'ecommerce website cost estimate'
  ],
  alternates: {
    canonical: 'https://sitemint.in/calculator',
  },
  openGraph: {
    title: 'Instant Website & App Development Cost Calculator | SiteMint',
    description: 'Select your features and get an instant price estimation with 1-click WhatsApp quote send.',
    url: 'https://sitemint.in/calculator',
    siteName: 'SiteMint',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Website & App Cost Calculator | SiteMint',
    description: 'Calculate your custom website or mobile app cost with transparent breakdown and zero hidden fees.',
  },
};

export default function CalculatorPage() {
  return (
    <div className="w-full max-w-full overflow-hidden bg-white">
      {/* Primary Semantic H1 Header Banner */}
      <div className="pt-8 pb-2 sm:pt-12 sm:pb-4 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-bold uppercase tracking-wider mb-4 shadow-2xs">
          <Calculator className="w-3.5 h-3.5 text-teal-600" /> Instant Project Cost Estimator
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-3">
          Website & Mobile App <span className="gradient-text-purple">Cost Calculator</span>
        </h1>
        <p className="text-slate-600 text-xs sm:text-base max-w-2xl mx-auto leading-relaxed">
          Select your required business package, page scope, and add-ons below for an instant real-time price estimation with zero hidden charges.
        </p>
      </div>

      <CostCalculator />
      <FaqSection />
    </div>
  );
}
