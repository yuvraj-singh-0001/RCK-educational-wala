import Link from 'next/link';
import { 
  Globe, 
  Smartphone, 
  Video, 
  Share2, 
  CheckCircle2, 
  MessageCircle, 
  Sparkles, 
  ArrowRight, 
  Calculator, 
  ShieldCheck, 
  Layers, 
  TrendingUp, 
  Clock, 
  Zap 
} from 'lucide-react';
import FaqSection from '../../components/FaqSection';

export const metadata = {
  title: 'Digital Services in India | Web, Mobile Apps, Video Editing & SMM | SiteMint',
  description: 'Explore SiteMint’s 4 core digital services: Website & Software Development, Mobile App Development, Professional Video Editing, and Social Media Management for growing businesses.',
  keywords: [
    'digital agency services india',
    'website development company india',
    'mobile app development studio',
    'video editing services for businesses',
    'social media marketing agency india',
    'low budget digital services'
  ],
  alternates: {
    canonical: 'https://sitemint.in/services',
  },
  openGraph: {
    title: 'Core Digital Services | Web, App, Video & SMM | SiteMint',
    description: 'Complete digital transformation services: Web Development, Mobile Apps, Video Editing & Social Media Growth.',
    url: 'https://sitemint.in/services',
  },
};

export default function ServicesHubPage() {
  const masterServices = [
    {
      id: 'web-software',
      category: 'PILLAR 01 • WEB & SOFTWARE',
      title: 'Website & Custom Software Development',
      badge: 'STARTER FROM ₹3,999',
      badgeColor: 'bg-violet-50 text-violet-700 border-violet-200',
      icon: Globe,
      iconColor: 'text-violet-700 bg-violet-100',
      desc: 'We engineer fast, responsive, and SEO-optimized business websites, online stores, coaching admission portals, and custom cloud CRM systems.',
      bullets: [
        'Corporate & Small Business Websites (Home, About, Services, Contact)',
        'E-Commerce Stores with Razorpay/UPI Payment Gateway & Cart',
        'School & Coaching Institute Admission & Result Portals',
        'Restaurant & Bakery Online Ordering with 0% Commission',
        'Custom Role-Based CRM, Invoicing & Billing Dashboards',
        '1 Year Free Domain, High-Speed Cloud Hosting & SSL Certificate',
      ],
      link: '/services/website-development',
      linkText: 'Explore Web Development Details',
      delivery: '7–14 Days Delivery',
    },
    {
      id: 'mobile-apps',
      category: 'PILLAR 02 • MOBILE ENGINEERING',
      title: 'Mobile App Development (Android & iOS)',
      badge: 'STARTER FROM ₹12,999',
      badgeColor: 'bg-pink-50 text-pink-700 border-pink-200',
      icon: Smartphone,
      iconColor: 'text-pink-700 bg-pink-100',
      desc: 'Production-ready Android (.APK) and iOS applications built with Flutter and React Native, featuring instant push notifications and cloud backend.',
      bullets: [
        'Android (.APK) Build & Google Play Store Publishing Ready',
        'iOS Mobile Applications & Cross-Platform Hybrid Frameworks',
        'E-Commerce Shopping, Product Catalogs & Cart Checkout Apps',
        'Education, Tuition & Video Learning Institute Apps',
        'Food & Grocery Ordering Apps with Live Delivery Pincode Rules',
        'Cloud Database (MongoDB / PostgreSQL) & REST API Backend Included',
      ],
      link: '/services/mobile-app-development',
      linkText: 'Explore Mobile App Details',
      delivery: '14–21 Days Delivery',
    },
    {
      id: 'video-editing',
      category: 'PILLAR 03 • CREATIVE MEDIA',
      title: 'Professional Video Editing & Motion Graphics',
      badge: 'STARTING ₹499/REEL',
      badgeColor: 'bg-rose-50 text-rose-700 border-rose-200',
      icon: Video,
      iconColor: 'text-rose-700 bg-rose-100',
      desc: 'Turn casual social media viewers into paying customers with viral Instagram Reels, YouTube videos, and high-converting commercial video ads.',
      bullets: [
        'Instagram Reels & YouTube Shorts with Dynamic Subtitles & SFX',
        'Commercial Business Video Ads for Meta Ads & Google Ads',
        'YouTube Long-Form Content & Multi-Camera Podcast Editing',
        'Corporate Product Explainer Videos & 2D Motion Graphics',
        'Cinema-Grade Color Grading, Audio Denoising & 4K Export',
        '2 Free Revision Rounds & Licensed Royalty-Free Music',
      ],
      link: '/services/video-editing',
      linkText: 'Explore Video Editing Details',
      delivery: '24–48 Hours Turnaround',
    },
    {
      id: 'social-media',
      category: 'PILLAR 04 • BRAND MARKETING',
      title: 'Social Media Management & Digital Growth',
      badge: 'MONTHLY RETAINER',
      badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      icon: Share2,
      iconColor: 'text-emerald-700 bg-emerald-100',
      desc: 'Comprehensive multi-channel social media management, daily creative post designing, community engagement, and targeted Meta advertising.',
      bullets: [
        'Complete Management Across 7-8 Platforms (Instagram, FB, LinkedIn, X, GMB)',
        'Daily High-Resolution Post Creatives & Informative Carousels (30/Month)',
        'SEO Captions, City-Targeted Hashtags & Organic Reach Strategy',
        'Comment & Direct Message (DM) Inquiry Answering Routed to WhatsApp',
        'High-ROI Meta Ads (Facebook & Instagram) & Google Sponsored Ads',
        'Monthly Growth Analytics Dashboard & Audience Performance Reports',
      ],
      link: '/services/social-media-management',
      linkText: 'Explore Social Media Details',
      delivery: 'Daily Consistent Posting',
    },
  ];

  return (
    <div className="w-full pt-6 pb-12 sm:pt-10 sm:pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-50 border border-violet-200 text-violet-800 text-xs font-bold uppercase tracking-wider mb-4 shadow-2xs">
            <Layers className="w-3.5 h-3.5 text-violet-600" /> Complete Digital Ecosystem
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-3">
            Our 4 Core <span className="gradient-text-hero">Digital Services</span>
          </h1>
          <p className="text-slate-600 text-xs sm:text-base max-w-2xl mx-auto">
            Everything your business needs to establish authority, generate consistent leads, and scale online in India.
          </p>
        </div>

        {/* 4 Core Pillars Detailed Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 sm:mb-20">
          {masterServices.map((srv) => {
            const Icon = srv.icon;
            return (
              <div
                key={srv.id}
                className="glass-card p-6 sm:p-8 flex flex-col justify-between border border-slate-200 hover:border-violet-300 transition-all duration-300 shadow-sm"
              >
                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`p-3 rounded-2xl ${srv.iconColor} shadow-2xs shrink-0`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                          {srv.category}
                        </span>
                        <h2 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug">
                          {srv.title}
                        </h2>
                      </div>
                    </div>
                    <span className={`text-[9px] sm:text-[10px] font-bold px-2.5 py-0.5 rounded-full border shrink-0 ${srv.badgeColor}`}>
                      {srv.badge}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                    {srv.desc}
                  </p>

                  {/* 6 Exhaustive Deliverables */}
                  <div className="space-y-2 mb-6 bg-slate-50/80 p-4 rounded-2xl border border-slate-100">
                    <div className="text-[11px] font-bold text-slate-900 uppercase tracking-wider mb-2">
                      Key Deliverables & Inclusions:
                    </div>
                    {srv.bullets.map((b, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                        <span className="leading-tight">{b}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 text-xs text-slate-500 font-semibold mb-6">
                    <Clock className="w-4 h-4 text-violet-600" />
                    <span>Timeline: {srv.delivery}</span>
                  </div>
                </div>

                {/* Card Bottom CTA */}
                <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <Link
                    href={srv.link}
                    className="btn-primary text-xs !py-2.5 !px-5 flex items-center justify-center gap-2 w-full sm:w-auto shadow-sm"
                  >
                    <span>{srv.linkText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <a
                    href={`https://wa.me/918601300910?text=Hi%20SiteMint!%20I%20want%20to%20order%20${encodeURIComponent(srv.title)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-whatsapp text-xs !py-2.5 !px-4 flex items-center justify-center gap-1.5 w-full sm:w-auto"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Discuss on WhatsApp</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Box */}
        <div className="p-6 sm:p-10 rounded-3xl bg-gradient-to-r from-violet-50 via-slate-50 to-teal-50 border border-violet-200 text-center shadow-sm mb-12">
          <h3 className="text-xl sm:text-3xl font-extrabold text-slate-900 mb-2">
            Need a Customized Digital Package?
          </h3>
          <p className="text-slate-600 text-xs sm:text-sm max-w-xl mx-auto mb-6">
            Combine Website Development + Video Editing + Social Media Management for a custom discounted agency bundle.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://wa.me/918601300910?text=Hi%20SiteMint!%20I%20want%20a%20custom%20bundle%20quote%20(Website%20+%20App%20+%20Social%20Media%20+%20Video%20Editing)."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp text-xs sm:text-sm !py-2.5 sm:!py-3 !px-6 shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Get Custom Agency Bundle on WhatsApp</span>
            </a>

            <Link
              href="/calculator"
              className="btn-secondary text-xs sm:text-sm !py-2.5 sm:!py-3 !px-5 flex items-center gap-1.5"
            >
              <Calculator className="w-4 h-4 text-violet-600" />
              <span>Use Project Calculator</span>
            </Link>
          </div>
        </div>
      </div>
      <FaqSection />
    </div>
  );
}
