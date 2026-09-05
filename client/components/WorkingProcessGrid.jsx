'use client';
import { useState, useEffect, useRef } from 'react';
import { 
  FileSearch, 
  CalendarRange, 
  Layout, 
  Code2, 
  ClipboardCheck, 
  Rocket, 
  Headphones, 
  Trophy, 
  ArrowRight 
} from 'lucide-react';

const workingProcess = [
  {
    step: '01',
    stepBadge: 'bg-blue-100/90 text-blue-600',
    title: 'Requirement',
    desc: 'Understanding your business goals, web & mobile app scope, video edit styles, and social media branding over a clear call.',
    icon: FileSearch,
    iconColor: 'text-[#00A3E0]',
    iconBadgeBg: 'bg-sky-50 border border-sky-100',
    arrowColor: 'bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white',
    cardStyle: 'border border-sky-100 border-b-4 border-b-[#00A3E0] shadow-md shadow-sky-100/50 hover:shadow-xl hover:shadow-sky-200/70',
  },
  {
    step: '02',
    stepBadge: 'bg-violet-100/90 text-violet-600',
    title: 'Planning',
    desc: 'Finalizing required features, UI wireframes, video edit scripts, social media posting schedule, and itemized budget.',
    icon: CalendarRange,
    iconColor: 'text-violet-600',
    iconBadgeBg: 'bg-violet-50 border border-violet-100',
    arrowColor: 'bg-violet-50 text-violet-600 group-hover:bg-violet-600 group-hover:text-white',
    cardStyle: 'border border-violet-100 border-b-4 border-b-violet-400 shadow-md shadow-violet-100/50 hover:shadow-xl hover:shadow-violet-200/70',
  },
  {
    step: '03',
    stepBadge: 'bg-emerald-100/90 text-emerald-600',
    title: 'Design',
    desc: 'Creating mobile-first web & app UI/UX, high-converting social media post graphics, carousels, and video thumbnails.',
    icon: Layout,
    iconColor: 'text-emerald-600',
    iconBadgeBg: 'bg-emerald-50 border border-emerald-100',
    arrowColor: 'bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white',
    cardStyle: 'border border-emerald-100 border-b-4 border-b-emerald-400 shadow-md shadow-emerald-100/50 hover:shadow-xl hover:shadow-emerald-200/70',
  },
  {
    step: '04',
    stepBadge: 'bg-amber-100/90 text-amber-700',
    title: 'Development & Media',
    desc: 'Building clean Next.js & Flutter code, alongside editing 4K Instagram Reels, YouTube videos, and high-ROI ad media.',
    icon: Code2,
    iconColor: 'text-amber-600',
    iconBadgeBg: 'bg-amber-50 border border-amber-100',
    arrowColor: 'bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white',
    cardStyle: 'border border-amber-100 border-b-4 border-b-amber-400 shadow-md shadow-amber-100/50 hover:shadow-xl hover:shadow-amber-200/70',
  },
  {
    step: '05',
    stepBadge: 'bg-rose-100/90 text-rose-600',
    title: 'Testing & Review',
    desc: 'Rigorous cross-device web/app testing, video sound & subtitle sync check, color grading, and caption proofreading.',
    icon: ClipboardCheck,
    iconColor: 'text-rose-600',
    iconBadgeBg: 'bg-rose-50 border border-rose-100',
    arrowColor: 'bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white',
    cardStyle: 'border border-rose-100 border-b-4 border-b-rose-400 shadow-md shadow-rose-100/50 hover:shadow-xl hover:shadow-rose-200/70',
  },
  {
    step: '06',
    stepBadge: 'bg-sky-100/90 text-sky-600',
    title: 'Launch & Publishing',
    desc: 'Deploying web/apps live, publishing Play Store APKs, scheduling social media posts, and launching Meta ad campaigns.',
    icon: Rocket,
    iconColor: 'text-sky-600',
    iconBadgeBg: 'bg-sky-50 border border-sky-100',
    arrowColor: 'bg-sky-50 text-sky-600 group-hover:bg-sky-600 group-hover:text-white',
    cardStyle: 'border border-sky-100 border-b-4 border-b-[#00A3E0] shadow-md shadow-sky-100/50 hover:shadow-xl hover:shadow-sky-200/70',
  },
  {
    step: '07',
    stepBadge: 'bg-indigo-100/90 text-indigo-600',
    title: 'Support & Growth',
    desc: 'Dedicated technical maintenance, ongoing video editing, daily social media management, and monthly growth reports.',
    icon: Headphones,
    iconColor: 'text-indigo-600',
    iconBadgeBg: 'bg-indigo-50 border border-indigo-100',
    arrowColor: 'bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white',
    cardStyle: 'border border-indigo-100 border-b-4 border-b-indigo-400 shadow-md shadow-indigo-100/50 hover:shadow-xl hover:shadow-indigo-200/70',
  },
];

export default function WorkingProcessGrid() {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div ref={containerRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {workingProcess.map((stp, idx) => {
        const Icon = stp.icon;
        const delayMs = idx * 130;
        return (
          <div
            key={idx}
            style={{
              transitionDelay: `${delayMs}ms`,
            }}
            className={`bg-white p-6 rounded-[28px] ${stp.cardStyle} flex flex-col justify-between group relative overflow-hidden transition-all duration-700 ease-out transform ${
              isVisible
                ? 'opacity-100 translate-y-0 scale-100'
                : 'opacity-0 translate-y-12 scale-95 pointer-events-none'
            } hover:-translate-y-2`}
          >
            <div>
              {/* Top Row: Number Badge Pill */}
              <div className="flex items-center justify-between mb-3">
                <span className={`text-xs font-black px-3 py-1 rounded-full ${stp.stepBadge}`}>
                  {stp.step}
                </span>
              </div>

              {/* Extra Large Prominent Logo Symbol Badge */}
              <div className={`w-20 h-20 sm:w-24 sm:h-24 rounded-3xl ${stp.iconBadgeBg} flex items-center justify-center mx-auto my-4 group-hover:scale-110 transition-transform duration-300 shadow-2xs`}>
                <Icon className={`w-11 h-11 sm:w-13 sm:h-13 ${stp.iconColor}`} />
              </div>

              {/* Title */}
              <h3 className="text-base sm:text-lg font-black text-slate-900 mb-1.5 text-left">
                {stp.title}
              </h3>

              {/* Description */}
              <p className="text-xs text-slate-500 leading-relaxed font-normal text-left">
                {stp.desc}
              </p>
            </div>

            {/* Bottom Right Arrow Circle */}
            <div className="pt-4 flex items-center justify-end">
              <div className={`w-8 h-8 rounded-full ${stp.arrowColor} flex items-center justify-center transition-all duration-300 shadow-2xs`}>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        );
      })}

      {/* Card 08: Guaranteed Result Special Card */}
      <div
        style={{
          transitionDelay: `${7 * 130}ms`,
        }}
        className={`bg-[#EBFBF5] p-6 rounded-[28px] border border-emerald-200 border-b-4 border-b-emerald-500 shadow-md shadow-emerald-100/50 hover:shadow-xl hover:shadow-emerald-200/70 flex flex-col justify-between group relative overflow-hidden transition-all duration-700 ease-out transform ${
          isVisible
            ? 'opacity-100 translate-y-0 scale-100'
            : 'opacity-0 translate-y-12 scale-95 pointer-events-none'
        } hover:-translate-y-2`}
      >
        <div>
          <div className="flex items-center justify-between mb-3 opacity-0">
            <span className="text-xs font-black px-3 py-1">08</span>
          </div>

          {/* Extra Large Golden Trophy Logo Badge */}
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-amber-50 border border-amber-200 flex items-center justify-center mx-auto my-4 group-hover:scale-110 transition-transform duration-300 shadow-2xs">
            <Trophy className="w-11 h-11 sm:w-13 sm:h-13 text-amber-600" />
          </div>

          {/* Title */}
          <h3 className="text-base sm:text-lg font-black text-emerald-950 mb-1 text-left">
            Guaranteed Result
          </h3>

          {/* Subtitle Highlight */}
          <div className="text-xs font-extrabold text-emerald-700 mb-2 text-left">
            100% Launch Guarantee
          </div>

          {/* Description */}
          <p className="text-xs text-slate-600 leading-relaxed font-normal text-left">
            Live staging <span className="font-bold text-slate-900">preview</span> on your phone before final deployment.
          </p>
        </div>

        {/* Bottom Right Solid Green Arrow Circle */}
        <div className="pt-4 flex items-center justify-end">
          <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    </div>
  );
}
