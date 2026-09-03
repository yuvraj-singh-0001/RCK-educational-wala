import Link from 'next/link';
import { 
  Video, 
  CheckCircle2, 
  MessageCircle, 
  Sparkles, 
  Film, 
  Play, 
  Smartphone, 
  Clock, 
  ShieldCheck,
  Calculator,
  ArrowRight,
  TrendingUp,
  Tv
} from 'lucide-react';
import RelatedServicesSection from '../../../components/RelatedServicesSection';
import FaqSection from '../../../components/FaqSection';

export const metadata = {
  title: 'Professional Video Editing & Reels Creation Services in India | SiteMint',
  description: 'High-converting video editing services for businesses, creators, and brands. Instagram Reels, YouTube videos, Commercial Ads, and Motion Graphics with 24-48 hour turnaround.',
  keywords: [
    'video editing services india',
    'instagram reels editor for business',
    'youtube video editing agency',
    'commercial video ads maker',
    'short form video editing service',
    'professional video editor low budget'
  ],
  alternates: {
    canonical: 'https://sitemint.in/services/video-editing',
  },
  openGraph: {
    title: 'Professional Video Editing & Motion Graphics | SiteMint',
    description: 'Instagram Reels, YouTube video editing, and commercial product ads for businesses and creators.',
    url: 'https://sitemint.in/services/video-editing',
  },
};

export default function VideoEditingServicePage() {
  const videoTypes = [
    {
      title: 'Instagram Reels & YouTube Shorts',
      desc: 'Engaging, fast-paced vertical videos with animated captions, trending sounds, dynamic sound effects (SFX), and retention hooks.',
      icon: Smartphone,
      color: 'text-pink-700 bg-pink-100',
    },
    {
      title: 'Commercial Business Ads & Promos',
      desc: 'High-converting video ads for Facebook Ads, Instagram Ads, and Google Ads designed specifically to generate leads and sales.',
      icon: Sparkles,
      color: 'text-violet-700 bg-violet-100',
    },
    {
      title: 'YouTube Long-Form & Podcast Editing',
      desc: 'Full cutdowns, multi-camera syncing, B-roll insertions, chapter markers, lower thirds, and custom engaging thumbnail design.',
      icon: Play,
      color: 'text-rose-700 bg-rose-100',
    },
    {
      title: 'Corporate Explainers & Product Demos',
      desc: 'Sleek product showcase videos, 2D motion graphics, software walkthroughs, and brand story videos with professional voiceovers.',
      icon: Film,
      color: 'text-sky-700 bg-sky-100',
    },
  ];

  return (
    <div className="w-full pt-6 pb-12 sm:pt-10 sm:pb-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-center mb-12 sm:mb-16">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-50 border border-pink-200 text-pink-800 text-xs font-bold uppercase tracking-wider mb-4 sm:mb-5 shadow-2xs">
              <Video className="w-3.5 h-3.5 text-pink-600" /> High-Engagement Video Production
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-4 sm:mb-5 tracking-tight">
              Grow Your Brand with <span className="gradient-text-hero">Professional Video Editing</span>
            </h1>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8 font-normal">
              Video is the #1 tool for customer attention. We edit viral Instagram Reels, YouTube videos, and high-converting commercial video ads that turn viewers into paying customers.
            </p>

            <div className="flex flex-wrap gap-3 sm:gap-4 mb-6 sm:mb-8">
              <a
                href="https://wa.me/918920683588?text=Hi%20SiteMint!%20I%20want%20to%20get%20Video%20Editing%20services%20for%20my%20business."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp text-xs sm:text-sm !py-2.5 sm:!py-3 !px-5 sm:!px-6 shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Discuss Video Editing on WhatsApp</span>
              </a>

              <Link
                href="/calculator"
                className="btn-secondary text-xs sm:text-sm !py-2.5 sm:!py-3 !px-5 sm:!px-6 flex items-center gap-2"
              >
                <Calculator className="w-4 h-4 text-violet-600" />
                <span>Get Package Quote</span>
              </Link>
            </div>

            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-slate-500 font-semibold">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-pink-600" /> 24–48 Hours Turnaround
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-pink-600" /> 4K Ultra HD Export
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-pink-600" /> Sound Design & Captions Included
              </span>
            </div>
          </div>

          {/* Pricing Box */}
          <div className="lg:col-span-5">
            <div className="glass-card p-5 sm:p-8 bg-slate-900 text-white border border-slate-800 shadow-xl shadow-slate-900/20">
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <span className="text-xs uppercase font-bold tracking-wider text-pink-400">Video Content Package</span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  Custom Monthly / Per Video
                </span>
              </div>

              <div className="text-3xl sm:text-4xl font-extrabold text-white mb-1">
                Flexible Plans <span className="text-xs text-slate-400 font-sans font-normal">(Starting ₹499/reel)</span>
              </div>
              <p className="text-xs text-slate-400 mb-5 sm:mb-6">
                Professional post-production with subtitles, b-rolls & SFX.
              </p>

              <div className="space-y-2 sm:space-y-2.5 text-xs text-slate-300 mb-5 sm:mb-6 border-t border-b border-slate-800 py-4">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-pink-400 shrink-0" />
                  <span>Dynamic Animated Subtitles (Hormozi / Ali Abdaal Style)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-pink-400 shrink-0" />
                  <span>Licensed Background Music & Sound Effects (SFX)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-pink-400 shrink-0" />
                  <span>Color Grading & Audio Noise Removal</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-pink-400 shrink-0" />
                  <span>Relevant Stock Footage & B-Roll Insertions</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-pink-400 shrink-0" />
                  <span>2 Free Revision Rounds per video</span>
                </div>
              </div>

              <a
                href="https://wa.me/918920683588?text=Hi%20SiteMint!%20I%20want%20to%20order%20Video%20Editing%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp w-full justify-center text-xs sm:text-sm py-3"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Book Video Editing on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Video Types Grid */}
        <div className="mb-14 sm:mb-20">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 mb-2 sm:mb-3 tracking-tight">
              Types of Video Content <span className="gradient-text-hero">We Edit</span>
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm">
              From fast social media reels to high-production commercial product ads.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            {videoTypes.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="glass-card p-6 border border-slate-200 hover:border-pink-300 transition flex items-start gap-4">
                  <div className={`p-3 rounded-2xl ${item.color} shrink-0`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900 mb-1.5">{item.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <RelatedServicesSection currentService="video-editing" />
      <FaqSection />
    </div>
  );
}
