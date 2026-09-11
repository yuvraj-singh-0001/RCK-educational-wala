import Link from 'next/link';
import { FileText, AlertTriangle, CheckCircle2, ShieldAlert, CreditCard, Ban, Briefcase, Clock, Scale, Lock } from 'lucide-react';

export const metadata = {
  title: 'Terms & Conditions of Service | SiteMint',
  description: 'Official binding terms and conditions for web development, server configuration, payment schedules, and strict non-refundable advance policy by SiteMint.',
  alternates: {
    canonical: 'https://sitemint.in/terms-and-conditions',
  },
};

export default function TermsAndConditionsPage() {
  return (
    <div className="w-full pt-6 pb-16 sm:pt-10 sm:pb-24 bg-slate-50/60 font-sans text-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="mb-8 pb-6 border-b border-slate-200 bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-200/80">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-100 border border-violet-200 text-violet-800 text-xs font-bold uppercase tracking-wider mb-4">
            <Scale className="w-3.5 h-3.5 text-violet-600" /> Legally Binding Agreement
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
            Terms & Conditions of Service
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
            Please carefully read and verify all terms before contacting us, commissioning work, or sending any payment. 
            By initiating a project or making a deposit with SiteMint, you unconditionally accept all clauses outlined below.
          </p>
          
          <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between flex-wrap gap-2 text-xs font-semibold text-slate-500">
            <div className="flex items-center gap-1.5 text-violet-700">
              <Clock className="w-4 h-4" />
              <span><strong>Last Updated & Effective Date:</strong> September 11, 2026</span>
            </div>
            <span className="bg-slate-100 px-2.5 py-1 rounded-md border text-slate-600">Version 2.4 (Official)</span>
          </div>
        </div>

        {/* Important Warning Alert Box */}
        <div className="mb-8 p-5 sm:p-6 rounded-2xl bg-amber-500/10 border-2 border-amber-500/40 text-amber-950 flex flex-col sm:flex-row gap-4 items-start shadow-sm">
          <AlertTriangle className="w-7 h-7 text-amber-600 shrink-0 mt-0.5" />
          <div className="space-y-2 text-xs sm:text-sm">
            <h3 className="font-extrabold text-amber-900 text-sm sm:text-base tracking-tight uppercase">
              Mandatory Pre-Contact & Pre-Payment Notice
            </h3>
            <p className="leading-relaxed text-amber-950 font-medium">
              You must thoroughly inspect, review, and understand all website features, server specifications, tech stacks, delivery scopes, and payment terms <strong>BEFORE initiating contact or making any payment</strong>.
            </p>
            <p className="leading-relaxed text-amber-950 font-medium bg-amber-100/80 p-2.5 rounded-lg border border-amber-200">
              ⚠️ If you proceed without reading or if any misunderstanding occurs on your part regarding website features, server limits, or services, <strong>the sole responsibility rests entirely with the Client</strong>. SiteMint shall not be held liable for any client assumptions or miscommunications.
            </p>
          </div>
        </div>

        {/* Legal Terms Sections */}
        <div className="space-y-6 text-xs sm:text-sm leading-relaxed">
          
          {/* Section 1: Pre-Work Advance Deposit Policy */}
          <section className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200 shadow-sm space-y-3.5">
            <div className="flex items-center gap-2.5 text-violet-800 font-bold text-base sm:text-lg border-b pb-3 border-slate-100">
              <CreditCard className="w-5 h-5 text-violet-600 shrink-0" />
              <h2>1. Upfront Advance Deposit Required Before Project Commencement</h2>
            </div>
            <p className="text-slate-700">
              To allocate developer time, configure server environments, register domain assets, and initiate custom web or application architecture:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-slate-700 font-medium">
              <li>
                <strong>Mandatory Advance Payment:</strong> The Client <u>MUST pay the required advance deposit or upfront fee</u> before any design, development, server configuration, or project work begins.
              </li>
              <li>
                <strong>No Free Work or Speculative Builds:</strong> No work will be executed, nor will any custom features be engineered without confirmed receipt of the upfront advance payment.
              </li>
              <li>
                <strong>Full One-Time Payment Requirement:</strong> The remaining project balance or full package price must be cleared in full before final production deployment, source code transfer, or administrative access credentials handover.
              </li>
            </ul>
          </section>

          {/* Section 2: Strict Non-Refundable Policy */}
          <section className="bg-white p-6 sm:p-7 rounded-2xl border-2 border-red-200 shadow-sm space-y-3.5">
            <div className="flex items-center gap-2.5 text-red-700 font-bold text-base sm:text-lg border-b pb-3 border-red-100">
              <Ban className="w-5 h-5 text-red-600 shrink-0" />
              <h2>2. Strict 100% Non-Refundable & Non-Returnable Policy</h2>
            </div>
            <p className="text-slate-800 font-medium">
              SiteMint operates under an absolute, unconditional <strong>Strict No-Refund Policy</strong> across all digital services, software development, server setups, and custom website packages.
            </p>
            
            <div className="p-4 sm:p-5 bg-red-50 rounded-xl border border-red-300 text-red-950 font-semibold space-y-2 text-xs sm:text-sm">
              <p className="text-red-900 font-extrabold uppercase tracking-wide flex items-center gap-1.5">
                <ShieldAlert className="w-4 h-4 text-red-600" />
                ABSOLUTE NO REFUND GUARANTEE UNDER ALL CONDITIONS:
              </p>
              <p className="leading-relaxed">
                Once any payment (whether advance deposit, interim milestone, or full payment) is received by SiteMint, 
                <span className="underline decoration-red-500 font-black"> IT IS 100% NON-REFUNDABLE AND WILL NOT BE RETURNED UNDER ANY CIRCUMSTANCES</span>.
              </p>
              <ul className="list-disc pl-5 pt-1 space-y-1 text-red-900/90 font-medium">
                <li>If the Client decides to cancel or abort the project midway, <strong>no money will be refunded</strong>.</li>
                <li>If the Client changes their mind, alters business direction, or decides not to launch, <strong>no money will be refunded</strong>.</li>
                <li>If the Client fails or delays in providing business details, logos, or content, <strong>no money will be refunded</strong>.</li>
                <li>If the Client misunderstands any feature despite prior specification access, <strong>no money will be refunded</strong>.</li>
              </ul>
              <p className="text-xs text-red-800 pt-1 italic font-normal">
                * All payments received are immediately consumed towards developer allocation, server infrastructure costs, licensing, and operational labor.
              </p>
            </div>
          </section>

          {/* Section 3: Client Verification & Waiver of Misunderstanding Claims */}
          <section className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200 shadow-sm space-y-3.5">
            <div className="flex items-center gap-2.5 text-blue-800 font-bold text-base sm:text-lg border-b pb-3 border-slate-100">
              <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
              <h2>3. Client Verification & Waiver of Misunderstanding Claims</h2>
            </div>
            <p className="text-slate-700">
              It is the Client&apos;s sole responsibility to verify that the ordered package or custom quote aligns with their specific business expectations:
            </p>
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-slate-800 space-y-2">
              <p className="font-bold text-slate-900">Client Responsibility Guarantee:</p>
              <p className="leading-relaxed">
                By contacting SiteMint or submitting payment, the Client explicitly confirms: 
                <em> &ldquo;I have thoroughly read, reviewed, and understood all website features, tech stacks, server specifications, and package inclusions. If any misunderstanding or expectation gap occurs due to my failure to read or verify, it is entirely my mistake, and SiteMint is completely free of any liability.&rdquo;</em>
              </p>
            </div>
          </section>

          {/* Section 4: Mandatory Client Business Information & Content Submission */}
          <section className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200 shadow-sm space-y-3.5">
            <div className="flex items-center gap-2.5 text-indigo-800 font-bold text-base sm:text-lg border-b pb-3 border-slate-100">
              <Briefcase className="w-5 h-5 text-indigo-600 shrink-0" />
              <h2>4. Mandatory Provision of Business & Target Audience Details</h2>
            </div>
            <p className="text-slate-700">
              To enable efficient design and targeted development, the Client MUST provide accurate, complete business information prior to development:
            </p>
            
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="p-3.5 bg-indigo-50/60 border border-indigo-100 rounded-xl">
                <span className="font-bold text-indigo-950 block mb-1">1. Business Nature & Model</span>
                <p className="text-xs text-indigo-900/80">Clear description of your company, services offered, products sold, or educational curriculum.</p>
              </div>
              <div className="p-3.5 bg-indigo-50/60 border border-indigo-100 rounded-xl">
                <span className="font-bold text-indigo-950 block mb-1">2. Target Audience & Market</span>
                <p className="text-xs text-indigo-900/80">Details regarding your ideal customers, geographic location, and target client profile.</p>
              </div>
              <div className="p-3.5 bg-indigo-50/60 border border-indigo-100 rounded-xl">
                <span className="font-bold text-indigo-950 block mb-1">3. Product & Service Catalogs</span>
                <p className="text-xs text-indigo-900/80">Pricing structures, menu items, course syllabus, or e-commerce inventory details.</p>
              </div>
              <div className="p-3.5 bg-indigo-50/60 border border-indigo-100 rounded-xl">
                <span className="font-bold text-indigo-950 block mb-1">4. Brand Assets & Media</span>
                <p className="text-xs text-indigo-900/80">Official logo, brand colors, text copy, images, phone numbers, and WhatsApp numbers.</p>
              </div>
            </div>
            <p className="text-xs text-slate-500 italic pt-1">
              * Note: Delivery timelines commence ONLY after all required business information and brand assets are fully submitted by the Client.
            </p>
          </section>

          {/* Section 5: Intellectual Property & Delivery Conditions */}
          <section className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200 shadow-sm space-y-3.5">
            <div className="flex items-center gap-2.5 text-emerald-800 font-bold text-base sm:text-lg border-b pb-3 border-slate-100">
              <Lock className="w-5 h-5 text-emerald-600 shrink-0" />
              <h2>5. Deliverables, Domain & Code Ownership</h2>
            </div>
            <ul className="list-disc pl-5 space-y-2 text-slate-700">
              <li>
                <strong>100% Ownership Upon Full Payment:</strong> Complete source code, domain registry rights, and administrative credentials will be handed over to the Client only after 100% of the agreed project price is cleared.
              </li>
              <li>
                <strong>Retention of Rights:</strong> All intellectual property, code, designs, and staging links remain the sole property of SiteMint until final payment clearance.
              </li>
              <li>
                <strong>60 Days Free Technical Maintenance:</strong> Standard website packages include 60 days of complimentary technical support starting from the live launch date, covering minor text/image updates and bug fixes.
              </li>
            </ul>
          </section>

          {/* Section 6: Complete Limitation of Liability & Legal Indemnification */}
          <section className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200 shadow-sm space-y-3.5">
            <div className="flex items-center gap-2.5 text-slate-900 font-bold text-base sm:text-lg border-b pb-3 border-slate-100">
              <ShieldAlert className="w-5 h-5 text-slate-700 shrink-0" />
              <h2>6. Complete Limitation of Liability & Legal Indemnification</h2>
            </div>
            <p className="text-slate-700">
              To safeguard SiteMint against unmerited claims, legal disputes, or third-party liabilities:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-slate-700">
              <li>
                <strong>Zero Financial Liability:</strong> SiteMint, its developers, and owners shall not be liable for any business losses, lost profits, client operational failure, or third-party server downtime.
              </li>
              <li>
                <strong>Client Content Responsibility:</strong> The Client represents that all content, logos, images, and trademarks provided to SiteMint are legally owned or licensed by the Client. The Client agrees to fully indemnify and hold SiteMint harmless against any copyright or legal claims arising from Client-supplied content.
              </li>
              <li>
                <strong>No Unlawful Activity:</strong> SiteMint reserves the right to terminate services immediately without refund if the Client utilizes the web platform for fraudulent, illegal, or deceptive business practices.
              </li>
            </ul>
          </section>

          {/* Section 7: Irrevocable Binding Acceptance */}
          <section className="bg-slate-950 text-white p-7 sm:p-8 rounded-2xl shadow-xl space-y-4 border border-slate-800">
            <div className="flex items-center gap-2 text-amber-400 font-extrabold text-lg sm:text-xl">
              <Scale className="w-6 h-6 text-amber-400" />
              <h2>7. Irrevocable Agreement & Binding Acceptance</h2>
            </div>
            <p className="text-slate-300 leading-relaxed text-xs sm:text-sm">
              By communicating with SiteMint, commissioning a project, or transferring any advance deposit or payment, 
              <strong> you irrevocably confirm that you have read, understood, and agreed to all the Terms and Conditions listed on this page</strong>. 
              These terms form a legally binding contract between the Client and SiteMint.
            </p>
            
            <div className="pt-4 flex items-center justify-between flex-wrap gap-4 text-xs text-slate-400 border-t border-slate-800/80">
              <span>Have any questions regarding our terms? Reach out on WhatsApp before placing an order.</span>
              <Link 
                href="https://wa.me/918920683588" 
                target="_blank" 
                rel="noreferrer" 
                className="px-5 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-bold text-xs transition shadow-lg flex items-center gap-1.5"
              >
                <span>Contact via WhatsApp</span>
              </Link>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
