import Link from 'next/link';
import { 
  Store, 
  CheckCircle2, 
  MessageCircle, 
  Eye, 
  ShoppingBag, 
  Smartphone, 
  Clock, 
  ShieldCheck,
  Star,
  Calculator,
  ArrowRight
} from 'lucide-react';
import FaqSection from '../../../components/FaqSection';

export const metadata = {
  title: 'Bakery & Restaurant Software with WhatsApp Online Ordering in India',
  description: 'Boost your cake and restaurant orders with digital menus, custom cake builders, table QR codes, and direct WhatsApp order dispatch starting at ₹5,999 with 0% commission.',
  keywords: [
    'restaurant software india',
    'bakery ordering software',
    'digital qr menu maker for restaurants',
    'custom cake order software',
    'whatsapp food ordering system',
    'restaurant pos and ordering software'
  ],
  alternates: {
    canonical: 'https://sitemint.in/services/restaurant-software',
  },
  openGraph: {
    title: 'Restaurant & Bakery Software with WhatsApp Orders | SiteMint',
    description: 'Custom restaurant and bakery ordering software with QR menus, cake builders, and 0% commission.',
    url: 'https://sitemint.in/services/restaurant-software',
  },
};

export default function RestaurantSoftwarePage() {
  const restaurantFeatures = [
    {
      title: 'Interactive Digital QR Menu & Photos',
      desc: 'Let customers scan table QR codes or open your website link to view appetizing photos, categories, item descriptions, and live prices.',
    },
    {
      title: 'Custom Cake & Food Customizer',
      desc: 'Allow cake buyers to customize flavors, eggless options, weight (0.5kg, 1kg, 2kg+), customized message, and topping add-ons.',
    },
    {
      title: '1-Click Direct WhatsApp Order Dispatch',
      desc: 'Orders arrive formatted on your WhatsApp with item names, custom notes, delivery address, time slot, and total amount. Zero commissions to Zomato or Swiggy!',
    },
    {
      title: 'Delivery Distance & Pincode Charge Engine',
      desc: 'Set automated delivery fees based on customer distance or restrict orders outside your delivery zones.',
    },
    {
      title: 'Easy Admin Menu & Stock Manager',
      desc: 'Change prices, toggle out-of-stock items, or launch festival specials directly from your phone in 10 seconds.',
    },
    {
      title: 'Free 1 Year Domain, Cloud Hosting & SSL',
      desc: 'Everything is hosted on high-speed servers with lifetime SSL encryption and 60 days of free support.',
    },
  ];

  return (
    <div className="w-full pt-6 pb-12 sm:pt-10 sm:pb-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-center mb-12 sm:mb-16">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold uppercase tracking-wider mb-4 sm:mb-5 shadow-2xs">
              <Store className="w-3.5 h-3.5 text-amber-600" /> Restaurant & Bakery Studio
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-4 sm:mb-5 tracking-tight">
              Direct <span className="gradient-text-amber">Restaurant & Bakery Software</span> with WhatsApp Orders
            </h1>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8 font-normal">
              Stop losing 30% revenue to delivery apps. Launch your own direct digital ordering website with interactive menus, custom cake builders, and 0% commission.
            </p>

            <div className="flex flex-wrap gap-3 sm:gap-4 mb-6 sm:mb-8">
              <Link
                href="/demos/bakery"
                className="btn-primary text-xs sm:text-sm !py-2.5 sm:!py-3 !px-5 sm:!px-6 shadow-sm"
              >
                <Eye className="w-4 h-4" />
                <span>Explore Live Bakery Demo</span>
              </Link>

              <a
                href="https://wa.me/918601300910?text=Hi%20SiteMint!%20I%20want%20to%20order%20Restaurant/Bakery%20Software%20for%20my%20business."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp text-xs sm:text-sm !py-2.5 sm:!py-3 !px-5 sm:!px-6 shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Quote (₹5,999)</span>
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-slate-500 font-semibold">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> 7 Days Delivery
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> 0% Commission
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Free Domain & Hosting
              </span>
            </div>
          </div>

          {/* Pricing Box */}
          <div className="lg:col-span-5">
            <div className="glass-card p-5 sm:p-8 bg-slate-900 text-white border border-slate-800 shadow-xl shadow-slate-900/20">
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <span className="text-xs uppercase font-bold tracking-wider text-amber-400">Complete Ordering Suite</span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  Ready in 7 Days
                </span>
              </div>

              <div className="text-3xl sm:text-4xl font-extrabold text-white mb-1">
                ₹5,999 <span className="text-xs text-slate-400 font-sans font-normal">(One-time fee)</span>
              </div>
              <p className="text-xs text-slate-400 mb-5 sm:mb-6">
                Complete online ordering system ready to take WhatsApp orders.
              </p>

              <div className="space-y-2 sm:space-y-2.5 text-xs text-slate-300 mb-5 sm:mb-6 border-t border-b border-slate-800 py-4">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>Interactive Digital Food Menu & QR Generator</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>Custom Cake Customizer (Flavor & Weight)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>Instant WhatsApp Order Dispatch Engine</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>Free 1 Year Domain, Hosting & SSL</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>Google My Business & Local SEO Setup</span>
                </div>
              </div>

              <a
                href="https://wa.me/918601300910?text=Hi%20SiteMint!%20I%20want%20to%20order%20the%20Restaurant%20Software%20Package."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp w-full justify-center text-xs sm:text-sm py-3"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Book Restaurant Software Now</span>
              </a>
            </div>
          </div>
        </div>

        {/* Features List */}
        <div className="mb-14 sm:mb-20">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 mb-2 sm:mb-3 tracking-tight">
              Built Specifically for <span className="gradient-text-amber">Bakeries, Cafes & Cloud Kitchens</span>
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm">
              Designed to turn Instagram and Google visitors into repeat direct customers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {restaurantFeatures.map((feat, idx) => (
              <div key={idx} className="glass-card p-5 sm:p-6 border border-slate-200 hover:border-amber-300 transition">
                <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-sm mb-3 sm:mb-4">
                  0{idx + 1}
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-1.5 sm:mb-2">{feat.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <FaqSection />
    </div>
  );
}
