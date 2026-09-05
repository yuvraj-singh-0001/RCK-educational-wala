'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  Globe, 
  CheckCircle2, 
  XCircle, 
  MessageCircle, 
  Phone, 
  Mail, 
  Sparkles, 
  Zap, 
  ShieldCheck, 
  Clock, 
  ArrowRight, 
  Calculator, 
  Layers, 
  Server, 
  CreditCard, 
  HelpCircle, 
  FileText, 
  Info, 
  Lock, 
  Check, 
  ChevronRight, 
  Smartphone, 
  TrendingUp, 
  Cpu, 
  Database, 
  SlidersHorizontal,
  Award,
  BarChart3,
  Gauge,
  Code2,
  CheckCheck
} from 'lucide-react';
import RelatedServicesSection from '../../../components/RelatedServicesSection';
import FaqSection from '../../../components/FaqSection';

export default function WebsiteDevelopmentPage() {
  const [activePlanTab, setActivePlanTab] = useState('business');

  const plans = {
    starter: {
      id: 'starter',
      name: 'Starter Website',
      badge: 'STARTER PACK',
      badgeColor: 'bg-slate-100 text-slate-800 border-slate-300',
      price: '₹3,999',
      regularPrice: '₹12,000',
      discount: '66% OFF',
      period: 'One-time investment',
      target: 'Ideal for small businesses, local shops, personal brands, and independent consultants looking to launch a high-speed web presence.',
      deliveryTime: '7 Days Turnaround',
      domainHostingNote: 'Domain & Cloud Server not included in base ₹3,999 (Client buys separately in their name for ~₹3,589/yr, or we assist)',
      domainIncluded: false,
      gmailAlertsNote: '350 Free Transactional / Lead Emails per Day via Gmail API (100% Free of Cost)',
      maintenanceText: '60 Days Free Technical Support & Bug Fixes',
      whatsappMsg: 'Hi SiteMint! I want to order the Starter Website Package (₹3,999). Please share onboarding details.',
      keyPoints: [
        '5 Custom Designed Pages (Home, About, Services, Gallery, Contact)',
        '100% Mobile, Tablet & Desktop Responsive Layout',
        'Sub-2 Second Page Load Speed Optimization on 4G/5G Networks',
        '1-Click WhatsApp Direct Chat & Floating Lead Capture Widget',
        'Contact Form with Instant Email Lead Notifications to Your Inbox',
        '350 Free Lead & Transactional Emails per Day via Gmail API (Zero Software Charges)',
        'Basic Admin Content Management Panel for Text & Image Updates',
        'Google Search Console, XML Sitemap & Robots.txt Setup',
        'Basic On-Page SEO, Meta Titles & Meta Descriptions for Local Google Indexing',
        'Google Maps Location Embed & Click-to-Call Phone Button',
        'Social Media Profile Links & WhatsApp Floating Action Button',
        '60 Days Free Technical Maintenance & Post-Launch Support',
        '100% Full Source Code Ownership with Zero Monthly Lock-in Fees',
      ],
      exclusions: [
        'Domain name & cloud hosting server are not included in base ₹3,999 package',
        'No user login portal or online payment gateway in the Starter package',
        'Third-party paid extensions or SMS credits (if needed) are client responsibility',
      ],
    },
    business: {
      id: 'business',
      name: 'Business Website & Management',
      badge: 'MOST POPULAR CHOICE',
      badgeColor: 'bg-violet-600 text-white border-violet-600',
      price: '₹7,999',
      regularPrice: '₹22,000',
      discount: '63% OFF',
      period: 'One-time investment',
      target: 'Best for growing businesses, restaurants, bakeries, coaching institutes, service portals, and online stores requiring catalog and order management.',
      deliveryTime: '7–10 Days Turnaround',
      domainHostingNote: 'Domain & Cloud Server not included in base ₹7,999 (Client purchases directly or with our assistance)',
      domainIncluded: false,
      gmailAlertsNote: '350 Free Transactional / Order Emails per Day via Gmail API (100% Free of Cost)',
      maintenanceText: '6 Months Free Technical Maintenance & Updates',
      whatsappMsg: 'Hi SiteMint! I want to order the Business Website & Management Package (₹7,999). Please share details.',
      keyPoints: [
        'Up to 10 Dynamic Pages with Custom Category Architecture',
        'Dynamic Product, Service, Course, or Restaurant Menu Catalog',
        'Online Ordering, Booking, and Inquiry Lead Capture Workflow',
        'Razorpay Payment Gateway Integration (UPI, QR, Cards, NetBanking with 0% SiteMint Cut)',
        'Complete Admin Control Panel (Manage Products, View Inquiries, Download Data)',
        '📢 1-Click Mass Email Notification Broadcast to Users (350 Free Daily Emails via Gmail API)',
        'WhatsApp Automated Order & Inquiry Formatted Dispatch System',
        'User Registration, Login & Customer Dashboard (Optional / Included)',
        'Advanced On-Page SEO, Schema.org Structured Data & Google Analytics 4 Setup',
        'SEO-Friendly Clean URLs, Advanced XML Sitemap & Search Console Indexing',
        'Speed Optimization, High-Performance Asset Caching & SSL Support',
        '6 Months Free Technical Maintenance, Content Updates & Bug Fixes',
        '100% Full Source Code Ownership & Complete Data Rights',
      ],
      exclusions: [
        'Domain name & cloud hosting server are not included in base ₹7,999 package',
        'Meta WhatsApp Cloud official API wallet balance or SMS OTP credits (if required) are client responsibility',
      ],
    },
    professional: {
      id: 'professional',
      name: 'Professional Business System',
      badge: 'ALL-IN-ONE SOLUTION • DOMAIN & SERVER INCLUDED',
      badgeColor: 'bg-emerald-600 text-white border-emerald-600',
      price: '₹17,999',
      regularPrice: '₹38,000',
      discount: '52% OFF',
      period: 'One-time investment',
      target: 'Best for established businesses, startups, high-traffic portals, educational institutes, and enterprises needing full cloud infrastructure and custom software.',
      deliveryTime: '10–14 Days Turnaround',
      domainHostingNote: '1 Year High-Speed Cloud Server & Hosting + 1 Year Domain (.IN / .COM) 100% INCLUDED FREE!',
      domainIncluded: true,
      gmailAlertsNote: '350 Free Transactional & Automation Emails per Day via Gmail API (100% Free of Cost)',
      maintenanceText: '1 Full Year Free Technical Maintenance & Priority SLA Support',
      whatsappMsg: 'Hi SiteMint! I want to order the Professional Business System (₹17,999 - Domain + Server Included).',
      keyPoints: [
        'Custom Architecture with Unlimited* Business Pages & Dynamic Routing',
        '1 Year High-Speed Cloud Server & High-Bandwidth Hosting Included (100% FREE)',
        '1 Year Custom Domain Name Included (.IN or .COM) (100% FREE)',
        'Free SSL/HTTPS Certificate & Automated Daily Cloud Database Backups',
        'Complete User Management System (User Registration, Login & Role-Based Portals)',
        'Centralized Multi-Entity Admin Dashboard with Revenue Analytics & CSV Export',
        '📢 1-Click Mass Email Notification Broadcast Engine to All Registered Users (350 Free Emails/Day via Gmail API)',
        'Complete Razorpay Payment Gateway Integration (UPI, QR, Cards, NetBanking, EMI)',
        'WhatsApp Automated Order & Notification Lead Dispatch Integration',
        'Advanced Technical SEO, Schema.org Graph & Rapid Google Indexing Submission',
        '📈 Live Google Analytics 4 (GA4) Traffic & Active User Behavior Dashboard (Track live active users, page hits & traffic sources)',
        'Enterprise High-Concurrency Next.js 15 & React 19 Architecture',
        '1 Full Year Free Comprehensive Technical Maintenance & Priority SLA Support',
        'Professional Business Email Setup & 100% Full Source Code Handover',
      ],
      exclusions: [
        'Optional third-party paid services (e.g. Meta Cloud official paid API conversation wallet, Paid SMS OTP gateway) borne by customer if specifically requested',
      ],
    },
  };

  const activePlan = plans[activePlanTab];

  const architecturalPillars = [
    {
      title: 'Sub-2s Next.js 15 & React 19 Architecture',
      desc: 'Engineered with cutting-edge Server-Side Rendering (SSR) and asset optimization for instantaneous page loads, zero UI lag, and exceptional 95+ Core Web Vitals performance.',
      icon: Gauge,
      color: 'text-violet-700 bg-violet-100',
      bullets: [
        'Sub-1.8 second load time on 4G/5G mobile networks',
        'High-concurrency React 19 component architecture',
        'Reduces user bounce rate by up to 45% compared to legacy CMS',
      ],
    },
    {
      title: '350 Free Daily Transactional & Lead Emails',
      desc: 'Built-in direct Gmail API automation to dispatch instant customer inquiries, lead submissions, and order confirmation receipts at zero third-party software cost.',
      icon: Mail,
      color: 'text-pink-700 bg-pink-100',
      bullets: [
        'Up to 350 emails every single day for 100% free',
        'Instant notifications delivered straight to your inbox',
        'Saves ₹2,500–₹4,000/month on external email marketing tools',
      ],
    },
    {
      title: 'High-Conversion 1-Click WhatsApp Lead Engine',
      desc: 'Convert high-intent visitors into direct buyers with pre-formatted WhatsApp order dispatches, customized inquiries, and sticky mobile floating triggers.',
      icon: MessageCircle,
      color: 'text-emerald-700 bg-emerald-100',
      bullets: [
        'Pre-filled message strings containing item name & customer notes',
        '4.2x higher conversion rate than traditional static inquiry forms',
        'Direct customer phone number retention with 0% platform commission',
      ],
    },
    {
      title: 'Razorpay Instant UPI & Multi-Rail Gateway',
      desc: 'Seamlessly accept Google Pay, PhonePe, Paytm, BHIM UPI, QR Codes, NetBanking, and Debit/Credit Cards with automated invoice generation.',
      icon: CreditCard,
      color: 'text-blue-700 bg-blue-100',
      bullets: [
        'Zero platform commission deductions from SiteMint',
        'Direct-to-bank instant settlement via official merchant gateway',
        'Automated order confirmation email and transaction ledger',
      ],
    },
    {
      title: 'Advanced Technical SEO & Schema.org Graph',
      desc: 'Dominate Google search results and local Maps with automated XML sitemaps, structured data JSON-LD, clean canonical URLs, and keyword-targeted meta tags.',
      icon: Globe,
      color: 'text-amber-700 bg-amber-100',
      bullets: [
        'Rich Schema.org markup (Organization, Service, FAQPage, LocalBusiness)',
        'Clean semantic HTML5 heading hierarchy (H1, H2, H3)',
        'Rapid Google Search Console indexing and local keyword targeting',
      ],
    },
    {
      title: '100% Full Source Code Rights & Zero Lock-In',
      desc: 'You retain complete, unrestricted legal ownership of your source code, cloud database, media assets, and domain credentials with zero recurring holding charges.',
      icon: ShieldCheck,
      color: 'text-sky-700 bg-sky-100',
      bullets: [
        'Zero monthly rental charges or developer hostage fees',
        'Full Git repository access and database credentials transfer',
        'Complete freedom to host on Vercel, AWS, or your own server',
      ],
    },
    {
      title: 'Intuitive Admin Control Dashboard',
      desc: 'Manage your business catalog, update prices, add new service packages, and view live incoming customer leads from a non-technical, user-friendly control portal.',
      icon: BarChart3,
      color: 'text-indigo-700 bg-indigo-100',
      bullets: [
        'Update text, banners, and product photos in under 30 seconds',
        'One-click CSV export of customer leads, inquiries, and orders',
        'Mobile-friendly responsive dashboard accessible from any phone',
      ],
    },
    {
      title: 'Agile 7-Day Turnaround with Dedicated SLA Support',
      desc: 'We follow a streamlined development sprint with live staging previews on your phone before production launch, backed by dedicated post-launch maintenance.',
      icon: Clock,
      color: 'text-teal-700 bg-teal-100',
      bullets: [
        'Standard 5-page business websites live in just 7 business days',
        '60 Days to 1 Full Year complimentary technical maintenance warranty',
        '7-Days-a-week assistance available 9:00 AM to 10:00 PM',
      ],
    },
  ];

  const comparisonRows = [
    {
      metric: 'Page Load Speed & Core Web Vitals',
      sitemint: '⚡ Sub-1.8 Seconds (Next.js 15 SSR)',
      traditional: '🐌 5.5 to 8.0+ Seconds (Heavy CMS Plugins)',
    },
    {
      metric: 'Monthly Platform & Rental Charges',
      sitemint: '₹0 / Month (100% Client Owned Code)',
      traditional: '₹2,500 – ₹6,000 / Month (Recurring Lock-in)',
    },
    {
      metric: 'Daily Transactional Email Automation',
      sitemint: '350 Free Daily Emails (Gmail API Included)',
      traditional: 'Paid 3rd-Party Add-on ($25–$50/Month)',
    },
    {
      metric: 'WhatsApp Lead & Order Conversion',
      sitemint: 'Pre-Formatted 1-Click Direct Chat Engine',
      traditional: 'Basic mailto: link or extra plugin fee',
    },
    {
      metric: 'Source Code & Database Ownership',
      sitemint: '100% Full Code Handover & Git Access',
      traditional: 'Proprietary agency server lock-in',
    },
    {
      metric: 'Delivery & Launch Timeline',
      sitemint: '7 to 10 Business Days (Guaranteed Sprint)',
      traditional: '45 to 90 Days with frequent delays',
    },
  ];

  return (
    <div className="w-full max-w-full overflow-hidden bg-white">
      {/* 1. Hero Section (Clean Split 7 / 5 Layout) */}
      <section className="pt-6 pb-12 sm:pt-10 sm:pb-16 bg-white border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-center">
            {/* Left Column: Headline, Details & Action CTAs */}
            <div className="lg:col-span-7">
              {/* Category Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-50 border border-violet-200 text-violet-800 text-xs font-bold uppercase tracking-wider mb-4 sm:mb-5 shadow-2xs">
                <Globe className="w-3.5 h-3.5 text-violet-600" /> Website Development Studio
              </div>

              {/* Primary Semantic H1 */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-4 sm:mb-5 tracking-tight">
                High-Performance <span className="gradient-text-hero">Website Development</span> in India
              </h1>

              {/* Sub-headline */}
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8 font-normal">
                We design and engineer lightning-fast, mobile-friendly business websites, online stores, coaching admission portals, and custom CRM systems. Starting at just <strong className="text-emerald-700 font-bold">₹3,999</strong> with 7-day delivery, 350 free daily Gmail lead notifications, and 100% full source code ownership.
              </p>

              {/* Action CTAs */}
              <div className="flex flex-wrap gap-3 sm:gap-4 mb-6 sm:mb-8">
                <a
                  href={`https://wa.me/918920683588?text=${encodeURIComponent(activePlan.whatsappMsg)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp text-xs sm:text-sm !py-2.5 sm:!py-3 !px-5 sm:!px-6 shadow-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Start on WhatsApp ({activePlan.price})</span>
                </a>

                <Link
                  href="/calculator"
                  className="btn-secondary text-xs sm:text-sm !py-2.5 sm:!py-3 !px-5 sm:!px-6 flex items-center gap-2"
                >
                  <Calculator className="w-4 h-4 text-violet-600" />
                  <span>Calculate Project Cost</span>
                </Link>
              </div>

              {/* 3 Credibility Trust Pills */}
              <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-slate-500 font-semibold">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" /> 7 Days Fast Delivery
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" /> 350 Free Daily Emails
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" /> 100% Code Ownership
                </span>
              </div>
            </div>

            {/* Right Column: Clean Modern Interactive Pricing Card */}
            <div className="lg:col-span-5">
              <div className="p-5 sm:p-7 bg-white shadow-xl shadow-violet-500/10 border-2 border-violet-200/90 rounded-3xl">
                {/* 3 Plan Switcher Buttons */}
                <div className="grid grid-cols-3 gap-1.5 p-1 bg-slate-100 rounded-2xl mb-4 border border-slate-200">
                  <button
                    onClick={() => setActivePlanTab('starter')}
                    className={`py-2 px-1 text-[11px] sm:text-xs font-bold rounded-xl transition cursor-pointer text-center ${
                      activePlanTab === 'starter'
                        ? 'bg-slate-900 text-white shadow-sm'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-white/70'
                    }`}
                  >
                    Starter
                    <span className="block text-[10px] font-semibold opacity-90">₹3,999</span>
                  </button>

                  <button
                    onClick={() => setActivePlanTab('business')}
                    className={`py-2 px-1 text-[11px] sm:text-xs font-bold rounded-xl transition cursor-pointer text-center ${
                      activePlanTab === 'business'
                        ? 'bg-violet-600 text-white shadow-sm'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-white/70'
                    }`}
                  >
                    Business
                    <span className="block text-[10px] font-semibold opacity-90">₹7,999</span>
                  </button>

                  <button
                    onClick={() => setActivePlanTab('professional')}
                    className={`py-2 px-1 text-[11px] sm:text-xs font-bold rounded-xl transition cursor-pointer text-center ${
                      activePlanTab === 'professional'
                        ? 'bg-emerald-600 text-white shadow-sm'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-white/70'
                    }`}
                  >
                    Pro System
                    <span className="block text-[10px] font-semibold opacity-90">₹17,999</span>
                  </button>
                </div>

                {/* Plan Badge & Delivery */}
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] uppercase font-extrabold tracking-wider text-violet-700 bg-violet-50 px-2.5 py-0.5 rounded-full border border-violet-200">
                    {activePlan.badge}
                  </span>
                  <span className="text-[10px] font-extrabold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300">
                    {activePlan.deliveryTime}
                  </span>
                </div>

                {/* Simple & Bold Price Display */}
                <div className="flex items-baseline gap-2 mb-1.5 mt-2">
                  <span className="text-3xl sm:text-4xl font-extrabold text-slate-900">
                    {activePlan.price}
                  </span>
                  <span className="text-sm text-slate-400 line-through font-semibold">
                    {activePlan.regularPrice}
                  </span>
                  <span className="text-xs text-slate-500 font-medium">
                    ({activePlan.period})
                  </span>
                </div>

                <p className="text-xs text-slate-600 mb-4 leading-relaxed font-normal">
                  {activePlan.target}
                </p>

                {/* Clean Point-by-Point Inclusions List (No Nested Boxes) */}
                <div className="space-y-2.5 text-xs text-slate-800 font-medium pt-3 pb-4 border-t border-b border-slate-200 mb-5">
                  {/* Domain & Hosting Point */}
                  <div className="flex items-start gap-2.5">
                    <span className="text-sm shrink-0 leading-none mt-0.5">
                      {activePlan.domainIncluded ? '🎁' : '⚡'}
                    </span>
                    <span className={activePlan.domainIncluded ? 'text-emerald-800 font-bold' : 'text-slate-800'}>
                      {activePlan.domainIncluded 
                        ? '1 Year Domain (.IN/.COM) & High-Speed Cloud Server Included (100% FREE)' 
                        : 'Domain & Server: Separate (~₹3,589/yr) or assisted by our team'}
                    </span>
                  </div>

                  {/* Gmail Notification Point */}
                  <div className="flex items-start gap-2.5">
                    <span className="text-sm shrink-0 leading-none mt-0.5">📧</span>
                    <span className="text-violet-800 font-bold">
                      350 Free Lead & Order Transactional Emails / Day via Gmail API (Zero Software Fee)
                    </span>
                  </div>

                  {/* Top Deliverable Points */}
                  {activePlan.keyPoints.slice(0, 5).map((point, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="leading-snug">{point}</span>
                    </div>
                  ))}
                </div>

                {/* Action CTA Button */}
                <a
                  href={`https://wa.me/918920683588?text=${encodeURIComponent(activePlan.whatsappMsg)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp w-full justify-center text-xs sm:text-sm py-3.5 shadow-md flex items-center gap-2 font-bold"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Order {activePlan.name} on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Modern Interactive Plan Specifications (Point-by-Point Deep-Dive) */}
      <section className="py-12 sm:py-16 bg-slate-50/70 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Heading */}
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-50 border border-violet-200 text-violet-800 text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-3 shadow-2xs">
              <Zap className="w-3.5 h-3.5 text-violet-600" /> Complete Point-by-Point Breakdown
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mb-2">
              Detailed Plan Inclusions & <span className="gradient-text-hero">Specifications</span>
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm">
              Select any package below to inspect the complete itemized deliverables, email limits, server status, and support durations.
            </p>
          </div>

          {/* 3 Modern Tab Selector Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8">
            <button
              onClick={() => setActivePlanTab('starter')}
              className={`px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2.5 ${
                activePlanTab === 'starter'
                  ? 'bg-slate-900 text-white shadow-lg shadow-slate-900/20 scale-102'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              <div className="w-2 h-2 rounded-full bg-violet-500" />
              <span>Starter Website (₹3,999)</span>
            </button>

            <button
              onClick={() => setActivePlanTab('business')}
              className={`px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2.5 ${
                activePlanTab === 'business'
                  ? 'bg-violet-600 text-white shadow-lg shadow-violet-600/25 scale-102'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              <div className="w-2 h-2 rounded-full bg-white" />
              <span>Business & Management (₹7,999)</span>
            </button>

            <button
              onClick={() => setActivePlanTab('professional')}
              className={`px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2.5 ${
                activePlanTab === 'professional'
                  ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/25 scale-102'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              <div className="w-2 h-2 rounded-full bg-white" />
              <span>Professional System (₹17,999)</span>
            </button>
          </div>

          {/* Detailed Active Plan Panel */}
          <div className="bg-white p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-sm">
            {/* Header Banner */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100 mb-6">
              <div>
                <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full border ${activePlan.badgeColor}`}>
                  {activePlan.badge}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                  {activePlan.name}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
                  {activePlan.target}
                </p>
              </div>

              <div className="text-left sm:text-right shrink-0">
                <div className="text-3xl font-extrabold text-slate-900">
                  {activePlan.price}
                </div>
                <div className="text-xs text-slate-400 line-through">
                  Regular: {activePlan.regularPrice}
                </div>
                <div className="text-[11px] text-emerald-700 font-bold mt-1">
                  ⏱️ {activePlan.deliveryTime}
                </div>
              </div>
            </div>

            {/* Inclusions Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-8">
              <div>
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  Key Inclusions & Features:
                </h4>
                <div className="space-y-2.5">
                  {activePlan.keyPoints.map((pt, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 leading-snug">
                      <Check className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Box: Specs & Transparency Breakdown */}
              <div className="space-y-4">
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 mb-3 flex items-center gap-2">
                  <Info className="w-4 h-4 text-violet-600" />
                  Core Specifications:
                </h4>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 text-xs">
                  <div>
                    <span className="font-bold text-slate-900 block">Domain & Server Status:</span>
                    <span className={`text-xs ${activePlan.domainIncluded ? 'text-emerald-700 font-bold' : 'text-slate-600'}`}>
                      {activePlan.domainHostingNote}
                    </span>
                  </div>

                  <div className="pt-2 border-t border-slate-200/80">
                    <span className="font-bold text-slate-900 block">Gmail Lead & Order Notifications:</span>
                    <span className="text-violet-700 font-bold">
                      {activePlan.gmailAlertsNote}
                    </span>
                  </div>

                  <div className="pt-2 border-t border-slate-200/80">
                    <span className="font-bold text-slate-900 block">Maintenance & Support:</span>
                    <span className="text-slate-700">
                      {activePlan.maintenanceText}
                    </span>
                  </div>

                  <div className="pt-2 border-t border-slate-200/80">
                    <span className="font-bold text-slate-900 block">Payment Terms:</span>
                    <span className="text-slate-700">
                      Upfront milestone booking required for developer allocation and server configuration.
                    </span>
                  </div>
                </div>

                {/* Exclusions Notice */}
                <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200 text-xs space-y-1.5">
                  <div className="font-bold text-amber-900 uppercase text-[10px] tracking-wider">
                    Plan Scope & Third-Party Notes:
                  </div>
                  {activePlan.exclusions.map((exc, idx) => (
                    <div key={idx} className="flex items-start gap-1.5 text-amber-900/90 leading-tight text-[11px]">
                      <Info className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                      <span>{exc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Panel CTA */}
            <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-slate-500 font-medium">
                🔒 100% Free Consultation • Zero Risk Requirement Scoping
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <a
                  href={`https://wa.me/918920683588?text=${encodeURIComponent(activePlan.whatsappMsg)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp text-xs sm:text-sm !py-2.5 sm:!py-3 !px-6 flex-1 sm:flex-initial justify-center shadow-md"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Book {activePlan.name} on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Transparency Guide: Free Inclusions vs Third-Party Customer Scope */}
      <section className="py-12 sm:py-16 bg-white border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-3 shadow-2xs">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> Transparent Pricing Policy
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mb-2">
              What is 100% Free vs <span className="gradient-text-purple">Third-Party Direct Expenses</span>
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm">
              We maintain complete financial clarity so you know exactly what is included in your package without surprise renewal invoices.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {/* Box 1: 100% Free Inclusions */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-emerald-200 shadow-sm">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="p-2.5 rounded-xl bg-emerald-100 text-emerald-700">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-tight">
                    100% Free / Included by SiteMint
                  </h3>
                  <span className="text-[11px] text-emerald-700 font-semibold">
                    No extra development or monthly maintenance fees
                  </span>
                </div>
              </div>

              <div className="space-y-3 text-xs text-slate-700">
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900">350 Free Daily Emails (Gmail API Notification):</strong> Send up to 350 lead inquiries and customer order confirmations every single day for 100% free with zero third-party software subscriptions.
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900">1 Year Server & Domain (In ₹17,999 Pro Plan):</strong> The Professional package includes 1 Year high-speed cloud hosting and custom domain (.IN/.COM) completely free.
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900">1-Click WhatsApp Direct Chat Integration:</strong> Direct customer ordering and customer support without third-party commission deductions.
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900">Razorpay Payment Gateway Setup:</strong> UPI, QR code, and Debit/Credit cards settle directly to your bank account with 0% platform commission from SiteMint.
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900">100% Full Source Code Rights:</strong> You own complete rights to your source code, database, and creatives with zero monthly rental fees.
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900">Google Search Console & SEO Submission:</strong> XML sitemaps, robots.txt, and local Google search indexing included.
                  </div>
                </div>
              </div>
            </div>

            {/* Box 2: Customer / Third-Party Direct Scope */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-amber-200 shadow-sm">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="p-2.5 rounded-xl bg-amber-100 text-amber-700">
                  <Info className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-tight">
                    Customer&apos;s Direct Scope & Third-Party Recharges
                  </h3>
                  <span className="text-[11px] text-amber-700 font-semibold">
                    Applicable only if client chooses specific third-party paid services
                  </span>
                </div>
              </div>

              <div className="space-y-3 text-xs text-slate-700">
                <div className="flex items-start gap-2.5">
                  <Info className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900">Domain & Cloud Server (For ₹3,999 & ₹7,999 Plans):</strong> Starter and Business plans do not include hosting/domain in the base price. Clients purchase directly in their name (~₹3,589/year) or we configure it on their behalf. (Included free in ₹17,999 Pro plan).
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Info className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900">Meta Official WhatsApp Cloud Business API:</strong> If you specifically require Meta&apos;s official enterprise green-tick automated broadcast API, the per-conversation wallet balance is paid directly to Meta. (Standard WhatsApp Click-to-Chat is 100% Free).
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Info className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900">SMS Gateway OTP Balance:</strong> If you select mobile SMS OTP verification instead of Email/WhatsApp alerts, SMS credit recharges are paid directly to the SMS gateway provider.
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Info className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900">Custom Third-Party Paid Extensions:</strong> Any specialized external proprietary software licenses or paid APIs requested by the client are borne directly by the customer.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Upfront Project Milestone & Booking Policy */}
      <section className="py-8 sm:py-12 bg-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 text-white shadow-xl flex flex-col md:flex-row items-center gap-6">
            <div className="p-4 rounded-2xl bg-violet-600 text-white shrink-0">
              <Lock className="w-8 h-8" />
            </div>
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-violet-950 border border-violet-800 text-violet-300 text-[10px] font-bold uppercase tracking-wider mb-2">
                🔒 Project Onboarding & Milestone Policy
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                Payment Verification & Developer Allocation
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                To initiate project development and allocate dedicated software engineers and staging cloud servers, an <strong>upfront milestone payment confirmation</strong> is required. A live interactive preview is shared before final launch, and full source code and admin credentials are transferred upon project approval.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. How to Choose Plan & Interactive Animated Development Workflow */}
      <section className="py-14 sm:py-20 bg-gradient-to-b from-white via-slate-50/50 to-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-50 border border-violet-200 text-violet-800 text-xs font-bold uppercase tracking-wider mb-4 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-violet-600 animate-pulse" /> Transparent 5-Step Process
            </div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-3">
              How to Choose & Launch Your <span className="gradient-text-hero">Website Project</span>
            </h2>
            <p className="text-slate-600 text-xs sm:text-base max-w-2xl mx-auto leading-relaxed">
              From selecting your fixed plan or custom cost to live mobile testing and final code handover—experience an effortless, agile engineering workflow.
            </p>
          </div>

          {/* 5 Modern Animated Step Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mb-14">
            {/* Step 1 */}
            <div className="p-6 rounded-3xl bg-white border-2 border-violet-100 hover:border-violet-400 shadow-sm hover:shadow-xl hover:shadow-violet-500/10 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-violet-100/50 rounded-bl-full -z-0 group-hover:scale-110 transition-transform" />
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-2xl bg-violet-600 text-white flex items-center justify-center font-extrabold text-sm shadow-md shadow-violet-600/30">
                    01
                  </div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-violet-50 text-violet-700 border border-violet-200">
                    Step One
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2">
                  Choose a Plan or Calculate Cost
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Select from our 3 transparent packages (Starter ₹3,999, Business ₹7,999, Pro ₹17,999). Or if you need custom features, launch our instant calculator to tailor your exact budget.
                </p>
              </div>
              <div className="relative z-10 pt-3 border-t border-slate-100 flex items-center justify-between">
                <Link href="/calculator" className="text-xs font-bold text-violet-700 hover:text-violet-900 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  <span>Calculate Custom Cost</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Step 2 */}
            <div className="p-6 rounded-3xl bg-white border-2 border-pink-100 hover:border-pink-400 shadow-sm hover:shadow-xl hover:shadow-pink-500/10 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-pink-100/50 rounded-bl-full -z-0 group-hover:scale-110 transition-transform" />
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-2xl bg-pink-600 text-white flex items-center justify-center font-extrabold text-sm shadow-md shadow-pink-600/30">
                    02
                  </div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-pink-50 text-pink-700 border border-pink-200">
                    Step Two
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2">
                  Share Your Business Details
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Connect with our team on a 15-minute WhatsApp chat or call. Tell us your business niche, target audience, preferred pages, and design style so we understand your exact goals.
                </p>
              </div>
              <div className="relative z-10 pt-3 border-t border-slate-100 flex items-center justify-between">
                <a 
                  href="https://wa.me/918920683588?text=Hi%20SiteMint!%20I%20want%20to%20discuss%20my%20business%20requirements%20for%20website%20development." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-pink-700 hover:text-pink-900 flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                >
                  <span>Discuss Requirements</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Step 3 */}
            <div className="p-6 rounded-3xl bg-white border-2 border-emerald-100 hover:border-emerald-400 shadow-sm hover:shadow-xl hover:shadow-emerald-500/10 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-100/50 rounded-bl-full -z-0 group-hover:scale-110 transition-transform" />
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-2xl bg-emerald-600 text-white flex items-center justify-center font-extrabold text-sm shadow-md shadow-emerald-600/30">
                    03
                  </div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                    Step Three
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2">
                  One-Time Milestone Confirmation
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Confirm your project with a secure one-time payment milestone. We immediately provision cloud staging servers, register domain assets, and assign dedicated developers.
                </p>
              </div>
              <div className="relative z-10 pt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-bold text-emerald-700 flex items-center gap-1">
                  <Lock className="w-3.5 h-3.5" />
                  <span>100% Transparent Billing</span>
                </span>
              </div>
            </div>

            {/* Step 4 */}
            <div className="p-6 rounded-3xl bg-white border-2 border-sky-100 hover:border-sky-400 shadow-sm hover:shadow-xl hover:shadow-sky-500/10 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-sky-100/50 rounded-bl-full -z-0 group-hover:scale-110 transition-transform" />
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-2xl bg-sky-600 text-white flex items-center justify-center font-extrabold text-sm shadow-md shadow-sky-600/30">
                    04
                  </div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-sky-50 text-sky-700 border border-sky-200">
                    Step Four
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2">
                  Sprint Engineering & Live Preview
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  We build your Next.js website within 7 to 10 days. You receive a private interactive staging link to test every button, form, animation, and WhatsApp checkout on your mobile phone.
                </p>
              </div>
              <div className="relative z-10 pt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-bold text-sky-700 flex items-center gap-1">
                  <Smartphone className="w-3.5 h-3.5" />
                  <span>Interactive Phone Demo</span>
                </span>
              </div>
            </div>

            {/* Step 5 */}
            <div className="p-6 rounded-3xl bg-white border-2 border-indigo-100 hover:border-indigo-400 shadow-sm hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden md:col-span-2 lg:col-span-2">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-100/50 rounded-bl-full -z-0 group-hover:scale-110 transition-transform" />
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-2xl bg-indigo-600 text-white flex items-center justify-center font-extrabold text-sm shadow-md shadow-indigo-600/30">
                    05
                  </div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200">
                    Final Step
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2">
                  Final Approval, Go-Live & 100% Code Handover
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4 max-w-xl">
                  Upon your approval, we connect your production domain with SSL, configure 350 free daily Gmail transactional alerts, submit XML sitemaps to Google Search Console, and transfer 100% full source code ownership!
                </p>
              </div>
              <div className="relative z-10 pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs font-bold text-indigo-700 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>100% Code Ownership & Zero Monthly Rental</span>
                </span>
                <a
                  href="https://wa.me/918920683588?text=Hi%20SiteMint!%20I%20am%20ready%20to%20start%20my%20website%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp text-xs !py-2 !px-4 shadow-sm"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Start Your Project Today</span>
                </a>
              </div>
            </div>
          </div>

          {/* Support Timings & Multi-Channel Contact Box */}
          <div className="p-6 sm:p-10 rounded-3xl bg-slate-900 text-white shadow-xl text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-[11px] font-bold uppercase tracking-wider mb-4">
              🟢 Available 9:00 AM to 10:00 PM Every Day (7 Days a Week)
            </div>

            <h3 className="text-xl sm:text-3xl font-extrabold text-white mb-2">
              Have Questions or Need a Custom Quote?
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm max-w-xl mx-auto mb-8">
              You are not limited to phone calls—you can also reach us via WhatsApp or Email anytime. We respond within 15 minutes during business hours!
            </p>

            {/* 3 Contact Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-6">
              <a
                href="https://wa.me/918920683588?text=Hi%20SiteMint!%20I%20have%20an%20inquiry%20regarding%20website%20development%20plans."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp justify-center text-xs sm:text-sm !py-3 shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Chat</span>
              </a>

              <a
                href="tel:+918920683588"
                className="btn-secondary justify-center text-xs sm:text-sm !py-3 bg-white/10 hover:bg-white/20 text-white border-white/20"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>Call +91 89206 83588</span>
              </a>

              <a
                href="mailto:contactsitemint@gmail.com"
                className="btn-secondary justify-center text-xs sm:text-sm !py-3 bg-white/10 hover:bg-white/20 text-white border-white/20 truncate"
              >
                <Mail className="w-4 h-4 text-sky-400" />
                <span>Email Us</span>
              </a>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-slate-400 pt-2 border-t border-slate-800">
              <Link href="/contact" className="hover:text-white transition flex items-center gap-1 font-semibold text-violet-400">
                <span>Visit Contact Page</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <span>•</span>
              <Link href="/calculator" className="hover:text-white transition flex items-center gap-1 font-semibold text-teal-400">
                <span>Open Instant Cost Calculator</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Comprehensive "Why Businesses Choose SiteMint Websites" Showcase */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-50 border border-violet-200 text-violet-800 text-xs font-bold uppercase tracking-wider mb-4 shadow-2xs">
              <Award className="w-3.5 h-3.5 text-violet-600" /> Engineering & Performance Standards
            </div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-3">
              Why Businesses Choose <span className="gradient-text-hero">SiteMint Websites</span>
            </h2>
            <p className="text-slate-600 text-xs sm:text-base leading-relaxed">
              We combine cutting-edge Next.js full-stack engineering, automated email and WhatsApp workflows, and transparent low-budget pricing to help Indian brands scale rapidly with zero vendor lock-in.
            </p>
          </div>

          {/* 8 In-Depth Architectural & Business Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-14 sm:mb-18">
            {architecturalPillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div 
                  key={idx} 
                  className="glass-card p-6 sm:p-7 border border-slate-200 hover:border-violet-300 transition-all duration-300 group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-3 mb-3.5">
                      <div className={`p-2.5 rounded-2xl ${pillar.color} group-hover:scale-105 transition-transform shrink-0 shadow-2xs`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                        {pillar.title}
                      </h3>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                      {pillar.desc}
                    </p>

                    {/* Point-by-point sub-bullets */}
                    <div className="space-y-2 bg-slate-50/80 p-3.5 rounded-2xl border border-slate-100">
                      {pillar.bullets.map((bullet, bIdx) => (
                        <div key={bIdx} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                          <span className="leading-tight">{bullet}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Architectural Comparison Table / Matrix */}
          <div className="p-6 sm:p-10 rounded-3xl bg-slate-900 text-white shadow-xl">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/20 text-violet-300 border border-violet-500/30 text-[11px] font-bold uppercase tracking-wider mb-2">
                ⚡ Performance Benchmark
              </div>
              <h3 className="text-xl sm:text-3xl font-extrabold text-white mb-2">
                SiteMint Next.js Stack vs Traditional Agency Website
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm">
                See the technical and commercial advantages of building with our modern modular architecture.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm border-collapse">
                <thead>
                  <tr className="border-b border-slate-800 text-slate-400 text-[11px] sm:text-xs uppercase font-bold tracking-wider">
                    <th className="py-3 px-3 sm:px-4">Performance Metric</th>
                    <th className="py-3 px-3 sm:px-4 text-emerald-400">SiteMint Solution</th>
                    <th className="py-3 px-3 sm:px-4 text-slate-500">Traditional Agency / WordPress</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/80 text-slate-300 text-xs">
                  {comparisonRows.map((row, rIdx) => (
                    <tr key={rIdx} className="hover:bg-slate-800/40 transition">
                      <td className="py-3.5 px-3 sm:px-4 font-semibold text-white">
                        {row.metric}
                      </td>
                      <td className="py-3.5 px-3 sm:px-4 text-emerald-300 font-semibold">
                        {row.sitemint}
                      </td>
                      <td className="py-3.5 px-3 sm:px-4 text-slate-400">
                        {row.traditional}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-6 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
              <span className="text-slate-400">
                Ready to upgrade your business website to modern Next.js technology?
              </span>
              <a
                href="https://wa.me/918920683588?text=Hi%20SiteMint!%20I%20want%20to%20build%20a%20modern%20Next.js%20website%20for%20my%20business."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp text-xs !py-2.5 !px-5 shadow-sm shrink-0"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Get Started on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Interlinked Related Digital Solutions */}
      <RelatedServicesSection currentService="website-development" />

      {/* 8. FAQs */}
      <FaqSection />
    </div>
  );
}
