import Link from "next/link";
import {
  Users,
  Sparkles,
  Zap,
  ShieldCheck,
  Clock,
  Award,
  MessageCircle,
  CheckCircle2,
  Heart,
  Target,
  ArrowRight,
  Code2,
  Globe,
  Smartphone,
  Video,
  Share2,
  Cpu,
  Database,
  Lock,
  Mail,
  Phone,
  ExternalLink,
  Layers,
  Check,
  Briefcase,
  Star,
  Compass,
  Headphones,
  Calculator,
  FileSearch,
  CalendarRange,
  Layout,
  ClipboardCheck,
  Rocket,
  Trophy,
  HeartHandshake,
  Cloud,
  BarChart2,
} from "lucide-react";
import {
  InstagramIcon,
  LinkedInIcon,
  FacebookIcon,
} from "../../components/SocialIcons";
import FaqSection from "../../components/FaqSection";
import WorkingProcessGrid from "../../components/WorkingProcessGrid";
import AnimatedSection from "../../components/AnimatedSection";

export const metadata = {
  title: "About SiteMint | Expert Web & App Development Studio India",
  description:
    "SiteMint is a leading web and app development studio. We build scalable digital solutions, cloud architectures, and provide social media management for ambitious businesses.",
  keywords: [
    "about SiteMint studio",
    "Yuvraj Singh SiteMint founder",
    "web development studio india",
    "mobile app development studio",
    "full stack developer",
    "cloud architecture management",
    "app and web development",
    "video editing and instagram reels studio",
    "social media management company india",
    "transparent web development company india",
    "Next.js and Flutter studio",
    "affordable website developers india",
    "SiteMint",
  ],
  alternates: {
    canonical: "https://sitemint.in/about",
  },
  openGraph: {
    title: "About SiteMint | Web Development & Creative Technology Studio",
    description:
      "We build digital solutions that help businesses grow with modern technology, practical pricing, and 100% code ownership.",
    url: "https://sitemint.in/about",
    siteName: "SiteMint",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About SiteMint | Web Development & Creative Technology Studio",
    description:
      "Practical pricing, modern technology, and reliable support for ambitious Indian businesses.",
  },
};

export default function AboutPage() {
  // 3. What We Do Cards
  const coreServices = [
    {
      title: "Website & Software Development",
      desc: "High-speed Next.js 15 business sites, e-commerce stores, coaching portals, and custom web applications.",
      useFor:
        "Best for local shops, startups, coaching institutes & service businesses.",
      icon: Globe,
      iconColor: "text-violet-700 bg-violet-100",
      link: "/services/website-development",
    },
    {
      title: "Mobile App Development",
      desc: "Native-feel Flutter mobile apps for Android & iOS with phone OTP login, push alerts, and 0% UPI checkout.",
      useFor:
        "Best for retailers, food delivery, on-demand booking & edtech platforms.",
      icon: Smartphone,
      iconColor: "text-pink-700 bg-pink-100",
      link: "/services/mobile-app-development",
    },
    {
      title: "Video Editing & Reels",
      desc: "Viral Instagram Reels, YouTube Shorts, commercial business video ads, and dynamic animated subtitles.",
      useFor: "Best for creators, coaches, local brands & e-commerce products.",
      icon: Video,
      iconColor: "text-rose-700 bg-rose-100",
      link: "/services/video-editing",
    },
    {
      title: "Social Media Management",
      desc: "Multi-platform 7-8 channel management, daily graphic posts, SEO captions, DM inquiry routing & Meta Ads.",
      useFor:
        "Best for local businesses & service providers scaling brand reach.",
      icon: Share2,
      iconColor: "text-emerald-700 bg-emerald-100",
      link: "/services/social-media-management",
    },
  ];

  // 4. Working Process (7 Steps + Guaranteed Result Card)
  const workingProcess = [
    {
      step: "01",
      stepBadge: "bg-blue-100/90 text-blue-600",
      title: "Requirement",
      desc: "Understanding your business goals, web & mobile app scope, video edit styles, and social media branding over a clear call.",
      icon: FileSearch,
      iconBg: "from-blue-500 to-sky-400",
      arrowColor:
        "bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white",
      cardStyle:
        "border border-sky-100 border-b-4 border-b-[#00A3E0] shadow-md shadow-sky-100/50 hover:shadow-xl hover:shadow-sky-200/70",
    },
    {
      step: "02",
      stepBadge: "bg-violet-100/90 text-violet-600",
      title: "Planning",
      desc: "Finalizing required features, UI wireframes, video edit scripts, social media posting schedule, and itemized budget.",
      icon: CalendarRange,
      iconBg: "from-violet-500 to-purple-400",
      arrowColor:
        "bg-violet-50 text-violet-600 group-hover:bg-violet-600 group-hover:text-white",
      cardStyle:
        "border border-violet-100 border-b-4 border-b-violet-400 shadow-md shadow-violet-100/50 hover:shadow-xl hover:shadow-violet-200/70",
    },
    {
      step: "03",
      stepBadge: "bg-emerald-100/90 text-emerald-600",
      title: "Design",
      desc: "Creating mobile-first web & app UI/UX, high-converting social media post graphics, carousels, and video thumbnails.",
      icon: Layout,
      iconBg: "from-emerald-500 to-teal-400",
      arrowColor:
        "bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white",
      cardStyle:
        "border border-emerald-100 border-b-4 border-b-emerald-400 shadow-md shadow-emerald-100/50 hover:shadow-xl hover:shadow-emerald-200/70",
    },
    {
      step: "04",
      stepBadge: "bg-amber-100/90 text-amber-700",
      title: "Development & Media",
      desc: "Building clean Next.js & Flutter code, alongside editing 4K Instagram Reels, YouTube videos, and high-ROI ad media.",
      icon: Code2,
      iconBg: "from-blue-600 to-indigo-500",
      arrowColor:
        "bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white",
      cardStyle:
        "border border-amber-100 border-b-4 border-b-amber-400 shadow-md shadow-amber-100/50 hover:shadow-xl hover:shadow-amber-200/70",
    },
    {
      step: "05",
      stepBadge: "bg-rose-100/90 text-rose-600",
      title: "Testing & Review",
      desc: "Rigorous cross-device web/app testing, video sound & subtitle sync check, color grading, and caption proofreading.",
      icon: ClipboardCheck,
      iconBg: "from-blue-500 to-cyan-400",
      arrowColor:
        "bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white",
      cardStyle:
        "border border-rose-100 border-b-4 border-b-rose-400 shadow-md shadow-rose-100/50 hover:shadow-xl hover:shadow-rose-200/70",
    },
    {
      step: "06",
      stepBadge: "bg-sky-100/90 text-sky-600",
      title: "Launch & Publishing",
      desc: "Deploying web/apps live, publishing Play Store APKs, scheduling social media posts, and launching Meta ad campaigns.",
      icon: Rocket,
      iconBg: "from-sky-500 to-blue-500",
      arrowColor:
        "bg-sky-50 text-sky-600 group-hover:bg-sky-600 group-hover:text-white",
      cardStyle:
        "border border-sky-100 border-b-4 border-b-[#00A3E0] shadow-md shadow-sky-100/50 hover:shadow-xl hover:shadow-sky-200/70",
    },
    {
      step: "07",
      stepBadge: "bg-indigo-100/90 text-indigo-600",
      title: "Support & Growth",
      desc: "Dedicated technical maintenance, ongoing video editing, daily social media management, and monthly growth reports.",
      icon: Headphones,
      iconBg: "from-indigo-500 to-purple-500",
      arrowColor:
        "bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white",
      cardStyle:
        "border border-indigo-100 border-b-4 border-b-indigo-400 shadow-md shadow-indigo-100/50 hover:shadow-xl hover:shadow-indigo-200/70",
    },
  ];

  // 6. Technology We Use Stack
  const techStack = [
    {
      name: "React 19",
      category: "Frontend",
      color: "border-sky-200 bg-sky-50/50 text-sky-800",
    },
    {
      name: "Next.js 15",
      category: "SSR & App Router",
      color: "border-slate-300 bg-slate-100 text-slate-900",
    },
    {
      name: "Node.js",
      category: "Backend Engine",
      color: "border-emerald-200 bg-emerald-50/50 text-emerald-800",
    },
    {
      name: "Express.js",
      category: "REST APIs",
      color: "border-slate-300 bg-slate-50 text-slate-800",
    },
    {
      name: "MongoDB",
      category: "Database",
      color: "border-green-200 bg-green-50/50 text-green-800",
    },
    {
      name: "Flutter",
      category: "Cross-Platform Mobile",
      color: "border-indigo-200 bg-indigo-50/50 text-indigo-800",
    },
    {
      name: "AWS Cloud",
      category: "Infrastructure",
      color: "border-amber-200 bg-amber-50/50 text-amber-900",
    },
    {
      name: "Tailwind CSS",
      category: "Styling Architecture",
      color: "border-teal-200 bg-teal-50/50 text-teal-800",
    },
    {
      name: "Razorpay",
      category: "UPI Payment Gateway",
      color: "border-blue-200 bg-blue-50/50 text-blue-800",
    },
    {
      name: "GitHub",
      category: "Version Control",
      color: "border-purple-200 bg-purple-50/50 text-purple-900",
    },
    {
      name: "Firebase",
      category: "Push & Auth",
      color: "border-amber-200 bg-amber-50/50 text-amber-800",
    },
    {
      name: "PostgreSQL",
      category: "Relational DB",
      color: "border-cyan-200 bg-cyan-50/50 text-cyan-900",
    },
  ];

  // 8. Projects Work Showcase
  const showcasedProjects = [
    {
      title: "The True Topper",
      category: "EdTech & Online Exam Portal",
      desc: "Online education and examination platform featuring student management, mock exam system, UPI payments, and detailed admin analytics.",
      tech: ["Next.js", "React", "Node.js", "Razorpay", "MongoDB"],
      demoLink: "/services/education-portal",
      badge: "EDUCATION PLATFORM",
    },
    {
      title: "SiteMint Studio Portal",
      category: "Web Development & Agency Platform",
      desc: "Modern web development studio web application featuring real-time project cost calculators, interactive service showcases, and live demos.",
      tech: ["Next.js 15", "Tailwind CSS", "React 19", "Gmail API"],
      demoLink: "/projects",
      badge: "AGENCY STUDIO",
    },
    {
      title: "Sweet Treats Bakery Hub",
      category: "Food & Digital Ordering Portal",
      desc: "Mobile-first online digital menu and ordering system with 0% commission direct WhatsApp order dispatch and instant UPI payment links.",
      tech: ["Next.js", "WhatsApp API", "Tailwind CSS"],
      demoLink: "/demos/bakery",
      badge: "0% COMMISSION FOOD",
    },
    {
      title: "GrowthFit Coaching Portal",
      category: "Institute Portal & Fee Management",
      desc: "Student admissions, online course inquiry management, fee payment gateway integration, and parent noticeboard platform.",
      tech: ["React", "Node.js", "Razorpay UPI", "Express"],
      demoLink: "/demos/education",
      badge: "COACHING SYSTEM",
    },
  ];

  return (
    <div className="w-full max-w-full overflow-hidden bg-white text-slate-900 font-sans">
      {/* 1. HERO SECTION (Eye-Soothing Home-Matched Soft Dark Gradient Layout) */}
      <section className="relative w-full min-h-[300px] sm:min-h-[340px] lg:min-h-[380px] bg-gradient-to-br from-[#0F172A] via-[#1E1B4B] to-[#0F172A] text-white overflow-hidden flex items-center">
        {/* Ambient Floating Color Glow Orbs */}
        <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <div className="absolute -top-10 left-1/3 w-72 h-72 bg-violet-600/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-cyan-500/15 rounded-full blur-3xl" />
        </div>

        {/* Full-Height Right Photo */}
        <div className="absolute inset-y-0 right-0 w-full lg:w-[55%] h-full z-0">
          <img
            src="/aboutimage/about_hero_client_deal.jpg"
            alt="SiteMint Client Partnership & Workspace"
            className="w-full h-full object-cover object-center opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent pointer-events-none" />
        </div>

        {/* SVG Curve Mask & Glowing Violet-Cyan Stroke Line */}
        <svg
          className="absolute inset-0 w-full h-full text-[#0F172A] pointer-events-none z-10 hidden lg:block"
          preserveAspectRatio="none"
          viewBox="0 0 1000 500"
        >
          <path
            d="M 0,0 L 520,0 C 380,120 380,380 780,500 L 0,500 Z"
            fill="#0F172A"
          />
          <path
            d="M 520,0 C 380,120 380,380 780,500"
            fill="none"
            stroke="#8B5CF6"
            strokeWidth="5"
            vectorEffect="non-scaling-stroke"
            className="opacity-70"
          />
        </svg>

        {/* Mobile/Tablet Overlay */}
        <div className="absolute inset-0 bg-[#0F172A]/90 lg:bg-transparent pointer-events-none z-10 lg:hidden" />

        {/* Left Content Area Container (Compact Padding & Spacing) */}
        <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-20 py-8 lg:py-10">
          <div className="max-w-xl lg:max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-violet-500/10 border border-violet-400/30 text-violet-300 text-xs font-bold uppercase tracking-wider w-fit shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-violet-400" /> Web
              Development & Creative Technology Studio
            </div>

            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight font-sans">
                About <br />
                <span className="gradient-text-hero">SiteMint</span>
              </h1>
              <div className="w-16 h-1 bg-gradient-to-r from-violet-500 via-indigo-500 to-teal-400 rounded-full mt-3 mb-3" />
            </div>

            <p className="text-sm sm:text-lg font-bold text-slate-200 tracking-wide leading-snug">
              Smarter Solutions. Stronger Operations. Sustainable Growth.
            </p>

            {/* Action Buttons directly below tagline */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-1">
              <Link
                href="/projects"
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white text-xs sm:text-sm font-bold flex items-center gap-2 shadow-md shadow-violet-900/30 transition-all transform hover:-translate-y-0.5"
              >
                <Briefcase className="w-4 h-4 text-violet-200" />
                <span>View Our Projects</span>
                <ArrowRight className="w-4 h-4 text-violet-200" />
              </Link>

              <a
                href="https://wa.me/918920683588?text=Hi%20SiteMint!%20I%20want%20to%20discuss%20a%20new%20digital%20project%20for%20my%20business."
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-bold flex items-center gap-2 shadow-md transition-all transform hover:-translate-y-0.5"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Start a Project</span>
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-slate-400 font-semibold pt-2 border-t border-slate-800/80">
              <span className="flex items-center gap-1.5 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-violet-400" /> Modern Tech
                Stack
              </span>
              <span className="flex items-center gap-1.5 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-violet-400" /> Practical
                Indian Pricing
              </span>
              <span className="flex items-center gap-1.5 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-violet-400" /> 100% Code
                Ownership
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. DIGITAL SOLUTIONS & STUDIO OVERVIEW (Clean White Section with Image & Subheadings) */}
      <section className="py-12 sm:py-16 bg-white border-b border-slate-100 text-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Side: Seamless Studio Graphic (No Border, Shadow, or Hover Box) */}
            <div className="lg:col-span-6 flex items-center justify-center">
              <AnimatedSection direction="left" delay={0}>
                <img
                  src="/aboutimage/we built.png"
                  alt="SiteMint Technology Architecture & Digital Solutions"
                  className="w-full max-w-xl lg:max-w-2xl h-auto object-contain pointer-events-none select-none transition-transform duration-300 hover:scale-105"
                />
              </AnimatedSection>
            </div>

            {/* Right Side: Subheadings, Description & Tagline */}
            <div className="lg:col-span-6 space-y-5">
              <AnimatedSection direction="right" delay={150}>
                <div>
                  <div className="inline-flex items-center gap-1.5 text-xs font-extrabold text-violet-800 uppercase tracking-wider mb-2 px-3.5 py-1.5 rounded-full bg-violet-50/90 border border-violet-200/90 shadow-2xs">
                    <Globe className="w-4 h-4 text-violet-600" /> Full-Service
                    Creative Tech Studio
                  </div>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 leading-tight">
                    We Build{" "}
                    <span className="gradient-text-hero">
                      Digital Solutions
                    </span>{" "}
                    That Help Businesses Grow
                  </h2>
                  <div className="w-16 h-1 bg-gradient-to-r from-violet-600 via-indigo-600 to-teal-500 rounded-full mt-3 mb-4" />
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  SiteMint is a web development and creative technology studio
                  helping businesses build professional websites, mobile
                  applications, high-impact video editing & Instagram Reels, and
                  full-scale social media management with practical pricing,
                  modern technology, and reliable support.
                </p>

                <div className="p-4 sm:p-5 rounded-2xl bg-violet-50/80 border border-violet-100/90 text-violet-950">
                  <span className="text-[11px] uppercase tracking-wider font-extrabold text-violet-800 block mb-1">
                    Our Core Commitment
                  </span>
                  <p className="text-sm sm:text-base font-extrabold text-slate-900 leading-snug">
                    Smarter Solutions. Stronger Operations. Sustainable Growth.
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <Link
                    href="/services"
                    className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold flex items-center gap-2 transition"
                  >
                    <Layers className="w-4 h-4 text-violet-400" />
                    <span>Explore Capabilities</span>
                  </Link>
                  <Link
                    href="/calculator"
                    className="px-4 py-2 rounded-xl bg-violet-50 border border-violet-200 text-violet-800 hover:bg-violet-100 text-xs font-bold flex items-center gap-2 transition"
                  >
                    <Calculator className="w-4 h-4 text-violet-600" />
                    <span>Calculate Instant Price</span>
                  </Link>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* 3. OUR STORY & MISSION (Clean Reference Screenshot Match Layout) */}
      <section
        id="story"
        className="py-14 sm:py-20 bg-white border-b border-slate-100 scroll-mt-16 text-slate-900"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Top Story & Creative Image Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Comprehensive Studio Story Text */}
            <div className="lg:col-span-6 space-y-4">
              <AnimatedSection direction="left" delay={0}>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-50/90 border border-violet-200/90 text-violet-800 text-xs font-extrabold uppercase tracking-wider shadow-2xs">
                  <Target className="w-4 h-4 text-violet-600" /> Our Origin &
                  Journey
                </div>

                <h2 className="text-2xl sm:text-4xl font-black text-slate-900 leading-tight mt-3">
                  Our Story & <span className="gradient-text-hero">Vision</span>
                </h2>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium mt-3">
                  Welcome to{" "}
                  <strong className="text-slate-900 font-extrabold">
                    SiteMint
                  </strong>
                  , where creativity meets engineering and innovation. Our
                  journey has been driven by passion, precision, and
                  purpose—evolving into a full-fledged digital and creative
                  technology powerhouse.
                </p>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-2">
                  From building robust{" "}
                  <strong className="text-slate-800">
                    websites and mobile applications
                  </strong>{" "}
                  to delivering high-converting{" "}
                  <strong className="text-slate-800">
                    video editing, Instagram reels, and social media management
                  </strong>
                  , our work reflects our dedication to detail and our
                  commitment to real business results.
                </p>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-2">
                  At the heart of SiteMint lies a simple belief: every business
                  has a story worth telling. Our team brings strategy,
                  technology, and creative media together under one roof so you
                  never have to manage multiple disjointed agencies.
                </p>

                <div className="pt-3 flex flex-wrap items-center gap-4">
                  <Link
                    href="/about/ourstory"
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-extrabold text-violet-700 hover:text-violet-900 group"
                  >
                    <span>Read Complete Founding Story</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <a
                    href="https://wa.me/918920683588?text=Hi%20SiteMint!%20I%20want%20to%20discuss%20a%20project."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-slate-900"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-600" />
                    <span>Chat on WhatsApp</span>
                  </a>
                </div>
              </AnimatedSection>
            </div>

            {/* Right Column: Extra Large Seamless Inline Graphic */}
            <div className="lg:col-span-6 flex items-center justify-center pt-2 sm:pt-0">
              <AnimatedSection direction="right" delay={150}>
                <img
                  src="/aboutimage/misson-of-about.png"
                  alt="SiteMint Mission & Story Illustration"
                  className="w-full max-w-xl sm:max-w-2xl lg:max-w-full h-auto object-contain pointer-events-none select-none scale-105 sm:scale-110 lg:scale-115 transform"
                />
              </AnimatedSection>
            </div>
          </div>

          {/* Bottom Our Mission Banner Card (Eye-Soothing Soft Gradient) */}
          <AnimatedSection delay={100}>
            <div className="relative w-full p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-violet-700 via-indigo-700 to-slate-900 text-white shadow-xl border border-violet-500/20 overflow-hidden text-center space-y-4">
              {/* Subtle Tech Pattern Background Overlay */}
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

              <div className="relative z-10 space-y-3 max-w-3xl mx-auto">
                <h3 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
                  Our Mission
                </h3>

                <p className="text-xs sm:text-base text-violet-100 leading-relaxed font-medium max-w-2xl mx-auto">
                  To provide complete digital, software, video media, and
                  branding solutions that empower businesses to grow, connect,
                  and thrive all under one creative roof.
                </p>

                <div className="pt-3">
                  <a
                    href="https://wa.me/918920683588?text=Hi%20SiteMint!%20I%20want%20to%20connect%20for%20a%20project."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-3 rounded-full border-2 border-white text-white font-extrabold text-xs sm:text-sm hover:bg-white hover:text-violet-700 transition-all transform hover:scale-105 shadow-md"
                  >
                    <span>Reach Us</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
      {/* 3. WHAT WE DO (4 Clear Service Cards matching Reference Screenshot) */}
      <section
        id="services"
        className="py-14 sm:py-20 bg-slate-50/70 border-b border-slate-200 scroll-mt-16 text-slate-900"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-50/90 border border-violet-200/90 text-violet-800 text-xs font-extrabold uppercase tracking-wider mb-3 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-violet-600" /> — CORE
              CAPABILITIES —
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 mb-3">
              What We <span className="gradient-text-hero">Do</span>
            </h2>
            <p className="text-slate-600 text-xs sm:text-base font-medium max-w-2xl mx-auto leading-relaxed">
              End-to-end digital services engineered to build brand authority,
              capture leads, and grow revenue.
            </p>
            <div className="w-14 h-1 bg-gradient-to-r from-violet-600 via-indigo-600 to-teal-500 rounded-full mx-auto mt-4" />
          </div>

          {/* 4 Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {/* Card 01: Website & Software Development */}
            <AnimatedSection delay={0}>
              <div className="bg-white p-5 sm:p-6 rounded-3xl border border-blue-200/90 shadow-xs hover:shadow-lg hover:border-blue-400 transition-all duration-300 relative overflow-hidden group flex flex-col justify-between h-full">
                <div className="w-8 h-8 absolute top-0 right-0 border-t-2 border-r-2 border-blue-400/50 rounded-tr-3xl pointer-events-none" />

                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-2xl bg-blue-600 text-white flex items-center justify-center shadow-md font-bold shrink-0">
                      <Code2 className="w-5 h-5" />
                    </div>
                    <div className="flex items-center gap-2 text-xs font-extrabold text-slate-400 uppercase tracking-wider">
                      <span className="text-blue-600 font-mono text-sm">
                        01
                      </span>
                      <span>——</span>
                      <span>WEB & SOFTWARE DEVELOPMENT</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 items-center">
                    <div className="sm:col-span-7 space-y-3">
                      <h3 className="text-lg sm:text-xl font-black text-slate-900 leading-snug">
                        Website & Software Development
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                        High-speed Next.js 15 business sites, e-commerce stores,
                        coaching portals, and custom web applications built for
                        performance and growth.
                      </p>

                      <div className="grid grid-cols-2 gap-y-2 gap-x-1.5 text-xs text-slate-700 font-extrabold pt-1">
                        <div className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                          <span>Business Websites</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                          <span>Custom Web Apps</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                          <span>E-commerce Stores</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                          <span>Coaching Portals</span>
                        </div>
                      </div>

                      <div className="pt-2">
                        <Link
                          href="/services/website-development"
                          className="px-5 py-2 rounded-full bg-[#0B1528] hover:bg-blue-900 text-white text-xs font-extrabold flex items-center gap-2 shadow-md transition-all duration-300 transform hover:scale-105 w-fit"
                        >
                          <span>Learn More</span>
                          <ArrowRight className="w-4 h-4 text-blue-400" />
                        </Link>
                      </div>
                    </div>

                    <div className="sm:col-span-5 flex items-center justify-center p-2 overflow-visible">
                      <img
                        src="/aboutimage/wedo-websitedevelomet.png"
                        alt="Website & Software Development"
                        className="w-full h-auto max-h-60 sm:max-h-72 lg:max-h-80 object-contain pointer-events-none select-none transform scale-110 sm:scale-115 lg:scale-120 transition-transform duration-300 group-hover:scale-125 drop-shadow-sm"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Card 02: Mobile App Development */}
            <AnimatedSection delay={130}>
              <div className="bg-white p-5 sm:p-6 rounded-3xl border border-emerald-200/90 shadow-xs hover:shadow-lg hover:border-emerald-400 transition-all duration-300 relative overflow-hidden group flex flex-col justify-between h-full">
                <div className="w-8 h-8 absolute top-0 right-0 border-t-2 border-r-2 border-emerald-400/50 rounded-tr-3xl pointer-events-none" />

                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-2xl bg-emerald-500 text-white flex items-center justify-center shadow-md font-bold shrink-0">
                      <Smartphone className="w-5 h-5" />
                    </div>
                    <div className="flex items-center gap-2 text-xs font-extrabold text-slate-400 uppercase tracking-wider">
                      <span className="text-emerald-500 font-mono text-sm">
                        02
                      </span>
                      <span>——</span>
                      <span>MOBILE APP DEVELOPMENT</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 items-center">
                    <div className="sm:col-span-7 space-y-3">
                      <h3 className="text-lg sm:text-xl font-black text-slate-900 leading-snug">
                        Mobile App Development
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                        Native-feel Flutter mobile apps for Android & iOS with
                        phone OTP login, push alerts, and 0% UPI checkout.
                      </p>

                      <div className="grid grid-cols-2 gap-y-2 gap-x-1.5 text-xs text-slate-700 font-extrabold pt-1">
                        <div className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                          <span>Android Apps</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                          <span>OTP Login</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                          <span>iOS Apps</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                          <span>UPI Payment</span>
                        </div>
                      </div>

                      <div className="pt-2">
                        <Link
                          href="/services/mobile-app-development"
                          className="px-5 py-2 rounded-full bg-[#0B1528] hover:bg-blue-900 text-white text-xs font-extrabold flex items-center gap-2 shadow-md transition-all duration-300 transform hover:scale-105 w-fit"
                        >
                          <span>Learn More</span>
                          <ArrowRight className="w-4 h-4 text-emerald-400" />
                        </Link>
                      </div>
                    </div>

                    <div className="sm:col-span-5 flex items-center justify-center p-2 overflow-visible">
                      <img
                        src="/aboutimage/wedo-appdeveloment.png"
                        alt="Mobile App Development"
                        className="w-full h-auto max-h-60 sm:max-h-72 lg:max-h-80 object-contain pointer-events-none select-none transform scale-110 sm:scale-115 lg:scale-120 transition-transform duration-300 group-hover:scale-125 drop-shadow-sm"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Card 03: Video Editing & Reels */}
            <AnimatedSection delay={260}>
              <div className="bg-white p-5 sm:p-6 rounded-3xl border border-violet-200/90 shadow-xs hover:shadow-lg hover:border-violet-400 transition-all duration-300 relative overflow-hidden group flex flex-col justify-between h-full">
                <div className="w-8 h-8 absolute top-0 right-0 border-t-2 border-r-2 border-violet-400/50 rounded-tr-3xl pointer-events-none" />

                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-2xl bg-violet-600 text-white flex items-center justify-center shadow-md font-bold shrink-0">
                      <Video className="w-5 h-5" />
                    </div>
                    <div className="flex items-center gap-2 text-xs font-extrabold text-slate-400 uppercase tracking-wider">
                      <span className="text-violet-600 font-mono text-sm">
                        03
                      </span>
                      <span>——</span>
                      <span>VIDEO EDITING & REELS</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 items-center">
                    <div className="sm:col-span-7 space-y-3">
                      <h3 className="text-lg sm:text-xl font-black text-slate-900 leading-snug">
                        Video Editing & Reels
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                        Viral Instagram Reels, YouTube Shorts, commercial
                        business video ads, and dynamic animated subtitles.
                      </p>

                      <div className="grid grid-cols-2 gap-y-2 gap-x-1.5 text-xs text-slate-700 font-extrabold pt-1">
                        <div className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-violet-500 shrink-0" />
                          <span>Reels & Shorts</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-violet-500 shrink-0" />
                          <span>Ad Videos</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-violet-500 shrink-0" />
                          <span>YouTube Videos</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-violet-500 shrink-0" />
                          <span>Animated Subtitles</span>
                        </div>
                      </div>

                      <div className="pt-2">
                        <Link
                          href="/services/video-editing"
                          className="px-5 py-2 rounded-full bg-[#0B1528] hover:bg-blue-900 text-white text-xs font-extrabold flex items-center gap-2 shadow-md transition-all duration-300 transform hover:scale-105 w-fit"
                        >
                          <span>Learn More</span>
                          <ArrowRight className="w-4 h-4 text-violet-400" />
                        </Link>
                      </div>
                    </div>

                    <div className="sm:col-span-5 flex items-center justify-center p-2 overflow-visible">
                      <img
                        src="/aboutimage/wedo-video edtting.png"
                        alt="Video Editing & Reels"
                        className="w-full h-auto max-h-60 sm:max-h-72 lg:max-h-80 object-contain pointer-events-none select-none transform scale-110 sm:scale-115 lg:scale-120 transition-transform duration-300 group-hover:scale-125 drop-shadow-sm"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Card 04: Social Media Management */}
            <AnimatedSection delay={390}>
              <div className="bg-white p-5 sm:p-6 rounded-3xl border border-teal-200/90 shadow-xs hover:shadow-lg hover:border-teal-400 transition-all duration-300 relative overflow-hidden group flex flex-col justify-between h-full">
                <div className="w-8 h-8 absolute top-0 right-0 border-t-2 border-r-2 border-teal-400/50 rounded-tr-3xl pointer-events-none" />

                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-2xl bg-teal-500 text-white flex items-center justify-center shadow-md font-bold shrink-0">
                      <Share2 className="w-5 h-5" />
                    </div>
                    <div className="flex items-center gap-2 text-xs font-extrabold text-slate-400 uppercase tracking-wider">
                      <span className="text-teal-500 font-mono text-sm">
                        04
                      </span>
                      <span>——</span>
                      <span>SOCIAL MEDIA MANAGEMENT</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 items-center">
                    <div className="sm:col-span-7 space-y-3">
                      <h3 className="text-lg sm:text-xl font-black text-slate-900 leading-snug">
                        Social Media Management
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                        Multi-platform 7-8 channel management, daily graphic
                        posts, SEO captions, DM inquiry routing & Meta Ads.
                      </p>

                      <div className="grid grid-cols-2 gap-y-2 gap-x-1.5 text-xs text-slate-700 font-extrabold pt-1">
                        <div className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-teal-500 shrink-0" />
                          <span>Content Creation</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-teal-500 shrink-0" />
                          <span>Meta Ads</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-teal-500 shrink-0" />
                          <span>Post Scheduling</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-teal-500 shrink-0" />
                          <span>DM Routing</span>
                        </div>
                      </div>

                      <div className="pt-2">
                        <Link
                          href="/services/social-media-management"
                          className="px-5 py-2 rounded-full bg-[#0B1528] hover:bg-blue-900 text-white text-xs font-extrabold flex items-center gap-2 shadow-md transition-all duration-300 transform hover:scale-105 w-fit"
                        >
                          <span>Learn More</span>
                          <ArrowRight className="w-4 h-4 text-teal-400" />
                        </Link>
                      </div>
                    </div>

                    <div className="sm:col-span-5 flex items-center justify-center p-2 overflow-visible">
                      <img
                        src="/aboutimage/wedo-socalmedia.png"
                        alt="Social Media Management"
                        className="w-full h-auto max-h-60 sm:max-h-72 lg:max-h-80 object-contain pointer-events-none select-none transform scale-110 sm:scale-115 lg:scale-120 transition-transform duration-300 group-hover:scale-125 drop-shadow-sm"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* 4. OUR WORKING PROCESS (8 Cards Exact Reference Match) */}
      <section
        id="process"
        className="py-14 sm:py-20 bg-slate-50/50 border-b border-slate-100 scroll-mt-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Badge & Title */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-50/90 border border-violet-200/90 text-violet-800 text-xs font-extrabold uppercase tracking-wider mb-3 shadow-2xs">
              <Clock className="w-3.5 h-3.5 text-violet-600" /> TRANSPARENT
              ENGINEERING SPRINT
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 mb-3">
              Our <span className="gradient-text-hero">Working Process</span>
            </h2>
            <p className="text-slate-600 text-xs sm:text-base font-medium leading-relaxed max-w-2xl mx-auto">
              Demonstrating our clear step-by-step workflow builds complete
              trust and clarity before project launch.
            </p>
            <div className="w-14 h-1 bg-gradient-to-r from-violet-600 via-indigo-600 to-teal-500 rounded-full mx-auto mt-4" />
          </div>

          {/* 8 Cards 2x4 Staggered Animated Grid */}
          <WorkingProcessGrid />
        </div>

        {/* Seamless 3D Process Roadmap Graphic (Full Width) */}
        <AnimatedSection delay={200} className="w-full mt-10 sm:mt-14">
          <div className="w-full flex items-center justify-center py-2 sm:py-4 overflow-hidden">
            <img
              src="/aboutimage/OurWorkingProcess.png"
              alt="SiteMint 7-Step 3D Engineering Process Roadmap"
              className="w-full h-auto block pointer-events-none select-none drop-shadow-xs"
            />
          </div>
        </AnimatedSection>
      </section>

      {/* 5. MEET THE TEAM & FOUNDER */}
      <section
        id="team"
        className="py-14 sm:py-20 bg-slate-50/70 border-b border-slate-200 scroll-mt-16"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-50/90 border border-violet-200/90 text-violet-800 text-xs font-extrabold uppercase tracking-wider mb-3 shadow-2xs">
              <Users className="w-3.5 h-3.5 text-violet-600" /> People Behind
              SiteMint
            </div>
            <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-slate-900 mb-2">
              Meet the{" "}
              <span className="gradient-text-hero">Engineering Team</span>
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm">
              Genuine engineers dedicated to building clean, scalable software
              for ambitious businesses.
            </p>
            <div className="w-14 h-1 bg-gradient-to-r from-violet-600 via-indigo-600 to-teal-500 rounded-full mx-auto mt-3" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch max-w-6xl mx-auto">
            {/* Card 1: Founder Profile Card (Wide) */}
            <div className="lg:col-span-7 h-full">
              <AnimatedSection delay={0} className="h-full">
                <div className="p-1 sm:p-2 rounded-[2rem] bg-gradient-to-br from-blue-50 to-indigo-50/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white h-full relative group">
                  <div className="bg-white/80 backdrop-blur-sm rounded-[1.8rem] p-5 sm:p-6 h-full flex flex-col sm:flex-row gap-6 relative border border-blue-50 shadow-sm">
                    {/* Floating Handwritten text */}
                    <div className="absolute top-6 right-6 lg:right-10 rotate-[-6deg] text-indigo-500 hidden md:flex flex-col items-center">
                      <span
                        style={{ fontFamily: "cursive" }}
                        className="text-[13px] font-semibold leading-tight"
                      >
                        Let's Build
                      </span>
                      <span
                        style={{ fontFamily: "cursive" }}
                        className="text-[13px] font-semibold leading-tight"
                      >
                        Together
                      </span>
                      <svg
                        className="w-5 h-5 mt-1 text-indigo-400 rotate-[-15deg] opacity-70"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 9c1.5 1.5 3 3 5 3s3.5-1.5 5-3" />
                        <path d="m11 16 4 4 4-4" />
                      </svg>
                    </div>

                    {/* Left Column: Image Area */}
                    <div className="w-full sm:w-[40%] xl:w-[45%] shrink-0 relative flex items-center justify-center overflow-hidden rounded-l-[1.8rem] sm:rounded-r-none rounded-r-[1.8rem]">
                      {/* Image */}
                      <img
                        src="/team/yuvraj Singh tm.png"
                        alt="Yuvraj Singh"
                        className="w-full h-full object-cover object-top relative z-10"
                      />
                    </div>

                    {/* Right Column: Info Area */}
                    <div className="w-full sm:w-[60%] xl:w-[55%] flex flex-col justify-center py-2 relative z-10">
                      <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50/80 text-blue-600 text-[10px] font-black uppercase tracking-wider w-fit mb-3 border border-blue-100/50">
                        Founder & Lead Web Engineer
                      </div>

                      <h3 className="text-2xl sm:text-[28px] font-black text-slate-900 mb-2 tracking-tight">
                        Yuvraj Singh
                      </h3>

                      <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed mb-6 font-medium pr-4">
                        Web development, cloud architecture, SSR deployment, and
                        client project engineering.
                      </p>

                      {/* Tags Grid */}
                      <div className="grid grid-cols-1 xl:grid-cols-2 gap-2.5 mb-6">
                        <div className="flex items-center gap-2 px-3 py-2.5 rounded-xl bg-slate-50/80 border border-slate-100 text-[11px] font-bold text-slate-700 w-full shadow-sm hover:shadow-md hover:border-indigo-100 transition-all">
                          <Code2 className="w-3.5 h-3.5 text-indigo-600 shrink-0" />{" "}
                          <span>Web Development</span>
                        </div>
                        <div className="flex items-center gap-2 px-3 py-2.5 rounded-xl bg-slate-50/80 border border-slate-100 text-[11px] font-bold text-slate-700 w-full shadow-sm hover:shadow-md hover:border-sky-100 transition-all">
                          <Cloud className="w-3.5 h-3.5 text-sky-600 shrink-0" />{" "}
                          <span>Cloud Architecture</span>
                        </div>
                        <div className="flex items-center gap-2 px-3 py-2.5 rounded-xl bg-slate-50/80 border border-slate-100 text-[11px] font-bold text-slate-700 w-full shadow-sm hover:shadow-md hover:border-violet-100 transition-all">
                          <Layers className="w-3.5 h-3.5 text-violet-600 shrink-0" />{" "}
                          <span>SSR Deployment</span>
                        </div>
                        <div className="flex items-center gap-2 px-3 py-2.5 rounded-xl bg-slate-50/80 border border-slate-100 text-[11px] font-bold text-slate-700 w-full shadow-sm hover:shadow-md hover:border-blue-100 transition-all">
                          <Database className="w-3.5 h-3.5 text-blue-600 shrink-0" />{" "}
                          <span>Client Project Eng.</span>
                        </div>
                      </div>

                      <div className="mt-auto pt-4 border-t border-slate-100/80 flex items-center justify-between">
                        <span className="text-[11px] font-bold text-slate-500">
                          Lead Developer
                        </span>
                        <a
                          href="https://www.linkedin.com/in/yuvraj-singh-0001/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-[11px] font-black text-[#0A66C2] hover:text-[#084e96] transition-colors group/link"
                        >
                          <LinkedInIcon className="w-4 h-4" />
                          <span>LinkedIn Profile</span>
                          <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Card 2: Team Philosophy Card */}
            <div className="lg:col-span-5 h-full">
              <AnimatedSection delay={150} className="h-full">
                <div className="p-1 sm:p-2 rounded-[2rem] bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-50 h-full flex flex-col group">
                  <div className="bg-[#FAFAFC] rounded-[1.8rem] p-6 lg:p-8 h-full flex flex-col justify-between border border-slate-100/50">
                    <div>
                      {/* Header: Badge & Circle */}
                      <div className="flex items-start justify-between mb-8">
                        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-slate-100 text-indigo-700 text-[10px] font-black uppercase tracking-wider shadow-sm mt-1">
                          <Award className="w-3.5 h-3.5 text-indigo-500" />{" "}
                          DEDICATED 8-MEMBER TEAM
                        </div>

                        <div className="w-[90px] h-[90px] shrink-0 rounded-full bg-white shadow-md border border-indigo-50/50 flex flex-col items-center justify-center text-indigo-700 transform group-hover:scale-105 transition-transform duration-300 p-1">
                          <Users className="w-5 h-5 mb-0.5 text-indigo-600" />
                          <span className="text-2xl font-black leading-none text-indigo-800">
                            8+
                          </span>
                          <span className="text-[8px] font-black uppercase mt-1 tracking-tight text-center leading-[1.1] text-indigo-600 px-1">
                            Team Members
                          </span>
                        </div>
                      </div>

                      <div className="space-y-4 pr-2">
                        <p className="text-[13px] text-slate-700 leading-relaxed font-semibold">
                          Our team includes Project Managers, Full Stack
                          Developers, UI Designers, Video Editors, and Social
                          Media Strategists working seamlessly.
                        </p>
                        <p className="text-[13px] text-slate-500 leading-relaxed font-medium">
                          We assign dedicated specialists based on your exact
                          project scope—ensuring top quality and fast
                          turnaround.
                        </p>
                      </div>
                    </div>

                    <div className="mt-10">
                      <Link
                        href="/team"
                        className="w-full py-3.5 px-6 rounded-[14px] bg-gradient-to-r from-[#7B3FF2] via-[#2563EB] to-[#0D9488] hover:from-[#6D28D9] hover:via-[#1D4ED8] hover:to-[#0F766E] text-white font-extrabold text-[13px] flex items-center justify-between shadow-lg shadow-indigo-500/25 transition-all duration-300 transform group-hover:-translate-y-1"
                      >
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4" />
                          <span>Explore Our Complete 8-Member Team</span>
                        </div>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* 6. TECHNOLOGY WE USE */}
      <section className="py-14 sm:py-20 bg-white border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-50/90 border border-violet-200/90 text-violet-800 text-xs font-extrabold uppercase tracking-wider mb-3 shadow-2xs">
              <Cpu className="w-3.5 h-3.5 text-violet-600" /> Modern Tech
              Ecosystem
            </div>
            <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-slate-900 mb-2">
              Technology We <span className="gradient-text-hero">Use</span>
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm">
              We leverage modern, battle-tested technology stacks for
              high-performance, secure digital software.
            </p>
            <div className="w-14 h-1 bg-gradient-to-r from-violet-600 via-indigo-600 to-teal-500 rounded-full mx-auto mt-3" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {techStack.map((tech, idx) => (
              <AnimatedSection key={idx} delay={idx * 40} direction="scale">
                <div
                  className={`p-3.5 rounded-2xl border text-center font-bold text-xs transition hover:scale-105 cursor-default ${tech.color}`}
                >
                  <div className="text-sm font-extrabold">{tech.name}</div>
                  <div className="text-[9px] font-normal opacity-80 mt-0.5">
                    {tech.category}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* 8. PROJECTS / WORK SHOWCASE (4 Real Projects) */}
      <section className="py-14 sm:py-20 bg-white border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-50/90 border border-violet-200/90 text-violet-800 text-xs font-extrabold uppercase tracking-wider mb-3 shadow-2xs">
              <Briefcase className="w-3.5 h-3.5 text-violet-600" /> Featured
              Work Showcase
            </div>
            <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-slate-900 mb-2">
              Recent{" "}
              <span className="gradient-text-hero">Projects Showcase</span>
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm">
              Explore real digital platforms and working applications engineered
              by SiteMint Studio.
            </p>
            <div className="w-14 h-1 bg-gradient-to-r from-violet-600 via-indigo-600 to-teal-500 rounded-full mx-auto mt-3" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {showcasedProjects.map((prj, idx) => (
              <AnimatedSection key={idx} delay={idx * 130}>
                <div className="p-6 sm:p-8 rounded-3xl bg-slate-50/90 border border-slate-200 hover:border-blue-300 shadow-2xs hover:shadow-md transition flex flex-col justify-between group h-full">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] font-extrabold px-2.5 py-0.5 rounded-full bg-blue-100 text-[#3B82F6] border border-blue-200">
                        {prj.badge}
                      </span>
                      <span className="text-[11px] text-slate-400 font-bold uppercase tracking-wider">
                        {prj.category}
                      </span>
                    </div>

                    <h3 className="text-xl font-extrabold text-slate-900 mb-2 group-hover:text-[#3B82F6] transition-colors">
                      {prj.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                      {prj.desc}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {prj.tech.map((t, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-white border border-slate-200 text-slate-700"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-200/80">
                    <Link
                      href={prj.demoLink}
                      className="inline-flex items-center gap-2 text-xs font-bold text-[#3B82F6] hover:text-blue-700 group-hover:translate-x-1 transition-transform"
                    >
                      <span>Explore Working Project Details</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/projects"
              className="btn-secondary text-xs sm:text-sm !py-3 !px-6 inline-flex items-center gap-2 font-bold"
            >
              <span>Explore All Live Work Demos</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 9. REAL TESTIMONIALS & TRUST RELATIONSHIPS */}
      <section className="py-14 sm:py-20 bg-slate-50/70 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-50/90 border border-violet-200/90 text-violet-800 text-xs font-extrabold uppercase tracking-wider mb-3 shadow-2xs">
              <Heart className="w-3.5 h-3.5 text-violet-600" /> Long-Term Client
              Relationships
            </div>
            <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-slate-900 mb-2">
              Client Trust &{" "}
              <span className="gradient-text-hero">Relationships</span>
            </h2>
            <div className="w-14 h-1 bg-gradient-to-r from-violet-600 via-indigo-600 to-teal-500 rounded-full mx-auto mt-3 mb-4" />

            <div className="p-4 rounded-2xl bg-white border border-slate-200 text-slate-700 text-xs sm:text-sm font-medium max-w-2xl mx-auto leading-relaxed shadow-2xs">
              &ldquo;We are building long-term relationships through transparent
              communication, reliable delivery and practical digital
              solutions.&rdquo;
            </div>
          </div>

          {/* Genuine Client Feedback Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <AnimatedSection delay={0}>
              <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-2xs space-y-3 h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1 text-amber-400 mb-2">
                    <Star className="w-4 h-4 fill-amber-400" />
                    <Star className="w-4 h-4 fill-amber-400" />
                    <Star className="w-4 h-4 fill-amber-400" />
                    <Star className="w-4 h-4 fill-amber-400" />
                    <Star className="w-4 h-4 fill-amber-400" />
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    &ldquo;SiteMint built our bakery online ordering system in
                    just 7 days. Customers can now directly send customized cake
                    orders to our WhatsApp with zero aggregator cuts.&rdquo;
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-100 text-xs font-bold text-slate-900">
                  Bakery & Sweet Shop Owner
                  <div className="text-[10px] text-slate-500 font-normal">
                    Local Business Client
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={130}>
              <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-2xs space-y-3 h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1 text-amber-400 mb-2">
                    <Star className="w-4 h-4 fill-amber-400" />
                    <Star className="w-4 h-4 fill-amber-400" />
                    <Star className="w-4 h-4 fill-amber-400" />
                    <Star className="w-4 h-4 fill-amber-400" />
                    <Star className="w-4 h-4 fill-amber-400" />
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    &ldquo;Fast speed and complete code ownership. No monthly
                    rental fees or agency hostages. Highly recommended for
                    coaching institutes and startups.&rdquo;
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-100 text-xs font-bold text-slate-900">
                  Coaching Institute Director
                  <div className="text-[10px] text-slate-500 font-normal">
                    EdTech Portal Client
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={260}>
              <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-2xs space-y-3 h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1 text-amber-400 mb-2">
                    <Star className="w-4 h-4 fill-amber-400" />
                    <Star className="w-4 h-4 fill-amber-400" />
                    <Star className="w-4 h-4 fill-amber-400" />
                    <Star className="w-4 h-4 fill-amber-400" />
                    <Star className="w-4 h-4 fill-amber-400" />
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    &ldquo;Clear itemized budget from day one. They set up
                    Razorpay 0% UPI checkout and Google Search Console indexing
                    cleanly.&rdquo;
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-100 text-xs font-bold text-slate-900">
                  E-Commerce Retail Founder
                  <div className="text-[10px] text-slate-500 font-normal">
                    D2C Store Client
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* 10. TRUST & TRANSPARENCY SECTION (Official Business Credentials) */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection delay={100}>
            <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white shadow-xl">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-emerald-300 text-xs font-bold uppercase tracking-wider">
                    <ShieldCheck className="w-4 h-4" /> Official Business
                    Information
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                    Trust & Transparency Credentials
                  </h2>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    SiteMint operates with complete legal and operational
                    clarity. Connect with our official team across verified
                    channels.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
                    <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
                      <span className="text-slate-400 block text-[10px] uppercase font-bold">
                        Service Area
                      </span>
                      <span className="text-white font-bold">
                        Pan-India & Global Remote Digital Studio
                      </span>
                    </div>

                    <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
                      <span className="text-slate-400 block text-[10px] uppercase font-bold">
                        Official Email
                      </span>
                      <a
                        href="mailto:contactsitemint@gmail.com"
                        className="text-emerald-300 font-bold hover:underline"
                      >
                        contactsitemint@gmail.com
                      </a>
                    </div>

                    <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
                      <span className="text-slate-400 block text-[10px] uppercase font-bold">
                        WhatsApp & Phone
                      </span>
                      <a
                        href="tel:+918920683588"
                        className="text-emerald-300 font-bold hover:underline"
                      >
                        +91 89206 83588
                      </a>
                    </div>

                    <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
                      <span className="text-slate-400 block text-[10px] uppercase font-bold">
                        Code Ownership
                      </span>
                      <span className="text-white font-bold">
                        100% Legal Source Code Rights
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right Box: Quick Legal & Navigation Links */}
                <div className="lg:col-span-5 p-6 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 space-y-3">
                  <div className="text-xs font-bold text-emerald-300 uppercase tracking-wider mb-2">
                    Official Links & Policies
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs font-semibold">
                    <Link
                      href="/pricing"
                      className="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 transition flex items-center justify-between text-white"
                    >
                      <span>Pricing Plans</span>
                      <ArrowRight className="w-3.5 h-3.5 text-emerald-400" />
                    </Link>

                    <Link
                      href="/contact"
                      className="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 transition flex items-center justify-between text-white"
                    >
                      <span>Contact Us</span>
                      <ArrowRight className="w-3.5 h-3.5 text-emerald-400" />
                    </Link>

                    <Link
                      href="/terms-and-conditions"
                      className="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 transition flex items-center justify-between text-white"
                    >
                      <span>Terms & Conditions</span>
                      <ArrowRight className="w-3.5 h-3.5 text-emerald-400" />
                    </Link>

                    <Link
                      href="/privacy-policy"
                      className="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 transition flex items-center justify-between text-white"
                    >
                      <span>Privacy Policy</span>
                      <ArrowRight className="w-3.5 h-3.5 text-emerald-400" />
                    </Link>
                  </div>

                  <div className="pt-3 border-t border-white/10 text-center">
                    <a
                      href="https://wa.me/918920683588?text=Hi%20SiteMint!%20I%20want%20to%20discuss%20a%20new%20project."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-whatsapp w-full justify-center text-xs py-3 font-bold shadow-md"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Direct WhatsApp Inquiry</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQs */}
      <FaqSection />
    </div>
  );
}
