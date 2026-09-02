import Link from 'next/link';
import CostCalculator from '../../components/CostCalculator';
import RelatedServicesSection from '../../components/RelatedServicesSection';
import FaqSection from '../../components/FaqSection';
import { 
  Calculator, 
  Sparkles, 
  ShieldCheck, 
  Zap, 
  Clock, 
  CheckCircle2, 
  ArrowRight, 
  Globe, 
  Smartphone, 
  Video, 
  Share2, 
  Lock,
  DollarSign,
  TrendingUp,
  HelpCircle
} from 'lucide-react';

export default function CalculatorPage() {
  const calculatorBenefits = [
    {
      title: '100% Transparent Price Breakdown',
      desc: 'No hidden hosting charges, sudden renewal invoices, or unexpected developer setup fees.',
      icon: ShieldCheck,
      color: 'text-violet-700 bg-violet-100',
    },
    {
      title: '350 Free Daily Transactional Emails',
      desc: 'All website packages include built-in Gmail API lead and order notification routing at ₹0 extra cost.',
      icon: Zap,
      color: 'text-pink-700 bg-pink-100',
    },
    {
      title: 'Fast 7 to 10 Days Agile Turnaround',
      desc: 'We follow structured engineering sprints with interactive staging previews on your smartphone.',
      icon: Clock,
      color: 'text-emerald-700 bg-emerald-100',
    },
    {
      title: '100% Full Source Code Rights',
      desc: 'You own complete rights to your codebase, database, and creatives with zero monthly holding fees.',
      icon: Lock,
      color: 'text-sky-700 bg-sky-100',
    },
  ];

  const pricingTableData = [
    {
      type: 'Starter Business Website (5 Pages)',
      price: '₹3,999',
      duration: '7 Days',
      bestFor: 'Small Businesses, Local Shops & Personal Portfolios',
      link: '/services/website-development'
    },
    {
      type: 'Business Website & Management (10 Pages)',
      price: '₹7,999',
      duration: '7–10 Days',
      bestFor: 'Growing Businesses, Catalogs, UPI Gateway & Portals',
      link: '/services/website-development'
    },
    {
      type: 'Professional Business System (Server + Domain Included)',
      price: '₹17,999',
      duration: '10–14 Days',
      bestFor: 'Startups, Institutes, High-Traffic & Custom Portals',
      link: '/services/website-development'
    },
    {
      type: 'E-Commerce Online Shopping Store',
      price: '₹8,999',
      duration: '7–10 Days',
      bestFor: 'Online Retailers, Brand Stores with Razorpay UPI',
      link: '/services/ecommerce-development'
    },
    {
      type: 'Android Mobile Application (.APK)',
      price: '₹12,999',
      duration: '14–18 Days',
      bestFor: 'Play Store Ready Apps, Push Alerts & Cloud API',
      link: '/services/mobile-app-development'
    },
    {
      type: 'Cross-Platform Mobile App (Android + iOS)',
      price: '₹24,999',
      duration: '18–24 Days',
      bestFor: 'Flutter Native Builds, Live Tracking & Admin',
      link: '/services/mobile-app-development'
    },
  ];

  return (
    <div className="w-full max-w-full overflow-hidden bg-white">
      {/* 1. Header Banner */}
      <section className="pt-8 pb-4 sm:pt-14 sm:pb-6 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-bold uppercase tracking-wider mb-4 shadow-2xs">
          <Calculator className="w-3.5 h-3.5 text-teal-600" /> Instant Project Cost Estimator India
        </div>

        {/* Primary Semantic H1 */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-3 leading-tight">
          Website & Mobile App <span className="gradient-text-purple">Cost Calculator</span>
        </h1>

        <p className="text-slate-600 text-xs sm:text-base max-w-2xl mx-auto leading-relaxed">
          Configure your business website, e-commerce store, coaching portal, or mobile app below for an instant, transparent itemized quote starting from <strong className="text-emerald-700 font-bold">₹3,999</strong>. Zero hidden agency markups.
        </p>
      </section>

      {/* 2. Interactive Calculator Tool */}
      <CostCalculator />

      {/* 3. Why Calculate with SiteMint Value Grid */}
      <section className="py-12 sm:py-16 bg-slate-50/70 border-t border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-2">
              Why Indian Businesses Choose <span className="gradient-text-hero">SiteMint Pricing</span>
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm">
              We eliminate traditional agency overheads to bring you production-grade software with transparent milestones.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-10">
            {calculatorBenefits.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="glass-card p-5 border border-slate-200 bg-white rounded-2xl flex flex-col justify-between">
                  <div>
                    <div className={`w-9 h-9 rounded-xl ${item.color} flex items-center justify-center font-bold text-sm mb-3`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-sm font-bold text-slate-900 mb-1.5">{item.title}</h3>
                    <p className="text-[11px] text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Quick Pricing Reference Table */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm">
            <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-violet-600" />
              Standard Project Cost & Timeline Benchmark (India 2025)
            </h3>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-slate-200 text-slate-500 uppercase text-[10px] tracking-wider font-bold">
                    <th className="py-2.5 px-3">Service & Package</th>
                    <th className="py-2.5 px-3">Starting Price</th>
                    <th className="py-2.5 px-3">Delivery Timeline</th>
                    <th className="py-2.5 px-3">Best Recommended For</th>
                    <th className="py-2.5 px-3">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  {pricingTableData.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/80 transition">
                      <td className="py-3 px-3 font-semibold text-slate-900">{row.type}</td>
                      <td className="py-3 px-3 font-extrabold text-emerald-700">{row.price}</td>
                      <td className="py-3 px-3 text-slate-600">{row.duration}</td>
                      <td className="py-3 px-3 text-slate-500 text-[11px]">{row.bestFor}</td>
                      <td className="py-3 px-3">
                        <Link href={row.link} className="text-violet-700 hover:text-violet-900 font-bold inline-flex items-center gap-1 text-[11px]">
                          <span>View</span>
                          <ArrowRight className="w-3 h-3" />
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Related Digital Services Interlinking */}
      <RelatedServicesSection currentService="calculator" />

      {/* 5. FAQs on Pricing & Cost Calculation */}
      <FaqSection />
    </div>
  );
}
