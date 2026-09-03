import Link from 'next/link';
import { 
  ShoppingBag, 
  CheckCircle2, 
  MessageCircle, 
  CreditCard, 
  Truck, 
  Tag, 
  Smartphone, 
  ShieldCheck,
  Calculator,
  ArrowRight
} from 'lucide-react';
import RelatedServicesSection from '../../../components/RelatedServicesSection';
import FaqSection from '../../../components/FaqSection';

export const metadata = {
  title: 'E-Commerce Website Development with Payment Gateway in India',
  description: 'Launch your online store with product catalogs, shopping cart, UPI/Card payment gateway, coupon codes, and order tracking starting at ₹8,999. Fast delivery and 0% monthly commission.',
  keywords: [
    'ecommerce website development india',
    'online store maker india',
    'custom ecommerce website cost',
    'razorpay payment gateway website developer',
    'affordable ecommerce website designer'
  ],
  alternates: {
    canonical: 'https://sitemint.in/services/ecommerce-development',
  },
  openGraph: {
    title: 'E-Commerce Website Development in India | SiteMint',
    description: 'Custom online shopping store with payment gateway and zero monthly commissions.',
    url: 'https://sitemint.in/services/ecommerce-development',
  },
};

export default function EcommerceDevelopmentPage() {
  const ecommerceFeatures = [
    {
      title: 'Product Catalog with Variations (Sizes, Colors)',
      desc: 'Display unlimited products with high-resolution image galleries, pricing, stock levels, and size/color selection.',
    },
    {
      title: 'Online Payment Gateway (UPI, Cards, EMI)',
      desc: 'Seamlessly accept payments via Razorpay, Cashfree, or Stripe supporting Google Pay, PhonePe, Paytm, Credit/Debit cards, and NetBanking.',
    },
    {
      title: 'Shopping Cart & 1-Click Fast Checkout',
      desc: 'Frictionless checkout designed to reduce cart abandonment, with guest checkout and saved customer addresses.',
    },
    {
      title: 'Discount Coupons & Promotional Banners',
      desc: 'Create festive coupon codes (e.g. DIWALI20, FIRSTBUY) with percentage discounts, minimum order value rules, and flash sale countdowns.',
    },
    {
      title: 'Order Tracking & WhatsApp Order Status',
      desc: 'Keep customers updated with instant WhatsApp and Email notifications on order confirmation, dispatch, and delivery.',
    },
    {
      title: 'Admin Inventory & Sales Analytics Dashboard',
      desc: 'Manage orders, add new products, track revenue graphs, and download customer data directly from an easy-to-use control panel.',
    },
  ];

  return (
    <div className="w-full pt-6 pb-12 sm:pt-10 sm:pb-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-center mb-12 sm:mb-16">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-4 sm:mb-5 shadow-2xs">
              <ShoppingBag className="w-3.5 h-3.5 text-emerald-600" /> High-Conversion Online Store
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-4 sm:mb-5 tracking-tight">
              Sell Online with a Custom <span className="gradient-text-hero">E-Commerce Store</span>
            </h1>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8 font-normal">
              Why pay monthly platform fees and commission? Own your independent online store with UPI payment gateway, inventory management, and fast mobile checkout.
            </p>

            <div className="flex flex-wrap gap-3 sm:gap-4 mb-6 sm:mb-8">
              <a
                href="https://wa.me/918920683588?text=Hi%20SiteMint!%20I%20want%20to%20build%20an%20E-Commerce%20Store%20for%20my%20products.%20Please%20share%20details."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp text-xs sm:text-sm !py-2.5 sm:!py-3 !px-5 sm:!px-6 shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Get E-Commerce Quote (₹8,999)</span>
              </a>

              <Link
                href="/calculator"
                className="btn-secondary text-xs sm:text-sm !py-2.5 sm:!py-3 !px-5 sm:!px-6"
              >
                <span>Calculate Store Cost</span>
              </Link>
            </div>

            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-slate-500 font-semibold">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Razorpay / UPI Integration
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> 0% Monthly Commission
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
                <span className="text-xs uppercase font-bold tracking-wider text-emerald-400">Store Launch Package</span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  Ready in 10-14 Days
                </span>
              </div>

              <div className="text-3xl sm:text-4xl font-extrabold text-white mb-1">
                ₹8,999 <span className="text-xs text-slate-400 font-sans font-normal">(One-time fee)</span>
              </div>
              <p className="text-xs text-slate-400 mb-5 sm:mb-6">
                Complete online shop setup with payment gateway ready.
              </p>

              <div className="space-y-2 sm:space-y-2.5 text-xs text-slate-300 mb-5 sm:mb-6 border-t border-b border-slate-800 py-4">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Product Catalog with Variants & Filters</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Razorpay / UPI Payment Gateway Setup</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Shopping Cart & Coupon Discount Engine</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Free 1 Year Domain, High-Speed Hosting & SSL</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Admin Panel for Order & Stock Management</span>
                </div>
              </div>

              <a
                href="https://wa.me/918920683588?text=Hi%20SiteMint!%20I%20want%20to%20order%20the%20E-Commerce%20Store%20Package."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp w-full justify-center text-xs sm:text-sm py-3"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Launch E-Commerce Store Now</span>
              </a>
            </div>
          </div>
        </div>

        {/* Features List */}
        <div className="mb-14 sm:mb-20">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 mb-2 sm:mb-3 tracking-tight">
              Features Built for <span className="gradient-text-hero">Maximum Sales</span>
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm">
              Engineered for fast checkout, seamless mobile payments, and repeat customer retention.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {ecommerceFeatures.map((feat, idx) => (
              <div key={idx} className="glass-card p-5 sm:p-6 border border-slate-200 hover:border-emerald-300 transition">
                <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-sm mb-3 sm:mb-4">
                  0{idx + 1}
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-1.5 sm:mb-2">{feat.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <RelatedServicesSection currentService="ecommerce-development" />
      <FaqSection />
    </div>
  );
}
