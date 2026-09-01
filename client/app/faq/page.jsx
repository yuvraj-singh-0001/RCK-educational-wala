import Link from 'next/link';
import { 
  HelpCircle, 
  Sparkles, 
  MessageCircle, 
  Phone, 
  Calculator, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import FaqSection from '../../components/FaqSection';

export const metadata = {
  title: 'Frequently Asked Questions (FAQ) | SiteMint',
  description: 'Got questions about web development cost, delivery timelines, domain/hosting inclusions, and support? Find answers to all common questions here.',
  alternates: {
    canonical: 'https://sitemint.in/faq',
  },
  openGraph: {
    title: 'Frequently Asked Questions (FAQ) | SiteMint',
    description: 'Everything you need to know about getting a website or app made with SiteMint.',
    url: 'https://sitemint.in/faq',
  },
};

export default function FaqPage() {
  return (
    <div className="w-full pt-6 pb-12 sm:pt-10 sm:pb-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-50 border border-violet-200 text-violet-800 text-xs font-bold uppercase tracking-wider mb-4 shadow-2xs">
            <HelpCircle className="w-3.5 h-3.5 text-violet-600" /> Knowledge Base & FAQ
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-3">
            Frequently Asked <span className="gradient-text-hero">Questions</span>
          </h1>
          <p className="text-slate-600 text-xs sm:text-base">
            Everything you need to know before starting your website or mobile app project with SiteMint.
          </p>
        </div>
      </div>

      <FaqSection />

      {/* Still Have Questions CTA */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="p-6 sm:p-10 rounded-3xl bg-slate-900 text-white text-center shadow-xl">
          <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-2">
            Still Have an Unanswered Question?
          </h3>
          <p className="text-slate-400 text-xs sm:text-sm max-w-md mx-auto mb-6">
            Our development team is online on WhatsApp to help you choose the right package for your business.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://wa.me/918601300910?text=Hi%20SiteMint!%20I%20have%20a%20question%20regarding%20website%20development."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp text-xs sm:text-sm !py-2.5 sm:!py-3 !px-6 shadow-md"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Ask Directly on WhatsApp</span>
            </a>
            <a
              href="tel:+918601300910"
              className="btn-secondary text-xs sm:text-sm !py-2.5 sm:!py-3 !px-5 bg-white/10 text-white hover:bg-white/20 border-white/20"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>Call +91 86013 00910</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
