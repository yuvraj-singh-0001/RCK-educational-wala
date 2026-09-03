import Link from 'next/link';
import { 
  GraduationCap, 
  CheckCircle2, 
  MessageCircle, 
  Eye, 
  BookOpen, 
  Users, 
  Award, 
  Bell, 
  FileText,
  ShieldCheck,
  Calculator,
  ArrowRight
} from 'lucide-react';
import RelatedServicesSection from '../../../components/RelatedServicesSection';
import FaqSection from '../../../components/FaqSection';

export const metadata = {
  title: 'School & Coaching Institute Education Portal Development in India',
  description: 'Attract more student admissions with a professional coaching institute and school website. Course syllabus, online admission forms, test results publication, and student inquiries starting at ₹7,999.',
  keywords: [
    'education portal development india',
    'coaching institute website design',
    'school website development company india',
    'tuition center website maker',
    'student admission portal developer',
    'online course portal development'
  ],
  alternates: {
    canonical: 'https://sitemint.in/services/education-portal',
  },
  openGraph: {
    title: 'School & Coaching Education Portal Development | SiteMint',
    description: 'Custom education portals with online admissions, course catalog, and student results system.',
    url: 'https://sitemint.in/services/education-portal',
  },
};

export default function EducationPortalPage() {
  const educationFeatures = [
    {
      title: 'Course Catalog & Syllabus Breakdown',
      desc: 'Showcase your batches, target exams (JEE, NEET, Board, Foundation), syllabus, class timings, and fee structures clearly.',
    },
    {
      title: 'Online Student Admission & Inquiry Form',
      desc: 'Capture student details, class, target course, and phone number directly into your admin dashboard and WhatsApp.',
    },
    {
      title: 'Student Test Results & Ranking System',
      desc: 'Publish weekly test scores, topper results, and report cards online so parents stay informed and impressed.',
    },
    {
      title: 'Digital Notice Board & Event Calendar',
      desc: 'Announce holidays, upcoming batch start dates, parent-teacher meetings, and seminar registrations with 1-click updates.',
    },
    {
      title: 'Teacher & Faculty Profiles with Credentials',
      desc: 'Highlight your experienced educators, their qualifications, and track records to build instant authority and trust with parents.',
    },
    {
      title: 'Student Study Material & PDF Downloads',
      desc: 'Provide secure downloadable sample papers, previous year question banks, and notes directly to enrolled students.',
    },
  ];

  return (
    <div className="w-full pt-6 pb-12 sm:pt-10 sm:pb-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-center mb-12 sm:mb-16">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-sky-800 text-xs font-bold uppercase tracking-wider mb-4 sm:mb-5 shadow-2xs">
              <GraduationCap className="w-3.5 h-3.5 text-sky-600" /> Education & Coaching Growth Portal
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-4 sm:mb-5 tracking-tight">
              Complete <span className="gradient-text-purple">School & Coaching</span> Education Portal
            </h1>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8 font-normal">
              Build trust with parents and double your student admissions. Showcase your top results, batches, study materials, and receive admission inquiries directly on WhatsApp.
            </p>

            <div className="flex flex-wrap gap-3 sm:gap-4 mb-6 sm:mb-8">
              <Link
                href="/demos/education"
                className="btn-primary text-xs sm:text-sm !py-2.5 sm:!py-3 !px-5 sm:!px-6 shadow-sm"
              >
                <Eye className="w-4 h-4" />
                <span>Explore Live Education Demo</span>
              </Link>

              <a
                href="https://wa.me/918920683588?text=Hi%20SiteMint!%20I%20want%20to%20get%20a%20School/Coaching%20Education%20Portal%20made."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp text-xs sm:text-sm !py-2.5 sm:!py-3 !px-5 sm:!px-6 shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Quote (₹7,999)</span>
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-slate-500 font-semibold">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-sky-600" /> 10–14 Days Delivery
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-sky-600" /> Free Domain & Hosting
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-sky-600" /> WhatsApp Admission Alerts
              </span>
            </div>
          </div>

          {/* Pricing Box */}
          <div className="lg:col-span-5">
            <div className="glass-card p-5 sm:p-8 bg-slate-900 text-white border border-slate-800 shadow-xl shadow-slate-900/20">
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <span className="text-xs uppercase font-bold tracking-wider text-sky-400">Complete Institute Suite</span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  Ready in 10-14 Days
                </span>
              </div>

              <div className="text-3xl sm:text-4xl font-extrabold text-white mb-1">
                ₹7,999 <span className="text-xs text-slate-400 font-sans font-normal">(One-time fee)</span>
              </div>
              <p className="text-xs text-slate-400 mb-5 sm:mb-6">
                All-in-one portal to drive admissions and manage student information.
              </p>

              <div className="space-y-2 sm:space-y-2.5 text-xs text-slate-300 mb-5 sm:mb-6 border-t border-b border-slate-800 py-4">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                  <span>Course & Batch Listings with Syllabus</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                  <span>Online Admission Inquiry Engine</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                  <span>Test Result Publication System</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                  <span>Free 1 Year Domain, Hosting & SSL</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                  <span>Google Search Console & Local SEO</span>
                </div>
              </div>

              <a
                href="https://wa.me/918920683588?text=Hi%20SiteMint!%20I%20want%20to%20order%20the%20Coaching%20Institute%20Portal%20Package."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp w-full justify-center text-xs sm:text-sm py-3"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Book Education Portal Now</span>
              </a>
            </div>
          </div>
        </div>

        {/* Features List */}
        <div className="mb-14 sm:mb-20">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 mb-2 sm:mb-3 tracking-tight">
              Designed for <span className="gradient-text-purple">Coaching Institutes, Tutors & Schools</span>
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm">
              Stand out from local competitors with a modern digital campus that impresses students and parents.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {educationFeatures.map((feat, idx) => (
              <div key={idx} className="glass-card p-5 sm:p-6 border border-slate-200 hover:border-sky-300 transition">
                <div className="w-9 h-9 rounded-xl bg-sky-100 text-sky-800 flex items-center justify-center font-bold text-sm mb-3 sm:mb-4">
                  0{idx + 1}
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-1.5 sm:mb-2">{feat.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <RelatedServicesSection currentService="education-portal" />
      <FaqSection />
    </div>
  );
}
