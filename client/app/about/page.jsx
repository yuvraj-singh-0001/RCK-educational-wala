import Link from 'next/link';
import { 
  Users, 
  Sparkles, 
  Zap, 
  ShieldCheck, 
  Clock, 
  Award, 
  MessageCircle, 
  CheckCircle2, 
  Heart,
  Target,
  ArrowRight
} from 'lucide-react';
import FaqSection from '../../components/FaqSection';

export const metadata = {
  title: 'About SiteMint | Professional Low Budget Web & App Studio in India',
  description: 'Learn about SiteMint’s mission to empower local Indian businesses and startups with high-converting, mobile-first websites and software starting at ₹3,999.',
  alternates: {
    canonical: 'https://sitemint.in/about',
  },
  openGraph: {
    title: 'About SiteMint | Affordable Web & App Studio',
    description: 'Empowering Indian small business owners with professional technology, 7-day delivery, and transparent pricing.',
    url: 'https://sitemint.in/about',
  },
};

export default function AboutPage() {
  const values = [
    {
      title: 'Honest & Transparent Indian Pricing',
      desc: 'No hidden setup fees or surprise renewal bills. We believe top-quality web software should be accessible to every small business owner.',
      icon: Heart,
      color: 'text-rose-700 bg-rose-100',
    },
    {
      title: 'Speed & 7-Day Fast Delivery',
      desc: 'We value your time. We do not take months. Simple websites launch in 7 business days, and complex systems within 14 days.',
      icon: Zap,
      color: 'text-amber-700 bg-amber-100',
    },
    {
      title: 'Mobile-First Clean Architecture',
      desc: '85%+ of your customers browse on smartphones. We build lightweight, sub-2 second load time experiences on 4G/5G.',
      icon: Sparkles,
      color: 'text-violet-700 bg-violet-100',
    },
    {
      title: '100% Client Code Ownership',
      desc: 'You own 100% of your domain, cloud hosting, and source code. Zero proprietary lock-ins or monthly rental holding fees.',
      icon: ShieldCheck,
      color: 'text-emerald-700 bg-emerald-100',
    },
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Requirement & Free Consultation',
      desc: 'We discuss your business goals, target audience, and required features over a 15-minute WhatsApp/phone call.',
    },
    {
      step: '02',
      title: 'UI Design & Live Demo Confirmation',
      desc: 'We design your mobile-first website preview and review it with you before finalizing the code.',
    },
    {
      step: '03',
      title: 'Development & Payment Integration',
      desc: 'We build the full application, connect WhatsApp ordering / UPI gateway, domain, and high-speed cloud hosting.',
    },
    {
      step: '04',
      title: 'Live Launch & Google SEO Submission',
      desc: 'Your website goes live on your custom domain, and we submit your XML sitemap to Google Search Console.',
    },
  ];

  return (
    <div className="w-full pt-6 pb-12 sm:pt-10 sm:pb-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-50 border border-violet-200 text-violet-800 text-xs font-bold uppercase tracking-wider mb-4 shadow-2xs">
            <Users className="w-3.5 h-3.5 text-violet-600" /> About SiteMint Studio
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-4 leading-tight">
            We Help Indian Businesses <br className="hidden sm:inline" />
            <span className="gradient-text-hero">Grow & Win Online</span>
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal max-w-2xl mx-auto">
            SiteMint is a modern digital web & app development studio founded with a single mission: to provide agency-grade websites, ordering systems, and software to Indian businesses starting from just <strong className="text-emerald-700 font-bold">₹3,999</strong>.
          </p>
        </div>

        {/* Numbers Trust Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 sm:p-6 rounded-3xl bg-slate-50 border border-slate-200 mb-16 sm:mb-20">
          <div className="text-center p-3 border-r border-slate-200 last:border-r-0">
            <div className="text-2xl sm:text-4xl font-extrabold text-slate-900">15<span className="text-violet-600">+</span></div>
            <div className="text-[10px] sm:text-xs text-slate-500 font-bold uppercase tracking-wider mt-1">Projects Delivered</div>
          </div>
          <div className="text-center p-3 border-r border-slate-200 last:border-r-0">
            <div className="text-2xl sm:text-4xl font-extrabold text-slate-900">7<span className="text-indigo-600"> Days</span></div>
            <div className="text-[10px] sm:text-xs text-slate-500 font-bold uppercase tracking-wider mt-1">Avg. Launch Time</div>
          </div>
          <div className="text-center p-3 border-r border-slate-200 last:border-r-0">
            <div className="text-2xl sm:text-4xl font-extrabold text-slate-900">100<span className="text-emerald-600">%</span></div>
            <div className="text-[10px] sm:text-xs text-slate-500 font-bold uppercase tracking-wider mt-1">Client Satisfaction</div>
          </div>
          <div className="text-center p-3">
            <div className="text-2xl sm:text-4xl font-extrabold text-slate-900">₹3,999</div>
            <div className="text-[10px] sm:text-xs text-slate-500 font-bold uppercase tracking-wider mt-1">Starting Price</div>
          </div>
        </div>

        {/* Our Story & Mission */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16 sm:mb-20">
          <div className="lg:col-span-6 space-y-4">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-violet-700 uppercase tracking-wider">
              <Target className="w-4 h-4" /> Our Story
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
              Why We Started SiteMint
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Most local businesses in India—like sweet shops, bakeries, coaching centers, and retail stores—get charged exorbitant fees (₹30,000 to ₹60,000) by traditional agencies, only to receive slow, outdated websites that generate zero leads.
            </p>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We changed the rules. By utilizing modern Next.js technology and streamlined modular architectures, we cut unnecessary overheads and deliver agency-grade websites at honest, low-budget pricing starting at ₹3,999.
            </p>
          </div>

          <div className="lg:col-span-6">
            <div className="glass-card p-6 sm:p-8 bg-gradient-to-br from-violet-50/80 to-teal-50/40 border border-violet-200 space-y-4">
              <h3 className="text-lg font-bold text-slate-900">Our 4 Core Promises</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-2.5 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span><strong>Zero Advance for Scoping:</strong> 100% free initial consultation and requirement scoping.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span><strong>No Monthly Holding Charges:</strong> You own your domain, hosting, and code completely.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span><strong>Sub-2 Second Speed:</strong> Lightweight code optimized for 4G/5G smartphone connections.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span><strong>60 Days Free Technical Maintenance:</strong> Dedicated support for all updates and bug fixes.</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Step Process */}
        <div className="mb-16 sm:mb-20">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2 tracking-tight">
              Our Simple <span className="gradient-text-hero">7-Day Delivery Process</span>
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm">
              From requirement discussion to live launch on your domain in 4 transparent steps.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {processSteps.map((stp, idx) => (
              <div key={idx} className="glass-card p-5 border border-slate-200 hover:border-violet-300 transition">
                <div className="text-2xl font-extrabold text-violet-600 font-mono mb-3">
                  {stp.step}
                </div>
                <h3 className="text-sm font-bold text-slate-900 mb-1.5">{stp.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{stp.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Values Grid */}
        <div className="mb-16 sm:mb-20">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2 tracking-tight">
              Why Indian Business Owners <span className="gradient-text-hero">Trust SiteMint</span>
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm">
              Built on transparency, speed, and real business results.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {values.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div key={idx} className="glass-card p-6 border border-slate-200 flex items-start gap-4">
                  <div className={`p-2.5 rounded-2xl ${val.color} shrink-0`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900 mb-1.5">{val.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{val.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <FaqSection />
    </div>
  );
}
