import Link from 'next/link';
import Image from 'next/image';
import { 
  Target, 
  ArrowRight, 
  ShieldCheck, 
  CheckCircle2, 
  Heart, 
  Sparkles, 
  MessageCircle, 
  Code2, 
  Users, 
  Zap, 
  Layers, 
  Lock, 
  Headphones, 
  Calculator,
  Award,
  Globe,
  Smartphone,
  Video,
  Share2
} from 'lucide-react';
import AnimatedSection from '../../../components/AnimatedSection';

export const metadata = {
  title: 'Our Story & Mission | SiteMint Web Development & Creative Studio',
  description: 'Discover why SiteMint was created: empowering growing businesses with Next.js 15 websites, Flutter mobile apps, viral Instagram Reels video editing, and social media management at practical pricing in India.',
  keywords: [
    'about SiteMint studio',
    'Yuvraj Singh SiteMint founder',
    'web development studio india',
    'mobile app development studio',
    'video editing and instagram reels studio',
    'social media management company india',
    'transparent web development company india',
    'Next.js 15 and Flutter engineering',
    'affordable website developers india',
    'SiteMint founding story'
  ],
  alternates: {
    canonical: 'https://sitemint.in/about/ourstory',
  },
  openGraph: {
    title: 'Our Story & Mission | SiteMint Web Development & Creative Technology Studio',
    description: 'Empowering Indian businesses with modern web architecture, mobile apps, video editing, and social media management with practical pricing and 100% code ownership.',
    url: 'https://sitemint.in/about/ourstory',
    siteName: 'SiteMint',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Story & Mission | SiteMint Studio',
    description: 'Practical pricing, modern technology, and reliable support for ambitious Indian businesses.',
  },
};

export default function OurStoryPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'Our Story & Mission | SiteMint Web Development & Creative Technology Studio',
    description: 'Learn why SiteMint was founded to provide transparent, production-grade web & app development, video editing, and social media management.',
    url: 'https://sitemint.in/about/ourstory',
    mainEntity: {
      '@type': 'Organization',
      name: 'SiteMint',
      founder: 'Yuvraj Singh',
      url: 'https://sitemint.in',
      sameAs: [
        'https://www.linkedin.com/company/sitemint002sep02/'
      ]
    }
  };

  const pillarsList = [
    {
      title: '1. Web & Custom Software',
      desc: 'High-speed Next.js 15 business sites, e-commerce stores, coaching portals & custom web applications.',
      badge: 'From ₹3,999',
      badgeColor: 'bg-violet-50 text-violet-700 border-violet-200/80',
      icon: Globe,
      iconColor: 'bg-violet-50 text-violet-600 border-violet-100 group-hover:bg-violet-600 group-hover:text-white',
      topLine: 'bg-gradient-to-r from-violet-500 via-indigo-500 to-blue-500',
      hoverTitle: 'group-hover:text-violet-600',
    },
    {
      title: '2. Mobile App Development',
      desc: 'Native-feel Flutter apps for Android & iOS with phone OTP login, push alerts, and 0% UPI checkout.',
      badge: 'From ₹12,999',
      badgeColor: 'bg-pink-50 text-pink-700 border-pink-200/80',
      icon: Smartphone,
      iconColor: 'bg-pink-50 text-pink-600 border-pink-100 group-hover:bg-pink-600 group-hover:text-white',
      topLine: 'bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500',
      hoverTitle: 'group-hover:text-pink-600',
    },
    {
      title: '3. Video Editing & Reels',
      desc: 'Viral Instagram Reels, YouTube Shorts, commercial business video ads, and animated subtitles.',
      badge: 'From ₹499/reel',
      badgeColor: 'bg-rose-50 text-rose-700 border-rose-200/80',
      icon: Video,
      iconColor: 'bg-rose-50 text-rose-600 border-rose-100 group-hover:bg-rose-600 group-hover:text-white',
      topLine: 'bg-gradient-to-r from-rose-500 via-amber-500 to-orange-500',
      hoverTitle: 'group-hover:text-rose-600',
    },
    {
      title: '4. Social Media Management',
      desc: 'Multi-platform 7-8 channel management, daily graphic posts, SEO captions, DM inquiry routing & Meta Ads.',
      badge: 'Full Growth',
      badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200/80',
      icon: Share2,
      iconColor: 'bg-emerald-50 text-emerald-600 border-emerald-100 group-hover:bg-emerald-600 group-hover:text-white',
      topLine: 'bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500',
      hoverTitle: 'group-hover:text-emerald-600',
    },
  ];

  const solutionList = [
    {
      title: '1. Honest & Itemized Pricing',
      desc: 'Transparent costs across Web, Mobile Apps, Video Reels, and Social Media packages. Zero hidden setup fees and zero middleman markup.',
      icon: Zap,
      iconColor: 'bg-blue-50 text-[#3B82F6] border-blue-100 group-hover:bg-[#3B82F6] group-hover:text-white',
      topLine: 'bg-gradient-to-r from-blue-500 to-cyan-500',
      hoverTitle: 'group-hover:text-[#3B82F6]',
    },
    {
      title: '2. 100% Code & Asset Ownership',
      desc: 'Full GitHub repository handover, Flutter source code, raw video project files, domain DNS, and custom graphics access. You own 100% of your assets.',
      icon: Lock,
      iconColor: 'bg-indigo-50 text-indigo-600 border-indigo-100 group-hover:bg-indigo-600 group-hover:text-white',
      topLine: 'bg-gradient-to-r from-indigo-500 to-purple-500',
      hoverTitle: 'group-hover:text-indigo-600',
    },
    {
      title: '3. Modern Engineering & Media Stack',
      desc: 'Next.js 15 App Router, React 19, Flutter, Premiere Pro/After Effects video pipelines, Meta Ads targeting, and Google SEO optimization.',
      icon: Code2,
      iconColor: 'bg-emerald-50 text-emerald-600 border-emerald-100 group-hover:bg-emerald-600 group-hover:text-white',
      topLine: 'bg-gradient-to-r from-emerald-500 to-teal-500',
      hoverTitle: 'group-hover:text-emerald-600',
    },
    {
      title: '4. Direct Developer & Media Support',
      desc: 'Speak directly with lead web developers, Flutter app engineers, video editors, and social media managers via 1-on-1 WhatsApp or phone call.',
      icon: Headphones,
      iconColor: 'bg-amber-50 text-amber-600 border-amber-100 group-hover:bg-amber-600 group-hover:text-white',
      topLine: 'bg-gradient-to-r from-amber-500 to-orange-500',
      hoverTitle: 'group-hover:text-amber-600',
    },
  ];

  return (
    <div className="w-full bg-slate-50/50 min-h-screen text-slate-900 font-sans pb-20 overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* 1. HERO SECTION */}
      <section className="w-full bg-[#0B1528] text-white py-14 sm:py-20 relative overflow-hidden border-b border-blue-900/40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center sm:text-left">
          <AnimatedSection delay={0}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/30 text-[#3B82F6] text-xs font-extrabold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#3B82F6]" /> The SiteMint Origin Story
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight mb-4 font-sans">
              Why We Started <span className="text-[#3B82F6]">SiteMint</span>
            </h1>
            <p className="text-slate-300 text-sm sm:text-lg max-w-3xl leading-relaxed font-normal mb-8">
              Empowering Indian businesses with Next.js 15 web development, native Flutter mobile apps, high-impact video editing & Instagram reels, and full-scale social media management with practical pricing and 100% code ownership.
            </p>
            <div className="flex flex-wrap items-center gap-3 justify-center sm:justify-start">
              <a
                href="https://wa.me/918920683588?text=Hi%20SiteMint!%20I%20read%20your%20story%20and%20want%20to%20discuss%20a%20digital%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-bold flex items-center gap-2 shadow-lg transition transform hover:-translate-y-0.5"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Discuss Project on WhatsApp</span>
              </a>

              <Link
                href="/calculator"
                className="px-6 py-3 rounded-xl bg-blue-950/90 border border-blue-700/60 hover:bg-blue-900 text-white text-xs sm:text-sm font-bold flex items-center gap-2 transition"
              >
                <Calculator className="w-4 h-4 text-blue-400" />
                <span>Get Instant Price Estimate</span>
              </Link>

              <Link
                href="/services"
                className="px-6 py-3 rounded-xl bg-slate-900/80 border border-slate-700 hover:bg-slate-800 text-slate-200 text-xs sm:text-sm font-bold flex items-center gap-2 transition"
              >
                <span>Explore All Services</span>
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 2. MAIN STORY CONTENT CONTAINER */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 space-y-14">

        {/* SECTION A: OUR 4 FULL-SERVICE DIGITAL PILLARS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#3B82F6] uppercase tracking-wider mb-2">
                <Layers className="w-4 h-4" /> Full-Service Digital Suite
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 leading-tight">
                Our 4 Full-Service Digital Pillars
              </h2>
              <div className="w-16 h-1 bg-[#3B82F6] rounded-full mt-2" />
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              SiteMint combines high-performance Next.js 15 & Flutter engineering with creative digital media. Explore our 4 core pillars engineered to scale growing Indian businesses:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {pillarsList.map((plr, idx) => {
                const Icon = plr.icon;
                return (
                  <AnimatedSection key={idx} delay={idx * 120}>
                    <div className="group relative p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 space-y-3 overflow-hidden">
                      <div className={`h-1 absolute top-0 left-0 right-0 ${plr.topLine}`} />
                      <div className="flex items-center justify-between gap-2 pt-1">
                        <div className={`w-11 h-11 rounded-2xl border flex items-center justify-center font-bold shadow-xs transition-all duration-300 ${plr.iconColor}`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-black shadow-2xs ${plr.badgeColor}`}>
                          {plr.badge}
                        </span>
                      </div>
                      <div>
                        <h3 className={`text-sm sm:text-base font-black text-slate-900 transition-colors ${plr.hoverTitle}`}>
                          {plr.title}
                        </h3>
                        <p className="text-xs text-slate-600 leading-relaxed mt-1 font-medium">
                          {plr.desc}
                        </p>
                      </div>
                    </div>
                  </AnimatedSection>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-6 flex flex-col items-center justify-center p-2 gap-6">
            <AnimatedSection delay={200}>
              <img
                src="/we built.png"
                alt="SiteMint 4 Full-Service Digital Pillars Technology & Creative Graphic"
                className="w-full max-w-lg lg:max-w-xl xl:max-w-2xl h-auto object-contain pointer-events-none select-none transition-transform duration-300 hover:scale-105"
              />
              
              <div className="flex flex-wrap items-center justify-center gap-3 w-full mt-6">
                <Link 
                  href="/services" 
                  className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-extrabold flex items-center gap-2 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  <Layers className="w-4 h-4 text-blue-400" />
                  <span>View Full Services Breakdown</span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                </Link>
                <Link 
                  href="/calculator" 
                  className="px-5 py-2.5 rounded-xl bg-blue-50 border border-blue-200/90 text-[#3B82F6] hover:bg-blue-100 hover:border-blue-300 text-xs sm:text-sm font-extrabold flex items-center gap-2 shadow-2xs hover:shadow-sm transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  <Calculator className="w-4 h-4 text-[#3B82F6]" />
                  <span>Calculate Custom Package Price</span>
                </Link>
              </div>
            </AnimatedSection>
          </div>

        </div>

        {/* SECTION B: FOUNDER STATEMENT & STORY MISSION IMAGE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          <div className="lg:col-span-6">
            <AnimatedSection delay={0}>
              <div className="p-7 sm:p-9 rounded-3xl bg-gradient-to-br from-white via-blue-50/30 to-white border border-blue-200/80 shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 relative overflow-hidden flex flex-col justify-between group h-full">
                <div className="h-1.5 absolute top-0 left-0 right-0 bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-600" />
                
                <div className="relative z-10">
                  <div className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#3B82F6] uppercase tracking-wider mb-4 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/60">
                    <Target className="w-4 h-4 text-[#3B82F6]" /> Founding Purpose & Mission
                  </div>

                  <blockquote className="text-slate-900 text-base sm:text-lg lg:text-xl font-black leading-snug mb-6 font-sans">
                    &ldquo;SiteMint was created with a simple goal: to make complete digital, software, video media, and branding solutions accessible to growing businesses. From web & mobile applications to viral reels and social media management, we deliver real business growth under one creative roof.&rdquo;
                  </blockquote>
                </div>

                <div className="pt-4 border-t border-slate-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3 relative z-10">
                  <div className="text-xs font-bold text-slate-700">
                    <span className="text-[#3B82F6] font-extrabold text-sm block sm:inline">Yuvraj Singh</span>
                    <span className="text-slate-500 block sm:inline sm:ml-1">
                      — Founder & Lead Web Engineer at SiteMint Studio
                    </span>
                  </div>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 text-xs font-extrabold text-blue-600 hover:text-blue-800 transition group-hover:translate-x-1"
                  >
                    <span>Connect with Us</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          </div>

          <div className="lg:col-span-6">
            <AnimatedSection delay={150}>
              <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-md min-h-[280px] sm:min-h-[340px] group flex flex-col justify-end h-full">
                <Image
                  src="/about_story_mission.jpg"
                  alt="Next.js 15 & Flutter Engineering Architecture at SiteMint Studio"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent p-6 flex flex-col justify-end">
                  <span className="text-[10px] sm:text-xs font-extrabold font-mono text-blue-300 bg-blue-950/90 px-3 py-1 rounded border border-blue-700/80 w-fit mb-2 shadow-sm">
                    Next.js 15 & Flutter Engineering
                  </span>
                  <h3 className="text-base sm:text-xl font-black text-white leading-tight">
                    Modern Software Architecture & Digital Media Integration
                  </h3>
                  <p className="text-xs text-slate-300 mt-1 max-w-lg hidden sm:block">
                    Built with React 19, Next.js App Router, Flutter, and high-performance serverless infrastructure for maximum speed and Google SEO performance.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>

        </div>

        {/* SECTION C: THE AGENCY VS DIY BUILDER DILEMMA IN INDIA */}
        <div className="space-y-6">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#3B82F6] uppercase tracking-wider mb-2">
              <Zap className="w-4 h-4" /> Market Reality
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight">
              The Digital Dilemma Facing Indian Businesses
            </h2>
            <div className="w-14 h-1 bg-[#3B82F6] rounded-full mt-2" />
          </div>

          <p className="text-xs sm:text-sm text-slate-600 max-w-3xl leading-relaxed">
            Most Indian small business owners, coaching institutes, and local entrepreneurs face a frustrating dilemma when expanding across Web, Mobile Apps, Video Reels, and Social Media:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <AnimatedSection delay={0}>
              <div className="relative p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-rose-50/80 via-white to-rose-50/40 border border-rose-200/90 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 space-y-3 overflow-hidden">
                <div className="h-1 absolute top-0 left-0 right-0 bg-gradient-to-r from-rose-500 to-red-600" />
                <div className="text-xs font-extrabold text-rose-700 uppercase tracking-wider flex items-center gap-1.5 pt-1">
                  ❌ Trap 1: Fragmented Agency Overcharging
                </div>
                <h3 className="text-base font-black text-slate-900">Traditional Agency Overhead</h3>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  Traditional agencies charge ₹40,000–₹80,000+ for basic websites, ₹50,000+ for simple apps, and ₹20,000+/month for basic social posts & video edits with middleman delays and hidden setup fees.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={150}>
              <div className="relative p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-amber-50/80 via-white to-amber-50/40 border border-amber-200/90 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 space-y-3 overflow-hidden">
                <div className="h-1 absolute top-0 left-0 right-0 bg-gradient-to-r from-amber-500 to-orange-600" />
                <div className="text-xs font-extrabold text-amber-800 uppercase tracking-wider flex items-center gap-1.5 pt-1">
                  ❌ Trap 2: DIY Builder & Freelancer Chaos
                </div>
                <h3 className="text-base font-black text-slate-900">Endless Subscriptions & Misalignment</h3>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  Hiring separate freelancers or locking into generic DIY site builders (₹2,000/month) creates inconsistent branding, unoptimized video content, zero code ownership, and zero growth accountability.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* SECTION D: HOW SITEMINT CHANGED THE RULES */}
        <div className="space-y-6">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#3B82F6] uppercase tracking-wider mb-2">
              <ShieldCheck className="w-4 h-4" /> Our Solution
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight">
              How SiteMint Changed the Rules
            </h2>
            <div className="w-14 h-1 bg-[#3B82F6] rounded-full mt-2" />
          </div>

          <p className="text-xs sm:text-sm text-slate-600 max-w-3xl leading-relaxed">
            By uniting Next.js 15 software engineering with native Flutter app development, viral Instagram video editing, and full-scale social media management, SiteMint delivers complete 360° growth under one roof — starting at ₹3,999 for websites, ₹12,999 for mobile apps, and ₹499/reel for video editing.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
            {solutionList.map((sol, idx) => {
              const Icon = sol.icon;
              return (
                <AnimatedSection key={idx} delay={idx * 120}>
                  <div className="group relative p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden space-y-3">
                    <div className={`h-1 absolute top-0 left-0 right-0 ${sol.topLine}`} />
                    <div className={`w-11 h-11 rounded-2xl border flex items-center justify-center font-bold shadow-xs transition-all duration-300 ${sol.iconColor}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className={`text-base font-black text-slate-900 transition-colors ${sol.hoverTitle}`}>
                      {sol.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed font-medium">
                      {sol.desc}
                    </p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>

        {/* SECTION E: CALL TO ACTION BOX */}
        <AnimatedSection delay={100}>
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#0B1528] via-slate-900 to-[#0B1528] text-white shadow-xl border border-blue-900/50 text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-extrabold uppercase tracking-wider">
              <Heart className="w-4 h-4 text-[#3B82F6]" /> Start Your Growth Journey
            </div>

            <h2 className="text-2xl sm:text-4xl font-black text-white leading-tight max-w-2xl mx-auto">
              Ready to Scale Your Digital Presence with SiteMint?
            </h2>

            <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
              Get a clear, honest project scope and itemized price breakdown in 15 minutes over WhatsApp or phone call.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <a
                href="https://wa.me/918920683588?text=Hi%20SiteMint!%20I%20read%20your%20story%20and%20want%20to%20discuss%20a%20new%20digital%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-extrabold flex items-center justify-center gap-2 shadow-lg transition transform hover:-translate-y-0.5"
              >
                <MessageCircle className="w-4.5 h-4.5" />
                <span>Start Project on WhatsApp</span>
              </a>

              <Link
                href="/calculator"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-blue-950 border border-blue-700/60 hover:bg-blue-900 text-white text-xs sm:text-sm font-extrabold flex items-center justify-center gap-2 transition"
              >
                <Calculator className="w-4.5 h-4.5 text-blue-400" />
                <span>Calculate Instant Price</span>
              </Link>

              <Link
                href="/projects"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-slate-900 border border-slate-700 hover:bg-slate-800 text-slate-200 text-xs sm:text-sm font-extrabold flex items-center justify-center gap-2 transition"
              >
                <span>Explore Portfolio</span>
              </Link>
            </div>

            <div className="pt-4 text-xs text-slate-400 border-t border-slate-800 flex items-center justify-center gap-6 flex-wrap">
              <span>✓ Zero Setup Fees</span>
              <span>✓ 100% Code Ownership</span>
              <span>✓ Pan-India Delivery</span>
            </div>
          </div>
        </AnimatedSection>

      </div>
    </div>
  );
}
