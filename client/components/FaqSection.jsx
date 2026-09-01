'use client';

import { useState } from 'react';
import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'What is the difference between Starter (₹3,999), Business (₹7,999), and Professional (₹15,999) plans?',
      a: '• Starter Website (₹3,999): Best for small businesses & personal branding. Includes 5 custom pages, responsive UI, WhatsApp chat, contact form with instant email notifications, basic admin panel & basic SEO. (Domain/hosting separate).\n• Business Website (₹7,999): Best for growing businesses, e-commerce, coaching & restaurants. Adds up to 10 dynamic pages, product/course management, online ordering, user registration & dashboard, complete admin portal, Razorpay UPI gateway & 6 months maintenance.\n• Professional Business System (₹15,999): Complete all-in-one solution. Includes unlimited pages, 1 Year Free Domain + 1 Year Cloud Hosting Included, full user system, multi-entity admin dashboard, email automation, technical SEO & 1 Year Free Maintenance.',
    },
    {
      q: 'Are Domain, SSL, and Cloud Hosting included in all packages?',
      a: 'In our Professional Business System (₹15,999), 1 Year Domain (.IN/.COM) and 1 Year High-Speed Cloud Hosting with SSL are 100% Included for Free. For the Starter (₹3,999) and Business (₹7,999) plans, domain and hosting are purchased separately by the client directly in their name (or we can assist you in getting them for ~₹1,499–₹1,999/year).',
    },
    {
      q: 'What 4 core services does SiteMint provide?',
      a: 'We provide 4 specialized pillars for business growth in India:\n1. Web & Custom Software Development (Websites, E-Commerce, ERP & Portals starting ₹3,999)\n2. Mobile App Development (Android .APK & iOS apps with Play Store publishing starting ₹12,999)\n3. Professional Video Editing (Viral Instagram Reels, Shorts & Commercial Ads starting ₹499/reel)\n4. Social Media Management (7-8 platforms management, daily post designs & Meta Ads starting ₹4,999/mo).',
    },
    {
      q: 'How quickly will my project be completed and launched?',
      a: '• Starter & Business Websites: Delivered in 7 to 10 Days.\n• Professional Systems & Custom Portals: Delivered in 10 to 14 Days.\n• Mobile Applications (.APK / iOS): Delivered in 14 to 21 Days.\n• Video Editing: Fast turnaround within 24 to 48 Hours.',
    },
    {
      q: 'How does online payment collection (UPI, QR & Cards) work?',
      a: 'In our Business and Professional plans, we integrate Razorpay Payment Gateway. Your customers can pay directly via Google Pay, PhonePe, Paytm, BHIM UPI, QR code, Debit/Credit Cards, and NetBanking. 100% of the funds settle directly into your bank account with zero platform commission from SiteMint.',
    },
    {
      q: 'How do inquiries and orders reach me from the website?',
      a: 'Every contact form and order submission triggers an instant email notification with full customer details delivered straight to your email inbox. Additionally, 1-click WhatsApp buttons allow customers to send orders and inquiries directly to your WhatsApp number in real-time.',
    },
    {
      q: 'What kind of post-launch technical support and maintenance is provided?',
      a: 'Every project comes with dedicated technical support:\n• Starter Plan: Basic deployment & go-live assistance.\n• Business Plan: 6 Months Free Technical Maintenance & Bug Fixes.\n• Professional Plan: 1 Full Year Free Maintenance, Security Updates & Configuration Support.\nYou can message our technical developers directly on WhatsApp anytime for prompt help.',
    },
    {
      q: 'Do I get 100% full ownership of my website, source code, and assets?',
      a: 'Yes, 100%! You own all source code, database credentials, graphic design creatives, video master files, and domain rights. There are zero monthly lock-ins, zero holding charges, and zero platform commissions.',
    },
  ];

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': faqs.map((f) => ({
      '@type': 'Question',
      'name': f.q,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': f.a,
      },
    })),
  };

  return (
    <section className="py-14 sm:py-16 md:py-20 relative bg-slate-50/70 border-t border-slate-200/80 w-full overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-50 border border-violet-200 text-violet-800 text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-3 sm:mb-4 shadow-2xs">
            <HelpCircle className="w-3.5 h-3.5 text-violet-600" /> Frequently Asked Questions
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mb-2 sm:mb-3">
            Got Questions? <span className="gradient-text-purple">We Have Answers</span>
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm">
            Everything you need to know about our plans, pricing, deliverables, and launch timelines.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3 sm:space-y-3.5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-2xs hover:border-violet-300 transition-all"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50/60 transition-colors"
                >
                  <span className="text-xs sm:text-sm md:text-base font-bold text-slate-900 leading-snug">
                    {faq.q}
                  </span>
                  <div className={`p-1.5 rounded-xl bg-slate-100 text-slate-500 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-violet-700 bg-violet-100' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 whitespace-pre-line animate-in fade-in duration-150">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
