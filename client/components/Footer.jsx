import Link from 'next/link';
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
  Share2
} from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: 'Website & Software Development', href: '/services/website-development' },
    { name: 'Mobile App Development', href: '/services/mobile-app-development' },
    { name: 'Video Editing & Reels Creation', href: '/services/video-editing' },
    { name: 'Social Media Management (7+ Platforms)', href: '/services/social-media-management' },
    { name: 'E-commerce Development', href: '/services/ecommerce-development' },
    { name: 'Restaurant & Bakery Software', href: '/services/restaurant-software' },
  ];

  const company = [
    { name: 'About Us', href: '/about' },
    { name: 'Projects & Portfolio', href: '/projects' },
    { name: 'Pricing Plans', href: '/pricing' },
    { name: 'Interactive Demos', href: '/demos' },
    { name: 'Cost Calculator', href: '/calculator' },
    { name: 'Blog & Guides', href: '/blog' },
    { name: 'Contact Us', href: '/contact' },
  ];

  const legalAndSupport = [
    { name: 'Frequently Asked Questions', href: '/faq' },
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Terms & Conditions', href: '/terms-and-conditions' },
    { name: '60 Days Free Support', href: '/about' },
    { name: '100% Code Ownership', href: '/about' },
  ];

  return (
    <footer className="bg-slate-900 text-slate-400 text-xs border-t border-slate-800 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-12 border-b border-slate-800">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2.5 group inline-block">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-violet-600 via-indigo-600 to-teal-500 p-[1.5px] shadow-sm">
                <div className="w-full h-full bg-slate-900 rounded-[10px] flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-violet-400" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-extrabold tracking-tight text-white flex items-center gap-1.5 leading-none">
                  SiteMint <span className="text-violet-400 text-[10px] px-1.5 py-0.5 rounded-full bg-violet-950/60 border border-violet-800 font-bold">IN</span>
                </span>
                <span className="text-[9px] text-slate-400 tracking-wider uppercase font-semibold mt-0.5">
                  Web, App & Media Studio
                </span>
              </div>
            </Link>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              We build fast websites, mobile apps, viral video edits, and manage 7+ social media channels for growing businesses and creators across India.
            </p>

            <div className="space-y-2 pt-2 text-slate-300">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <a href="tel:+918601300910" className="hover:text-white transition">+91 86013 00910</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                <a href="mailto:singhyuvraj8420@gmail.com" className="hover:text-white transition truncate">singhyuvraj8420@gmail.com</a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                <span>Pan-India Remote Delivery (Delhi NCR, Lucknow, Mumbai & Nationwide)</span>
              </div>
            </div>
          </div>

          {/* Column 1: Services */}
          <div>
            <h3 className="text-white text-xs font-bold uppercase tracking-wider mb-3.5">
              Core Services
            </h3>
            <ul className="space-y-2">
              {services.map((item, idx) => (
                <li key={idx}>
                  <Link href={item.href} className="hover:text-white transition-colors block">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Company */}
          <div>
            <h3 className="text-white text-xs font-bold uppercase tracking-wider mb-3.5">
              Company
            </h3>
            <ul className="space-y-2">
              {company.map((item, idx) => (
                <li key={idx}>
                  <Link href={item.href} className="hover:text-white transition-colors block">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Legal & Support */}
          <div>
            <h3 className="text-white text-xs font-bold uppercase tracking-wider mb-3.5">
              Support & Legal
            </h3>
            <ul className="space-y-2">
              {legalAndSupport.map((item, idx) => (
                <li key={idx}>
                  <Link href={item.href} className="hover:text-white transition-colors block">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {currentYear} SiteMint (sitemint.in). All rights reserved. Built for Indian Businesses.
          </div>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="hover:text-slate-300 transition">Privacy Policy</Link>
            <span>•</span>
            <Link href="/terms-and-conditions" className="hover:text-slate-300 transition">Terms & Conditions</Link>
            <span>•</span>
            <Link href="/faq" className="hover:text-slate-300 transition">FAQ</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
