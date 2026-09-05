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
  ShieldCheck
} from 'lucide-react';
import { LinkedInIcon } from '../../components/SocialIcons';
import AnimatedSection from '../../components/AnimatedSection';

export default function TeamClientPage() {
  const teamMembers = [
    {
      id: 'sneha-sharma',
      name: 'Sneha Sharma',
      role: 'Project Manager',
      image: '/team/sneha_sharma.png',
      initials: 'SS',
      linkedin: 'https://www.linkedin.com/company/sitemint002sep02/',
      roleColor: 'text-sky-600',
    },
    {
      id: 'shivam-sharma',
      name: 'Shivam Sharma',
      role: 'Full Stack Developer',
      image: '/team/shivam_sharma.png',
      initials: 'SS',
      linkedin: 'https://www.linkedin.com/company/sitemint002sep02/',
      roleColor: 'text-sky-600',
    },
    {
      id: 'vikash-singh',
      name: 'Vikash Singh',
      role: 'Web Developer',
      image: '/team/vikash_singh.png',
      initials: 'VS',
      linkedin: 'https://www.linkedin.com/company/sitemint002sep02/',
      roleColor: 'text-sky-600',
    },
    {
      id: 'mohd-aftab',
      name: 'Mohd. Aftab',
      role: 'Full Stack Developer',
      image: '/team/mohd_aftab.png',
      initials: 'MA',
      linkedin: 'https://www.linkedin.com/company/sitemint002sep02/',
      roleColor: 'text-sky-600',
    },
    {
      id: 'tanisha-sharma',
      name: 'Tanisha Sharma',
      role: 'HR & Copy Writer',
      image: '/team/tanisha_sharma.png',
      initials: 'TS',
      linkedin: 'https://www.linkedin.com/company/sitemint002sep02/',
      roleColor: 'text-sky-600',
    },
    {
      id: 'deepika-kumari',
      name: 'Deepika Kumari',
      role: 'Graphic Designer',
      image: '/team/deepika_kumari.png',
      initials: 'DK',
      linkedin: 'https://www.linkedin.com/company/sitemint002sep02/',
      roleColor: 'text-sky-600',
    },
    {
      id: 'adarsh-gautam',
      name: 'Adarsh Gautam',
      role: 'Social Media Manager',
      image: '/team/adarsh_gautam.png',
      initials: 'AG',
      linkedin: 'https://www.linkedin.com/company/sitemint002sep02/',
      roleColor: 'text-sky-600',
    },
    {
      id: 'siddhant',
      name: 'Siddhant',
      role: 'Motion Graphics Designer',
      image: '/team/siddhant.png',
      initials: 'SI',
      linkedin: 'https://www.linkedin.com/company/sitemint002sep02/',
      roleColor: 'text-sky-600',
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

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <AnimatedSection delay={0}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-500/10 border border-violet-400/30 text-violet-300 text-xs font-black uppercase tracking-wider mb-4">
              <Users className="w-4 h-4 text-violet-400" /> People Behind SiteMint
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight mb-4">
              Meet Our <span className="gradient-text-hero">Engineering & Creative Team</span>
            </h1>

            <p className="text-slate-300 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed font-normal mb-8">
              With a passion for innovation, we collaborate seamlessly to deliver exceptional results. Get to know the faces behind our success and discover how our team can transform your ideas into reality.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/about"
                className="px-5 py-2.5 rounded-xl bg-violet-950/90 border border-violet-700/60 hover:bg-violet-900 text-white text-xs sm:text-sm font-extrabold flex items-center gap-2 transition"
              >
                <span>Back to About Studio</span>
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

      {/* 2. FOUNDER SPOTLIGHT CARD */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16">
        <AnimatedSection delay={100}>
          <div className="max-w-4xl mx-auto bg-white rounded-3xl border-2 border-violet-200 shadow-xl p-6 sm:p-8 relative overflow-hidden flex flex-col md:flex-row items-center gap-6 sm:gap-8">
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-gradient-to-tr from-violet-600 via-indigo-600 to-sky-500 text-white font-extrabold text-3xl flex items-center justify-center shadow-lg font-mono shrink-0">
              YS
            </div>

            <div className="space-y-2 text-center md:text-left flex-1">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-50 text-violet-800 border border-violet-200 text-xs font-extrabold uppercase tracking-wider">
                Founder & Lead Web Engineer
              </div>
              <h2 className="text-2xl font-black text-slate-900">Yuvraj Singh</h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Leading Next.js 15 web architecture, mobile application development, cloud infrastructure, and core client project engineering at SiteMint Studio.
              </p>
              <div className="pt-2 flex items-center justify-center md:justify-start gap-4">
                <a
                  href="https://www.linkedin.com/company/sitemint002sep02/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0A66C2] hover:underline"
                >
                  <LinkedInIcon className="w-4 h-4" />
                  <span>Connect on LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* 3. TEAM MEMBERS GRID (Matching Screenshot Layout & Design) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-50/90 border border-violet-200/90 text-violet-800 text-xs font-extrabold uppercase tracking-wider mb-3 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-violet-600" /> — CORE TEAM MEMBERS —
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-3">
            Our Dedicated <span className="gradient-text-hero">Specialists</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed max-w-xl mx-auto">
            Get to know the faces behind our success and discover how our team can transform your ideas into reality.
          </p>
          <div className="w-14 h-1 bg-gradient-to-r from-violet-600 via-indigo-600 to-teal-500 rounded-full mx-auto mt-4" />
        </div>

        {/* 8 Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 pt-8">
          {teamMembers.map((member, idx) => (
            <AnimatedSection key={member.id} delay={idx * 80}>
              <div className="bg-white rounded-3xl border border-sky-100 border-b-4 border-b-sky-300 shadow-md hover:shadow-2xl hover:border-sky-300 transition-all duration-300 relative pt-16 pb-6 px-5 text-center group flex flex-col justify-between h-full">

                {/* Circular Profile Avatar (Popping out from the top center) */}
                <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-24 h-24 sm:w-28 sm:h-28 rounded-full border-4 border-white shadow-md shadow-sky-200/60 bg-slate-100 overflow-hidden ring-4 ring-sky-100 group-hover:ring-violet-300 transition-all duration-300 flex items-center justify-center">
                  <img
                    src={member.image}
                    alt={`${member.name} - ${member.role}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
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
                <div className="pt-2 space-y-2">
                  <h3 className="text-base sm:text-lg font-black text-slate-900 group-hover:text-violet-700 transition-colors leading-snug">
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

      {/* 4. FOOTER CTA */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <AnimatedSection delay={100}>
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-violet-700 via-indigo-700 to-slate-900 text-white shadow-xl text-center space-y-4">
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              Want to Work with Our Engineering & Creative Team?
            </h2>
            <p className="text-xs sm:text-sm text-violet-100 max-w-xl mx-auto leading-relaxed">
              Whether you need a web app, mobile app, 4K Instagram video editing, or social media management, our team is ready to scale your brand.
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
            </div>
          </div>
        </AnimatedSection>
      </section>

    </div>
  );
}
