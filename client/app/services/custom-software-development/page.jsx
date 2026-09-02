import Link from 'next/link';
import { 
  Cpu, 
  CheckCircle2, 
  MessageCircle, 
  ShieldCheck, 
  Calculator,
  ArrowRight,
  Database,
  Users,
  FileSpreadsheet,
  Lock,
  Layers
} from 'lucide-react';
import RelatedServicesSection from '../../../components/RelatedServicesSection';
import FaqSection from '../../../components/FaqSection';

export const metadata = {
  title: 'Custom Software & CRM Dashboard Development in India | SiteMint',
  description: 'Automate your business workflows with custom software, cloud database, role-based admin panels, billing ERP, and automated reporting starting at ₹14,999.',
  keywords: [
    'custom software development india',
    'crm development company',
    'business management software maker',
    'custom billing erp development',
    'cloud dashboard developer india'
  ],
  alternates: {
    canonical: 'https://sitemint.in/services/custom-software-development',
  },
  openGraph: {
    title: 'Custom Software & CRM Dashboard Development | SiteMint',
    description: 'Custom web software, databases, CRM, and role-based portals for businesses in India.',
    url: 'https://sitemint.in/services/custom-software-development',
  },
};

export default function CustomSoftwareDevelopmentPage() {
  const softwareFeatures = [
    {
      title: 'Multi-Role User Authentication & Permissions',
      desc: 'Granular access controls for Super Admins, Staff Members, Field Agents, and Clients with secure JWT sessions.',
    },
    {
      title: 'Automated Invoicing & GST Billing System',
      desc: 'Generate PDF invoices, send automated WhatsApp payment reminders, and track pending client dues with 1 click.',
    },
    {
      title: 'Scalable Cloud Database & Daily Backups',
      desc: 'PostgreSQL / MongoDB cloud architecture with automated automated daily backups, SSL encryption, and 99.9% uptime SLA.',
    },
    {
      title: 'Custom Analytics & Exportable Excel Reports',
      desc: 'Interactive visual graphs for revenue, customer retention, sales pipelines, and 1-click CSV/Excel report exports.',
    },
    {
      title: 'WhatsApp API & SMS Gateway Automation',
      desc: 'Automatically trigger WhatsApp notifications to customers on status updates, OTPs, receipts, and order milestones.',
    },
    {
      title: 'Full Source Code & Database Ownership',
      desc: 'You retain 100% intellectual property ownership of your code, database, and business architecture with zero lock-in.',
    },
  ];

  return (
    <div className="w-full pt-6 pb-12 sm:pt-10 sm:pb-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-center mb-12 sm:mb-16">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-800 text-xs font-bold uppercase tracking-wider mb-4 sm:mb-5 shadow-2xs">
              <Cpu className="w-3.5 h-3.5 text-indigo-600" /> Custom Software & ERP
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-4 sm:mb-5 tracking-tight">
              Scale Your Operations with <span className="gradient-text-hero">Custom Software & CRM</span>
            </h1>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8 font-normal">
              Stop relying on messy Excel sheets. We build powerful, tailored cloud software, management dashboards, and automated workflows engineered to save 20+ hours every week.
            </p>

            <div className="flex flex-wrap gap-3 sm:gap-4 mb-6 sm:mb-8">
              <a
                href="https://wa.me/918601300910?text=Hi%20SiteMint!%20I%20have%20custom%20software/CRM%20requirements%20for%20my%20business."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp text-xs sm:text-sm !py-2.5 sm:!py-3 !px-5 sm:!px-6 shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Discuss Scope on WhatsApp</span>
              </a>

              <Link
                href="/calculator"
                className="btn-secondary text-xs sm:text-sm !py-2.5 sm:!py-3 !px-5 sm:!px-6 flex items-center gap-2"
              >
                <Calculator className="w-4 h-4 text-violet-600" />
                <span>Estimate Cost</span>
              </Link>
            </div>

            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-slate-500 font-semibold">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-indigo-600" /> 18–21 Days Delivery
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-indigo-600" /> 100% IP Code Ownership
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-indigo-600" /> WhatsApp API Ready
              </span>
            </div>
          </div>

          {/* Pricing Box */}
          <div className="lg:col-span-5">
            <div className="glass-card p-5 sm:p-8 bg-slate-900 text-white border border-slate-800 shadow-xl shadow-slate-900/20">
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <span className="text-xs uppercase font-bold tracking-wider text-indigo-400">Enterprise CRM Suite</span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  Custom Architecture
                </span>
              </div>

              <div className="text-3xl sm:text-4xl font-extrabold text-white mb-1">
                ₹14,999 <span className="text-xs text-slate-400 font-sans font-normal">(Starting price)</span>
              </div>
              <p className="text-xs text-slate-400 mb-5 sm:mb-6">
                Full-stack custom software with database & multi-role panels.
              </p>

              <div className="space-y-2 sm:space-y-2.5 text-xs text-slate-300 mb-5 sm:mb-6 border-t border-b border-slate-800 py-4">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                  <span>Custom Role-Based Dashboards (Admin / Staff / Client)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                  <span>Cloud Database & REST API Architecture</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                  <span>Automated Invoicing & PDF Report Generation</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                  <span>Automated WhatsApp API / SMS Notification Engine</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                  <span>6 Months Technical Support & Bug Fixes</span>
                </div>
              </div>

              <a
                href="https://wa.me/918601300910?text=Hi%20SiteMint!%20I%20want%20to%20order%20the%20Custom%20Software%20Development%20Package."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp w-full justify-center text-xs sm:text-sm py-3"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Discuss Custom Requirements</span>
              </a>
            </div>
          </div>
        </div>

        {/* Features List */}
        <div className="mb-14 sm:mb-20">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 mb-2 sm:mb-3 tracking-tight">
              Enterprise Features Built for <span className="gradient-text-hero">Operational Excellence</span>
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm">
              We design custom workflows matching your exact business rules with zero compromises.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {softwareFeatures.map((feat, idx) => (
              <div key={idx} className="glass-card p-5 sm:p-6 border border-slate-200 hover:border-indigo-300 transition">
                <div className="w-9 h-9 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-sm mb-3 sm:mb-4">
                  0{idx + 1}
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-1.5 sm:mb-2">{feat.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <RelatedServicesSection currentService="custom-software-development" />
      <FaqSection />
    </div>
  );
}
