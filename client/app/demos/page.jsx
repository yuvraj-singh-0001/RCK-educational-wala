import DemoShowcase from '../../components/DemoShowcase';
import FaqSection from '../../components/FaqSection';
import Link from 'next/link';
import { MessageCircle, Calculator, ArrowRight, Sparkles } from 'lucide-react';

export const metadata = {
  title: 'Interactive Live Website & App Demos | Bakery, Coaching, E-Commerce | SiteMint',
  description: 'Test real working website demos before you buy. Explore Bakery online ordering demo, School & Coaching Institute portal demo, and E-commerce stores with direct WhatsApp integration.',
  keywords: [
    'live website demos',
    'bakery ordering website demo',
    'coaching institute portal demo',
    'ecommerce store demo india',
    'test website before buying',
    'low budget website sample demos',
    'restaurant online ordering template'
  ],
  alternates: {
    canonical: 'https://sitemint.in/demos',
  },
  openGraph: {
    title: 'Interactive Live Website & App Demos | SiteMint',
    description: 'Test working demos for Bakery, Education, and E-Commerce websites with real business functionality.',
    url: 'https://sitemint.in/demos',
    siteName: 'SiteMint',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Interactive Live Website & App Demos | SiteMint',
    description: 'Test real working websites on your phone: Bakery online ordering, Coaching admission portal, and E-commerce store.',
  },
};

export default function DemosPage() {
  return (
    <div className="w-full max-w-full overflow-hidden bg-white">
      {/* Primary Semantic H1 Header Banner */}
      <div className="pt-8 pb-2 sm:pt-12 sm:pb-4 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-50 border border-violet-200 text-violet-800 text-xs font-bold uppercase tracking-wider mb-4 shadow-2xs">
          <Sparkles className="w-3.5 h-3.5 text-violet-600" /> Interactive Working Previews
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-3">
          Interactive Live Website & <span className="gradient-text-purple">App Demos</span>
        </h1>
        <p className="text-slate-600 text-xs sm:text-base max-w-2xl mx-auto leading-relaxed">
          Every demo is a complete, working website with real business functionality. Test them right now on your phone or computer before ordering.
        </p>
      </div>

      {/* Full Demo Showcase */}
      <DemoShowcase />

      {/* Next Step Banner */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 my-10 sm:my-14">
        <div className="glass-card p-6 sm:p-10 text-center bg-gradient-to-r from-violet-50 via-slate-50 to-teal-50 border border-violet-200 shadow-sm">
          <h2 className="text-xl sm:text-3xl font-extrabold tracking-tight text-slate-900 mb-2 sm:mb-3">
            Want a Custom Website Like These Demos?
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm max-w-xl mx-auto mb-6">
            We will customize any of these templates with your business branding, logo, colors, menu/course data, and payment details within 7 days.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <a
              href="https://wa.me/918920683588?text=Hi%20SiteMint!%20I%20tested%20your%20live%20demos%20and%20want%20to%20order%20a%20similar%20website."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp text-xs sm:text-sm !py-2.5 sm:!py-3 !px-5 sm:!px-6 shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Order on WhatsApp (Starting ₹3,999)</span>
            </a>
            <Link
              href="/calculator"
              className="btn-secondary text-xs sm:text-sm !py-2.5 sm:!py-3 !px-5 sm:!px-6 flex items-center gap-2"
            >
              <Calculator className="w-4 h-4 text-violet-600" />
              <span>Calculate Project Cost</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      <FaqSection />
    </div>
  );
}
