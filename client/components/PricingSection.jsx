'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  Zap, 
  Clock, 
  ShieldCheck, 
  Code, 
  Globe, 
  Smartphone, 
  Video, 
  Share2, 
  BarChart3, 
  CheckCircle2, 
  Star, 
  MessageCircle, 
  ArrowRight, 
  Calculator, 
  Sparkles,
  Info,
  CreditCard,
  FileText,
  Check,
  HelpCircle,
  Volume2,
  Pause,
  Play,
  Square
} from 'lucide-react';

export default function PricingSection({ hideHeader = false, isHomePage = false }) {
  const [activeTab, setActiveTab] = useState('web');
  const [selectedPlanIndex, setSelectedPlanIndex] = useState(0);

  // Voice Audio Explanation State
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [isPausedAudio, setIsPausedAudio] = useState(false);

  // Stop audio on unmount or tab change
  useEffect(() => {
    return () => {
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const handleTabChange = (tabKey) => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    setIsPlayingAudio(false);
    setIsPausedAudio(false);
    setActiveTab(tabKey);
    setSelectedPlanIndex(0);
  };

  const handleKnowDetails = (planIdx) => {
    setSelectedPlanIndex(planIdx);
    const elem = document.getElementById('scope-transparency-guide');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getSpeechScript = (category, planIdx) => {
    const pIndex = planIdx !== undefined ? planIdx : selectedPlanIndex;

    if (category === 'web') {
      if (pIndex === 0) {
        return `Namaste Sir! SiteMint me aapka swagat hai. Starter Website plan me 5 custom pages, WhatsApp chat widget, aur easy Admin Panel milta hai jisse aap text, images aur inquiries khud manage kar sakte hain. Isme daily 350 free email lead alerts included hain. Fast React stack, lifetime SSL, Google indexing aur 60 days maintenance FREE hai. Domain-hosting client direct pay karega. Aap apne hisab se custom plan bana sakte hain aur special feature add karne ke liye niche Project Cost Calculator button par click karein. Direct WhatsApp button se order book karein. Dhanyawad!`;
      }
      if (pIndex === 1) {
        return `Namaste Sir! Business Website & Management plan me aapka swagat hai. Isme 10 dynamic pages, product catalog, Razorpay UPI gateway aur admin dashboard milta hai jisse content aur products manage hote hain. Daily 350 emails 1-click button se automatic send hote hain. Advanced SEO, GA4 aur 6 months maintenance FREE hai. Custom plan banane ya special feature add karne ke liye niche Project Cost Calculator button par click karein. WhatsApp par instant project discussion karein. Dhanyawad!`;
      }
      return `Namaste Sir! Professional Business System me aapka swagat hai. Unlimited custom pages, role-based admin portal aur automated broadcast engine milta hai jisse daily 350-plus emails customer update ke liye send hote hain. Isme 1 year Cloud Server aur Domain SiteMint BILKUL FREE deta hai! Full SLA maintenance aur code handover ke sath. Custom features ke liye Project Cost Calculator use karein. WhatsApp par instant kickoff karein. Dhanyawad!`;
    }

    if (category === 'app') {
      if (pIndex === 0) {
        return `Namaste Sir! Starter Mobile App plan me aapka swagat hai. Android aur iOS builds 7 se 10 dino me ready milte hain. OTP login, notifications, WhatsApp ordering aur Easy Admin Panel included hai jisse content manage hota hai, sath hi daily 350 free email alerts. Play Store $25 fee client direct Google ko pay karega. Custom plan ya special feature add karne ke liye niche Project Cost Calculator button click karein. WhatsApp par instant order book karein. Dhanyawad!`;
      }
      if (pIndex === 1) {
        return `Namaste Sir! Business Pro App plan me aapka swagat hai. Isme 12 dynamic screens, 60fps animations, Razorpay UPI aur admin dashboard milta hai, automated daily 350 emails alerts ke sath. 60 days maintenance free hai. Custom plan banane aur special feature add karne ke liye Project Cost Calculator button click karein. WhatsApp button par click karke order final karein. Dhanyawad!`;
      }
      return `Namaste Sir! Professional Custom App plan me aapka swagat hai. 16 se 22 screens, master admin portal, push notifications aur daily email broadcast engine milta hai. Play Store $25 publisher account fee SiteMint BILKUL FREE pay karta hai! Custom plan aur special features ke liye Project Cost Calculator button par click karein. WhatsApp par team se live interact karein. Dhanyawad!`;
    }

    if (category === 'video') {
      if (pIndex === 0) {
        return `Namaste Sir! Starter Reel plan me aapka swagat hai. 1 short video 24 ghante me express deliver hoti hai animated subtitles, SFX aur music ke sath. Client interaction ke liye daily 350 email system active hai. Custom plan aur special feature add karne ke liye niche Project Cost Calculator button click karein. WhatsApp par script discuss karein. Dhanyawad!`;
      }
      if (pIndex === 1) {
        return `Namaste Sir! Creator Growth Pack me aapka swagat hai. Monthly 15 reels aur shorts, brand fonts, stock B-roll aur dedicated editor milta hai. Easy content tracking portal aur daily email alerts included hain. Custom plan aur special feature ke liye Project Cost Calculator button click karein. WhatsApp par order book karein. Dhanyawad!`;
      }
      return `Namaste Sir! Brand Video Suite me aapka swagat hai. Isme monthly 30 Reels, 2 YouTube Videos aur 3 Meta Ad Creatives milte hain 2D graphics aur voiceover ke sath. Unlimited revisions included hain. Custom plan aur special feature ke liye Project Cost Calculator button par click karein. WhatsApp par instant consultation start karein. Dhanyawad!`;
    }

    // SMM
    if (pIndex === 0) {
      return `Namaste Sir! Basic Social Starter plan me aapka swagat hai. Monthly 15 posts 3 platforms par publish hote hain festival graphics, SEO captions aur daily 350 email lead alerts ke sath. Custom marketing plan aur special feature ke liye Project Cost Calculator button click karein. WhatsApp par order book karein. Dhanyawad!`;
    }
    if (pIndex === 1) {
      return `Namaste Sir! Business Growth Retainer me aapka swagat hai. Monthly 30 posts aur 4 reels 8 platforms par publish hote hain WhatsApp DM routing ke sath. Paid ad budget direct Meta ko pay hota hai. Custom plan aur special feature ke liye Project Cost Calculator button click karein. WhatsApp button se campaign discuss karein. Dhanyawad!`;
    }
    return `Namaste Sir! Digital Growth Suite me aapka swagat hai. Daily posts, 10 viral reels, Meta-Google Ads management aur dedicated designer milta hai automated email system ke sath. Custom plan aur special feature add karne ke liye Project Cost Calculator button click karein. WhatsApp par live kickoff karein. Dhanyawad!`;
  };

  const startSpeakingText = (textToSpeak) => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
    const synth = window.speechSynthesis;
    synth.cancel();

    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    const voices = synth.getVoices();
    const hindiVoice = voices.find(
      (v) => v.lang.includes('hi') || v.name.toLowerCase().includes('hindi') || v.name.toLowerCase().includes('swara') || v.name.toLowerCase().includes('google हिन्दी')
    ) || voices.find((v) => v.lang.includes('IN'));

    if (hindiVoice) {
      utterance.voice = hindiVoice;
    }
    utterance.lang = 'hi-IN';
    utterance.volume = 1.0; // Maximum clear & loud volume
    utterance.rate = 0.95;   // Clear natural speed
    utterance.pitch = 1.05;

    utterance.onend = () => {
      setIsPlayingAudio(false);
      setIsPausedAudio(false);
    };

    utterance.onerror = () => {
      setIsPlayingAudio(false);
      setIsPausedAudio(false);
    };

    synth.speak(utterance);
    setIsPlayingAudio(true);
    setIsPausedAudio(false);
  };

  const handlePlayPlanAudio = (planIdx) => {
    const targetIdx = planIdx !== undefined ? planIdx : selectedPlanIndex;
    setSelectedPlanIndex(targetIdx);
    const textToSpeak = getSpeechScript(activeTab, targetIdx);
    startSpeakingText(textToSpeak);
  };

  const handleToggleAudio = () => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      alert('Audio speech synthesis is not supported in your browser.');
      return;
    }

    const synth = window.speechSynthesis;

    if (isPlayingAudio) {
      if (isPausedAudio) {
        synth.resume();
        setIsPausedAudio(false);
      } else {
        synth.pause();
        setIsPausedAudio(true);
      }
    } else {
      handlePlayPlanAudio(selectedPlanIndex);
    }
  };

  const handleStopAudio = () => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    setIsPlayingAudio(false);
    setIsPausedAudio(false);
  };

  // 1. Web & Software Development Plans
  const webPlans = [
    {
      name: 'Starter Website',
      badge: 'STARTER PACK',
      badgeColor: 'bg-slate-100 text-slate-800 border-slate-200',
      price: '₹3,999',
      regularPrice: '₹12,000',
      period: 'one-time',
      desc: 'Best for Small Businesses, Personal Brands & Local Shops looking to launch online with high speed.',
      popular: false,
      ctaText: 'Get Started',
      ctaUrl: 'https://wa.me/918920683588?text=Hi%20SiteMint!%20I%20want%20to%20order%20the%20Starter%20Website%20Package%20(₹3,999).%20Please%20guide%20me.',
      includedHeader: "What's Included:",
      features: [
        '5 Custom Designed Pages (Home, About, Services, Gallery, Contact)',
        '100% Mobile, Tablet & Desktop Responsive Layout',
        '1-Click WhatsApp Direct Chat & Floating Lead Capture Widget',
        'Instant Click-to-Call Phone & Email Action Buttons',
        'Contact Form with Automatic Email Notifications',
        'Content Update Admin Panel (Manage Text, Banners & Inquiries)',
        'Basic On-Page SEO, Meta Titles & Meta Descriptions Setup',
        'Google Search Console & XML Sitemap Indexing Submission',
        'Google Maps Location Embed & Social Media Profiles Setup',
        'Sub-2 Second Load Speed Optimization on 4G/5G Networks',
        '60 Days Free Technical Maintenance & Post-Launch Support',
        '100% Full Source Code Ownership & Zero Monthly Lock-in Fees',
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
      ctaText: 'Build My Business Website',
      ctaUrl: 'https://wa.me/918920683588?text=Hi%20SiteMint!%20I%20want%20to%20order%20the%20Business%20Website%20%26%20Management%20Package%20(₹7,999).%20Please%20share%20details.',
      includedHeader: 'Everything in Starter, Plus:',
      features: [
        'Up to 10 Dynamic Pages / Custom Product & Service Categories',
        'Online Product Catalog & Online Ordering / Booking System',
        'User Registration, Customer Login & User Profile Dashboard',
        'WhatsApp Order & Formatted Inquiry Direct Dispatch Engine',
        'Admin Control Panel (Manage Products, Orders, Users & Download CSV)',
        '1-Click Email Notification Broadcast (350 Free Daily Emails via Gmail API)',
        'Razorpay 0% UPI Payment Gateway Integration (GPay, PhonePe, Paytm, Cards)',
        'Advanced On-Page SEO, Local Keywords & Schema.org Structured Data',
        'Google Analytics 4 (GA4) & Search Console Setup',
        'Speed Caching, SSL/HTTPS Security & Asset Optimization',
        '6 Months Free Technical Maintenance, Content Updates & Bug Fixes',
        '100% Full Source Code & Database Rights',
      ],
    },
    {
      name: 'Professional Business System',
      badge: 'COMPLETE SOLUTION',
      badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-300',
      price: '₹17,999',
      regularPrice: '₹38,000',
      period: 'one-time',
      desc: 'Best for Established Businesses, Startups, Institutes & Enterprises requiring full cloud system.',
      popular: false,
      ctaText: 'Get Professional Solution',
      ctaUrl: 'https://wa.me/918920683588?text=Hi%20SiteMint!%20I%20want%20to%20order%20the%20Professional%20Business%20System%20(₹17,999%20-%20Domain%20%2B%20Server%20Included).',
      includedHeader: 'Everything in Business Plan, Plus:',
      freeDomainHosting: true,
      features: [
        'Custom Website Architecture with Unlimited* Business Pages',
        '1 Year High-Speed Cloud Server & Hosting Included (100% FREE)',
        '1 Year Custom Domain Name Included (.IN / .COM) (100% FREE)',
        'Complete User Management System & Role-Based Admin Portal',
        'WhatsApp Automated Order & Instant Customer Alerts Engine',
        'Master Admin Dashboard with Revenue Reports & Data Export',
        '1-Click Mass Email Notification Broadcast (350 Free Emails/Day via Gmail API)',
        'Full Razorpay Payment Integration (UPI, QR, Cards, NetBanking)',
        'Advanced Technical SEO, Schema Graph & Rapid Google Indexing Submission',
        'Live Google Analytics 4 (GA4) Traffic & Active User Behavior Dashboard',
        '1 Full Year Free Technical Maintenance & Priority SLA Support',
        'Professional Business Email Setup & 100% Full Source Code Handover',
      ],
    },
  ];

  // 2. Mobile App Development Plans
  const appPlans = [
    {
      name: 'Starter Dual-Platform App (Android + iOS)',
      badge: 'ANDROID + IOS BUILD',
      badgeColor: 'bg-slate-100 text-slate-800 border-slate-200',
      price: '₹12,999',
      regularPrice: '₹28,000',
      period: 'one-time',
      desc: 'Production-ready Android & iOS mobile app builds with 30 days free bug-fix support.',
      popular: false,
      ctaText: 'Build Mobile App',
      ctaUrl: 'https://wa.me/918920683588?text=Hi%20SiteMint!%20I%20want%20the%20Starter%20Dual-Platform%20App%20(₹12,999).%20Please%20share%20details.',
      includedHeader: "What's Included:",
      clientScope: 'Developer console fees ($25 Google / $99 Apple) & server/database costs paid directly by client.',
      features: [
        'Both Android (.AAB/.APK) & Apple iOS (.IPA) Full Source Code & Builds',
        'Up to 6 Custom Designed Core Screens & Gesture Touch Navigation',
        'In-App WhatsApp Direct Customer Chat & Quick Inquiry Button',
        'Phone Number OTP Login & Google 1-Tap Secure Authentication',
        'Firebase Cloud Push Notifications Engine for Broadcast Alerts',
        'Basic Web Admin Control Panel for Banners & Content Updates',
        'Basic App Indexing & Google Search Console Submission',
        'Offline Data Caching for Smooth Browsing on 2G/3G/4G Networks',
        '30 Days Free Technical Maintenance & Bug Fixing Support',
        '100% Full Source Code Ownership & Zero Monthly Developer Lock-in',
      ],
    },
    {
      name: 'Business Pro App (Android + iOS)',
      badge: 'ANDROID + IOS • GMAIL API',
      badgeColor: 'bg-violet-600 text-white border-violet-600',
      price: '₹24,999',
      regularPrice: '₹45,000',
      period: 'one-time',
      desc: 'Full-featured Flutter cross-platform mobile app running smoothly on Android & Apple iOS with Gmail lead alerts.',
      popular: true,
      ctaText: 'Build Business App',
      ctaUrl: 'https://wa.me/918920683588?text=Hi%20SiteMint!%20I%20want%20the%20Business%20Pro%20App%20(₹24,999).%20Please%20share%20details.',
      includedHeader: 'Everything in Starter, Plus:',
      clientScope: 'Developer account fees ($25 Google / $99 Apple) & third-party paid APIs paid directly by client.',
      features: [
        'Both Android (.AAB) & Apple iOS (.IPA) High-Performance Flutter Apps',
        'Up to 12 Custom Dynamic Screens & Smooth 60fps Micro-Animations',
        'In-App WhatsApp Order & Formatted Inquiry Dispatch Engine',
        '350 Free Lead & Alert Emails / Day via Gmail API (100% Free)',
        'Master Web Admin Panel: Manage Products, Orders, Users & Notifications',
        '1-Click Announcement Email Broadcast to App Users (350 Daily Emails via Gmail API)',
        'Razorpay 0% UPI Payment Gateway Integration (GPay, PhonePe, Paytm)',
        'Segmented Targeted Push Notifications (Promotions, Order Status Updates)',
        'Advanced App SEO & Google Analytics 4 (GA4) Setup',
        'Google Play Store & Apple App Store Live Publishing Assistance',
        '60 Days Free Technical Maintenance & Updates',
        '100% Source Code Transfer & Full API Documentation',
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
      ctaText: 'Get Professional App',
      ctaUrl: 'https://wa.me/918920683588?text=Hi%20SiteMint!%20I%20want%20the%20Professional%20Custom%20App%20(₹39,999%20-%20Play%20Store%20Fee%20Included).',
      includedHeader: 'Everything in Business Plan, Plus:',
      clientScope: 'Paid 3rd-party APIs (WhatsApp Cloud API / SMS credits) & cloud server hosting paid directly by client.',
      features: [
        'Both Android (.AAB) & Apple iOS (.IPA) Cross-Platform Production Builds',
        '16 to 22 Custom Dynamic App Screens & Advanced Business Workflows',
        'Google Play Store Publishing Account Fee ($25) INCLUDED FREE by SiteMint',
        'In-App WhatsApp Automated Ordering & Live Customer Support Integration',
        '350 Free Transactional & Lead Emails / Day via Gmail API',
        'Centralized Multi-Entity Web Admin Portal & Customer Data Ledger',
        '1-Click Mass Broadcast Engine to Notify Users via Email (350 Daily Gmail API)',
        'Full Razorpay 0% UPI Payment Gateway with In-App Digital Invoices',
        'Complete Technical App SEO & Schema Indexing Submission',
        'Live Google Analytics 4 (GA4) Traffic & Active App Users Tracking Dashboard',
        '9 Months Free Technical Maintenance & Error Fixing Guarantee',
        '100% Intellectual Property & Source Code Transfer',
      ],
    },
  ];

  // 3. Video Editing Plans
  const videoPlans = [
    {
      name: 'Starter Reel / Short',
      badge: 'PER VIDEO',
      badgeColor: 'bg-slate-100 text-slate-800 border-slate-200',
      price: '₹499',
      regularPrice: '₹1,200',
      period: 'per video',
      desc: 'Ideal for testing our video editing quality for your Instagram page or YouTube channel.',
      popular: false,
      ctaText: 'Order Single Video',
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
      ctaText: 'Book Creator Pack',
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
      ctaText: 'Get Brand Video Suite',
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
      badgeColor: 'bg-slate-100 text-slate-800 border-slate-200',
      price: '₹4,999',
      regularPrice: '₹9,000',
      period: 'per month',
      desc: 'Essential social media presence for local shops and professionals.',
      popular: false,
      ctaText: 'Start Social Starter',
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
      ctaText: 'Get Business Growth Plan',
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
      ctaText: 'Scale Digital Growth',
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

  const transparencyData = {
    web: {
      title: 'Web & Software — Full Scope, Delivery Time & Fee Transparency',
      badge: 'Website & Web Application Scope Guide',
      scopeItems: [
        { title: 'Kya-Kya Banate Hain (What We Build)', desc: 'Custom mobile & desktop responsive pages, 1-Click WhatsApp direct chat, contact forms with email alerts, admin control panel to manage content, products & inquiries, and sub-2s speed optimization.' },
        { title: 'Source Code & Data Ownership', desc: '100% Full Source Code & Database rights handed over. Zero monthly lock-in fees or software rental charges.' },
      ],
      timelines: [
        { plan: 'Starter Website (₹3,999)', days: '3 - 5 Working Days' },
        { plan: 'Business Website & Management (₹7,999)', days: '7 - 10 Working Days' },
        { plan: 'Professional Business System (₹17,999)', days: '10 - 14 Working Days' },
      ],
      freeInclusions: [
        'SSL HTTPS Security Certificate (100% FREE Lifetime)',
        'Admin Dashboard & Lead Management Portal (100% FREE Lifetime)',
        'Google Maps Embed & Google Search Console Indexing (100% FREE)',
        '60 Days to 1 Year Free Technical Maintenance & Bug Fixes',
        '1 Year Free Custom Domain (.IN/.COM) & Cloud Server (Included in Professional Plan!)',
      ],
      thirdPartyExpenses: [
        { item: 'Custom Domain (.COM / .IN)', cost: '₹799 - ₹999 / year', paidTo: 'Paid directly by client to domain registrar (Hostinger / GoDaddy) — FREE 1st Year in Professional Plan!' },
        { item: 'Cloud Server / Hosting', cost: '₹149 - ₹299 / month', paidTo: 'Paid directly by client to server provider (Hostinger / Vercel / VPS) — FREE 1st Year in Professional Plan!' },
        { item: 'Payment Gateway (Razorpay)', cost: '0% Setup Fee', paidTo: 'Free account setup. Standard 2% transaction fee paid directly to Razorpay when receiving customer payments.' },
      ]
    },
    app: {
      title: 'Mobile Apps — Full Scope, Delivery Time & Fee Transparency',
      badge: 'Android & iOS App Scope Guide',
      scopeItems: [
        { title: 'Kya-Kya Banate Hain (What We Build)', desc: 'Production-ready Flutter cross-platform mobile apps for Android (.AAB) & Apple iOS (.IPA), Firebase push notifications, OTP login, WhatsApp order dispatch, and web admin portal.' },
        { title: 'Source Code & Intellectual Property', desc: '100% Complete App Source Code (Flutter/Dart) & Backend API code handed over completely after project delivery.' },
      ],
      timelines: [
        { plan: 'Starter Dual App (₹12,999)', days: '7 - 10 Working Days' },
        { plan: 'Business Pro App (₹24,999)', days: '14 - 21 Working Days' },
        { plan: 'Professional Custom App (₹39,999)', days: '20 - 30 Working Days' },
      ],
      freeInclusions: [
        'Both Android (.AAB) & Apple iOS (.IPA) Full Production Builds',
        'Web Admin Control Panel for live app banner & content updates (FREE)',
        '350 Free Daily Transactional & Alert Emails via Gmail API (FREE)',
        'Firebase Push Notifications Setup & GA4 Analytics (FREE)',
        'Google Play Store Publishing Account Fee ($25) INCLUDED FREE in Professional App Plan!',
      ],
      thirdPartyExpenses: [
        { item: 'Google Play Console Developer Account', cost: '$25 One-Time (~₹2,100)', paidTo: 'Paid directly to Google for publishing Android apps. (Included FREE by SiteMint in Professional App Plan!)' },
        { item: 'Apple Developer Program Account', cost: '$99 / year (~₹8,300/yr)', paidTo: 'Paid directly to Apple if you want your app published on Apple App Store (Optional for iOS).' },
        { item: 'SMS / OTP Gateway (If used)', cost: '₹0.18 - ₹0.25 / SMS', paidTo: 'Paid directly to SMS gateway provider (Fast2SMS / Msg91) for OTP verification.' },
      ]
    },
    video: {
      title: 'Video Editing — Full Scope, Delivery Time & Fee Transparency',
      badge: 'Video Editing Scope Guide',
      scopeItems: [
        { title: 'Kya-Kya Karte Hain (What We Deliver)', desc: 'Hormozi-style animated subtitles, sound effects (SFX), background music, retention hooks, fast cuts, stock B-Roll footage, color grading, and thumbnail covers.' },
        { title: 'Content Types Covered', desc: 'Instagram Reels, YouTube Shorts, Long-Form Podcasts/Videos, and Meta Video Ad Creatives.' },
      ],
      timelines: [
        { plan: 'Starter Single Reel (₹499)', days: '24 Hours Express Delivery' },
        { plan: 'Creator Growth Pack (₹5,999)', days: 'Batch delivery of 3-4 reels every 3 days' },
        { plan: 'Brand Video Suite (₹11,999)', days: 'Scheduled regular monthly delivery calendar' },
      ],
      freeInclusions: [
        'Copyright-Free Background Music & Premium SFX (FREE)',
        'High-Definition Stock B-Roll Video Clips & Memes (FREE)',
        'Custom Brand Subtitle Presets & Instagram Grid Covers (FREE)',
        '2 Free Revision Rounds per video',
      ],
      thirdPartyExpenses: [
        { item: 'Raw Video Footage / Clips', cost: 'Provided by Client', paidTo: 'Client records and provides raw video recordings or product video clips via Google Drive or Telegram.' },
        { item: 'Third-Party Software / Licenses', cost: '₹0 Zero Extra Cost', paidTo: 'SiteMint covers all editing software, stock library subscriptions, and plugin costs.' },
      ]
    },
    smm: {
      title: 'Social Media Management — Full Scope, Delivery Time & Fee Transparency',
      badge: 'Social Media Scope Guide',
      scopeItems: [
        { title: 'Kya-Kya Karte Hain (What We Manage)', desc: 'Custom high-res post design, carousels, video reels publishing, SEO captions, targeted hashtags, festival graphics, DM inquiry routing to WhatsApp, and monthly growth reports.' },
        { title: 'Platforms Managed', desc: 'Instagram, Facebook, LinkedIn, X (Twitter), Google My Business, and YouTube Shorts.' },
      ],
      timelines: [
        { plan: 'Content Calendar Approval', days: 'Prepared & sent for approval within 48 Hours' },
        { plan: 'Posting Frequency', days: 'Daily or scheduled posting as per plan (15 to 30 posts/month)' },
      ],
      freeInclusions: [
        'Social Media Bio & Profile Branding Optimization (FREE)',
        'Custom Graphic Design, Copywriting & Hashtag Research (FREE)',
        'Comment & DM Inquiry Routing to WhatsApp (FREE)',
        'Monthly Traffic & Follower Growth Summary Report (FREE)',
      ],
      thirdPartyExpenses: [
        { item: 'Meta / Google Paid Ads Budget (If running ads)', cost: 'As per Client Choice (e.g. ₹200 - ₹1,000/day)', paidTo: 'Paid directly by client to Meta (Facebook/Instagram) or Google Ads via client ad manager account. SiteMint charge covers ad setup & management.' },
        { item: 'Influencer Collaboration Fee (Optional)', cost: 'Paid directly to Influencer', paidTo: 'If client wishes to hire external influencers, influencer fee is paid directly by client.' },
      ]
    }
  };

  const planDetailsData = {
    web: [
      {
        planName: 'Starter Website (₹3,999)',
        deliverables: '5 Custom Pages (Home, About, Services, Gallery, Contact), 100% Mobile & Tablet Responsive Layout, 1-Click WhatsApp Chat Widget, Contact Form with Instant Email Alerts, Content Management Admin Panel.',
        timeline: '3 to 5 Working Days (Express Delivery)',
        serverTech: 'Node.js / React CSR Architecture, SSL HTTPS Security, Google Maps Embed & XML Sitemap Indexing.',
        siteMintFree: 'SSL HTTPS Certificate (Lifetime Free), Admin Panel for Content Updates, Google Search Indexing Submission, 60 Days Maintenance, 100% Full Source Code Ownership.',
        clientExpenses: 'Domain Name (.in/.com ~₹799/yr) & Cloud Hosting (~₹149/mo) bought directly by client from Hostinger/GoDaddy. SiteMint performs 100% free server deployment & SSL setup.'
      },
      {
        planName: 'Business Website & Management (₹7,999)',
        deliverables: 'Up to 10 Dynamic Pages / Categories, Online Product Catalog, Razorpay 0% UPI Payment Gateway, Customer Login & Dashboard, WhatsApp Inquiry Dispatch Engine, Admin Control Panel to manage orders & download CSV data, 350 Daily Lead Alerts via Gmail API.',
        timeline: '7 to 10 Working Days',
        serverTech: 'Next.js SSR Engine, React, Tailwind CSS, Razorpay API Integration, Gmail API Integration, GA4 Analytics.',
        siteMintFree: 'Advanced On-Page SEO, Schema.org Structured Data, GA4 Setup, 6 Months Free Technical Maintenance, 100% Code & Database Rights.',
        clientExpenses: 'Domain Name (.in/.com ~₹799/yr) & VPS/Cloud Hosting (~₹299/mo) paid directly to provider by client. 0% Gateway setup fee via Razorpay.'
      },
      {
        planName: 'Professional Business System (₹17,999)',
        deliverables: 'Custom Enterprise Architecture with Unlimited Pages*, Role-Based Admin Portal, Automated WhatsApp Alerts, Mass Email Broadcast (350 Daily Gmail API), Master Revenue & User Dashboard.',
        timeline: '10 to 14 Working Days',
        serverTech: 'Next.js Full-Stack App, Cloud Database, Auto-Scaling Web Server Engine, Enterprise Security Firewall.',
        siteMintFree: '1 Year High-Speed Cloud Hosting (100% FREE), 1 Year Custom Domain (.IN/.COM) (100% FREE), 1 Year SLA Maintenance Support, 100% Source Code Transfer.',
        clientExpenses: '₹0 Extra for 1st Year! Domain & Server are 100% FREE included by SiteMint. Year 2 onwards client renews domain & server directly with vendor.'
      }
    ],
    app: [
      {
        planName: 'Starter Dual-Platform App (₹12,999)',
        deliverables: 'Both Android (.AAB) & Apple iOS (.IPA) Full Production Builds, up to 6 custom screens, WhatsApp direct chat, OTP login, Firebase Push Notifications Engine, Web Admin Panel for banner updates.',
        timeline: '7 to 10 Working Days',
        serverTech: 'Flutter Cross-Platform Native Engine, Firebase Cloud Messaging, REST API Integration.',
        siteMintFree: 'Both Android & iOS Full Source Code, Web Admin Control Panel, 30 Days Free Maintenance.',
        clientExpenses: 'Google Play Developer Account ($25 one-time) & Apple Developer Account ($99/yr optional) paid directly to Google & Apple.'
      },
      {
        planName: 'Business Pro App (₹24,999)',
        deliverables: 'Up to 12 Custom Dynamic Screens, 60fps Micro-Animations, In-App WhatsApp Ordering, 350 Free Daily Alert Emails via Gmail API, Master Web Admin Panel, Razorpay UPI Gateway.',
        timeline: '14 to 21 Working Days',
        serverTech: 'Flutter Cross-Platform Engine, Node.js Backend API, Firebase Cloud Messaging, Razorpay Mobile SDK, Gmail API.',
        siteMintFree: 'Google Play Store & Apple App Store Live Publishing Assistance, 60 Days Maintenance, GA4 App Analytics, 100% Source Code Transfer.',
        clientExpenses: 'Google Play Console ($25) & Apple Developer Account ($99/yr) paid directly to Google & Apple.'
      },
      {
        planName: 'Professional Custom App (₹39,999)',
        deliverables: '16 to 22 Custom Dynamic App Screens, Advanced Business Workflows, Razorpay UPI Invoicing, Master Web Admin Dashboard, Customer Data Ledger, Mass Email Broadcast Engine.',
        timeline: '20 to 30 Working Days',
        serverTech: 'High-Performance Flutter Native Engine, Cloud Database API, Automated Mass Email Pipeline.',
        siteMintFree: 'Google Play Store Publishing Account Fee ($25) INCLUDED FREE by SiteMint! 9 Months Free Maintenance & 100% IP Ownership.',
        clientExpenses: 'Apple Developer Account ($99/yr if iOS published). Play Store $25 account fee is paid FREE by SiteMint!'
      }
    ],
    video: [
      {
        planName: 'Starter Reel / Short (₹499)',
        deliverables: '1 Short-Form Video (up to 60s), Hormozi-style animated subtitles, sound effects (SFX), background music, retention hooks, 24-Hour Express Delivery.',
        timeline: '24 Hours Express Turnaround',
        serverTech: 'Premiere Pro / After Effects 4K Rendering, Audition SFX Cleanup, Color Grading Presets.',
        siteMintFree: 'Copyright-Free Music & SFX Assets, Stock B-Roll Clips, 2 Revision Rounds.',
        clientExpenses: 'RAW Video clips provided by Client via Google Drive / Telegram. Zero extra software tool costs.'
      },
      {
        planName: 'Creator Growth Pack (₹5,999)',
        deliverables: '15 High-Retention Reels/Shorts per Month, Custom Brand Font Presets, Stock B-Roll Insertions, Instagram Grid Covers, Monthly Content Strategy.',
        timeline: 'Batch delivery of 3-4 reels every 3 days',
        serverTech: 'Custom Graphic Presets, 4K Export Pipeline, Dedicated Editor Queue.',
        siteMintFree: 'Thumbnail Covers, Copyright-Free Audio Assets, Dedicated Editor on WhatsApp.',
        clientExpenses: 'RAW Video clips provided by Client. Zero extra software costs.'
      },
      {
        planName: 'Brand Video Suite (₹11,999)',
        deliverables: '30 Reels/Shorts per Month + 2 YouTube Long Videos (up to 15 mins) + 3 High-Converting Meta Commercial Ads, 2D Motion Graphics, CTR YouTube Thumbnails.',
        timeline: 'Scheduled regular monthly delivery calendar',
        serverTech: '2D Motion Graphics, Multi-Cam Podcast Editing, Meta Ad Ratio Exports (9:16, 1:1, 16:9).',
        siteMintFree: 'Unlimited Revisions during active billing, Dedicated Creative Director.',
        clientExpenses: 'RAW Video clips provided by Client. Zero extra software costs.'
      }
    ],
    smm: [
      {
        planName: 'Basic Social Starter (₹4,999)',
        deliverables: '15 Custom Designed Posts per Month, Management on 3 Platforms (Instagram, FB, GMB), Festival Greetings, SEO Captions & Hashtags, Monthly Performance Summary.',
        timeline: 'Content Calendar Approval within 48 Hours, Regular Scheduled Posting',
        serverTech: 'High-Res Photoshop/Illustrator Design, SEO Keyword Optimization, Meta Business Suite.',
        siteMintFree: 'Profile Branding & Bio Optimization, Custom Graphics & Copywriting.',
        clientExpenses: '₹0 extra unless running sponsored paid ads.'
      },
      {
        planName: 'Business Growth Retainer (₹8,999)',
        deliverables: '30 Posts/Month + 4 Video Reels, Management on 7-8 Platforms (IG, FB, LinkedIn, X, GMB, YouTube), Daily Stories, DM Routing to WhatsApp, Meta Ads Campaign Setup.',
        timeline: 'Daily Scheduled Posting & Continuous Audience Engagement',
        serverTech: 'Multi-Channel Publishing Automation, Meta Ads Manager Setup, WhatsApp Direct Lead Routing.',
        siteMintFree: 'Dedicated Account Manager on WhatsApp, Comment & DM Routing.',
        clientExpenses: 'Meta Paid Ads Budget (if running sponsored ads) paid directly by client to Meta via client ad account.'
      },
      {
        planName: 'Full Digital Growth Suite (₹14,999)',
        deliverables: 'Daily Posts + 10 Viral Video Reels per Month, 8-Platform Multi-Channel Omnipresence, Meta & Google Ads Funnel Management, A/B Testing & Retargeting Pixel.',
        timeline: 'Daily Omnipresence Publishing & Continuous Ad Scaling',
        serverTech: 'Meta Pixel & Google Conversion API, A/B Testing Matrix, Omnichannel Retargeting.',
        siteMintFree: 'Dedicated Graphic Designer + Ad Media Buyer, Monthly Growth Roadmap.',
        clientExpenses: 'Meta & Google Ads Budget paid directly by client to Meta/Google.'
      }
    ]
  };

  const currentPlans = 
    activeTab === 'web' ? webPlans :
    activeTab === 'app' ? appPlans :
    activeTab === 'video' ? videoPlans : smmPlans;

  const currentGuide = transparencyData[activeTab];

  const currentPlanDetailsList = planDetailsData[activeTab];
  const selectedPlanDetail = currentPlanDetailsList[selectedPlanIndex] || currentPlanDetailsList[0];

  return (
    <section id="pricing" className="pt-8 pb-16 sm:pt-14 sm:pb-24 relative bg-slate-50/50 overflow-hidden sm:overflow-visible">
      {/* Ambient Background Glowing Orbs */}
      <div className="absolute -top-16 -left-16 w-72 h-72 bg-violet-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-10 -right-20 w-80 h-80 bg-cyan-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 right-10 w-72 h-72 bg-indigo-200/35 rounded-full blur-3xl pointer-events-none" />

      {/* Decorative Dot Grid (Bottom Left) */}
      <div className="absolute bottom-4 left-4 opacity-30 pointer-events-none hidden sm:block">
        <div className="grid grid-cols-6 gap-2">
          {[...Array(18)].map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full bg-violet-400" />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        {!hideHeader && (
          <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-violet-200 text-violet-800 text-xs font-black uppercase tracking-wider mb-4 shadow-2xs">
              <Zap className="w-4 h-4 text-violet-600 animate-pulse" /> 100% Transparent Indian Pricing
            </div>
            
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-slate-900 mb-4 font-sans leading-tight">
              Affordable Plans with <span className="gradient-text-hero">Zero Hidden Charges</span>
            </h1>
            
            <p className="text-slate-600 text-xs sm:text-base font-medium max-w-2xl mx-auto leading-relaxed mb-6">
              Starting at ₹3,999 with 7-day fast delivery, free domain & hosting, WhatsApp integration, and 100% full source code ownership. No surprise renewal bills.
            </p>

            {/* 3 Quick Value Highlights Bar */}
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs text-slate-700 font-bold pt-2 mb-8">
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-slate-200 shadow-2xs">
                <Clock className="w-4 h-4 text-violet-600" /> 7-Day Fast Delivery
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-slate-200 shadow-2xs">
                <ShieldCheck className="w-4 h-4 text-emerald-600" /> Free Domain & SSL Included
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-slate-200 shadow-2xs">
                <Code className="w-4 h-4 text-blue-600" /> 100% Code Ownership
              </span>
            </div>

            {/* 4 Sleek Service Switcher Tabs */}
            <div className="flex flex-wrap items-center justify-center">
              <div className="bg-white p-2 rounded-2xl flex flex-wrap items-center justify-center gap-2 border border-slate-200/90 shadow-md">
                <button
                  onClick={() => setActiveTab('web')}
                  className={`px-5 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer flex items-center gap-2 ${
                    activeTab === 'web'
                      ? 'bg-violet-600 text-white shadow-md shadow-violet-600/30 scale-[1.02]'
                      : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  <Globe className="w-4 h-4" />
                  <span>Web & Software</span>
                </button>

                <button
                  onClick={() => setActiveTab('app')}
                  className={`px-5 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer flex items-center gap-2 ${
                    activeTab === 'app'
                      ? 'bg-violet-600 text-white shadow-md shadow-violet-600/30 scale-[1.02]'
                      : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  <Smartphone className="w-4 h-4" />
                  <span>Mobile Apps</span>
                </button>

                <button
                  onClick={() => setActiveTab('video')}
                  className={`px-5 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer flex items-center gap-2 ${
                    activeTab === 'video'
                      ? 'bg-violet-600 text-white shadow-md shadow-violet-600/30 scale-[1.02]'
                      : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  <Video className="w-4 h-4" />
                  <span>Video Editing</span>
                </button>

                <button
                  onClick={() => handleTabChange('smm')}
                  className={`px-5 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer flex items-center gap-2 ${
                    activeTab === 'smm'
                      ? 'bg-violet-600 text-white shadow-md shadow-violet-600/30 scale-[1.02]'
                      : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  <Share2 className="w-4 h-4" />
                  <span>Social Media</span>
                </button>
              </div>
            </div>

            {/* Quick Jump Button to Detailed Scope & Fee Transparency Guide (Only on /pricing page) */}
            {!isHomePage && (
              <div className="mt-6 flex justify-center">
                <a
                  href="#scope-transparency-guide"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-violet-100/90 hover:bg-violet-200 text-violet-900 text-xs font-black transition-all shadow-2xs border border-violet-200"
                >
                  <Info className="w-4 h-4 text-violet-600 animate-bounce" />
                  <span>View Plan Specs & Fee Guide ↓</span>
                </a>
              </div>
            )}
          </div>
        )}

        {/* 3 CREATIVE LIGHT THEME PRICING CARDS */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch mt-6">
          {currentPlans.map((plan, idx) => {
            const isPopular = plan.popular;
            const isEmerald = plan.freeDomainHosting;

            return (
              <div
                key={idx}
                className={`rounded-[34px] p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 relative overflow-hidden bg-white ${
                  isPopular
                    ? 'border-2 border-violet-600 bg-gradient-to-b from-violet-50/60 via-white to-white shadow-2xl shadow-violet-600/20 lg:-translate-y-3'
                    : isEmerald
                    ? 'border-2 border-emerald-400 bg-gradient-to-b from-emerald-50/50 via-white to-white shadow-xl shadow-emerald-500/10 hover:shadow-2xl'
                    : 'border-2 border-slate-200/90 bg-gradient-to-b from-slate-50/50 via-white to-white shadow-lg hover:border-slate-400 hover:shadow-2xl'
                }`}
              >
                {/* Floating Top Glow Bar for Popular Card */}
                {isPopular && (
                  <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-violet-600 via-indigo-600 to-pink-500" />
                )}

                <div>
                  {/* Badge Header Row */}
                  <div className="flex items-center justify-between gap-2 mb-6">
                    <span className={`text-[10px] sm:text-xs font-black px-4 py-1.5 rounded-full border tracking-widest uppercase shadow-2xs ${
                      isPopular
                        ? 'bg-gradient-to-r from-violet-600 via-indigo-600 to-pink-600 text-white border-transparent shadow-md shadow-violet-500/20'
                        : plan.badgeColor
                    }`}>
                      {plan.badge}
                    </span>
                    {plan.freeDomainHosting && (
                      <span className="text-[10px] font-extrabold px-3 py-1.5 rounded-full bg-emerald-600 text-white shadow-md shadow-emerald-500/20">
                        ⚡ Free Domain + Hosting
                      </span>
                    )}
                  </div>

                  {/* Title & Speaker Audio Icon Row */}
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="text-xl sm:text-2xl font-black text-slate-900 leading-snug">
                      {plan.name}
                    </h3>
                    <button
                      type="button"
                      onClick={() => handlePlayPlanAudio(idx)}
                      className="p-2 rounded-full bg-violet-100 hover:bg-violet-200 text-violet-800 transition-all cursor-pointer shrink-0 border border-violet-200 hover:scale-110 active:scale-95 shadow-2xs"
                      title="Play Hindi Audio Guide for this plan"
                    >
                      <Volume2 className="w-4 h-4 text-violet-700 animate-pulse" />
                    </button>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed mb-6 font-medium">
                    {plan.desc}
                  </p>

                  {/* Price Display */}
                  <div className={`mb-6 p-4.5 rounded-2xl border flex items-baseline justify-between shadow-xs ${
                    isPopular
                      ? 'bg-white border-violet-200/90 shadow-sm'
                      : isEmerald
                      ? 'bg-white border-emerald-200/90 shadow-sm'
                      : 'bg-white border-slate-200/80'
                  }`}>
                    <div>
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                          {plan.price}
                        </span>
                        <span className="text-xs text-slate-500 font-bold">/{plan.period}</span>
                      </div>
                      <div className="text-[11px] text-slate-400 line-through mt-0.5 font-semibold">
                        Regular Price: {plan.regularPrice}
                      </div>
                    </div>
                    <span className="text-[10px] font-black px-3 py-1.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300 tracking-wider uppercase">
                      65% OFF
                    </span>
                  </div>

                  {/* Client Scope Notice if any */}
                  {plan.clientScope && (
                    <div className="mb-5 p-3.5 rounded-2xl bg-amber-50/90 border border-amber-200 text-[11px] text-amber-900 font-semibold leading-relaxed shadow-2xs">
                      <span className="font-black text-amber-800">Note:</span> {plan.clientScope}
                    </div>
                  )}

                  {/* Inclusions Header */}
                  <div className={`text-xs font-black uppercase tracking-wider mb-4 pb-2 border-b ${
                    isPopular
                      ? 'text-violet-700 border-violet-200'
                      : isEmerald
                      ? 'text-emerald-800 border-emerald-200'
                      : 'text-slate-900 border-slate-200'
                  }`}>
                    {plan.includedHeader}
                  </div>

                  {/* Feature Point List */}
                  <div className="space-y-2.5 mb-8">
                    {plan.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-700 font-semibold leading-relaxed p-1.5 rounded-xl hover:bg-slate-100/70 transition-colors">
                        <span className={`w-2 h-2 rounded-full shrink-0 mt-1.5 ${
                          isPopular
                            ? 'bg-violet-600 ring-4 ring-violet-100'
                            : isEmerald
                            ? 'bg-emerald-600 ring-4 ring-emerald-100'
                            : 'bg-slate-600 ring-4 ring-slate-100'
                        }`} />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action CTA Buttons */}
                <div className="pt-4 border-t border-slate-100 flex flex-col gap-2">
                  <a
                    href={plan.ctaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-extrabold transition-all duration-300 flex items-center justify-center gap-2 shadow-md cursor-pointer ${
                      isPopular
                        ? 'bg-gradient-to-r from-violet-600 via-indigo-600 to-violet-700 hover:from-violet-700 hover:to-indigo-800 text-white shadow-violet-600/25'
                        : isEmerald
                        ? 'bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white shadow-emerald-600/20'
                        : 'bg-slate-900 hover:bg-slate-800 text-white shadow-slate-900/20'
                    }`}
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>{plan.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>

                  {!isHomePage && (
                    <button
                      type="button"
                      onClick={() => handleKnowDetails(idx)}
                      className="w-full py-2.5 px-3 rounded-xl text-xs font-extrabold transition-all duration-200 flex items-center justify-center gap-1 bg-slate-100 hover:bg-violet-100 text-slate-800 hover:text-violet-900 border border-slate-200/90 hover:border-violet-300 cursor-pointer"
                    >
                      <Info className="w-3.5 h-3.5 text-violet-600" />
                      <span>Know Details & Scope</span>
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Standalone Center Button below Pricing Cards (if on home page) */}
        {isHomePage && (
          <div className="mt-8 sm:mt-10 text-center">
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full text-xs sm:text-sm font-extrabold bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white shadow-lg shadow-violet-600/30 hover:scale-[1.02] transition-all duration-300 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-white animate-pulse" />
              <span>Explore All Prices in Details</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}

        {/* INTERACTIVE DETAILED PLAN SPECIFICATIONS & SERVER TRANSPARENCY TABLE (Only on /pricing page) */}
        {!isHomePage && (
          <div id="scope-transparency-guide" className="mt-12 sm:mt-16">
            <div className="bg-white border-2 border-violet-200/90 rounded-[32px] p-6 sm:p-10 shadow-2xl relative overflow-hidden">
              {/* Decorative Top Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-2.5 bg-gradient-to-r from-violet-600 via-indigo-600 to-emerald-500" />
              
              {/* Header section with plan switcher pills */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 mb-6 border-b border-slate-200">
                <div>
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-violet-600 text-white text-xs sm:text-sm font-black uppercase tracking-wider shadow-sm">
                      <ShieldCheck className="w-4 h-4 text-emerald-300" /> 100% Client Scope & Technical Transparency
                    </span>

                    {/* Big Interactive Audio Speaker Icon Button */}
                    <button
                      type="button"
                      onClick={handleToggleAudio}
                      className={`p-3 rounded-full transition-all duration-300 cursor-pointer shrink-0 border-2 shadow-xl hover:scale-110 active:scale-95 flex items-center justify-center ${
                        isPlayingAudio
                          ? isPausedAudio
                            ? 'bg-amber-500 hover:bg-amber-600 text-white border-amber-300 ring-4 ring-amber-100'
                            : 'bg-violet-700 hover:bg-violet-800 text-white border-violet-400 ring-4 ring-violet-200 animate-pulse'
                          : 'bg-slate-900 hover:bg-violet-900 text-white border-slate-700 hover:border-violet-400'
                      }`}
                      title={isPlayingAudio ? (isPausedAudio ? "Resume Voice" : "Pause Voice") : "Play Hindi Voice Guide for this plan"}
                    >
                      {isPlayingAudio ? (
                        isPausedAudio ? (
                          <Play className="w-6 h-6 fill-white text-white" />
                        ) : (
                          <Pause className="w-6 h-6 fill-white text-white" />
                        )
                      ) : (
                        <Volume2 className="w-6 h-6 text-emerald-400" />
                      )}
                    </button>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight font-sans">
                    {selectedPlanDetail.planName} Specifications
                  </h2>
                  <p className="text-slate-600 text-xs sm:text-sm mt-1 font-medium leading-relaxed max-w-2xl">
                    Why this section exists: We believe in 100% honesty. Here is the exact breakdown of deliverables, delivery timeline, server technology stack, free SiteMint inclusions, and direct vendor costs before you order.
                  </p>
                </div>

                {/* Plan Switcher Pills inside guide */}
                <div className="flex flex-wrap items-center gap-2">
                  {currentPlanDetailsList.map((p, pIdx) => (
                    <button
                      key={pIdx}
                      onClick={() => setSelectedPlanIndex(pIdx)}
                      className={`px-3.5 py-2 rounded-xl text-xs font-black transition-all cursor-pointer border ${
                        selectedPlanIndex === pIdx
                          ? 'bg-violet-600 text-white border-violet-600 shadow-md shadow-violet-600/25 scale-[1.02]'
                          : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border-slate-200'
                      }`}
                    >
                      {p.planName.split('(')[0].trim()}
                    </button>
                  ))}
                </div>
              </div>

            {/* Clean Professional Specs Table (Meeting / Specs Format) */}
            <div className="overflow-x-auto rounded-2xl border border-slate-200">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <tbody>
                  {/* Row 1: Selected Plan Name */}
                  <tr className="border-b border-slate-200 bg-slate-100/70">
                    <td className="py-3.5 px-5 font-black text-slate-900 w-1/3 sm:w-1/4 uppercase tracking-wider text-xs">
                      Selected Plan & Price
                    </td>
                    <td className="py-3.5 px-5 font-black text-violet-800">
                      {selectedPlanDetail.planName}
                    </td>
                  </tr>

                  {/* Row 2: Scope & Deliverables */}
                  <tr className="border-b border-slate-200 hover:bg-slate-50/50">
                    <td className="py-4 px-5 font-bold text-slate-900 bg-slate-50/70 align-top">
                      Scope & Deliverables
                    </td>
                    <td className="py-4 px-5 text-slate-700 font-medium leading-relaxed">
                      {selectedPlanDetail.deliverables}
                    </td>
                  </tr>

                  {/* Row 3: Delivery Timeline */}
                  <tr className="border-b border-slate-200 hover:bg-slate-50/50">
                    <td className="py-4 px-5 font-bold text-slate-900 bg-slate-50/70 align-top">
                      Delivery Timeline
                    </td>
                    <td className="py-4 px-5 text-indigo-700 font-extrabold">
                      {selectedPlanDetail.timeline}
                    </td>
                  </tr>

                  {/* Row 4: Server, DB & Tech Stack */}
                  <tr className="border-b border-slate-200 hover:bg-slate-50/50">
                    <td className="py-4 px-5 font-bold text-slate-900 bg-slate-50/70 align-top">
                      Server & Tech Stack
                    </td>
                    <td className="py-4 px-5 text-slate-700 font-medium leading-relaxed">
                      {selectedPlanDetail.serverTech}
                    </td>
                  </tr>

                  {/* Row 5: SiteMint Free Inclusions */}
                  <tr className="border-b border-slate-200 hover:bg-slate-50/50">
                    <td className="py-4 px-5 font-bold text-slate-900 bg-slate-50/70 align-top">
                      SiteMint Included Free
                    </td>
                    <td className="py-4 px-5 text-emerald-800 font-semibold leading-relaxed">
                      {selectedPlanDetail.siteMintFree}
                    </td>
                  </tr>

                  {/* Row 6: Third-Party Direct Expenses */}
                  <tr className="hover:bg-slate-50/50">
                    <td className="py-4 px-5 font-bold text-slate-900 bg-slate-50/70 align-top">
                      Third-Party Direct Costs
                    </td>
                    <td className="py-4 px-5 text-amber-900 font-medium leading-relaxed">
                      {selectedPlanDetail.clientExpenses}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Bottom Footer Note */}
            <div className="mt-6 pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-600 font-semibold">
              <span>Zero hidden charges guarantee. You only pay SiteMint for project development. Third-party vendor fees (like Play Store or domains) are paid by you directly to vendors without any margin from us.</span>
              <a
                href="https://wa.me/918920683588?text=Hi%20SiteMint!%20I%20want%20to%20discuss%20project%20details."
                target="_blank"
                rel="noopener noreferrer"
                className="text-violet-700 font-black hover:underline shrink-0"
              >
                Discuss Scope on WhatsApp →
              </a>
            </div>

          </div>
        </div>
      )}

        {/* Custom Estimate Calculator CTA Card */}
        <div className="mt-12 sm:mt-16">
          <div className="p-6 sm:p-10 text-center bg-white border-2 border-violet-200/90 shadow-lg rounded-[32px] relative overflow-hidden">
            <h3 className="text-xl sm:text-3xl font-extrabold tracking-tight text-slate-900 mb-2 sm:mb-3 font-sans">
              Want a Custom Estimate for Your Exact Needs?
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm max-w-xl mx-auto mb-6 leading-relaxed">
              Use our interactive cost calculator to select specific features, page count, and custom add-ons to get an instant tailored price breakdown.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              <Link 
                href="/calculator" 
                className="btn-primary text-xs sm:text-sm !py-3 !px-6 flex items-center gap-2 shadow-md"
              >
                <Calculator className="w-4 h-4 text-white" />
                <span>Open Project Cost Calculator</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="https://wa.me/918920683588?text=Hi%20SiteMint!%20I%20want%20a%20custom%20price%20quote%20for%20my%20business%20requirements."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp text-xs sm:text-sm !py-3 !px-6 shadow-md"
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
