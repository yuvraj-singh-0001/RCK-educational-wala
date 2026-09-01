'use client';

import { useState } from 'react';
import { 
  Cpu, 
  Globe, 
  Server, 
  Database, 
  Smartphone, 
  Video, 
  Share2, 
  Layers, 
  Sparkles,
  Zap,
  ShieldCheck,
  TrendingUp,
  CreditCard,
  Cloud,
  CheckCircle2
} from 'lucide-react';

export default function TechnologiesSection() {
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
    { name: 'Next.js 15', category: 'web', label: 'Full-Stack Framework', desc: 'SSR, SEO rendering & sub-second page loads', color: 'text-slate-900 bg-slate-100' },
    { name: 'React.js', category: 'web', label: 'Frontend UI Library', desc: 'Component architecture & interactive interfaces', color: 'text-sky-700 bg-sky-100' },
    { name: 'TypeScript', category: 'web', label: 'Type Safety', desc: 'Robust bug-free enterprise code quality', color: 'text-blue-700 bg-blue-100' },
    { name: 'Tailwind CSS', category: 'web', label: 'Modern Styling', desc: 'Ultra-fast responsive utility styling engine', color: 'text-cyan-700 bg-cyan-100' },
    { name: 'HTML5 & CSS3', category: 'web', label: 'Web Standards', desc: 'Semantic tags, mobile viewports & animations', color: 'text-orange-700 bg-orange-100' },
    { name: 'JavaScript (ES6+)', category: 'web', label: 'Core Logic', desc: 'Asynchronous event handling & modern APIs', color: 'text-amber-700 bg-amber-100' },

    // 2. Backend & Cloud
    { name: 'Node.js', category: 'backend', label: 'Server Runtime', desc: 'High-concurrency event-driven architecture', color: 'text-emerald-700 bg-emerald-100' },
    { name: 'Express.js', category: 'backend', label: 'REST API Engine', desc: 'Microservices, routing & secure webhooks', color: 'text-slate-700 bg-slate-100' },
    { name: 'Razorpay UPI', category: 'backend', label: 'Payments & QR', desc: 'Instant UPI, debit/credit cards & auto checkout', color: 'text-blue-700 bg-blue-100' },
    { name: 'AWS Cloud', category: 'backend', label: 'Cloud Infrastructure', desc: 'S3 storage, EC2 servers & 99.9% uptime SLA', color: 'text-amber-700 bg-amber-100' },
    { name: 'Vercel Edge', category: 'backend', label: 'Global CDN Hosting', desc: 'Sub-50ms latency edge server caching', color: 'text-slate-900 bg-slate-100' },
    { name: 'Postman & REST', category: 'backend', label: 'API Architecture', desc: 'Secure endpoints, JWT auth & data sanitization', color: 'text-orange-700 bg-orange-100' },

    // 3. Databases
    { name: 'MongoDB', category: 'database', label: 'NoSQL Cloud DB', desc: 'Flexible JSON documents for products & users', color: 'text-emerald-700 bg-emerald-100' },
    { name: 'PostgreSQL', category: 'database', label: 'Relational Database', desc: 'ACID-compliant tables for enterprise accounting', color: 'text-sky-700 bg-sky-100' },
    { name: 'MySQL', category: 'database', label: 'SQL Database', desc: 'Structured tables for ERP billing & inventory', color: 'text-blue-700 bg-blue-100' },
    { name: 'Redis Cache', category: 'database', label: 'In-Memory Cache', desc: 'Lightning fast session & temporary data caching', color: 'text-rose-700 bg-rose-100' },
    { name: 'Firebase Firestore', category: 'database', label: 'Realtime Database', desc: 'Instant live syncing for orders & notifications', color: 'text-amber-700 bg-amber-100' },

    // 4. Mobile Apps
    { name: 'Flutter', category: 'mobile', label: 'Cross-Platform Framework', desc: 'Single codebase 60fps Android & iOS apps', color: 'text-cyan-700 bg-cyan-100' },
    { name: 'React Native', category: 'mobile', label: 'Hybrid Mobile', desc: 'Native UI bridge for high-retention user apps', color: 'text-sky-700 bg-sky-100' },
    { name: 'Android Studio', category: 'mobile', label: 'Android (.APK & .AAB)', desc: 'Signed production builds ready for Google Play', color: 'text-emerald-700 bg-emerald-100' },
    { name: 'Firebase Cloud Push', category: 'mobile', label: 'Push Notifications', desc: 'Instant marketing alerts & order status pings', color: 'text-amber-700 bg-amber-100' },
    { name: 'Play Console & iOS', category: 'mobile', label: 'App Store Deployment', desc: 'Google Play & Apple Store launch assistance', color: 'text-indigo-700 bg-indigo-100' },

    // 5. Video & Media
    { name: 'Premiere Pro', category: 'video', label: 'Video Editing Suite', desc: '4K timeline cutting, pacing & multi-cam syncing', color: 'text-purple-700 bg-purple-100' },
    { name: 'After Effects', category: 'video', label: '2D Motion Graphics', desc: 'Title animations, 2D visual effects & logo reveals', color: 'text-indigo-700 bg-indigo-100' },
    { name: 'DaVinci Resolve', category: 'video', label: 'Color Grading & Audio', desc: 'Cinema color palettes & professional sound FX', color: 'text-pink-700 bg-pink-100' },
    { name: 'CapCut Pro', category: 'video', label: 'Viral Reels & Shorts', desc: 'Dynamic subtitles, trending sound hooks & memes', color: 'text-rose-700 bg-rose-100' },
    { name: 'Photoshop & Illustrator', category: 'video', label: 'Graphic Assets', desc: 'Thumbnails, vector icons & brand overlays', color: 'text-sky-700 bg-sky-100' },

    // 6. Social & Ads
    { name: 'Meta Ads Manager', category: 'social', label: 'FB & Instagram Ads', desc: 'High-ROI sponsored lead & sales campaigns', color: 'text-blue-700 bg-blue-100' },
    { name: 'Google Ads & Keywords', category: 'social', label: 'Search Ad Campaigns', desc: 'Targeted high-intent local customer keywords', color: 'text-amber-700 bg-amber-100' },
    { name: 'Google Analytics 4', category: 'social', label: 'Traffic Intelligence', desc: 'Conversion events, user funnel & ROI tracking', color: 'text-orange-700 bg-orange-100' },
    { name: 'Search Console', category: 'social', label: 'Google Search Indexing', desc: 'Sitemap submission & search keyword rankings', color: 'text-emerald-700 bg-emerald-100' },
    { name: 'Canva Pro & Figma', category: 'social', label: 'Creative Design Tools', desc: 'Daily branded carousel & social post designs', color: 'text-teal-700 bg-teal-100' },
  ];

  const filteredTools = activeCategory === 'all' 
    ? tools 
    : tools.filter((t) => t.category === activeCategory);

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-slate-50/70 border-t border-b border-slate-200/80 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-50 border border-violet-200 text-violet-800 text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-3 sm:mb-4 shadow-2xs">
            <Cpu className="w-3.5 h-3.5 text-violet-600" /> 30+ Modern Tools & Frameworks
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-2 sm:mb-4">
            Technologies & Tools <span className="gradient-text-purple">We Use</span>
          </h2>
          <p className="text-slate-600 text-xs sm:text-base">
            We use 30+ production-grade software tools, frameworks, and marketing engines across Web, Mobile, Video, and Social Growth.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2.5 mb-8 sm:mb-12">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isSelected = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                  isSelected
                    ? 'bg-violet-600 text-white shadow-md shadow-violet-600/20 scale-102'
                    : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 shadow-2xs'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* 30+ Tools Grid with min-w-0 */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2.5 sm:gap-4">
          {filteredTools.map((tool, idx) => (
            <div
              key={idx}
              className="bg-white p-3.5 sm:p-4 rounded-2xl border border-slate-200 shadow-2xs hover:border-violet-300 hover:shadow-sm transition-all flex flex-col justify-between group min-w-0"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full ${tool.color}`}>
                    {tool.name.split(' ')[0]}
                  </span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 opacity-60 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="text-xs sm:text-sm font-bold text-slate-900 mb-1 leading-snug truncate">
                  {tool.name}
                </h3>
                <div className="text-[10px] text-violet-700 font-semibold mb-1 truncate">
                  {tool.label}
                </div>
                <p className="text-[10px] text-slate-500 leading-tight">
                  {tool.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Assurance */}
        <div className="mt-8 sm:mt-12 text-center text-xs text-slate-500">
          <span>⚡ All software and libraries are 100% genuine, licensed, and updated to latest long-term stable versions.</span>
        </div>
      </div>
    </section>
  );
}
