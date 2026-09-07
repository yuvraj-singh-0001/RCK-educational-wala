'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  Cpu, 
  Globe, 
  Server, 
  Database, 
  Smartphone, 
  Video, 
  Share2, 
  Layers, 
  Code2,
  Cloud,
  Zap,
  ShieldCheck,
  CreditCard,
  Terminal,
  Film,
  Palette,
  Sparkles,
  Search,
  Layout,
  BarChart3,
  Box,
  Flame,
  FileCode,
  ArrowRight
} from 'lucide-react';
import AnimatedSection from './AnimatedSection';

export default function TechnologiesSection({ 
  heading = "Technologies & Tools We Use",
  subheading = "We leverage modern, battle-tested technology stacks for high-performance, secure digital software."
}) {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Stack (30+)', icon: Layers },
    { id: 'web', name: 'Web & Frontend', icon: Globe },
    { id: 'backend', name: 'Backend & Cloud', icon: Server },
    { id: 'database', name: 'Databases', icon: Database },
    { id: 'mobile', name: 'Mobile Apps', icon: Smartphone },
    { id: 'video', name: 'Video & Media', icon: Video },
    { id: 'social', name: 'Social & Ads', icon: Share2 },
  ];

  const tools = [
    // 1. Web & Frontend
    { name: 'Next.js 15', category: 'web', icon: Layers, color: 'text-slate-900 bg-slate-100 border-slate-300' },
    { name: 'React 19', category: 'web', icon: Code2, color: 'text-sky-600 bg-sky-50 border-sky-200' },
    { name: 'TypeScript', category: 'web', icon: FileCode, color: 'text-blue-600 bg-blue-50 border-blue-200' },
    { name: 'Tailwind CSS', category: 'web', icon: Layout, color: 'text-cyan-600 bg-cyan-50 border-cyan-200' },
    { name: 'HTML5 & CSS3', category: 'web', icon: Globe, color: 'text-orange-600 bg-orange-50 border-orange-200' },
    { name: 'JavaScript', category: 'web', icon: Terminal, color: 'text-amber-600 bg-amber-50 border-amber-200' },

    // 2. Backend & Cloud
    { name: 'Node.js', category: 'backend', icon: Server, color: 'text-emerald-600 bg-emerald-50 border-emerald-200' },
    { name: 'Express.js', category: 'backend', icon: Cpu, color: 'text-slate-700 bg-slate-100 border-slate-300' },
    { name: 'AWS Cloud', category: 'backend', icon: Cloud, color: 'text-amber-700 bg-amber-50 border-amber-200' },
    { name: 'Razorpay UPI', category: 'backend', icon: CreditCard, color: 'text-blue-700 bg-blue-50 border-blue-200' },
    { name: 'Vercel Edge', category: 'backend', icon: Zap, color: 'text-slate-900 bg-slate-100 border-slate-300' },
    { name: 'REST & JWT', category: 'backend', icon: Box, color: 'text-indigo-600 bg-indigo-50 border-indigo-200' },

    // 3. Databases
    { name: 'MongoDB', category: 'database', icon: Database, color: 'text-emerald-600 bg-emerald-50 border-emerald-200' },
    { name: 'PostgreSQL', category: 'database', icon: Database, color: 'text-sky-700 bg-sky-50 border-sky-200' },
    { name: 'MySQL', category: 'database', icon: Database, color: 'text-blue-600 bg-blue-50 border-blue-200' },
    { name: 'Redis Cache', category: 'database', icon: Zap, color: 'text-rose-600 bg-rose-50 border-rose-200' },
    { name: 'Firebase', category: 'database', icon: Flame, color: 'text-amber-600 bg-amber-50 border-amber-200' },

    // 4. Mobile Apps
    { name: 'Flutter', category: 'mobile', icon: Smartphone, color: 'text-cyan-600 bg-cyan-50 border-cyan-200' },
    { name: 'React Native', category: 'mobile', icon: Smartphone, color: 'text-sky-600 bg-sky-50 border-sky-200' },
    { name: 'Android APK', category: 'mobile', icon: Smartphone, color: 'text-emerald-600 bg-emerald-50 border-emerald-200' },
    { name: 'Firebase Push', category: 'mobile', icon: Flame, color: 'text-amber-600 bg-amber-50 border-amber-200' },
    { name: 'App Stores', category: 'mobile', icon: ShieldCheck, color: 'text-indigo-600 bg-indigo-50 border-indigo-200' },

    // 5. Video & Media
    { name: 'Premiere Pro', category: 'video', icon: Film, color: 'text-purple-600 bg-purple-50 border-purple-200' },
    { name: 'After Effects', category: 'video', icon: Video, color: 'text-indigo-600 bg-indigo-50 border-indigo-200' },
    { name: 'DaVinci Resolve', category: 'video', icon: Palette, color: 'text-pink-600 bg-pink-50 border-pink-200' },
    { name: 'CapCut Pro', category: 'video', icon: Sparkles, color: 'text-rose-600 bg-rose-50 border-rose-200' },
    { name: 'Photoshop', category: 'video', icon: Palette, color: 'text-sky-600 bg-sky-50 border-sky-200' },

    // 6. Social & Ads
    { name: 'Meta Ads', category: 'social', icon: Share2, color: 'text-blue-600 bg-blue-50 border-blue-200' },
    { name: 'Google Ads', category: 'social', icon: Search, color: 'text-amber-600 bg-amber-50 border-amber-200' },
    { name: 'Analytics 4', category: 'social', icon: BarChart3, color: 'text-orange-600 bg-orange-50 border-orange-200' },
    { name: 'Search Console', category: 'social', icon: Search, color: 'text-emerald-600 bg-emerald-50 border-emerald-200' },
    { name: 'Figma & Canva', category: 'social', icon: Palette, color: 'text-teal-600 bg-teal-50 border-teal-200' },
  ];

  const filteredTools = activeCategory === 'all' 
    ? tools 
    : tools.filter((t) => t.category === activeCategory);

  // Multiply items for smooth continuous infinite marquee loop
  const marqueeItems = [...filteredTools, ...filteredTools, ...filteredTools, ...filteredTools];

  return (
    <section className="py-6 sm:py-8 bg-slate-50/70 border-b border-slate-200 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <AnimatedSection delay={0} direction="left">
          <div className="text-center max-w-3xl mx-auto mb-5 sm:mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-50/90 border border-violet-200/90 text-violet-800 text-[11px] font-extrabold uppercase tracking-wider mb-2 shadow-2xs">
              <Cpu className="w-3.5 h-3.5 text-violet-600" /> Modern Tech Ecosystem
            </div>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-900 mb-1.5">
              {heading.includes("We Use") ? (
                <>
                  {heading.replace("We Use", "")} <span className="gradient-text-hero">We Use</span>
                </>
              ) : (
                heading
              )}
            </h2>
            <p className="text-slate-600 text-xs font-medium max-w-xl mx-auto leading-relaxed">
              {subheading}
            </p>
          </div>
        </AnimatedSection>

        {/* Category Filter Pills */}
        <AnimatedSection delay={50} direction="left">
          <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mb-6">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isSelected = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3 py-1 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                    isSelected
                      ? 'bg-violet-700 text-white shadow-md shadow-violet-700/20 scale-105'
                      : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200/90 shadow-2xs'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{cat.name}</span>
                </button>
              );
            })}
          </div>
        </AnimatedSection>

      </div>

      {/* Infinite Full-Width Marquee Running Slider */}
      <div className="relative w-full overflow-hidden py-2 sm:py-3">
        {/* Left & Right Smooth Edge Fade Overlays */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-slate-50 to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-slate-50 to-transparent z-10" />

        <div 
          className="tech-marquee-track flex items-center gap-3 sm:gap-4"
          style={{ 
            animationDuration: activeCategory === 'all' ? '110s' : '22s' 
          }}
        >
          {marqueeItems.map((tool, idx) => {
            const ToolIcon = tool.icon;
            return (
              <div 
                key={`${tool.name}-${idx}`}
                className="flex items-center gap-2.5 px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-full bg-white border border-slate-200/90 shadow-2xs hover:border-violet-400 hover:shadow-md transition-all duration-300 select-none shrink-0 group"
              >
                <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shrink-0 border ${tool.color} group-hover:scale-110 transition-transform duration-300`}>
                  <ToolIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
                <span className="text-xs sm:text-sm font-black text-slate-900 whitespace-nowrap group-hover:text-violet-700 transition-colors">
                  {tool.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Explore in Details Button */}
      <div className="mt-5 text-center px-4">
        <Link
          href="/technologies"
          className="inline-flex items-center gap-2 px-5 py-2 sm:px-6 sm:py-2.5 rounded-2xl bg-white hover:bg-violet-50 text-slate-800 hover:text-violet-800 border border-slate-200/90 hover:border-violet-300 font-extrabold text-xs sm:text-sm shadow-2xs hover:shadow-md transition-all group/btn"
        >
          <span>Explore Tech Stack in Detail</span>
          <ArrowRight className="w-4 h-4 text-violet-600 group-hover/btn:translate-x-1 transition-transform" />
        </Link>
      </div>

    </section>
  );
}



