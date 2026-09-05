import Link from 'next/link';
import { 
  Code2, 
  Smartphone, 
  Video, 
  Share2, 
  CheckCircle2, 
  MessageCircle, 
  Sparkles, 
  ArrowRight, 
  Calculator, 
  Clock 
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
      number: '01',
      category: 'WEB & SOFTWARE DEVELOPMENT',
      title: 'Website & Custom Software Development',
      badge: 'STARTER FROM ₹3,999',
      badgeColor: 'bg-blue-50 text-blue-700 border-blue-200',
      borderColor: 'border-blue-200/90 hover:border-blue-400',
      cornerBorderColor: 'border-blue-400/50',
      icon: Code2,
      iconBg: 'bg-blue-600',
      iconColor: 'text-blue-500',
      image: '/wedo-websitedevelomet.png',
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
      whatsappMsg: 'Hi SiteMint! I want to order Website %26 Custom Software Development.',
    },
    {
      id: 'mobile-apps',
      number: '02',
      category: 'MOBILE APP DEVELOPMENT',
      title: 'Mobile App Development (Android & iOS)',
      badge: 'STARTER FROM ₹12,999',
      badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      borderColor: 'border-emerald-200/90 hover:border-emerald-400',
      cornerBorderColor: 'border-emerald-400/50',
      icon: Smartphone,
      iconBg: 'bg-emerald-500',
      iconColor: 'text-emerald-500',
      image: '/wedo-appdeveloment.png',
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
      whatsappMsg: 'Hi SiteMint! I want to order Mobile App Development.',
    },
    {
      id: 'video-editing',
      number: '03',
      category: 'VIDEO EDITING & REELS',
      title: 'Professional Video Editing & Motion Graphics',
      badge: 'STARTING ₹499/REEL',
      badgeColor: 'bg-violet-50 text-violet-700 border-violet-200',
      borderColor: 'border-violet-200/90 hover:border-violet-400',
      cornerBorderColor: 'border-violet-400/50',
      icon: Video,
      iconBg: 'bg-violet-600',
      iconColor: 'text-violet-500',
      image: '/wedo-video edtting.png',
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
      whatsappMsg: 'Hi SiteMint! I want to order Video Editing %26 Motion Graphics.',
    },
    {
      id: 'social-media',
      number: '04',
      category: 'SOCIAL MEDIA MANAGEMENT',
      title: 'Social Media Management & Digital Growth',
      badge: 'MONTHLY RETAINER',
      badgeColor: 'bg-teal-50 text-teal-700 border-teal-200',
      borderColor: 'border-teal-200/90 hover:border-teal-400',
      cornerBorderColor: 'border-teal-400/50',
      icon: Share2,
      iconBg: 'bg-teal-500',
      iconColor: 'text-teal-500',
      image: '/wedo-socalmedia.png',
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
      whatsappMsg: 'Hi SiteMint! I want to order Social Media Management.',
    },
  ];

  // Schema.org JSON-LD for Search Engine Rich Snippets
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    'name': 'SiteMint Digital Agency Core Services',
    'description': 'Complete digital transformation services including Web Development, Mobile Apps, Video Editing, and Social Media Management.',
    'itemListElement': masterServices.map((srv, idx) => ({
      '@type': 'ListItem',
      'position': idx + 1,
      'item': {
        '@type': 'Service',
        'name': srv.title,
        'description': srv.desc,
        'provider': {
          '@type': 'Organization',
          'name': 'SiteMint',
          'url': 'https://sitemint.in'
        },
        'url': `https://sitemint.in${srv.link}`
      }
    }))
  };

  return (
    <div className="w-full pt-6 pb-12 sm:pt-10 sm:pb-20 bg-slate-50/50">
      {/* Google Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-[#3B82F6] text-xs font-extrabold uppercase tracking-wider mb-3 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#3B82F6]" /> — COMPLETE DIGITAL ECOSYSTEM —
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900 mb-3">
            Our 4 Core <span className="gradient-text-hero">Digital Services</span>
          </h1>
          <p className="text-slate-600 text-xs sm:text-base font-medium max-w-2xl mx-auto leading-relaxed">
            Everything your business needs to establish authority, generate consistent leads, and scale online in India.
          </p>
          <div className="w-14 h-1 bg-[#3B82F6] rounded-full mx-auto mt-4" />
        </div>

        {/* 4 Core Pillars Modern Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-16 sm:mb-20">
          {masterServices.map((srv) => {
            const Icon = srv.icon;
            return (
              <div
                key={srv.id}
                className={`bg-white p-5 sm:p-7 rounded-3xl border ${srv.borderColor} shadow-xs hover:shadow-xl transition-all duration-300 relative overflow-hidden group flex flex-col justify-between`}
              >
                <div className={`w-8 h-8 absolute top-0 right-0 border-t-2 border-r-2 ${srv.cornerBorderColor} rounded-tr-3xl pointer-events-none`} />
                
                <div>
                  {/* Top Bar: Icon + Category + Price Badge */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-2xl ${srv.iconBg} text-white flex items-center justify-center shadow-md font-bold shrink-0`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="flex items-center gap-2 text-xs font-extrabold text-slate-400 uppercase tracking-wider">
                        <span className={`${srv.iconColor} font-mono text-sm`}>{srv.number}</span>
                        <span>——</span>
                        <span className="truncate">{srv.category}</span>
                      </div>
                    </div>
                    <span className={`text-[10px] sm:text-xs font-bold px-3 py-1 rounded-full border shrink-0 ${srv.badgeColor}`}>
                      {srv.badge}
                    </span>
                  </div>

                  <h2 className="text-lg sm:text-xl font-black text-slate-900 leading-snug mb-2">
                    {srv.title}
                  </h2>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-4">
                    {srv.desc}
                  </p>

                  {/* Grid Layout for Deliverables + Prominent Large Image */}
                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 items-center mb-4">
                    {/* 6 Exhaustive Deliverables */}
                    <div className="sm:col-span-7 space-y-2 bg-slate-50/80 p-3.5 sm:p-4 rounded-2xl border border-slate-100">
                      <div className="text-[11px] font-extrabold text-slate-900 uppercase tracking-wider mb-2">
                        Key Deliverables & Inclusions:
                      </div>
                      {srv.bullets.map((b, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                          <CheckCircle2 className={`w-3.5 h-3.5 ${srv.iconColor} mt-0.5 shrink-0`} />
                          <span className="leading-tight">{b}</span>
                        </div>
                      ))}
                    </div>

                    {/* Extra Large Prominent Right Image Container */}
                    <div className="sm:col-span-5 flex items-center justify-center p-2 overflow-visible">
                      <img
                        src={srv.image}
                        alt={srv.title}
                        className="w-full h-auto max-h-60 sm:max-h-72 lg:max-h-80 object-contain pointer-events-none select-none transform scale-110 sm:scale-115 lg:scale-120 transition-transform duration-300 group-hover:scale-125 drop-shadow-sm"
                      />
                    </div>
                  </div>

                  {/* Delivery Timeline */}
                  <div className="flex items-center gap-2 text-xs text-slate-500 font-semibold mb-2">
                    <Clock className="w-4 h-4 text-slate-400" />
                    <span>Timeline: {srv.delivery}</span>
                  </div>
                </div>

                {/* Card Bottom CTA Action Bar */}
                <div className="mt-4 pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <Link
                    href={srv.link}
                    className="px-5 py-2.5 rounded-full bg-[#0B1528] hover:bg-blue-900 text-white text-xs font-extrabold flex items-center justify-center gap-2 shadow-md transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
                  >
                    <span>{srv.linkText}</span>
                    <ArrowRight className="w-4 h-4 text-blue-400" />
                  </Link>

                  <a
                    href={`https://wa.me/918920683588?text=${srv.whatsappMsg}`}
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
          <p className="text-slate-600 text-xs sm:text-sm max-w-xl mx-auto mb-6 font-medium">
            Combine Website Development + Video Editing + Social Media Management for a custom discounted agency bundle.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://wa.me/918920683588?text=Hi%20SiteMint!%20I%20want%20a%20custom%20bundle%20quote%20(Website%20+%20App%20+%20Social%20Media%20+%20Video%20Editing)."
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
