import Link from 'next/link';
import { FileText, CheckCircle2, ShieldCheck } from 'lucide-react';

export const metadata = {
  title: 'Terms & Conditions | SiteMint',
  description: 'SiteMint terms and conditions regarding project delivery, payments, domain ownership, and maintenance.',
  alternates: {
    canonical: 'https://sitemint.in/terms-and-conditions',
  },
};

export default function TermsAndConditionsPage() {
  return (
    <div className="w-full pt-6 pb-12 sm:pt-10 sm:pb-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 pb-6 border-b border-slate-200">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-50 border border-violet-200 text-violet-800 text-xs font-bold uppercase tracking-wider mb-4">
            <FileText className="w-3.5 h-3.5 text-violet-600" /> Transparent Guidelines
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-2">
            Terms & Conditions
          </h1>
          <p className="text-xs text-slate-500 font-medium">Last Updated: January 2025</p>
        </div>

        <div className="prose prose-slate max-w-none text-xs sm:text-sm text-slate-700 leading-relaxed space-y-6">
          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-2">1. Scope of Services</h2>
            <p>
              SiteMint provides custom web development, e-commerce stores, education portals, mobile applications, and software solutions according to the specific package or custom quotation agreed upon with the client.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-2">2. Delivery Timeline</h2>
            <p>
              Standard 5-page websites are delivered within 7 business days from the receipt of required client content (logos, text, photos, menu items). Complex portals and apps are delivered within 14–21 business days.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-2">3. Payments & Milestones</h2>
            <p>
              We operate on transparent milestone stages. No advance fee is required for initial scoping and live demo preparation. Final project handover occurs upon milestone completion and approval.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-2">4. Domain, Hosting & Source Code Ownership</h2>
            <p>
              All domains registered as part of our packages are registered under the client&apos;s name. Full source code ownership and access credentials are provided to the client with zero monthly retention fees.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-2">5. 60 Days Free Technical Maintenance</h2>
            <p>
              Every website package includes 60 days of complimentary technical support starting from the live launch date, covering minor text/image updates and bug fixes.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
