'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  FaMobileAlt,
  FaAndroid,
  FaApple,
  FaGooglePlay,
  FaWhatsapp,
  FaCalculator,
  FaBell,
  FaShieldAlt,
  FaStar,
  FaUsers,
  FaCheckCircle,
  FaCheck,
  FaCreditCard,
  FaChartBar,
  FaCog,
  FaArrowRight,
  FaRocket,
  FaSearch,
  FaEnvelope,
  FaChartLine,
  FaBolt,
  FaShoppingBag,
  FaUtensils,
  FaGraduationCap,
  FaCalendarAlt,
  FaBirthdayCake,
  FaCoffee,
  FaGift,
  FaTruck,
  FaWrench,
  FaPhoneAlt,
  FaComments,
  FaLock,
  FaKey,
  FaStore,
  FaInfoCircle,
  FaQuestionCircle,
  FaMapPin,
  FaPlay,
  FaWifi,
  FaCoins,
  FaUser
} from 'react-icons/fa';
import { 
  CheckCheck,
  Activity,
  Layers,
  Award,
  Sparkles
} from 'lucide-react';

import RelatedServicesSection from '../../../components/RelatedServicesSection';
import FaqSection from '../../../components/FaqSection';

export default function MobileAppDevelopmentPage() {
  const [activePlanTab, setActivePlanTab] = useState('business');
  const [activeScreenTab, setActiveScreenTab] = useState('ecommerce');
  const [simulatedScreen, setSimulatedScreen] = useState('business'); // 'starter' | 'business' | 'custom'

  const appPlans = {
    starter: {
      id: 'starter',
      name: 'Starter Dual-Platform App (Android + iOS)',
      badge: 'ANDROID + IOS BUILD',
      badgeColor: 'bg-slate-100 text-slate-800 border-slate-300',
      price: '₹12,999',
      regularPrice: '₹28,000',
      discount: '54% OFF',
      period: 'One-time investment',
      target: 'Ideal for local retailers, tutors, restaurants, and startups needing production-ready Android & iOS mobile app builds.',
      deliveryTime: '12–15 Days Turnaround',
      platform: 'Android (.AAB/.APK) + Apple iOS (.IPA)',
      maintenanceText: '30 Days Free Technical Support & Bug Fixes',
      whatsappMsg: 'Hi SiteMint! I want to order the Starter Dual-Platform App (₹12,999). Please share onboarding details.',
      keyPoints: [
        'Both Android (.AAB/.APK) and Apple iOS (.IPA) Builds & Code Included',
        'Up to 6 Custom Designed Core Screens with Gesture Navigation',
        'Firebase Cloud Push Notifications Engine for Broadcast Alerts',
        'Phone Number OTP Login & In-App WhatsApp Direct Lead Button',
        'Basic App Indexing & Google Search Console Submission',
        'Web-Based Admin Dashboard for Content & Banner Updates',
        '30 Days Free Post-Launch Technical Maintenance & Bug Fixes',
        '100% Full Source Code Ownership with Zero Monthly Software Lock-in',
      ],
      exclusions: [
        'Developer Console Fees: Google Play ($25) & Apple ($99/yr) fees paid directly by client to Google/Apple',
        'Cloud Server / Database hosting and third-party API costs paid directly by client',
      ],
    },
    business: {
      id: 'business',
      name: 'Business Pro App (Android + iOS)',
      badge: 'ANDROID + IOS • GMAIL API FREE',
      badgeColor: 'bg-pink-600 text-white border-pink-600',
      price: '₹24,999',
      regularPrice: '₹45,000',
      discount: '44% OFF',
      period: 'One-time investment',
      target: 'Best for growing startups, e-commerce stores, coaching institutes, and service businesses targeting Android & iPhone users.',
      deliveryTime: '18–21 Days Turnaround',
      platform: 'Android + iOS (Cross-Platform Flutter)',
      maintenanceText: '60 Days Comprehensive Technical Maintenance & Updates',
      whatsappMsg: 'Hi SiteMint! I want to order the Business Pro App (₹24,999). Please share details.',
      keyPoints: [
        'Dual Platform Release: Both Android (.AAB) + Apple iOS (.IPA) Flutter Apps',
        'Up to 12 Custom Designed Dynamic Screens & 60fps Micro-Animations',
        '350 Free Lead & Transactional Alert Emails per Day via Gmail API (100% Free)',
        'Razorpay 0% UPI Payment Gateway (GPay, PhonePe, Paytm)',
        'Targeted Segmented Push Notifications (Promotions, Order Status)',
        'Google Analytics 4 (GA4) & App Search Indexing Setup (Track user activity)',
        'Google Play Store & Apple App Store Live Publishing Assistance',
        '60 Days Free Complete Maintenance, Security Patches & Bug Fixes',
        '100% Source Code Ownership with Full API Documentation',
      ],
      exclusions: [
        'Developer Console Fees: Google Play ($25) & Apple ($99/yr) fees paid directly by client to Google/Apple',
        'Third-party paid API credits (WhatsApp API / SMS OTP) borne directly by client',
      ],
    },
    custom: {
      id: 'custom',
      name: 'Professional Custom App (Android + iOS)',
      badge: 'ANDROID + IOS • PLAY STORE FEE FREE',
      badgeColor: 'bg-emerald-600 text-white border-emerald-600',
      price: '₹39,999',
      regularPrice: '₹75,000',
      discount: '47% OFF',
      period: 'One-time investment',
      target: 'For ambitious businesses needing 16 to 22 custom screens, complex workflows, and 9 months free technical maintenance.',
      deliveryTime: '25–30 Days Timeline',
      platform: 'Android + iOS + Master Admin Web Portal',
      maintenanceText: '9 Months Dedicated Technical Maintenance & Bug Fixing Guarantee',
      whatsappMsg: 'Hi SiteMint! I want to order the Professional Custom App (₹39,999 - Play Store Fee Included).',
      keyPoints: [
        'Dual-Platform Release: Both Android (.AAB) + Apple iOS (.IPA) High-Performance Apps',
        '16 to 22 Custom Dynamic App Screens & Advanced Business Workflows',
        'Google Play Store Publishing Account Fee ($25) INCLUDED FREE by SiteMint',
        '350 Free Lead & Transactional Alert Emails per Day via Gmail API',
        'Live Google Analytics 4 (GA4) Traffic & Active App Users Tracking Dashboard',
        'Centralized Master Web Admin Dashboard (Users, Orders, Revenue & CSV Export)',
        'Integrated Razorpay 0% UPI Gateway with In-App Invoices',
        '9 Months Free Comprehensive Technical Maintenance & Bug Fixing Guarantee',
        '100% Full Source Code & Repository Transfer',
      ],
      exclusions: [
        'Third-party paid API licenses (Meta WhatsApp API, SMS Gateway) borne directly by client if required',
        'High-concurrency cloud hosting / database costs paid directly by client at actuals',
      ],
    },
  };

  const interactiveScreens = {
    ecommerce: {
      title: 'E-Commerce & Retail Store App',
      subtitle: 'Native shopping experience with 1-tap UPI checkout',
      category: 'E-COMMERCE & RETAIL',
      features: [
        'Dynamic Product Catalog with Size/Color Variants',
        '1-Tap Razorpay UPI & Cash on Delivery (COD) Options',
        'Live Order Status Tracking with SMS/Push Alerts',
        'Personalized Coupon Code & Promotional Discount Engine',
      ],
      demoImg: 'Direct-to-Consumer Storefront with Sub-Second Product Search',
    },
    food: {
      title: 'Restaurant & Food Delivery App',
      subtitle: '0% commission direct customer ordering engine',
      category: 'FOOD & RESTAURANT TECH',
      features: [
        'Visual Menu with Custom Cake/Pizza Modifiers',
        'Live Kitchen Preparation & Delivery Partner Dispatch',
        'Direct UPI Payments with Zero Aggregator Commissions',
        'Automated Repeat Order Re-Order Button in 1 Tap',
      ],
      demoImg: 'Interactive Food Menu with Custom Toppings & Instant Checkout',
    },
    education: {
      title: 'Coaching Institute & EdTech LMS App',
      subtitle: 'Video lectures, mock tests, and student progress tracking',
      category: 'EDUCATION & EDTECH',
      features: [
        'DRM-Protected Video Lecture Playback (Anti-Piracy)',
        'Online MCQ Mock Tests with Instant Rank Analysis',
        'Downloadable Offline PDF Study Material & Notes',
        'Parent Notice Board & Fee Payment Gateway',
      ],
      demoImg: 'Student Learning Dashboard with Video Player & Test Series',
    },
    services: {
      title: 'On-Demand Service Booking App',
      subtitle: 'Salon, repair, consulting, and home service scheduling',
      category: 'ON-DEMAND SERVICES',
      features: [
        'Time-Slot Booking Calendar with Provider Availability',
        'In-App Chat & Direct WhatsApp Coordination',
        'Advance Booking Token Payment via UPI',
        'Customer Reviews & Verified Star Rating System',
      ],
      demoImg: 'Real-Time Appointment Booking with Instant Confirmation',
    },
  };

  const capabilities = [
    {
      num: '01',
      icon: FaBell,
      title: 'Automated Push Notifications',
      desc: 'Re-engage users with rich push alerts, festive discount offers, abandoned cart reminders, and live order status directly on mobile lock screens.',
      badge: '3.5x Engagement',
      badgeColor: 'bg-pink-100 text-pink-800 border-pink-300',
      gradient: 'from-pink-500/10 via-pink-500/5 to-transparent',
      borderClass: 'border-2 border-pink-300 hover:border-pink-500 shadow-sm hover:shadow-pink-500/10',
      preview: {
        type: 'push',
        title: 'Flash Sale Alert!',
        subtitle: 'Flat 30% OFF ending in 2 hours',
        time: 'Just now'
      }
    },
    {
      num: '02',
      icon: FaCreditCard,
      title: 'Native 0% UPI & Razorpay Checkout',
      desc: 'Seamless in-app payments with Google Pay, PhonePe, Paytm, CRED, and cards without cumbersome redirects, maximizing checkout completion rates.',
      badge: 'Zero Platform Cut',
      badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-300',
      gradient: 'from-emerald-500/10 via-emerald-500/5 to-transparent',
      borderClass: 'border-2 border-emerald-300 hover:border-emerald-500 shadow-sm hover:shadow-emerald-500/10',
      preview: {
        type: 'upi',
        title: 'Razorpay Instant UPI',
        subtitle: 'GPay • PhonePe • Paytm • CRED',
        tag: '0% Fee'
      }
    },
    {
      num: '03',
      icon: FaWifi,
      title: 'Offline Mode & Local SQLite Cache',
      desc: 'Engineered with SQLite and Hive caching so users can view catalogs, downloaded notes, and previous orders even with spotty connectivity.',
      badge: 'Zero Lag Speed',
      badgeColor: 'bg-sky-100 text-sky-800 border-sky-300',
      gradient: 'from-sky-500/10 via-sky-500/5 to-transparent',
      borderClass: 'border-2 border-sky-300 hover:border-sky-500 shadow-sm hover:shadow-sky-500/10',
      preview: {
        type: 'cache',
        title: 'Offline Data Sync',
        subtitle: '100% catalog stored on device',
        tag: 'Instant Load'
      }
    },
    {
      num: '04',
      icon: FaKey,
      title: 'Phone Number OTP & Biometrics',
      desc: 'Frictionless 1-tap login with SMS/WhatsApp OTP, Google Sign-In, and Apple FaceID/TouchID for maximum user security and low drop-offs.',
      badge: 'Zero Passwords',
      badgeColor: 'bg-purple-100 text-purple-800 border-purple-300',
      gradient: 'from-purple-500/10 via-purple-500/5 to-transparent',
      borderClass: 'border-2 border-purple-300 hover:border-purple-500 shadow-sm hover:shadow-purple-500/10',
      preview: {
        type: 'auth',
        title: 'Frictionless Auth',
        subtitle: 'Auto-detecting 6-Digit SMS OTP',
        tag: '1-Tap Login'
      }
    },
    {
      num: '05',
      icon: FaCog,
      title: 'Web Admin Dashboard Included',
      desc: 'Manage your entire mobile app ecosystem—add products, send push notifications, review orders, and view sales charts from any browser.',
      badge: 'Full Business Control',
      badgeColor: 'bg-indigo-100 text-indigo-800 border-indigo-300',
      gradient: 'from-indigo-500/10 via-indigo-500/5 to-transparent',
      borderClass: 'border-2 border-indigo-300 hover:border-indigo-500 shadow-sm hover:shadow-indigo-500/10',
      preview: {
        type: 'admin',
        title: 'Master Admin Control',
        subtitle: 'Live Orders, Push Dispatch, GMV',
        tag: 'Web & Mobile'
      }
    },
    {
      num: '06',
      icon: FaPlay,
      title: 'Play Store & App Store Launch',
      desc: 'We handle the complete production build, signing keystores, app icons, privacy policy compliance, and submission technical requirements.',
      badge: '100% Submission Help',
      badgeColor: 'bg-amber-100 text-amber-800 border-amber-300',
      gradient: 'from-amber-500/10 via-amber-500/5 to-transparent',
      borderClass: 'border-2 border-amber-300 hover:border-amber-500 shadow-sm hover:shadow-amber-500/10',
      preview: {
        type: 'store',
        title: 'Dual Store Approved',
        subtitle: 'Google Play .AAB + Apple .IPA',
        tag: 'Official Build'
      }
    },
  ];

  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://sitemint.in/#organization',
        name: 'SiteMint',
        url: 'https://sitemint.in',
        logo: {
          '@type': 'ImageObject',
          url: 'https://sitemint.in/sitemint_logo1.png',
        },
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+91-8920683588',
          contactType: 'customer service',
          areaServed: 'IN',
          availableLanguage: ['English', 'Hindi'],
        },
      },
      {
        '@type': 'Service',
        '@id': 'https://sitemint.in/services/mobile-app-development#service',
        name: 'Custom Mobile App Development Services in India',
        serviceType: 'Mobile Application Development',
        provider: {
          '@id': 'https://sitemint.in/#organization',
        },
        areaServed: {
          '@type': 'Country',
          name: 'India',
        },
        description:
          'Custom Android and iOS mobile app development starting at ₹12,999 with in-app Razorpay 0% UPI checkout, 350 free daily Gmail lead emails, Play Store publishing assistance, and up to 9 months free technical maintenance with 100% full source code ownership.',
        offers: [
          {
            '@type': 'Offer',
            name: 'Starter Dual-Platform App (Android + iOS)',
            price: '12999',
            priceCurrency: 'INR',
            availability: 'https://schema.org/InStock',
            validFrom: '2026-01-01',
          },
          {
            '@type': 'Offer',
            name: 'Business Pro App (Android + iOS)',
            price: '24999',
            priceCurrency: 'INR',
            availability: 'https://schema.org/InStock',
            validFrom: '2026-01-01',
          },
          {
            '@type': 'Offer',
            name: 'Professional Custom App (16-22 Screens)',
            price: '39999',
            priceCurrency: 'INR',
            availability: 'https://schema.org/InStock',
            validFrom: '2026-01-01',
          },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'How much does mobile app development cost in India?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'At SiteMint, mobile app development starts at ₹12,999 for the Starter Dual-Platform App (Android + iOS builds, 6 screens, 30 days free support). The Business Pro App is ₹24,999 (12 screens, 350 free daily Gmail emails, 60 days support). The Professional Custom App is ₹39,999 (16-22 screens, Google Play Store publishing fee included free by SiteMint, 9 months support).',
            },
          },
          {
            '@type': 'Question',
            name: 'Is the Google Play Store publishing fee included?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'The $25 Google Play Store publishing fee is 100% INCLUDED FREE by SiteMint in our Professional Custom App (₹39,999). For Starter and Business plans, client pays developer console fees directly to Google ($25) / Apple ($99), while SiteMint provides full live publishing assistance.',
            },
          },
          {
            '@type': 'Question',
            name: 'Do I get 100% full source code ownership?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes! You receive 100% complete source code ownership, Flutter / React Native codebases, keystores, and database credentials with zero monthly platform rentals or developer lock-in fees.',
            },
          },
          {
            '@type': 'Question',
            name: 'How long is the free maintenance and support period?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Starter App includes 30 Days free support, Business Pro includes 60 Days free support, and Professional Custom App includes 9 Months free technical maintenance and bug fixing guarantee.',
            },
          },
        ],
      },
    ],
  };

  const selectedPlan = appPlans[activePlanTab];
  const selectedScreen = interactiveScreens[activeScreenTab];

  // Helper to switch plan both in table & simulator
  const handleSelectPlan = (planId) => {
    setActivePlanTab(planId);
    setSimulatedScreen(planId);
  };

  return (
    <section className="relative overflow-hidden w-full pt-8 pb-14 sm:pt-14 sm:pb-20 md:pt-16 md:pb-24 bg-white border-b border-slate-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Background Animated Subtle Gradient Orbs */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none -z-10">
        <div className="absolute -top-16 left-1/4 w-64 h-64 sm:w-80 sm:h-80 bg-violet-100/50 rounded-full blur-3xl animate-float" />
        <div className="absolute top-1/3 right-1/4 w-64 h-64 sm:w-80 sm:h-80 bg-teal-100/40 rounded-full blur-3xl animate-float-reverse" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Split Hero Section (2 Columns on Laptop/Desktop, Centered Stack on Mobile) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center mb-10 sm:mb-14">
          
          {/* Left Text Column */}
          <div className="lg:col-span-5 xl:col-span-5 text-center lg:text-left flex flex-col items-center lg:items-start">
            {/* Animated Top Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-violet-50/90 border border-violet-200/90 text-violet-800 text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-5 sm:mb-6 shadow-2xs hover:scale-105 transition-transform cursor-default">
              <FaMobileAlt className="w-3.5 h-3.5 text-violet-600 animate-pulse" />
              <span>Native Android & iOS Engineering Studio</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-5xl md:text-5xl lg:text-4xl xl:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.15] mb-4 sm:mb-6 font-sans">
              Custom <span className="gradient-text-hero">Mobile App Development</span> for Indian Businesses
            </h1>

            {/* Subheading */}
            <p className="text-sm sm:text-lg md:text-xl text-slate-600 max-w-2xl lg:max-w-none mb-8 sm:mb-10 font-normal leading-relaxed">
              Turn your business into an app in your customer’s pocket. We engineer ultra-smooth Android (.APK/AAB) and iOS mobile applications with instant OTP login, automated push notifications, and native 0% UPI payments.
            </p>

            {/* Action CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-3.5 w-full sm:w-auto">
              <a
                href={`https://wa.me/918920683588?text=Hi%20SiteMint!%20I%20want%20to%20discuss%20a%20Mobile%20App%20project%20for%20my%20business.`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp btn-shine text-xs sm:text-sm !py-2.5 sm:!py-3 !px-5 sm:!px-6 shadow-md shadow-green-600/20 w-full sm:w-auto justify-center group flex items-center gap-2"
              >
                <FaWhatsapp className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span>Discuss App Idea on WhatsApp</span>
                <FaArrowRight className="w-3.5 h-3.5 ml-0.5" />
              </a>

              <Link
                href="/calculator"
                className="btn-secondary btn-shine text-xs sm:text-sm !py-2.5 sm:!py-3 !px-5 sm:!px-6 flex items-center justify-center gap-2 w-full sm:w-auto font-bold group"
              >
                <FaCalculator className="w-3.5 h-3.5 text-violet-600 group-hover:rotate-12 transition-transform" />
                <span>Calculate App Cost</span>
                <FaArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-1 group-hover:text-violet-600 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right Image Showcase Column (Matching Homepage Hero) */}
          <div className="lg:col-span-7 xl:col-span-7 relative justify-center items-center flex mt-6 lg:mt-0">
            <div className="relative w-full lg:scale-105 xl:scale-110 transform origin-center">
              {/* Soft Gradient Backdrop Glow */}
              <div className="absolute -inset-6 bg-gradient-to-tr from-violet-300/40 via-sky-200/40 to-emerald-200/40 rounded-3xl blur-3xl -z-10" />
              <img
                src="/apphero.png"
                alt="SiteMint Custom Mobile App Development Showcase"
                className="w-full h-auto object-contain drop-shadow-2xl pointer-events-none select-none"
              />
            </div>
          </div>

        </div>

        {/* 4 Feature Value Pills matching Homepage Hero */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3.5 max-w-5xl mx-auto mb-10 sm:mb-14 text-left">
          <div className="p-3 sm:p-3.5 rounded-2xl bg-white/90 border border-emerald-200/90 bg-emerald-50/20 shadow-xs flex items-center gap-2.5 sm:gap-3 cursor-default min-w-0">
            <div className="p-2 sm:p-2.5 rounded-xl bg-emerald-50 text-emerald-600 ring-1 ring-emerald-500/10 shrink-0">
              <FaGooglePlay className="w-4 h-4 sm:w-4 sm:h-4" />
            </div>
            <div className="min-w-0">
              <div className="text-[12px] sm:text-[13px] font-bold text-slate-900 leading-tight truncate">PlayStore Ready</div>
              <div className="text-[10px] text-slate-500 truncate mt-0.5">Android & iOS Build</div>
            </div>
          </div>

          <div className="p-3 sm:p-3.5 rounded-2xl bg-white/90 border border-violet-200/90 bg-violet-50/20 shadow-xs flex items-center gap-2.5 sm:gap-3 cursor-default min-w-0">
            <div className="p-2 sm:p-2.5 rounded-xl bg-violet-50 text-violet-600 ring-1 ring-violet-500/10 shrink-0">
              <FaBell className="w-4 h-4 sm:w-4 sm:h-4" />
            </div>
            <div className="min-w-0">
              <div className="text-[12px] sm:text-[13px] font-bold text-slate-900 leading-tight truncate">Push Notifications</div>
              <div className="text-[10px] text-slate-500 truncate mt-0.5">Firebase Automation</div>
            </div>
          </div>

          <div className="p-3 sm:p-3.5 rounded-2xl bg-white/90 border border-sky-200/90 bg-sky-50/20 shadow-xs flex items-center gap-2.5 sm:gap-3 cursor-default min-w-0">
            <div className="p-2 sm:p-2.5 rounded-xl bg-sky-50 text-sky-600 ring-1 ring-sky-500/10 shrink-0">
              <FaCreditCard className="w-4 h-4 sm:w-4 sm:h-4" />
            </div>
            <div className="min-w-0">
              <div className="text-[12px] sm:text-[13px] font-bold text-slate-900 leading-tight truncate">Razorpay UPI Inside</div>
              <div className="text-[10px] text-slate-500 truncate mt-0.5">0% Platform Cut</div>
            </div>
          </div>

          <div className="p-3 sm:p-3.5 rounded-2xl bg-white/90 border border-teal-200/90 bg-teal-50/20 shadow-xs flex items-center gap-2.5 sm:gap-3 cursor-default min-w-0">
            <div className="p-2 sm:p-2.5 rounded-xl bg-teal-50 text-teal-600 ring-1 ring-teal-500/10 shrink-0">
              <FaCog className="w-4 h-4 sm:w-4 sm:h-4" />
            </div>
            <div className="min-w-0">
              <div className="text-[12px] sm:text-[13px] font-bold text-slate-900 leading-tight truncate">Web Admin Panel</div>
              <div className="text-[10px] text-slate-500 truncate mt-0.5">Manage Everything</div>
            </div>
          </div>
        </div>

        {/* Tailored Mobile App Solutions by Industry */}
        <div className="mb-20 sm:mb-24">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-50 border border-pink-200 text-pink-800 text-xs font-bold uppercase tracking-wider mb-3 shadow-2xs">
              <Layers className="w-3.5 h-3.5 text-pink-600" />
              <span>Industry Architectures</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 leading-tight font-sans">
              Tailored Mobile App Solutions <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">By Industry</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto mt-2">
              Select your business model to explore how our specialized app architectures drive repeat customer engagement and 0% commission ordering.
            </p>
          </div>

          {/* Horizontal Interactive Tab Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 mb-8">
            {Object.keys(interactiveScreens).map((key) => {
              const item = interactiveScreens[key];
              const isSelected = activeScreenTab === key;
              const TabIcon = key === 'ecommerce' ? FaShoppingBag : key === 'food' ? FaUtensils : key === 'education' ? FaGraduationCap : FaWrench;
              return (
                <button
                  key={key}
                  onClick={() => setActiveScreenTab(key)}
                  className={`px-4 sm:px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
                    isSelected
                      ? 'bg-pink-600 text-white shadow-md scale-105'
                      : 'bg-white text-slate-700 border border-slate-200/80 hover:border-pink-300 hover:bg-pink-50/40'
                  }`}
                >
                  <TabIcon className="w-4 h-4" />
                  <span>{item.title.split(' ')[0]} {item.title.split(' ')[1]}</span>
                </button>
              );
            })}
          </div>

          {/* Large Premium Showcase Card */}
          <div className="p-6 sm:p-10 rounded-3xl bg-white border-2 border-slate-200/90 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative overflow-hidden">
            
            {/* Left Column */}
            <div className="lg:col-span-6">
              <span className="inline-block px-3 py-1 rounded-full bg-pink-50 text-pink-800 border border-pink-200 text-xs font-bold uppercase tracking-wider mb-3">
                {selectedScreen.category}
              </span>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3 font-sans leading-tight">
                {selectedScreen.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                {selectedScreen.subtitle}
              </p>

              <div className="space-y-2.5 mb-8">
                {selectedScreen.features.map((feat, fIdx) => (
                  <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                    <FaCheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href={`https://wa.me/918920683588?text=Hi%20SiteMint!%20I%20want%20to%20build%20a%20${encodeURIComponent(selectedScreen.title)}.%20Please%20share%20timeline%20and%20pricing.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#00A86B] hover:bg-[#008f5b] text-white text-xs font-bold py-3 px-6 rounded-2xl shadow-xs inline-flex items-center gap-2 transition-all"
                >
                  <FaWhatsapp className="w-4 h-4" />
                  <span>Order {selectedScreen.title.split(' ')[0]} App</span>
                </a>

                <Link
                  href="/calculator"
                  className="bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 text-xs font-bold py-3 px-5 rounded-2xl inline-flex items-center gap-1.5 transition-all"
                >
                  <FaCalculator className="w-3.5 h-3.5 text-pink-600" />
                  <span>Calculate Cost</span>
                </Link>
              </div>
            </div>

            {/* Right Column: Interactive Showcase Terminal */}
            <div className="lg:col-span-6">
              <div className="p-6 sm:p-7 rounded-3xl bg-slate-950 text-white border border-slate-800 shadow-2xl relative overflow-hidden">
                
                {/* Header Strip */}
                <div className="flex items-center justify-between pb-3.5 border-b border-slate-800/80 mb-5 text-xs">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    </div>
                    <span className="text-[11px] text-slate-400 font-mono font-medium ml-1">
                      {selectedScreen.category.toLowerCase().replace(/\s+/g, '-')}-arch.v2
                    </span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-pink-500/20 text-pink-300 text-[10px] font-bold">
                    0% Commission Engine
                  </span>
                </div>

                {activeScreenTab === 'ecommerce' && (
                  <div className="space-y-3">
                    <div className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800">
                      <div className="flex justify-between items-center text-xs font-bold mb-1">
                        <span className="text-white flex items-center gap-1.5">
                          <FaShoppingBag className="text-pink-400" /> D2C Storefront Catalog & Checkout
                        </span>
                        <span className="text-emerald-400 font-mono">1.2s Fast</span>
                      </div>
                      <p className="text-[11px] text-slate-400 leading-relaxed">
                        Pre-rendered product catalogs with sub-second search, size/color pickers, and 1-tap Razorpay UPI checkout.
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-2.5 text-xs">
                      <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                        <div className="font-bold text-pink-300 mb-0.5 flex items-center gap-1">
                          <FaCreditCard /> 0% Aggregator Cut
                        </div>
                        <div className="text-[10px] text-slate-400">Direct settlement into your merchant bank account.</div>
                      </div>
                      <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                        <div className="font-bold text-purple-300 mb-0.5 flex items-center gap-1">
                          <FaBell /> Abandoned Cart Push
                        </div>
                        <div className="text-[10px] text-slate-400">Automated lock-screen discount alerts for drop-offs.</div>
                      </div>
                    </div>
                  </div>
                )}

                {activeScreenTab === 'food' && (
                  <div className="space-y-3">
                    <div className="p-3.5 rounded-2xl bg-slate-900 border border-amber-500/40">
                      <div className="flex justify-between items-center text-xs font-bold mb-1">
                        <span className="text-white flex items-center gap-1.5">
                          <FaUtensils className="text-amber-400" /> Custom Cake & Online Bakery Engine
                        </span>
                        <span className="text-emerald-400 font-mono">Save ₹25k+/Mo</span>
                      </div>
                      <p className="text-[11px] text-slate-400 leading-relaxed">
                        Allows customers to customize weight (0.5kg/1kg), eggless preference, and write custom birthday messages on cakes with 1-click WhatsApp order dispatch.
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-2.5 text-xs">
                      <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                        <div className="font-bold text-amber-300 mb-0.5 flex items-center gap-1">
                          <FaUsers /> Direct Customer CRM
                        </div>
                        <div className="text-[10px] text-slate-400">Build your own phone database for festival campaigns.</div>
                      </div>
                      <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                        <div className="font-bold text-emerald-300 mb-0.5 flex items-center gap-1">
                          <FaTruck /> Pincode Delivery Rate
                        </div>
                        <div className="text-[10px] text-slate-400">Dynamic delivery fee calculation by distance radius.</div>
                      </div>
                    </div>
                  </div>
                )}

                {activeScreenTab === 'education' && (
                  <div className="space-y-3">
                    <div className="p-3.5 rounded-2xl bg-slate-900 border border-sky-500/40">
                      <div className="flex justify-between items-center text-xs font-bold mb-1">
                        <span className="text-white flex items-center gap-1.5">
                          <FaGraduationCap className="text-sky-400" /> Anti-Piracy LMS & Mock Test System
                        </span>
                        <span className="text-emerald-400 font-mono">DRM Encrypted</span>
                      </div>
                      <p className="text-[11px] text-slate-400 leading-relaxed">
                        Screen-recording protected video player for paid coaching batches, timed online MCQ mock tests, and instant topper rank leaderboards.
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-2.5 text-xs">
                      <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                        <div className="font-bold text-sky-300 mb-0.5 flex items-center gap-1">
                          <FaChartBar /> Rank Leaderboards
                        </div>
                        <div className="text-[10px] text-slate-400">Instant percentiles and subject-wise score analytics.</div>
                      </div>
                      <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                        <div className="font-bold text-indigo-300 mb-0.5 flex items-center gap-1">
                          <FaLock /> Offline PDF Reader
                        </div>
                        <div className="text-[10px] text-slate-400">Encrypted in-app notes viewer preventing forwarding.</div>
                      </div>
                    </div>
                  </div>
                )}

                {activeScreenTab === 'services' && (
                  <div className="space-y-3">
                    <div className="p-3.5 rounded-2xl bg-slate-900 border border-emerald-500/40">
                      <div className="flex justify-between items-center text-xs font-bold mb-1">
                        <span className="text-white flex items-center gap-1.5">
                          <FaCalendarAlt className="text-emerald-400" /> On-Demand Service Scheduling
                        </span>
                        <span className="text-emerald-400 font-mono">Instant Confirmation</span>
                      </div>
                      <p className="text-[11px] text-slate-400 leading-relaxed">
                        Time-slot booking calendar with provider availability, advance UPI token payment, and in-app WhatsApp communication.
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-2.5 text-xs">
                      <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                        <div className="font-bold text-emerald-300 mb-0.5 flex items-center gap-1">
                          <FaCalendarAlt /> Time-Slot Booking
                        </div>
                        <div className="text-[10px] text-slate-400">Real-time scheduling with automatic provider dispatch.</div>
                      </div>
                      <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                        <div className="font-bold text-amber-300 mb-0.5 flex items-center gap-1">
                          <FaStar /> Star Ratings
                        </div>
                        <div className="text-[10px] text-slate-400">Verified customer feedback and review system.</div>
                      </div>
                    </div>
                  </div>
                )}

              </div>
            </div>

          </div>
        </div>

        {/* Core Capabilities Section */}
        <div className="mb-20 sm:mb-24">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-50 border border-pink-200 text-pink-800 text-xs font-bold uppercase tracking-wider mb-3 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-pink-600" />
              <span>Native Features</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 leading-tight font-sans">
              Engineered For High Retention & <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Zero Platform Cut</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap) => {
              const CapIcon = cap.icon;
              return (
                <div
                  key={cap.num}
                  className={`p-6 rounded-3xl bg-gradient-to-br ${cap.gradient} bg-white ${cap.borderClass} transition-all duration-300 flex flex-col justify-between group`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-pink-600 font-bold group-hover:scale-110 transition-transform">
                        <CapIcon className="w-6 h-6" />
                      </div>
                      <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full border ${cap.badgeColor}`}>
                        {cap.badge}
                      </span>
                    </div>

                    <h3 className="text-lg font-extrabold text-slate-900 mb-2 font-sans">
                      {cap.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed mb-6">
                      {cap.desc}
                    </p>
                  </div>

                  <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200/90 text-slate-700 text-xs flex items-center justify-between group-hover:bg-white group-hover:border-pink-300 transition-colors">
                    <div className="truncate pr-2">
                      <div className="font-bold text-[11px] text-slate-900 flex items-center gap-1.5 truncate">
                        <span className="w-1.5 h-1.5 rounded-full bg-pink-500 shrink-0" />
                        <span className="truncate">{cap.preview.title}</span>
                      </div>
                      <div className="text-[10px] text-slate-500 truncate mt-0.5">
                        {cap.preview.subtitle}
                      </div>
                    </div>
                    <span className="text-[9px] font-mono font-bold px-2 py-0.5 rounded bg-slate-200/80 text-slate-800 shrink-0 group-hover:bg-pink-100 group-hover:text-pink-800 transition-colors">
                      {cap.preview.tag || cap.preview.time}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Pricing Tiers Section */}
        <div className="mb-16 sm:mb-20" id="pricing-tiers">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-50 text-pink-700 border border-pink-200 text-xs font-bold uppercase tracking-wider mb-2">
              <Award className="w-3.5 h-3.5" /> Transparent App Pricing
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 font-sans">
              Choose Your Mobile App Package
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              One-time transparent pricing with 100% full source code ownership. Zero recurring monthly platform rentals.
            </p>
          </div>

          <div className="flex justify-center mb-8">
            <div className="inline-flex p-1.5 rounded-2xl bg-slate-100 border border-slate-200">
              <button
                onClick={() => handleSelectPlan('starter')}
                className={`px-4 sm:px-6 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  activePlanTab === 'starter'
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Starter Android (₹12,999)
              </button>
              <button
                onClick={() => handleSelectPlan('business')}
                className={`px-4 sm:px-6 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  activePlanTab === 'business'
                    ? 'bg-pink-600 text-white shadow-md'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Business Dual-Platform (₹24,999)
              </button>
              <button
                onClick={() => handleSelectPlan('custom')}
                className={`px-4 sm:px-6 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  activePlanTab === 'custom'
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Custom Enterprise
              </button>
            </div>
          </div>

          <div className="p-6 sm:p-10 rounded-3xl bg-gradient-to-br from-white via-slate-50/50 to-pink-50/30 border-2 border-pink-300 shadow-xl relative overflow-hidden">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-6 border-b border-slate-200">
              <div>
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold border mb-2 ${selectedPlan.badgeColor}`}>
                  {selectedPlan.badge}
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 font-sans">
                  {selectedPlan.name}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 max-w-xl mt-1">
                  {selectedPlan.target}
                </p>
              </div>

              <div className="text-right">
                <div className="flex items-baseline gap-2 justify-end">
                  <span className="text-xs text-slate-400 line-through">{selectedPlan.regularPrice}</span>
                  <span className="text-3xl sm:text-4xl font-black text-slate-900 font-sans">{selectedPlan.price}</span>
                </div>
                <div className="text-xs text-emerald-700 font-bold">{selectedPlan.discount} • {selectedPlan.period}</div>
                <div className="text-[11px] text-slate-500 mt-1">⏱️ {selectedPlan.deliveryTime}</div>
              </div>
            </div>

            <div className="mb-8">
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-1.5">
                <CheckCheck className="w-4 h-4 text-emerald-600" />
                Included App Features & Technical Deliverables:
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {selectedPlan.keyPoints.map((point, pIdx) => (
                  <div key={pIdx} className="flex items-start gap-2 p-2.5 rounded-xl bg-white border border-slate-200 text-xs font-medium text-slate-800">
                    <FaCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200 text-amber-950 text-xs mb-8 space-y-1">
              <div className="font-bold flex items-center gap-1 text-amber-900">
                <FaInfoCircle className="w-3.5 h-3.5" /> Transparency Notes:
              </div>
              {selectedPlan.exclusions.map((ex, exIdx) => (
                <div key={exIdx} className="flex items-center gap-1.5 text-slate-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-600 shrink-0" />
                  <span>{ex}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-200">
              <div className="text-xs text-slate-500 text-center sm:text-left flex items-center gap-1.5">
                <FaShieldAlt className="text-emerald-600" /> Includes <strong>{selectedPlan.maintenanceText}</strong>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <a
                  href={`https://wa.me/918920683588?text=${encodeURIComponent(selectedPlan.whatsappMsg)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#00A86B] hover:bg-[#008f5b] text-white text-xs sm:text-sm font-bold py-3 px-7 rounded-2xl shadow-md flex items-center justify-center gap-2 transition-all w-full sm:w-auto text-center"
                >
                  <FaWhatsapp className="w-4 h-4" />
                  <span>Order {selectedPlan.name} on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 5-Step Engineering Pipeline */}
        <div className="p-6 sm:p-10 rounded-3xl bg-slate-950 text-white mb-20 sm:mb-24 shadow-2xl border-2 border-slate-800 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ec4899_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

          <div className="text-center max-w-3xl mx-auto mb-12 relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-500/10 border border-pink-500/30 text-pink-400 text-xs font-bold uppercase tracking-wider mb-3">
              <Activity className="w-3.5 h-3.5" />
              <span>Agile 15-Day Engineering Pipeline</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight font-sans">
              From Concept to Play Store <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">In 5 Seamless Steps</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto mt-2">
              Our structured engineering roadmap ensures rapid turnaround, zero communication gaps, and total code transparency at every milestone.
            </p>
          </div>

          <div className="relative z-10">
            <div className="hidden lg:block absolute top-[28px] left-[8%] right-[8%] h-1 bg-gradient-to-r from-pink-500 via-violet-500 via-blue-500 via-emerald-500 to-amber-500 rounded-full z-0 opacity-80" />

            <div className="flex lg:grid lg:grid-cols-5 gap-4.5 overflow-x-auto scrollbar-none pb-4 pt-1 snap-x snap-mandatory">
              
              {/* Step 1 */}
              <div className="min-w-[260px] lg:min-w-0 flex-1 snap-start p-5 rounded-3xl bg-slate-900 border-2 border-pink-500/70 hover:border-pink-400 shadow-xl hover:shadow-pink-500/20 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group relative">
                <div>
                  <div className="flex items-center justify-between mb-4 relative z-10">
                    <div className="w-10 h-10 rounded-2xl bg-pink-600 text-white flex items-center justify-center font-black text-sm shadow-md ring-4 ring-slate-950">
                      01
                    </div>
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-pink-500/20 text-pink-300 border border-pink-500/30">
                      Days 1–3
                    </span>
                  </div>

                  <h3 className="font-extrabold text-white text-sm sm:text-base mb-1.5 font-sans group-hover:text-pink-400 transition-colors">
                    Architecture & UI Flow
                  </h3>
                  <p className="text-[11px] text-slate-400 leading-relaxed mb-4">
                    User journeys, interactive Figma prototypes, and complete database ERD schema approval.
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800 text-[10px] text-slate-300 space-y-1">
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-pink-400" />
                    <span>Figma Interactive Prototype</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-pink-400" />
                    <span>Database Schema Sign-off</span>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="min-w-[260px] lg:min-w-0 flex-1 snap-start p-5 rounded-3xl bg-slate-900 border-2 border-violet-500/70 hover:border-violet-400 shadow-xl hover:shadow-violet-500/20 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group relative">
                <div>
                  <div className="flex items-center justify-between mb-4 relative z-10">
                    <div className="w-10 h-10 rounded-2xl bg-violet-600 text-white flex items-center justify-center font-black text-sm shadow-md ring-4 ring-slate-950">
                      02
                    </div>
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-violet-500/20 text-violet-300 border border-violet-500/30">
                      Days 4–8
                    </span>
                  </div>

                  <h3 className="font-extrabold text-white text-sm sm:text-base mb-1.5 font-sans group-hover:text-violet-400 transition-colors">
                    Native Frontend Code
                  </h3>
                  <p className="text-[11px] text-slate-400 leading-relaxed mb-4">
                    Production Flutter / React Native UI engineered with 60 FPS buttery-smooth micro-animations.
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800 text-[10px] text-slate-300 space-y-1">
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
                    <span>Dart / React Native UI</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
                    <span>Offline Cache & Navigation</span>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="min-w-[260px] lg:min-w-0 flex-1 snap-start p-5 rounded-3xl bg-slate-900 border-2 border-blue-500/70 hover:border-blue-400 shadow-xl hover:shadow-blue-500/20 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group relative">
                <div>
                  <div className="flex items-center justify-between mb-4 relative z-10">
                    <div className="w-10 h-10 rounded-2xl bg-blue-600 text-white flex items-center justify-center font-black text-sm shadow-md ring-4 ring-slate-950">
                      03
                    </div>
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30">
                      Days 9–11
                    </span>
                  </div>

                  <h3 className="font-extrabold text-white text-sm sm:text-base mb-1.5 font-sans group-hover:text-blue-400 transition-colors">
                    Cloud Backend & APIs
                  </h3>
                  <p className="text-[11px] text-slate-400 leading-relaxed mb-4">
                    Razorpay UPI webhooks, Firebase push notifications, and high-concurrency Node/Postgres APIs.
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800 text-[10px] text-slate-300 space-y-1">
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                    <span>Razorpay 0% UPI Integration</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                    <span>Firebase Push Engine</span>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="min-w-[260px] lg:min-w-0 flex-1 snap-start p-5 rounded-3xl bg-slate-900 border-2 border-emerald-500/70 hover:border-emerald-400 shadow-xl hover:shadow-emerald-500/20 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group relative">
                <div>
                  <div className="flex items-center justify-between mb-4 relative z-10">
                    <div className="w-10 h-10 rounded-2xl bg-emerald-600 text-white flex items-center justify-center font-black text-sm shadow-md ring-4 ring-slate-950">
                      04
                    </div>
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                      Days 12–13
                    </span>
                  </div>

                  <h3 className="font-extrabold text-white text-sm sm:text-base mb-1.5 font-sans group-hover:text-emerald-400 transition-colors">
                    Real Device QA Testing
                  </h3>
                  <p className="text-[11px] text-slate-400 leading-relaxed mb-4">
                    Rigorous stress testing across 25+ real Android and iOS smartphones for resolution compatibility.
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800 text-[10px] text-slate-300 space-y-1">
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>Multi-Screen Resolution QA</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>Crash & Battery Optimization</span>
                  </div>
                </div>
              </div>

              {/* Step 5 */}
              <div className="min-w-[260px] lg:min-w-0 flex-1 snap-start p-5 rounded-3xl bg-slate-900 border-2 border-amber-500/70 hover:border-amber-400 shadow-xl hover:shadow-amber-500/20 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group relative">
                <div>
                  <div className="flex items-center justify-between mb-4 relative z-10">
                    <div className="w-10 h-10 rounded-2xl bg-amber-600 text-white flex items-center justify-center font-black text-sm shadow-md ring-4 ring-slate-950">
                      05
                    </div>
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
                      Days 14–15
                    </span>
                  </div>

                  <h3 className="font-extrabold text-white text-sm sm:text-base mb-1.5 font-sans group-hover:text-amber-400 transition-colors">
                    Store Launch & Handover
                  </h3>
                  <p className="text-[11px] text-slate-400 leading-relaxed mb-4">
                    Keystore signing, Google Play .AAB bundle upload, privacy policy compliance, and full source code handover.
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800 text-[10px] text-slate-300 space-y-1">
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                    <span>Play Store & iOS Upload</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                    <span>Full Source Code Transfer</span>
                  </div>
                </div>
              </div>

            </div>

            <div className="flex lg:hidden items-center justify-center gap-1.5 text-[11px] text-slate-400 mt-3 font-medium">
              <span>← Swipe to explore all 5 steps →</span>
            </div>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="mb-16 sm:mb-20">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="text-xl sm:text-3xl font-extrabold text-slate-900 font-sans">
              Why Indian Startups Build Apps With SiteMint
            </h2>
          </div>

          <div className="overflow-x-auto rounded-3xl border-2 border-slate-200 shadow-md">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="bg-slate-100 text-slate-900">
                  <th className="p-4 font-bold border-b-2 border-slate-200">Comparison Factors</th>
                  <th className="p-4 font-bold text-slate-600 border-b-2 border-slate-200">Traditional IT Agency</th>
                  <th className="p-4 font-bold text-pink-700 bg-pink-50 border-b-2 border-pink-200">SiteMint App Studio</th>
                </tr>
              </thead>
              <tbody className="divide-y-2 divide-slate-100">
                <tr>
                  <td className="p-4 font-medium">Starter App Pricing</td>
                  <td className="p-4 text-slate-600">₹80,000 to ₹1,50,000+</td>
                  <td className="p-4 font-bold text-pink-700 bg-pink-50/40">₹12,999 (One-Time)</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">Delivery Timeline</td>
                  <td className="p-4 text-slate-600">3 to 6 Months</td>
                  <td className="p-4 font-bold text-pink-700 bg-pink-50/40">12–15 Days Turnaround</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">In-App 0% UPI Payment</td>
                  <td className="p-4 text-slate-600">Extra integration fees (₹15,000+)</td>
                  <td className="p-4 font-bold text-pink-700 bg-pink-50/40">Included Native (Razorpay / Cashfree)</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">Push Notification Engine</td>
                  <td className="p-4 text-slate-600">Monthly third-party SaaS charges</td>
                  <td className="p-4 font-bold text-pink-700 bg-pink-50/40">Built-in Firebase Engine (Zero Monthly Rent)</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">Source Code Ownership</td>
                  <td className="p-4 text-slate-600">Locked to agency retainer contracts</td>
                  <td className="p-4 font-bold text-pink-700 bg-pink-50/40">100% Full Source Code Ownership</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick Cross-Linking Grid */}
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 border-2 border-slate-200 mb-16 shadow-sm">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-4 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-pink-600" />
            Explore Connected Technology Services:
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs">
            <Link href="/services/website-development" className="p-3 bg-white rounded-xl border border-slate-200 hover:border-pink-300 font-semibold text-slate-800 hover:text-pink-700 transition flex items-center gap-2">
              <FaMobileAlt className="text-pink-600" /> Website Development (₹3,999)
            </Link>
            <Link href="/services/ecommerce-development" className="p-3 bg-white rounded-xl border border-slate-200 hover:border-pink-300 font-semibold text-slate-800 hover:text-pink-700 transition flex items-center gap-2">
              <FaShoppingBag className="text-pink-600" /> E-Commerce Web & App Store
            </Link>
            <Link href="/services/education-portal" className="p-3 bg-white rounded-xl border border-slate-200 hover:border-pink-300 font-semibold text-slate-800 hover:text-pink-700 transition flex items-center gap-2">
              <FaGraduationCap className="text-pink-600" /> Coaching & School LMS App
            </Link>
            <Link href="/calculator" className="p-3 bg-white rounded-xl border border-slate-200 hover:border-pink-300 font-semibold text-slate-800 hover:text-pink-700 transition flex items-center gap-2">
              <FaCalculator className="text-pink-600" /> Instant App Cost Calculator
            </Link>
            <Link href="/pricing" className="p-3 bg-white rounded-xl border border-pink-300 font-semibold text-slate-800 hover:text-pink-700 transition flex items-center gap-2">
              <FaCheckCircle className="text-pink-600" /> Complete Pricing Catalog
            </Link>
            <Link href="/blog/custom-ecommerce-store-vs-shopify-for-indian-startups" className="p-3 bg-white rounded-xl border border-slate-200 hover:border-pink-300 font-semibold text-slate-800 hover:text-pink-700 transition flex items-center gap-2">
              <FaRocket className="text-pink-600" /> Custom Store vs Shopify ROI Guide
            </Link>
          </div>
        </div>

      </div>

      <RelatedServicesSection currentService="mobile-app-development" />
      <FaqSection />
    </section>
  );
}
