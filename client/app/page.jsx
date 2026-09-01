import Hero from '../components/Hero';
import PricingSection from '../components/PricingSection';
import WhyChooseUs from '../components/WhyChooseUs';
import TechnologiesSection from '../components/TechnologiesSection';
import FaqSection from '../components/FaqSection';
import Link from 'next/link';
import { 
  MessageCircle, 
  Phone, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  Calculator, 
  Eye, 
  Globe,
  Smartphone,
  Video,
  Share2,
  Layers,
  TrendingUp,
  Zap
} from 'lucide-react';

export const metadata = {
  title: 'SiteMint — Professional Web, App, Video Editing & Social Media Studio in India',
  description: 'We build fast, scalable, modern websites, e-commerce stores, education portals, mobile apps, video editing, and social media management for growing businesses. Transparent pricing with 7-day fast delivery.',
  alternates: {
    canonical: 'https://sitemint.in',
  },
  openGraph: {
    title: 'Build Your Digital Presence with SiteMint | Web, App & Media Studio',
    description: 'Web development, mobile apps, video editing, and social media marketing for Indian businesses.',
    url: 'https://sitemint.in',
  },
};

export default function HomePage() {
  const coreServices = [
    {
      id: 'web-software',
      category: 'WEB & SOFTWARE',
      title: 'Web & Software Development',
      badge: 'TOP CHOICE',
      badgeColor: 'bg-violet-50 text-violet-700 border-violet-200',
      icon: Globe,
      iconColor: 'text-violet-700 bg-violet-100',
      desc: 'Custom high-speed websites, stores & cloud software tailored for your business.',
      bullets: [
        'Business Websites & Portfolios',
        'E-Commerce & UPI Gateways',
        'Education & Coaching Portals',
        'Restaurant QR & WhatsApp Orders',
        'Custom CRM & Billing Dashboards',
      ],
      link: '/services/website-development',
    },
    {
      id: 'mobile-apps',
      category: 'MOBILE ENGINEERING',
      title: 'Mobile App Development',
      badge: 'PLAY STORE',
      badgeColor: 'bg-pink-50 text-pink-700 border-pink-200',
      icon: Smartphone,
      iconColor: 'text-pink-700 bg-pink-100',
      desc: 'High-performance Android & iOS apps engineered for fast retention & orders.',
      bullets: [
        'Android (.APK) & Play Store Ready',
        'iOS & Cross-Platform Hybrid Apps',
        'E-Commerce & Food Ordering Apps',
        'Push Notifications & Cloud Backend',
        'Instant Phone Number OTP Login',
      ],
      link: '/services/mobile-app-development',
    },
    {
      id: 'video-editing',
      category: 'CREATIVE MEDIA',
      title: 'Video Editing & Reels',
      badge: 'VIRAL RETENTION',
      badgeColor: 'bg-rose-50 text-rose-700 border-rose-200',
      icon: Video,
      iconColor: 'text-rose-700 bg-rose-100',
      desc: 'Viral Instagram Reels, YouTube videos & ads designed to convert viewers to buyers.',
      bullets: [
        'Instagram Reels & YouTube Shorts',
        'Commercial Business Video Ads',
        'YouTube Long-Form & Podcasts',
        'Dynamic Animated Subtitles',
        '4K Color Grading & Sound FX',
      ],
      link: '/services/video-editing',
    },
    {
      id: 'social-media',
      category: 'BRAND MARKETING',
      title: 'Social Media Management',
      badge: '7+ PLATFORMS',
      badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      icon: Share2,
      iconColor: 'text-emerald-700 bg-emerald-100',
      desc: 'Daily post designs, engaging captions, DM inquiry management & targeted Meta ads.',
      bullets: [
        '7-8 Platforms Managed Daily',
        'Custom Posts & Carousels',
        'SEO Captions & City Hashtags',
        'DM & Comment Inquiry Answering',
        'High-ROI Meta & Google Ads Setup',
      ],
      link: '/services/social-media-management',
    },
  ];

  return (
    <div className="w-full max-w-full overflow-hidden bg-white">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. What We Do */}
      <section id="services" className="py-12 sm:py-16 md:py-20 bg-slate-100/80 border-t border-b border-slate-200/90 w-full overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-violet-800 text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-3 sm:mb-4 shadow-2xs">
              <Layers className="w-3.5 h-3.5 text-violet-600" /> Core Capabilities
            </div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-2 sm:mb-4">
              What We <span className="gradient-text-purple">Do</span>
            </h2>
            <p className="text-slate-600 text-xs sm:text-base">
              End-to-end digital services engineered to build brand authority, drive leads, and grow your revenue.
            </p>
          </div>

          {/* 4 Cards Responsive Grid with min-w-0 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6">
            {coreServices.map((srv) => {
              const Icon = srv.icon;
              return (
                <div
                  key={srv.id}
                  className="bg-white p-5 sm:p-6 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:shadow-violet-500/10 hover:border-violet-300 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group min-w-0"
                >
                  <div>
                    {/* Top Icon & Badge */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <div className={`p-2.5 sm:p-3 rounded-2xl ${srv.iconColor} group-hover:scale-110 group-hover:rotate-3 transition-transform shadow-2xs shrink-0`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full border shrink-0 ${srv.badgeColor}`}>
                        {srv.badge}
                      </span>
                    </div>

                    {/* Category & Title */}
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                      {srv.category}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2 leading-snug group-hover:text-violet-900 transition-colors">
                      {srv.title}
                    </h3>

                    {/* Short Description */}
                    <p className="text-xs text-slate-600 leading-relaxed mb-4">
                      {srv.desc}
                    </p>

                    {/* 5 Points List */}
                    <div className="space-y-2 mb-6 bg-slate-50/90 p-3.5 rounded-2xl border border-slate-100">
                      {srv.bullets.map((bullet, i) => (
                        <div key={i} className="flex items-start gap-1.5 text-[11px] text-slate-700 font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                          <span className="leading-tight">{bullet}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Footer Link */}
                  <div className="pt-4 border-t border-slate-100">
                    <Link
                      href={srv.link}
                      className="w-full inline-flex items-center justify-between py-2.5 px-3.5 rounded-xl bg-slate-50 hover:bg-violet-50 text-slate-800 hover:text-violet-800 text-xs font-bold transition-all border border-slate-200/80 hover:border-violet-300"
                    >
                      <span>Explore Details</span>
                      <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-1.5 group-hover:text-violet-700 transition-transform" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. 100% Transparent Pricing */}
      <PricingSection />

      {/* 4. Why Choose SiteMint */}
      <WhyChooseUs />

      {/* 5. Technologies We Use */}
      <TechnologiesSection />

      {/* 6. Dual Teaser Banner */}
      <section className="py-12 sm:py-16 md:py-20 bg-white w-full overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* Card A: Live Demos */}
            <div className="glass-card p-6 sm:p-8 bg-gradient-to-br from-violet-50/80 via-white to-indigo-50/50 border border-violet-200 flex flex-col justify-between relative overflow-hidden shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 min-w-0">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-100 text-violet-800 text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-4">
                  <Eye className="w-3.5 h-3.5 text-violet-600" /> Interactive Samples
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-2">
                  Test Working Demos on Your Phone
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  See how our Bakery digital ordering system, Coaching admission portal, and E-commerce checkout work in real life before ordering.
                </p>
                <div className="flex flex-wrap gap-2 text-xs text-slate-700 font-medium mb-6">
                  <span className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 shadow-2xs hover:border-violet-300 transition">🍰 Bakery Ordering</span>
                  <span className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 shadow-2xs hover:border-violet-300 transition">🎓 Coaching Portal</span>
                  <span className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 shadow-2xs hover:border-violet-300 transition">🛍️ E-Commerce Shop</span>
                </div>
              </div>

              <Link
                href="/projects"
                className="btn-primary btn-shine text-xs sm:text-sm !py-2.5 sm:!py-3 !px-5 flex items-center justify-center gap-2 shadow-sm w-full sm:w-auto"
              >
                <Eye className="w-4 h-4" />
                <span>Explore Featured Projects</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Card B: Cost Calculator */}
            <div className="glass-card p-6 sm:p-8 bg-gradient-to-br from-teal-50/80 via-white to-emerald-50/50 border border-teal-200 flex flex-col justify-between relative overflow-hidden shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 min-w-0">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100 text-teal-800 text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-4">
                  <Calculator className="w-3.5 h-3.5 text-teal-600" /> Transparent Breakdown
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-2">
                  Instant Project Cost Estimator
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  Select your required business features, number of pages, and add-ons to see an instant price breakdown with zero hidden charges.
                </p>
                <div className="flex flex-wrap gap-2 text-xs text-slate-700 font-medium mb-6">
                  <span className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 shadow-2xs hover:border-teal-300 transition">⚡ Real-time Total</span>
                  <span className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 shadow-2xs hover:border-teal-300 transition">💬 1-Click WhatsApp Quote</span>
                  <span className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 shadow-2xs hover:border-teal-300 transition">🔒 100% Free</span>
                </div>
              </div>

              <Link
                href="/calculator"
                className="btn-secondary text-xs sm:text-sm !py-2.5 sm:!py-3 !px-5 flex items-center justify-center gap-2 shadow-2xs w-full sm:w-auto hover:border-teal-400 font-bold"
              >
                <Calculator className="w-4 h-4 text-teal-700" />
                <span>Calculate Your Exact Cost</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 7. High-Converting Launch CTA Banner */}
      <section className="py-12 sm:py-16 md:py-20 relative overflow-hidden bg-slate-50/50 w-full">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative p-6 sm:p-12 md:p-14 rounded-3xl bg-gradient-to-r from-violet-900 via-indigo-900 to-slate-900 text-white text-center overflow-hidden shadow-2xl shadow-slate-900/20 hover:shadow-violet-900/30 transition-all">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/20 text-emerald-300 text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-4 sm:mb-6 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 animate-pulse" /> Ready to Launch Online?
            </div>

            <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white mb-3 sm:mb-4 leading-tight max-w-2xl mx-auto tracking-tight">
              Get Your Custom Project Live in Just <span className="text-emerald-400">7 Days</span>
            </h2>

            <p className="text-slate-200 text-xs sm:text-base max-w-xl mx-auto mb-6 sm:mb-8 leading-relaxed font-normal">
              No complicated technical jargon, zero upfront risk. Tell us your business idea and get a live interactive demo designed for you.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-8">
              <a
                href="https://wa.me/918601300910?text=Hi%20SiteMint!%20I%20am%20ready%20to%20start%20my%20website%20project.%20Please%20guide%20me."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp btn-shine text-sm sm:text-base !py-3 sm:!py-3.5 !px-6 sm:!px-8 shadow-xl shadow-green-950/40 w-full sm:w-auto justify-center"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Start Project on WhatsApp</span>
              </a>

              <a
                href="tel:+918601300910"
                className="btn-secondary text-sm sm:text-base !py-3 sm:!py-3.5 !px-5 sm:!px-7 flex items-center justify-center gap-2 w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border-white/20"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>Call +91 86013 00910</span>
              </a>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-slate-300">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> 100% Free Consultation
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Zero Advance for Scoping
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> 60 Days Support
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FAQs */}
      <FaqSection />
    </div>
  );
}
