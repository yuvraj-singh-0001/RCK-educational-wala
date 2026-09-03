'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  Smartphone, 
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
  TrendingUp, 
  Cpu, 
  Database, 
  SlidersHorizontal,
  Award,
  BarChart3,
  Gauge,
  Code2,
  CheckCheck,
  Bell,
  Download,
  Flame,
  Radio,
  WifiOff,
  KeyRound,
  Store,
  GraduationCap,
  ShoppingBag,
  Truck,
  Activity,
  Play,
  Wifi,
  Battery,
  Search,
  User,
  Heart,
  ShoppingCart,
  Navigation,
  MapPin,
  Star
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
      name: 'Starter Android App',
      badge: 'ENTRY LEVEL APP',
      badgeColor: 'bg-slate-100 text-slate-800 border-slate-300',
      price: '₹12,999',
      regularPrice: '₹35,000',
      discount: '62% OFF',
      period: 'One-time investment',
      target: 'Ideal for local retailers, restaurants, tutors, and service businesses launching their first dedicated Android mobile application.',
      deliveryTime: '12–15 Days Turnaround',
      platform: 'Android Native (.APK & AAB Bundle Ready)',
      maintenanceText: '60 Days Free Technical Support & Bug Fixes',
      whatsappMsg: 'Hi SiteMint! I want to order the Starter Android App Package (₹12,999). Please share onboarding details.',
      keyPoints: [
        'Production-Ready Android App (.APK & Play Store .AAB Bundle)',
        'Up to 6 Custom Designed Core Screens with Gesture Navigation',
        'Firebase Cloud Push Notifications Engine for Broadcast Alerts',
        'Phone Number OTP / Google 1-Tap Secure Authentication',
        'Offline Data Caching for Smooth Browsing on 2G/3G/4G Networks',
        'In-App WhatsApp 1-Tap Customer Support & Call Button',
        'Web-Based Admin Dashboard for Content & Banner Updates',
        'Google Play Store Publishing Technical Assistance & Keystore Setup',
        '60 Days Free Post-Launch Technical Maintenance & Bug Fixes',
        '100% Full Source Code Ownership with Zero Monthly Software Lock-in',
      ],
      exclusions: [
        'iOS (Apple App Store) build is not included in the base Starter tier',
        'Google Play Developer Console fee ($25 one-time by Google) paid directly to Google',
        'Real-time GPS live rider tracking requires the Business or Custom package',
      ],
    },
    business: {
      id: 'business',
      name: 'Business Dual-Platform (Android + iOS)',
      badge: 'MOST POPULAR CHOICE',
      badgeColor: 'bg-pink-600 text-white border-pink-600',
      price: '₹24,999',
      regularPrice: '₹65,000',
      discount: '61% OFF',
      period: 'One-time investment',
      target: 'Best for growing startups, e-commerce stores, coaching institutes, on-demand services, and food delivery businesses targeting both Android & iPhone users.',
      deliveryTime: '18–25 Days Turnaround',
      platform: 'Android + iOS (Cross-Platform Flutter / React Native)',
      maintenanceText: '6 Months Comprehensive Technical Support & Updates',
      whatsappMsg: 'Hi SiteMint! I want to order the Business Dual-Platform App Package (₹24,999). Please share details.',
      keyPoints: [
        'Dual Platform Release: Android (.AAB) + Apple iOS (.IPA)',
        'Up to 12 Custom Designed Dynamic Screens & Smooth 60fps Micro-Animations',
        'Integrated Razorpay / Cashfree UPI, Card & Net Banking Payment Gateway',
        'Direct 0% UPI Bank Settlement with Automated In-App Invoicing',
        'Targeted Segmented Push Notifications (Promotions, Order Status, Reminders)',
        'User Profile, Order History, Wishlist & In-App Search with Autocomplete',
        'Comprehensive Web Admin Panel: Manage Products, Orders, Users & Notifications',
        'Cloud Database (PostgreSQL / Firebase) with Real-Time Data Sync',
        'Full App Store & Play Store Compliance & Publishing Architecture',
        '6 Months Complete Maintenance, Security Patches & Performance Tuning',
        '100% Source Code Ownership with Full API Documentation',
      ],
      exclusions: [
        'Apple Developer Program ($99/year) & Google Play ($25) account fees paid to Apple/Google',
        'Custom SMS gateway credits (if high-volume OTP needed) paid directly to provider',
      ],
    },
    custom: {
      id: 'custom',
      name: 'Custom Enterprise / On-Demand App',
      badge: 'CUSTOM ARCHITECTURE',
      badgeColor: 'bg-indigo-600 text-white border-indigo-600',
      price: '₹45,000+',
      regularPrice: '₹1,20,000',
      discount: 'CUSTOM QUOTE',
      period: 'Milestone-based billing',
      target: 'For multi-vendor marketplaces, ride-hailing/logistics, live streaming LMS portals, multi-tenant SaaS, and complex enterprise field apps.',
      deliveryTime: '30–45 Days Timeline',
      platform: 'Android + iOS + Multi-Role Web Portals',
      maintenanceText: '1 Full Year Dedicated Technical SLA & Priority Support',
      whatsappMsg: 'Hi SiteMint! I need a Custom Enterprise App quote with advanced workflows. Let us discuss specifications.',
      keyPoints: [
        'Triple Ecosystem: Customer App + Partner/Driver App + Master Admin Web Portal',
        'Real-Time Live GPS Driver / Delivery Agent Tracking with Google Maps API',
        'Multi-Vendor Architecture with Automated Vendor Payout Calculations',
        'Video Streaming / Live Class Integration with DRM Content Protection',
        'Automated Invoice Generation, GST Reports & Multi-City Tax Rules',
        'High-Concurrency Microservices Backend handling 100k+ Active Users',
        'Automated CI/CD Deployment Pipeline & Enterprise Cloud Hosting Setup',
        '1 Year Dedicated Technical Maintenance with 99.9% Uptime Guarantee',
        'Complete Intellectual Property Transfer & Source Code Repository',
      ],
      exclusions: [
        'Third-party cloud infrastructure (AWS/GCP) billed directly at actual usage',
        'Paid third-party API licenses (Google Maps Geolocation, Twilio SMS) at actuals',
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
      demoImg: '🛍️ Direct-to-Consumer Storefront with Sub-Second Product Search',
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
      demoImg: '🍕 Interactive Food Menu with Custom Toppings & Instant Checkout',
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
      demoImg: '🎓 Student Learning Dashboard with Video Player & Test Series',
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
      demoImg: '📅 Real-Time Appointment Booking with Instant Confirmation',
    },
  };

  const capabilities = [
    {
      num: '01',
      icon: Bell,
      title: 'Automated Push Notifications',
      desc: 'Re-engage users with rich push alerts, festive discount offers, abandoned cart reminders, and live order status directly on mobile lock screens.',
      badge: '3.5x Engagement',
      badgeColor: 'bg-pink-100 text-pink-800 border-pink-300',
      gradient: 'from-pink-500/10 via-pink-500/5 to-transparent',
      borderClass: 'border-2 border-pink-300 hover:border-pink-500 shadow-sm hover:shadow-pink-500/10',
      preview: {
        type: 'push',
        title: 'Flash Sale Alert! ⚡',
        subtitle: 'Flat 30% OFF ending in 2 hours',
        time: 'Just now'
      }
    },
    {
      num: '02',
      icon: CreditCard,
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
      icon: WifiOff,
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
      icon: KeyRound,
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
      icon: Server,
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
      icon: Play,
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
          'Custom Android and iOS mobile app development starting at ₹12,999 with in-app Razorpay 0% UPI checkout, Firebase push notifications, phone OTP authentication, and web admin dashboard with 100% full source code ownership.',
        offers: [
          {
            '@type': 'Offer',
            name: 'Starter Android App',
            price: '12999',
            priceCurrency: 'INR',
            availability: 'https://schema.org/InStock',
            validFrom: '2026-01-01',
          },
          {
            '@type': 'Offer',
            name: 'Business Dual-Platform (Android + iOS)',
            price: '24999',
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
              text: 'At SiteMint, mobile app development starts at ₹12,999 (one-time) for a native Starter Android App with 6 screens, phone OTP, and push notifications. The Business Dual-Platform package (Android + iOS Flutter/React Native with in-app Razorpay 0% UPI checkout) is ₹24,999.',
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
            name: 'How long does it take to develop and launch a mobile app?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'A standard Starter Android app is completed and tested in 12–15 business days. The Business Dual-Platform app typically takes 18–21 business days from wireframe approval to Google Play Store and Apple App Store bundle preparation.',
            },
          },
          {
            '@type': 'Question',
            name: 'Are payment gateway and push notifications included?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes, in-app 0% UPI payment via Razorpay/Cashfree and Firebase Cloud Messaging push notification engine are built right into the app out-of-the-box with zero third-party software subscriptions.',
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
    <div className="w-full pt-8 pb-16 sm:pt-12 sm:pb-24 bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16 sm:mb-20">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-50 border border-pink-200 text-pink-800 text-xs font-bold uppercase tracking-wider mb-4 shadow-2xs">
              <Smartphone className="w-3.5 h-3.5 text-pink-600" />
              <span>Native Android & iOS Engineering Studio</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-4 tracking-tight font-sans">
              Custom <span className="gradient-text-hero">Mobile App Development</span> for Indian Businesses
            </h1>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 font-normal">
              Turn your business into an app in your customer’s pocket. We engineer ultra-smooth Android (.APK/AAB) and iOS mobile applications with instant OTP login, automated push notifications, and native 0% UPI payments.
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-8 text-xs font-semibold text-slate-700">
              <span className="flex items-center gap-1.5 bg-slate-50 px-3 py-1.5 rounded-xl border border-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> PlayStore Ready
              </span>
              <span className="flex items-center gap-1.5 bg-slate-50 px-3 py-1.5 rounded-xl border border-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Push Notifications
              </span>
              <span className="flex items-center gap-1.5 bg-slate-50 px-3 py-1.5 rounded-xl border border-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Razorpay UPI Inside
              </span>
              <span className="flex items-center gap-1.5 bg-slate-50 px-3 py-1.5 rounded-xl border border-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Web Admin Panel
              </span>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 lg:mb-0">
              <a
                href={`https://wa.me/918920683588?text=Hi%20SiteMint!%20I%20want%20to%20discuss%20a%20Mobile%20App%20project%20for%20my%20business.`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp text-xs sm:text-sm !py-3.5 !px-6 shadow-sm text-center justify-center font-bold"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Discuss App Idea on WhatsApp</span>
              </a>

              <Link
                href="/calculator"
                className="btn-secondary text-xs sm:text-sm !py-3.5 !px-6 flex items-center justify-center gap-2 font-bold"
              >
                <Calculator className="w-4 h-4 text-pink-600" />
                <span>Calculate App Cost</span>
              </Link>
            </div>

            {/* Mobile-Only Fast Overview Card (Shown on mobile instead of heavy phone mockup) */}
            <div className="block lg:hidden mt-6 p-4 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-850 to-slate-900 text-white border-2 border-slate-800 shadow-xl">
              <div className="flex items-center justify-between text-xs font-bold pb-2.5 border-b border-slate-800 mb-3">
                <span className="text-pink-400">📱 Mobile App Packages</span>
                <span className="text-emerald-400 font-mono">100% Code Ownership</span>
              </div>
              <div className="grid grid-cols-3 gap-2 text-center text-[11px]">
                <div className="p-2 rounded-xl bg-slate-800 border border-slate-700/80">
                  <div className="font-bold text-white">Starter</div>
                  <div className="text-emerald-400 font-mono font-bold mt-0.5">₹12,999</div>
                  <div className="text-[9px] text-slate-400">Android .APK</div>
                </div>
                <div className="p-2 rounded-xl bg-pink-950/60 border border-pink-500/40">
                  <div className="font-bold text-pink-300">Business</div>
                  <div className="text-pink-400 font-mono font-bold mt-0.5">₹24,999</div>
                  <div className="text-[9px] text-slate-300">Android + iOS</div>
                </div>
                <div className="p-2 rounded-xl bg-slate-800 border border-slate-700/80">
                  <div className="font-bold text-white">Enterprise</div>
                  <div className="text-indigo-300 font-mono font-bold mt-0.5">Custom</div>
                  <div className="text-[9px] text-slate-400">Live GPS / Multi</div>
                </div>
              </div>
            </div>
          </div>

          {/* Ultra-Realistic Tall Smartphone Interactive Simulator (Desktop / Laptop Only) */}
          <div className="hidden lg:flex lg:col-span-5 flex-col items-center">
            {/* Interactive Package Switcher on Top of Phone */}
            <div className="flex items-center gap-1.5 p-1 rounded-2xl bg-slate-100 border border-slate-200 mb-4 shadow-2xs">
              <button
                onClick={() => setSimulatedScreen('starter')}
                className={`px-3 py-1.5 rounded-xl text-[11px] font-bold transition-all ${
                  simulatedScreen === 'starter'
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Starter (₹12k)
              </button>
              <button
                onClick={() => setSimulatedScreen('business')}
                className={`px-3 py-1.5 rounded-xl text-[11px] font-bold transition-all ${
                  simulatedScreen === 'business'
                    ? 'bg-pink-600 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Business (₹24k)
              </button>
              <button
                onClick={() => setSimulatedScreen('custom')}
                className={`px-3 py-1.5 rounded-xl text-[11px] font-bold transition-all ${
                  simulatedScreen === 'custom'
                    ? 'bg-indigo-600 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Enterprise (GPS)
              </button>
            </div>

            {/* Smartphone Chassis Frame */}
            <div className="w-[305px] sm:w-[325px] h-[590px] sm:h-[620px] rounded-[46px] p-3.5 bg-slate-950 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.45)] border-[7px] border-slate-900 relative flex flex-col justify-between overflow-hidden">
              
              {/* Top Speaker & Dynamic Island Pill */}
              <div className="relative z-30 pt-1 flex items-center justify-between px-4 text-[10px] text-white font-medium">
                <span>9:41</span>
                {/* Dynamic Island Notch */}
                <div className="w-24 h-4 bg-slate-900 rounded-full flex items-center justify-center gap-1.5 px-2 border border-slate-800">
                  <div className="w-2 h-2 rounded-full bg-slate-950" />
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                </div>
                <div className="flex items-center gap-1 text-[11px]">
                  <Wifi className="w-3 h-3 text-white" />
                  <span className="text-[9px] font-bold">5G</span>
                  <Battery className="w-3.5 h-3.5 text-white" />
                </div>
              </div>

              {/* Dynamic Inner Screen Content (Scrollable) */}
              <div className="flex-1 bg-slate-900 rounded-[32px] mt-2 mb-2 p-3.5 text-white overflow-y-auto overflow-x-hidden border border-slate-800/80 scrollbar-none flex flex-col justify-between">
                
                {/* 1. STARTER ANDROID APP SIMULATOR (Rich Store UI) */}
                {simulatedScreen === 'starter' && (
                  <div className="space-y-2.5">
                    {/* App Header */}
                    <div className="flex items-center justify-between pb-1.5 border-b border-slate-800 text-[10px]">
                      <div className="flex items-center gap-1.5">
                        <div className="w-6 h-6 rounded-lg bg-pink-600 flex items-center justify-center font-black text-white text-[10px]">
                          FM
                        </div>
                        <div>
                          <div className="text-[9px] text-slate-400 leading-none">FreshMart Store</div>
                          <div className="text-[10px] font-bold text-white flex items-center gap-1">
                            <span>Sector 18, Noida</span>
                            <span className="text-[8px] bg-emerald-500/20 text-emerald-400 px-1 py-0.2 rounded font-mono">Open</span>
                          </div>
                        </div>
                      </div>
                      <span className="text-[9px] bg-pink-500/20 text-pink-300 px-1.5 py-0.5 rounded font-bold">Android .APK</span>
                    </div>

                    {/* Search Bar */}
                    <div className="p-1.5 rounded-xl bg-slate-800/90 border border-slate-700/80 flex items-center justify-between text-[10px] text-slate-400">
                      <div className="flex items-center gap-1.5">
                        <Search className="w-3 h-3 text-pink-400" />
                        <span>Search 500+ items...</span>
                      </div>
                      <span className="text-[9px] bg-slate-700 text-slate-300 px-1 rounded">Filter</span>
                    </div>

                    {/* Animated Promo Banner */}
                    <div className="p-2.5 rounded-2xl bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 text-white shadow-sm">
                      <div className="flex items-center justify-between text-[9px] font-bold mb-0.5">
                        <span>🎉 FIRST ORDER OFFER</span>
                        <span className="bg-white/20 px-1.5 py-0.2 rounded text-[8px]">FLAT 30% OFF</span>
                      </div>
                      <div className="text-[11px] font-extrabold leading-tight">Use Code: FIRST30 on Checkout</div>
                    </div>

                    {/* Category Bubble Row */}
                    <div className="grid grid-cols-4 gap-1 text-center text-[9px]">
                      <div className="p-1.5 rounded-xl bg-slate-800 border border-slate-700/60">
                        <div className="text-xs">🍰</div>
                        <div className="text-slate-300 mt-0.5">Bakery</div>
                      </div>
                      <div className="p-1.5 rounded-xl bg-slate-800 border border-slate-700/60">
                        <div className="text-xs">🍎</div>
                        <div className="text-slate-300 mt-0.5">Fruits</div>
                      </div>
                      <div className="p-1.5 rounded-xl bg-slate-800 border border-slate-700/60">
                        <div className="text-xs">☕</div>
                        <div className="text-slate-300 mt-0.5">Snacks</div>
                      </div>
                      <div className="p-1.5 rounded-xl bg-slate-800 border border-slate-700/60">
                        <div className="text-xs">⚡</div>
                        <div className="text-slate-300 mt-0.5">Deals</div>
                      </div>
                    </div>

                    {/* 2-Column Product Grid */}
                    <div className="grid grid-cols-2 gap-1.5">
                      <div className="p-2 rounded-xl bg-slate-800 border border-slate-700/80">
                        <div className="flex justify-between items-start text-[10px] font-bold">
                          <span className="text-white truncate">Choco Cake</span>
                          <span className="text-emerald-400">₹499</span>
                        </div>
                        <div className="text-[8px] text-amber-400 mt-0.5">⭐ 4.9 (120)</div>
                        <button className="w-full mt-1.5 py-1 rounded-lg bg-pink-600 text-center text-[9px] font-bold text-white shadow-xs">
                          + Add to Cart
                        </button>
                      </div>

                      <div className="p-2 rounded-xl bg-slate-800 border border-slate-700/80">
                        <div className="flex justify-between items-start text-[10px] font-bold">
                          <span className="text-white truncate">Cold Brew</span>
                          <span className="text-emerald-400">₹149</span>
                        </div>
                        <div className="text-[8px] text-amber-400 mt-0.5">⭐ 4.8 (85)</div>
                        <button className="w-full mt-1.5 py-1 rounded-lg bg-pink-600 text-center text-[9px] font-bold text-white shadow-xs">
                          + Add to Cart
                        </button>
                      </div>
                    </div>

                    {/* 1-Tap OTP Login Strip */}
                    <div className="p-2 rounded-xl bg-slate-850 border border-pink-500/30 flex items-center justify-between text-[9px]">
                      <div className="text-slate-300">
                        <span className="font-bold text-pink-300">🔐 Instant Phone OTP Login</span>
                        <div className="text-[8px] text-slate-400">Auto-fill in 1-tap</div>
                      </div>
                      <span className="text-[9px] font-bold text-pink-400 bg-pink-500/20 px-2 py-0.5 rounded">Login</span>
                    </div>
                  </div>
                )}

                {/* 2. BUSINESS DUAL-PLATFORM APP SIMULATOR (Rich Dual OS UI) */}
                {simulatedScreen === 'business' && (
                  <div className="space-y-2.5">
                    {/* Push Notification Header Alert */}
                    <div className="p-2 rounded-xl bg-gradient-to-r from-pink-950/90 to-purple-950/90 border border-pink-500/40 shadow-sm animate-pulse">
                      <div className="flex items-center justify-between text-[9px] text-pink-300 font-bold mb-0.5">
                        <span className="flex items-center gap-1"><Bell className="w-2.5 h-2.5 text-pink-400" /> Push Alert</span>
                        <span className="text-[8px] text-slate-400">Just Now</span>
                      </div>
                      <div className="text-[10px] text-slate-100 font-medium leading-tight">
                        "Your order #SITE-8921 is packed & out for delivery! 🛵"
                      </div>
                    </div>

                    {/* Live Order Step Progress Tracker */}
                    <div className="p-2.5 rounded-2xl bg-slate-800/90 border border-slate-700">
                      <div className="flex items-center justify-between text-[10px] font-bold text-white mb-1.5">
                        <span>Live Delivery Tracker</span>
                        <span className="text-emerald-400 font-bold font-mono">ETA: 6 Mins</span>
                      </div>
                      <div className="flex items-center justify-between text-[8px] text-slate-400 mb-1">
                        <span className="text-emerald-400 font-bold">✓ Placed</span>
                        <span className="text-emerald-400 font-bold">✓ Packed</span>
                        <span className="text-pink-400 font-bold">● In Transit</span>
                        <span className="text-slate-500">○ Arrived</span>
                      </div>
                      <div className="w-full bg-slate-700 h-1.5 rounded-full overflow-hidden">
                        <div className="bg-gradient-to-r from-emerald-500 via-pink-500 to-violet-500 h-1.5 w-3/4 rounded-full" />
                      </div>
                    </div>

                    {/* In-App Razorpay UPI Bottom Sheet */}
                    <div className="p-2.5 rounded-2xl bg-slate-850 border border-pink-500/40 shadow-md">
                      <div className="flex items-center justify-between text-[11px] font-bold mb-1">
                        <span className="text-white">Razorpay 0% UPI Checkout</span>
                        <span className="text-emerald-400 font-mono">₹1,249</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-[8px] text-slate-300 mb-2">
                        <span className="px-1 py-0.5 rounded bg-slate-700">Google Pay</span>
                        <span className="px-1 py-0.5 rounded bg-slate-700">PhonePe</span>
                        <span className="px-1 py-0.5 rounded bg-slate-700">Paytm</span>
                        <span className="px-1 py-0.5 rounded bg-slate-700">CRED</span>
                      </div>
                      <button className="w-full py-1.5 rounded-xl bg-pink-600 text-center text-[10px] font-bold text-white shadow-md flex items-center justify-center gap-1">
                        <CreditCard className="w-3 h-3" />
                        <span>Pay ₹1,249 with 1-Tap UPI</span>
                      </button>
                    </div>

                    {/* Member Loyalty Strip */}
                    <div className="p-2 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-between text-[9px]">
                      <span className="text-amber-300 font-bold flex items-center gap-1">
                        ⭐ Gold Member (450 Coins)
                      </span>
                      <span className="text-emerald-400 font-bold">✓ Active</span>
                    </div>

                    {/* Dual Platform Compatibility Badge */}
                    <div className="flex items-center justify-between text-[9px] text-slate-400 px-1 pt-0.5">
                      <span className="text-pink-300 font-bold">📱 Android .AAB</span>
                      <span className="text-purple-300 font-bold">🍎 iOS .IPA Build</span>
                    </div>
                  </div>
                )}

                {/* 3. CUSTOM ENTERPRISE APP SIMULATOR (Rich Map & Analytics UI) */}
                {simulatedScreen === 'custom' && (
                  <div className="space-y-2.5">
                    {/* Live GPS Driver Map Screen */}
                    <div className="p-2.5 rounded-2xl bg-slate-800/90 border border-indigo-500/40 relative overflow-hidden">
                      <div className="flex items-center justify-between text-[10px] font-bold text-white mb-1.5">
                        <span className="flex items-center gap-1 text-indigo-300">
                          <Navigation className="w-3 h-3 text-indigo-400" /> Live GPS Dispatch
                        </span>
                        <span className="text-[8px] bg-indigo-500/20 text-indigo-300 px-1.5 py-0.2 rounded-full font-mono">
                          Speed: 34 km/h
                        </span>
                      </div>

                      {/* Map Graphic View */}
                      <div className="h-20 bg-slate-950 rounded-xl border border-slate-700/60 p-2 relative flex items-center justify-around overflow-hidden">
                        {/* Map Grid Roads Background */}
                        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#4f46e5_1px,transparent_1px)] [background-size:8px_8px]" />
                        
                        <div className="text-center relative z-10">
                          <MapPin className="w-4 h-4 text-emerald-400 mx-auto" />
                          <div className="text-[7px] text-slate-300 mt-0.5">Store #12</div>
                        </div>

                        {/* Animated Route Line */}
                        <div className="flex-1 border-t-2 border-dashed border-indigo-400 mx-2 relative z-10" />

                        <div className="text-center relative z-10">
                          <Truck className="w-4 h-4 text-pink-400 mx-auto animate-bounce" />
                          <div className="text-[7px] text-pink-300 font-bold mt-0.5">Rider Rahul</div>
                        </div>

                        <div className="flex-1 border-t-2 border-dashed border-slate-600 mx-2 relative z-10" />

                        <div className="text-center relative z-10">
                          <User className="w-4 h-4 text-violet-400 mx-auto" />
                          <div className="text-[7px] text-slate-300 mt-0.5">Customer</div>
                        </div>
                      </div>

                      {/* Rider Contact Buttons */}
                      <div className="flex items-center justify-between mt-2 pt-1.5 border-t border-slate-700/80 text-[8px]">
                        <span className="text-slate-300 font-medium">Honda Activa • DL-4S-8921</span>
                        <div className="flex gap-1">
                          <span className="px-1.5 py-0.5 rounded bg-emerald-600 text-white font-bold">Call 📞</span>
                          <span className="px-1.5 py-0.5 rounded bg-indigo-600 text-white font-bold">Chat 💬</span>
                        </div>
                      </div>
                    </div>

                    {/* Master Admin Revenue Card */}
                    <div className="p-2.5 rounded-2xl bg-slate-850 border border-slate-700">
                      <div className="flex items-center justify-between text-[10px] font-bold text-white mb-0.5">
                        <span>Today's Multi-Vendor GMV</span>
                        <span className="text-emerald-400 font-mono">₹68,450</span>
                      </div>
                      <div className="flex items-center justify-between text-[8px] text-slate-400">
                        <span>214 Active App Orders</span>
                        <span className="text-emerald-400 font-bold">+24% Today</span>
                      </div>
                    </div>

                    {/* Multi-Role Access Selector */}
                    <div className="grid grid-cols-3 gap-1 text-[8px] text-center font-bold">
                      <div className="p-1 rounded-lg bg-indigo-600 text-white">Customer</div>
                      <div className="p-1 rounded-lg bg-slate-800 text-slate-300 border border-slate-700">Driver</div>
                      <div className="p-1 rounded-lg bg-slate-800 text-slate-300 border border-slate-700">Vendor</div>
                    </div>
                  </div>
                )}

                {/* Bottom App Navigation Bar (Always Visible) */}
                <div className="pt-2 border-t border-slate-800/90 flex items-center justify-around text-[9px] text-slate-400">
                  <div className="text-center text-pink-400 font-bold">
                    <Store className="w-3.5 h-3.5 mx-auto" />
                    <span>Home</span>
                  </div>
                  <div className="text-center hover:text-white">
                    <Search className="w-3.5 h-3.5 mx-auto" />
                    <span>Search</span>
                  </div>
                  <div className="text-center hover:text-white">
                    <ShoppingCart className="w-3.5 h-3.5 mx-auto" />
                    <span>Orders</span>
                  </div>
                  <div className="text-center hover:text-white">
                    <User className="w-3.5 h-3.5 mx-auto" />
                    <span>Profile</span>
                  </div>
                </div>

              </div>

              {/* Bottom Home Indicator Gesture Bar */}
              <div className="w-28 h-1 bg-slate-700 rounded-full mx-auto mb-0.5" />
            </div>
          </div>
        </div>

        {/* Tailored Mobile App Solutions by Industry (Interactive Tabs & 2-Column Showcase Card) */}
        <div className="mb-20 sm:mb-24">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-50 border border-pink-200 text-pink-800 text-xs font-bold uppercase tracking-wider mb-3 shadow-2xs">
              <Layers className="w-3.5 h-3.5 text-pink-600" />
              <span>Industry Architectures</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 leading-tight font-sans">
              Tailored Mobile App Solutions <br className="hidden sm:inline" />
              <span className="gradient-text-hero">By Industry</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto mt-2">
              Select your business model to explore how our specialized app architectures drive repeat customer engagement and 0% commission ordering.
            </p>
          </div>

          {/* Horizontal Interactive Tab Buttons (Centered Pill Row) */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 mb-8">
            {Object.keys(interactiveScreens).map((key) => {
              const item = interactiveScreens[key];
              const isSelected = activeScreenTab === key;
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
                  <span>{item.category.includes('ECOMMERCE') ? '🛍️' : item.category.includes('FOOD') ? '🍰' : item.category.includes('EDUCATION') ? '🎓' : '🔧'}</span>
                  <span>{item.title.split(' ')[0]} {item.title.split(' ')[1]}</span>
                </button>
              );
            })}
          </div>

          {/* Large Premium Showcase Card (2-Column Grid) */}
          <div className="p-6 sm:p-10 rounded-3xl bg-white border-2 border-slate-200/90 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative overflow-hidden">
            
            {/* Left Column: Solution Details & Actions */}
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
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href={`https://wa.me/918920683588?text=Hi%20SiteMint!%20I%20want%20to%20build%20a%20${encodeURIComponent(selectedScreen.title)}.%20Please%20share%20timeline%20and%20pricing.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp text-xs !py-3 !px-6 inline-flex items-center gap-2 shadow-xs font-bold"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Order {selectedScreen.title.split(' ')[0]} App</span>
                </a>

                <Link
                  href="/calculator"
                  className="btn-secondary text-xs !py-3 !px-5 inline-flex items-center gap-1.5 font-bold"
                >
                  <Calculator className="w-3.5 h-3.5 text-pink-600" />
                  <span>Calculate Cost</span>
                </Link>
              </div>
            </div>

            {/* Right Column: Creative Visual Architecture Showcase Terminal */}
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

                {/* TAB 1: E-COMMERCE SCREEN */}
                {activeScreenTab === 'ecommerce' && (
                  <div className="space-y-3">
                    <div className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800">
                      <div className="flex justify-between items-center text-xs font-bold mb-1">
                        <span className="text-white">🛍️ D2C Storefront Catalog & Checkout</span>
                        <span className="text-emerald-400 font-mono">1.2s Fast</span>
                      </div>
                      <p className="text-[11px] text-slate-400 leading-relaxed">
                        Pre-rendered product catalogs with sub-second search, size/color pickers, and 1-tap Razorpay UPI checkout.
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-2.5 text-xs">
                      <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                        <div className="font-bold text-pink-300 mb-0.5">💳 0% Aggregator Cut</div>
                        <div className="text-[10px] text-slate-400">Direct settlement into your merchant bank account.</div>
                      </div>
                      <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                        <div className="font-bold text-purple-300 mb-0.5">🔔 Abandoned Cart Push</div>
                        <div className="text-[10px] text-slate-400">Automated lock-screen discount alerts for drop-offs.</div>
                      </div>
                    </div>
                  </div>
                )}

                {/* TAB 2: RESTAURANT & FOOD SCREEN */}
                {activeScreenTab === 'food' && (
                  <div className="space-y-3">
                    <div className="p-3.5 rounded-2xl bg-slate-900 border border-amber-500/40">
                      <div className="flex justify-between items-center text-xs font-bold mb-1">
                        <span className="text-white">🍰 Custom Cake & Online Bakery Engine</span>
                        <span className="text-emerald-400 font-mono">Save ₹25k+/Mo</span>
                      </div>
                      <p className="text-[11px] text-slate-400 leading-relaxed">
                        Allows customers to customize weight (0.5kg/1kg), eggless preference, and write custom birthday messages on cakes with 1-click WhatsApp order dispatch.
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-2.5 text-xs">
                      <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                        <div className="font-bold text-amber-300 mb-0.5">📱 Direct Customer CRM</div>
                        <div className="text-[10px] text-slate-400">Build your own phone database for festival campaigns.</div>
                      </div>
                      <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                        <div className="font-bold text-emerald-300 mb-0.5">🛵 Pincode Delivery Rate</div>
                        <div className="text-[10px] text-slate-400">Dynamic delivery fee calculation by distance radius.</div>
                      </div>
                    </div>
                  </div>
                )}

                {/* TAB 3: COACHING & EDTECH SCREEN */}
                {activeScreenTab === 'education' && (
                  <div className="space-y-3">
                    <div className="p-3.5 rounded-2xl bg-slate-900 border border-sky-500/40">
                      <div className="flex justify-between items-center text-xs font-bold mb-1">
                        <span className="text-white">🎓 Anti-Piracy LMS & Mock Test System</span>
                        <span className="text-emerald-400 font-mono">DRM Encrypted</span>
                      </div>
                      <p className="text-[11px] text-slate-400 leading-relaxed">
                        Screen-recording protected video player for paid coaching batches, timed online MCQ mock tests, and instant topper rank leaderboards.
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-2.5 text-xs">
                      <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                        <div className="font-bold text-sky-300 mb-0.5">📊 Rank Leaderboards</div>
                        <div className="text-[10px] text-slate-400">Instant percentiles and subject-wise score analytics.</div>
                      </div>
                      <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                        <div className="font-bold text-indigo-300 mb-0.5">📥 Offline PDF Reader</div>
                        <div className="text-[10px] text-slate-400">Encrypted in-app notes viewer preventing forwarding.</div>
                      </div>
                    </div>
                  </div>
                )}

                {/* TAB 4: SERVICE BOOKING SCREEN */}
                {activeScreenTab === 'services' && (
                  <div className="space-y-3">
                    <div className="p-3.5 rounded-2xl bg-slate-900 border border-violet-500/40">
                      <div className="flex justify-between items-center text-xs font-bold mb-1">
                        <span className="text-white">🔧 Real-Time Booking & Slot Dispatch</span>
                        <span className="text-emerald-400 font-mono">Instant Confirm</span>
                      </div>
                      <p className="text-[11px] text-slate-400 leading-relaxed">
                        Dynamic calendar slot booking with technician allocation, advance token payment collection, and customer review verification.
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-2.5 text-xs">
                      <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                        <div className="font-bold text-violet-300 mb-0.5">👨‍🔧 Technician Portal</div>
                        <div className="text-[10px] text-slate-400">Dedicated partner interface to accept and close jobs.</div>
                      </div>
                      <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                        <div className="font-bold text-pink-300 mb-0.5">💬 WhatsApp Alerts</div>
                        <div className="text-[10px] text-slate-400">Automatic customer notifications for technician arrival.</div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Bottom Status Callout */}
                <div className="mt-5 pt-3.5 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                  <span>⚡ Available in <strong>Starter (₹12k)</strong> & <strong>Business (₹24k)</strong></span>
                  <a
                    href="https://wa.me/918920683588?text=Hi%20SiteMint!%20I%20want%20to%20see%20a%20live%20demo%20of%20your%20app%20solutions."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-400 hover:text-pink-300 font-bold flex items-center gap-1"
                  >
                    <span>Request Live Demo</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>

              </div>
            </div>

          </div>
        </div>

        {/* 6 Core Mobile Capabilities (Ultra-Modern Creative Grid) */}
        <div className="mb-20 sm:mb-24">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-50 text-pink-700 border border-pink-200 text-xs font-bold uppercase tracking-wider mb-3 shadow-2xs">
              <Zap className="w-3.5 h-3.5 text-pink-600" />
              <span>Built-in Powerhouse Architecture</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 leading-tight font-sans">
              Everything Your Mobile App <br className="hidden sm:inline" />
              <span className="gradient-text-hero">Needs to Scale & Convert</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto mt-2">
              Every SiteMint app comes engineered out-of-the-box with production-grade native capabilities, zero external rent, and complete source code ownership.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {capabilities.map((cap, cIdx) => {
              const Icon = cap.icon;
              return (
                <div
                  key={cIdx}
                  className={`p-6 sm:p-7 rounded-3xl bg-white ${cap.borderClass} hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden`}
                >
                  {/* Subtle Background Radial Gradient Glow */}
                  <div className={`absolute -top-24 -right-24 w-48 h-48 rounded-full bg-gradient-to-br ${cap.gradient} blur-2xl group-hover:opacity-100 opacity-60 transition-opacity pointer-events-none`} />

                  <div>
                    {/* Top Row: Number Pill + Icon + Impact Badge */}
                    <div className="flex items-center justify-between gap-2 mb-5">
                      <div className="flex items-center gap-2.5">
                        <span className="w-6 h-6 rounded-full bg-slate-100 text-slate-700 text-[11px] font-mono font-bold flex items-center justify-center group-hover:bg-pink-600 group-hover:text-white transition-colors">
                          {cap.num}
                        </span>
                        <div className="w-10 h-10 rounded-2xl bg-slate-50 border border-slate-200/80 text-slate-800 flex items-center justify-center group-hover:scale-110 group-hover:bg-pink-50 group-hover:border-pink-300 group-hover:text-pink-600 transition-all shadow-2xs">
                          <Icon className="w-5 h-5" />
                        </div>
                      </div>

                      <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full border shadow-2xs ${cap.badgeColor}`}>
                        {cap.badge}
                      </span>
                    </div>

                    {/* Title & Description */}
                    <h3 className="text-base sm:text-lg font-extrabold text-slate-900 mb-2 font-sans group-hover:text-pink-600 transition-colors leading-snug">
                      {cap.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed mb-6">
                      {cap.desc}
                    </p>
                  </div>

                  {/* Micro-UI Architecture Preview Pill */}
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

        {/* Interactive Transparent App Pricing Tier Showcase */}
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

          {/* Pricing Selector Tabs */}
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

          {/* Detailed Selected Plan Card */}
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

            {/* Deliverables Grid */}
            <div className="mb-8">
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-1.5">
                <CheckCheck className="w-4 h-4 text-emerald-600" />
                Included App Features & Technical Deliverables:
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {selectedPlan.keyPoints.map((point, pIdx) => (
                  <div key={pIdx} className="flex items-start gap-2 p-2.5 rounded-xl bg-white border border-slate-200 text-xs font-medium text-slate-800">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Package Scope Details */}
            <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200 text-amber-950 text-xs mb-8 space-y-1">
              <div className="font-bold flex items-center gap-1 text-amber-900">
                <Info className="w-3.5 h-3.5" /> Transparency Notes:
              </div>
              {selectedPlan.exclusions.map((ex, exIdx) => (
                <div key={exIdx} className="flex items-center gap-1.5 text-slate-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-600 shrink-0" />
                  <span>{ex}</span>
                </div>
              ))}
            </div>

            {/* Action Bar */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-200">
              <div className="text-xs text-slate-500 text-center sm:text-left">
                🛡️ Includes <strong>{selectedPlan.maintenanceText}</strong>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <a
                  href={`https://wa.me/918920683588?text=${encodeURIComponent(selectedPlan.whatsappMsg)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp text-xs sm:text-sm !py-3 !px-7 w-full sm:w-auto text-center shadow-md"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Order {selectedPlan.name} on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 5-Stage Mobile App Engineering Process (Connected Pipeline with Smooth Flow) */}
        <div className="p-6 sm:p-10 rounded-3xl bg-slate-950 text-white mb-20 sm:mb-24 shadow-2xl border-2 border-slate-800 relative overflow-hidden">
          
          {/* Subtle Cyber Grid Background */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ec4899_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

          <div className="text-center max-w-3xl mx-auto mb-12 relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-500/10 border border-pink-500/30 text-pink-400 text-xs font-bold uppercase tracking-wider mb-3">
              <Activity className="w-3.5 h-3.5" />
              <span>Agile 15-Day Engineering Pipeline</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight font-sans">
              From Concept to Play Store <br className="hidden sm:inline" />
              <span className="gradient-text-hero">In 5 Seamless Steps</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto mt-2">
              Our structured engineering roadmap ensures rapid turnaround, zero communication gaps, and total code transparency at every milestone.
            </p>
          </div>

          {/* Connected Horizontal Flow Pipeline */}
          <div className="relative z-10">
            
            {/* Desktop Continuous Glowing Flow Line (Connecting Step 1 to 5) */}
            <div className="hidden lg:block absolute top-[28px] left-[8%] right-[8%] h-1 bg-gradient-to-r from-pink-500 via-violet-500 via-blue-500 via-emerald-500 to-amber-500 rounded-full z-0 opacity-80" />

            {/* Step Cards Grid with Horizontal Smooth Scroll Snap on Mobile */}
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

            {/* Mobile Scroll Indicator */}
            <div className="flex lg:hidden items-center justify-center gap-1.5 text-[11px] text-slate-400 mt-3 font-medium">
              <span>← Swipe to explore all 5 steps →</span>
            </div>

          </div>
        </div>

        {/* Comparison: Traditional Agency vs SiteMint App Studio */}
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
            <Link href="/services/website-development" className="p-3 bg-white rounded-xl border border-slate-200 hover:border-pink-300 font-semibold text-slate-800 hover:text-pink-700 transition">
              🌐 Website Development (₹3,999)
            </Link>
            <Link href="/services/ecommerce-development" className="p-3 bg-white rounded-xl border border-slate-200 hover:border-pink-300 font-semibold text-slate-800 hover:text-pink-700 transition">
              🛍️ E-Commerce Web & App Store
            </Link>
            <Link href="/services/education-portal" className="p-3 bg-white rounded-xl border border-slate-200 hover:border-pink-300 font-semibold text-slate-800 hover:text-pink-700 transition">
              🎓 Coaching & School LMS App
            </Link>
            <Link href="/calculator" className="p-3 bg-white rounded-xl border border-slate-200 hover:border-pink-300 font-semibold text-slate-800 hover:text-pink-700 transition">
              🧮 Instant App Cost Calculator
            </Link>
            <Link href="/pricing" className="p-3 bg-white rounded-xl border border-pink-300 font-semibold text-slate-800 hover:text-pink-700 transition">
              🏷️ Complete Pricing Catalog
            </Link>
            <Link href="/blog/custom-ecommerce-store-vs-shopify-for-indian-startups" className="p-3 bg-white rounded-xl border border-slate-200 hover:border-pink-300 font-semibold text-slate-800 hover:text-pink-700 transition">
              📖 Custom Store vs Shopify ROI Guide
            </Link>
          </div>
        </div>
      </div>

      <RelatedServicesSection currentService="mobile-app-development" />
      <FaqSection />
    </div>
  );
}
