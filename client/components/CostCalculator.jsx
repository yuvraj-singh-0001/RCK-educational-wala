'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Calculator,
  Check,
  MessageCircle,
  Sparkles,
  Store,
  GraduationCap,
  ShoppingBag,
  Globe,
  Cpu,
  PhoneCall,
  Smartphone,
  Video,
  Share2,
  CheckCircle2,
  ArrowRight,
  Lock,
  Zap,
  Clock,
  ShieldCheck,
  Mail,
  Server,
  CreditCard,
  SlidersHorizontal,
  Info,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

export default function CostCalculator() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [showMobileBreakdown, setShowMobileBreakdown] = useState(false);

  const projectTypes = [
    {
      id: 'starter',
      category: 'website',
      name: 'Starter Website (5 Pages)',
      price: 3999,
      regularPrice: 12000,
      desc: '5 custom pages, responsive UI, WhatsApp chat, contact form with instant email alerts, and basic SEO.',
      icon: Globe,
      badge: '₹3,999',
      delivery: '7 Days',
      color: 'text-violet-700 bg-violet-100',
    },
    {
      id: 'business',
      category: 'website',
      name: 'Business Website & Management',
      price: 7999,
      regularPrice: 22000,
      desc: 'Up to 10 dynamic pages, catalog management, user dashboard, Razorpay UPI gateway, and admin portal.',
      icon: ShoppingBag,
      badge: '₹7,999 (POPULAR)',
      delivery: '7–10 Days',
      color: 'text-violet-700 bg-violet-100',
    },
    {
      id: 'professional',
      category: 'website',
      name: 'Professional Business System',
      price: 17999,
      regularPrice: 38000,
      desc: '1 Year Domain & Cloud Server Included Free, full user system, multi-entity admin, and 1 Year support.',
      icon: Cpu,
      badge: '₹17,999 (ALL-IN-ONE)',
      delivery: '10–14 Days',
      color: 'text-emerald-700 bg-emerald-100',
    },
    {
      id: 'restaurant',
      category: 'website',
      name: 'Bakery & Restaurant Website',
      price: 5999,
      regularPrice: 18000,
      desc: 'Digital food menu, custom cake customizer (flavor/weight), delivery calculator, and 0% commission WhatsApp checkout.',
      icon: Store,
      badge: '₹5,999',
      delivery: '5–7 Days',
      color: 'text-teal-700 bg-teal-100',
    },
    {
      id: 'education',
      category: 'website',
      name: 'School & Coaching Portal',
      price: 7999,
      regularPrice: 20000,
      desc: 'Student admission inquiry forms, batch syllabus, faculty profiles, and published test results rankboard.',
      icon: GraduationCap,
      badge: '₹7,999',
      delivery: '7–10 Days',
      color: 'text-amber-700 bg-amber-100',
    },
    {
      id: 'ecommerce',
      category: 'website',
      name: 'E-Commerce Online Store',
      price: 8999,
      regularPrice: 25000,
      desc: 'Product catalog, shopping cart, Razorpay UPI/Cards gateway, discount coupons, and order tracking.',
      icon: ShoppingBag,
      badge: '₹8,999',
      delivery: '7–10 Days',
      color: 'text-blue-700 bg-blue-100',
    },
    {
      id: 'custom_erp',
      category: 'website',
      name: 'Custom Software & CRM Dashboard',
      price: 14999,
      regularPrice: 35000,
      desc: 'Role-based multi-user admin panel, cloud database, automated GST invoicing, billing ledger, and analytics.',
      icon: Cpu,
      badge: '₹14,999',
      delivery: '12–16 Days',
      color: 'text-indigo-700 bg-indigo-100',
    },
    {
      id: 'android_app',
      category: 'app',
      name: 'Android Mobile App (.APK)',
      price: 12999,
      regularPrice: 28000,
      desc: 'Play Store ready native Android app, Firebase push notifications, OTP login, and cloud database API backend.',
      icon: Smartphone,
      badge: '₹12,999',
      delivery: '14–18 Days',
      color: 'text-pink-700 bg-pink-100',
    },
    {
      id: 'cross_app',
      category: 'app',
      name: 'Cross-Platform App (Android + iOS)',
      price: 24999,
      regularPrice: 45000,
      desc: 'Flutter native build for Android & Apple iOS, 15+ interactive screens, live order tracking, and web admin portal.',
      icon: Smartphone,
      badge: '₹24,999',
      delivery: '18–24 Days',
      color: 'text-purple-700 bg-purple-100',
    },
    {
      id: 'custom_enterprise_app',
      category: 'app',
      name: 'Custom Enterprise App',
      price: 39999,
      regularPrice: 75000,
      desc: 'Complex multi-app ecosystem (Customer + Partner/Driver + Admin), live GPS tracking, and cloud backend.',
      icon: Smartphone,
      badge: '₹39,999',
      delivery: '25–35 Days',
      color: 'text-indigo-700 bg-indigo-100',
    },
    {
      id: 'video_single',
      category: 'media',
      name: 'Starter Reel / Short (1 Video)',
      price: 499,
      regularPrice: 1200,
      desc: '1 High-engagement short-form video with dynamic animated captions (Hormozi style), sound FX, and hooks.',
      icon: Video,
      badge: '₹499 (1 Reel)',
      delivery: '24 Hours',
      color: 'text-rose-700 bg-rose-100',
    },
    {
      id: 'video_editing',
      category: 'media',
      name: 'Creator Video Growth Pack (15 Reels)',
      price: 5999,
      regularPrice: 12000,
      desc: '15 Viral Instagram Reels / Shorts per month with hook strategy, sound FX, B-roll, and dedicated editor.',
      icon: Video,
      badge: '₹5,999 (15 Reels)',
      delivery: 'Monthly Retainer',
      color: 'text-violet-700 bg-violet-100',
    },
    {
      id: 'smm_starter',
      category: 'media',
      name: 'Basic Social Starter (15 Posts/mo)',
      price: 4999,
      regularPrice: 9000,
      desc: '15 custom branded posts per month across 3 platforms (IG, FB, GMB) with SEO hashtags and captions.',
      icon: Share2,
      badge: '₹4,999/mo',
      delivery: 'Monthly Retainer',
      color: 'text-teal-700 bg-teal-100',
    },
    {
      id: 'smm_monthly',
      category: 'media',
      name: 'Business Growth Retainer (30 Posts + Ads)',
      price: 8999,
      regularPrice: 18000,
      desc: 'Daily posting (30 Posts/mo) across 7-8 platforms, 4 edited video reels, DM lead routing, and Meta Ads setup.',
      icon: Share2,
      badge: '₹8,999/mo',
      delivery: 'Monthly Retainer',
      color: 'text-emerald-700 bg-emerald-100',
    },
  ];

  const pageOptions = [
    { id: 'small', label: '1–5 Pages', price: 0, desc: 'Included in Base Plan' },
    { id: 'medium', label: '6–10 Pages', price: 1500, desc: 'Included in Business Plan' },
    { id: 'large', label: '11–20 Pages', price: 3000, desc: 'Multi-Category Portal' },
    { id: 'unlimited', label: 'Unlimited Pages', price: 5500, desc: 'Included in Pro Plan' },
  ];

  const addonOptions = [
    {
      id: 'free_emails',
      label: '350 Free Daily Transactional / Lead Emails via Gmail API',
      price: 0,
      isFreeTag: true,
      desc: 'Zero software fee, instant lead alerts to your Gmail inbox',
      includedIn: ['starter', 'business', 'professional', 'ecommerce', 'restaurant', 'education', 'custom_erp', 'android_app', 'cross_app']
    },
    {
      id: 'domain_hosting',
      label: '1 Year High-Speed Cloud Server + Custom Domain (.IN/.COM)',
      price: 3589,
      desc: 'Fast cloud hosting with 100% client domain ownership & SSL',
      includedIn: ['professional']
    },
    {
      id: 'payment_gateway',
      label: 'Razorpay UPI & Payment Gateway (0% SiteMint Cut)',
      price: 1499,
      desc: 'Instant direct-to-bank settlement with QR, Cards & NetBanking',
      includedIn: ['business', 'professional', 'ecommerce', 'cross_app']
    },
    {
      id: 'user_portal',
      label: 'User Registration, Login & Role-Based Dashboard',
      price: 1499,
      desc: 'Secure customer account portal with profile & order history',
      includedIn: ['business', 'professional', 'cross_app']
    },
    {
      id: 'whatsapp_alerts',
      label: 'WhatsApp Automated 1-Click Order & Lead Notification Engine',
      price: 999,
      desc: 'Direct customized WhatsApp chat link with pre-formatted items',
      includedIn: ['restaurant', 'professional']
    },
    {
      id: 'custom_cake_engine',
      label: 'Interactive Custom Cake / Food Menu Customizer Engine',
      price: 1499,
      desc: 'Dynamic flavor, weight, eggless toggle, and custom photo upload',
      includedIn: ['restaurant']
    },
    {
      id: 'express_delivery',
      label: '⚡ Express Rush Delivery (3 to 5 Days Rapid Turnaround)',
      price: 1999,
      desc: 'Priority engineer sprint allocation for accelerated launch',
      includedIn: []
    },
    {
      id: 'seo_suite',
      label: 'Advanced Technical SEO, Schema.org Graph & Google Indexing',
      price: 1499,
      desc: 'Structured metadata, XML sitemap, and Google Search Console setup',
      includedIn: ['business', 'professional', 'ecommerce']
    },
    {
      id: 'maintenance_1yr',
      label: '1 Full Year Extended Technical Maintenance & Priority SLA',
      price: 2499,
      desc: 'Full year bug fixes, text updates, and server monitoring',
      includedIn: ['professional']
    },
  ];

  const [selectedType, setSelectedType] = useState('business');
  const [selectedPages, setSelectedPages] = useState('medium');
  const [selectedAddons, setSelectedAddons] = useState(['free_emails', 'payment_gateway', 'seo_suite']);

  const toggleAddon = (id) => {
    if (selectedAddons.includes(id)) {
      setSelectedAddons(selectedAddons.filter((a) => a !== id));
    } else {
      setSelectedAddons([...selectedAddons, id]);
    }
  };

  // Filter project types
  const filteredProjectTypes = activeCategory === 'all'
    ? projectTypes
    : projectTypes.filter(p => p.category === activeCategory);

  // Current selected base plan object
  const currentTypeObj = projectTypes.find((p) => p.id === selectedType) || projectTypes[0];
  const basePrice = currentTypeObj.price;

  // Page pricing logic
  let pagesPrice = 0;
  if (currentTypeObj.category !== 'website' || selectedType === 'professional') {
    pagesPrice = 0;
  } else if (selectedType === 'business' && (selectedPages === 'small' || selectedPages === 'medium')) {
    pagesPrice = 0;
  } else if (selectedType === 'starter' && selectedPages === 'small') {
    pagesPrice = 0;
  } else {
    pagesPrice = pageOptions.find((p) => p.id === selectedPages)?.price || 0;
  }

  // Add-ons pricing logic
  const addonsPrice = selectedAddons.reduce((acc, addonId) => {
    const addon = addonOptions.find((a) => a.id === addonId);
    if (!addon) return acc;
    if (addon.includedIn && addon.includedIn.includes(selectedType)) {
      return acc; // Free / already included in plan
    }
    return acc + addon.price;
  }, 0);

  const totalPrice = basePrice + pagesPrice + addonsPrice;
  const estimatedSavings = Math.max(0, currentTypeObj.regularPrice - basePrice);
  const currentPagesObj = pageOptions.find((p) => p.id === selectedPages);

  const selectedAddonDetails = selectedAddons.map((id) => {
    const addon = addonOptions.find((a) => a.id === id);
    if (!addon) return null;
    const isFree = addon.includedIn && addon.includedIn.includes(selectedType);
    return {
      id: addon.id,
      label: addon.label,
      price: isFree ? 0 : addon.price,
      isFree,
    };
  }).filter(Boolean);

  // Clear, itemized, professional WhatsApp message formatting
  const getWhatsAppMessage = () => {
    const paidAddons = selectedAddonDetails.filter(a => !a.isFree);
    const freeAddons = selectedAddonDetails.filter(a => a.isFree);

    let msg = `*🚀 NEW PROJECT ESTIMATE & SCOPE - SITEMINT*\n`;
    msg += `━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`;
    msg += `📦 *SELECTED BASE PACKAGE:*\n`;
    msg += `• Plan: *${currentTypeObj.name}*\n`;
    msg += `• Base Plan Cost: *₹${basePrice.toLocaleString('en-IN')}*\n`;
    msg += `• Sprint Delivery: *${currentTypeObj.delivery}*\n`;
    if (currentTypeObj.category === 'website') {
      msg += `• Pages Scope: *${currentPagesObj?.label}* ${pagesPrice === 0 ? '(Included in Base Plan)' : `(+₹${pagesPrice.toLocaleString('en-IN')})`}\n`;
    }
    msg += `\n`;

    if (paidAddons.length > 0) {
      msg += `➕ *EXTRA ADD-ONS ADDED (${paidAddons.length}):*\n`;
      paidAddons.forEach((a, i) => {
        msg += `${i + 1}. ${a.label} ➔ *+₹${a.price.toLocaleString('en-IN')}*\n`;
      });
      msg += `\n`;
    }

    if (freeAddons.length > 0) {
      msg += `🎁 *100% FREE INCLUSIONS IN PLAN:*\n`;
      freeAddons.forEach((a) => {
        msg += `✓ ${a.label}: *₹0 (FREE)*\n`;
      });
      msg += `\n`;
    }

    msg += `━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`;
    msg += `💵 *PRICE & INVESTMENT SUMMARY:*\n`;
    msg += `• Base Plan Price: ₹${basePrice.toLocaleString('en-IN')}\n`;
    if (pagesPrice > 0) {
      msg += `• Extra Pages (${currentPagesObj?.label}): +₹${pagesPrice.toLocaleString('en-IN')}\n`;
    }
    if (addonsPrice > 0) {
      msg += `• Extra Add-ons Cost: +₹${addonsPrice.toLocaleString('en-IN')}\n`;
    }
    msg += `━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`;
    msg += `💰 *FINAL ESTIMATED TOTAL: ₹${totalPrice.toLocaleString('en-IN')} (One-Time)*\n`;
    if (estimatedSavings > 0) {
      msg += `🎉 *Estimated Agency Savings:* ~₹${estimatedSavings.toLocaleString('en-IN')}\n`;
    }
    msg += `━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`;
    msg += `\nHello SiteMint Team, please review my custom configuration and share the milestone & onboarding details!`;

    return encodeURIComponent(msg);
  };

  return (
    <section className="py-6 sm:py-10 bg-white" id="calculator">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${activeCategory === 'all'
                ? 'bg-slate-900 text-white shadow-md'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
          >
            All Packages ({projectTypes.length})
          </button>

          <button
            onClick={() => setActiveCategory('website')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${activeCategory === 'website'
                ? 'bg-violet-600 text-white shadow-md'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
          >
            <Globe className="w-3.5 h-3.5" />
            <span>Websites & Portals</span>
          </button>

          <button
            onClick={() => setActiveCategory('app')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${activeCategory === 'app'
                ? 'bg-pink-600 text-white shadow-md'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span>Mobile Apps</span>
          </button>

          <button
            onClick={() => setActiveCategory('media')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${activeCategory === 'media'
                ? 'bg-emerald-600 text-white shadow-md'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
          >
            <Video className="w-3.5 h-3.5" />
            <span>Video & Social Media</span>
          </button>
        </div>

        {/* 2-Column Balanced Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          {/* Left Column: Interactive Configuration Steps (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Step 1: Base Project Type */}
            <div className="p-5 sm:p-6 rounded-3xl bg-white border border-slate-200 shadow-2xs">
              <div className="flex items-center justify-between gap-2 mb-3.5">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-lg bg-violet-600 text-white text-[11px] font-bold flex items-center justify-center">
                    01
                  </span>
                  <h2 className="text-sm sm:text-base font-extrabold text-slate-900">
                    Select Your Base Plan
                  </h2>
                </div>
                <span className="text-[10px] font-bold text-violet-700 bg-violet-50 px-2 py-0.5 rounded-full border border-violet-100">
                  Step 1 of {currentTypeObj.category === 'website' ? '3' : '2'}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {filteredProjectTypes.map((type) => {
                  const Icon = type.icon;
                  const isSelected = selectedType === type.id;
                  return (
                    <button
                      key={type.id}
                      type="button"
                      onClick={() => setSelectedType(type.id)}
                      className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${isSelected
                          ? 'border-violet-600 bg-violet-50/50 ring-2 ring-violet-500/20 shadow-xs'
                          : 'border-slate-200 hover:border-slate-300 bg-white hover:bg-slate-50/50'
                        }`}
                    >
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-1.5">
                          <div className={`p-1.5 rounded-lg ${type.color}`}>
                            <Icon className="w-3.5 h-3.5" />
                          </div>
                          <span className="text-[9px] font-extrabold px-1.5 py-0.5 rounded-full bg-slate-100 text-slate-700">
                            ⏱️ {type.delivery}
                          </span>
                        </div>

                        <div className="font-bold text-xs text-slate-900 mb-0.5 leading-snug">
                          {type.name}
                        </div>

                        <p className="text-[10px] text-slate-500 leading-relaxed line-clamp-2 mb-2">
                          {type.desc}
                        </p>
                      </div>

                      <div className="flex items-baseline justify-between pt-1.5 border-t border-slate-100 mt-auto">
                        <div className="text-xs sm:text-sm font-extrabold text-slate-900">
                          ₹{type.price.toLocaleString('en-IN')}
                        </div>
                        <div className={`w-4 h-4 rounded-full flex items-center justify-center text-[9px] ${isSelected ? 'bg-violet-600 text-white' : 'border border-slate-300 text-transparent'
                          }`}>
                          <Check className="w-2.5 h-2.5" />
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Page Scope (For Website Category) */}
            {currentTypeObj.category === 'website' && (
              <div className="p-5 sm:p-6 rounded-3xl bg-white border border-slate-200 shadow-2xs">
                <div className="flex items-center justify-between gap-2 mb-3.5">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-lg bg-violet-600 text-white text-[11px] font-bold flex items-center justify-center">
                      02
                    </span>
                    <h2 className="text-sm sm:text-base font-extrabold text-slate-900">
                      Estimated Page Scope
                    </h2>
                  </div>
                  <span className="text-[10px] font-bold text-violet-700 bg-violet-50 px-2 py-0.5 rounded-full border border-violet-100">
                    Step 2 of 3
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {pageOptions.map((opt) => {
                    const isSelected = selectedPages === opt.id;
                    let displayPriceText = opt.price === 0 ? 'Included' : `+₹${opt.price.toLocaleString('en-IN')}`;
                    if (selectedType === 'professional') {
                      displayPriceText = 'Included (Free)';
                    } else if (selectedType === 'business' && (opt.id === 'small' || opt.id === 'medium')) {
                      displayPriceText = 'Included (Free)';
                    }

                    return (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => setSelectedPages(opt.id)}
                        className={`p-2.5 rounded-xl border text-center transition-all cursor-pointer ${isSelected
                            ? 'border-violet-600 bg-violet-50/60 ring-2 ring-violet-500/20 shadow-xs'
                            : 'border-slate-200 hover:border-slate-300 bg-white'
                          }`}
                      >
                        <div className="text-xs font-bold text-slate-900">{opt.label}</div>
                        <div className="text-[9px] text-slate-500 mb-0.5">{opt.desc}</div>
                        <div className="text-[10px] font-extrabold text-emerald-700">{displayPriceText}</div>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Step 3: Feature Add-ons & Inclusions */}
            <div className="p-5 sm:p-6 rounded-3xl bg-white border border-slate-200 shadow-2xs">
              <div className="flex items-center justify-between gap-2 mb-3.5">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-lg bg-violet-600 text-white text-[11px] font-bold flex items-center justify-center">
                    {currentTypeObj.category === 'website' ? '03' : '02'}
                  </span>
                  <h2 className="text-sm sm:text-base font-extrabold text-slate-900">
                    Customize with Extra Features & Add-ons
                  </h2>
                </div>
                <span className="text-[10px] font-bold text-violet-700 bg-violet-50 px-2 py-0.5 rounded-full border border-violet-100">
                  Step {currentTypeObj.category === 'website' ? '3 of 3' : '2 of 2'}
                </span>
              </div>

              <div className="space-y-2">
                {addonOptions.map((addon) => {
                  const isChecked = selectedAddons.includes(addon.id);
                  const isIncludedInTier = addon.includedIn && addon.includedIn.includes(selectedType);

                  return (
                    <div
                      key={addon.id}
                      onClick={() => toggleAddon(addon.id)}
                      className={`p-3 rounded-2xl border transition-all cursor-pointer flex items-center justify-between gap-2.5 ${isIncludedInTier
                          ? 'bg-emerald-50/60 border-emerald-200'
                          : isChecked
                            ? 'bg-violet-50/50 border-violet-400 shadow-2xs'
                            : 'bg-white border-slate-200 hover:border-slate-300'
                        }`}
                    >
                      <div className="flex items-start gap-2.5 min-w-0">
                        <div className={`w-4 h-4 rounded-md flex items-center justify-center text-xs mt-0.5 shrink-0 transition ${isIncludedInTier
                            ? 'bg-emerald-600 text-white'
                            : isChecked
                              ? 'bg-violet-600 text-white'
                              : 'border border-slate-300 bg-white'
                          }`}>
                          {(isChecked || isIncludedInTier) && <Check className="w-3 h-3" />}
                        </div>

                        <div className="min-w-0">
                          <div className="text-xs font-bold text-slate-900 flex items-center gap-1.5 flex-wrap leading-tight">
                            <span>{addon.label}</span>
                            {isIncludedInTier && (
                              <span className="text-[9px] font-extrabold px-1.5 py-0.2 rounded bg-emerald-200 text-emerald-900">
                                INCLUDED IN PLAN
                              </span>
                            )}
                            {addon.isFreeTag && (
                              <span className="text-[9px] font-extrabold px-1.5 py-0.2 rounded bg-violet-200 text-violet-900">
                                100% FREE
                              </span>
                            )}
                          </div>
                          <p className="text-[10px] text-slate-500 mt-0.5">
                            {addon.desc}
                          </p>
                        </div>
                      </div>

                      <div className="text-xs font-extrabold text-slate-900 shrink-0 text-right">
                        {isIncludedInTier || addon.price === 0 ? (
                          <span className="text-emerald-700">₹0 (Free)</span>
                        ) : (
                          <span>+₹{addon.price.toLocaleString('en-IN')}</span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Live Sticky Summary (5 cols) */}
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <div className="p-5 sm:p-6 rounded-3xl bg-slate-900 text-white shadow-xl border border-slate-800">
              {/* Header */}
              <div className="flex items-center justify-between mb-3 pb-2.5 border-b border-slate-800">
                <span className="text-[10px] uppercase font-extrabold tracking-wider text-emerald-400">
                  ⚡ Live Estimated Quotation
                </span>
                <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  {currentTypeObj.delivery} Sprint
                </span>
              </div>

              {/* Total Price Display */}
              <div className="mb-3.5">
                <div className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">
                  Total Estimated Investment
                </div>
                <div className="flex items-baseline gap-2 mt-0.5">
                  <span className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                    ₹{totalPrice.toLocaleString('en-IN')}
                  </span>
                  <span className="text-xs text-slate-400 font-normal">
                    (One-time fee)
                  </span>
                </div>
                {estimatedSavings > 0 && (
                  <div className="text-[10px] text-emerald-400 font-bold mt-1 flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    <span>You save ~₹{estimatedSavings.toLocaleString('en-IN')} vs agencies</span>
                  </div>
                )}
              </div>

              {/* Itemized Line Breakdown */}
              <div className="space-y-1.5 text-xs py-3 border-t border-b border-slate-800 mb-4">
                <div className="flex justify-between items-center text-slate-300">
                  <span className="font-semibold text-white truncate max-w-[200px]">{currentTypeObj.name}:</span>
                  <span className="font-mono text-white font-bold">₹{basePrice.toLocaleString('en-IN')}</span>
                </div>

                {currentTypeObj.category === 'website' && (
                  <div className="flex justify-between items-center text-slate-300">
                    <span>Pages Scope ({currentPagesObj?.label}):</span>
                    <span className="font-mono text-emerald-400 font-semibold">
                      {pagesPrice === 0 ? '₹0 (Included)' : `+₹${pagesPrice.toLocaleString('en-IN')}`}
                    </span>
                  </div>
                )}

                {selectedAddonDetails.map((item) => (
                  <div key={item.id} className="flex justify-between items-center text-slate-300 text-[11px]">
                    <span className="truncate max-w-[190px]">{item.label}:</span>
                    <span className="font-mono text-emerald-400 font-semibold">
                      {item.isFree ? '₹0 (Free)' : `+₹${item.price.toLocaleString('en-IN')}`}
                    </span>
                  </div>
                ))}
              </div>

              {/* Inclusions */}
              <div className="space-y-1 p-2.5 rounded-xl bg-slate-800/80 border border-slate-700 text-[10px] mb-4 text-slate-300">
                <div className="flex items-center gap-1.5 text-emerald-400 font-bold">
                  <CheckCircle2 className="w-3 h-3 shrink-0" />
                  <span>350 Free Emails / Day (Gmail API Included)</span>
                </div>
                <div className="flex items-center gap-1.5 text-emerald-400 font-bold">
                  <CheckCircle2 className="w-3 h-3 shrink-0" />
                  <span>100% Full Source Code Rights Handover</span>
                </div>
                <div className="flex items-center gap-1.5 text-emerald-400 font-bold">
                  <CheckCircle2 className="w-3 h-3 shrink-0" />
                  <span>Google Search Console & SEO Setup</span>
                </div>
              </div>

              {/* 1-Click WhatsApp Instant Estimate Dispatch Button */}
              <a
                href={`https://wa.me/918601300910?text=${getWhatsAppMessage()}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp w-full justify-center text-xs sm:text-sm py-3 shadow-lg shadow-green-600/25 flex items-center gap-2 font-bold mb-2.5"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Send Quotation to WhatsApp (₹{totalPrice.toLocaleString('en-IN')})</span>
              </a>

              {/* Call Direct */}
              <div className="flex items-center justify-between text-[11px] text-slate-400 pt-2 border-t border-slate-800">
                <span>Direct Support:</span>
                <a href="tel:+918601300910" className="text-emerald-400 hover:text-white font-bold flex items-center gap-1">
                  <PhoneCall className="w-3 h-3" />
                  <span>+91 86013 00910</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Bottom Bar on Mobile Devices (Zero Confusion on Small Screens) */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-slate-900 text-white border-t border-slate-800 p-3 shadow-2xl">
        <div className="max-w-md mx-auto flex items-center justify-between gap-3">
          <div className="min-w-0" onClick={() => setShowMobileBreakdown(!showMobileBreakdown)}>
            <div className="text-[10px] text-slate-400 truncate flex items-center gap-1 cursor-pointer">
              <span>{currentTypeObj.name}</span>
              {showMobileBreakdown ? <ChevronDown className="w-3 h-3" /> : <ChevronUp className="w-3 h-3" />}
            </div>
            <div className="text-lg font-extrabold text-white">
              ₹{totalPrice.toLocaleString('en-IN')}
            </div>
          </div>

          <a
            href={`https://wa.me/918601300910?text=${getWhatsAppMessage()}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp text-xs !py-2.5 !px-4 shrink-0 font-bold shadow-md flex items-center gap-1.5"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Order on WhatsApp</span>
          </a>
        </div>

        {/* Collapsible Mobile Breakdown Drawer */}
        {showMobileBreakdown && (
          <div className="mt-2.5 pt-2.5 border-t border-slate-800 max-h-48 overflow-y-auto text-[11px] space-y-1 text-slate-300">
            <div className="flex justify-between">
              <span>Base Plan ({currentTypeObj.name}):</span>
              <span className="font-bold text-white">₹{basePrice.toLocaleString('en-IN')}</span>
            </div>
            {currentTypeObj.category === 'website' && (
              <div className="flex justify-between">
                <span>Pages Scope ({currentPagesObj?.label}):</span>
                <span className="text-emerald-400 font-semibold">{pagesPrice === 0 ? '₹0' : `+₹${pagesPrice}`}</span>
              </div>
            )}
            {selectedAddonDetails.map((a) => (
              <div key={a.id} className="flex justify-between">
                <span className="truncate max-w-[200px]">{a.label}:</span>
                <span className="text-emerald-400 font-semibold">{a.isFree ? 'FREE' : `+₹${a.price}`}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
