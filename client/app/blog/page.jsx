import Link from 'next/link';
import { 
  BookOpen, 
  Sparkles, 
  Clock, 
  Calendar, 
  ArrowRight, 
  MessageCircle, 
  Tag, 
  Store, 
  GraduationCap, 
  ShoppingBag,
  TrendingUp,
  Globe,
  Smartphone,
  Video,
  Share2,
  CheckCircle2,
  Calculator,
  Zap,
  Flame,
  Search,
  Layers,
  FileText,
  Compass,
  Lightbulb,
  Bot,
  Cpu,
  ShieldCheck
} from 'lucide-react';
import FaqSection from '../../components/FaqSection';

export const metadata = {
  title: 'Web & App Growth Insights for Indian Businesses | SiteMint Blog',
  description: 'Practical guides, transparent cost breakdowns, technology comparisons, and digital growth strategies for small businesses, startups, schools, and bakeries in India.',
  keywords: [
    'low budget website development guide india',
    'bakery whatsapp online ordering system',
    'coaching institute student admission website',
    'custom ecommerce store vs shopify cost india',
    'small business website guide india',
    'SiteMint blog'
  ],
  alternates: {
    canonical: 'https://sitemint.in/blog',
  },
  openGraph: {
    title: 'Web & App Growth Insights for Indian Businesses | SiteMint',
    description: 'Practical guides, transparent cost breakdowns, and digital growth strategies for Indian small businesses and startups.',
    url: 'https://sitemint.in/blog',
    siteName: 'SiteMint',
    images: [
      {
        url: 'https://sitemint.in/Sitemint_logo.png',
        width: 1024,
        height: 1024,
        type: 'image/png',
        alt: 'SiteMint Web and App Growth Blog',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web & App Growth Insights for Indian Businesses | SiteMint',
    description: 'Practical web development and business growth advice for small businesses in India.',
    images: ['https://sitemint.in/Sitemint_logo.png'],
  },
};

export const blogPosts = [
  {
    index: '01',
    slug: 'low-budget-website-development-guide-india',
    title: 'How to Get a Professional Website Made in Low Budget in India (2026 Complete Guide)',
    excerpt: 'A practical guide for business owners on what a standard business website actually costs, essential features to focus on, and common pitfalls to avoid when hiring web developers.',
    category: 'Website Development',
    categoryColor: 'bg-violet-50 text-violet-700 border-violet-200',
    cardGradient: 'from-violet-50/50 to-white',
    icon: Globe,
    iconBg: 'bg-violet-600 text-white',
    readTime: '5 min read',
    date: 'January 12, 2026',
    dateIso: '2026-01-12',
    tag: 'Web Strategy',
    featured: true,
    author: 'Yuvraj Singh',
    highlights: ['Cost Comparison Table', 'Essential Features Checklist', 'Agency Red Flags'],
  },
  {
    index: '02',
    slug: 'why-bakeries-need-whatsapp-online-ordering-system',
    title: 'Why Every Bakery & Restaurant Needs Direct WhatsApp Online Ordering (0% Commission Guide)',
    excerpt: 'How local bakeries, cafes, and food businesses can take direct customer orders via WhatsApp, offer custom cake builders, and retain full profit margins without third-party commission deductions.',
    category: 'Food & Bakery Tech',
    categoryColor: 'bg-amber-50 text-amber-700 border-amber-200',
    cardGradient: 'from-amber-50/40 to-white',
    icon: Store,
    iconBg: 'bg-amber-600 text-white',
    readTime: '5 min read',
    date: 'February 04, 2026',
    dateIso: '2026-02-04',
    tag: 'WhatsApp Ordering',
    featured: false,
    author: 'Yuvraj Singh',
    highlights: ['0% Commission Math', 'Custom Cake Engine', 'Direct Customer CRM'],
  },
  {
    index: '03',
    slug: 'how-coaching-institutes-double-student-admissions-online',
    title: '5 Ways Coaching Institutes Can Double Student Admissions With an Online Portal',
    excerpt: 'How schools and coaching institutes use online batch timetables, admission inquiry forms, and published student scorecards to build trust with parents and increase enrollment.',
    category: 'Education Technology',
    categoryColor: 'bg-sky-50 text-sky-700 border-sky-200',
    cardGradient: 'from-sky-50/40 to-white',
    icon: GraduationCap,
    iconBg: 'bg-sky-600 text-white',
    readTime: '4 min read',
    date: 'February 22, 2026',
    dateIso: '2026-02-22',
    tag: 'Education Portal',
    featured: false,
    author: 'Yuvraj Singh',
    highlights: ['Online Lead Form', 'Topper Scorecard Board', 'Batch Timetable Setup'],
  },
  {
    index: '04',
    slug: 'custom-ecommerce-store-vs-shopify-for-indian-startups',
    title: 'Custom E-Commerce Store vs Shopify: Which is Cheaper for Indian Startups?',
    excerpt: 'A cost analysis comparing recurring monthly e-commerce platform subscription fees against one-time custom web application development with Razorpay UPI payment integration.',
    category: 'E-Commerce Store',
    categoryColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    cardGradient: 'from-emerald-50/40 to-white',
    icon: ShoppingBag,
    iconBg: 'bg-emerald-600 text-white',
    readTime: '6 min read',
    date: 'March 08, 2026',
    dateIso: '2026-03-08',
    tag: 'E-Commerce ROI',
    featured: false,
    author: 'Yuvraj Singh',
    highlights: ['2-Year Expense Comparison', '0% UPI Settlement', 'Source Code Ownership'],
  },
];

// Upcoming Editorial Roadmap Series
const upcomingTopics = [
  {
    title: 'Native Android & iOS vs Cross-Platform Flutter: Cost Breakdown for Indian Startups',
    category: 'Mobile Engineering',
    categoryColor: 'bg-pink-50 text-pink-700 border-pink-200',
    status: 'Editorial Draft',
    icon: Smartphone,
    estRead: '6 min read',
  },
  {
    title: 'Local SEO & Google Business Profile: How Small Businesses Win 50+ Phone Calls Monthly',
    category: 'Search Optimization',
    categoryColor: 'bg-blue-50 text-blue-700 border-blue-200',
    status: 'In Peer Review',
    icon: Globe,
    estRead: '5 min read',
  },
  {
    title: 'Why Next.js Turbopack Delivers Sub-1.2s Page Speed for Commercial Websites',
    category: 'Performance Engineering',
    categoryColor: 'bg-purple-50 text-purple-700 border-purple-200',
    status: 'Researching',
    icon: Zap,
    estRead: '4 min read',
  },
];

export default function BlogHubPage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'SiteMint Web & App Growth Blog',
    url: 'https://sitemint.in/blog',
    description: 'Practical guides, cost breakdowns, and digital growth strategies for Indian small businesses and startups.',
    publisher: {
      '@type': 'Organization',
      name: 'SiteMint',
      url: 'https://sitemint.in',
      logo: {
        '@type': 'ImageObject',
        url: 'https://sitemint.in/Sitemint_logo.png',
      },
    },
    blogPost: blogPosts.map((post) => ({
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.excerpt,
      url: `https://sitemint.in/blog/${post.slug}`,
      datePublished: post.dateIso || '2026-01-12',
      author: {
        '@type': 'Person',
        name: post.author,
      },
    })),
  };

  return (
    <div className="w-full pt-8 pb-16 sm:pt-12 sm:pb-24 bg-slate-50/50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Creative Hub Header Banner */}
        <header className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-50 border border-violet-200 text-violet-800 text-xs font-bold uppercase tracking-wider mb-4 shadow-2xs">
            <BookOpen className="w-3.5 h-3.5 text-violet-600" />
            <span>SiteMint Knowledge Hub & Editorial Publication</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-4 font-sans leading-tight">
            Web & App Growth Insights for <br className="hidden sm:inline" />
            <span className="gradient-text-hero">Indian Businesses</span>
          </h1>

          <p className="text-slate-600 text-xs sm:text-base max-w-2xl mx-auto leading-relaxed">
            SiteMint publishes practical guides and transparent cost breakdowns covering website development, mobile apps, e-commerce, education portals, restaurant ordering systems, and digital growth.
          </p>

          {/* Quick Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            <span className="px-3 py-1 rounded-xl text-xs font-bold bg-violet-600 text-white shadow-xs">
              All Topics ({blogPosts.length + upcomingTopics.length})
            </span>
            <span className="px-3 py-1 rounded-xl text-xs font-medium bg-white text-slate-700 border border-slate-200 shadow-2xs">
              💻 Website Engineering
            </span>
            <span className="px-3 py-1 rounded-xl text-xs font-medium bg-white text-slate-700 border border-slate-200 shadow-2xs">
              🛍️ E-Commerce & Retail
            </span>
            <span className="px-3 py-1 rounded-xl text-xs font-medium bg-white text-slate-700 border border-slate-200 shadow-2xs">
              🍰 Food & Bakery Tech
            </span>
            <span className="px-3 py-1 rounded-xl text-xs font-medium bg-white text-slate-700 border border-slate-200 shadow-2xs">
              🎓 EdTech & Coaching
            </span>
          </div>
        </header>

        {/* Section Heading: Published Strategy Guides (All 4 Featured Distinctively) */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6 pb-3 border-b border-slate-200">
          <div className="flex items-center gap-2">
            <Flame className="w-5 h-5 text-violet-600" />
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-sans">
              Published Strategy Guides ({blogPosts.length})
            </h2>
          </div>
          <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>100% Free Transparent Knowledge • Verified by Yuvraj Singh</span>
          </div>
        </div>

        {/* 4 Flagship Articles Showcase (Distinct 2x2 Creative Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-16">
          {blogPosts.map((post) => {
            const Icon = post.icon;
            return (
              <div
                key={post.slug}
                className={`p-6 sm:p-8 rounded-3xl bg-gradient-to-br ${post.cardGradient} border-2 border-slate-200/90 hover:border-violet-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden`}
              >
                {/* Large Background Index Number */}
                <div className="absolute top-2 right-4 text-6xl sm:text-7xl font-black text-slate-900/5 select-none pointer-events-none font-mono">
                  {post.index}
                </div>

                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between gap-2 mb-4 relative z-10">
                    <div className="flex items-center gap-2.5">
                      <div className={`w-9 h-9 rounded-xl ${post.iconBg} flex items-center justify-center shadow-xs group-hover:scale-110 transition-transform shrink-0`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className={`px-2.5 py-0.5 rounded-lg border text-xs font-bold ${post.categoryColor}`}>
                        {post.category}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  {/* Article Title */}
                  <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-3 leading-snug group-hover:text-violet-700 transition font-sans relative z-10">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h3>

                  {/* Short Excerpt */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5 relative z-10">
                    {post.excerpt}
                  </p>

                  {/* Key Highlights Inside Card */}
                  {post.highlights && (
                    <div className="flex flex-wrap gap-1.5 mb-6 relative z-10">
                      {post.highlights.map((hl, hIdx) => (
                        <span key={hIdx} className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-700 bg-white/95 px-2.5 py-1 rounded-lg border border-slate-200/80 shadow-2xs">
                          <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" />
                          <span>{hl}</span>
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Card Action Footer */}
                <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between text-xs relative z-10">
                  <span className="text-slate-500 font-medium">By {post.author} • {post.date}</span>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="btn-primary text-xs !py-2 !px-4 flex items-center gap-1.5 group-hover:shadow-md transition-all font-bold"
                  >
                    <span>Read Guide</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* AI & Search Engine Optimization Banner (LLM / GEO Ready) */}
        <div className="p-6 sm:p-8 rounded-3xl bg-violet-950 text-white mb-16 shadow-xl relative overflow-hidden border border-violet-800/80">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-violet-600/30 border border-violet-500/40 text-violet-300 flex items-center justify-center shrink-0 shadow-inner">
                <Bot className="w-6 h-6" />
              </div>
              <div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-[10px] font-bold uppercase tracking-wider mb-1.5">
                  <Sparkles className="w-3 h-3" /> AI & LLM Search Optimized
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white">
                  Cited & Referenced Across AI Search Engines
                </h3>
                <p className="text-xs text-slate-300 max-w-xl mt-1 leading-relaxed">
                  SiteMint guides are structured in clean semantic HTML with official machine-readable <code className="text-violet-300 bg-violet-900/60 px-1 py-0.5 rounded text-[11px]">llms.txt</code>, enabling ChatGPT, Perplexity, Claude, and Google AI to cite our business solutions accurately.
                </p>
              </div>
            </div>

            <a
              href="https://wa.me/918920683588?text=Hi%20SiteMint!%20I%20found%20you%20via%20search/AI%20and%20want%20to%20discuss%20my%20website%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp text-xs !py-2.5 !px-5 shrink-0 whitespace-nowrap shadow-md"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Ask a Project Question</span>
            </a>
          </div>
        </div>

        {/* Creative Editorial Roadmap Section (Upcoming Deep-Dives) */}
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 text-white mb-16 shadow-lg relative overflow-hidden">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-700">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-500/20 text-violet-300 border border-violet-500/30 text-xs font-bold uppercase tracking-wider mb-2">
                <Compass className="w-3.5 h-3.5" /> Editorial Research Pipeline
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white">
                Upcoming Knowledge Series & Research Papers
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                Our engineering team is actively compiling practical case studies on these topics.
              </p>
            </div>
            <a
              href="https://wa.me/918920683588?text=Hi%20SiteMint!%20I%20have%20a%20topic%20suggestion%20for%20your%20growth%20blog."
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-violet-300 hover:text-white font-semibold flex items-center gap-1 shrink-0"
            >
              <span>Suggest a Topic</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {upcomingTopics.map((topic, uIdx) => {
              const Icon = topic.icon;
              return (
                <div key={uIdx} className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/80 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2.5">
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-700 text-slate-300">
                        {topic.category}
                      </span>
                      <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
                        {topic.status}
                      </span>
                    </div>
                    <h4 className="text-xs sm:text-sm font-bold text-white leading-snug">
                      {topic.title}
                    </h4>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-700/60 flex items-center justify-between text-[10px] text-slate-400">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {topic.estRead}
                    </span>
                    <span className="text-violet-300 font-medium">Coming Soon</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Business Tools & Related Resources */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 mb-14 shadow-sm">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900">
                Explore SiteMint Growth Tools & Interactive Demos
              </h3>
              <p className="text-xs text-slate-500">
                Plan your digital project with our transparent pricing estimator and working prototypes.
              </p>
            </div>
            <Link href="/pricing" className="btn-secondary text-xs !py-2 !px-4 shrink-0 font-bold">
              View All Pricing Packages →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
            <Link href="/calculator" className="p-4 bg-slate-50 rounded-2xl border border-slate-200 hover:border-violet-400 font-bold text-slate-800 hover:text-violet-700 transition flex items-center gap-2.5 group">
              <span className="text-xl group-hover:scale-110 transition-transform">🧮</span>
              <div>
                <div className="text-xs font-bold">Instant Cost Calculator</div>
                <div className="text-[10px] text-slate-500 font-normal">Estimate your project budget in 30 seconds</div>
              </div>
            </Link>

            <Link href="/demos/bakery" className="p-4 bg-slate-50 rounded-2xl border border-slate-200 hover:border-violet-400 font-bold text-slate-800 hover:text-violet-700 transition flex items-center gap-2.5 group">
              <span className="text-xl group-hover:scale-110 transition-transform">🍰</span>
              <div>
                <div className="text-xs font-bold">Live Bakery Demo</div>
                <div className="text-[10px] text-slate-500 font-normal">Explore custom cake ordering flow</div>
              </div>
            </Link>

            <Link href="/demos/education" className="p-4 bg-slate-50 rounded-2xl border border-slate-200 hover:border-violet-400 font-bold text-slate-800 hover:text-violet-700 transition flex items-center gap-2.5 group">
              <span className="text-xl group-hover:scale-110 transition-transform">🎓</span>
              <div>
                <div className="text-xs font-bold">Live Coaching Portal Demo</div>
                <div className="text-[10px] text-slate-500 font-normal">Explore student admission portal</div>
              </div>
            </Link>
          </div>
        </div>

        {/* Direct WhatsApp Consultation CTA */}
        <div className="p-6 sm:p-10 rounded-3xl bg-slate-900 text-white text-center shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-violet-600/20 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-bold uppercase tracking-wider mb-4">
              <Zap className="w-3.5 h-3.5 text-emerald-400" />
              <span>Direct Developer Consultation</span>
            </div>

            <h3 className="text-xl sm:text-3xl font-extrabold text-white mb-2">
              Have Questions About Launching Your Business Online?
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm max-w-xl mx-auto mb-6 leading-relaxed">
              Get personalized guidance on website architecture, domain setup, payment gateways, and WhatsApp ordering directly from our development team.
            </p>

            <a
              href="https://wa.me/918920683588?text=Hi%20SiteMint!%20I%20read%20your%20blog%20and%20want%20some%20advice%20for%20my%20business%20website."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp text-xs sm:text-sm !py-3 !px-7 shadow-lg shadow-green-600/30"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat with Developer on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
      <FaqSection />
    </div>
  );
}
