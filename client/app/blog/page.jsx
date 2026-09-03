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
  TrendingUp
} from 'lucide-react';
import FaqSection from '../../components/FaqSection';

export const metadata = {
  title: 'Web & App Growth Blog for Indian Businesses | SiteMint',
  description: 'Practical guides, SEO strategies, and pricing advice on website development, online ordering, and app building for small businesses in India.',
  alternates: {
    canonical: 'https://sitemint.in/blog',
  },
  openGraph: {
    title: 'Web & App Growth Blog | SiteMint',
    description: 'Practical web development and online growth advice for small businesses in India.',
    url: 'https://sitemint.in/blog',
  },
};

export const blogPosts = [
  {
    slug: 'low-budget-website-development-guide-india',
    title: 'How to Get a Professional Website Made in Low Budget in India (2025 Guide)',
    excerpt: 'Avoid paying ₹50,000+ to big agencies. Learn what a standard 5-page business website actually costs, how to choose domain and hosting, and what features bring real client calls.',
    category: 'Website Strategy',
    readTime: '4 min read',
    date: 'Jan 2025',
    tag: 'Low Budget Web',
    featured: true,
  },
  {
    slug: 'why-bakeries-need-whatsapp-online-ordering-system',
    title: 'Why Every Bakery & Restaurant Needs Direct WhatsApp Online Ordering (0% Commission)',
    excerpt: 'Stop giving away 25% to 35% commission on food apps. Discover how direct WhatsApp ordering with custom cake flavor and weight selectors increases repeat orders.',
    category: 'Bakery & Food',
    readTime: '5 min read',
    date: 'Jan 2025',
    tag: 'WhatsApp Ordering',
    featured: false,
  },
  {
    slug: 'how-coaching-institutes-double-student-admissions-online',
    title: '5 Ways Coaching Institutes Can Double Student Admissions With an Online Portal',
    excerpt: 'How modern coaching centers in India use digital course syllabus, online inquiry forms, and published weekly test results to win trust from parents and students.',
    category: 'Education Portal',
    readTime: '4 min read',
    date: 'Jan 2025',
    tag: 'Coaching Growth',
    featured: false,
  },
  {
    slug: 'custom-ecommerce-store-vs-shopify-for-indian-startups',
    title: 'Custom E-Commerce Store vs Shopify: Which is Cheaper for Indian Startups?',
    excerpt: 'A transparent cost breakdown comparing monthly Shopify subscription fees, payment gateway commissions, and one-time custom Next.js e-commerce development.',
    category: 'E-Commerce',
    readTime: '6 min read',
    date: 'Jan 2025',
    tag: 'E-Commerce Comparison',
    featured: false,
  },
];

export default function BlogHubPage() {
  return (
    <div className="w-full pt-6 pb-12 sm:pt-10 sm:pb-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-50 border border-violet-200 text-violet-800 text-xs font-bold uppercase tracking-wider mb-4 shadow-2xs">
            <BookOpen className="w-3.5 h-3.5 text-violet-600" /> Articles & Growth Guides
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-3">
            Web & App Growth Insights <span className="gradient-text-hero">For Business Owners</span>
          </h1>
          <p className="text-slate-600 text-xs sm:text-base max-w-2xl mx-auto">
            Honest advice, cost breakdowns, and conversion tactics to help your local business scale online.
          </p>
        </div>

        {/* Featured Blog Post */}
        {blogPosts.filter(p => p.featured).map((post) => (
          <div key={post.slug} className="glass-card p-6 sm:p-10 border-2 border-violet-200 bg-gradient-to-br from-violet-50/50 via-white to-indigo-50/30 mb-12 relative overflow-hidden shadow-sm">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-600 text-white text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5" /> FEATURED ARTICLE
            </div>
            <h2 className="text-xl sm:text-3xl font-extrabold text-slate-900 mb-3 leading-tight">
              <Link href={`/blog/${post.slug}`} className="hover:text-violet-700 transition">
                {post.title}
              </Link>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 max-w-3xl">
              {post.excerpt}
            </p>
            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-violet-100 text-xs text-slate-500 font-medium">
              <div className="flex items-center gap-4">
                <span>📅 {post.date}</span>
                <span>⏱️ {post.readTime}</span>
                <span className="text-violet-700 font-bold bg-violet-100 px-2 py-0.5 rounded-md">{post.category}</span>
              </div>
              <Link
                href={`/blog/${post.slug}`}
                className="btn-primary text-xs !py-2 !px-4 flex items-center gap-1.5"
              >
                <span>Read Full Guide</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        ))}

        {/* Blog Post Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {blogPosts.filter(p => !p.featured).map((post) => (
            <div
              key={post.slug}
              className="glass-card p-6 flex flex-col justify-between border border-slate-200 hover:border-violet-300 transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 text-[11px] text-slate-400 font-semibold mb-3">
                  <span className="text-violet-700 bg-violet-50 px-2 py-0.5 rounded border border-violet-100 font-bold">
                    {post.category}
                  </span>
                  <span>{post.readTime}</span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2 leading-snug group-hover:text-violet-700 transition">
                  <Link href={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed mb-5">
                  {post.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-400 font-medium">{post.date}</span>
                <Link
                  href={`/blog/${post.slug}`}
                  className="font-bold text-violet-700 hover:text-violet-900 flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter / WhatsApp Consultation CTA */}
        <div className="p-6 sm:p-10 rounded-3xl bg-slate-900 text-white text-center shadow-xl">
          <h3 className="text-xl sm:text-3xl font-extrabold text-white mb-2">
            Have Questions About Launching Your Business Online?
          </h3>
          <p className="text-slate-400 text-xs sm:text-sm max-w-xl mx-auto mb-6">
            Get personalized advice on website features, domain selection, and WhatsApp lead setup directly from our development team.
          </p>
          <a
            href="https://wa.me/918920683588?text=Hi%20SiteMint!%20I%20read%20your%20blog%20and%20want%20some%20advice%20for%20my%20website."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp text-xs sm:text-sm !py-2.5 sm:!py-3 !px-6 shadow-md"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat with Developer on WhatsApp</span>
          </a>
        </div>
      </div>
      <FaqSection />
    </div>
  );
}
