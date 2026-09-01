import Link from 'next/link';
import { ShieldCheck, Lock, Eye, FileText } from 'lucide-react';

export const metadata = {
  title: 'Privacy Policy | SiteMint',
  description: 'SiteMint privacy policy regarding client data protection, communication, and web development deliverables.',
  alternates: {
    canonical: 'https://sitemint.in/privacy-policy',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="w-full pt-6 pb-12 sm:pt-10 sm:pb-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 pb-6 border-b border-slate-200">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-50 border border-violet-200 text-violet-800 text-xs font-bold uppercase tracking-wider mb-4">
            <Lock className="w-3.5 h-3.5 text-violet-600" /> Transparency & Trust
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-2">
            Privacy Policy
          </h1>
          <p className="text-xs text-slate-500 font-medium">Last Updated: January 2025</p>
        </div>

        <div className="prose prose-slate max-w-none text-xs sm:text-sm text-slate-700 leading-relaxed space-y-6">
          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-2">1. Overview</h2>
            <p>
              SiteMint (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) respects your privacy and is committed to protecting any personal and business information you share with us through our website (sitemint.in) or WhatsApp communication.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-2">2. Information We Collect</h2>
            <p>We only collect information required to build and deliver your digital project:</p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li>Name and contact details (Phone number, WhatsApp, Email).</li>
              <li>Business details, logos, photos, menu items, and course catalogs provided by you.</li>
              <li>Hosting and domain registration preferences.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-2">3. How We Use Your Information</h2>
            <p>Your details are strictly used for:</p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li>Configuring your website, domain, and server hosting.</li>
              <li>Setting up WhatsApp order dispatch and notification integrations.</li>
              <li>Providing 60 days of technical support and post-launch maintenance.</li>
            </ul>
            <p className="mt-2 font-bold text-slate-900">
              We never sell, rent, or trade your personal or business data to any third-party marketing companies.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-2">4. Code & Data Ownership</h2>
            <p>
              Once final payment is completed, the client owns 100% of their website source code, intellectual property, and uploaded business data with zero lock-in or recurring holding fees.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-2">5. Contact Us</h2>
            <p>
              If you have any questions regarding this Privacy Policy, contact us directly at:
            </p>
            <p className="mt-1 font-semibold text-violet-700">
              Email: singhyuvraj8420@gmail.com | WhatsApp: +91 86013 00910
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
