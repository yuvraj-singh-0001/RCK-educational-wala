'use client';

import Link from 'next/link';
import { 
  Sparkles, 
  ArrowRight, 
  MessageCircle, 
  ShieldCheck, 
  Zap, 
  CheckCircle2, 
  Smartphone, 
  Globe, 
  Clock, 
  Briefcase,
  Layers,
  Star,
  Play
} from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden w-full pt-8 pb-14 sm:pt-14 sm:pb-20 md:pt-16 md:pb-24 bg-white border-b border-slate-100">
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
              <Sparkles className="w-3.5 h-3.5 text-violet-600 animate-spin-slow" />
              <span>Modern Web, App & Creative Media Studio</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-5xl md:text-5xl lg:text-4xl xl:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.15] mb-4 sm:mb-6 font-sans">
              Affordable Website & Mobile App <br className="hidden sm:inline" />
              Development with <span className="gradient-text-hero">SiteMint</span>
            </h1>

            {/* Subheading */}
            <p className="text-sm sm:text-lg md:text-xl text-slate-600 max-w-2xl lg:max-w-none mb-8 sm:mb-10 font-normal leading-relaxed">
              We build fast, scalable websites, mobile apps, viral video edits, and manage social media growth for ambitious businesses across India.
            </p>

            {/* Action CTAs with Button Shine Effect */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 w-full sm:w-auto">
              <a
                href="https://wa.me/918920683588?text=Hi%20SiteMint!%20I%20want%20to%20start%20a%20project%20for%20my%20business."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp btn-shine text-sm sm:text-base !py-3 sm:!py-3.5 !px-7 sm:!px-8 shadow-lg shadow-green-600/25 w-full sm:w-auto justify-center group"
              >
                <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>Start Your Project</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </a>

              <Link
                href="/projects"
                className="btn-secondary btn-shine text-sm sm:text-base !py-3 sm:!py-3.5 !px-6 sm:!px-7 flex items-center justify-center gap-2 w-full sm:w-auto font-bold group"
              >
                <Briefcase className="w-4 h-4 text-violet-600 group-hover:rotate-12 transition-transform" />
                <span>View Our Work</span>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 group-hover:text-violet-600 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right Image Showcase Column (Only visible on Laptop/Desktop lg:flex) */}
          <div className="hidden lg:flex lg:col-span-7 xl:col-span-7 relative justify-center items-center">
            <div className="relative w-full lg:scale-105 xl:scale-110 transform origin-center">
              {/* Soft Gradient Backdrop Glow */}
              <div className="absolute -inset-6 bg-gradient-to-tr from-violet-300/40 via-sky-200/40 to-emerald-200/40 rounded-3xl blur-3xl -z-10" />
              <img
                src="/heropage.png"
                alt="SiteMint Web and Mobile App Development Showcase"
                className="w-full h-auto object-contain drop-shadow-2xl pointer-events-none select-none"
              />
            </div>
          </div>

        </div>

        {/* 4 Feature Value Pills with Min-W-0 */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3.5 max-w-5xl mx-auto mb-10 sm:mb-14 text-left">
          <div className="p-3 sm:p-3.5 rounded-2xl bg-white/90 border border-emerald-200/90 bg-emerald-50/20 shadow-xs flex items-center gap-2.5 sm:gap-3 cursor-default min-w-0">
            <div className="p-2 sm:p-2.5 rounded-xl bg-emerald-50 text-emerald-600 ring-1 ring-emerald-500/10 shrink-0">
              <Clock className="w-4 h-4 sm:w-4 sm:h-4" />
            </div>
            <div className="min-w-0">
              <div className="text-[12px] sm:text-[13px] font-bold text-slate-900 leading-tight truncate">7 Days Delivery</div>
              <div className="text-[10px] text-slate-500 truncate mt-0.5">Fast Turnaround</div>
            </div>
          </div>

          <div className="p-3 sm:p-3.5 rounded-2xl bg-white/90 border border-violet-200/90 bg-violet-50/20 shadow-xs flex items-center gap-2.5 sm:gap-3 cursor-default min-w-0">
            <div className="p-2 sm:p-2.5 rounded-xl bg-violet-50 text-violet-600 ring-1 ring-violet-500/10 shrink-0">
              <Smartphone className="w-4 h-4 sm:w-4 sm:h-4" />
            </div>
            <div className="min-w-0">
              <div className="text-[12px] sm:text-[13px] font-bold text-slate-900 leading-tight truncate">Mobile-First UI</div>
              <div className="text-[10px] text-slate-500 truncate mt-0.5">Sub-2s Speed</div>
            </div>
          </div>

          <div className="p-3 sm:p-3.5 rounded-2xl bg-white/90 border border-sky-200/90 bg-sky-50/20 shadow-xs flex items-center gap-2.5 sm:gap-3 cursor-default min-w-0">
            <div className="p-2 sm:p-2.5 rounded-xl bg-sky-50 text-sky-600 ring-1 ring-sky-500/10 shrink-0">
              <Globe className="w-4 h-4 sm:w-4 sm:h-4" />
            </div>
            <div className="min-w-0">
              <div className="text-[12px] sm:text-[13px] font-bold text-slate-900 leading-tight truncate">Domain & SSL</div>
              <div className="text-[10px] text-slate-500 truncate mt-0.5">1 Year Included</div>
            </div>
          </div>

          <div className="p-3 sm:p-3.5 rounded-2xl bg-white/90 border border-teal-200/90 bg-teal-50/20 shadow-xs flex items-center gap-2.5 sm:gap-3 cursor-default min-w-0">
            <div className="p-2 sm:p-2.5 rounded-xl bg-teal-50 text-teal-600 ring-1 ring-teal-500/10 shrink-0">
              <MessageCircle className="w-4 h-4 sm:w-4 sm:h-4" />
            </div>
            <div className="min-w-0">
              <div className="text-[12px] sm:text-[13px] font-bold text-slate-900 leading-tight truncate">24/7 WhatsApp</div>
              <div className="text-[10px] text-slate-500 truncate mt-0.5">Direct Support</div>
            </div>
          </div>
        </div>

        {/* Numbers & Credibility Bar with Min-W-0 */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 p-3.5 sm:p-6 rounded-2xl sm:rounded-3xl bg-slate-50/80 border border-slate-200/80 shadow-sm text-center">
            <div className="p-2 sm:p-3 border-r border-slate-200/80 last:border-r-0 min-w-0">
              <div className="text-xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 font-sans tracking-tight">
                15<span className="text-violet-600">+</span>
              </div>
              <div className="text-[9px] sm:text-xs text-slate-500 font-bold uppercase tracking-wider mt-1 truncate">
                Projects Done
              </div>
            </div>

            <div className="p-2 sm:p-3 border-r border-slate-200/80 last:border-r-0 min-w-0">
              <div className="text-xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 font-sans tracking-tight">
                7<span className="text-indigo-600"> Days</span>
              </div>
              <div className="text-[9px] sm:text-xs text-slate-500 font-bold uppercase tracking-wider mt-1 truncate">
                Avg. Delivery
              </div>
            </div>

            <div className="p-2 sm:p-3 border-r border-slate-200/80 last:border-r-0 min-w-0">
              <div className="text-xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 font-sans tracking-tight">
                100<span className="text-emerald-600">%</span>
              </div>
              <div className="text-[9px] sm:text-xs text-slate-500 font-bold uppercase tracking-wider mt-1 truncate">
                Code Ownership
              </div>
            </div>

            <div className="p-2 sm:p-3 min-w-0">
              <div className="text-xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 font-sans tracking-tight text-violet-700">
                ₹3,999
              </div>
              <div className="text-[9px] sm:text-xs text-slate-500 font-bold uppercase tracking-wider mt-1 truncate">
                Starting Budget
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

