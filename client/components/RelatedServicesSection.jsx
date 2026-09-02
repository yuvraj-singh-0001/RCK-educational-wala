import Link from 'next/link';
import { 
  Globe, 
  Smartphone, 
  Video, 
  Share2, 
  ShoppingBag, 
  GraduationCap, 
  Store, 
  Cpu, 
  Calculator, 
  Sparkles, 
  ArrowRight,
  Layers
} from 'lucide-react';

export default function RelatedServicesSection({ currentService = '' }) {
  const allServices = [
    {
      id: 'website-development',
      name: 'Website & Web Application Development',
      href: '/services/website-development',
      desc: 'High-speed Next.js business websites, direct WhatsApp lead capture, and custom portals starting at ₹3,999.',
      icon: Globe,
      badge: 'From ₹3,999',
      color: 'text-violet-700 bg-violet-100',
    },
    {
      id: 'mobile-app-development',
      name: 'Mobile App Development (Android & iOS)',
      href: '/services/mobile-app-development',
      desc: 'Play Store ready Android .APK and iOS apps with push notifications and cloud database starting at ₹12,999.',
      icon: Smartphone,
      badge: 'From ₹12,999',
      color: 'text-pink-700 bg-pink-100',
    },
    {
      id: 'video-editing',
      name: 'Video Editing & Viral Reels Creation',
      href: '/services/video-editing',
      desc: 'Instagram Reels, YouTube Shorts, animated captions, sound effects, and commercial ads starting at ₹499/reel.',
      icon: Video,
      badge: 'From ₹499/reel',
      color: 'text-rose-700 bg-rose-100',
    },
    {
      id: 'social-media-management',
      name: 'Social Media Management (7+ Platforms)',
      href: '/services/social-media-management',
      desc: 'Complete digital management across 7-8 platforms, 30 monthly graphic creatives, and Meta Ad campaigns.',
      icon: Share2,
      badge: 'From ₹4,999/mo',
      color: 'text-emerald-700 bg-emerald-100',
    },
    {
      id: 'ecommerce-development',
      name: 'E-Commerce Store & Payment Gateway',
      href: '/services/ecommerce-development',
      desc: 'Custom online shopping store with UPI payment gateway, product catalogs, and zero monthly commission fees.',
      icon: ShoppingBag,
      badge: 'From ₹8,999',
      color: 'text-blue-700 bg-blue-100',
    },
    {
      id: 'education-portal',
      name: 'School & Coaching Institute Portal',
      href: '/services/education-portal',
      desc: 'Student admission forms, online batch syllabus, faculty credentials, and test result rankboards.',
      icon: GraduationCap,
      badge: 'From ₹7,999',
      color: 'text-amber-700 bg-amber-100',
    },
    {
      id: 'restaurant-software',
      name: 'Bakery & Restaurant Ordering Website',
      href: '/services/restaurant-software',
      desc: 'Digital food menu, custom cake customizer, delivery fee calculator, and direct 0% commission WhatsApp checkout.',
      icon: Store,
      badge: 'From ₹5,999',
      color: 'text-teal-700 bg-teal-100',
    },
    {
      id: 'custom-software-development',
      name: 'Custom Software & Business ERP',
      href: '/services/custom-software-development',
      desc: 'Role-based admin dashboards, cloud databases, automated GST invoicing, and team management systems.',
      icon: Cpu,
      badge: 'From ₹14,999',
      color: 'text-indigo-700 bg-indigo-100',
    },
  ];

  const filteredServices = allServices.filter(s => s.id !== currentService).slice(0, 4);

  return (
    <section className="py-12 sm:py-16 bg-slate-50/70 border-t border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-50 border border-violet-200 text-violet-800 text-[11px] font-bold uppercase tracking-wider mb-2">
              <Layers className="w-3.5 h-3.5 text-violet-600" /> Explore Related Solutions
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
              Grow Your Business with Our <span className="gradient-text-hero">Full Digital Suite</span>
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/calculator"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-violet-700 hover:text-violet-900 bg-white px-3.5 py-2 rounded-xl border border-slate-200 shadow-2xs transition"
            >
              <Calculator className="w-3.5 h-3.5" />
              <span>Calculate Cost</span>
            </Link>
            <Link
              href="/demos"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 hover:text-slate-900 bg-white px-3.5 py-2 rounded-xl border border-slate-200 shadow-2xs transition"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>Live Demos</span>
            </Link>
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {filteredServices.map((srv) => {
            const Icon = srv.icon;
            return (
              <Link
                key={srv.id}
                href={srv.href}
                className="glass-card p-5 border border-slate-200 hover:border-violet-400 hover:shadow-md transition-all duration-200 group flex flex-col justify-between bg-white rounded-2xl"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className={`p-2 rounded-xl ${srv.color} group-hover:scale-110 transition-transform`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                      {srv.badge}
                    </span>
                  </div>

                  <h3 className="text-sm font-bold text-slate-900 group-hover:text-violet-700 transition-colors mb-1.5 leading-snug">
                    {srv.name}
                  </h3>

                  <p className="text-[11px] text-slate-500 leading-relaxed line-clamp-2">
                    {srv.desc}
                  </p>
                </div>

                <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-violet-700 group-hover:text-violet-800">
                  <span>View Details</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
