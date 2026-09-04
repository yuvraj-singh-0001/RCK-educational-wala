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
  CheckCircle2
} from 'lucide-react';
import { InstagramIcon, LinkedInIcon, FacebookIcon } from './SocialIcons';

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
            <Link href="/" className="relative inline-flex items-center group">
              <div className="px-3.5 py-2 rounded-2xl bg-white shadow-md shadow-black/20 border border-slate-200/80 hover:shadow-lg hover:border-violet-300 transition-all duration-300">
                <Image 
                  src="/sitemint_logo1.png" 
                  alt="SiteMint - Build. Grow. Succeed." 
                  width={200} 
                  height={54} 
                  className="h-9 sm:h-10 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
                />
              </div>
            </Link>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              We design production-grade Next.js websites, native mobile applications, viral video reels, and manage 7+ social media channels for growing Indian businesses and startups.
            </p>

            <div className="space-y-2 pt-2 text-slate-300">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <a href="tel:+918920683588" className="hover:text-white transition font-medium">+91 89206 83588</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                <a href="mailto:contactsitemint@gmail.com" className="hover:text-white transition truncate font-medium">contactsitemint@gmail.com</a>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-3.5 h-3.5 text-green-400 shrink-0" />
                <a href="https://wa.me/918920683588" target="_blank" rel="noopener noreferrer" className="hover:text-white transition font-medium">WhatsApp: +91 89206 83588 (9 AM - 10 PM)</a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                <span>Pan-India Remote Delivery (Delhi NCR, Lucknow, Mumbai & Nationwide)</span>
              </div>
            </div>

            {/* Official Social Media Channels (Vibrant Circular Icons) */}
            <div className="pt-2">
              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-2.5 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-violet-400" />
                Connect With SiteMint
              </div>
              <div className="flex items-center gap-3">
                {/* Instagram Circular Gradient Badge */}
                <a
                  href="https://www.instagram.com/sitemint.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow SiteMint on Instagram (@sitemint.in)"
                  className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white flex items-center justify-center shadow-md shadow-pink-500/20 hover:scale-115 hover:shadow-lg hover:shadow-pink-500/40 transition-all duration-300 ring-2 ring-white/10"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>

                {/* LinkedIn Circular Official Badge */}
                <a
                  href="https://www.linkedin.com/company/sitemint002sep02/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Connect with SiteMint on LinkedIn"
                  className="w-9 h-9 rounded-full bg-[#0A66C2] text-white flex items-center justify-center shadow-md shadow-sky-600/20 hover:scale-115 hover:shadow-lg hover:shadow-sky-600/40 transition-all duration-300 ring-2 ring-white/10"
                >
                  <LinkedInIcon className="w-4 h-4" />
                </a>

                {/* Facebook Circular Official Badge */}
                <a
                  href="https://www.facebook.com/profile.php?id=61593961025592"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow SiteMint on Facebook"
                  className="w-9 h-9 rounded-full bg-[#1877F2] text-white flex items-center justify-center shadow-md shadow-blue-600/20 hover:scale-115 hover:shadow-lg hover:shadow-blue-600/40 transition-all duration-300 ring-2 ring-white/10"
                >
                  <FacebookIcon className="w-4 h-4" />
                </a>

                {/* WhatsApp Circular Official Badge */}
                <a
                  href="https://wa.me/918920683588?text=Hi%20SiteMint!%20I%20want%20to%20know%20more%20about%20your%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chat with SiteMint on WhatsApp"
                  className="w-9 h-9 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-md shadow-emerald-500/20 hover:scale-115 hover:shadow-lg hover:shadow-emerald-500/40 transition-all duration-300 ring-2 ring-white/10"
                >
                  <MessageCircle className="w-4 h-4" />
                </a>
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
