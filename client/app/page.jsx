import Hero from '../components/Hero';
import PricingSection from '../components/PricingSection';
import WhyChooseUs from '../components/WhyChooseUs';
import TechnologiesSection from '../components/TechnologiesSection';
import FaqSection from '../components/FaqSection';
import Link from 'next/link';
import {
  MessageCircle,
  Phone,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Calculator,
  Eye,
  Globe,
  Smartphone,
  Video,
  Share2,
  Layers,
  TrendingUp,
  Zap,
  Crown
} from 'lucide-react';

export const metadata = {
  title: 'SiteMint — Professional Web, App, Video Editing & Social Media Studio in India',
  description: 'We build fast, scalable, modern business websites (Starting ₹3,999), Android & iOS mobile apps (Starting ₹12,999), viral video edits (Starting ₹499), and complete social media management in India. 7-day fast delivery, free domain & hosting, and 100% code ownership.',
  keywords: [
    'low budget website development india',
    'website developer starting 3999',
    'mobile app development starting 12999',
    'instagram reels video editing services',
    'social media marketing management agency india',
    'ecommerce website development with razorpay upi',
    'school coaching institute portal developer',
    'bakery restaurant online ordering website',
    'cheap and best website design company in india',
    'custom web application software development',
    'freelance website developer near me',
    'SiteMint'
  ],
  alternates: {
    canonical: 'https://sitemint.in',
  },
  openGraph: {
    title: 'SiteMint | Professional Web, App, Video Editing & Social Media Studio in India',
    description: 'Custom websites starting ₹3,999, mobile apps starting ₹12,999, and video editing for ambitious businesses in India. 7-day fast delivery with free domain & hosting.',
    url: 'https://sitemint.in',
    siteName: 'SiteMint',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SiteMint — Modern Web, App & Creative Media Studio',
    description: 'Affordable business websites, mobile apps, video editing and social media management in India.',
  },
};

export default function HomePage() {
  const coreServices = [
    {
      id: 'web-software',
      category: 'WEB & SOFTWARE',
      title: 'Web & Software Development',
      badge: 'TOP CHOICE',
      badgeColor: 'bg-violet-100/80 text-violet-800 border-violet-200',
      cardTheme: 'bg-gradient-to-b from-violet-50/40 via-white to-white border-violet-200/80 hover:border-violet-400 hover:shadow-xl hover:shadow-violet-500/10',
      iconBg: 'bg-gradient-to-br from-violet-600 to-indigo-600 text-white shadow-md shadow-violet-500/25',
      bulletBg: 'bg-violet-50/40 border-violet-100/80',
      btnStyle: 'bg-violet-600 hover:bg-violet-700 text-white shadow-md shadow-violet-600/20',
      icon: Globe,
      desc: 'Custom high-speed websites, e-commerce stores & cloud software tailored for your business.',
      bullets: [
        'Business Websites & Portfolios',
        'E-Commerce & UPI Payment Setup',
        'Education & Coaching Portals',
        'Restaurant QR & WhatsApp Orders',
        'Custom CRM & Billing Software',
      ],
      link: '/services/website-development',
    },
    {
      id: 'mobile-apps',
      category: 'MOBILE ENGINEERING',
      title: 'Mobile App Development',
      badge: 'PLAY STORE',
      badgeColor: 'bg-pink-100/80 text-pink-800 border-pink-200',
      cardTheme: 'bg-gradient-to-b from-pink-50/40 via-white to-white border-pink-200/80 hover:border-pink-400 hover:shadow-xl hover:shadow-pink-500/10',
      iconBg: 'bg-gradient-to-br from-pink-600 to-rose-600 text-white shadow-md shadow-pink-500/25',
      bulletBg: 'bg-pink-50/40 border-pink-100/80',
      btnStyle: 'bg-pink-600 hover:bg-pink-700 text-white shadow-md shadow-pink-600/20',
      icon: Smartphone,
      desc: 'High-performance Android & iOS apps engineered for fast retention & orders.',
      bullets: [
        'Android (.APK) & Play Store Ready',
        'iOS & Cross-Platform Hybrid Apps',
        'E-Commerce & Food Ordering Apps',
        'Push Notifications & Cloud Backend',
        'Instant Phone Number OTP Login',
      ],
      link: '/services/mobile-app-development',
    },
    {
      id: 'video-editing',
      category: 'CREATIVE MEDIA',
      title: 'Video Editing & Reels',
      badge: 'VIRAL RETENTION',
      badgeColor: 'bg-purple-100/80 text-purple-800 border-purple-200',
      cardTheme: 'bg-gradient-to-b from-purple-50/40 via-white to-white border-purple-200/80 hover:border-purple-400 hover:shadow-xl hover:shadow-purple-500/10',
      iconBg: 'bg-gradient-to-br from-purple-600 to-fuchsia-600 text-white shadow-md shadow-purple-500/25',
      bulletBg: 'bg-purple-50/40 border-purple-100/80',
      btnStyle: 'bg-purple-600 hover:bg-purple-700 text-white shadow-md shadow-purple-600/20',
      icon: Video,
      desc: 'Viral Instagram Reels, YouTube videos & ads designed to convert viewers to buyers.',
      bullets: [
        'Instagram Reels & YouTube Shorts',
        'Commercial Business Video Ads',
        'YouTube Long-Form & Podcasts',
        'Dynamic Animated Subtitles',
        '4K Color Grading & Sound FX',
      ],
      link: '/services/video-editing',
    },
    {
      id: 'social-media',
      category: 'BRAND MARKETING',
      title: 'Social Media Management',
      badge: '7+ PLATFORMS',
      badgeColor: 'bg-emerald-100/80 text-emerald-800 border-emerald-200',
      cardTheme: 'bg-gradient-to-b from-emerald-50/40 via-white to-white border-emerald-200/80 hover:border-emerald-400 hover:shadow-xl hover:shadow-emerald-500/10',
      iconBg: 'bg-gradient-to-br from-emerald-600 to-teal-600 text-white shadow-md shadow-emerald-500/25',
      bulletBg: 'bg-emerald-50/40 border-emerald-100/80',
      btnStyle: 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-md shadow-emerald-600/20',
      icon: Share2,
      desc: 'Daily post designs, engaging captions, DM inquiry management & targeted Meta ads.',
      bullets: [
        '7-8 Platforms Managed Daily',
        'Custom Posts & Carousels',
        'SEO Captions & City Hashtags',
        'DM & Comment Inquiry Answering',
        'High-ROI Meta & Google Ads Setup',
      ],
      link: '/services/social-media-management',
    },
  ];

  return (
    <div className="w-full max-w-full overflow-hidden bg-white">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. What We Do */}
      <section id="services" className="py-10 sm:py-14 bg-slate-50/70 border-t border-b border-slate-200 scroll-mt-16 text-slate-900 w-full overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-50/90 border border-violet-200/90 text-violet-800 text-xs font-extrabold uppercase tracking-wider mb-2.5 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-violet-600" /> — CORE CAPABILITIES —
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 mb-2 sm:mb-3 font-sans">
              What We <span className="gradient-text-hero">Do</span>
            </h2>
            <p className="text-slate-600 text-xs sm:text-base font-medium max-w-2xl mx-auto leading-relaxed">
              End-to-end digital services engineered to build brand authority, capture leads, and grow revenue.
            </p>
            <div className="w-14 h-1 bg-gradient-to-r from-violet-600 via-indigo-600 to-teal-500 rounded-full mx-auto mt-3" />
          </div>

          {/* 4 Cards Grid matching About Us layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">

            {/* Card 01: Web & Software Development */}
            <div className="bg-white p-5 sm:p-6 rounded-3xl border border-blue-200/90 shadow-xs hover:shadow-lg hover:border-blue-400 transition-all duration-300 relative overflow-hidden group flex flex-col justify-between h-full">
              <div className="w-8 h-8 absolute top-0 right-0 border-t-2 border-r-2 border-blue-400/50 rounded-tr-3xl pointer-events-none" />

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-2xl bg-blue-600 text-white flex items-center justify-center shadow-md font-bold shrink-0">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div className="flex items-center gap-2 text-xs font-extrabold text-slate-400 uppercase tracking-wider">
                    <span className="text-blue-600 font-mono text-sm">01</span>
                    <span>——</span>
                    <span>WEB & SOFTWARE DEVELOPMENT</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 items-center">
                  <div className="sm:col-span-7 space-y-3">
                    <h3 className="text-lg sm:text-xl font-black text-slate-900 leading-snug">
                      Web & Software Development
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      Custom high-speed websites, stores & cloud software tailored for your business.
                    </p>

                    <div className="space-y-2 text-xs text-slate-700 font-bold pt-1">
                      {[
                        'Business Websites & Portfolios',
                        'E-Commerce & UPI Gateways',
                        'Education & Coaching Portals',
                        'Restaurant QR & WhatsApp Orders',
                        'Custom CRM & Billing Dashboards',
                      ].map((bullet, idx) => (
                        <div key={idx} className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                          <span className="leading-tight">{bullet}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-3">
                      <Link
                        href="/services/website-development"
                        className="px-5 py-2.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-xs font-extrabold flex items-center gap-2 shadow-md shadow-blue-500/20 transition-all duration-300 transform hover:scale-105 w-fit"
                      >
                        <span>Explore Details</span>
                        <ArrowRight className="w-4 h-4 text-blue-100" />
                      </Link>
                    </div>
                  </div>

                  <div className="sm:col-span-5 flex items-center justify-center p-2 overflow-visible">
                    <img
                      src="/aboutimage/wedo-websitedevelomet.png"
                      alt="Web & Software Development"
                      className="w-full h-auto max-h-72 sm:max-h-80 lg:max-h-96 object-contain pointer-events-none select-none transform scale-125 sm:scale-130 lg:scale-135 drop-shadow-sm"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Card 02: Mobile App Development */}
            <div className="bg-white p-5 sm:p-6 rounded-3xl border border-emerald-200/90 shadow-xs hover:shadow-lg hover:border-emerald-400 transition-all duration-300 relative overflow-hidden group flex flex-col justify-between h-full">
              <div className="w-8 h-8 absolute top-0 right-0 border-t-2 border-r-2 border-emerald-400/50 rounded-tr-3xl pointer-events-none" />

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-2xl bg-emerald-500 text-white flex items-center justify-center shadow-md font-bold shrink-0">
                    <Smartphone className="w-5 h-5" />
                  </div>
                  <div className="flex items-center gap-2 text-xs font-extrabold text-slate-400 uppercase tracking-wider">
                    <span className="text-emerald-500 font-mono text-sm">02</span>
                    <span>——</span>
                    <span>MOBILE APP DEVELOPMENT</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 items-center">
                  <div className="sm:col-span-7 space-y-3">
                    <h3 className="text-lg sm:text-xl font-black text-slate-900 leading-snug">
                      Mobile App Development
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      High-performance Android & iOS apps engineered for fast retention & orders.
                    </p>

                    <div className="space-y-2 text-xs text-slate-700 font-bold pt-1">
                      {[
                        'Android (.APK) & Play Store Ready',
                        'iOS & Cross-Platform Hybrid Apps',
                        'E-Commerce & Food Ordering Apps',
                        'Push Notifications & Cloud Backend',
                        'Instant Phone Number OTP Login',
                      ].map((bullet, idx) => (
                        <div key={idx} className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                          <span className="leading-tight">{bullet}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-3">
                      <Link
                        href="/services/mobile-app-development"
                        className="px-5 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-extrabold flex items-center gap-2 shadow-md shadow-emerald-500/20 transition-all duration-300 transform hover:scale-105 w-fit"
                      >
                        <span>Explore Details</span>
                        <ArrowRight className="w-4 h-4 text-emerald-100" />
                      </Link>
                    </div>
                  </div>

                  <div className="sm:col-span-5 flex items-center justify-center p-2 overflow-visible">
                    <img
                      src="/aboutimage/wedo-appdeveloment.png"
                      alt="Mobile App Development"
                      className="w-full h-auto max-h-72 sm:max-h-80 lg:max-h-96 object-contain pointer-events-none select-none transform scale-125 sm:scale-130 lg:scale-135 drop-shadow-sm"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Card 03: Video Editing & Reels */}
            <div className="bg-white p-5 sm:p-6 rounded-3xl border border-violet-200/90 shadow-xs hover:shadow-lg hover:border-violet-400 transition-all duration-300 relative overflow-hidden group flex flex-col justify-between h-full">
              <div className="w-8 h-8 absolute top-0 right-0 border-t-2 border-r-2 border-violet-400/50 rounded-tr-3xl pointer-events-none" />

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-2xl bg-violet-600 text-white flex items-center justify-center shadow-md font-bold shrink-0">
                    <Video className="w-5 h-5" />
                  </div>
                  <div className="flex items-center gap-2 text-xs font-extrabold text-slate-400 uppercase tracking-wider">
                    <span className="text-violet-600 font-mono text-sm">03</span>
                    <span>——</span>
                    <span>VIDEO EDITING & REELS</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 items-center">
                  <div className="sm:col-span-7 space-y-3">
                    <h3 className="text-lg sm:text-xl font-black text-slate-900 leading-snug">
                      Video Editing & Reels
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      Viral Instagram Reels, YouTube videos & ads designed to convert viewers to buyers.
                    </p>

                    <div className="space-y-2 text-xs text-slate-700 font-bold pt-1">
                      {[
                        'Instagram Reels & YouTube Shorts',
                        'Commercial Business Video Ads',
                        'YouTube Long-Form & Podcasts',
                        'Dynamic Animated Subtitles',
                        '4K Color Grading & Sound FX',
                      ].map((bullet, idx) => (
                        <div key={idx} className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-violet-500 shrink-0" />
                          <span className="leading-tight">{bullet}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-3">
                      <Link
                        href="/services/video-editing"
                        className="px-5 py-2.5 rounded-full bg-violet-600 hover:bg-violet-700 text-white text-xs font-extrabold flex items-center gap-2 shadow-md shadow-violet-500/20 transition-all duration-300 transform hover:scale-105 w-fit"
                      >
                        <span>Explore Details</span>
                        <ArrowRight className="w-4 h-4 text-violet-100" />
                      </Link>
                    </div>
                  </div>

                  <div className="sm:col-span-5 flex items-center justify-center p-2 overflow-visible">
                    <img
                      src="/aboutimage/wedo-video edtting.png"
                      alt="Video Editing & Reels"
                      className="w-full h-auto max-h-72 sm:max-h-80 lg:max-h-96 object-contain pointer-events-none select-none transform scale-125 sm:scale-130 lg:scale-135 drop-shadow-sm"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Card 04: Social Media Management */}
            <div className="bg-white p-5 sm:p-6 rounded-3xl border border-teal-200/90 shadow-xs hover:shadow-lg hover:border-teal-400 transition-all duration-300 relative overflow-hidden group flex flex-col justify-between h-full">
              <div className="w-8 h-8 absolute top-0 right-0 border-t-2 border-r-2 border-teal-400/50 rounded-tr-3xl pointer-events-none" />

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-2xl bg-teal-500 text-white flex items-center justify-center shadow-md font-bold shrink-0">
                    <Share2 className="w-5 h-5" />
                  </div>
                  <div className="flex items-center gap-2 text-xs font-extrabold text-slate-400 uppercase tracking-wider">
                    <span className="text-teal-500 font-mono text-sm">04</span>
                    <span>——</span>
                    <span>SOCIAL MEDIA MANAGEMENT</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 items-center">
                  <div className="sm:col-span-7 space-y-3">
                    <h3 className="text-lg sm:text-xl font-black text-slate-900 leading-snug">
                      Social Media Management
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      Daily post designs, engaging captions, DM inquiry management & targeted Meta ads.
                    </p>

                    <div className="space-y-2 text-xs text-slate-700 font-bold pt-1">
                      {[
                        '7-8 Platforms Managed Daily',
                        'Custom Posts & Carousels',
                        'SEO Captions & City Hashtags',
                        'DM & Comment Inquiry Answering',
                        'High-ROI Meta & Google Ads Setup',
                      ].map((bullet, idx) => (
                        <div key={idx} className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-teal-500 shrink-0" />
                          <span className="leading-tight">{bullet}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-3">
                      <Link
                        href="/services/social-media-management"
                        className="px-5 py-2.5 rounded-full bg-teal-600 hover:bg-teal-700 text-white text-xs font-extrabold flex items-center gap-2 shadow-md shadow-teal-500/20 transition-all duration-300 transform hover:scale-105 w-fit"
                      >
                        <span>Explore Details</span>
                        <ArrowRight className="w-4 h-4 text-teal-100" />
                      </Link>
                    </div>
                  </div>

                  <div className="sm:col-span-5 flex items-center justify-center p-2 overflow-visible">
                    <img
                      src="/aboutimage/wedo-socalmedia.png"
                      alt="Social Media Management"
                      className="w-full h-auto max-h-72 sm:max-h-80 lg:max-h-96 object-contain pointer-events-none select-none transform scale-125 sm:scale-130 lg:scale-135 drop-shadow-sm"
                    />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. 100% Transparent Pricing */}
      <PricingSection isHomePage={true} />

      {/* 4. Why Choose SiteMint */}
      <WhyChooseUs />

      {/* 5. Technologies We Use */}
      <TechnologiesSection />

      {/* 6. Dual Teaser Banner */}
      <section className="py-12 sm:py-16 md:py-20 bg-white w-full overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* Card A: Live Demos */}
            <div className="glass-card p-6 sm:p-8 bg-gradient-to-br from-violet-50/80 via-white to-indigo-50/50 border border-violet-200 flex flex-col justify-between relative overflow-hidden shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 min-w-0">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-100 text-violet-800 text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-4">
                  <Eye className="w-3.5 h-3.5 text-violet-600" /> Interactive Samples
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-2">
                  Test Working Demos on Your Phone
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  See how our Bakery digital ordering system, Coaching admission portal, and E-commerce checkout work in real life before ordering.
                </p>
                <div className="flex flex-wrap gap-2 text-xs text-slate-700 font-medium mb-6">
                  <span className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 shadow-2xs hover:border-violet-300 transition">🍰 Bakery Ordering</span>
                  <span className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 shadow-2xs hover:border-violet-300 transition">🎓 Coaching Portal</span>
                  <span className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 shadow-2xs hover:border-violet-300 transition">🛍️ E-Commerce Shop</span>
                </div>
              </div>

              <Link
                href="/projects"
                className="btn-primary btn-shine text-xs sm:text-sm !py-2.5 sm:!py-3 !px-5 flex items-center justify-center gap-2 shadow-sm w-full sm:w-auto"
              >
                <Eye className="w-4 h-4" />
                <span>Explore Featured Projects</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Card B: Cost Calculator */}
            <div className="glass-card p-6 sm:p-8 bg-gradient-to-br from-teal-50/80 via-white to-emerald-50/50 border border-teal-200 flex flex-col justify-between relative overflow-hidden shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 min-w-0">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100 text-teal-800 text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-4">
                  <Calculator className="w-3.5 h-3.5 text-teal-600" /> Transparent Breakdown
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-2">
                  Instant Project Cost Estimator
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  Select your required business features, number of pages, and add-ons to see an instant price breakdown with zero hidden charges.
                </p>
                <div className="flex flex-wrap gap-2 text-xs text-slate-700 font-medium mb-6">
                  <span className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 shadow-2xs hover:border-teal-300 transition">⚡ Real-time Total</span>
                  <span className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 shadow-2xs hover:border-teal-300 transition">💬 1-Click WhatsApp Quote</span>
                  <span className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 shadow-2xs hover:border-teal-300 transition">🔒 100% Free</span>
                </div>
              </div>

              <Link
                href="/calculator"
                className="btn-secondary text-xs sm:text-sm !py-2.5 sm:!py-3 !px-5 flex items-center justify-center gap-2 shadow-2xs w-full sm:w-auto hover:border-teal-400 font-bold"
              >
                <Calculator className="w-4 h-4 text-teal-700" />
                <span>Calculate Your Exact Cost</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 7. High-Converting Launch CTA Banner */}
      <section className="py-12 sm:py-16 md:py-20 relative overflow-hidden bg-slate-50/50 w-full">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative p-6 sm:p-12 md:p-14 rounded-3xl bg-gradient-to-r from-violet-900 via-indigo-900 to-slate-900 text-white text-center overflow-hidden shadow-2xl shadow-slate-900/20 hover:shadow-violet-900/30 transition-all">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/20 text-emerald-300 text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-4 sm:mb-6 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 animate-pulse" /> Ready to Launch Online?
            </div>

            <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white mb-3 sm:mb-4 leading-tight max-w-2xl mx-auto tracking-tight">
              Get Your Custom Project Live in Just <span className="text-emerald-400">7 Days</span>
            </h2>

            <p className="text-slate-200 text-xs sm:text-base max-w-xl mx-auto mb-6 sm:mb-8 leading-relaxed font-normal">
              No complicated technical jargon, zero upfront risk. Tell us your business idea and get a live interactive demo designed for you.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-8">
              <a
                href="https://wa.me/918920683588?text=Hi%20SiteMint!%20I%20am%20ready%20to%20start%20my%20website%20project.%20Please%20guide%20me."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp btn-shine text-sm sm:text-base !py-3 sm:!py-3.5 !px-6 sm:!px-8 shadow-xl shadow-green-950/40 w-full sm:w-auto justify-center"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Start Project on WhatsApp</span>
              </a>

              <a
                href="tel:+918920683588"
                className="btn-secondary text-sm sm:text-base !py-3 sm:!py-3.5 !px-5 sm:!px-7 flex items-center justify-center gap-2 w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border-white/20"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>Call +91 89206 83588</span>
              </a>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-slate-300">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> 100% Free Consultation
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Zero Advance for Scoping
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> 60 Days Support
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FAQs */}
      <FaqSection />
    </div>
  );
}
