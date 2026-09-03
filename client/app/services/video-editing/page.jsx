'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  Video, 
  CheckCircle2, 
  XCircle, 
  MessageCircle, 
  Phone, 
  Mail, 
  Sparkles, 
  Zap, 
  ShieldCheck, 
  Clock, 
  ArrowRight, 
  Calculator, 
  Layers, 
  Film, 
  Play, 
  Smartphone, 
  TrendingUp, 
  SlidersHorizontal,
  Award,
  CheckCheck,
  Flame,
  Tv,
  Volume2,
  Wand2,
  Scissors,
  Palette,
  Eye,
  Check,
  ChevronRight,
  Headphones,
  FileVideo,
  MonitorPlay,
  RotateCcw,
  Camera,
  Share2
} from 'lucide-react';
import RelatedServicesSection from '../../../components/RelatedServicesSection';
import FaqSection from '../../../components/FaqSection';

export default function VideoEditingServicePage() {
  const [activePlanTab, setActivePlanTab] = useState('growth');
  const [activeStyleTab, setActiveStyleTab] = useState('reels');
  const [simulatedPreview, setSimulatedPreview] = useState('reels');

  const videoPlans = {
    starter: {
      id: 'starter',
      name: 'Starter Reels Pack',
      badge: 'ENTRY CREATOR PACK',
      badgeColor: 'bg-slate-100 text-slate-800 border-slate-300',
      price: '₹3,999',
      unitPrice: '₹399 / Reel (Batch of 10) or ₹499 Single',
      regularPrice: '₹8,000',
      discount: '50% OFF',
      period: 'Batch of 10 Reels / Shorts',
      target: 'Ideal for local business owners, doctors, real estate agents, tutors, and solo creators building consistent weekly Instagram & YouTube presence.',
      turnaround: '24–48 Hours Turnaround per Reel',
      revisionsText: '2 Free Revision Rounds per video',
      whatsappMsg: 'Hi SiteMint! I want to order the Starter Reels Pack (10 Reels for ₹3,999). Please share upload instructions.',
      keyPoints: [
        '10 High-Engagement Vertical Reels / Shorts (Up to 60s each)',
        'Dynamic Animated Pop-Up Subtitles (Hormozi / Ali Abdaal style)',
        'Strategic Sound Effects (Whoosh, Pop, Cash Register, Ding)',
        'Licensed Copyright-Safe Trending Background Audio Sync',
        'Audio Noise Denoising & Speech Clarity EQ Enhancement',
        'Relevant 4K Stock Footage & Meme B-Roll Insertions',
        'Fast Jump Cuts & Dead-Air Removal for Maximum Viewer Retention',
        '24–48 Hours Fast Delivery via Google Drive Link',
        '2 Free Revision Cycles per video for 100% satisfaction',
        'Exported in 1080x1920 Full HD 60fps (Instagram & YouTube Ready)',
      ],
      exclusions: [
        'Raw video shooting / camera recording is not included (client provides raw clips)',
        'YouTube long-form videos (>3 mins) require the Growth or Commercial tier',
        'Advanced 3D character animation requires custom project quotation',
      ],
    },
    growth: {
      id: 'growth',
      name: 'Creator & Brand Growth Pack',
      badge: 'MOST POPULAR • BEST ROI ⭐',
      badgeColor: 'bg-rose-50 text-rose-700 border-rose-300',
      price: '₹7,499',
      unitPrice: '20 Viral Reels + 2 YouTube Long Videos',
      regularPrice: '₹16,000',
      discount: '53% OFF',
      period: 'Monthly Content Engine (22 Total Videos)',
      target: 'Designed for coaching institutes, D2C e-commerce brands, active influencers, and podcasts aiming for daily social media dominance and lead generation.',
      turnaround: '24 Hours Express Turnaround',
      revisionsText: 'Unlimited Minor Revisions & Direct Slack/WhatsApp Support',
      whatsappMsg: 'Hi SiteMint! I want to get the Creator & Brand Growth Pack (₹7,499/month). Please share workflow details.',
      keyPoints: [
        '20 Viral High-Retention Reels/Shorts + 2 Long-Form YouTube Videos (Up to 12 mins)',
        'Custom Kinetic Typography with Highlighted Keywords & Emojis',
        'Cinema-Grade Color Grading (LUTs tailored to skin tone & lighting)',
        'Multi-Layered Sound Design & SFX (Immersive Stereo Spatial Audio)',
        'Motion Graphics Lower Thirds, Social Handles & CTA Overlays',
        'Curated 4K Premium Stock B-Rolls, Screen Recordings & Infographics',
        'Viral Hook Restructuring to Boost 3-Second Retention Rate',
        'Custom High-CTR YouTube Thumbnail & Instagram Cover Designs Included',
        'Dedicated Video Editor Assigned to Your Brand Style',
        '24-Hour Express Turnaround per video batch',
        'Unlimited Minor Revisions until final publishing approval',
      ],
      exclusions: [
        'On-site physical camera crew not included (digital remote editing studio)',
        'Long podcasts exceeding 45 minutes per episode quoted separately',
      ],
    },
    commercial: {
      id: 'commercial',
      name: 'Commercial Ads & Corporate Suite',
      badge: 'MAXIMUM CONVERSION ADS 🚀',
      badgeColor: 'bg-violet-50 text-violet-700 border-violet-300',
      price: '₹14,999',
      unitPrice: 'Complete High-Converting Performance Ad Suite',
      regularPrice: '₹32,000',
      discount: '53% OFF',
      period: 'Monthly Enterprise Retainer / 30+ Assets',
      target: 'Built for funded startups, corporate brands, and performance marketing agencies running high-spend Meta & Google Video Ad campaigns.',
      turnaround: 'Same-Day / 24-Hour Priority Queue',
      revisionsText: 'Unlimited Revisions & Dedicated Senior Creative Director',
      whatsappMsg: 'Hi SiteMint! I want to discuss the Commercial Ads & Corporate Video Suite (₹14,999). Please share demo showreel.',
      keyPoints: [
        '30 High-Performing Short-Form Ads + 4 Long-Form Commercial Videos',
        'A/B Hook Variations (3 different opening hooks per ad to test ROI)',
        '2D Motion Graphics, Logo Reveals & Product Animation Explanations',
        'Multi-Camera Syncing & High-End Podcast Multicam Switching',
        'DaVinci Resolve Cinema Studio Color Science (Rec.709 & HDR)',
        'Professional AI / Human Voiceover Audio Mastering & Mixing',
        'Multi-Format Exports: 9:16 (Reels/TikTok), 1:1 (Square), 16:9 (YouTube Ads)',
        'Performance Marketing Ad Optimization (Tested for Low CPM & High CTR)',
        'Dedicated Senior Post-Production Lead + Same-Day Priority Delivery',
        'Full Project File Archive (.prproj / .drp) Transfer on request',
      ],
      exclusions: [
        'Live filming location charges & actor fees (client provides footage/product)',
      ],
    },
  };

  const interactiveStyles = {
    reels: {
      category: 'SHORT-FORM VIRAL REELS',
      title: 'Hormozi & Iman Gadzhi Style Viral Reels',
      subtitle: 'Fast-paced, hook-driven vertical videos optimized to capture mobile viewers in the first 2 seconds and retain watch time above 85%.',
      features: [
        'Animated Kinetic Pop-up Words with Dynamic Word-by-Word Colors',
        'Impact Sound Effects (Whooshes, Pops, Bass Drops & Riser Transitions)',
        'Relevant Meme Insertions, Sound Bites & 4K Curated B-Rolls',
        'Tight Pacing & Jump Cuts eliminating all pauses and breathing gaps',
      ],
      aspectRatio: '9:16 Vertical (1080x1920)',
      targetPlatform: 'Instagram Reels, YouTube Shorts, Facebook Reels',
      sampleHook: '"Stop wasting ₹50,000 on slow websites! Here is the secret..."',
      renderBadge: '85%+ Retention Engine',
    },
    ads: {
      category: 'HIGH-CONVERTING E-COMMERCE ADS',
      title: 'Meta & Google Performance Video Ads',
      subtitle: 'Engineered specifically for low Cost-Per-Click (CPC) and high Return on Ad Spend (ROAS) on Instagram Ads and Facebook Ads.',
      features: [
        'Dynamic 3-Second Problem-Agitate-Solve Hook Variations',
        'On-Screen Discount Badges, Star Ratings & Social Proof Overlays',
        'Clean Product Feature Zoom-Ins & Macro Texture Showcases',
        'High-Urgency Call-To-Action (CTA) End Screens driving 1-tap checkout',
      ],
      aspectRatio: '9:16 Story / 1:1 Feed / 16:9 Landscape',
      targetPlatform: 'Meta Ads Manager, Google Video Ads, TikTok',
      sampleHook: '"This ₹499 tool doubled our online orders in 7 days..."',
      renderBadge: 'ROAS Maximizer',
    },
    podcast: {
      category: 'LONG-FORM YOUTUBE & PODCASTS',
      title: 'Multi-Camera YouTube & Podcast Cutdowns',
      subtitle: 'Transform lengthy raw conversations into crisp, cinematic YouTube episodes and 10+ bite-sized viral shorts for multi-platform distribution.',
      features: [
        'Seamless Multi-Angle Camera Switching based on Speaker Detection',
        'Professional Audio Denoising, Leveling & Studio Room Reverb Removal',
        'Engaging Lower-Third Guest Titles, Chapter Timestamps & B-Roll Overlays',
        'Clickable High-Contrast YouTube Thumbnail Designs Included',
      ],
      aspectRatio: '16:9 Widescreen 4K + 9:16 Cutdowns',
      targetPlatform: 'YouTube Channel, Spotify Video, Apple Podcasts',
      sampleHook: '"The truth about Indian startups in 2026..."',
      renderBadge: 'Multi-Cam Mastered',
    },
    motion: {
      category: '2D MOTION GRAPHICS & CORPORATE',
      title: 'Sleek Corporate Explainers & Product Demos',
      subtitle: 'Explain complex software features, SaaS dashboards, and company roadmaps with clean 2D animations and premium typography.',
      features: [
        'Custom Vector Icon Animations & UI Screen Walkthroughs',
        'Smooth Kinetic Typography & Dynamic Infographic Data Charts',
        'Studio Voiceover Integration with Background Ambient Scoring',
        'Brand Color Palette & Logo Animation Integration',
      ],
      aspectRatio: '16:9 Landscape Full HD / 4K',
      targetPlatform: 'Website Hero Section, LinkedIn, Investor Pitches',
      sampleHook: '"How SiteMint automates your business ordering in 3 steps..."',
      renderBadge: 'Corporate Grade',
    },
  };

  const coreCapabilities = [
    {
      num: '01',
      icon: Wand2,
      title: 'Dynamic Kinetic Captions',
      desc: 'Auto-highlighted words with vibrant yellow/green strokes, emojis, and bouncing text that keep mobile viewers glued to your screen even with sound muted.',
      badge: 'Hormozi Style',
      badgeColor: 'bg-rose-100 text-rose-800 border-rose-300',
      borderClass: 'border-2 border-rose-300 hover:border-rose-500 shadow-sm hover:shadow-rose-500/10',
      preview: {
        type: 'captions',
        title: 'Word-by-Word Highlight',
        subtitle: 'Auto-Emojis & Color Accents',
        tag: 'Subtitles 2.0'
      }
    },
    {
      num: '02',
      icon: Palette,
      title: 'Cinema-Grade Color Grading',
      desc: 'Expert color correction using DaVinci Resolve color science. We balance skin tones, enhance dynamic range, and apply rich filmic LUTs for a high-budget aesthetic.',
      badge: 'DaVinci LUTs',
      badgeColor: 'bg-violet-100 text-violet-800 border-violet-300',
      borderClass: 'border-2 border-violet-300 hover:border-violet-500 shadow-sm hover:shadow-violet-500/10',
      preview: {
        type: 'color',
        title: 'Rec.709 & Filmic Look',
        subtitle: 'Natural Skin Tones & High Contrast',
        tag: 'Color Science'
      }
    },
    {
      num: '03',
      icon: Headphones,
      title: 'Immersive Sound Design & SFX',
      desc: 'We layer cinematic whooshes, pops, mouse clicks, camera shutters, and licensed royalty-free music, mastering voice frequencies for podcast-quality audio punch.',
      badge: 'Zero Copyright Strike',
      badgeColor: 'bg-sky-100 text-sky-800 border-sky-300',
      borderClass: 'border-2 border-sky-300 hover:border-sky-500 shadow-sm hover:shadow-sky-500/10',
      preview: {
        type: 'audio',
        title: 'Audio Denoise & Spatial EQ',
        subtitle: 'Pops, Whooshes & Background Beats',
        tag: 'Sound Design'
      }
    },
    {
      num: '04',
      icon: Scissors,
      title: 'High-Retention Pacing & Jump Cuts',
      desc: 'We aggressively eliminate awkward pauses, breath gaps, and rambling sentences, cutting raw 10-minute footage into high-energy 45-second retention gold.',
      badge: '85%+ Watch Time',
      badgeColor: 'bg-amber-100 text-amber-800 border-amber-300',
      borderClass: 'border-2 border-amber-300 hover:border-amber-500 shadow-sm hover:shadow-amber-500/10',
      preview: {
        type: 'pacing',
        title: 'Dead-Air Removal',
        subtitle: 'Fast Zoom Cuts & Hook Trimming',
        tag: 'Pacing Pro'
      }
    },
    {
      num: '05',
      icon: Camera,
      title: 'Curated 4K Stock B-Roll & Memes',
      desc: 'Insert relevant high-resolution stock video footage, screen recordings, custom mockups, and viral pop-culture meme reactions to illustrate complex points visually.',
      badge: '4K Royalty Free',
      badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-300',
      borderClass: 'border-2 border-emerald-300 hover:border-emerald-500 shadow-sm hover:shadow-emerald-500/10',
      preview: {
        type: 'broll',
        title: 'Storytelling Visuals',
        subtitle: 'Product Zooms & Screen Captures',
        tag: 'Visual Assets'
      }
    },
    {
      num: '06',
      icon: MonitorPlay,
      title: 'High-CTR Thumbnails & Covers',
      desc: 'Every video comes with matching high-contrast Instagram Cover art and YouTube Click-Through Rate (CTR) thumbnail designs crafted to stand out in busy feeds.',
      badge: '+40% More Clicks',
      badgeColor: 'bg-indigo-100 text-indigo-800 border-indigo-300',
      borderClass: 'border-2 border-indigo-300 hover:border-indigo-500 shadow-sm hover:shadow-indigo-500/10',
      preview: {
        type: 'cover',
        title: 'Custom Cover Design',
        subtitle: 'Big Bold Typography & Cutouts',
        tag: 'CTR Booster'
      }
    },
  ];

  const editingPipeline = [
    {
      step: '01',
      title: 'Raw Footage Ingestion & Sync',
      days: 'Day 1 (Immediate)',
      desc: 'Upload your raw clips via Google Drive or Dropbox. We verify audio tracks, multi-cam angles, and generate automatic AI speech transcripts.',
      color: 'border-rose-400 text-rose-600 bg-rose-50',
      items: ['Google Drive Cloud Folder', 'Audio Waveform Sync', 'Script/Hook Review']
    },
    {
      step: '02',
      title: 'Story Cut & Retention Pacing',
      days: 'Day 2',
      desc: 'We trim dead air, eliminate filler words ("um", "ah"), create punchy jump-cuts, and craft the high-energy opening 3-second hook.',
      color: 'border-violet-400 text-violet-600 bg-violet-50',
      items: ['Hook Optimization', 'Fast Jump Cuts', 'Narrative Structuring']
    },
    {
      step: '03',
      title: 'Kinetic Subtitles & 4K B-Roll',
      days: 'Day 3',
      desc: 'We generate vibrant animated pop-up subtitles, match color keywords, insert curated 4K stock video footage, and position zoom graphics.',
      color: 'border-sky-400 text-sky-600 bg-sky-50',
      items: ['Animated Pop-up Text', 'Stock B-Roll Insertions', 'Dynamic Zoom Framing']
    },
    {
      step: '04',
      title: 'Sound Design & Cinema Color Grade',
      days: 'Day 4',
      desc: 'Applying DaVinci Resolve color science for rich contrast and layering whoosh/impact sound effects with licensed background beats.',
      color: 'border-emerald-400 text-emerald-600 bg-emerald-50',
      items: ['SFX Sound Layering', 'DaVinci LUT Color Grade', 'Voice Leveling & EQ']
    },
    {
      step: '05',
      title: '4K Render, Review & Handover',
      days: 'Days 4–5',
      desc: 'We render crisp 4K 60fps MP4 master files, send an instant WhatsApp preview link for your review, and make any requested revisions.',
      color: 'border-amber-400 text-amber-600 bg-amber-50',
      items: ['4K Ultra HD Export', 'Instant WhatsApp Review', 'Quick Revisions Cycle']
    },
  ];

  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://sitemint.in/#organization',
        name: 'SiteMint',
        url: 'https://sitemint.in',
        logo: {
          '@type': 'ImageObject',
          url: 'https://sitemint.in/sitemint_logo1.png',
        },
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+91-8920683588',
          contactType: 'customer service',
          areaServed: 'IN',
          availableLanguage: ['English', 'Hindi'],
        },
      },
      {
        '@type': 'Service',
        '@id': 'https://sitemint.in/services/video-editing#service',
        name: 'Professional Video Editing & Viral Reels Creation Services in India',
        serviceType: 'Video Production & Post-Production',
        provider: {
          '@id': 'https://sitemint.in/#organization',
        },
        areaServed: {
          '@type': 'Country',
          name: 'India',
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.9',
          reviewCount: '420',
          bestRating: '5',
          worstRating: '1',
        },
        description:
          'Professional video editing services starting at ₹499/reel. High-retention Instagram Reels, YouTube videos, Meta Video Ads, and Motion Graphics with 24–48 hour turnaround, animated subtitles, sound design, and color grading.',
        offers: [
          {
            '@type': 'Offer',
            name: 'Single Reel Editing',
            price: '499',
            priceCurrency: 'INR',
            availability: 'https://schema.org/InStock',
            validFrom: '2026-01-01',
          },
          {
            '@type': 'Offer',
            name: 'Starter Reels Pack (10 Reels)',
            price: '3999',
            priceCurrency: 'INR',
            availability: 'https://schema.org/InStock',
            validFrom: '2026-01-01',
          },
          {
            '@type': 'Offer',
            name: 'Creator & Brand Growth Pack (20 Reels + 2 YouTube)',
            price: '7499',
            priceCurrency: 'INR',
            availability: 'https://schema.org/InStock',
            validFrom: '2026-01-01',
          },
          {
            '@type': 'Offer',
            name: 'Commercial Ads & Corporate Suite',
            price: '14999',
            priceCurrency: 'INR',
            availability: 'https://schema.org/InStock',
            validFrom: '2026-01-01',
          },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'How much does video editing cost in India?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'At SiteMint, short-form video editing starts at ₹499 per single reel, or ₹3,999 for a Starter Batch of 10 Reels (₹399/reel). Our monthly Creator Growth Pack (20 Reels + 2 Long-Form YouTube Videos) is ₹7,499/month with 24-hour turnaround.',
            },
          },
          {
            '@type': 'Question',
            name: 'How do I send my raw footage to SiteMint?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'You simply upload your raw video files to a private Google Drive, Dropbox, or WeTransfer link that we set up for you. We download, organize, edit, and deliver final rendered 4K videos back to the same drive with instant WhatsApp notifications.',
            },
          },
          {
            '@type': 'Question',
            name: 'What is the delivery turnaround time?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Individual Reels and Shorts are delivered in 24–48 hours. For monthly retainer clients, we offer 24-hour express queue turnaround, ensuring your social media posting schedule is never interrupted.',
            },
          },
          {
            '@type': 'Question',
            name: 'Are animated subtitles and sound effects included?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes! All our video editing packages include dynamic animated pop-up captions (Hormozi / Ali Abdaal style), licensed copyright-free background music, sound design (SFX), color grading, and 4K export at no extra cost.',
            },
          },
          {
            '@type': 'Question',
            name: 'What raw formats and cameras are supported?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'We support all formats including iPhone 4K ProRes/HDR, Android MP4/MOV, Sony Alpha, Canon, Panasonic, GoPro, and screen recordings in 1080p, 4K, and 60fps.',
            },
          },
        ],
      },
    ],
  };

  const selectedPlan = videoPlans[activePlanTab];
  const selectedStyle = interactiveStyles[activeStyleTab];

  return (
    <div className="w-full pt-8 pb-16 sm:pt-12 sm:pb-24 bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16 sm:mb-20">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-50 border border-rose-200 text-rose-800 text-xs font-bold uppercase tracking-wider mb-4 shadow-2xs">
              <Film className="w-3.5 h-3.5 text-rose-600" />
              <span>High-Retention Video Post-Production</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-slate-900 leading-tight mb-4 tracking-tight font-sans">
              Turn Casual Viewers Into Paying Customers with <br className="hidden sm:inline" />
              <span className="gradient-text-hero">Viral Video Editing</span>
            </h1>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 font-normal max-w-2xl">
              Video is the #1 growth driver for modern businesses. We edit viral Instagram Reels, YouTube videos, Meta Video Ads, and corporate explainers with animated subtitles, punchy sound design, and cinema color science.
            </p>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-3 gap-3 mb-6 p-4 rounded-2xl bg-slate-50 border-2 border-slate-200/90 text-center">
              <div>
                <div className="text-lg sm:text-2xl font-black text-rose-600 font-mono">24–48h</div>
                <div className="text-[11px] text-slate-600 font-bold mt-0.5">Fast Turnaround</div>
              </div>
              <div className="border-x-2 border-slate-200">
                <div className="text-lg sm:text-2xl font-black text-slate-900 font-mono">₹499</div>
                <div className="text-[11px] text-slate-600 font-bold mt-0.5">Starting Per Reel</div>
              </div>
              <div>
                <div className="text-lg sm:text-2xl font-black text-emerald-600 font-mono">4K 60fps</div>
                <div className="text-[11px] text-slate-600 font-bold mt-0.5">Ultra HD Master</div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 sm:gap-4 mb-6">
              <a
                href="https://wa.me/918920683588?text=Hi%20SiteMint!%20I%20want%20to%20order%20Video%20Editing%20services%20for%20my%20business.%20Please%20share%20showreel%20and%20onboarding."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp text-xs sm:text-sm !py-3 !px-6 shadow-md font-bold flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Order Video Editing on WhatsApp</span>
              </a>

              <Link
                href="/calculator"
                className="btn-secondary text-xs sm:text-sm !py-3 !px-5 font-bold flex items-center gap-2"
              >
                <Calculator className="w-4 h-4 text-rose-600" />
                <span>Calculate Video Cost</span>
              </Link>
            </div>

            <div className="flex flex-wrap items-center gap-3 sm:gap-5 text-xs text-slate-500 font-medium">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Dynamic Pop-up Subtitles
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> SFX Sound Design Included
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> 2 Free Revision Cycles
              </span>
            </div>
          </div>

          {/* Desktop-Only Creative Visual Video Editing Simulator */}
          <div className="hidden lg:flex lg:col-span-5 flex-col items-center">
            <div className="w-full max-w-[340px] rounded-[38px] p-3 bg-slate-900 border-[6px] border-slate-800 shadow-2xl relative overflow-hidden text-white">
              
              {/* Dynamic Island Notch */}
              <div className="w-24 h-4 bg-slate-950 rounded-full mx-auto mb-2 flex items-center justify-center gap-2">
                <div className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
                <span className="text-[8px] font-mono text-slate-400">REC 4K</span>
              </div>

              {/* Video Mockup Screen */}
              <div className="rounded-[28px] bg-slate-950 p-4 border border-slate-800 relative space-y-3">
                
                {/* Header Video Preview Bar */}
                <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-rose-500" />
                    <span className="font-mono text-[10px] text-slate-300">timeline_v4.mp4</span>
                  </div>
                  <span className="px-2 py-0.5 rounded-full bg-rose-500/20 text-rose-300 font-mono text-[9px] font-bold">
                    00:45 / 60fps
                  </span>
                </div>

                {/* Simulated Reel Display */}
                <div className="h-48 rounded-2xl bg-gradient-to-br from-slate-900 via-rose-950/40 to-slate-900 border border-rose-500/30 p-3 flex flex-col justify-between relative overflow-hidden">
                  <div className="flex justify-between items-start">
                    <span className="px-2 py-0.5 rounded bg-black/60 text-[9px] font-mono text-amber-300 border border-amber-500/30">
                      ⚡ Hook Score: 98%
                    </span>
                    <span className="text-xs">🔥</span>
                  </div>

                  {/* Animated Pop-Up Subtitle Simulation */}
                  <div className="text-center space-y-1 my-auto">
                    <div className="inline-block px-2.5 py-1 rounded-lg bg-black/80 border border-white/20 text-xs font-black tracking-wide text-white shadow-lg">
                      "Stop Paying <span className="text-amber-300 uppercase">30% Commission</span>!" 🍰
                    </div>
                    <div className="text-[10px] font-bold text-rose-300">
                      [Whoosh SFX + Zoom In]
                    </div>
                  </div>

                  {/* Audio Waveform Track */}
                  <div className="space-y-1">
                    <div className="flex items-center justify-between text-[8px] font-mono text-slate-400">
                      <span>VOICE_EQ_BOOST</span>
                      <span className="text-emerald-400">-3dB NORMALIZED</span>
                    </div>
                    <div className="flex items-center gap-1 h-3 bg-slate-950/80 rounded-md px-1.5 border border-slate-800">
                      {[40, 75, 100, 60, 90, 45, 80, 100, 70, 85, 50, 95, 60, 40, 80, 100, 65, 90].map((h, i) => (
                        <div
                          key={i}
                          className="flex-1 bg-gradient-to-t from-rose-500 to-amber-400 rounded-xs"
                          style={{ height: `${h}%` }}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Micro Editor Specs Checklist */}
                <div className="grid grid-cols-2 gap-2 text-[10px]">
                  <div className="p-2 rounded-xl bg-slate-900 border border-slate-800">
                    <div className="font-bold text-rose-300">✂️ Jump Cuts</div>
                    <div className="text-slate-400 text-[9px]">Zero Dead Air</div>
                  </div>
                  <div className="p-2 rounded-xl bg-slate-900 border border-slate-800">
                    <div className="font-bold text-sky-300">🎨 DaVinci Color</div>
                    <div className="text-slate-400 text-[9px]">Filmic Skin LUT</div>
                  </div>
                </div>

                {/* WhatsApp Quick Trigger Button */}
                <a
                  href="https://wa.me/918920683588?text=Hi%20SiteMint!%20I%20want%20to%20send%20a%20sample%20video%20for%20editing."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold flex items-center justify-center gap-1.5 transition shadow-md"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Send Sample Clip for Edit</span>
                </a>
              </div>
            </div>
          </div>

          {/* Mobile-Only Fast Summary Box */}
          <div className="block lg:hidden col-span-1">
            <div className="p-5 rounded-3xl bg-slate-900 text-white border-2 border-rose-300 shadow-xl space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-rose-400 uppercase tracking-wider">Video Editing Retainers</span>
                <span className="text-[10px] font-mono bg-emerald-500/20 text-emerald-400 px-2.5 py-0.5 rounded-full border border-emerald-500/30">
                  Fast 24h Turnaround
                </span>
              </div>
              <div className="grid grid-cols-3 gap-2 text-center text-xs">
                <div className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700">
                  <div className="text-[10px] text-slate-400">Single</div>
                  <div className="font-bold text-white text-sm">₹499</div>
                  <div className="text-[9px] text-rose-400 font-mono">1 Reel</div>
                </div>
                <div className="p-2.5 rounded-xl bg-rose-950/80 border border-rose-500/50">
                  <div className="text-[10px] text-rose-300">Starter Pack</div>
                  <div className="font-bold text-white text-sm">₹3,999</div>
                  <div className="text-[9px] text-emerald-400 font-mono">10 Reels</div>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700">
                  <div className="text-[10px] text-slate-400">Growth Plan</div>
                  <div className="font-bold text-white text-sm">₹7,499</div>
                  <div className="text-[9px] text-amber-400 font-mono">20 Reels+YT</div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* 3 Transparent Transparent Pricing Packages */}
        <div className="mb-20 sm:mb-24">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-50 border border-rose-200 text-rose-800 text-xs font-bold uppercase tracking-wider mb-3 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-rose-600" />
              <span>Transparent Video Pricing</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 leading-tight font-sans">
              Choose Your Video Content Package <br className="hidden sm:inline" />
              <span className="gradient-text-hero">Zero Hidden Charges</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto mt-2">
              From single high-impact viral reels to complete monthly social media video retainers. Full 4K export and sound design included in all tiers.
            </p>
          </div>

          {/* Interactive Plan Tab Switcher */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 mb-8">
            {Object.keys(videoPlans).map((pKey) => {
              const p = videoPlans[pKey];
              const isSel = activePlanTab === pKey;
              return (
                <button
                  key={pKey}
                  onClick={() => setActivePlanTab(pKey)}
                  className={`px-4 sm:px-6 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
                    isSel
                      ? 'bg-rose-600 text-white shadow-md scale-105'
                      : 'bg-white text-slate-700 border border-slate-200 hover:border-rose-300 hover:bg-rose-50/40'
                  }`}
                >
                  <span>{pKey === 'starter' ? '🎬' : pKey === 'growth' ? '🔥' : '🚀'}</span>
                  <span>{p.name.split(' ')[0]} {p.name.split(' ')[1]}</span>
                  <span className={`text-[10px] px-2 py-0.5 rounded-full ${isSel ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-600'}`}>
                    {p.price}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Pricing Card Details */}
          <div className="p-6 sm:p-10 rounded-3xl bg-white border-2 border-slate-200 shadow-xl relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Plan Specifications */}
              <div className="lg:col-span-7">
                <div className="flex flex-wrap items-center gap-2.5 mb-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold border ${selectedPlan.badgeColor}`}>
                    {selectedPlan.badge}
                  </span>
                  <span className="text-xs font-mono font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                    {selectedPlan.discount}
                  </span>
                </div>

                <div className="flex items-baseline gap-3 mb-1">
                  <span className="text-3xl sm:text-5xl font-black text-slate-900 font-sans">{selectedPlan.price}</span>
                  <span className="text-sm sm:text-base text-slate-400 line-through font-mono">{selectedPlan.regularPrice}</span>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider font-mono">({selectedPlan.period})</span>
                </div>

                <p className="text-xs sm:text-sm text-rose-700 font-bold mb-4">
                  {selectedPlan.unitPrice}
                </p>

                <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                  {selectedPlan.target}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6">
                  <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200 flex items-center gap-2 text-xs">
                    <Clock className="w-4 h-4 text-rose-600 shrink-0" />
                    <span className="font-semibold text-slate-800">{selectedPlan.turnaround}</span>
                  </div>
                  <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200 flex items-center gap-2 text-xs">
                    <RotateCcw className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span className="font-semibold text-slate-800">{selectedPlan.revisionsText}</span>
                  </div>
                </div>

                <div className="space-y-2 mb-8">
                  {selectedPlan.keyPoints.map((pt, ptIdx) => (
                    <div key={ptIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  <a
                    href={`https://wa.me/918920683588?text=${encodeURIComponent(selectedPlan.whatsappMsg)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-whatsapp text-xs sm:text-sm !py-3 !px-6 font-bold shadow-sm inline-flex items-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Order {selectedPlan.name} on WhatsApp</span>
                  </a>

                  <Link
                    href="/calculator"
                    className="btn-secondary text-xs sm:text-sm !py-3 !px-5 font-bold inline-flex items-center gap-1.5"
                  >
                    <Calculator className="w-3.5 h-3.5 text-rose-600" />
                    <span>Calculate Custom Batch</span>
                  </Link>
                </div>
              </div>

              {/* Right Column: Creative Dark Tech Overview Panel */}
              <div className="lg:col-span-5">
                <div className="p-6 rounded-3xl bg-slate-950 text-white border border-slate-800 shadow-2xl space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs">
                    <span className="text-slate-400 font-mono">software_stack.v2</span>
                    <span className="px-2 py-0.5 rounded-full bg-rose-500/20 text-rose-300 text-[10px] font-bold">
                      Studio License
                    </span>
                  </div>

                  <div className="space-y-2.5 text-xs">
                    <div className="p-3 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-between">
                      <span className="font-bold text-white flex items-center gap-2">
                        <span>🎬 Premier Pro & After Effects</span>
                      </span>
                      <span className="text-rose-400 font-mono text-[11px]">Motion VFX</span>
                    </div>

                    <div className="p-3 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-between">
                      <span className="font-bold text-white flex items-center gap-2">
                        <span>🎨 DaVinci Resolve Studio</span>
                      </span>
                      <span className="text-violet-400 font-mono text-[11px]">Color Science</span>
                    </div>

                    <div className="p-3 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-between">
                      <span className="font-bold text-white flex items-center gap-2">
                        <span>🎧 Adobe Audition & iZotope</span>
                      </span>
                      <span className="text-emerald-400 font-mono text-[11px]">Audio Polish</span>
                    </div>

                    <div className="p-3 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-between">
                      <span className="font-bold text-white flex items-center gap-2">
                        <span>☁️ Google Drive 100GB Delivery</span>
                      </span>
                      <span className="text-amber-400 font-mono text-[11px]">Fast Cloud</span>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-800 text-[11px] text-slate-400 leading-relaxed">
                    💡 <strong>How to get started:</strong> Share your raw video link on WhatsApp $\rightarrow$ We verify hook & script $\rightarrow$ Delivery in 24–48 hours $\rightarrow$ 2 rounds of free revisions!
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Tailored Video Editing Solutions by Style (Interactive Showcase) */}
        <div className="mb-20 sm:mb-24">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-50 border border-rose-200 text-rose-800 text-xs font-bold uppercase tracking-wider mb-3 shadow-2xs">
              <Layers className="w-3.5 h-3.5 text-rose-600" />
              <span>Video Content Architectures</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 leading-tight font-sans">
              Tailored Video Content <br className="hidden sm:inline" />
              <span className="gradient-text-hero">By Format & Style</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto mt-2">
              Select your video format to see how our retention-driven post-production maximizes watch time, shares, and conversion clicks.
            </p>
          </div>

          {/* Centered Horizontal Pill Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 mb-8">
            {Object.keys(interactiveStyles).map((sKey) => {
              const s = interactiveStyles[sKey];
              const isSel = activeStyleTab === sKey;
              return (
                <button
                  key={sKey}
                  onClick={() => setActiveStyleTab(sKey)}
                  className={`px-4 sm:px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
                    isSel
                      ? 'bg-rose-600 text-white shadow-md scale-105'
                      : 'bg-white text-slate-700 border border-slate-200 hover:border-rose-300 hover:bg-rose-50/40'
                  }`}
                >
                  <span>{sKey === 'reels' ? '🔥' : sKey === 'ads' ? '🛍️' : sKey === 'podcast' ? '🎙️' : '✨'}</span>
                  <span>{s.category.split(' ')[0]} {s.category.split(' ')[1]}</span>
                </button>
              );
            })}
          </div>

          {/* 2-Column Showcase Card */}
          <div className="p-6 sm:p-10 rounded-3xl bg-white border-2 border-slate-200 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative overflow-hidden">
            
            {/* Left Column: Format Specs */}
            <div className="lg:col-span-6">
              <span className="inline-block px-3 py-1 rounded-full bg-rose-50 text-rose-800 border border-rose-200 text-xs font-bold uppercase tracking-wider mb-3">
                {selectedStyle.category}
              </span>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3 font-sans leading-tight">
                {selectedStyle.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                {selectedStyle.subtitle}
              </p>

              <div className="space-y-2.5 mb-8">
                {selectedStyle.features.map((feat, fIdx) => (
                  <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href={`https://wa.me/918920683588?text=Hi%20SiteMint!%20I%20want%20to%20get%20editing%20for%20${encodeURIComponent(selectedStyle.title)}.%20Please%20share%20timeline.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp text-xs !py-3 !px-6 inline-flex items-center gap-2 shadow-xs font-bold"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Order {selectedStyle.category.split(' ')[0]} Editing</span>
                </a>

                <Link
                  href="/calculator"
                  className="btn-secondary text-xs !py-3 !px-5 inline-flex items-center gap-1.5 font-bold"
                >
                  <Calculator className="w-3.5 h-3.5 text-rose-600" />
                  <span>Calculate Cost</span>
                </Link>
              </div>
            </div>

            {/* Right Column: Visual Architecture Terminal */}
            <div className="lg:col-span-6">
              <div className="p-6 sm:p-7 rounded-3xl bg-slate-950 text-white border border-slate-800 shadow-2xl relative overflow-hidden">
                
                <div className="flex items-center justify-between pb-3.5 border-b border-slate-800 mb-5 text-xs">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    </div>
                    <span className="text-[11px] text-slate-400 font-mono font-medium ml-1">
                      {selectedStyle.category.toLowerCase().replace(/\s+/g, '-')}-preset.v3
                    </span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-rose-500/20 text-rose-300 text-[10px] font-bold">
                    {selectedStyle.renderBadge}
                  </span>
                </div>

                <div className="space-y-3">
                  <div className="p-3.5 rounded-2xl bg-slate-900 border border-rose-500/40">
                    <div className="flex justify-between items-center text-xs font-bold mb-1">
                      <span className="text-white">🎯 Target Platform & Aspect Ratio</span>
                      <span className="text-emerald-400 font-mono">{selectedStyle.aspectRatio}</span>
                    </div>
                    <p className="text-[11px] text-slate-400 leading-relaxed">
                      {selectedStyle.targetPlatform}
                    </p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800">
                    <div className="text-[10px] font-mono text-amber-300 mb-1">Sample Hook Strategy:</div>
                    <div className="text-xs text-white italic font-serif">
                      {selectedStyle.sampleHook}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2.5 text-xs">
                    <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                      <div className="font-bold text-rose-300 mb-0.5">🔊 Master Audio</div>
                      <div className="text-[10px] text-slate-400">-14 LUFS Spotify/YT Normalized.</div>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                      <div className="font-bold text-sky-300 mb-0.5">⚡ 24h Queue</div>
                      <div className="text-[10px] text-slate-400">Direct WhatsApp progress alerts.</div>
                    </div>
                  </div>
                </div>

                <div className="mt-5 pt-3.5 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                  <span>⚡ Available in <strong>Starter (₹3,999)</strong> & <strong>Growth (₹7,499)</strong></span>
                  <a
                    href="https://wa.me/918920683588?text=Hi%20SiteMint!%20I%20want%20to%20see%20sample%20video%20portfolio%20reels."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-rose-400 hover:text-rose-300 font-bold flex items-center gap-1"
                  >
                    <span>Request Sample Showreel</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>

              </div>
            </div>

          </div>
        </div>

        {/* 6 Core Video Capabilities (Ultra-Modern Creative Grid) */}
        <div className="mb-20 sm:mb-24">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-50 text-rose-700 border border-rose-200 text-xs font-bold uppercase tracking-wider mb-3 shadow-2xs">
              <Zap className="w-3.5 h-3.5 text-rose-600" />
              <span>Studio Post-Production Engine</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 leading-tight font-sans">
              Everything Your Video <br className="hidden sm:inline" />
              <span className="gradient-text-hero">Needs to Hook & Convert</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto mt-2">
              Every cut, sound effect, and subtitle frame is engineered to keep viewers watching longer and clicking your profile link.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreCapabilities.map((cap, idx) => {
              const Icon = cap.icon;
              return (
                <div
                  key={idx}
                  className={`p-6 sm:p-7 rounded-3xl bg-white ${cap.borderClass} shadow-xl hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center text-rose-600 group-hover:scale-110 transition-transform shadow-2xs">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className={`text-[10px] font-mono font-bold px-2.5 py-1 rounded-full border ${cap.badgeColor}`}>
                        {cap.badge}
                      </span>
                    </div>

                    <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest">{cap.num} // POST-PRODUCTION</span>
                    <h3 className="text-lg font-extrabold text-slate-900 mb-2 font-sans mt-0.5 group-hover:text-rose-600 transition-colors">
                      {cap.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed mb-6">
                      {cap.desc}
                    </p>
                  </div>

                  {/* Micro Visual Card Preview */}
                  <div className="p-3 rounded-2xl bg-slate-950 text-white border border-slate-800 space-y-1 text-left shadow-inner">
                    <div className="flex justify-between items-center text-[10px] pb-1 border-b border-slate-800/80">
                      <span className="text-rose-300 font-bold">{cap.preview.title}</span>
                      <span className="text-[9px] font-mono text-slate-400 bg-slate-800 px-1.5 py-0.5 rounded">{cap.preview.tag}</span>
                    </div>
                    <div className="text-[9px] text-slate-400">{cap.preview.subtitle}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 5-Stage Video Editing Pipeline (Connected Continuous Gradient Line) */}
        <div className="mb-20 sm:mb-24">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-50 border border-rose-200 text-rose-800 text-xs font-bold uppercase tracking-wider mb-3 shadow-2xs">
              <Clock className="w-3.5 h-3.5 text-rose-600" />
              <span>Production Lifecycle</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 leading-tight font-sans">
              From Raw Footage to 4K Master <br className="hidden sm:inline" />
              <span className="gradient-text-hero">In 5 Seamless Steps</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto mt-2">
              Our streamlined cloud workflow ensures high-speed turnaround with continuous progress alerts directly on your WhatsApp.
            </p>
          </div>

          <div className="relative">
            {/* Desktop Connected Glowing Laser Pipeline */}
            <div 
              className="hidden lg:block absolute top-[52px] left-[5%] right-[5%] h-1 rounded-full bg-gradient-to-r from-rose-500 via-violet-500 via-sky-500 via-emerald-500 to-amber-500 shadow-md shadow-rose-500/20 z-0" 
              aria-hidden="true"
            />

            {/* Steps Container */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 relative z-10 overflow-x-auto pb-4 pt-1 snap-x snap-mandatory">
              {editingPipeline.map((st, sIdx) => (
                <div
                  key={sIdx}
                  className="p-5 rounded-3xl bg-slate-900 text-white border-2 border-slate-800 hover:border-rose-400 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group snap-center min-w-[220px]"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-2xl bg-slate-800 border-2 border-slate-700 text-white font-mono font-black text-sm flex items-center justify-center group-hover:scale-110 group-hover:border-rose-400 transition-all shadow-md">
                        {st.step}
                      </div>
                      <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-rose-500/20 text-rose-300 border border-rose-500/30">
                        {st.days}
                      </span>
                    </div>

                    <h3 className="font-extrabold text-white text-sm sm:text-base mb-1.5 font-sans group-hover:text-rose-400 transition-colors">
                      {st.title}
                    </h3>
                    <p className="text-[11px] text-slate-400 leading-relaxed mb-4">
                      {st.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-800 text-[10px] text-slate-300 space-y-1">
                    {st.items.map((it, itIdx) => (
                      <div key={itIdx} className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
                        <span>{it}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile Swipe Hint */}
            <div className="flex lg:hidden items-center justify-center gap-1.5 text-[11px] text-slate-400 mt-3 font-medium">
              <span>← Swipe to explore all 5 editing stages →</span>
            </div>
          </div>
        </div>

        {/* Comparison: Freelance Video Editor vs SiteMint Video Studio */}
        <div className="mb-16 sm:mb-20">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="text-xl sm:text-3xl font-extrabold text-slate-900 font-sans">
              Why Creators & Brands Switch to SiteMint Video Studio
            </h2>
          </div>

          <div className="overflow-x-auto rounded-3xl border-2 border-slate-200 shadow-md">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="bg-slate-100 text-slate-900">
                  <th className="p-4 font-bold border-b-2 border-slate-200">Comparison Factors</th>
                  <th className="p-4 font-bold text-slate-600 border-b-2 border-slate-200">Freelance Video Editor</th>
                  <th className="p-4 font-bold text-rose-700 bg-rose-50 border-b-2 border-rose-200">SiteMint Video Studio</th>
                </tr>
              </thead>
              <tbody className="divide-y-2 divide-slate-100">
                <tr>
                  <td className="p-4 font-medium">Reel Editing Cost</td>
                  <td className="p-4 text-slate-600">₹1,500 to ₹3,000 / video</td>
                  <td className="p-4 font-bold text-rose-700 bg-rose-50/40">From ₹399–₹499 / video</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">Turnaround Speed</td>
                  <td className="p-4 text-slate-600">3 to 7 Days (Frequent delays)</td>
                  <td className="p-4 font-bold text-rose-700 bg-rose-50/40">24–48 Hours Guaranteed</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">Subtitles & Hormozi Captions</td>
                  <td className="p-4 text-slate-600">Additional charges per video</td>
                  <td className="p-4 font-bold text-rose-700 bg-rose-50/40">Included Free (Animated & Emojis)</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">Sound Design & Music Licensing</td>
                  <td className="p-4 text-slate-600">Risk of Instagram audio muted strikes</td>
                  <td className="p-4 font-bold text-rose-700 bg-rose-50/40">100% Copyright-Safe Licensed Audio & SFX</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">Color Grading & 4K Export</td>
                  <td className="p-4 text-slate-600">Often basic 1080p without color pass</td>
                  <td className="p-4 font-bold text-rose-700 bg-rose-50/40">DaVinci Resolve Cinema Science + 4K Export</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick Cross-Linking Grid */}
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 border-2 border-slate-200 mb-16 shadow-sm">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-4 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-rose-600" />
            Explore Connected Business Growth Services:
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs">
            <Link href="/services/social-media-management" className="p-3 bg-white rounded-xl border border-slate-200 hover:border-rose-300 font-semibold text-slate-800 hover:text-rose-700 transition">
              📱 Social Media Management (7+ Platforms)
            </Link>
            <Link href="/services/website-development" className="p-3 bg-white rounded-xl border border-slate-200 hover:border-rose-300 font-semibold text-slate-800 hover:text-rose-700 transition">
              🌐 High-Speed Website (₹3,999)
            </Link>
            <Link href="/services/mobile-app-development" className="p-3 bg-white rounded-xl border border-slate-200 hover:border-rose-300 font-semibold text-slate-800 hover:text-rose-700 transition">
              📱 Custom Mobile App (₹12,999)
            </Link>
            <Link href="/calculator" className="p-3 bg-white rounded-xl border border-slate-200 hover:border-rose-300 font-semibold text-slate-800 hover:text-rose-700 transition">
              🧮 Instant Video Cost Calculator
            </Link>
            <Link href="/pricing" className="p-3 bg-white rounded-xl border border-rose-300 font-semibold text-slate-800 hover:text-rose-700 transition">
              🏷️ Complete Pricing Catalog
            </Link>
            <Link href="/blog/low-budget-website-development-guide-india" className="p-3 bg-white rounded-xl border border-slate-200 hover:border-rose-300 font-semibold text-slate-800 hover:text-rose-700 transition">
              📖 Digital Growth & ROI Guide
            </Link>
          </div>
        </div>

      </div>

      <RelatedServicesSection currentService="video-editing" />
      <FaqSection />
    </div>
  );
}
