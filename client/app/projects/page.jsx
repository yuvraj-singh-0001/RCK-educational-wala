'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  Briefcase, 
  Sparkles, 
  Store, 
  GraduationCap, 
  ShoppingBag, 
  Cpu, 
  ExternalLink, 
  MessageCircle, 
  Eye,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import FaqSection from '../../components/FaqSection';

export default function ProjectsPage() {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 'bakery-portal',
      title: 'SweetDelight Bakery & Cake Ordering Platform',
      category: 'restaurant',
      categoryName: 'Restaurant & Bakery',
      icon: Store,
      badge: 'LIVE DEMO AVAILABLE',
      badgeColor: 'bg-amber-50 text-amber-700 border-amber-200',
      description: 'A complete online cake ordering system with flavor customizer, weight options, eggless selector, delivery distance charge engine, and WhatsApp order dispatch.',
      deliverables: ['Custom Cake Customizer', 'WhatsApp Order Dispatch', 'Digital QR Menu', 'Delivery Zone Rules'],
      techStack: ['Next.js', 'Tailwind CSS', 'WhatsApp Business API', 'Vercel'],
      demoUrl: '/demos/bakery',
      ctaText: 'View Live Demo',
      color: 'border-amber-200 bg-amber-50/20',
      iconColor: 'text-amber-700 bg-amber-100',
      results: '+350% Direct WhatsApp Orders within 30 days',
    },
    {
      id: 'education-portal',
      title: 'Apex Coaching Institute Digital Campus',
      category: 'education',
      categoryName: 'Education & Coaching',
      icon: GraduationCap,
      badge: 'LIVE DEMO AVAILABLE',
      badgeColor: 'bg-sky-50 text-sky-700 border-sky-200',
      description: 'Centralized coaching portal allowing students and parents to view upcoming batches, download course syllabus, submit online admission inquiries, and check weekly test scores.',
      deliverables: ['Course Syllabus Catalog', 'Online Admission Form', 'Weekly Results Board', 'Faculty Credentials'],
      techStack: ['React', 'Next.js App Router', 'Schema.org SEO', 'Cloud Hosting'],
      demoUrl: '/demos/education',
      ctaText: 'View Live Demo',
      color: 'border-sky-200 bg-sky-50/20',
      iconColor: 'text-sky-700 bg-sky-100',
      results: '2.4x Increase in Student Admissions Leads',
    },
    {
      id: 'ecommerce-fashion',
      title: 'UrbanVibe D2C Fashion & Clothing Store',
      category: 'ecommerce',
      categoryName: 'E-Commerce',
      icon: ShoppingBag,
      badge: 'COMMERCIAL READY',
      badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      description: 'Modern shopping store with size/color variant selection, instant shopping cart, Razorpay UPI checkout, coupon discount engine, and automated SMS/WhatsApp order tracking.',
      deliverables: ['Product Variant Matrix', 'Razorpay / UPI Gateway', 'Coupon Discount Rules', 'Order Status Tracker'],
      techStack: ['Next.js 15', 'Razorpay API', 'PostgreSQL', 'Tailwind v4'],
      demoUrl: 'https://wa.me/918601300910?text=Hi%20SiteMint!%20I%20want%20to%20see%20the%20E-Commerce%20Store%20case%20study.',
      ctaText: 'Request Demo Video',
      color: 'border-emerald-200 bg-emerald-50/20',
      iconColor: 'text-emerald-700 bg-emerald-100',
      results: 'Sub-1.2s Page Load & 4.8% Checkout Conversion',
    },
    {
      id: 'recruitment-software',
      title: 'TalentHire Job Portal & Applicant Tracking System',
      category: 'custom',
      categoryName: 'Custom Software',
      icon: Cpu,
      badge: 'ENTERPRISE SYSTEM',
      badgeColor: 'bg-indigo-50 text-indigo-700 border-indigo-200',
      description: 'Corporate recruitment software with job posting feed, candidate resume CV parser, interview scheduling calendar, and role-based HR manager dashboard.',
      deliverables: ['Candidate Resume Parser', 'HR Interview Dashboard', 'Role-Based Permissions', 'Automated Email Alerts'],
      techStack: ['Node.js Backend', 'Next.js Frontend', 'Cloud Database', 'JWT Auth'],
      demoUrl: 'https://wa.me/918601300910?text=Hi%20SiteMint!%20I%20want%20to%20discuss%20the%20Recruitment/Custom%20Software%20project.',
      ctaText: 'Discuss Case Study',
      color: 'border-indigo-200 bg-indigo-50/20',
      iconColor: 'text-indigo-700 bg-indigo-100',
      results: 'Saved 25+ Hours/Week on Manual Screening',
    },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter((p) => p.category === filter);

  return (
    <div className="w-full pt-6 pb-12 sm:pt-10 sm:pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-50 border border-violet-200 text-violet-800 text-xs font-bold uppercase tracking-wider mb-4 shadow-2xs">
            <Briefcase className="w-3.5 h-3.5 text-violet-600" /> Featured Portfolio & Projects
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-3">
            Real Projects Delivering <span className="gradient-text-hero">Real Business Results</span>
          </h1>
          <p className="text-slate-600 text-xs sm:text-base max-w-2xl mx-auto">
            Explore our deployed websites and applications designed for performance, high conversions, and seamless user experience.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10 sm:mb-14">
          {[
            { id: 'all', label: 'All Projects' },
            { id: 'restaurant', label: 'Bakery & Restaurant' },
            { id: 'education', label: 'Education & Coaching' },
            { id: 'ecommerce', label: 'E-Commerce' },
            { id: 'custom', label: 'Custom Software' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                filter === tab.id
                  ? 'bg-violet-600 text-white shadow-sm'
                  : 'bg-slate-100 hover:bg-slate-200/80 text-slate-700'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-16">
          {filteredProjects.map((proj) => {
            const Icon = proj.icon;
            const isInternal = proj.demoUrl.startsWith('/');
            return (
              <div
                key={proj.id}
                className="glass-card p-6 sm:p-8 flex flex-col justify-between border border-slate-200 hover:border-violet-300 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="flex items-center gap-2.5">
                      <div className={`p-2.5 rounded-xl ${proj.iconColor} shrink-0`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">
                          {proj.categoryName}
                        </span>
                        <h2 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug">
                          {proj.title}
                        </h2>
                      </div>
                    </div>
                    <span className={`text-[9px] sm:text-[10px] font-bold px-2 py-0.5 rounded-full border shrink-0 ${proj.badgeColor}`}>
                      {proj.badge}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 mb-5 leading-relaxed">
                    {proj.description}
                  </p>

                  {/* Highlights Deliverables */}
                  <div className="grid grid-cols-2 gap-2 mb-5">
                    {proj.deliverables.map((del, i) => (
                      <div key={i} className="flex items-center gap-1.5 text-xs text-slate-700 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span className="truncate">{del}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {proj.techStack.map((tech, i) => (
                      <span key={i} className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-slate-100 text-slate-600">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Key Metric Result */}
                  <div className="p-3 rounded-xl bg-violet-50 border border-violet-100 text-xs font-bold text-violet-800 mb-6 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-violet-600 shrink-0" />
                    <span>Result: {proj.results}</span>
                  </div>
                </div>

                {/* Footer Actions */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                  {isInternal ? (
                    <Link
                      href={proj.demoUrl}
                      className="btn-primary text-xs !py-2.5 !px-5 flex items-center gap-1.5 shadow-sm"
                    >
                      <Eye className="w-4 h-4" />
                      <span>{proj.ctaText}</span>
                    </Link>
                  ) : (
                    <a
                      href={proj.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary text-xs !py-2.5 !px-5 flex items-center gap-1.5 shadow-sm"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>{proj.ctaText}</span>
                    </a>
                  )}

                  <a
                    href={`https://wa.me/918601300910?text=Hi%20SiteMint!%20I%20saw%20your%20project%20${encodeURIComponent(proj.title)}%20and%20want%20a%20similar%20system.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 hover:bg-emerald-100 transition flex items-center justify-center min-w-[40px] min-h-[40px]"
                    title="Order Similar Project"
                  >
                    <MessageCircle className="w-4 h-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Bottom Box */}
        <div className="p-6 sm:p-10 rounded-3xl bg-gradient-to-r from-violet-50 via-slate-50 to-teal-50 border border-violet-200 text-center shadow-sm">
          <h3 className="text-xl sm:text-3xl font-extrabold text-slate-900 mb-2">
            Ready to Build Your Project?
          </h3>
          <p className="text-slate-600 text-xs sm:text-sm max-w-xl mx-auto mb-6">
            Get a tailored proposal, free milestone roadmap, and live demo preview for your brand.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://wa.me/918601300910?text=Hi%20SiteMint!%20I%20want%20to%20discuss%20a%20new%20project%20for%20my%20business."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp text-xs sm:text-sm !py-2.5 sm:!py-3 !px-6 shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Start Project on WhatsApp</span>
            </a>
            <Link
              href="/calculator"
              className="btn-secondary text-xs sm:text-sm !py-2.5 sm:!py-3 !px-5 flex items-center gap-1.5"
            >
              <span>Calculate Cost</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
      <FaqSection />
    </div>
  );
}
