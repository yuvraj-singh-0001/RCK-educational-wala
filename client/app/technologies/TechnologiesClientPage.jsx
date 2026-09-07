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
  CheckCircle2,
  ArrowRight,
  MessageCircle,
  Briefcase,
  Calculator
} from 'lucide-react';
import AnimatedSection from '../../components/AnimatedSection';

export default function TechnologiesClientPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Stack (32)', icon: Layers },
    { id: 'web', name: 'Web & Frontend', icon: Globe },
    { id: 'backend', name: 'Backend & Cloud', icon: Server },
    { id: 'database', name: 'Databases', icon: Database },
    { id: 'mobile', name: 'Mobile Apps', icon: Smartphone },
    { id: 'video', name: 'Video & Media', icon: Video },
    { id: 'social', name: 'Social & Ads', icon: Share2 },
  ];

  const tools = [
    // 1. Web & Frontend
    { 
      name: 'Next.js 15', 
      category: 'web', 
      label: 'Full-Stack Framework', 
      desc: 'SSR, SEO rendering & sub-second page loads with App Router architecture.', 
      icon: Layers, 
      color: 'text-slate-900 bg-slate-100 border-slate-300',
      badge: 'SSR ENGINE'
    },
    { 
      name: 'React 19', 
      category: 'web', 
      label: 'Frontend UI Library', 
      desc: 'Component architecture, concurrent rendering & interactive user interfaces.', 
      icon: Code2, 
      color: 'text-sky-600 bg-sky-50 border-sky-200',
      badge: 'UI LIBRARY'
    },
    { 
      name: 'TypeScript', 
      category: 'web', 
      label: 'Type Safety', 
      desc: 'Robust bug-free enterprise code quality with strict type definitions.', 
      icon: FileCode, 
      color: 'text-blue-600 bg-blue-50 border-blue-200',
      badge: 'ENTERPRISE TYPE'
    },
    { 
      name: 'Tailwind CSS', 
      category: 'web', 
      label: 'Modern Styling', 
      desc: 'Ultra-fast responsive utility styling engine with zero CSS bloat.', 
      icon: Layout, 
      color: 'text-cyan-600 bg-cyan-50 border-cyan-200',
      badge: 'STYLING'
    },
    { 
      name: 'HTML5 & CSS3', 
      category: 'web', 
      label: 'Web Standards', 
      desc: 'Semantic tags, responsive mobile viewports & hardware-accelerated animations.', 
      icon: Globe, 
      color: 'text-orange-600 bg-orange-50 border-orange-200',
      badge: 'STANDARDS'
    },
    { 
      name: 'JavaScript (ES6+)', 
      category: 'web', 
      label: 'Core Logic', 
      desc: 'Asynchronous event handling, modern ES modules & native browser APIs.', 
      icon: Terminal, 
      color: 'text-amber-600 bg-amber-50 border-amber-200',
      badge: 'CORE ENGINE'
    },

    // 2. Backend & Cloud
    { 
      name: 'Node.js', 
      category: 'backend', 
      label: 'Server Runtime', 
      desc: 'High-concurrency event-driven asynchronous microservice architecture.', 
      icon: Server, 
      color: 'text-emerald-600 bg-emerald-50 border-emerald-200',
      badge: 'BACKEND RUNTIME'
    },
    { 
      name: 'Express.js', 
      category: 'backend', 
      label: 'REST API Engine', 
      desc: 'Microservices, request routing, middleware & secure webhook handlers.', 
      icon: Cpu, 
      color: 'text-slate-700 bg-slate-100 border-slate-300',
      badge: 'REST ROUTING'
    },
    { 
      name: 'AWS Cloud', 
      category: 'backend', 
      label: 'Cloud Infrastructure', 
      desc: 'S3 asset storage, EC2 server compute & 99.9% uptime availability SLA.', 
      icon: Cloud, 
      color: 'text-amber-700 bg-amber-50 border-amber-200',
      badge: 'INFRASTRUCTURE'
    },
    { 
      name: 'Razorpay UPI', 
      category: 'backend', 
      label: 'Payments & QR', 
      desc: 'Instant UPI 0% checkout, credit/debit cards & automated webhook verification.', 
      icon: CreditCard, 
      color: 'text-blue-700 bg-blue-50 border-blue-200',
      badge: 'PAYMENT GATEWAY'
    },
    { 
      name: 'Vercel Edge', 
      category: 'backend', 
      label: 'Global CDN Hosting', 
      desc: 'Sub-50ms latency edge server caching and instant git deployment pipelines.', 
      icon: Zap, 
      color: 'text-slate-900 bg-slate-100 border-slate-300',
      badge: 'EDGE CDN'
    },
    { 
      name: 'REST & JWT Auth', 
      category: 'backend', 
      label: 'API Security', 
      desc: 'Secure endpoint architecture, JSON Web Tokens & data sanitization layers.', 
      icon: Box, 
      color: 'text-indigo-600 bg-indigo-50 border-indigo-200',
      badge: 'API SECURITY'
    },

    // 3. Databases
    { 
      name: 'MongoDB', 
      category: 'database', 
      label: 'NoSQL Cloud DB', 
      desc: 'Flexible JSON documents for fast product cataloging and user profiles.', 
      icon: Database, 
      color: 'text-emerald-600 bg-emerald-50 border-emerald-200',
      badge: 'NOSQL DATABASE'
    },
    { 
      name: 'PostgreSQL', 
      category: 'database', 
      label: 'Relational DB', 
      desc: 'ACID-compliant relational tables for enterprise accounting & inventory.', 
      icon: Database, 
      color: 'text-sky-700 bg-sky-50 border-sky-200',
      badge: 'SQL RELATIONAL'
    },
    { 
      name: 'MySQL', 
      category: 'database', 
      label: 'SQL Database', 
      desc: 'Structured tables for ERP billing, multi-store data & transaction logs.', 
      icon: Database, 
      color: 'text-blue-600 bg-blue-50 border-blue-200',
      badge: 'ENTERPRISE SQL'
    },
    { 
      name: 'Redis Cache', 
      category: 'database', 
      label: 'In-Memory Cache', 
      desc: 'Lightning fast session storage, API response caching & rate-limiting.', 
      icon: Zap, 
      color: 'text-rose-600 bg-rose-50 border-rose-200',
      badge: 'FAST CACHE'
    },
    { 
      name: 'Firebase Firestore', 
      category: 'database', 
      label: 'Realtime Database', 
      desc: 'Instant live syncing for orders, live chat & push notification listeners.', 
      icon: Flame, 
      color: 'text-amber-600 bg-amber-50 border-amber-200',
      badge: 'REALTIME SYNC'
    },

    // 4. Mobile Apps
    { 
      name: 'Flutter', 
      category: 'mobile', 
      label: 'Cross-Platform', 
      desc: 'Single codebase 60fps native-feel Android & iOS applications.', 
      icon: Smartphone, 
      color: 'text-cyan-600 bg-cyan-50 border-cyan-200',
      badge: 'CROSS-PLATFORM'
    },
    { 
      name: 'React Native', 
      category: 'mobile', 
      label: 'Hybrid Mobile', 
      desc: 'Native UI bridge for high-retention mobile user applications.', 
      icon: Smartphone, 
      color: 'text-sky-600 bg-sky-50 border-sky-200',
      badge: 'HYBRID APP'
    },
    { 
      name: 'Android Studio', 
      category: 'mobile', 
      label: 'Android (.APK)', 
      desc: 'Signed production builds ready for Google Play Store publishing.', 
      icon: Smartphone, 
      color: 'text-emerald-600 bg-emerald-50 border-emerald-200',
      badge: 'PLAY STORE'
    },
    { 
      name: 'Firebase Push', 
      category: 'mobile', 
      label: 'Push Notifications', 
      desc: 'Instant marketing alerts, customer re-engagement & order pings.', 
      icon: Flame, 
      color: 'text-amber-600 bg-amber-50 border-amber-200',
      badge: 'PUSH ALERTS'
    },
    { 
      name: 'Play Console & iOS', 
      category: 'mobile', 
      label: 'App Store Deploy', 
      desc: 'Complete deployment assistance for Google Play & Apple App Store.', 
      icon: ShieldCheck, 
      color: 'text-indigo-600 bg-indigo-50 border-indigo-200',
      badge: 'STORE DEPLOY'
    },

    // 5. Video & Media
    { 
      name: 'Premiere Pro', 
      category: 'video', 
      label: 'Video Editing', 
      desc: '4K timeline cutting, pacing, multi-cam syncing & commercial ads.', 
      icon: Film, 
      color: 'text-purple-600 bg-purple-50 border-purple-200',
      badge: '4K EDITING'
    },
    { 
      name: 'After Effects', 
      category: 'video', 
      label: 'Motion Graphics', 
      desc: 'Dynamic title animations, 2D visual effects & logo reveal graphics.', 
      icon: Video, 
      color: 'text-indigo-600 bg-indigo-50 border-indigo-200',
      badge: '2D MOTION'
    },
    { 
      name: 'DaVinci Resolve', 
      category: 'video', 
      label: 'Color Grading', 
      desc: 'Cinema color palettes, HDR grading & professional audio mixing.', 
      icon: Palette, 
      color: 'text-pink-600 bg-pink-50 border-pink-200',
      badge: 'CINEMA COLOR'
    },
    { 
      name: 'CapCut Pro', 
      category: 'video', 
      label: 'Reels & Shorts', 
      desc: 'Dynamic animated subtitles, trending sound hooks & Instagram memes.', 
      icon: Sparkles, 
      color: 'text-rose-600 bg-rose-50 border-rose-200',
      badge: 'VIRAL REELS'
    },
    { 
      name: 'Photoshop & AI', 
      category: 'video', 
      label: 'Graphic Assets', 
      desc: 'High-CTR YouTube thumbnails, vector icons & custom brand overlays.', 
      icon: Palette, 
      color: 'text-sky-600 bg-sky-50 border-sky-200',
      badge: 'GRAPHIC ASSETS'
    },

    // 6. Social & Ads
    { 
      name: 'Meta Ads Manager', 
      category: 'social', 
      label: 'FB & Insta Ads', 
      desc: 'High-ROI sponsored lead generation and direct sales ad campaigns.', 
      icon: Share2, 
      color: 'text-blue-600 bg-blue-50 border-blue-200',
      badge: 'META ADS'
    },
    { 
      name: 'Google Ads', 
      category: 'social', 
      label: 'Search Campaigns', 
      desc: 'Targeted high-intent local customer search keyword campaigns.', 
      icon: Search, 
      color: 'text-amber-600 bg-amber-50 border-amber-200',
      badge: 'GOOGLE ADS'
    },
    { 
      name: 'Analytics 4 (GA4)', 
      category: 'social', 
      label: 'Traffic Insights', 
      desc: 'Conversion tracking, custom event funnels & real-time ROI reports.', 
      icon: BarChart3, 
      color: 'text-orange-600 bg-orange-50 border-orange-200',
      badge: 'TRAFFIC INTEL'
    },
    { 
      name: 'Search Console', 
      category: 'social', 
      label: 'SEO Indexing', 
      desc: 'Sitemap submission, Google search indexing & keyword rankings.', 
      icon: Search, 
      color: 'text-emerald-600 bg-emerald-50 border-emerald-200',
      badge: 'SEO RANKINGS'
    },
    { 
      name: 'Figma & Canva Pro', 
      category: 'social', 
      label: 'UI & Post Design', 
      desc: 'Daily branded carousel posts, social banners & UI prototype wireframes.', 
      icon: Palette, 
      color: 'text-teal-600 bg-teal-50 border-teal-200',
      badge: 'UI & SOCIAL'
    },
  ];

  const filteredTools = activeCategory === 'all' 
    ? tools 
    : tools.filter((t) => t.category === activeCategory);

  return (
    <div className="w-full max-w-full overflow-hidden bg-slate-50/60 text-slate-900 font-sans min-h-screen pb-20">

      {/* 1. HERO SECTION */}
      <section className="relative w-full bg-gradient-to-br from-[#0F172A] via-[#1E1B4B] to-[#0F172A] text-white py-16 sm:py-20 overflow-hidden border-b border-violet-900/30">
        <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <div className="absolute -top-10 left-1/3 w-72 h-72 bg-violet-600/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-cyan-500/15 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <AnimatedSection delay={0}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-500/10 border border-violet-400/30 text-violet-300 text-xs font-black uppercase tracking-wider mb-4">
              <Cpu className="w-4 h-4 text-violet-400" /> Production-Grade Digital Ecosystem
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight mb-4">
              30+ Technologies & <span className="gradient-text-hero">Software Tools</span>
            </h1>

            <p className="text-slate-300 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed font-normal mb-8">
              Explore the battle-tested web frameworks, mobile engines, databases, cloud architecture, video editing suites, and ad platforms used by SiteMint Studio to build high-performance software.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/services"
                className="px-5 py-2.5 rounded-xl bg-violet-950/90 border border-violet-700/60 hover:bg-violet-900 text-white text-xs sm:text-sm font-extrabold flex items-center gap-2 transition shadow-sm"
              >
                <Briefcase className="w-4 h-4 text-violet-300" />
                <span>Explore Capabilities</span>
              </Link>

              <Link
                href="/calculator"
                className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs sm:text-sm font-extrabold flex items-center gap-2 transition"
              >
                <Calculator className="w-4 h-4 text-violet-300" />
                <span>Calculate Cost</span>
              </Link>

              <a
                href="https://wa.me/918920683588?text=Hi%20SiteMint!%20I%20want%20to%20discuss%20a%20new%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-extrabold flex items-center gap-2 shadow-md transition"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Start a Project</span>
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 2. CATEGORY FILTER PILLS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16">
        <AnimatedSection delay={50}>
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-50/90 border border-violet-200/90 text-violet-800 text-xs font-extrabold uppercase tracking-wider mb-3 shadow-2xs">
              <Layers className="w-3.5 h-3.5 text-violet-600" /> Category Filtering
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight mb-2">
              Browse Tools By <span className="gradient-text-hero">Specialization</span>
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm font-medium">
              Click any category below to inspect our full technical stack with 100% code ownership and zero agency hostages.
            </p>
            <div className="w-14 h-1 bg-gradient-to-r from-violet-600 via-indigo-600 to-teal-500 rounded-full mx-auto mt-3" />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isSelected = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 rounded-2xl text-xs sm:text-sm font-extrabold transition-all cursor-pointer flex items-center gap-2 ${
                    isSelected
                      ? 'bg-violet-700 text-white shadow-md shadow-violet-700/20 scale-105'
                      : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200/90 shadow-2xs'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{cat.name}</span>
                </button>
              );
            })}
          </div>
        </AnimatedSection>

        {/* 3. DETAILED TOOLS GRID (32 Cards with Badges, Descriptions, and Icons) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filteredTools.map((tool, idx) => {
            const ToolIcon = tool.icon;
            return (
              <AnimatedSection key={tool.name} delay={idx * 40}>
                <div className="bg-white p-5 rounded-3xl border border-slate-200/90 shadow-xs hover:shadow-xl hover:border-violet-300 transition-all duration-300 flex flex-col justify-between group h-full relative overflow-hidden">
                  
                  <div className="space-y-3">
                    {/* Top Row: Icon Badge + Category Tag */}
                    <div className="flex items-center justify-between gap-2">
                      <div className={`w-10 h-10 rounded-2xl flex items-center justify-center border ${tool.color} group-hover:scale-110 transition-transform duration-300 shadow-2xs`}>
                        <ToolIcon className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-black px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200/80">
                        {tool.badge}
                      </span>
                    </div>

                    {/* Title & Role */}
                    <div>
                      <h3 className="text-lg font-black text-slate-900 group-hover:text-violet-700 transition-colors leading-snug">
                        {tool.name}
                      </h3>
                      <p className="text-xs font-bold text-violet-700 mt-0.5">
                        {tool.label}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      {tool.desc}
                    </p>
                  </div>

                  {/* Bottom Verification Checkmark */}
                  <div className="pt-4 mt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-emerald-600 font-bold">
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5" /> 100% Genuine & Licensed
                    </span>
                    <span className="text-slate-400 font-mono text-[10px]">v-STABLE</span>
                  </div>

                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </section>

      {/* 4. FOOTER CTA & INTERNAL BACKLINKS */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <AnimatedSection delay={100}>
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-violet-700 via-indigo-700 to-slate-900 text-white shadow-xl text-center space-y-5">
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              Ready to Build Your Project with Our Tech Stack?
            </h2>
            <p className="text-xs sm:text-sm text-violet-100 max-w-xl mx-auto leading-relaxed">
              From Next.js web applications to Flutter mobile apps, 4K Instagram video editing, and Meta ad management—we deliver clean code with 100% legal ownership.
            </p>
            <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
              <a
                href="https://wa.me/918920683588?text=Hi%20SiteMint!%20I%20want%20to%20start%20a%20project%20using%20your%20tech%20stack."
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl bg-white text-violet-900 font-black text-xs sm:text-sm hover:bg-violet-50 transition shadow-md flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>Start WhatsApp Discussion</span>
              </a>

              <Link
                href="/about"
                className="px-6 py-3 rounded-xl bg-violet-900/80 hover:bg-violet-900 border border-violet-400/40 text-white font-bold text-xs sm:text-sm transition flex items-center gap-2"
              >
                <span>About SiteMint Studio</span>
                <ArrowRight className="w-4 h-4 text-violet-300" />
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </section>

    </div>
  );
}
