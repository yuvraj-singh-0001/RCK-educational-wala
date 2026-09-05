'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  Sparkles, 
  Zap, 
  MessageCircle, 
  ArrowRight, 
  CheckCircle2, 
  Globe, 
  Smartphone, 
  Video, 
  Share2, 
  Calculator
} from 'lucide-react';

export default function PricingSection() {
  const [activeTab, setActiveTab] = useState('web');

  // 1. Web & Software Development Plans
  const webPlans = [
    {
      name: 'Starter Website',
      badge: 'STARTER PACK',
      badgeColor: 'bg-slate-100 text-slate-700 border-slate-200',
      price: '₹3,999',
      regularPrice: '₹12,000',
      period: 'one-time',
      desc: 'Best for Small Businesses, Personal Brands & Local Shops looking to launch online with high speed.',
      popular: false,
      ctaText: 'Get Started →',
      ctaUrl: 'https://wa.me/918920683588?text=Hi%20SiteMint!%20I%20want%20to%20order%20the%20Starter%20Website%20Package%20(₹3,999).%20Please%20guide%20me.',
      includedHeader: "What's Included:",
      features: [
        '5 Custom Designed Pages (Home, About, Services, Gallery, Contact)',
        '100% Mobile, Tablet & Desktop Responsive Layout',
        '💬 1-Click WhatsApp Direct Chat & Floating Lead Capture Widget',
        '📞 Instant Click-to-Call Phone & Email Action Buttons',
        '📩 Contact Form with Automatic Email Notifications',
        '⚙️ Content Update Admin Panel (Manage Text, Banners & Inquiries)',
        '🔍 Basic On-Page SEO, Meta Titles & Meta Descriptions Setup',
        '🌐 Google Search Console & XML Sitemap Indexing Submission',
        '📍 Google Maps Location Embed & Social Media Profiles Setup',
        '⚡ Sub-2 Second Load Speed Optimization on 4G/5G Networks',
        '🛠️ 60 Days Free Technical Maintenance & Post-Launch Support',
        '🔒 100% Full Source Code Ownership & Zero Monthly Lock-in Fees',
      ],
    },
    {
      name: 'Business Website & Management',
      badge: 'MOST POPULAR',
      badgeColor: 'bg-violet-600 text-white border-violet-600',
      price: '₹7,999',
      regularPrice: '₹22,000',
      period: 'one-time',
      desc: 'Best for Growing Businesses, E-commerce, Restaurants, Coaching & Service Portals.',
      popular: true,
      ctaText: 'Build My Business Website →',
      ctaUrl: 'https://wa.me/918920683588?text=Hi%20SiteMint!%20I%20want%20to%20order%20the%20Business%20Website%20%26%20Management%20Package%20(₹7,999).%20Please%20share%20details.',
      includedHeader: 'Everything in Starter, Plus:',
      features: [
        'Up to 10 Dynamic Pages / Custom Product & Service Categories',
        'Online Product Catalog & Online Ordering / Booking System',
        '👥 User Registration, Customer Login & User Profile Dashboard',
        '💬 WhatsApp Order & Formatted Inquiry Direct Dispatch Engine',
        '⚙️ Admin Control Panel (Manage Products, Orders, Users & Download CSV)',
        '📢 1-Click Email Notification Broadcast to Users (350 Free Daily Emails via Gmail API)',
        '💳 Razorpay 0% UPI Payment Gateway Integration (GPay, PhonePe, Paytm, Cards)',
        '🔍 Advanced On-Page SEO, Local Keywords & Schema.org Structured Data',
        '📊 Google Analytics 4 (GA4) & Search Console Setup (Track visitor counts & active users)',
        '⚡ Speed Caching, SSL/HTTPS Security & Asset Optimization',
        '🛠️ 6 Months Free Technical Maintenance, Content Updates & Bug Fixes',
        '🔒 100% Full Source Code & Database Rights',
      ],
    },
    {
      name: 'Professional Business System',
      badge: 'COMPLETE SOLUTION • DOMAIN & SERVER INCLUDED',
      badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-300',
      price: '₹17,999',
      regularPrice: '₹38,000',
      period: 'one-time',
      desc: 'Best for Established Businesses, Startups, Institutes & Enterprises requiring full cloud system.',
      popular: false,
      ctaText: 'Get Professional Solution →',
      ctaUrl: 'https://wa.me/918920683588?text=Hi%20SiteMint!%20I%20want%20to%20order%20the%20Professional%20Business%20System%20(₹17,999%20-%20Domain%20%2B%20Server%20Included).',
      includedHeader: 'Everything in Business Plan, Plus:',
      freeDomainHosting: true,
      features: [
        '🌐 Custom Website Architecture with Unlimited* Business Pages',
        '☁️ 1 Year High-Speed Cloud Server & Hosting Included (100% FREE)',
        '🏷️ 1 Year Custom Domain Name Included (.IN / .COM) (100% FREE)',
        '👥 Complete User Management System & Role-Based Admin Portal',
        '💬 WhatsApp Automated Order & Instant Customer Alerts Engine',
        '⚙️ Master Admin Dashboard with Revenue Reports, User Management & Data Export',
        '📢 1-Click Mass Email Notification Broadcast to All Users (350 Free Emails/Day via Gmail API)',
        '💳 Full Razorpay Payment Integration (UPI, QR, Cards, NetBanking, Automated Receipts)',
        '🔍 Advanced Technical SEO, Schema Graph & Rapid Google Indexing Submission',
        '📈 Live Google Analytics 4 (GA4) Traffic & Active User Behavior Dashboard (Track real-time active users & page hits)',
        '🛠️ 1 Full Year Free Technical Maintenance & Priority SLA Support',
        '🎁 Professional Business Email Setup & 100% Full Source Code Handover',
      ],
    },
  ];

  // 2. Mobile App Development Plans
  const appPlans = [
    {
      name: 'Starter Dual-Platform App (Android + iOS)',
      badge: 'ANDROID + IOS BUILD',
      badgeColor: 'bg-slate-100 text-slate-700 border-slate-200',
      price: '₹12,999',
      regularPrice: '₹28,000',
      period: 'one-time',
      desc: 'Production-ready Android & iOS mobile app builds with 30 days free bug-fix support.',
      popular: false,
      ctaText: 'Build Mobile App →',
      ctaUrl: 'https://wa.me/918920683588?text=Hi%20SiteMint!%20I%20want%20the%20Starter%20Dual-Platform%20App%20(₹12,999).%20Please%20share%20details.',
      includedHeader: "What's Included:",
      clientScope: '📌 Client Scope: Developer console fees ($25 Google / $99 Apple) & server/database costs paid directly by client.',
      features: [
        '📱 Both Android (.AAB/.APK) & Apple iOS (.IPA) Full Source Code & Builds',
        'Up to 6 Custom Designed Core Screens & Gesture Touch Navigation',
        '💬 In-App WhatsApp Direct Customer Chat & Quick Inquiry Button',
        '🔐 Phone Number OTP Login & Google 1-Tap Secure Authentication',
        '🔔 Firebase Cloud Push Notifications Engine for Broadcast Alerts',
        '⚙️ Basic Web Admin Control Panel for Banners & Content Updates',
        '🔍 Basic App Indexing & Google Search Console Submission',
        '⚡ Offline Data Caching for Smooth Browsing on 2G/3G/4G Networks',
        '🛠️ 30 Days Free Technical Maintenance & Bug Fixing Support',
        '🔒 100% Full Source Code Ownership & Zero Monthly Developer Lock-in',
      ],
    },
    {
      name: 'Business Pro App (Android + iOS)',
      badge: 'ANDROID + IOS • GMAIL API FREE',
      badgeColor: 'bg-violet-600 text-white border-violet-600',
      price: '₹24,999',
      regularPrice: '₹45,000',
      period: 'one-time',
      desc: 'Full-featured Flutter cross-platform mobile app running smoothly on Android & Apple iOS with Gmail lead alerts.',
      popular: true,
      ctaText: 'Build Business App →',
      ctaUrl: 'https://wa.me/918920683588?text=Hi%20SiteMint!%20I%20want%20the%20Business%20Pro%20App%20(₹24,999).%20Please%20share%20details.',
      includedHeader: 'Everything in Starter, Plus:',
      clientScope: '📌 Client Scope: Developer account fees ($25 Google / $99 Apple) & third-party paid APIs paid directly by client.',
      features: [
        '📱 Both Android (.AAB) & Apple iOS (.IPA) High-Performance Flutter Apps',
        'Up to 12 Custom Dynamic Screens & Smooth 60fps Micro-Animations',
        '💬 In-App WhatsApp Order & Formatted Inquiry Dispatch Engine',
        '📧 350 Free Lead & Alert Emails / Day via Gmail API (100% Free)',
        '⚙️ Master Web Admin Panel: Manage Products, Orders, Users & Notifications',
        '📢 1-Click Announcement Email Broadcast to App Users (350 Daily Emails via Gmail API)',
        '💳 Razorpay 0% UPI Payment Gateway Integration (GPay, PhonePe, Paytm)',
        '🔔 Segmented Targeted Push Notifications (Promotions, Order Status Updates)',
        '🔍 Advanced App SEO & Google Analytics 4 (GA4) Setup (Track active app users)',
        '🚀 Google Play Store & Apple App Store Live Publishing Assistance',
        '🛠️ 60 Days Free Technical Maintenance & Updates',
        '🔒 100% Source Code Transfer & Full API Documentation',
      ],
    },
    {
      name: 'Professional Custom App (Android + iOS)',
      badge: 'ANDROID + IOS • PLAY STORE FEE FREE',
      badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-300',
      price: '₹39,999',
      regularPrice: '₹75,000',
      period: 'one-time',
      desc: 'Advanced Android & iOS custom mobile app (16 to 22 screens) with Google Play Store publishing fee included free by SiteMint.',
      popular: false,
      ctaText: 'Get Professional App →',
      ctaUrl: 'https://wa.me/918920683588?text=Hi%20SiteMint!%20I%20want%20the%20Professional%20Custom%20App%20(₹39,999%20-%20Play%20Store%20Fee%20Included).',
      includedHeader: 'Everything in Business Plan, Plus:',
      clientScope: '📌 Client Scope: Paid 3rd-party APIs (WhatsApp Cloud API / SMS credits) & cloud server hosting paid directly by client.',
      features: [
        '📱 Both Android (.AAB) & Apple iOS (.IPA) Cross-Platform Production Builds',
        '16 to 22 Custom Dynamic App Screens & Advanced Business Workflows',
        '🚀 Google Play Store Publishing Account Fee ($25) INCLUDED FREE by SiteMint',
        '💬 In-App WhatsApp Automated Ordering & Live Customer Support Integration',
        '📧 350 Free Transactional & Lead Emails / Day via Gmail API',
        '⚙️ Centralized Multi-Entity Web Admin Portal & Customer Data Ledger',
        '📢 1-Click Mass Broadcast Engine to Notify Users via Email (350 Daily Gmail API)',
        '💳 Full Razorpay 0% UPI Payment Gateway with In-App Digital Invoices',
        '🔍 Complete Technical App SEO & Schema Indexing Submission',
        '📈 Live Google Analytics 4 (GA4) Traffic & Active App Users Tracking Dashboard (Track live active users & page hits)',
        '🛠️ 9 Months Free Technical Maintenance & Error Fixing Guarantee',
        '🔒 100% Intellectual Property & Source Code Transfer',
      ],
    },
  ];

  // 3. Video Editing Plans
  const videoPlans = [
    {
      name: 'Starter Reel / Short',
      badge: 'PER VIDEO',
      badgeColor: 'bg-slate-100 text-slate-700 border-slate-200',
      price: '₹499',
      regularPrice: '₹1,200',
      period: 'per video',
      desc: 'Ideal for testing our video editing quality for your Instagram page or YouTube channel.',
      popular: false,
      ctaText: 'Order Single Video →',
      ctaUrl: 'https://wa.me/918920683588?text=Hi%20SiteMint!%20I%20want%20to%20order%20Starter%20Reel%20Editing%20(₹499).',
      includedHeader: "What's Included:",
      features: [
        '1 Short-Form Video (Up to 60 Seconds)',
        'Dynamic Animated Subtitles (Hormozi Style)',
        'Retention Hooks & Fast-Paced Cuts',
        'Sound Effects (SFX) & Background Music',
        'Color Grading & Audio Noise Removal',
        '24-Hour Express Delivery',
        '2 Free Revision Rounds',
      ],
    },
    {
      name: 'Creator Growth Pack',
      badge: 'MOST POPULAR',
      badgeColor: 'bg-violet-600 text-white border-violet-600',
      price: '₹5,999',
      regularPrice: '₹12,000',
      period: '15 videos / mo',
      desc: 'Consistent monthly video flow for coaches, creators, and brands to grow followers.',
      popular: true,
      ctaText: 'Book Creator Pack →',
      ctaUrl: 'https://wa.me/918920683588?text=Hi%20SiteMint!%20I%20want%20to%20order%20the%20Creator%20Growth%20Pack%20(₹5,999).',
      includedHeader: 'Everything in Starter, Plus:',
      features: [
        '15 High-Quality Reels / Shorts per Month',
        'Custom Brand Font & Color Subtitle Presets',
        'Relevant Stock B-Roll Insertions & Memes',
        'Engaging Thumbnail Covers for Instagram Grid',
        'Monthly Content Strategy & Hook Suggestions',
        'Dedicated Video Editor on WhatsApp',
        'Priority 24-Hour Turnaround Queue',
      ],
    },
    {
      name: 'Brand Video & Ads Suite',
      badge: 'FULL PRODUCTION',
      badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-300',
      price: '₹11,999',
      regularPrice: '₹25,000',
      period: 'monthly retainer',
      desc: 'Complete video suite for businesses running Facebook/Instagram paid ads and YouTube.',
      popular: false,
      ctaText: 'Get Brand Video Suite →',
      ctaUrl: 'https://wa.me/918920683588?text=Hi%20SiteMint!%20I%20want%20the%20Brand%20Video%20%26%20Ads%20Suite%20(₹11,999).',
      includedHeader: 'Complete Video Suite:',
      features: [
        '30 High-Retention Reels / Shorts per Month',
        '2 Long-Form YouTube Videos / Podcasts (Up to 15 mins)',
        '3 High-Converting Commercial Video Ads for Meta Ads',
        '2D Motion Graphics & Product Feature Animations',
        'Custom CTR-Optimized YouTube Thumbnails',
        'Dedicated Creative Director & Video Specialist',
        'Unlimited Revisions during active billing',
      ],
    },
  ];

  // 4. Social Media Management Plans
  const smmPlans = [
    {
      name: 'Basic Social Starter',
      badge: 'STARTER',
      badgeColor: 'bg-slate-100 text-slate-700 border-slate-200',
      price: '₹4,999',
      regularPrice: '₹9,000',
      period: 'per month',
      desc: 'Essential social media presence for local shops and professionals.',
      popular: false,
      ctaText: 'Start Social Starter →',
      ctaUrl: 'https://wa.me/918920683588?text=Hi%20SiteMint!%20I%20want%20the%20Basic%20Social%20Starter%20Plan%20(₹4,999).',
      includedHeader: "What's Included:",
      features: [
        '15 Custom Designed Posts per Month',
        'Management on 3 Platforms (Instagram, FB, GMB)',
        'Festival Greeting & Promotional Creatives',
        'SEO Captions & City-Targeted Hashtags',
        'Bio & Profile Branding Optimization',
        'Monthly Performance Summary Report',
      ],
    },
    {
      name: 'Business Growth Retainer',
      badge: 'MOST POPULAR',
      badgeColor: 'bg-violet-600 text-white border-violet-600',
      price: '₹8,999',
      regularPrice: '₹18,000',
      period: 'per month',
      desc: 'Full-scale social media growth across 7-8 platforms with daily posting & DM routing.',
      popular: true,
      ctaText: 'Get Business Growth Plan →',
      ctaUrl: 'https://wa.me/918920683588?text=Hi%20SiteMint!%20I%20want%20the%20Business%20Growth%20Social%20Plan%20(₹8,999).',
      includedHeader: 'Everything in Starter, Plus:',
      features: [
        'Daily High-Res Posts & Carousels (30 Posts/Month)',
        'Management on 7-8 Platforms (IG, FB, LinkedIn, X, GMB, YouTube)',
        '4 Video Reels Edited & Published per Month',
        'Daily Story Creatives & Interactive Polls',
        'DM & Comment Inquiry Answering (Routed to WhatsApp)',
        'Meta Ads Campaign Setup (Lead Gen / Engagement)',
        'Dedicated Account Manager on WhatsApp',
      ],
    },
    {
      name: 'Full Digital Growth Suite',
      badge: 'COMPLETE DIGITAL',
      badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-300',
      price: '₹14,999',
      regularPrice: '₹30,000',
      period: 'per month',
      desc: 'Aggressive multi-channel marketing, influencer outreach strategy & paid ad scaling.',
      popular: false,
      ctaText: 'Scale Digital Growth →',
      ctaUrl: 'https://wa.me/918920683588?text=Hi%20SiteMint!%20I%20want%20the%20Full%20Digital%20Growth%20Suite%20(₹14,999).',
      includedHeader: 'Complete Scale Retainer:',
      features: [
        'Daily Posts + 10 Viral Video Reels per Month',
        'Complete 8-Platform Multi-Channel Omnipresence',
        'Advanced Meta Ads & Google Ads Funnel Management',
        'A/B Creative Testing & Retargeting Pixel Setup',
        '24/7 Fast Response to Inquiries & WhatsApp Leads',
        'Competitor Analysis & Monthly Strategy Roadmap',
        'Dedicated Graphic Designer + Ad Media Buyer',
      ],
    },
  ];

  const currentPlans = 
    activeTab === 'web' ? webPlans :
    activeTab === 'app' ? appPlans :
    activeTab === 'video' ? videoPlans : smmPlans;

  return (
    <section id="pricing" className="pt-8 pb-14 sm:pt-12 sm:pb-20 md:pt-16 md:pb-24 relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-50 border border-violet-200 text-violet-800 text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-3 sm:mb-4 shadow-2xs">
            <Zap className="w-3.5 h-3.5 text-violet-600" /> 100% Transparent Pricing
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-2 sm:mb-4">
            Affordable Plans with <span className="gradient-text-hero">Zero Hidden Charges</span>
          </h2>
          <p className="text-slate-600 text-xs sm:text-base">
            No surprise renewal bills, no hidden holding fees. You get complete source code ownership and transparent project milestones.
          </p>
        </div>

        {/* 4 Interactive Service Switcher Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10 sm:mb-14">
          <button
            onClick={() => setActiveTab('web')}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === 'web'
                ? 'bg-violet-600 text-white shadow-md shadow-violet-600/20 scale-102'
                : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
            }`}
          >
            <Globe className="w-4 h-4" />
            <span>Web & Software Plans</span>
          </button>

          <button
            onClick={() => setActiveTab('app')}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === 'app'
                ? 'bg-violet-600 text-white shadow-md shadow-violet-600/20 scale-102'
                : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
            }`}
          >
            <Smartphone className="w-4 h-4" />
            <span>Mobile App Plans</span>
          </button>

          <button
            onClick={() => setActiveTab('video')}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === 'video'
                ? 'bg-violet-600 text-white shadow-md shadow-violet-600/20 scale-102'
                : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
            }`}
          >
            <Video className="w-4 h-4" />
            <span>Video Editing Plans</span>
          </button>

          <button
            onClick={() => setActiveTab('smm')}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === 'smm'
                ? 'bg-violet-600 text-white shadow-md shadow-violet-600/20 scale-102'
                : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
            }`}
          >
            <Share2 className="w-4 h-4" />
            <span>Social Media Plans</span>
          </button>
        </div>

        {/* 3 Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {currentPlans.map((plan, idx) => (
            <div
              key={idx}
              className={`rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 relative ${
                plan.popular
                  ? 'bg-white border-2 border-violet-500 shadow-xl shadow-violet-500/10 lg:-translate-y-2'
                  : 'bg-white border border-slate-200 hover:border-slate-300 shadow-sm'
              }`}
            >
              {/* Top Section */}
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className={`text-[10px] sm:text-xs font-bold px-3 py-1 rounded-full border ${plan.badgeColor}`}>
                    {plan.badge}
                  </span>
                  {plan.freeDomainHosting && (
                    <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                      ☁️ Domain + Hosting Free
                    </span>
                  )}
                </div>

                {/* Title & Description */}
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-2">
                  {plan.name}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-6">
                  {plan.desc}
                </p>

                {/* Price Display */}
                <div className="mb-6 p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-baseline justify-between">
                  <div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                        {plan.price}
                      </span>
                      <span className="text-xs text-slate-500 font-medium">/{plan.period}</span>
                    </div>
                    <div className="text-[11px] text-slate-400 line-through mt-0.5">
                      Regular Price: {plan.regularPrice}
                    </div>
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">
                    SAVE 65%
                  </span>
                </div>

                {/* 2-Liner Short Client Scope Notice */}
                {plan.clientScope && (
                  <div className="mb-4 p-2.5 rounded-2xl bg-amber-50/90 border border-amber-200 text-[11px] text-amber-900 font-medium leading-relaxed shadow-2xs">
                    {plan.clientScope}
                  </div>
                )}

                {/* Inclusions Header */}
                <div className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
                  {plan.includedHeader}
                </div>

                {/* Feature Inclusions List */}
                <div className="space-y-2.5 mb-6 text-xs text-slate-700">
                  {plan.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                      <span className="leading-snug">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-slate-100">
                <a
                  href={plan.ctaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 shadow-sm ${
                    plan.popular
                      ? 'btn-primary !py-3 justify-center'
                      : 'bg-slate-900 hover:bg-slate-800 text-white justify-center'
                  }`}
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>{plan.ctaText}</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Estimate & WhatsApp Contact CTA Card (Restored) */}
        <div className="mt-12 sm:mt-16">
          <div className="glass-card p-6 sm:p-10 text-center bg-gradient-to-r from-violet-50 via-slate-50 to-teal-50 border border-violet-200 shadow-sm rounded-3xl">
            <h3 className="text-xl sm:text-3xl font-extrabold tracking-tight text-slate-900 mb-2 sm:mb-3">
              Want a Custom Estimate for Your Exact Needs?
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm max-w-xl mx-auto mb-6">
              Use our interactive cost calculator to select specific features, page count, and custom add-ons to get an instant tailored price breakdown.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              <Link 
                href="/calculator" 
                className="btn-primary text-xs sm:text-sm !py-2.5 sm:!py-3 !px-5 sm:!px-6 flex items-center gap-2 shadow-sm"
              >
                <Calculator className="w-4 h-4 text-white" />
                <span>Open Project Cost Calculator</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="https://wa.me/918920683588?text=Hi%20SiteMint!%20I%20want%20a%20custom%20price%20quote%20for%20my%20business%20requirements."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp text-xs sm:text-sm !py-2.5 sm:!py-3 !px-5 sm:!px-6 shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Discuss Custom Scope on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
