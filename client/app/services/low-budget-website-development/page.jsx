import Link from 'next/link';
import { 
  Zap, 
  CheckCircle2, 
  MessageCircle, 
  Sparkles, 
  Eye, 
  Wallet, 
  ShieldCheck, 
  Smartphone, 
  Clock, 
  ArrowRight,
  Calculator
} from 'lucide-react';

export const metadata = {
  title: 'Low Budget Website & Mobile App Development in India (Starting ₹3,999)',
  description: 'Kam budget me professional website aur mobile app banwayein. Starting only ₹3,999 with Free Domain, High-Speed Hosting, SSL, WhatsApp Order/Inquiry button, and 7-day fast delivery.',
  keywords: [
    'low budget website development india',
    'kam paise me website kaise banwaye',
    'affordable website developer india',
    'cheap website maker for small business',
    'website development starting 3999',
    'low cost mobile app development',
    'best web designer in low price',
    'low budget ecommerce website'
  ],
  alternates: {
    canonical: 'https://sitemint.in/services/low-budget-website-development',
  },
  openGraph: {
    title: 'Low Budget Website & App Development in India | Starting ₹3,999 | SiteMint',
    description: 'Get high-quality professional websites and mobile apps at low cost in India. Free domain, hosting and 7-day turnaround.',
    url: 'https://sitemint.in/services/low-budget-website-development',
  },
};

export default function LowBudgetServicePage() {
  const lowBudgetFeatures = [
    {
      title: 'Agency Quality at Freelance Rates',
      desc: 'You do not need to spend ₹30,000–₹50,000 on big agencies. We provide the same modern UI, sleek design, and fast performance starting at just ₹3,999.',
    },
    {
      title: 'Free Domain & 1 Year High-Speed Hosting Included',
      desc: 'No hidden server or renewal surprises. Every package includes a free .IN or .COM domain, cloud hosting, and SSL certificate for 1 full year.',
    },
    {
      title: '100% Mobile Responsive & Blazing Fast',
      desc: 'Over 85% of Indian customers browse on mobile phones. Your site will load in less than 2 seconds on 4G/5G mobile networks.',
    },
    {
      title: 'Direct WhatsApp Lead Generation Engine',
      desc: 'Receive direct customer inquiries, quote requests, and orders on your personal or business WhatsApp with 1 click.',
    },
    {
      title: 'Google Search Console & Local SEO Included',
      desc: 'We register your website on Google Search Console, generate dynamic XML sitemaps, and add local schema so nearby clients can find you.',
    },
    {
      title: '60 Days Free Technical Maintenance',
      desc: 'Any small text updates, photo changes, or bug fixes after launch are 100% free for the first 60 days.',
    },
  ];

  return (
    <div className="w-full pt-6 pb-12 sm:pt-10 sm:pb-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-center mb-12 sm:mb-16">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-4 sm:mb-5 shadow-2xs">
              <Wallet className="w-3.5 h-3.5 text-emerald-600" /> Affordable & Professional Web Studio
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-4 sm:mb-5 tracking-tight">
              Professional <span className="gradient-text-hero">Website & App</span> in Low Budget (₹3,999)
            </h1>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8 font-normal">
              Kam paise me apna business online launch karein! Get a high-converting, mobile-friendly website designed with modern UI, free domain, hosting, SSL, and instant WhatsApp lead capture.
            </p>

            <div className="flex flex-wrap gap-3 sm:gap-4 mb-6 sm:mb-8">
              <a
                href="https://wa.me/918601300910?text=Hi%20SiteMint!%20I%20want%20to%20get%20a%20professional%20website%20made%20in%20low%20budget%20(Starting%20%E2%82%B93,999).%20Please%20guide%20me."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp text-xs sm:text-sm !py-2.5 sm:!py-3 !px-5 sm:!px-6 shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Start Website in ₹3,999 (WhatsApp)</span>
              </a>

              <Link
                href="/calculator"
                className="btn-secondary text-xs sm:text-sm !py-2.5 sm:!py-3 !px-5 sm:!px-6 flex items-center gap-2"
              >
                <Calculator className="w-4 h-4 text-violet-600" />
                <span>Calculate Exact Price</span>
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
                <span className="text-xs uppercase font-bold tracking-wider text-emerald-400">Low Cost Starter Pack</span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  Best Value for Small Business
                </span>
              </div>

              <div className="text-3xl sm:text-4xl font-extrabold text-white mb-1">
                ₹3,999 <span className="text-xs text-slate-400 font-sans font-normal">(One-time fee)</span>
              </div>
              <p className="text-xs text-slate-400 mb-5 sm:mb-6">
                Complete 5-page business website with all essential tools.
              </p>

              <div className="space-y-2 sm:space-y-2.5 text-xs text-slate-300 mb-5 sm:mb-6 border-t border-b border-slate-800 py-4">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>5 Custom Designed Pages (Home, About, Services, Gallery, Contact)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Free .IN or .COM Domain (1 Year Included)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>1 Year High-Speed Cloud Hosting & SSL Certificate</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>1-Click Direct WhatsApp Customer Chat Integration</span>
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
              Why SiteMint is the Best <span className="gradient-text-hero">Low Budget Choice</span>
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm">
              We eliminate unnecessary agency overheads to deliver high-quality websites at honest, transparent rates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {lowBudgetFeatures.map((feat, idx) => (
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
    </div>
  );
}
