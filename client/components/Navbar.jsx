'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { 
  Menu, 
  X, 
  Sparkles, 
  MessageCircle, 
  Phone, 
  Calculator, 
  ChevronDown,
  Globe,
  Smartphone,
  Video,
  Share2,
  ArrowRight,
  Briefcase,
  Users,
  BookOpen,
  Mail,
  Layers
} from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Check if current route is a standalone demo (MUST be after all hooks)
  const isDemoRoute = pathname?.startsWith('/demos/bakery') || 
                      pathname?.startsWith('/demos/education') || 
                      pathname?.startsWith('/bakery-demo') || 
                      pathname?.startsWith('/education-demo') ||
                      pathname?.startsWith('/ecommerce-demo') ||
                      pathname?.startsWith('/recruitment-demo');

  if (isDemoRoute) return null;

  const coreServicesList = [
    {
      name: 'Web & Software Development',
      href: '/services/website-development',
      desc: 'Websites, E-Commerce, Portals & Custom CRM',
      icon: Globe,
      iconColor: 'text-violet-700',
      iconBg: 'bg-violet-100',
      badge: '₹3,999'
    },
    {
      name: 'Mobile App Development',
      href: '/services/mobile-app-development',
      desc: 'Android, iOS, Flutter & Cross-Platform Apps',
      icon: Smartphone,
      iconColor: 'text-pink-700',
      iconBg: 'bg-pink-100',
      badge: '₹12,999'
    },
    {
      name: 'Video Editing & Reels',
      href: '/services/video-editing',
      desc: 'Instagram Reels, YouTube Videos & Ad Creatives',
      icon: Video,
      iconColor: 'text-rose-700',
      iconBg: 'bg-rose-100',
      badge: '₹499/reel'
    },
    {
      name: 'Social Media Management',
      href: '/services/social-media-management',
      desc: '7-8 Platforms Management, Daily Posts & Ads',
      icon: Share2,
      iconColor: 'text-emerald-700',
      iconBg: 'bg-emerald-100',
      badge: 'Monthly Plan'
    },
  ];

  return (
    <>
      <header 
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-xl border-b border-slate-200/90 shadow-sm shadow-slate-900/5 h-14 sm:h-15' 
            : 'bg-white border-b border-slate-100 h-14 sm:h-16'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-full flex items-center justify-between gap-2">
          {/* Brand Logo - Extra Large & Full Navbar Fit (Zero Top/Bottom Blank Gap) */}
          <Link href="/" className="relative flex items-center shrink-0 group h-full">
            <Image 
              src="/sitemint_logo1.png" 
              alt="SiteMint - Build. Grow. Succeed." 
              width={280} 
              height={80} 
              className="h-16 sm:h-20 lg:h-24 w-auto max-w-none object-contain scale-[1.35] sm:scale-[1.45] origin-left transition-transform duration-200 group-hover:scale-[1.5]"
              priority
            />
          </Link>

          {/* Desktop Navigation (Flexible & Responsive) */}
          <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1 bg-slate-50/80 p-1 rounded-2xl border border-slate-200/70 text-xs xl:text-sm font-semibold shrink-0">
            {/* Home */}
            <Link 
              href="/" 
              className={`px-2.5 xl:px-3 py-1.5 rounded-xl transition-all duration-200 ${
                pathname === '/'
                  ? 'bg-white text-violet-700 shadow-sm font-bold border border-slate-200/60' 
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
              }`}
            >
              Home
            </Link>
            
            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button 
                className={`flex items-center gap-1 px-2.5 xl:px-3 py-1.5 rounded-xl transition-all duration-200 cursor-pointer ${
                  pathname.startsWith('/services')
                    ? 'bg-white text-violet-700 shadow-sm font-bold border border-slate-200/60'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                }`}
              >
                <span>Services</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesOpen ? 'rotate-180 text-violet-600' : 'text-slate-400'}`} />
              </button>

              {servicesOpen && (
                <div className="absolute top-full left-0 w-[420px] max-w-[calc(100vw-24px)] pt-2 animate-in fade-in slide-in-from-top-1 duration-150 z-50">
                  <div className="p-3 bg-white border border-slate-200 rounded-2xl shadow-2xl shadow-slate-900/10 grid grid-cols-2 gap-2">
                    {coreServicesList.map((srv, idx) => {
                      const Icon = srv.icon;
                      return (
                        <Link 
                          key={idx}
                          href={srv.href} 
                          className="p-2.5 rounded-xl hover:bg-slate-50 transition-colors flex items-start gap-2.5 group border border-transparent hover:border-slate-200/80"
                          onClick={() => setServicesOpen(false)}
                        >
                          <div className={`p-2 rounded-xl ${srv.iconBg} ${srv.iconColor} group-hover:scale-105 transition-transform shrink-0`}>
                            <Icon className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-slate-900 text-xs font-bold leading-snug">
                              {srv.name}
                            </div>
                            <div className="text-[10px] text-slate-500 font-normal leading-tight mt-0.5">
                              {srv.desc}
                            </div>
                          </div>
                        </Link>
                      );
                    })}

                    <div className="col-span-2 pt-2 border-t border-slate-100 flex items-center justify-between px-2 text-xs">
                      <Link 
                        href="/services" 
                        className="text-violet-700 hover:text-violet-900 font-bold flex items-center gap-1"
                        onClick={() => setServicesOpen(false)}
                      >
                        <span>View All Services Directory</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                      <span className="text-[11px] text-slate-400 font-medium">Pan-India Delivery</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Projects */}
            <Link 
              href="/projects" 
              className={`px-2.5 xl:px-3 py-1.5 rounded-xl transition-all duration-200 ${
                pathname.startsWith('/projects')
                  ? 'bg-white text-violet-700 shadow-sm font-bold border border-slate-200/60'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
              }`}
            >
              Projects
            </Link>

            {/* About Us */}
            <Link 
              href="/about" 
              className={`px-2.5 xl:px-3 py-1.5 rounded-xl transition-all duration-200 ${
                pathname === '/about'
                  ? 'bg-white text-violet-700 shadow-sm font-bold border border-slate-200/60'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
              }`}
            >
              About Us
            </Link>

            {/* Pricing */}
            <Link 
              href="/pricing" 
              className={`px-2.5 xl:px-3 py-1.5 rounded-xl transition-all duration-200 ${
                pathname === '/pricing'
                  ? 'bg-white text-violet-700 shadow-sm font-bold border border-slate-200/60'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
              }`}
            >
              Pricing
            </Link>

            {/* Blog */}
            <Link 
              href="/blog" 
              className={`px-2.5 xl:px-3 py-1.5 rounded-xl transition-all duration-200 ${
                pathname.startsWith('/blog')
                  ? 'bg-white text-violet-700 shadow-sm font-bold border border-slate-200/60'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
              }`}
            >
              Blog
            </Link>

            {/* Contact */}
            <Link 
              href="/contact" 
              className={`px-2.5 xl:px-3 py-1.5 rounded-xl transition-all duration-200 ${
                pathname === '/contact'
                  ? 'bg-white text-violet-700 shadow-sm font-bold border border-slate-200/60'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center gap-2 shrink-0">
            <Link
              href="/calculator"
              className="flex items-center gap-1.5 text-xs text-slate-700 font-semibold hover:text-violet-700 px-3 py-2 rounded-xl border border-slate-200 hover:bg-slate-50 transition shadow-2xs"
            >
              <Calculator className="w-3.5 h-3.5 text-violet-600" />
              <span>Get a Quote</span>
            </Link>

            <a
              href="https://wa.me/918920683588?text=Hi%20SiteMint%20Team!%20I%20want%20to%20build%20a%20website/app%20for%20my%20business.%20Please%20share%20details."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp text-xs !py-2 !px-3.5 !rounded-xl shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile Right Controls: Fast WhatsApp + Menu Trigger */}
          <div className="flex lg:hidden items-center gap-1.5 shrink-0">
            <a
              href="https://wa.me/918920683588?text=Hi%20SiteMint!%20I%20need%20a%20website/app."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp text-xs !py-1.5 !px-2.5 !rounded-lg flex items-center gap-1"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span className="text-[11px]">Quote</span>
            </a>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl bg-slate-100 border border-slate-200 text-slate-700 hover:text-slate-900 active:scale-95 transition cursor-pointer min-w-[38px] min-h-[38px] flex items-center justify-center"
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <X className="w-5 h-5 text-slate-900" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Backdrop & Drawer Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          {/* Dark Backdrop Blur Overlay */}
          <div 
            className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs transition-opacity duration-300 animate-in fade-in"
            onClick={() => setIsOpen(false)}
          />

          {/* Slide-Down Drawer */}
          <div className="fixed top-[57px] inset-x-0 w-full max-w-full overflow-x-hidden bg-white border-b border-slate-200 shadow-2xl max-h-[calc(100vh-60px)] overflow-y-auto px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col gap-1 text-sm font-semibold">
              <Link 
                href="/" 
                onClick={() => setIsOpen(false)}
                className={`px-3.5 py-2.5 rounded-xl transition flex items-center justify-between ${
                  pathname === '/' 
                    ? 'bg-violet-50 text-violet-700 font-bold border border-violet-100' 
                    : 'text-slate-800 hover:bg-slate-50'
                }`}
              >
                <span>Home</span>
                {pathname === '/' && <span className="w-1.5 h-1.5 rounded-full bg-violet-600" />}
              </Link>

              {/* Services Header */}
              <div className="px-3.5 pt-2 pb-1 text-[11px] text-slate-400 font-bold uppercase tracking-wider flex items-center justify-between">
                <span>Our 4 Core Services</span>
                <Link href="/services" onClick={() => setIsOpen(false)} className="text-violet-700 lowercase font-semibold">
                  view all →
                </Link>
              </div>

              {coreServicesList.map((srv, idx) => {
                const Icon = srv.icon;
                const isSelected = pathname === srv.href;
                return (
                  <Link 
                    key={idx}
                    href={srv.href} 
                    onClick={() => setIsOpen(false)}
                    className={`px-3.5 py-2.5 rounded-xl transition flex items-center justify-between ${
                      isSelected
                        ? 'bg-violet-50 text-violet-700 font-bold border border-violet-100'
                        : 'text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <Icon className={`w-4 h-4 ${srv.iconColor}`} /> 
                      <span>{srv.name}</span>
                    </div>
                  </Link>
                );
              })}

              <div className="pt-2 border-t border-slate-100"></div>

              {/* Projects */}
              <Link 
                href="/projects" 
                onClick={() => setIsOpen(false)}
                className={`px-3.5 py-2.5 rounded-xl transition flex items-center justify-between ${
                  pathname.startsWith('/projects') 
                    ? 'bg-violet-50 text-violet-700 font-bold border border-violet-100' 
                    : 'text-slate-800 hover:bg-slate-50'
                }`}
              >
                <span>Projects & Portfolio</span>
                {pathname.startsWith('/projects') && <span className="w-1.5 h-1.5 rounded-full bg-violet-600" />}
              </Link>

              {/* About Us */}
              <Link 
                href="/about" 
                onClick={() => setIsOpen(false)}
                className={`px-3.5 py-2.5 rounded-xl transition flex items-center justify-between ${
                  pathname === '/about' 
                    ? 'bg-violet-50 text-violet-700 font-bold border border-violet-100' 
                    : 'text-slate-800 hover:bg-slate-50'
                }`}
              >
                <span>About Us</span>
                {pathname === '/about' && <span className="w-1.5 h-1.5 rounded-full bg-violet-600" />}
              </Link>

              {/* Pricing */}
              <Link 
                href="/pricing" 
                onClick={() => setIsOpen(false)}
                className={`px-3.5 py-2.5 rounded-xl transition flex items-center justify-between ${
                  pathname === '/pricing' 
                    ? 'bg-violet-50 text-violet-700 font-bold border border-violet-100' 
                    : 'text-slate-800 hover:bg-slate-50'
                }`}
              >
                <span>Pricing Plans</span>
                {pathname === '/pricing' && <span className="w-1.5 h-1.5 rounded-full bg-violet-600" />}
              </Link>

              {/* Blog */}
              <Link 
                href="/blog" 
                onClick={() => setIsOpen(false)}
                className={`px-3.5 py-2.5 rounded-xl transition flex items-center justify-between ${
                  pathname.startsWith('/blog') 
                    ? 'bg-violet-50 text-violet-700 font-bold border border-violet-100' 
                    : 'text-slate-800 hover:bg-slate-50'
                }`}
              >
                <span>Blog & Growth Guides</span>
                {pathname.startsWith('/blog') && <span className="w-1.5 h-1.5 rounded-full bg-violet-600" />}
              </Link>

              {/* Contact */}
              <Link 
                href="/contact" 
                onClick={() => setIsOpen(false)}
                className={`px-3.5 py-2.5 rounded-xl transition flex items-center justify-between ${
                  pathname === '/contact' 
                    ? 'bg-violet-50 text-violet-700 font-bold border border-violet-100' 
                    : 'text-slate-800 hover:bg-slate-50'
                }`}
              >
                <span>Contact</span>
                {pathname === '/contact' && <span className="w-1.5 h-1.5 rounded-full bg-violet-600" />}
              </Link>
            </div>

            {/* Mobile Bottom Quick Actions */}
            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
              <Link
                href="/calculator"
                onClick={() => setIsOpen(false)}
                className="btn-secondary justify-center w-full text-xs font-semibold py-2.5"
              >
                <Calculator className="w-4 h-4 text-violet-600" /> Get Instant Quote
              </Link>
              <a
                href="https://wa.me/918920683588?text=Hi%20SiteMint!%20I%20need%20a%20website/app%20for%20my%20business."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp justify-center w-full shadow-md text-xs py-2.5"
              >
                <MessageCircle className="w-4 h-4" /> WhatsApp Chat
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
