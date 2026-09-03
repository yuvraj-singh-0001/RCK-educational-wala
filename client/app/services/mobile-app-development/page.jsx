import Link from 'next/link';
import { 
  Smartphone, 
  CheckCircle2, 
  MessageCircle, 
  Zap, 
  ShieldCheck, 
  ArrowRight,
  Layers,
  Cpu,
  Download,
  Bell,
  Calculator
} from 'lucide-react';
import RelatedServicesSection from '../../../components/RelatedServicesSection';
import FaqSection from '../../../components/FaqSection';

export const metadata = {
  title: 'Android & iOS Mobile App Development in India | SiteMint',
  description: 'Custom Android and iOS mobile app development for startups and businesses. PlayStore ready, push notifications, offline support, and backend API integration starting at ₹12,999.',
  keywords: [
    'mobile app development india',
    'android app development cost',
    'hybrid mobile app maker',
    'affordable app development company',
    'play store ready mobile app',
    'react native flutter app developer'
  ],
  alternates: {
    canonical: 'https://sitemint.in/services/mobile-app-development',
  },
  openGraph: {
    title: 'Mobile App Development in India | Starting ₹12,999 | SiteMint',
    description: 'Custom Android and iOS apps with push notifications, backend database, and Play Store publishing.',
    url: 'https://sitemint.in/services/mobile-app-development',
  },
};

export default function MobileAppDevelopmentPage() {
  const appFeatures = [
    {
      title: 'Android (.APK) & PlayStore Ready',
      desc: 'Complete production-ready build with signing certificates, compliant with the latest Google Play Store requirements.',
    },
    {
      title: 'Instant Push Notifications Engine',
      desc: 'Send rich alerts, discount offers, order updates, and breaking news directly to your users’ phone lock screens.',
    },
    {
      title: 'Offline Data Sync & Lightning Fast UI',
      desc: 'Built using modern mobile frameworks for smooth 60fps animations, intuitive gesture navigation, and offline caching.',
    },
    {
      title: 'Secure Payment Gateway & OTP Login',
      desc: 'Fast 1-tap phone number OTP login with seamless Razorpay, UPI, and card payment checkout integrated natively.',
    },
    {
      title: 'Admin Control Dashboard Included',
      desc: 'Manage app banners, send push notifications, view active users, and update content in real-time from a simple web admin panel.',
    },
    {
      title: '6 Months Free Bug Fixes & Support',
      desc: 'We provide 6 months of comprehensive post-launch warranty and technical maintenance for peace of mind.',
    },
  ];

  return (
    <div className="w-full pt-6 pb-12 sm:pt-10 sm:pb-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-center mb-12 sm:mb-16">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-50 border border-pink-200 text-pink-800 text-xs font-bold uppercase tracking-wider mb-4 sm:mb-5 shadow-2xs">
              <Smartphone className="w-3.5 h-3.5 text-pink-600" /> Mobile App Studio
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-4 sm:mb-5 tracking-tight">
              High-Performance <span className="gradient-text-hero">Mobile App Development</span>
            </h1>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8 font-normal">
              Turn your business into an app in your customer’s pocket. We engineer native-feel Android & iOS apps with push notifications, instant OTP login, and seamless checkout.
            </p>

            <div className="flex flex-wrap gap-3 sm:gap-4 mb-6 sm:mb-8">
              <a
                href="https://wa.me/918920683588?text=Hi%20SiteMint!%20I%20want%20to%20develop%20a%20Mobile%20App%20for%20my%20business.%20Please%20guide%20me."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp text-xs sm:text-sm !py-2.5 sm:!py-3 !px-5 sm:!px-6 shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Discuss App Idea on WhatsApp</span>
              </a>

              <Link
                href="/calculator"
                className="btn-secondary text-xs sm:text-sm !py-2.5 sm:!py-3 !px-5 sm:!px-6 flex items-center gap-2"
              >
                <Calculator className="w-4 h-4 text-violet-600" />
                <span>Calculate App Cost</span>
              </Link>
            </div>

            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-slate-500 font-semibold">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-pink-600" /> 14–21 Days Delivery
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-pink-600" /> Android .APK & Source Code
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-pink-600" /> Push Notifications
              </span>
            </div>
          </div>

          {/* Pricing Box */}
          <div className="lg:col-span-5">
            <div className="glass-card p-5 sm:p-8 bg-slate-900 text-white border border-slate-800 shadow-xl shadow-slate-900/20">
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <span className="text-xs uppercase font-bold tracking-wider text-pink-400">Complete App Suite</span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  Ready in 18 Days
                </span>
              </div>

              <div className="text-3xl sm:text-4xl font-extrabold text-white mb-1">
                ₹12,999 <span className="text-xs text-slate-400 font-sans font-normal">(One-time fee)</span>
              </div>
              <p className="text-xs text-slate-400 mb-5 sm:mb-6">
                Custom Android application + Admin Dashboard backend.
              </p>

              <div className="space-y-2 sm:space-y-2.5 text-xs text-slate-300 mb-5 sm:mb-6 border-t border-b border-slate-800 py-4">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-pink-400 shrink-0" />
                  <span>Custom Android App (.APK Build & PlayStore Ready)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-pink-400 shrink-0" />
                  <span>Cloud Database & REST API Backend Included</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-pink-400 shrink-0" />
                  <span>Unlimited Firebase Push Notifications</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-pink-400 shrink-0" />
                  <span>Razorpay / UPI In-App Payment Setup</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-pink-400 shrink-0" />
                  <span>6 Months Technical Maintenance & Source Code</span>
                </div>
              </div>

              <a
                href="https://wa.me/918920683588?text=Hi%20SiteMint!%20I%20want%20to%20order%20the%20Mobile%20App%20Development%20Package."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp w-full justify-center text-xs sm:text-sm py-3"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Book App Development</span>
              </a>
            </div>
          </div>
        </div>

        {/* Features List */}
        <div className="mb-14 sm:mb-20">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 mb-2 sm:mb-3 tracking-tight">
              Enterprise Mobile Features <span className="gradient-text-hero">For Growing Startups</span>
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm">
              We focus on retention, smooth user onboarding, and zero-crash architectures.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {appFeatures.map((feat, idx) => (
              <div key={idx} className="glass-card p-5 sm:p-6 border border-slate-200 hover:border-pink-300 transition">
                <div className="w-9 h-9 rounded-xl bg-pink-100 text-pink-700 flex items-center justify-center font-bold text-sm mb-3 sm:mb-4">
                  0{idx + 1}
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-1.5 sm:mb-2">{feat.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <RelatedServicesSection currentService="mobile-app-development" />
      <FaqSection />
    </div>
  );
}
