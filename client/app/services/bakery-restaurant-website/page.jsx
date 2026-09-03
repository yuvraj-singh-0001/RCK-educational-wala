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
  Star
} from 'lucide-react';

export const metadata = {
  title: 'Bakery & Restaurant Website Design with Online Ordering in India',
  description: 'Boost your cake and food sales with a custom bakery website. Digital menu, custom cake flavor/weight customizer, delivery fee calculator, and direct WhatsApp order dispatch starting at ₹5,999.',
  keywords: [
    'bakery website design india',
    'online cake order website developer',
    'restaurant digital menu website',
    'custom cake customization website',
    'cake shop website maker',
    'whatsapp food ordering system',
    'bakery website development cost'
  ],
  alternates: {
    canonical: 'https://sitemint.in/services/bakery-restaurant-website',
  },
  openGraph: {
    title: 'Bakery Website Design & WhatsApp Online Ordering System | SiteMint',
    description: 'Get a custom bakery website with digital menu, custom cake order builder, and WhatsApp direct checkout.',
    url: 'https://sitemint.in/services/bakery-restaurant-website',
    images: ['/bakery-demo/images/birthday-cake.png'],
  },
};

export default function BakeryServicePage() {
  const bakeryFeatures = [
    {
      title: 'Digital Menu with Live Prices & Photos',
      desc: 'Showcase your cakes, pastries, snacks, and beverages with mouthwatering photos, dietary tags (Eggless/Vegan), and instant search.',
    },
    {
      title: 'Interactive Custom Cake Builder',
      desc: 'Allow customers to customize flavor (Chocolate, Red Velvet, Pineapple), weight (0.5kg, 1kg, 2kg+), custom text on cake, and eggless preferences.',
    },
    {
      title: '1-Click Direct WhatsApp Order Dispatch',
      desc: 'Orders are sent directly to your WhatsApp with itemized breakdown, delivery address, preferred time slot, and total price. Zero commissions to third-party apps!',
    },
    {
      title: 'Delivery Distance & Pincode Checker',
      desc: 'Set automatic delivery charges based on customer location and prevent orders outside your service radius.',
    },
    {
      title: 'Online Payment (UPI / QR) or Cash on Delivery',
      desc: 'Integrate UPI, Google Pay, PhonePe, Paytm, or provide Pay on Delivery options for customer convenience.',
    },
    {
      title: 'Admin Panel for Menu & Price Updates',
      desc: 'Easily change prices, mark items "Out of Stock", or add seasonal festival specials directly from your phone.',
    },
  ];

  return (
    <div className="w-full pt-6 pb-12 sm:pt-10 sm:pb-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-center mb-12 sm:mb-16">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold uppercase tracking-wider mb-4 sm:mb-5 shadow-2xs">
              <Store className="w-3.5 h-3.5 text-amber-600" /> High-Converting Bakery Solution
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-4 sm:mb-5 tracking-tight">
              Custom <span className="gradient-text-amber">Bakery & Restaurant</span> Website with Online Ordering
            </h1>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8 font-normal">
              Stop paying 25% to 35% commission on food delivery apps. Launch your own direct online ordering website where customers view your menu, customize cakes, and order directly on your WhatsApp!
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
                href="https://wa.me/918920683588?text=Hi%20SiteMint!%20I%20want%20to%20get%20a%20Bakery%20Website%20with%20online%20ordering%20made.%20Please%20share%20quotation."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp text-xs sm:text-sm !py-2.5 sm:!py-3 !px-5 sm:!px-6 shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Order Quote (₹5,999)</span>
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-slate-500 font-semibold">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> 7 Days Delivery
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Free Domain & Hosting
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> 0% Commission
              </span>
            </div>
          </div>

          {/* Pricing & Deliverables Box */}
          <div className="lg:col-span-5">
            <div className="glass-card p-5 sm:p-8 bg-slate-900 text-white border border-slate-800 shadow-xl shadow-slate-900/20">
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <span className="text-xs uppercase font-bold tracking-wider text-amber-400">Complete Package</span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  Ready in 7 Days
                </span>
              </div>

              <div className="text-3xl sm:text-4xl font-extrabold text-white mb-1">
                ₹5,999 <span className="text-xs text-slate-400 font-sans font-normal">(One-time fee)</span>
              </div>
              <p className="text-xs text-slate-400 mb-5 sm:mb-6">
                Complete online store ready to receive cake orders.
              </p>

              <div className="space-y-2 sm:space-y-2.5 text-xs text-slate-300 mb-5 sm:mb-6 border-t border-b border-slate-800 py-4">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>Interactive Digital Menu & Gallery</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>Custom Cake Designer (Flavor & Weight)</span>
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
                href="https://wa.me/918920683588?text=Hi%20SiteMint!%20I%20want%20to%20order%20the%20Bakery%20Website%20Package%20for%20my%20shop."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp w-full justify-center text-xs sm:text-sm py-3"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Book Bakery Website Now</span>
              </a>
            </div>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="mb-14 sm:mb-20">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 mb-2 sm:mb-3 tracking-tight">
              Features Built Specifically for <span className="gradient-text-amber">Bakeries & Cafes</span>
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm">
              Designed to turn casual visitors on Instagram and Google into repeat paying customers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {bakeryFeatures.map((feat, idx) => (
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

        {/* Live Demo Banner */}
        <div className="p-6 sm:p-12 rounded-3xl bg-gradient-to-r from-amber-50 via-orange-50 to-amber-100 border border-amber-200 text-center relative overflow-hidden shadow-2xs">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mb-3 sm:mb-4 tracking-tight">
            Test Our Live Bakery Demo Now
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm max-w-xl mx-auto mb-6 sm:mb-8 font-normal">
            Experience how customers browse cakes, customize toppings, add candles, and place instant WhatsApp orders.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <Link href="/demos/bakery" className="btn-primary text-xs sm:text-sm !py-2.5 sm:!py-3 !px-5 sm:!px-7 shadow-sm">
              <Eye className="w-4 h-4" />
              <span>Launch Live Bakery Demo</span>
            </Link>
            <a
              href="https://wa.me/918920683588?text=Hi%20SiteMint!%20I%20have%20questions%20regarding%20the%20Bakery%20Website."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp text-xs sm:text-sm !py-2.5 sm:!py-3 !px-5 sm:!px-7 shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Ask Questions on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
