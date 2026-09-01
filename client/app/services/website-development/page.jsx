import Link from 'next/link';
import { 
  Zap, 
  CheckCircle2, 
  MessageCircle, 
  Sparkles, 
  Wallet, 
  Globe,
  Calculator,
  ArrowRight,
  ShieldCheck,
  Smartphone,
  Clock
} from 'lucide-react';
import FaqSection from '../../../components/FaqSection';

export const metadata = {
  title: 'Professional Website Development Services in India (Starting ₹3,999)',
  description: 'Grow your business with a custom, mobile-friendly website. Free domain, high-speed hosting, SSL, WhatsApp lead button, and 7-day fast delivery starting at ₹3,999.',
  keywords: [
    'website development services india',
    'business website maker',
    'low budget website developer',
    'website design company india',
    'website development starting 3999',
    'affordable responsive website design'
  ],
  alternates: {
    canonical: 'https://sitemint.in/services/website-development',
  },
  openGraph: {
    title: 'Professional Website Development Services | Starting ₹3,999 | SiteMint',
    description: 'Custom, high-converting business websites in India with free hosting, domain, and 7-day delivery.',
    url: 'https://sitemint.in/services/website-development',
  },
};

export default function WebsiteDevelopmentPage() {
  const features = [
    {
      title: 'Modern UI & Mobile-First Design',
      desc: '100% responsive on all smartphones, tablets, and computers with sub-2 second load speed on 4G/5G networks.',
    },
    {
      title: 'Free .IN / .COM Domain & Cloud Hosting',
      desc: 'No hidden setup fees. Every package comes with 1 Year free domain, high-speed cloud hosting, and SSL certificate.',
    },
    {
      title: '1-Click Direct WhatsApp Lead Capture',
      desc: 'Connect directly with interested customers on WhatsApp without letting leads slip away.',
    },
    {
      title: 'Google Search Console & Local SEO Setup',
      desc: 'Indexed on Google search with Schema.org structured data, meta descriptions, and Google Maps click-to-call buttons.',
    },
    {
      title: 'Fast 7-Day Turnaround Guarantee',
      desc: 'We launch standard 5-page business websites within 7 working days with zero delays.',
    },
    {
      title: '60 Days Free Technical Maintenance',
      desc: 'Any updates, text changes, or guidance after launch are completely covered for 60 days.',
    },
  ];

  return (
    <div className="w-full pt-6 pb-12 sm:pt-10 sm:pb-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-center mb-12 sm:mb-16">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-50 border border-violet-200 text-violet-800 text-xs font-bold uppercase tracking-wider mb-4 sm:mb-5 shadow-2xs">
              <Globe className="w-3.5 h-3.5 text-violet-600" /> Website Development Studio
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-4 sm:mb-5 tracking-tight">
              Grow Your Business with a <span className="gradient-text-hero">High-Converting Website</span>
            </h1>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8 font-normal">
              We design and build fast, mobile-friendly websites that build authority and bring you real client inquiries. Starting from just <strong className="text-emerald-700 font-bold">₹3,999</strong> with free domain and hosting.
            </p>

            <div className="flex flex-wrap gap-3 sm:gap-4 mb-6 sm:mb-8">
              <a
                href="https://wa.me/918601300910?text=Hi%20SiteMint!%20I%20want%20to%20get%20a%20website%20developed%20for%20my%20business."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp text-xs sm:text-sm !py-2.5 sm:!py-3 !px-5 sm:!px-6 shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Start on WhatsApp (₹3,999)</span>
              </a>

              <Link
                href="/calculator"
                className="btn-secondary text-xs sm:text-sm !py-2.5 sm:!py-3 !px-5 sm:!px-6 flex items-center gap-2"
              >
                <Calculator className="w-4 h-4 text-violet-600" />
                <span>Calculate Cost</span>
              </Link>
            </div>

            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-slate-500 font-semibold">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> 7 Days Delivery
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Zero Advance Required
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> 100% Code Ownership
              </span>
            </div>
          </div>

          {/* Pricing Box */}
          <div className="lg:col-span-5">
            <div className="glass-card p-5 sm:p-8 bg-slate-900 text-white shadow-xl shadow-slate-900/20 border border-slate-800">
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <span className="text-xs uppercase font-bold tracking-wider text-emerald-400">Starter Website Pack</span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  Ready in 7 Days
                </span>
              </div>

              <div className="text-3xl sm:text-4xl font-extrabold text-white mb-1">
                ₹3,999 <span className="text-xs text-slate-400 font-sans font-normal">(One-time fee)</span>
              </div>
              <p className="text-xs text-slate-400 mb-5 sm:mb-6">
                Complete 5-page business site with all essential tools.
              </p>

              <div className="space-y-2 sm:space-y-2.5 text-xs text-slate-300 mb-5 sm:mb-6 border-t border-b border-slate-800 py-4">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>5 Custom Pages (Home, About, Services, Gallery, Contact)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Free .IN or .COM Domain (1 Year Included)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>1 Year Cloud Hosting & SSL Certificate</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>1-Click WhatsApp Inquiries & Google Maps</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Google Search Console & Local SEO Submission</span>
                </div>
              </div>

              <a
                href="https://wa.me/918601300910?text=Hi%20SiteMint!%20I%20want%20to%20order%20the%20Starter%20Website%20Package%20(₹3,999)."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp w-full justify-center text-xs sm:text-sm py-3"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Order Starter Plan on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Features List */}
        <div className="mb-14 sm:mb-20">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 mb-2 sm:mb-3 tracking-tight">
              Why Businesses Choose <span className="gradient-text-hero">SiteMint Websites</span>
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm">
              We eliminate agency overheads to deliver high-quality websites at honest, transparent rates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {features.map((feat, idx) => (
              <div key={idx} className="glass-card p-5 sm:p-6 border border-slate-200 hover:border-violet-300 transition">
                <div className="w-9 h-9 rounded-xl bg-violet-100 text-violet-700 flex items-center justify-center font-bold text-sm mb-3 sm:mb-4">
                  0{idx + 1}
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-1.5 sm:mb-2">{feat.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <FaqSection />
    </div>
  );
}
