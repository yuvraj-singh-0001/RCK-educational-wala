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
      desc: 'Best for Small Businesses, Personal Brands & Local Businesses looking to launch online with high speed.',
      popular: false,
      ctaText: 'Get Started →',
      ctaUrl: 'https://wa.me/918601300910?text=Hi%20SiteMint!%20I%20want%20to%20order%20the%20Starter%20Website%20Package%20(₹3,999).',
      includedHeader: "What's Included:",
      features: [
        '5 Custom Designed Pages (Home, About, Services, Gallery, Contact)',
        '100% Mobile & Tablet Responsive Design',
        'Modern & Professional UI Design',
        '1-Click WhatsApp Direct Chat Integration',
        '1-Click Email / Gmail Contact Integration',
        'Contact Form with Automatic Email Notifications',
        'Enquiry Details delivered directly to your email',
        'Basic Admin Panel & Content Management',
        'Basic On-Page SEO Setup',
        'Google Search Console, Sitemap & Robots.txt Setup',
        'Basic Website Security Setup & Social Media Links',
        'Google Maps & Click-to-Call Integration',
        'Basic Speed Optimization & Deployment Support',
        'Basic Technical Support after launch',
      ],
    },
    {
      name: 'Business Website & Management',
      badge: 'MOST POPULAR',
      badgeColor: 'bg-violet-600 text-white border-violet-600',
      price: '₹7,999',
      regularPrice: '₹22,000',
      period: 'one-time',
      desc: 'Best for Growing Businesses, E-commerce, Restaurants, Coaching & Service Businesses.',
      popular: true,
      ctaText: 'Build My Business Website →',
      ctaUrl: 'https://wa.me/918601300910?text=Hi%20SiteMint!%20I%20want%20to%20order%20the%20Business%20Website%20%26%20Management%20Package%20(₹7,999).',
      includedHeader: 'Everything in Starter, Plus:',
      features: [
        'Up to 10 Dynamic Pages / Custom Categories',
        'Dynamic Product / Service / Course Management',
        'Online Product Catalog & Online Ordering System',
        'User Registration, Login & User Dashboard',
        'Order / Booking & Status Management System',
        'Admin Approval & Verification System',
        'Complete Admin Dashboard (Users, Orders, Enquiries, Data)',
        'Razorpay Payment Gateway (UPI, QR, Cards, NetBanking)',
        'WhatsApp Order & Inquiry Integration + Notification API Support',
        'Automated Email Notifications for Forms & Orders',
        'Advanced On-Page SEO & Schema.org Structured Data',
        'SEO-friendly URLs, Advanced XML Sitemap & Robots.txt',
        'Google Search Console & Google Analytics Setup',
        'Speed & Performance Optimization',
        '6 Months Free Technical Maintenance & Bug Fixes',
      ],
    },
    {
      name: 'Professional Business System',
      badge: 'COMPLETE SOLUTION',
      badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-300',
      price: '₹15,999',
      regularPrice: '₹35,000',
      period: 'one-time',
      desc: 'Best for Established Businesses, Startups, Institutes, Restaurants & Enterprises requiring full management.',
      popular: false,
      ctaText: 'Get Professional Solution →',
      ctaUrl: 'https://wa.me/918601300910?text=Hi%20SiteMint!%20I%20want%20to%20order%20the%20Professional%20Business%20System%20(₹15,999).',
      includedHeader: 'Everything in Business Plan, Plus:',
      freeDomainHosting: true,
      features: [
        '🌐 Complete Custom Website with Unlimited* Business Pages',
        '☁️ 1 Year Domain Included (.IN / .COM)',
        '☁️ 1 Year High-Speed Cloud Hosting & Server Included',
        '👥 Complete User System (Registration, Login, User Portal)',
        '⚙️ Centralized Multi-Entity Admin Dashboard & Reports',
        '💳 Full Razorpay Payment Integration (UPI, QR, Cards & History)',
        '📧 Advanced Email Automation (Up to 300+ emails/day config)',
        '💬 WhatsApp Integration & Automated Alerts Support',
        '🔍 Technical SEO, Meta Optimization & Indexing Setup',
        '⚡ Code Optimization, SSL/HTTPS & Automated Backups',
        '🛠️ 1 Year Free Technical Maintenance & Updates Support',
        '🎁 Professional Business Email Setup & Final Handover',
      ],
    },
  ];

  // 2. Mobile App Development Plans
  const appPlans = [
    {
      name: 'Android Starter App',
      badge: 'ANDROID .APK',
      badgeColor: 'bg-slate-100 text-slate-700 border-slate-200',
      price: '₹12,999',
      regularPrice: '₹28,000',
      period: 'one-time',
      desc: 'Production-ready Android application with Firebase backend and Play Store build.',
      popular: false,
      ctaText: 'Build Android App →',
      ctaUrl: 'https://wa.me/918601300910?text=Hi%20SiteMint!%20I%20want%20the%20Android%20Starter%20App%20(₹12,999).',
      includedHeader: "What's Included:",
      features: [
        'Android (.APK & .AAB) Play Store Ready Build',
        'Up to 8 Core App Screens & Smooth Navigation',
        'Firebase Push Notifications Integration',
        'Cloud Database (MongoDB / Firestore) Backend',
        'Phone Number OTP Login Setup',
        'Razorpay / UPI In-App Payment Integration',
        'Web Admin Panel for Content Updates',
        '3 Months Technical Maintenance Support',
      ],
    },
    {
      name: 'Cross-Platform Pro App',
      badge: 'ANDROID + IOS',
      badgeColor: 'bg-violet-600 text-white border-violet-600',
      price: '₹24,999',
      regularPrice: '₹45,000',
      period: 'one-time',
      desc: 'Complete Flutter cross-platform mobile app running smoothly on both Android and Apple iOS.',
      popular: true,
      ctaText: 'Build Cross-Platform App →',
      ctaUrl: 'https://wa.me/918601300910?text=Hi%20SiteMint!%20I%20want%20the%20Cross-Platform%20Pro%20App%20(₹24,999).',
      includedHeader: 'Everything in Android Plan, Plus:',
      features: [
        'Both Android (.AAB) & iOS (.IPA) Production Builds',
        'Up to 15 Dynamic Screens & Animated UI Transitions',
        'Live Order / Booking Tracking & Real-Time Sync',
        'Custom Role-Based Admin Web Dashboard',
        'Coupon Code & Discount Engine Integration',
        'WhatsApp Alert Notifications & SMS Gateway Support',
        'Google Play Store & Apple App Store Deployment Help',
        '6 Months Free Technical Maintenance',
      ],
    },
    {
      name: 'Custom Enterprise App',
      badge: 'ENTERPRISE SCALE',
      badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-300',
      price: '₹39,999',
      regularPrice: '₹75,000',
      period: 'starting',
      desc: 'Complex on-demand apps (E-Commerce, Delivery, EdTech, Real Estate, or SaaS).',
      popular: false,
      ctaText: 'Discuss Enterprise Scope →',
      ctaUrl: 'https://wa.me/918601300910?text=Hi%20SiteMint!%20I%20have%20an%20Enterprise%20Mobile%20App%20requirement.',
      includedHeader: 'Complete Custom Architecture:',
      features: [
        'Unlimited App Screens & Custom UI/UX Design',
        'Multi-App Ecosystem (Customer App + Delivery/Partner App + Admin)',
        'Live GPS Tracking & Geofencing Location Rules',
        'High-Concurrency Node.js / Go Cloud API Backend',
        'Automated Invoicing & Multi-Vendor Payout Systems',
        '1 Year Cloud Server Setup & Daily Automated Backups',
        '1 Year Comprehensive Technical Maintenance SLA',
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
      ctaUrl: 'https://wa.me/918601300910?text=Hi%20SiteMint!%20I%20want%20to%20order%20Starter%20Reel%20Editing%20(₹499).',
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
      ctaUrl: 'https://wa.me/918601300910?text=Hi%20SiteMint!%20I%20want%20to%20order%20the%20Creator%20Growth%20Pack%20(₹5,999).',
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
      ctaUrl: 'https://wa.me/918601300910?text=Hi%20SiteMint!%20I%20want%20the%20Brand%20Video%20%26%20Ads%20Suite%20(₹11,999).',
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
      ctaUrl: 'https://wa.me/918601300910?text=Hi%20SiteMint!%20I%20want%20the%20Basic%20Social%20Starter%20Plan%20(₹4,999).',
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
      ctaUrl: 'https://wa.me/918601300910?text=Hi%20SiteMint!%20I%20want%20the%20Business%20Growth%20Social%20Plan%20(₹8,999).',
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
      ctaUrl: 'https://wa.me/918601300910?text=Hi%20SiteMint!%20I%20want%20the%20Full%20Digital%20Growth%20Suite%20(₹14,999).',
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
                href="https://wa.me/918601300910?text=Hi%20SiteMint!%20I%20want%20a%20custom%20price%20quote%20for%20my%20business%20requirements."
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
