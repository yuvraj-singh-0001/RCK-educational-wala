import Link from 'next/link';
import { 
  Share2, 
  CheckCircle2, 
  MessageCircle, 
  Sparkles, 
  TrendingUp, 
  Users, 
  Target, 
  ShieldCheck,
  Calculator,
  ArrowRight,
  Globe,
  Radio
} from 'lucide-react';
import RelatedServicesSection from '../../../components/RelatedServicesSection';
import FaqSection from '../../../components/FaqSection';

export const metadata = {
  title: 'Social Media Management & Digital Marketing Services in India | SiteMint',
  description: 'Scale your brand across 7-8 social media platforms with daily post design, carousel creation, trending reels strategy, comment/lead management, and Meta Ads setup.',
  keywords: [
    'social media management india',
    'instagram page manager for small business',
    'daily social media post designer',
    'social media marketing agency low budget',
    'facebook instagram meta ads management',
    'digital marketing for local business'
  ],
  alternates: {
    canonical: 'https://sitemint.in/services/social-media-management',
  },
  openGraph: {
    title: 'Social Media Management & Growth Services | SiteMint',
    description: 'Grow your business across Instagram, Facebook, LinkedIn, YouTube, and Google with daily high-quality posts and Meta ads.',
    url: 'https://sitemint.in/services/social-media-management',
  },
};

export default function SocialMediaManagementPage() {
  const smmFeatures = [
    {
      title: 'Management Across 7 to 8 Platforms',
      desc: 'Complete profile setup and regular publishing on Instagram, Facebook, LinkedIn, YouTube, Twitter/X, Pinterest, Google My Business, and WhatsApp Channels.',
      icon: Share2,
      color: 'text-violet-700 bg-violet-100',
    },
    {
      title: 'Daily High-Quality Post & Carousel Design',
      desc: 'Custom-branded graphics, informative carousels, customer testimonials, festival greetings, and promotional sales banners.',
      icon: Sparkles,
      color: 'text-pink-700 bg-pink-100',
    },
    {
      title: 'Captions, SEO Keywords & Viral Hashtags',
      desc: 'SEO-optimized captions and tailored local hashtag research so your posts reach potential buyers in your specific city and target niche.',
      icon: Target,
      color: 'text-sky-700 bg-sky-100',
    },
    {
      title: 'Comment, DM & Inquiry Lead Management',
      desc: 'Prompt replies to customer comments and direct message inquiries, routing hot sales leads straight to your WhatsApp.',
      icon: MessageCircle,
      color: 'text-emerald-700 bg-emerald-100',
    },
    {
      title: 'Meta & Google Ads Campaign Setup',
      desc: 'High-ROI sponsored ad campaigns targeting high-intent local customers with minimum ad spend wastage.',
      icon: TrendingUp,
      color: 'text-amber-700 bg-amber-100',
    },
    {
      title: 'Monthly Growth & Performance Reports',
      desc: 'Clear analytics dashboard showing follower growth, impressions, reach, website link clicks, and generated leads.',
      icon: ShieldCheck,
      color: 'text-indigo-700 bg-indigo-100',
    },
  ];

  return (
    <div className="w-full pt-6 pb-12 sm:pt-10 sm:pb-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-center mb-12 sm:mb-16">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-50 border border-violet-200 text-violet-800 text-xs font-bold uppercase tracking-wider mb-4 sm:mb-5 shadow-2xs">
              <Share2 className="w-3.5 h-3.5 text-violet-600" /> Complete Social Media Growth
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-4 sm:mb-5 tracking-tight">
              Grow Your Business Across <span className="gradient-text-hero">7+ Social Platforms</span>
            </h1>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8 font-normal">
              Consistent branding builds trust. We handle your daily post designs, engaging captions, community comments, and targeted Meta ads so you can focus on running your business.
            </p>

            <div className="flex flex-wrap gap-3 sm:gap-4 mb-6 sm:mb-8">
              <a
                href="https://wa.me/918601300910?text=Hi%20SiteMint!%20I%20want%20to%20grow%20my%20business%20with%20Social%20Media%20Management."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp text-xs sm:text-sm !py-2.5 sm:!py-3 !px-5 sm:!px-6 shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Discuss Social Media Plan on WhatsApp</span>
              </a>

              <Link
                href="/calculator"
                className="btn-secondary text-xs sm:text-sm !py-2.5 sm:!py-3 !px-5 sm:!px-6 flex items-center gap-2"
              >
                <Calculator className="w-4 h-4 text-violet-600" />
                <span>Calculate Monthly Package</span>
              </Link>
            </div>

            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-slate-500 font-semibold">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Daily High-Res Posts
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> 7-8 Platforms Covered
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> WhatsApp Lead Routing
              </span>
            </div>
          </div>

          {/* Pricing Box */}
          <div className="lg:col-span-5">
            <div className="glass-card p-5 sm:p-8 bg-slate-900 text-white border border-slate-800 shadow-xl shadow-slate-900/20">
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <span className="text-xs uppercase font-bold tracking-wider text-violet-400">All-In-One SMM Package</span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  Daily Consistency
                </span>
              </div>

              <div className="text-3xl sm:text-4xl font-extrabold text-white mb-1">
                Custom Plans <span className="text-xs text-slate-400 font-sans font-normal">(Monthly Retainer)</span>
              </div>
              <p className="text-xs text-slate-400 mb-5 sm:mb-6">
                Complete multi-channel social management & brand growth.
              </p>

              <div className="space-y-2 sm:space-y-2.5 text-xs text-slate-300 mb-5 sm:mb-6 border-t border-b border-slate-800 py-4">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-violet-400 shrink-0" />
                  <span>Daily Branded Post & Carousel Designs (30 Posts/Month)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-violet-400 shrink-0" />
                  <span>Management across Instagram, Facebook, LinkedIn, GMB & X</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-violet-400 shrink-0" />
                  <span>SEO Captions & City-Specific Targeted Hashtags</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-violet-400 shrink-0" />
                  <span>DM & Comment Inquiry Answering & WhatsApp Lead Routing</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-violet-400 shrink-0" />
                  <span>Meta Ads Setup & Monthly Growth Report</span>
                </div>
              </div>

              <a
                href="https://wa.me/918601300910?text=Hi%20SiteMint!%20I%20want%20to%20start%20Social%20Media%20Management%20for%20my%20brand."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp w-full justify-center text-xs sm:text-sm py-3"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Start Social Media Growth on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Features List */}
        <div className="mb-14 sm:mb-20">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 mb-2 sm:mb-3 tracking-tight">
              Complete Digital Management <span className="gradient-text-hero">For Your Brand</span>
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm">
              We turn your social media channels into organic lead generation machines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {smmFeatures.map((feat, idx) => (
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
      <RelatedServicesSection currentService="social-media-management" />
      <FaqSection />
    </div>
  );
}
