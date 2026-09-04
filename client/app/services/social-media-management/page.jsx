'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  Share2, 
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
  Globe, 
  Target, 
  Users, 
  TrendingUp, 
  SlidersHorizontal,
  Award,
  CheckCheck,
  Flame,
  Radio,
  BarChart3,
  Calendar,
  Image as ImageIcon,
  Send,
  MapPin,
  Megaphone,
  Briefcase,
  Eye,
  Check,
  ChevronRight,
  Heart,
  MessageSquare,
  Bookmark,
  BadgeCheck
} from 'lucide-react';
import { InstagramIcon, LinkedInIcon, FacebookIcon } from '../../../components/SocialIcons';
import RelatedServicesSection from '../../../components/RelatedServicesSection';
import FaqSection from '../../../components/FaqSection';

export default function SocialMediaManagementPage() {
  const [activePlanTab, setActivePlanTab] = useState('business');
  const [activePlatformTab, setActivePlatformTab] = useState('instagram');
  const [selectedCalendarWeek, setSelectedCalendarWeek] = useState(1);

  const smmPlans = {
    starter: {
      id: 'starter',
      name: 'Starter Growth Pack',
      badge: 'ESSENTIAL PRESENCE',
      badgeColor: 'bg-slate-100 text-slate-800 border-slate-300',
      price: '₹4,999',
      regularPrice: '₹10,000',
      discount: '50% OFF',
      period: 'Monthly Retainer',
      target: 'Ideal for local retailers, solo professionals, tutors, doctors, and emerging brands establishing consistent social credibility on a budget.',
      platformScope: '2 Core Platforms: Instagram + Facebook Page Sync',
      cadenceText: '15 High-Quality Branded Graphic Posts / Month (Alternate Days)',
      whatsappMsg: 'Hi SiteMint! I want to start the Starter Social Media Pack (₹4,999/month). Please share onboarding questionnaire.',
      keyPoints: [
        '15 Custom-Branded High-Resolution Graphic Posts / Month',
        'Dual-Platform Publishing: Instagram Feed + Facebook Business Page',
        'Custom Brand Color Palette, Font Hierarchy & Logo Watermarking',
        'Engaging Storytelling Captions with 20+ Researched Targeted Hashtags',
        'Important Festival, Holiday & National Event Greeting Posts Included',
        'Instagram Bio & Profile Optimization (Keywords, Call-to-Action Link)',
        'Basic Comment & Direct Message (DM) Inquiry Forwarding to WhatsApp',
        'Monthly Basic Reach & Engagement Summary Report via WhatsApp',
        'Cancel or Pause Anytime with Zero Long-Term Lock-in Contracts',
        '100% Dedicated Creative Designer Assigned to Your Account',
      ],
      exclusions: [
        'Paid Meta / Facebook Ads management requires the Enterprise tier',
        'Video Reels production is not included in the basic Starter plan',
        'Management on LinkedIn or Google Business Profile requires the Business tier',
      ],
    },
    business: {
      id: 'business',
      name: 'Business 360° Omnichannel Pack',
      badge: 'MOST POPULAR • BEST VALUE ⭐',
      badgeColor: 'bg-violet-50 text-violet-800 border-violet-300',
      price: '₹9,999',
      regularPrice: '₹22,000',
      discount: '55% OFF',
      period: 'Monthly Retainer',
      target: 'Designed for coaching institutes, restaurants/bakeries, D2C e-commerce brands, real estate firms, and clinics aiming for daily social dominance and continuous lead generation.',
      platformScope: '7 Major Platforms: Instagram, Facebook, LinkedIn, Google Business Profile (GMB), YouTube Shorts, Twitter/X & Pinterest',
      cadenceText: '30 Daily Branded Posts + 4 Viral Short Video Reels / Month',
      whatsappMsg: 'Hi SiteMint! I want to order the Business 360° Omnichannel Social Media Pack (₹9,999/month). Please share strategy onboarding.',
      keyPoints: [
        '30 Daily High-Resolution Graphic Creatives & Multi-Slide Informative Carousels',
        '4 Short-Form Viral Video Reels / YouTube Shorts Edited with Subtitles',
        'Full Management Across 7 Platforms (Instagram, FB, LinkedIn, GMB, X, Pinterest, YouTube)',
        'Google My Business (GMB) Weekly Updates, Photos & Local Map SEO Boost',
        'LinkedIn B2B Thought-Leadership & Corporate Credibility Posts',
        'Hyper-Local City Hashtag Research (e.g., #DelhiBakery, #MumbaiCoaching)',
        'Daily Community Management: Fast Replies to Comments & Direct Messages within 2h',
        'Hot Customer Inquiries Instantly Forwarded to Your WhatsApp / Phone',
        'Festival Greeting Banners & Custom Promotional Sales Flyers Included',
        'Comprehensive Monthly Analytics PDF Dashboard (Reach, Follower Growth, Clicks)',
        'Bi-Weekly Content Topic Calendar Shared in Advance for Your Approval',
      ],
      exclusions: [
        'Paid Meta Ads budget (client funds their own Facebook Ad account directly)',
      ],
    },
    enterprise: {
      id: 'enterprise',
      name: 'Enterprise Brand & Meta Ads Suite',
      badge: 'COMPLETE DOMINATION 🚀',
      badgeColor: 'bg-emerald-50 text-emerald-800 border-emerald-300',
      price: '₹18,999',
      regularPrice: '₹40,000',
      discount: '53% OFF',
      period: 'Monthly Retainer',
      target: 'Built for high-growth startups, corporate brands, multi-branch coaching institutes, and D2C businesses scaling paid ad revenue alongside organic reach.',
      platformScope: '8+ Platforms + Complete Meta & Google Sponsored Ads Campaign Management',
      cadenceText: '30 Daily Posts + 10 Viral Video Reels + Full Paid Ads Management',
      whatsappMsg: 'Hi SiteMint! I want to discuss the Enterprise Brand & Meta Ads Suite (₹18,999/month). Please share case studies and consultation call.',
      keyPoints: [
        '30 Daily Premium Branded Posts & Multi-Slide Educational Carousels',
        '10 Viral High-Retention Video Reels with Dynamic Captions & Sound Design',
        'Full Meta Ads Campaign Setup (Instagram & Facebook Lead Generation / Sales Ads)',
        'Audience Targeting, Lookalike Audiences, Retargeting Pixel & Ad Copy Testing',
        'LinkedIn B2B Executive Branding & Industry Thought-Leadership Articles',
        'Google Business Profile Review Reputation Management & Local Map Ranking',
        'Dedicated Senior Social Media Account Manager & Direct Slack / WhatsApp Group',
        'Weekly Strategy Review Video Calls & Creative Alignment Sprints',
        'Custom Infographics, Product Render Mockups & Customer Video Testimonial Edits',
        'Advanced ROI Dashboard: Cost-Per-Lead (CPL), Ad Spend ROAS, and Conversion Metrics',
      ],
      exclusions: [
        'Paid advertising ad spend payable directly to Meta / Google Ad accounts',
      ],
    },
  };

  const interactivePlatforms = {
    instagram: {
      id: 'instagram',
      category: 'INSTAGRAM & FACEBOOK OMNICHANNEL',
      title: 'Daily Visual Branding & High-Save Carousels',
      subtitle: 'Transform your grid into an aesthetic, authoritative storefront that turns casual scrollers into loyal followers and paying customers.',
      badgeStyle: 'bg-violet-50 text-violet-800 border-violet-200',
      features: [
        '30 Daily High-Resolution Posts with Unified Brand Typography & Colors',
        'Multi-Slide Educational Carousels Designed to Maximize Saves & Shares',
        'Story Highlights Icon Suite & SEO-Optimized Bio Keywords',
        'Active DM Answering & Instant Routing of Interested Buyers to WhatsApp',
      ],
      platformName: 'Instagram Grid & Facebook Business Page',
      highlightBadge: '+340% Avg. Reach',
      samplePost: {
        title: '5 Costly Traps in Custom Website Development 🚨',
        handle: '@yourbrand.official',
        stats: '2,480 Likes • 620 Saves • 184 Shares',
        caption: 'Stop paying ₹50,000 for slow WordPress templates. Here is how custom Next.js saves you ₹25,000/yr in maintenance...',
      }
    },
    linkedin: {
      id: 'linkedin',
      category: 'B2B LINKEDIN THOUGHT LEADERSHIP',
      title: 'Corporate Credibility & Founder Authority',
      subtitle: 'Position your company leadership as industry experts to attract high-ticket B2B clients, institutional partnerships, and investor trust.',
      badgeStyle: 'bg-slate-100 text-slate-800 border-slate-200',
      features: [
        'Professional Long-Form Storytelling Posts with High-Engagement Hooks',
        'PDF Document Carousel Sliders Summarizing Case Studies & Whitepapers',
        'Company Page Setup, Employee Advocacy & Showcase Page Optimization',
        'Targeted B2B Inbound Lead Routing for Enterprise Deal Inquiries',
      ],
      platformName: 'LinkedIn Company Page & Founder Profile',
      highlightBadge: 'B2B Authority Engine',
      samplePost: {
        title: 'Case Study: How a Bakery Scaled to ₹3.5L/Mo with WhatsApp Ordering',
        handle: 'Your Brand Technologies • 4.8k followers',
        stats: '1,240 Reactions • 212 Comments • 85 Reposts',
        caption: 'Zero commission to Swiggy/Zomato meant an extra 28% gross profit back into their bakery operations...',
      }
    },
    gmb: {
      id: 'gmb',
      category: 'GOOGLE BUSINESS PROFILE (GMB MAPS)',
      title: 'Local Google Map SEO & Store Footfalls',
      subtitle: 'Rank #1 when customers search for your business locally on Google Maps and Google Search in your exact city and pincode.',
      badgeStyle: 'bg-emerald-50 text-emerald-800 border-emerald-200',
      features: [
        'Weekly Google Business Updates, Special Offers & Product Catalogs',
        'High-Resolution Geotagged Store & Team Photo Uploads',
        'Verified Google Review Generation & Professional Response Management',
        'Direct Call, Website Click & Driving Direction Conversion Tracking',
      ],
      platformName: 'Google Maps & Local Search Engine (GMB)',
      highlightBadge: '#1 Local Map Rank',
      samplePost: {
        title: 'Open Today! Fresh Belgian Truffle Cakes Available in Sector 62',
        handle: 'Google Business Profile • Verified Store',
        stats: '3,800 Monthly Map Views • 240 Direct Phone Calls',
        caption: 'Walk into our store or order directly on WhatsApp with 0% delivery charges.',
      }
    },
    meta_ads: {
      id: 'meta_ads',
      category: 'PERFORMANCE META & INSTAGRAM ADS',
      title: 'High-ROI Paid Lead Generation Campaigns',
      subtitle: 'Run laser-targeted Facebook & Instagram sponsored ads with proven creative copy, custom retargeting audiences, and lowest Cost-Per-Lead (CPL).',
      badgeStyle: 'bg-violet-50 text-violet-800 border-violet-200',
      features: [
        'Custom Creative Static & Video Ad Variants for Continuous A/B Split Testing',
        'Precision Demographics, Pincode & Purchasing Behavior Audience Filters',
        'Meta Pixel & Conversion API Setup for Retargeting Website Visitors',
        'Automated Instant Lead Forms Delivering Verified Phone Numbers to WhatsApp',
      ],
      platformName: 'Meta Ads Manager (Facebook & Instagram)',
      highlightBadge: 'High-ROAS Ad Engine',
      samplePost: {
        title: 'Sponsored: Get a Custom Next.js Business Website at ₹3,999',
        handle: 'Sponsored • Verified Growth Ad',
        stats: '4.8x ROAS • ₹12 Avg. Cost Per Lead (CPL)',
        caption: 'Turn your offline business into a 24/7 online store. Tap "Learn More" to chat on WhatsApp.',
      }
    },
  };

  const calendarWeeks = {
    1: [
      { day: 'Mon', tag: 'Carousel', title: '5 Secrets to Double Online Orders', color: 'bg-violet-50 text-violet-800 border-violet-200' },
      { day: 'Wed', tag: 'Review', title: 'Client Spotlight: 5⭐ Review from Dr. Verma', color: 'bg-emerald-50 text-emerald-800 border-emerald-200' },
      { day: 'Fri', tag: 'Promo', title: 'Weekend Flash Offer: Free Shipping Code', color: 'bg-violet-50 text-violet-800 border-violet-200' },
      { day: 'Sun', tag: 'Reel', title: 'Behind the Scenes: How We Build in 7 Days', color: 'bg-emerald-50 text-emerald-800 border-emerald-200' },
    ],
    2: [
      { day: 'Mon', tag: 'Infographic', title: 'WordPress vs Custom Next.js Cost Math', color: 'bg-violet-50 text-violet-800 border-violet-200' },
      { day: 'Wed', tag: 'Educational', title: 'Why 0% Commission Ordering Saves ₹25k/Mo', color: 'bg-emerald-50 text-emerald-800 border-emerald-200' },
      { day: 'Fri', tag: 'Product', title: 'New Menu Launch & Cake Customizer Preview', color: 'bg-violet-50 text-violet-800 border-violet-200' },
      { day: 'Sun', tag: 'Meme/Trend', title: 'Relatable Business Owner Struggles in 2026', color: 'bg-emerald-50 text-emerald-800 border-emerald-200' },
    ],
    3: [
      { day: 'Mon', tag: 'Case Study', title: 'How Coaching XYZ Gained 140 Admissions', color: 'bg-emerald-50 text-emerald-800 border-emerald-200' },
      { day: 'Wed', tag: 'FAQ Card', title: 'Top 3 Questions Parents Ask Before Enrolling', color: 'bg-violet-50 text-violet-800 border-violet-200' },
      { day: 'Fri', tag: 'Festival', title: 'Festival Greeting & Exclusive Festive Offer', color: 'bg-emerald-50 text-emerald-800 border-emerald-200' },
      { day: 'Sun', tag: 'Founder', title: 'Founder Note: Why We Started This Brand', color: 'bg-violet-50 text-violet-800 border-violet-200' },
    ],
    4: [
      { day: 'Mon', tag: 'Checklist', title: 'Monthly Small Business Marketing Audit', color: 'bg-violet-50 text-violet-800 border-violet-200' },
      { day: 'Wed', tag: 'Tips', title: '3 Free WhatsApp Hacks for Repeat Customers', color: 'bg-emerald-50 text-emerald-800 border-emerald-200' },
      { day: 'Fri', tag: 'Urgency', title: 'End-of-Month Discount Slot Booking', color: 'bg-violet-50 text-violet-800 border-violet-200' },
      { day: 'Sun', tag: 'Highlights', title: 'Month in Review & Milestone Celebration 🎉', color: 'bg-emerald-50 text-emerald-800 border-emerald-200' },
    ],
  };

  const coreCapabilities = [
    {
      num: '01',
      icon: ImageIcon,
      title: 'Daily Branded Visual Creatives',
      desc: '30 custom-designed posts every month reflecting your exact brand colors, typography, logos, and product photos for an instantly recognizable aesthetic.',
      badge: '30 Posts/Month',
      badgeColor: 'bg-violet-50 text-violet-800 border-violet-200',
      borderClass: 'border-2 border-violet-200 hover:border-violet-400 shadow-sm hover:shadow-violet-500/10',
      preview: {
        title: '1080x1080 HD Posts',
        subtitle: 'Canva Pro & Vector Artwork',
        tag: 'Brand Identity'
      }
    },
    {
      num: '02',
      icon: Layers,
      title: 'High-Save Infographic Carousels',
      desc: 'Multi-slide educational swipe graphics that break down complex topics, case studies, and tips, dramatically boosting algorithm saves and viral shares.',
      badge: '+60% More Saves',
      badgeColor: 'bg-emerald-50 text-emerald-800 border-emerald-200',
      borderClass: 'border-2 border-emerald-200 hover:border-emerald-400 shadow-sm hover:shadow-emerald-500/10',
      preview: {
        title: 'Swipeable Multi-Slide',
        subtitle: 'High-Retention Educational Guides',
        tag: 'Viral Reach'
      }
    },
    {
      num: '03',
      icon: Target,
      title: 'Local SEO & City Hashtag Clouds',
      desc: 'City-specific hashtag research (#NoidaStartups, #DelhiDoctors) and search-optimized captions so local customers discover your page organically.',
      badge: 'City-Specific SEO',
      badgeColor: 'bg-violet-50 text-violet-800 border-violet-200',
      borderClass: 'border-2 border-violet-200 hover:border-violet-400 shadow-sm hover:shadow-violet-500/10',
      preview: {
        title: 'Hyper-Local Discovery',
        subtitle: 'Top 30 High-Volume Keywords',
        tag: 'Organic Rank'
      }
    },
    {
      num: '04',
      icon: MessageCircle,
      title: 'Active DM & Comment Lead Routing',
      desc: 'Never lose an interested buyer. We reply to customer comments and direct message inquiries within 2 hours, routing hot buyer leads straight to your WhatsApp.',
      badge: 'Hot Lead Forwarding',
      badgeColor: 'bg-emerald-50 text-emerald-800 border-emerald-200',
      borderClass: 'border-2 border-emerald-200 hover:border-emerald-400 shadow-sm hover:shadow-emerald-500/10',
      preview: {
        title: 'WhatsApp Lead Alert',
        subtitle: 'Instant Customer Inquiry Handover',
        tag: '2h SLA Reply'
      }
    },
    {
      num: '05',
      icon: MapPin,
      title: 'Google Business Profile (GMB) Growth',
      desc: 'Weekly updates, promotional offer banners, and geotagged photo uploads to push your store to the top 3 Google Local Map Pack results.',
      badge: '#1 Map Ranking',
      badgeColor: 'bg-violet-50 text-violet-800 border-violet-200',
      borderClass: 'border-2 border-violet-200 hover:border-violet-400 shadow-sm hover:shadow-violet-500/10',
      preview: {
        title: 'Google Map Presence',
        subtitle: 'Store Direction & Phone Calls',
        tag: 'Local Pack'
      }
    },
    {
      num: '06',
      icon: Megaphone,
      title: 'High-ROI Meta & Instagram Ads',
      desc: 'Sponsored paid lead generation and sales ad campaigns on Facebook and Instagram with custom demographic targeting and low Cost-Per-Lead (CPL).',
      badge: '4.8x Avg. ROAS',
      badgeColor: 'bg-emerald-50 text-emerald-800 border-emerald-200',
      borderClass: 'border-2 border-emerald-200 hover:border-emerald-400 shadow-sm hover:shadow-emerald-500/10',
      preview: {
        title: 'Meta Ads Manager',
        subtitle: 'Custom Audiences & Pixel Setup',
        tag: 'Paid Growth'
      }
    },
  ];

  const smmPipeline = [
    {
      step: '01',
      title: 'Brand Audit & Content Calendar',
      days: 'Days 1–3',
      desc: 'We audit your profiles, optimize bio keywords, establish brand color palettes, and provide a 30-day topic calendar for your review & approval.',
      items: ['Profile Bio SEO Audit', 'Brand Style Guide Setup', '30-Day Topic Calendar']
    },
    {
      step: '02',
      title: 'Creative Graphic Design & Copywriting',
      days: 'Days 4–7',
      desc: 'Our graphic design team produces custom branded posts, multi-slide carousels, engaging storytelling captions, and localized hashtag clouds.',
      items: ['Custom Vector Artwork', 'Multi-Slide Carousels', 'Engaging SEO Captions']
    },
    {
      step: '03',
      title: 'Multi-Platform Publishing & Scheduling',
      days: 'Days 8–28',
      desc: 'Automated publishing during peak engagement hours across Instagram, Facebook, LinkedIn, Google Business, Twitter/X, and Pinterest.',
      items: ['Peak-Hour Scheduling', '7 Platforms Cross-Post', 'Festival Banners Sync']
    },
    {
      step: '04',
      title: 'Community Engagement & Lead Routing',
      days: 'Daily 24/7',
      desc: 'Continuous moderation of comments, answering customer DMs within 2 hours, and forwarding qualified buyer phone numbers to your WhatsApp.',
      items: ['2-Hour DM Reply SLA', 'Comment Moderation', 'WhatsApp Lead Alerts']
    },
    {
      step: '05',
      title: 'Monthly Analytics & Strategy Review',
      days: 'Days 29–30',
      desc: 'Detailed monthly performance PDF dashboard showing follower reach, top-performing posts, website clicks, and strategy blueprint for the next month.',
      items: ['Monthly PDF Dashboard', 'Top Posts Analysis', 'Next Month Roadmap']
    },
  ];

  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://sitemint.in',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Services',
            item: 'https://sitemint.in/services',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Social Media Management',
            item: 'https://sitemint.in/services/social-media-management',
          },
        ],
      },
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
        '@id': 'https://sitemint.in/services/social-media-management#service',
        name: 'Social Media Management & Digital Marketing Services in India',
        serviceType: 'Social Media Marketing & Brand Management',
        provider: {
          '@id': 'https://sitemint.in/#organization',
        },
        areaServed: {
          '@type': 'Country',
          name: 'India',
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.9',
          reviewCount: '380',
          bestRating: '5',
          worstRating: '1',
        },
        description:
          'Comprehensive social media management services across 7+ platforms starting at ₹4,999/month. Daily post design, viral carousels, Google Business Profile SEO, community DM lead routing, and Meta Ads management.',
        offers: [
          {
            '@type': 'Offer',
            name: 'Starter Growth Pack (15 Posts/Mo)',
            price: '4999',
            priceCurrency: 'INR',
            availability: 'https://schema.org/InStock',
            validFrom: '2026-01-01',
          },
          {
            '@type': 'Offer',
            name: 'Business 360° Omnichannel Pack (30 Posts + 4 Reels)',
            price: '9999',
            priceCurrency: 'INR',
            availability: 'https://schema.org/InStock',
            validFrom: '2026-01-01',
          },
          {
            '@type': 'Offer',
            name: 'Enterprise Brand & Meta Ads Suite',
            price: '18999',
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
            name: 'How much does social media management cost in India?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'At SiteMint, social media management starts at ₹4,999/month for the Starter Pack (15 branded posts/month across Instagram & Facebook). Our most popular Business 360° Omnichannel Pack is ₹9,999/month, covering 7 platforms with 30 daily posts, 4 viral video reels, GMB map SEO, and DM lead routing.',
            },
          },
          {
            '@type': 'Question',
            name: 'Which social media platforms do you manage?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'We manage all major platforms including Instagram, Facebook Business Page, LinkedIn (Company & Founder profiles), Google Business Profile (GMB Maps), YouTube Shorts, Twitter/X, and Pinterest.',
            },
          },
          {
            '@type': 'Question',
            name: 'Do I get to approve the posts before they are published?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes! We create a bi-weekly content calendar with graphic previews, captions, and hashtags and share it via WhatsApp / Google Drive for your review and approval before publishing.',
            },
          },
          {
            '@type': 'Question',
            name: 'How do customer inquiries and DMs get handled?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Our team monitors comments and direct message inquiries daily within a 2-hour SLA. Whenever a customer asks about prices, appointments, or services, we collect their phone number and immediately forward the lead to your WhatsApp.',
            },
          },
          {
            '@type': 'Question',
            name: 'Is there a long-term contract or lock-in?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No long-term contracts! All our social media management plans operate on a flexible month-to-month retainer. You can pause, upgrade, or cancel anytime with zero cancellation penalties.',
            },
          },
        ],
      },
    ],
  };

  const selectedPlan = smmPlans[activePlanTab];
  const selectedPlatform = interactivePlatforms[activePlatformTab];

  return (
    <div className="w-full pt-8 pb-16 sm:pt-12 sm:pb-24 bg-white text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HERO SECTION: SiteMint Signature Brand Palette (Royal Violet + Mint Green) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16 sm:mb-20">
          
          {/* Left Column: Hero Copy & Matching Brand Badges */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-50 border border-violet-200 text-violet-800 text-xs font-bold uppercase tracking-wider mb-4 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-violet-600" />
              <span>Full-Stack Omnichannel Growth Studio</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-slate-900 leading-tight mb-4 tracking-tight font-sans">
              Scale Your Brand Reach Across <br className="hidden sm:inline" />
              <span className="gradient-text-hero">
                7+ Social Platforms
              </span>
            </h1>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 font-normal max-w-2xl">
              Replace an expensive 4-person in-house marketing team. From daily high-res graphic creatives & viral carousels to Google Map SEO & 2-hour WhatsApp lead forwarding.
            </p>

            {/* Omnichannel Platform Badges Grid (SiteMint Brand Harmonious Theme) */}
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1.5 rounded-xl bg-violet-50 border border-violet-200 text-violet-800 text-xs font-bold flex items-center gap-1.5 shadow-2xs">
                <span>📸</span> Instagram
              </span>
              <span className="px-3 py-1.5 rounded-xl bg-slate-100 border border-slate-200 text-slate-800 text-xs font-bold flex items-center gap-1.5 shadow-2xs">
                <span>📘</span> Facebook
              </span>
              <span className="px-3 py-1.5 rounded-xl bg-violet-50 border border-violet-200 text-violet-800 text-xs font-bold flex items-center gap-1.5 shadow-2xs">
                <span>💼</span> LinkedIn B2B
              </span>
              <span className="px-3 py-1.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold flex items-center gap-1.5 shadow-2xs">
                <span>📍</span> Google Maps (GMB)
              </span>
              <span className="px-3 py-1.5 rounded-xl bg-slate-100 border border-slate-200 text-slate-800 text-xs font-bold flex items-center gap-1.5 shadow-2xs">
                <span>▶️</span> YouTube Shorts
              </span>
              <span className="px-3 py-1.5 rounded-xl bg-slate-100 border border-slate-200 text-slate-800 text-xs font-bold flex items-center gap-1.5 shadow-2xs">
                <span>✖️</span> X / Twitter
              </span>
              <span className="px-3 py-1.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold flex items-center gap-1.5 shadow-2xs">
                <span>💬</span> WhatsApp CRM
              </span>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 sm:gap-4 mb-6">
              <a
                href="https://wa.me/918920683588?text=Hi%20SiteMint!%20I%20want%20to%20grow%20my%20business%20with%20Social%20Media%20Management.%20Please%20share%20monthly%20plans."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp text-xs sm:text-sm !py-3 !px-6 shadow-md font-bold flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Discuss Social Plan on WhatsApp</span>
              </a>

              <Link
                href="/calculator"
                className="btn-secondary text-xs sm:text-sm !py-3 !px-5 font-bold flex items-center gap-2"
              >
                <Calculator className="w-4 h-4 text-violet-600" />
                <span>Calculate Monthly Cost</span>
              </Link>
            </div>

            <div className="flex flex-wrap items-center gap-3 sm:gap-5 text-xs text-slate-500 font-medium">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> 30 Daily Branded Posts
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> 2-Hour DM Lead Routing
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Month-to-Month Flex
              </span>
            </div>
          </div>

          {/* Right Column: SiteMint Clean White & Mint Glass Brand Card */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl p-6 sm:p-7 bg-white border-2 border-violet-200 shadow-xl relative overflow-hidden space-y-4">
              
              {/* Top Profile Bar */}
              <div className="flex items-center justify-between pb-3.5 border-b border-slate-100">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-2xl bg-violet-600 text-white flex items-center justify-center font-black text-xs shadow-md shadow-violet-500/20">
                    SM
                  </div>
                  <div>
                    <div className="flex items-center gap-1 font-bold text-sm text-slate-900">
                      <span>@yourbrand.official</span>
                      <BadgeCheck className="w-4 h-4 text-violet-600 inline fill-violet-100" />
                    </div>
                    <div className="text-[11px] text-slate-500 font-medium">24.8K Followers • Verified Brand</div>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-[10px] font-bold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                  Live Sync
                </span>
              </div>

              {/* 3 Brand Metric Badges (Violet + Mint) */}
              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="p-2.5 rounded-2xl bg-emerald-50/70 border border-emerald-200">
                  <div className="text-[10px] text-emerald-800 font-semibold">Reach</div>
                  <div className="font-black text-emerald-700 text-base font-mono">+380%</div>
                  <div className="text-[9px] text-emerald-600/80">Monthly Growth</div>
                </div>
                <div className="p-2.5 rounded-2xl bg-violet-50/70 border border-violet-200">
                  <div className="text-[10px] text-violet-800 font-semibold">Cadence</div>
                  <div className="font-black text-violet-700 text-base font-mono">30 Posts</div>
                  <div className="text-[9px] text-violet-600/80">Daily Scheduled</div>
                </div>
                <div className="p-2.5 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="text-[10px] text-slate-600 font-semibold">Response</div>
                  <div className="font-black text-slate-900 text-base font-mono">&lt; 2h</div>
                  <div className="text-[9px] text-slate-500">WhatsApp SLA</div>
                </div>
              </div>

              {/* High-End Clean Post Simulation Card (Violet & Emerald Brand Palette) */}
              <div className="p-4 rounded-2xl bg-violet-50/40 border-2 border-violet-100 shadow-2xs space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="px-2.5 py-0.5 rounded-full bg-violet-100 text-violet-800 font-bold text-[10px]">
                    🔥 Top Performing Carousel
                  </span>
                  <span className="text-[11px] text-slate-500 font-medium">Published Today</span>
                </div>

                <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-1.5">
                  <div className="text-xs sm:text-sm font-extrabold text-slate-900 leading-snug">
                    "How We Helped a Local Client Generate <br className="hidden sm:inline" />
                    <span className="text-violet-700">₹3.5 Lakh Online Orders in 30 Days</span>" 🚀
                  </div>
                  <p className="text-[11px] text-slate-500 line-clamp-1">
                    #LocalBusiness #DelhiStartups #BakeryMarketing #ZeroCommission
                  </p>
                </div>

                <div className="flex items-center justify-between text-xs font-bold pt-1 border-t border-slate-100 text-slate-600">
                  <span className="text-violet-700 flex items-center gap-1">❤️ 2,480 Likes</span>
                  <span className="text-slate-700 flex items-center gap-1">💬 184 Comments</span>
                  <span className="text-emerald-700 flex items-center gap-1">🔖 620 Saves</span>
                </div>
              </div>

              {/* Live WhatsApp Lead Forwarding Notification Bubble */}
              <div className="p-3 rounded-2xl bg-emerald-50 border-2 border-emerald-200 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 animate-ping" />
                  <div>
                    <div className="font-bold text-emerald-900 text-xs">WhatsApp Hot Lead Forwarded</div>
                    <div className="text-[11px] text-emerald-700">"Rahul: Hi, I saw your post! Please share details."</div>
                  </div>
                </div>
                <span className="font-mono text-emerald-800 font-bold text-[10px] bg-white px-2 py-0.5 rounded-md border border-emerald-200">
                  Just now
                </span>
              </div>

              {/* Direct Booking CTA */}
              <a
                href="https://wa.me/918920683588?text=Hi%20SiteMint!%20I%20want%20to%20start%20Social%20Media%20Management%20for%20my%20business."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-2xl bg-violet-600 hover:bg-violet-700 text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition shadow-md hover:shadow-lg"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Start 30-Day Social Media Growth</span>
              </a>

              {/* Official Social Proof Links (Circular Logos) */}
              <div className="pt-2.5 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span className="font-bold text-slate-800 text-[11px]">Follow Our Agency:</span>
                <div className="flex items-center gap-2.5">
                  <a
                    href="https://www.instagram.com/sitemint.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Follow SiteMint on Instagram"
                    className="w-7 h-7 rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white flex items-center justify-center shadow-xs hover:scale-115 transition-transform"
                  >
                    <InstagramIcon className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/sitemint002sep02/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Connect with SiteMint on LinkedIn"
                    className="w-7 h-7 rounded-full bg-[#0A66C2] text-white flex items-center justify-center shadow-xs hover:scale-115 transition-transform"
                  >
                    <LinkedInIcon className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href="https://www.facebook.com/profile.php?id=61593961025592"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Follow SiteMint on Facebook"
                    className="w-7 h-7 rounded-full bg-[#1877F2] text-white flex items-center justify-center shadow-xs hover:scale-115 transition-transform"
                  >
                    <FacebookIcon className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* 3 Transparent Pricing Packages (SiteMint Brand Matched) */}
        <div className="mb-20 sm:mb-24">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-50 border border-violet-200 text-violet-800 text-xs font-bold uppercase tracking-wider mb-3 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-violet-600" />
              <span>Transparent Monthly Retainers</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 leading-tight font-sans">
              Choose Your Social Media Growth Plan <br className="hidden sm:inline" />
              <span className="gradient-text-hero">
                Zero Long-Term Lock-in
              </span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto mt-2">
              All plans include custom graphic design, engaging copywriting, hashtag research, community replies, and WhatsApp lead routing.
            </p>
          </div>

          {/* Interactive Plan Tab Switcher */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 mb-8">
            {Object.keys(smmPlans).map((pKey) => {
              const p = smmPlans[pKey];
              const isSel = activePlanTab === pKey;
              return (
                <button
                  key={pKey}
                  onClick={() => setActivePlanTab(pKey)}
                  className={`px-4 sm:px-6 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
                    isSel
                      ? 'bg-violet-600 text-white shadow-md scale-105'
                      : 'bg-white text-slate-700 border border-slate-200 hover:border-violet-300 hover:bg-violet-50/40'
                  }`}
                >
                  <span>{pKey === 'starter' ? '🌱' : pKey === 'business' ? '⭐' : '🚀'}</span>
                  <span>{p.name.split(' ')[0]} {p.name.split(' ')[1]}</span>
                  <span className={`text-[10px] px-2 py-0.5 rounded-full ${isSel ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-600'}`}>
                    {p.price}/mo
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Pricing Card Details (Clean Light Aesthetic) */}
          <div className="p-6 sm:p-10 rounded-3xl bg-white border-2 border-slate-200 shadow-xl relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Plan Specifications */}
              <div className="lg:col-span-7">
                <div className="flex flex-wrap items-center gap-2.5 mb-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold border ${selectedPlan.badgeColor}`}>
                    {selectedPlan.badge}
                  </span>
                  <span className="text-xs font-mono font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                    {selectedPlan.discount}
                  </span>
                </div>

                <div className="flex items-baseline gap-3 mb-1">
                  <span className="text-3xl sm:text-5xl font-black text-slate-900 font-sans">{selectedPlan.price}</span>
                  <span className="text-sm sm:text-base text-slate-400 line-through font-mono">{selectedPlan.regularPrice}</span>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider font-mono">/ Month</span>
                </div>

                <p className="text-xs sm:text-sm text-violet-700 font-bold mb-4">
                  {selectedPlan.cadenceText}
                </p>

                <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                  {selectedPlan.target}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6">
                  <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200 flex items-center gap-2 text-xs">
                    <Globe className="w-4 h-4 text-violet-600 shrink-0" />
                    <span className="font-semibold text-slate-800">{selectedPlan.platformScope}</span>
                  </div>
                  <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200 flex items-center gap-2 text-xs">
                    <Calendar className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span className="font-semibold text-slate-800">Month-to-Month Retainer</span>
                  </div>
                </div>

                <div className="space-y-2 mb-8">
                  {selectedPlan.keyPoints.map((pt, ptIdx) => (
                    <div key={ptIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  <a
                    href={`https://wa.me/918920683588?text=${encodeURIComponent(selectedPlan.whatsappMsg)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-whatsapp text-xs sm:text-sm !py-3 !px-6 font-bold shadow-sm inline-flex items-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Order {selectedPlan.name} on WhatsApp</span>
                  </a>

                  <Link
                    href="/calculator"
                    className="btn-secondary text-xs sm:text-sm !py-3 !px-5 font-bold inline-flex items-center gap-1.5"
                  >
                    <Calculator className="w-3.5 h-3.5 text-violet-600" />
                    <span>Calculate Custom Package</span>
                  </Link>
                </div>
              </div>

              {/* Right Column: Clean White Creative Tools Panel (SiteMint Brand Palette) */}
              <div className="lg:col-span-5">
                <div className="p-6 rounded-3xl bg-violet-50/50 border-2 border-violet-200 shadow-sm space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-violet-100 text-xs">
                    <span className="text-violet-900 font-bold font-mono">GROWTH TOOLKIT</span>
                    <span className="px-2.5 py-0.5 rounded-full bg-violet-100 text-violet-800 text-[10px] font-bold">
                      Agency Standard
                    </span>
                  </div>

                  <div className="space-y-2.5 text-xs">
                    <div className="p-3 rounded-2xl bg-white border border-violet-100 shadow-2xs flex items-center justify-between">
                      <span className="font-bold text-slate-900 flex items-center gap-2">
                        <span>🎨 Canva Pro & Adobe Illustrator</span>
                      </span>
                      <span className="text-violet-700 font-mono text-[11px] font-bold">Brand Design</span>
                    </div>

                    <div className="p-3 rounded-2xl bg-white border border-violet-100 shadow-2xs flex items-center justify-between">
                      <span className="font-bold text-slate-900 flex items-center gap-2">
                        <span>📊 Meta Business Suite & Pixel</span>
                      </span>
                      <span className="text-violet-700 font-mono text-[11px] font-bold">Ads & Analytics</span>
                    </div>

                    <div className="p-3 rounded-2xl bg-white border border-violet-100 shadow-2xs flex items-center justify-between">
                      <span className="font-bold text-slate-900 flex items-center gap-2">
                        <span>📍 Google Business Profile Manager</span>
                      </span>
                      <span className="text-emerald-700 font-mono text-[11px] font-bold">Local Map SEO</span>
                    </div>

                    <div className="p-3 rounded-2xl bg-white border border-violet-100 shadow-2xs flex items-center justify-between">
                      <span className="font-bold text-slate-900 flex items-center gap-2">
                        <span>💬 WhatsApp Business Lead API</span>
                      </span>
                      <span className="text-emerald-700 font-mono text-[11px] font-bold">Instant Alerts</span>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-violet-100 text-[11px] text-slate-600 leading-relaxed">
                    💡 <strong>Workflow Simplicity:</strong> Share your brand guidelines on WhatsApp $\rightarrow$ We deliver bi-weekly content calendars for 1-click approval $\rightarrow$ Automated daily publishing + WhatsApp lead routing!
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* 30-Day Visual Content Calendar & Post Grid (SiteMint Brand Harmonious) */}
        <div className="mb-20 sm:mb-24 p-6 sm:p-10 rounded-3xl bg-white border-2 border-violet-200 shadow-xl relative overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-100">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-50 text-violet-800 border border-violet-200 text-xs font-bold uppercase tracking-wider mb-2">
                <Calendar className="w-3.5 h-3.5 text-violet-600" />
                <span>Live Sample Content Calendar</span>
              </div>
              <h2 className="text-xl sm:text-3xl font-black text-slate-900 font-sans">
                Explore a 30-Day Visual Content Roadmap
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Every post is mapped out in advance to ensure consistent storytelling, high saves, and weekend conversions.
              </p>
            </div>

            {/* Week Switcher Pills */}
            <div className="flex items-center gap-2 self-start sm:self-center">
              {[1, 2, 3, 4].map((wk) => (
                <button
                  key={wk}
                  onClick={() => setSelectedCalendarWeek(wk)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                    selectedCalendarWeek === wk
                      ? 'bg-violet-600 text-white shadow-md'
                      : 'bg-slate-100 text-slate-700 hover:bg-violet-50 hover:text-violet-700'
                  }`}
                >
                  Week {wk}
                </button>
              ))}
            </div>
          </div>

          {/* 4 Post Cards for Selected Week */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {calendarWeeks[selectedCalendarWeek].map((post, pIdx) => (
              <div
                key={pIdx}
                className="p-4 rounded-2xl bg-slate-50/80 border border-slate-200 flex flex-col justify-between space-y-3 hover:border-violet-400 hover:bg-violet-50/30 transition group"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-mono font-bold text-violet-700">{post.day}</span>
                    <span className={`px-2 py-0.5 rounded-md text-[10px] font-bold border ${post.color}`}>
                      {post.tag}
                    </span>
                  </div>
                  <h3 className="font-bold text-slate-900 text-xs sm:text-sm leading-snug group-hover:text-violet-700 transition-colors">
                    {post.title}
                  </h3>
                </div>

                <div className="pt-2 border-t border-slate-200/80 text-[10px] text-slate-500 flex items-center justify-between">
                  <span>1080x1080 HD Graphic</span>
                  <span className="text-emerald-700 font-bold">Approved ✅</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
            <span>⚡ Every monthly retainer receives a custom Google Drive / Notion calendar for 1-click review.</span>
            <a
              href="https://wa.me/918920683588?text=Hi%20SiteMint!%20Please%20share%20a%20sample%2030-day%20social%20media%20calendar%20for%20my%20niche."
              target="_blank"
              rel="noopener noreferrer"
              className="text-violet-700 hover:text-violet-800 font-bold flex items-center gap-1"
            >
              <span>Request Custom Niche Calendar</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Platform Strategy Matrix (Interactive Tabs) */}
        <div className="mb-20 sm:mb-24">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-50 border border-violet-200 text-violet-800 text-xs font-bold uppercase tracking-wider mb-3 shadow-2xs">
              <Layers className="w-3.5 h-3.5 text-violet-600" />
              <span>Platform Strategy Matrix</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 leading-tight font-sans">
              Tailored Multi-Channel Growth <br className="hidden sm:inline" />
              <span className="gradient-text-hero">
                By Platform Architecture
              </span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto mt-2">
              Select a platform to explore our specialized content strategy, lead capture mechanics, and organic algorithm distribution engines.
            </p>
          </div>

          {/* Centered Horizontal Pill Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 mb-8">
            {Object.keys(interactivePlatforms).map((plKey) => {
              const pl = interactivePlatforms[plKey];
              const isSel = activePlatformTab === plKey;
              return (
                <button
                  key={plKey}
                  onClick={() => setActivePlatformTab(plKey)}
                  className={`px-4 sm:px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
                    isSel
                      ? 'bg-violet-600 text-white shadow-md scale-105'
                      : 'bg-white text-slate-700 border border-slate-200 hover:border-violet-300 hover:bg-violet-50/40'
                  }`}
                >
                  <span>{plKey === 'instagram' ? '📸' : plKey === 'linkedin' ? '💼' : plKey === 'gmb' ? '📍' : '🎯'}</span>
                  <span>{pl.category.split(' ')[0]} {pl.category.split(' ')[1]}</span>
                </button>
              );
            })}
          </div>

          {/* 2-Column Showcase Card */}
          <div className="p-6 sm:p-10 rounded-3xl bg-white border-2 border-slate-200 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative overflow-hidden">
            
            {/* Left Column: Platform Specs */}
            <div className="lg:col-span-6">
              <span className="inline-block px-3 py-1 rounded-full bg-violet-50 text-violet-800 border border-violet-200 text-xs font-bold uppercase tracking-wider mb-3">
                {selectedPlatform.category}
              </span>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3 font-sans leading-tight">
                {selectedPlatform.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                {selectedPlatform.subtitle}
              </p>

              <div className="space-y-2.5 mb-8">
                {selectedPlatform.features.map((feat, fIdx) => (
                  <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href={`https://wa.me/918920683588?text=Hi%20SiteMint!%20I%20want%20to%20grow%20my%20${encodeURIComponent(selectedPlatform.title)}.%20Please%20share%20strategy.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp text-xs !py-3 !px-6 inline-flex items-center gap-2 shadow-xs font-bold"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Order {selectedPlatform.category.split(' ')[0]} Plan</span>
                </a>

                <Link
                  href="/calculator"
                  className="btn-secondary text-xs !py-3 !px-5 inline-flex items-center gap-1.5 font-bold"
                >
                  <Calculator className="w-3.5 h-3.5 text-violet-600" />
                  <span>Calculate Cost</span>
                </Link>
              </div>
            </div>

            {/* Right Column: Clean White Terminal Card */}
            <div className="lg:col-span-6">
              <div className="p-6 sm:p-7 rounded-3xl bg-slate-50/80 border-2 border-violet-200 shadow-sm relative overflow-hidden space-y-4">
                
                <div className="flex items-center justify-between pb-3.5 border-b border-slate-200 text-xs">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                    </div>
                    <span className="text-[11px] text-slate-600 font-mono font-medium ml-1">
                      {selectedPlatform.category.toLowerCase().replace(/\s+/g, '-')}-engine.v2
                    </span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-violet-100 text-violet-800 text-[10px] font-bold">
                    {selectedPlatform.highlightBadge}
                  </span>
                </div>

                <div className="space-y-3">
                  <div className="p-3.5 rounded-2xl bg-white border border-violet-200 shadow-2xs">
                    <div className="flex justify-between items-center text-xs font-bold mb-1">
                      <span className="text-slate-900">🚀 {selectedPlatform.platformName}</span>
                      <span className="text-emerald-700 font-mono">Active Management</span>
                    </div>
                    <p className="text-[11px] text-slate-600 leading-relaxed font-sans font-medium">
                      {selectedPlatform.samplePost.title}
                    </p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-2xs">
                    <div className="flex justify-between items-center text-[10px] font-mono text-violet-700 font-bold mb-1">
                      <span>{selectedPlatform.samplePost.handle}</span>
                      <span className="text-slate-500 font-normal">{selectedPlatform.samplePost.stats}</span>
                    </div>
                    <div className="text-xs text-slate-700 italic font-serif">
                      "{selectedPlatform.samplePost.caption}"
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2.5 text-xs">
                    <div className="p-3 rounded-xl bg-violet-50/80 border border-violet-200">
                      <div className="font-bold text-violet-900 mb-0.5">💬 2h Reply SLA</div>
                      <div className="text-[10px] text-violet-700">Comments answered within 2 hours.</div>
                    </div>
                    <div className="p-3 rounded-xl bg-emerald-50/80 border border-emerald-200">
                      <div className="font-bold text-emerald-900 mb-0.5">📱 WhatsApp Sync</div>
                      <div className="text-[10px] text-emerald-700">Direct lead forwarding to your phone.</div>
                    </div>
                  </div>
                </div>

                <div className="mt-5 pt-3.5 border-t border-slate-200 flex items-center justify-between text-[11px] text-slate-600">
                  <span>⚡ Available in <strong>Starter (₹4,999)</strong> & <strong>Business (₹9,999)</strong></span>
                  <a
                    href="https://wa.me/918920683588?text=Hi%20SiteMint!%20I%20want%20to%20see%20sample%20social%20media%20post%20creatives."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-violet-700 hover:text-violet-800 font-bold flex items-center gap-1"
                  >
                    <span>Request Sample Creatives</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>

              </div>
            </div>

          </div>
        </div>

        {/* 6 Core SMM Capabilities */}
        <div className="mb-20 sm:mb-24">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-50 text-violet-700 border border-violet-200 text-xs font-bold uppercase tracking-wider mb-3 shadow-2xs">
              <Zap className="w-3.5 h-3.5 text-violet-600" />
              <span>Full-Funnel Organic & Paid Powerhouse</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 leading-tight font-sans">
              Everything Your Brand <br className="hidden sm:inline" />
              <span className="gradient-text-hero">
                Needs to Grow Online
              </span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto mt-2">
              From eye-catching daily graphics to Google Map ranking and Meta Ads lead acquisition.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreCapabilities.map((cap, idx) => {
              const Icon = cap.icon;
              return (
                <div
                  key={idx}
                  className={`p-6 sm:p-7 rounded-3xl bg-white ${cap.borderClass} shadow-xl hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center text-violet-600 group-hover:scale-110 transition-transform shadow-2xs">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className={`text-[10px] font-mono font-bold px-2.5 py-1 rounded-full border ${cap.badgeColor}`}>
                        {cap.badge}
                      </span>
                    </div>

                    <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest">{cap.num} // SOCIAL ENGINE</span>
                    <h3 className="text-lg font-extrabold text-slate-900 mb-2 font-sans mt-0.5 group-hover:text-violet-600 transition-colors">
                      {cap.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed mb-6">
                      {cap.desc}
                    </p>
                  </div>

                  {/* Micro Visual Card Preview */}
                  <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200 space-y-1 text-left shadow-2xs">
                    <div className="flex justify-between items-center text-[10px] pb-1 border-b border-slate-200">
                      <span className="text-violet-800 font-bold">{cap.preview.title}</span>
                      <span className="text-[9px] font-mono text-slate-700 bg-white border border-slate-200 px-1.5 py-0.5 rounded font-semibold">{cap.preview.tag}</span>
                    </div>
                    <div className="text-[9px] text-slate-500">{cap.preview.subtitle}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 5-Stage Monthly Social Management Lifecycle */}
        <div className="mb-20 sm:mb-24">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-50 border border-violet-200 text-violet-800 text-xs font-bold uppercase tracking-wider mb-3 shadow-2xs">
              <Clock className="w-3.5 h-3.5 text-violet-600" />
              <span>Monthly Management Sprint</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 leading-tight font-sans">
              From Content Calendar to Inbound Leads <br className="hidden sm:inline" />
              <span className="gradient-text-hero">
                In 5 Seamless Steps
              </span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto mt-2">
              Our structured 30-day publishing sprint guarantees daily consistency with zero daily headaches for your business.
            </p>
          </div>

          <div className="relative">
            {/* Desktop Connected Glowing Laser Pipeline */}
            <div 
              className="hidden lg:block absolute top-[52px] left-[5%] right-[5%] h-1 rounded-full bg-gradient-to-r from-violet-500 via-emerald-500 to-teal-500 shadow-md shadow-violet-500/20 z-0" 
              aria-hidden="true"
            />

            {/* Steps Container */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 relative z-10 overflow-x-auto pb-4 pt-1 snap-x snap-mandatory">
              {smmPipeline.map((st, sIdx) => (
                <div
                  key={sIdx}
                  className="p-5 rounded-3xl bg-white text-slate-900 border-2 border-slate-200 hover:border-violet-400 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group snap-center min-w-[220px]"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-2xl bg-violet-50 border-2 border-violet-200 text-violet-700 font-mono font-black text-sm flex items-center justify-center group-hover:scale-110 group-hover:border-violet-500 transition-all shadow-xs">
                        {st.step}
                      </div>
                      <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-violet-50 text-violet-700 border border-violet-200">
                        {st.days}
                      </span>
                    </div>

                    <h3 className="font-extrabold text-slate-900 text-sm sm:text-base mb-1.5 font-sans group-hover:text-violet-700 transition-colors">
                      {st.title}
                    </h3>
                    <p className="text-[11px] text-slate-600 leading-relaxed mb-4">
                      {st.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 text-[10px] text-slate-700 space-y-1">
                    {st.items.map((it, itIdx) => (
                      <div key={itIdx} className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-violet-500" />
                        <span>{it}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile Swipe Hint */}
            <div className="flex lg:hidden items-center justify-center gap-1.5 text-[11px] text-slate-500 mt-3 font-medium">
              <span>← Swipe to explore all 5 monthly sprint stages →</span>
            </div>
          </div>
        </div>

        {/* Comparison: In-House Social Media Employee vs SiteMint Social Studio */}
        <div className="mb-16 sm:mb-20">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="text-xl sm:text-3xl font-extrabold text-slate-900 font-sans">
              Why Indian Brands Choose SiteMint Over In-House Hiring
            </h2>
          </div>

          <div className="overflow-x-auto rounded-3xl border-2 border-slate-200 shadow-md">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="bg-slate-100 text-slate-900">
                  <th className="p-4 font-bold border-b-2 border-slate-200">Comparison Factors</th>
                  <th className="p-4 font-bold text-slate-600 border-b-2 border-slate-200">In-House SMM Employee / Freelancer</th>
                  <th className="p-4 font-bold text-violet-700 bg-violet-50 border-b-2 border-violet-200">SiteMint Social Studio</th>
                </tr>
              </thead>
              <tbody className="divide-y-2 divide-slate-100">
                <tr>
                  <td className="p-4 font-medium">Monthly Cost</td>
                  <td className="p-4 text-slate-600">₹25,000 to ₹40,000/mo (Salary + Software)</td>
                  <td className="p-4 font-bold text-violet-700 bg-violet-50/40">From ₹4,999 to ₹9,999/mo (All-Inclusive)</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">Multi-Platform Coverage</td>
                  <td className="p-4 text-slate-600">Usually limited to Instagram only</td>
                  <td className="p-4 font-bold text-violet-700 bg-violet-50/40">7+ Platforms (Insta, FB, LinkedIn, GMB, X, YT)</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">Daily Post Graphic Quality</td>
                  <td className="p-4 text-slate-600">Generic repetitive stock templates</td>
                  <td className="p-4 font-bold text-violet-700 bg-violet-50/40">Custom-Branded Carousels, Vectors & Infographics</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">Community DM Lead Handling</td>
                  <td className="p-4 text-slate-600">Missed DMs on weekends & holidays</td>
                  <td className="p-4 font-bold text-violet-700 bg-violet-50/40">Daily 2-Hour SLA Reply & WhatsApp Lead Routing</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">Long-Term Contract Commitment</td>
                  <td className="p-4 text-slate-600">Full-time payroll, notice period & perks</td>
                  <td className="p-4 font-bold text-violet-700 bg-violet-50/40">Flexible Month-to-Month (Cancel or Pause Anytime)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick Cross-Linking Grid */}
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 border-2 border-slate-200 mb-16 shadow-sm">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-4 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-violet-600" />
            Explore Connected Business Growth Services:
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs">
            <Link href="/services/video-editing" className="p-3 bg-white rounded-xl border border-slate-200 hover:border-violet-300 font-semibold text-slate-800 hover:text-violet-700 transition">
              🎬 Viral Video & Reels Editing (₹499)
            </Link>
            <Link href="/services/website-development" className="p-3 bg-white rounded-xl border border-slate-200 hover:border-violet-300 font-semibold text-slate-800 hover:text-violet-700 transition">
              🌐 High-Speed Business Website (₹3,999)
            </Link>
            <Link href="/services/mobile-app-development" className="p-3 bg-white rounded-xl border border-slate-200 hover:border-violet-300 font-semibold text-slate-800 hover:text-violet-700 transition">
              📱 Custom Mobile App Development (₹12,999)
            </Link>
            <Link href="/calculator" className="p-3 bg-white rounded-xl border border-slate-200 hover:border-violet-300 font-semibold text-slate-800 hover:text-violet-700 transition">
              🧮 Instant Monthly SMM Cost Calculator
            </Link>
            <Link href="/pricing" className="p-3 bg-white rounded-xl border border-violet-300 font-semibold text-slate-800 hover:text-violet-700 transition">
              🏷️ Complete Pricing Catalog
            </Link>
            <Link href="/blog/low-budget-website-development-guide-india" className="p-3 bg-white rounded-xl border border-slate-200 hover:border-violet-300 font-semibold text-slate-800 hover:text-violet-700 transition">
              📖 Digital Marketing & Growth ROI Guide
            </Link>
          </div>
        </div>

      </div>

      <RelatedServicesSection currentService="social-media-management" />
      <FaqSection />
    </div>
  );
}
