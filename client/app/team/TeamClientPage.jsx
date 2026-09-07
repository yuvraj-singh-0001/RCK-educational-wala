'use client';

import Link from 'next/link';
import {
  Users,
  Sparkles,
  ArrowRight,
  MessageCircle,
  Briefcase,
  Globe,
  Code2,
  Heart,
  ShieldCheck,
  Cloud,
  Layers,
  Database,
  Award,
  CheckCircle2,
} from 'lucide-react';
import { LinkedInIcon } from '../../components/SocialIcons';
import AnimatedSection from '../../components/AnimatedSection';

export default function TeamClientPage() {
  const teamMembers = [
    {
      id: 'ankur',
      name: 'Ankur Rajput',
      role: 'Full Stack & App Developer',
      image: '/team/ankurSitemint.png',
      initials: 'AR',
      linkedin: 'https://www.linkedin.com/company/sitemint002sep02/',
      roleColor: 'text-sky-600',
      imageClass: 'object-top scale-105',
    },
    {
      id: 'baban',
      name: 'Baban Ram',
      role: 'Social Media Manager',
      image: '/team/babanSitemint.png',
      initials: 'BR',
      linkedin: 'https://www.linkedin.com/company/sitemint002sep02/',
      roleColor: 'text-sky-600',
      imageClass: 'object-top scale-105',
    },
    {
      id: 'harish',
      name: 'Harish',
      role: 'Team Specialist',
      image: '/team/harishSitemint .png',
      initials: 'HA',
      linkedin: 'https://www.linkedin.com/company/sitemint002sep02/',
      roleColor: 'text-sky-600',
      imageClass: 'object-[center_10%] scale-110 origin-top',
    },
    {
      id: 'sanoj',
      name: 'Sanoj',
      role: 'Team Specialist',
      image: '/team/SanojSitemint.png',
      initials: 'SA',
      linkedin: 'https://www.linkedin.com/company/sitemint002sep02/',
      roleColor: 'text-sky-600',
      imageClass: 'object-[center_0%] scale-100',
    },
    {
      id: 'suhail-raja',
      name: 'Suhail Raja',
      role: 'Team Specialist',
      image: '/team/sohil raja Sitemint.png',
      initials: 'SR',
      linkedin: 'https://www.linkedin.com/in/suhail-raja-38347441a/',
      roleColor: 'text-sky-600',
      imageClass: 'object-[center_25%] scale-110 origin-top',
    },
    {
      id: 'aman-khan',
      name: 'Aman Khan',
      role: 'Team Specialist',
      image: '/team/aman khanSitemint.png',
      initials: 'AK',
      linkedin: 'https://www.linkedin.com/company/sitemint002sep02/',
      roleColor: 'text-sky-600',
      imageClass: 'object-[center_18%] scale-110 origin-top',
    },
    {
      id: 'team-member-7',
      name: 'Team Member 7',
      role: 'Team Specialist',
      image: '/team/sneha_sharma.png',
      initials: 'TM',
      linkedin: 'https://www.linkedin.com/company/sitemint002sep02/',
      roleColor: 'text-sky-600',
      imageClass: 'object-top scale-105',
    },
    {
      id: 'team-member-8',
      name: 'Team Member 8',
      role: 'Team Specialist',
      image: '/team/shivam_sharma.png',
      initials: 'TM',
      linkedin: 'https://www.linkedin.com/company/sitemint002sep02/',
      roleColor: 'text-sky-600',
      imageClass: 'object-top scale-105',
    },
  ];

  return (
    <div className="w-full max-w-full overflow-hidden bg-slate-50/60 text-slate-900 font-sans min-h-screen pb-20">

      {/* 1. HERO SECTION */}
      <section className="relative w-full bg-gradient-to-br from-[#0F172A] via-[#1E1B4B] to-[#0F172A] text-white py-16 sm:py-20 overflow-hidden border-b border-violet-900/30">
        <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <div className="absolute -top-10 left-1/3 w-72 h-72 bg-violet-600/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-cyan-500/15 rounded-full blur-3xl" />
        </div>

        <div className="max-w-[92rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <AnimatedSection delay={0}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-500/10 border border-violet-400/30 text-violet-300 text-xs font-black uppercase tracking-wider mb-4">
              <Users className="w-4 h-4 text-violet-400" /> People Behind SiteMint Studio
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight mb-4">
              Meet Our <span className="gradient-text-hero">Engineering & Creative Team</span>
            </h1>

            <p className="text-slate-300 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed font-normal mb-8">
              Engineers, full-stack developers, UI designers, video editors, and social media strategists working together to build production-grade web applications and digital media for growing businesses.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/about"
                className="px-5 py-2.5 rounded-xl bg-violet-950/90 border border-violet-700/60 hover:bg-violet-900 text-white text-xs sm:text-sm font-extrabold flex items-center gap-2 transition shadow-sm"
              >
                <span>About SiteMint Studio</span>
                <ArrowRight className="w-4 h-4 text-violet-300" />
              </Link>

              <Link
                href="/services"
                className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs sm:text-sm font-extrabold flex items-center gap-2 transition"
              >
                <Briefcase className="w-4 h-4 text-violet-300" />
                <span>Explore Services</span>
              </Link>

              <a
                href="https://wa.me/918920683588?text=Hi%20SiteMint!%20I%20want%20to%20discuss%20a%20new%20project%20with%20your%20team."
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-extrabold flex items-center gap-2 shadow-md transition"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Start a Project</span>
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 2. STATS & VALUE PROPOSITION */}
      <section className="max-w-[92rem] mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <AnimatedSection delay={100}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 p-4 sm:p-6 rounded-3xl bg-white border border-slate-200/80 shadow-xl">
            <div className="flex items-center gap-3 p-3 sm:p-4 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-violet-100 text-violet-600 flex items-center justify-center shrink-0 shadow-2xs">
                <Code2 className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <div className="text-base sm:text-xl font-black text-slate-900 leading-tight">100%</div>
                <div className="text-[11px] sm:text-xs text-slate-500 font-bold">In-House Team</div>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 sm:p-4 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-sky-100 text-sky-600 flex items-center justify-center shrink-0 shadow-2xs">
                <Award className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <div className="text-base sm:text-xl font-black text-slate-900 leading-tight">50+</div>
                <div className="text-[11px] sm:text-xs text-slate-500 font-bold">Projects Built</div>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 sm:p-4 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 shadow-2xs">
                <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <div className="text-base sm:text-xl font-black text-slate-900 leading-tight">0%</div>
                <div className="text-[11px] sm:text-xs text-slate-500 font-bold">Outsourcing</div>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 sm:p-4 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center shrink-0 shadow-2xs">
                <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <div className="text-base sm:text-xl font-black text-slate-900 leading-tight">24/7</div>
                <div className="text-[11px] sm:text-xs text-slate-500 font-bold">Direct Support</div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* 2. FOUNDER & ENGINEERING LEADERSHIP SECTION (Exact Match with About Page Design & Code) */}
      <section id="founder" className="py-14 sm:py-20 bg-slate-50/70 border-b border-slate-200 scroll-mt-16 text-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-50/90 border border-violet-200/90 text-violet-800 text-xs font-extrabold uppercase tracking-wider mb-3 shadow-2xs">
              <Users className="w-3.5 h-3.5 text-violet-600" /> Founder & Engineering Leadership
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 mb-2">
              Meet Our <span className="gradient-text-hero">Founder</span>
            </h2>
            <p className="text-slate-600 text-xs sm:text-base font-medium max-w-2xl mx-auto leading-relaxed">
              Leading Next.js 15 web architecture, mobile application engineering, cloud infrastructure, and core client project engineering at SiteMint Studio.
            </p>
            <div className="w-14 h-1 bg-gradient-to-r from-violet-600 via-indigo-600 to-teal-500 rounded-full mx-auto mt-4" />
          </div>

          {/* 2-Column Grid: Left Side = Large Unboxed Founder Photo + LinkedIn Link Below; Right Side = Details + Skills + Team Summary */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">

            {/* Left Column: Large Unboxed Founder Photo + LinkedIn Link directly below */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center">
              <AnimatedSection direction="left" delay={0} className="w-full flex flex-col items-center justify-center">
                <div className="w-full max-w-md lg:max-w-xl mx-auto flex items-center justify-center overflow-visible">
                  <img
                    src="/team/Founder.png"
                    alt="Yuvraj Singh - Founder & Lead Full-Stack Developer at SiteMint Studio"
                    className="w-full h-auto max-h-[460px] sm:max-h-[580px] lg:max-h-[660px] object-contain pointer-events-none select-none transition-transform duration-300 hover:scale-105 drop-shadow-2xl"
                  />
                </div>

                {/* Connect on LinkedIn button directly below the photo */}
                <div className="pt-4 flex justify-center w-full">
                  <a
                    href="https://www.linkedin.com/in/yuvraj-singh-0001/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-50 text-[#0A66C2] border border-blue-200 hover:bg-[#0A66C2] hover:text-white font-black text-xs sm:text-sm transition-all shadow-sm group/link"
                  >
                    <LinkedInIcon className="w-4 h-4" />
                    <span>Connect on LinkedIn</span>
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </AnimatedSection>
            </div>

            {/* Right Column: Founder Details + Skills + Team Summary Box */}
            <div className="lg:col-span-7 space-y-6">
              <AnimatedSection direction="right" delay={150} className="space-y-6">

                {/* Founder Header & Bio */}
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs font-black uppercase tracking-wider border border-blue-200/60 mb-2 shadow-2xs">
                    Founder & Lead Full-Stack Developer
                  </div>
                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                    Yuvraj Singh
                  </h3>
                  <div className="w-16 h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-teal-500 rounded-full mt-2.5 mb-3" />
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                    Passionate full-stack developer overseeing web software development, mobile application engineering, and creative digital media at SiteMint Studio—delivering high-performance digital solutions with practical pricing and 100% code ownership.
                  </p>
                </div>

                {/* 4 Skill Highlights Badges (2 per row even on mobile screens) */}
                <div className="grid grid-cols-2 gap-2 sm:gap-2.5">
                  <Link
                    href="/services/website-development"
                    className="flex items-center gap-1.5 sm:gap-2.5 p-2 sm:p-3 rounded-2xl bg-white border border-indigo-200/90 shadow-2xs hover:border-indigo-400 hover:shadow-xs transition-all group/skill"
                  >
                    <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                      <Code2 className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-[11px] sm:text-xs font-bold text-slate-800 leading-tight group-hover/skill:text-indigo-600 transition-colors">
                      Web & Software Development
                    </span>
                  </Link>

                  <div className="flex items-center gap-1.5 sm:gap-2.5 p-2 sm:p-3 rounded-2xl bg-white border border-sky-200/90 shadow-2xs hover:border-sky-400 hover:shadow-xs transition-all">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center shrink-0">
                      <Cloud className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-[11px] sm:text-xs font-bold text-slate-800 leading-tight">
                      Cloud Architecture
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 sm:gap-2.5 p-2 sm:p-3 rounded-2xl bg-white border border-violet-200/90 shadow-2xs hover:border-violet-400 hover:shadow-xs transition-all">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-xl bg-violet-50 text-violet-600 flex items-center justify-center shrink-0">
                      <Layers className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-[11px] sm:text-xs font-bold text-slate-800 leading-tight">
                      SSR Deployment
                    </span>
                  </div>

                  <Link
                    href="/services"
                    className="flex items-center gap-1.5 sm:gap-2.5 p-2 sm:p-3 rounded-2xl bg-white border border-blue-200/90 shadow-2xs hover:border-blue-400 hover:shadow-xs transition-all group/skill"
                  >
                    <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                      <Database className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-[11px] sm:text-xs font-bold text-slate-800 leading-tight group-hover/skill:text-blue-600 transition-colors">
                      Client Project Engineering
                    </span>
                  </Link>
                </div>

              </AnimatedSection>
            </div>

          </div>

        </div>
      </section>

      {/* 3. TEAM MEMBERS GRID */}
      <section id="team-members" className="max-w-[92rem] mx-auto px-4 sm:px-6 lg:px-8 py-16 scroll-mt-16">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-50/90 border border-violet-200/90 text-violet-800 text-xs font-extrabold uppercase tracking-wider mb-3 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-violet-600" /> — CORE TEAM MEMBERS —
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-3">
            Our Dedicated <span className="gradient-text-hero">Specialists</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed max-w-xl mx-auto">
            Get to know the faces behind our success and discover how our engineering team transforms your digital ideas into high-performance web applications.
          </p>
          <div className="w-14 h-1 bg-gradient-to-r from-violet-600 via-indigo-600 to-teal-500 rounded-full mx-auto mt-4" />
        </div>

        {/* 8 Card Grid (4 per row) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 pt-8">
          {teamMembers.map((member, idx) => (
            <AnimatedSection key={member.id} delay={idx * 80} className="mt-22 sm:mt-24 lg:mt-26">
              <div className="bg-white rounded-[2rem] border border-sky-100 border-b-4 border-b-[#00A3E0] shadow-md shadow-sky-100/50 hover:shadow-[0_14px_36px_rgba(56,189,248,0.35)] hover:border-sky-300 hover:-translate-y-1.5 transition-all duration-300 group relative pt-24 sm:pt-24 lg:pt-26 pb-8 px-6 text-center flex flex-col justify-between h-full">

                {/* Extra Large Circular Profile Avatar */}
                <div className="absolute -top-20 sm:-top-20 lg:-top-22 left-1/2 -translate-x-1/2 w-40 h-40 sm:w-40 sm:h-40 lg:w-44 lg:h-44 rounded-full bg-slate-100 overflow-hidden shadow-[0_0_30px_rgba(56,189,248,0.45)] flex items-center justify-center border-none ring-2 ring-sky-300/80">
                  <img
                    src={member.image}
                    alt={`${member.name} - ${member.role} at SiteMint Studio`}
                    className={`w-full h-full object-cover transition-transform duration-300 ${member.imageClass || 'object-top scale-105'}`}
                    onError={(e) => {
                      // Fallback if image has not been placed in public/team yet
                      e.currentTarget.style.display = 'none';
                      if (e.currentTarget.nextSibling) {
                        e.currentTarget.nextSibling.style.display = 'flex';
                      }
                    }}
                  />
                  <div
                    className="w-full h-full bg-gradient-to-tr from-sky-500 to-violet-600 text-white font-black text-xl sm:text-2xl flex items-center justify-center hidden"
                  >
                    {member.initials}
                  </div>
                </div>

                {/* Card Content */}
                <div className="pt-2 space-y-1.5">
                  <h3 className="text-base sm:text-lg font-black text-slate-900 leading-snug">
                    {member.name}
                  </h3>
                  <p className={`text-xs font-bold ${member.roleColor}`}>
                    {member.role}
                  </p>
                </div>

                {/* LinkedIn Button Icon */}
                <div className="pt-4 mt-2">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full border border-sky-200 text-sky-600 hover:bg-sky-600 hover:text-white hover:border-sky-600 transition-all duration-300 flex items-center justify-center mx-auto shadow-2xs group-hover:scale-110"
                    title={`View ${member.name}'s LinkedIn Profile`}
                  >
                    <LinkedInIcon className="w-4 h-4" />
                  </a>
                </div>

              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* 4. FOOTER CTA & INTERNAL BACKLINKS */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <AnimatedSection delay={100}>
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-violet-700 via-indigo-700 to-slate-900 text-white shadow-xl text-center space-y-5">
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              Want to Work with Our Engineering & Creative Team?
            </h2>
            <p className="text-xs sm:text-sm text-violet-100 max-w-xl mx-auto leading-relaxed">
              Whether you need a high-speed Next.js web app, Flutter mobile application, 4K Instagram video editing, or multi-channel social media management, our team is ready to scale your brand.
            </p>
            <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
              <a
                href="https://wa.me/918920683588?text=Hi%20SiteMint!%20I%20want%20to%20start%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl bg-white text-violet-900 font-black text-xs sm:text-sm hover:bg-violet-50 transition shadow-md flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>Start Direct Discussion</span>
              </a>

              <Link
                href="/contact"
                className="px-6 py-3 rounded-xl bg-violet-900/80 hover:bg-violet-900 border border-violet-400/40 text-white font-bold text-xs sm:text-sm transition flex items-center gap-2"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-4 h-4 text-violet-300" />
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </section>

    </div>
  );
}

