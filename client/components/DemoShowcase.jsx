'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  Store, 
  GraduationCap, 
  ShoppingBag, 
  Briefcase, 
  CheckCircle2, 
  Sparkles,
  MessageCircle,
  Eye,
  ArrowRight
} from 'lucide-react';

export default function DemoShowcase() {
  const demos = [
    {
      id: 'bakery',
      title: 'Bakery & Restaurant Ordering Website',
      category: 'Food & Bakery',
      icon: Store,
      badge: 'LIVE DEMO',
      badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      description: 'A complete online ordering platform with digital menu, custom cake customization engine, cart, and direct WhatsApp order dispatch.',
      features: [
        'Interactive Digital Menu with Photos & Prices',
        'Custom Cake Customizer (Flavor, Weight, Message)',
        '1-Click WhatsApp Instant Order Dispatch',
        'Customer Reviews & Bakery Story Section',
        'Fully Mobile-Friendly & SEO Optimized'
      ],
      price: '₹5,999',
      demoUrl: '/demos/bakery',
      ctaText: 'Explore Bakery Demo',
      color: 'from-amber-100/70 to-orange-50/40',
      borderColor: 'hover:border-amber-400',
      iconBg: 'bg-amber-100 text-amber-700',
      tag: 'Ideal for: Bakeries, Cafes, Restaurants, Cloud Kitchens',
    },
    {
      id: 'education',
      title: 'School & Coaching Institute Portal',
      category: 'Education & Tuition',
      icon: GraduationCap,
      badge: 'LIVE DEMO',
      badgeColor: 'bg-sky-50 text-sky-700 border-sky-200',
      description: 'All-in-one portal for schools and coaching institutes to showcase courses, manage online admissions, share syllabus, and publish student test results.',
      features: [
        'Course Catalog with Syllabus & Fee Structure',
        'Online Admission & Inquiry Lead Form',
        'Student Test Results & Notice Board System',
        'Faculty / Teacher Profiles & Testimonials',
        'WhatsApp Student Helpdesk Integration'
      ],
      price: '₹7,999',
      demoUrl: '/demos/education',
      ctaText: 'Explore Education Demo',
      color: 'from-sky-100/70 to-blue-50/40',
      borderColor: 'hover:border-sky-400',
      iconBg: 'bg-sky-100 text-sky-700',
      tag: 'Ideal for: Coaching Centers, Schools, Home Tutors, Institutes',
    },
    {
      id: 'ecommerce',
      title: 'E-Commerce Online Store',
      category: 'Retail & Shopping',
      icon: ShoppingBag,
      badge: 'POPULAR',
      badgeColor: 'bg-violet-50 text-violet-700 border-violet-200',
      description: 'Modern e-commerce platform with product catalogs, customer cart, coupon discounts, secure online payment gateway (UPI/Cards), and admin order tracker.',
      features: [
        'Product Grid with Variants (Size, Color)',
        'Cart & Instant Checkout with UPI / Razorpay',
        'Order Tracking & SMS/WhatsApp Notification',
        'Admin Dashboard for Products & Stock Management',
        'High-Converting Product Sales Landing UI'
      ],
      price: '₹8,999',
      demoUrl: 'https://wa.me/918601300910?text=Hi%20SiteMint!%20I%20want%20to%20see%20the%20E-Commerce%20Store%20demo%20and%20pricing.',
      ctaText: 'Request Demo on WhatsApp',
      color: 'from-purple-100/70 to-pink-50/40',
      borderColor: 'hover:border-purple-400',
      iconBg: 'bg-purple-100 text-purple-700',
      tag: 'Ideal for: Clothing Brands, Electronics, D2C Startups, Retail Stores',
    },
    {
      id: 'recruitment',
      title: 'Recruitment & Job Portal Dashboard',
      category: 'Corporate & HR',
      icon: Briefcase,
      badge: 'ENTERPRISE',
      badgeColor: 'bg-teal-50 text-teal-700 border-teal-200',
      description: 'Job posting website with candidate resume upload, applicant tracking system (ATS), interview scheduling, and employer candidate dashboard.',
      features: [
        'Job Listings with Search & Location Filters',
        'Quick Candidate Resume / CV Submission',
        'HR Management & Application Status Tracker',
        'Company Profile & Employer Branding Page',
        'Automated Email & WhatsApp Alerts'
      ],
      price: '₹12,999',
      demoUrl: 'https://wa.me/918601300910?text=Hi%20SiteMint!%20I%20need%20a%20Recruitment/Job%20Portal.%20Please%20share%20details.',
      ctaText: 'Request Demo on WhatsApp',
      color: 'from-emerald-100/70 to-teal-50/40',
      borderColor: 'hover:border-teal-400',
      iconBg: 'bg-teal-100 text-teal-700',
      tag: 'Ideal for: HR Agencies, Job Consultants, Corporate Hiring',
    },
  ];

  return (
    <section id="demos" className="py-12 sm:py-16 md:py-24 relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-violet-50 border border-violet-200 text-violet-800 text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-3 sm:mb-4 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-violet-600" /> Working Interactive Demos
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-2 sm:mb-4">
            See It In Action <span className="gradient-text-purple">Before You Buy</span>
          </h2>
          <p className="text-slate-600 text-xs sm:text-base">
            Every demo is a complete, working website with real business functionality. Test them right now on your phone or computer.
          </p>
        </div>

        {/* Demo Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8">
          {demos.map((demo) => {
            const Icon = demo.icon;
            const isInternalDemo = demo.demoUrl.startsWith('/');
            return (
              <div
                key={demo.id}
                className={`glass-card p-5 sm:p-8 flex flex-col justify-between transition-all duration-300 border border-slate-200 ${demo.borderColor} relative group overflow-hidden`}
              >
                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between gap-2 mb-3.5 sm:mb-4">
                    <div className="flex items-center gap-2.5 sm:gap-3">
                      <div className={`p-2 sm:p-2.5 rounded-2xl ${demo.iconBg} shadow-2xs shrink-0`}>
                        <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                      <div>
                        <span className="text-[10px] sm:text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
                          {demo.category}
                        </span>
                        <h3 className="text-base sm:text-xl font-bold text-slate-900 leading-snug">
                          {demo.title}
                        </h3>
                      </div>
                    </div>
                    <span className={`text-[9px] sm:text-[10px] font-bold px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full border shrink-0 ${demo.badgeColor}`}>
                      {demo.badge}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 mb-4 sm:mb-5 leading-relaxed">
                    {demo.description}
                  </p>

                  {/* Key Features */}
                  <div className="space-y-1.5 sm:space-y-2 mb-5 sm:mb-6">
                    {demo.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  <div className="text-[10px] sm:text-[11px] text-violet-800 font-semibold py-1.5 sm:py-2 px-2.5 sm:px-3 rounded-xl bg-violet-50 border border-violet-100 mb-5 sm:mb-6">
                    {demo.tag}
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4">
                  <div className="flex sm:flex-col justify-between items-baseline sm:items-start">
                    <div className="text-[10px] text-slate-500 uppercase font-bold">Starting From</div>
                    <div className="text-lg sm:text-xl font-extrabold text-slate-900">
                      {demo.price}
                      <span className="text-[10px] text-slate-500 font-normal ml-1">(1 time)</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 w-full sm:w-auto">
                    {isInternalDemo ? (
                      <Link
                        href={demo.demoUrl}
                        className="btn-primary text-xs !py-2.5 !px-4 flex-1 sm:flex-initial justify-center shadow-sm"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>{demo.ctaText}</span>
                      </Link>
                    ) : (
                      <a
                        href={demo.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary text-xs !py-2.5 !px-4 flex-1 sm:flex-initial justify-center shadow-sm"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>{demo.ctaText}</span>
                      </a>
                    )}

                    <a
                      href={`https://wa.me/918601300910?text=Hi%20SiteMint!%20I%20like%20your%20${encodeURIComponent(demo.title)}%20demo%20and%20want%20to%20get%20one%20made%20for%20my%20business.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 hover:bg-emerald-100 transition shrink-0 flex items-center justify-center min-w-[40px] min-h-[40px]"
                      title="Direct WhatsApp Order"
                    >
                      <MessageCircle className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
