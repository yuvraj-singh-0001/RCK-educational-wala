'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { 
  Sparkles, 
  Phone, 
  Mail, 
  MessageCircle, 
  MapPin, 
  Globe,
  Store,
  GraduationCap,
  ShoppingBag,
  Smartphone,
  Cpu,
  Video,
  Share2,
  Calculator,
  ArrowRight,
  ShieldCheck,
  Instagram,
  CheckCircle2
} from 'lucide-react';

export default function Footer() {
  const pathname = usePathname();
  const currentYear = new Date().getFullYear();

  // Check if current route is a standalone demo
  const isDemoRoute = pathname?.startsWith('/demos/bakery') || 
                      pathname?.startsWith('/demos/education') || 
                      pathname?.startsWith('/bakery-demo') || 
                      pathname?.startsWith('/education-demo') ||
                      pathname?.startsWith('/ecommerce-demo') ||
                      pathname?.startsWith('/recruitment-demo');

  if (isDemoRoute) return null;

  const coreServices = [
    { name: 'Website Development (From ₹3,999)', href: '/services/website-development' },
    { name: 'Mobile App Development (.APK & iOS)', href: '/services/mobile-app-development' },
    { name: 'Video Editing & Reels (From ₹499)', href: '/services/video-editing' },
    { name: 'Social Media Management (7+ Channels)', href: '/services/social-media-management' },
    { name: 'Low Budget Website Development', href: '/services/low-budget-website-development' },
  ];

  const industrySolutions = [
    { name: 'E-Commerce Online Store with UPI', href: '/services/ecommerce-development' },
    { name: 'Bakery & Restaurant WhatsApp Ordering', href: '/services/restaurant-software' },
    { name: 'School & Coaching Student Portal', href: '/services/education-portal' },
    { name: 'Custom Software & CRM Dashboards', href: '/services/custom-software-development' },
    { name: 'Custom Cake Ordering Website', href: '/services/bakery-restaurant-website' },
  ];

  const interactiveToolsAndDemos = [
    { name: 'Website Cost Calculator (Instant)', href: '/calculator' },
    { name: 'Live Bakery Website Demo', href: '/demos/bakery' },
    { name: 'Live Coaching Portal Demo', href: '/demos/education' },
    { name: 'Client Portfolio & Live Projects', href: '/projects' },
    { name: 'Transparent Pricing Packages', href: '/pricing' },
    { name: 'All Live Product Demos', href: '/demos' },
  ];

  const companyAndGuides = [
    { name: 'About SiteMint Studio', href: '/about' },
    { name: 'Blog & Business Growth Guides', href: '/blog' },
    { name: 'Frequently Asked Questions (FAQ)', href: '/faq' },
    { name: 'Contact Us (Free Consultation)', href: '/contact' },
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Terms & Conditions', href: '/terms-and-conditions' },
  ];

  return (
    <footer className="bg-slate-900 text-slate-400 text-xs border-t border-slate-800 pt-14 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top 5 Column Interlinking Silo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 pb-12 border-b border-slate-800">
          {/* Brand Info (2 Columns) */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="relative inline-flex items-center group overflow-visible">
              <Image 
                src="/sitemint_logo1.png" 
                alt="SiteMint - Build. Grow. Succeed." 
                width={280} 
                height={80} 
                className="h-14 sm:h-16 md:h-18 w-auto max-w-none object-contain scale-[1.35] sm:scale-[1.45] origin-left rounded-lg transition-transform duration-200 group-hover:scale-[1.5]"
              />
            </Link>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              We design production-grade Next.js websites, native mobile applications, viral video reels, and manage 7+ social media channels for growing Indian businesses and startups.
            </p>

            <div className="space-y-2 pt-2 text-slate-300">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <a href="tel:+918601300910" className="hover:text-white transition font-medium">+91 86013 00910</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                <a href="mailto:singhyuvraj8420@gmail.com" className="hover:text-white transition truncate font-medium">singhyuvraj8420@gmail.com</a>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-3.5 h-3.5 text-green-400 shrink-0" />
                <a href="https://wa.me/918601300910" target="_blank" rel="noopener noreferrer" className="hover:text-white transition font-medium">WhatsApp: +91 86013 00910 (9 AM - 10 PM)</a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                <span>Pan-India Remote Delivery (Delhi NCR, Lucknow, Mumbai & Nationwide)</span>
              </div>
            </div>
          </div>

          {/* Column 1: Core Services */}
          <div>
            <h3 className="text-white text-xs font-bold uppercase tracking-wider mb-3.5 flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5 text-violet-400" />
              Core Services
            </h3>
            <ul className="space-y-2">
              {coreServices.map((item, idx) => (
                <li key={idx}>
                  <Link href={item.href} className="hover:text-white transition-colors block leading-snug">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Industry Solutions */}
          <div>
            <h3 className="text-white text-xs font-bold uppercase tracking-wider mb-3.5 flex items-center gap-1.5">
              <Store className="w-3.5 h-3.5 text-pink-400" />
              Solutions
            </h3>
            <ul className="space-y-2">
              {industrySolutions.map((item, idx) => (
                <li key={idx}>
                  <Link href={item.href} className="hover:text-white transition-colors block leading-snug">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Tools & Demos */}
          <div>
            <h3 className="text-white text-xs font-bold uppercase tracking-wider mb-3.5 flex items-center gap-1.5">
              <Calculator className="w-3.5 h-3.5 text-emerald-400" />
              Tools & Demos
            </h3>
            <ul className="space-y-2">
              {interactiveToolsAndDemos.map((item, idx) => (
                <li key={idx}>
                  <Link href={item.href} className="hover:text-white transition-colors block leading-snug">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Guides & Company */}
          <div>
            <h3 className="text-white text-xs font-bold uppercase tracking-wider mb-3.5 flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-sky-400" />
              Company & Help
            </h3>
            <ul className="space-y-2">
              {companyAndGuides.map((item, idx) => (
                <li key={idx}>
                  <Link href={item.href} className="hover:text-white transition-colors block leading-snug">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Copyright & Fast Links */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {currentYear} SiteMint (sitemint.in). All rights reserved. Built for Indian Businesses.
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <Link href="/services/website-development" className="hover:text-slate-300 transition">Web Development</Link>
            <span>•</span>
            <Link href="/services/mobile-app-development" className="hover:text-slate-300 transition">Mobile Apps</Link>
            <span>•</span>
            <Link href="/calculator" className="hover:text-slate-300 transition">Cost Calculator</Link>
            <span>•</span>
            <Link href="/pricing" className="hover:text-slate-300 transition">Pricing</Link>
            <span>•</span>
            <Link href="/privacy-policy" className="hover:text-slate-300 transition">Privacy</Link>
            <span>•</span>
            <Link href="/terms-and-conditions" className="hover:text-slate-300 transition">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
