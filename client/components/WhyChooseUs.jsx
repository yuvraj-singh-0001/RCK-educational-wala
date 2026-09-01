import { 
  Globe, 
  Smartphone, 
  Video, 
  Share2, 
  Wallet, 
  Clock, 
  ShieldCheck, 
  Headphones,
  Award,
  CheckCircle2
} from 'lucide-react';

export default function WhyChooseUs() {
  const reasons = [
    {
      title: 'Full-Stack Web & Software Dev',
      desc: 'Next.js 15 & React powered business websites, e-commerce stores with UPI checkout & custom cloud CRM portals.',
      icon: Globe,
      color: 'text-violet-700 bg-violet-100',
    },
    {
      title: 'Native & Hybrid Mobile Apps',
      desc: 'Android (.APK) & iOS apps built with Flutter, featuring Firebase push notifications, OTP login, and Play Store readiness.',
      icon: Smartphone,
      color: 'text-pink-700 bg-pink-100',
    },
    {
      title: 'High-Retention Video Editing',
      desc: 'Viral Instagram Reels, YouTube Shorts, commercial business ads, cinema-grade color grading, and dynamic subtitles.',
      icon: Video,
      color: 'text-rose-700 bg-rose-100',
    },
    {
      title: '7+ Platforms Social Media Growth',
      desc: 'Daily custom graphic designs, SEO captions, city-targeted hashtags, community DM handling, and high-ROI Meta ads.',
      icon: Share2,
      color: 'text-emerald-700 bg-emerald-100',
    },
    {
      title: 'Transparent Pricing from ₹3,999',
      desc: 'Zero hidden costs, no surprise renewal bills, and itemized packages designed for startups, creators & small businesses.',
      icon: Wallet,
      color: 'text-teal-700 bg-teal-100',
    },
    {
      title: 'Fast 7 to 14 Days Turnaround',
      desc: 'Agile delivery process with live interactive previews on your phone before final deployment and launch.',
      icon: Clock,
      color: 'text-amber-700 bg-amber-100',
    },
    {
      title: '100% Code & Asset Ownership',
      desc: 'You own complete rights to your source code, databases, video exports, and creative graphics with zero vendor lock-in.',
      icon: ShieldCheck,
      color: 'text-indigo-700 bg-indigo-100',
    },
    {
      title: 'Dedicated Post-Launch Support',
      desc: 'Complimentary maintenance, bug fixes, content updates, and prompt 1-on-1 assistance directly on WhatsApp.',
      icon: Headphones,
      color: 'text-sky-700 bg-sky-100',
    },
  ];

  return (
    <section id="why-us" className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-violet-50 border border-violet-200 text-violet-800 text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-3 sm:mb-4 shadow-2xs">
            <Award className="w-3.5 h-3.5 text-violet-600" /> Proven Agency Standards
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-2 sm:mb-4">
            Why Choose <span className="gradient-text-hero">SiteMint?</span>
          </h2>
          <p className="text-slate-600 text-xs sm:text-base">
            From modern web & mobile app engineering to viral video production and full-scale social media management.
          </p>
        </div>

        {/* 8 Reason Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {reasons.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="glass-card p-5 sm:p-6 border border-slate-200 hover:border-violet-300 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-2.5 rounded-2xl ${item.color} group-hover:scale-105 transition-transform shadow-2xs`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  </div>

                  <h3 className="text-base font-bold text-slate-900 mb-1.5 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
