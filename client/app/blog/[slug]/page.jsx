import Link from 'next/link';
import { notFound } from 'next/navigation';
import { 
  Calendar, 
  Clock, 
  MessageCircle, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight, 
  Zap,
  Globe,
  Store,
  GraduationCap,
  ShoppingBag
} from 'lucide-react';
import FaqSection from '../../../components/FaqSection';

const articles = {
  'low-budget-website-development-guide-india': {
    title: 'How to Get a Professional Website Made in Low Budget in India (2026 Complete Guide)',
    category: 'Website Development',
    date: 'January 12, 2026',
    dateIso: '2026-01-12',
    readTime: '5 min read',
    author: 'Yuvraj Singh',
    metaDesc: 'A practical guide for small businesses in India on website development costs, essential features, and what to look for when choosing a developer.',
    relatedSlugs: [
      'custom-ecommerce-store-vs-shopify-for-indian-startups',
      'why-bakeries-need-whatsapp-online-ordering-system',
    ],
    content: `
      <h2>Understanding Website Development Costs in India</h2>
      <p>For small businesses, service providers, tutors, consultants, and retail shops in India, quotes from traditional IT agencies often range from <strong>₹25,000 to ₹50,000+</strong>. For a standard 5-page business website, a clean, modern, and mobile-friendly setup can typically be developed within a much more accessible budget—starting from <strong>₹3,999 (Starter Plan)</strong> up to <strong>₹17,999 (Professional Plan)</strong> depending on custom requirements and server inclusions.</p>
      
      <p>Explore our transparent packages on our <a href="/pricing" class="text-violet-600 underline font-bold">Pricing page</a> to review package details.</p>

      <h2>Essential Features for a Business Website</h2>
      <p>Rather than adding unnecessary animations or complex features that slow down the page, small business websites should focus on high-utility components:</p>
      <ul>
        <li><strong>Mobile-First Responsive Layout:</strong> Most visitors in India browse on mobile devices. A properly optimized Next.js website delivers fast loading speeds when assets, server rendering, and code bundling are configured properly. Explore our <a href="/services/website-development" class="text-violet-600 underline font-semibold">custom website development services</a>.</li>
        <li><strong>Brand Domain Registration:</strong> Registering a dedicated .IN or .COM domain ensures brand authenticity and long-term digital identity.</li>
        <li><strong>Secure Cloud Hosting & SSL:</strong> Ensures encrypted communication (HTTPS) and reliable uptime for visitors.</li>
        <li><strong>Direct WhatsApp Lead Capture:</strong> A 1-click WhatsApp button allows visitors to reach you instantly with pre-filled inquiries, facilitating quicker customer conversations.</li>
        <li><strong>Google Search Console & Sitemap Indexing:</strong> Enables search engines to crawl and index your web pages accurately.</li>
      </ul>

      <h2>Cost Comparison: Traditional Agency vs SiteMint Packages</h2>
      <div class="table-container my-6 overflow-x-auto">
        <table class="w-full text-left border-collapse border border-slate-200 text-xs sm:text-sm">
          <thead>
            <tr class="bg-slate-100 text-slate-900">
              <th class="p-3 border border-slate-200 font-bold">Feature</th>
              <th class="p-3 border border-slate-200 text-slate-700 font-bold">Traditional Agency</th>
              <th class="p-3 border border-slate-200 text-violet-700 bg-violet-50/70 font-bold">SiteMint Starter (₹3,999)</th>
              <th class="p-3 border border-slate-200 text-emerald-700 bg-emerald-50/70 font-bold">SiteMint Professional (₹17,999)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="p-3 border border-slate-200 font-medium">Pricing Model</td>
              <td class="p-3 border border-slate-200 text-slate-600">₹25,000+</td>
              <td class="p-3 border border-slate-200 font-bold text-violet-700 bg-violet-50/40">₹3,999 (One-Time)</td>
              <td class="p-3 border border-slate-200 font-bold text-emerald-700 bg-emerald-50/40">₹17,999 (One-Time)</td>
            </tr>
            <tr>
              <td class="p-3 border border-slate-200 font-medium">Domain & Cloud Server</td>
              <td class="p-3 border border-slate-200 text-slate-600">Additional Yearly Fee</td>
              <td class="p-3 border border-slate-200 text-slate-600">Client-Provided / Add-on</td>
              <td class="p-3 border border-slate-200 font-bold text-emerald-700 bg-emerald-50/40">1 Year Included</td>
            </tr>
            <tr>
              <td class="p-3 border border-slate-200 font-medium">Typical Turnaround</td>
              <td class="p-3 border border-slate-200 text-slate-600">30 to 45 Days</td>
              <td class="p-3 border border-slate-200 text-slate-700">Typical: 5–7 working days*</td>
              <td class="p-3 border border-slate-200 text-slate-700">Typical: 10–14 working days*</td>
            </tr>
            <tr>
              <td class="p-3 border border-slate-200 font-medium">WhatsApp Integration</td>
              <td class="p-3 border border-slate-200 text-slate-600">Custom Quote</td>
              <td class="p-3 border border-slate-200 font-bold text-violet-700 bg-violet-50/40">Included</td>
              <td class="p-3 border border-slate-200 font-bold text-emerald-700 bg-emerald-50/40">Included</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p class="text-xs text-slate-500 italic">*Delivery timeline depends on requirements, content availability, and client approvals.</p>

      <h2>Practical Tips When Hiring a Web Developer</h2>
      <ol>
        <li><strong>Ensure Source Code Access:</strong> Verify that you receive complete ownership and access to your code files without locked monthly subscription dependencies.</li>
        <li><strong>Focus on Speed and Modern Stacks:</strong> Lightweight Next.js or clean HTML/CSS frameworks provide smooth mobile experiences without bloated plugins.</li>
        <li><strong>Clarify Scope and Deliverables:</strong> Establish clear requirements for pages, contact forms, and revision processes prior to project kickoff.</li>
      </ol>

      <div class="callout-box">
        <strong>Planning your website project?</strong> Calculate an estimated budget using our <a href="/calculator" class="text-violet-700 underline font-bold">Instant Cost Calculator</a> or explore our <a href="/services/low-budget-website-development" class="text-violet-700 underline font-bold">Low Budget Website Development solutions</a>.
      </div>
    `,
  },
  'why-bakeries-need-whatsapp-online-ordering-system': {
    title: 'Why Every Bakery & Restaurant Needs Direct WhatsApp Online Ordering (0% Commission Guide)',
    category: 'Restaurant & Food',
    date: 'February 04, 2026',
    dateIso: '2026-02-04',
    readTime: '5 min read',
    author: 'Yuvraj Singh',
    metaDesc: 'How bakeries, cafes, and food businesses can use direct WhatsApp ordering and custom cake selectors to manage orders with zero commission fees.',
    relatedSlugs: [
      'low-budget-website-development-guide-india',
      'custom-ecommerce-store-vs-shopify-for-indian-startups',
    ],
    content: `
      <h2>The Economics of Direct Ordering vs Delivery Apps</h2>
      <p>Third-party food delivery aggregators typically charge between <strong>20% to 30%+ commission</strong> on every order placed through their marketplace. For bakeries specializing in high-value customized cakes and catering orders, these recurring commissions can significantly reduce profit margins. Discover our specialized <a href="/services/restaurant-software" class="text-violet-600 underline font-bold">Restaurant Software</a> and <a href="/services/bakery-restaurant-website" class="text-violet-600 underline font-bold">Bakery Website Development</a> services.</p>

      <h2>Key Benefits of Direct WhatsApp Ordering for Bakeries</h2>
      <ul>
        <li><strong>Zero Commission on Direct Sales:</strong> Orders received directly via WhatsApp are processed with 0% platform commission, allowing businesses to retain their standard product pricing.</li>
        <li><strong>Custom Cake Customization Selector:</strong> Customers can specify flavor options (Chocolate, Red Velvet, Pineapple, Black Forest), weight selections (0.5kg, 1kg, 2kg+), eggless preferences, and custom message text directly on the product card.</li>
        <li><strong>Direct Customer Relationship:</strong> Taking orders directly builds an authentic customer contact list for seasonal greetings, special offers, and repeat orders.</li>
        <li><strong>Flexible Delivery and Pickup Options:</strong> Enables local store pickup, distance-based delivery fee calculations, and direct UPI payments.</li>
      </ul>

      <h2>Sample Order Economics Breakdown</h2>
      <div class="table-container my-6 overflow-x-auto">
        <table class="w-full text-left border-collapse border border-slate-200 text-xs sm:text-sm">
          <thead>
            <tr class="bg-slate-100 text-slate-900">
              <th class="p-3 border border-slate-200 font-bold">Order Channel</th>
              <th class="p-3 border border-slate-200 font-bold">Order Value</th>
              <th class="p-3 border border-slate-200 font-bold text-red-600">Platform Commission</th>
              <th class="p-3 border border-slate-200 font-bold text-emerald-700 bg-emerald-50/70">Net Revenue to Bakery</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="p-3 border border-slate-200 font-medium">Third-Party Marketplace</td>
              <td class="p-3 border border-slate-200">₹800 (Custom Cake)</td>
              <td class="p-3 border border-slate-200 text-red-600">25% (₹200)</td>
              <td class="p-3 border border-slate-200 text-slate-700">₹600</td>
            </tr>
            <tr>
              <td class="p-3 border border-slate-200 font-medium">Direct WhatsApp Ordering</td>
              <td class="p-3 border border-slate-200">₹800 (Custom Cake)</td>
              <td class="p-3 border border-slate-200 text-emerald-700 font-bold">0% (₹0)</td>
              <td class="p-3 border border-slate-200 font-bold text-emerald-700 bg-emerald-50/40">₹800</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="callout-box">
        <strong>Experience the ordering flow:</strong> Test our <a href="/demos/bakery" class="text-violet-700 underline font-bold">Live Bakery Demo</a> to see how custom cake selections and direct WhatsApp order dispatch operate in practice.
      </div>
    `,
  },
  'how-coaching-institutes-double-student-admissions-online': {
    title: '5 Ways Coaching Institutes Can Double Student Admissions With an Online Portal',
    category: 'Education Technology',
    date: 'February 22, 2026',
    dateIso: '2026-02-22',
    readTime: '4 min read',
    author: 'Yuvraj Singh',
    metaDesc: 'How educational institutions and coaching centers in India use digital course brochures, online inquiry forms, and result boards to increase student enrollments.',
    relatedSlugs: [
      'low-budget-website-development-guide-india',
      'custom-ecommerce-store-vs-shopify-for-indian-startups',
    ],
    content: `
      <h2>Building Credibility in Educational Services</h2>
      <p>When parents and students research coaching centers, tuition institutes, and competitive exam programs, they frequently look for course curriculums, faculty credentials, and past performance records online before visiting the center in person. Learn more about our <a href="/services/education-portal" class="text-violet-600 underline font-bold">Education Portal Development</a> and <a href="/services/school-coaching-portal" class="text-violet-600 underline font-bold">School & Coaching Management Portals</a>.</p>

      <h2>5 Functional Features for an Institute Portal</h2>
      <ol>
        <li><strong>Detailed Course & Batch Information:</strong> Clear information on course coverage, exam targets (e.g., Board Exams, Foundation, Competitive Exams), batch schedules, and downloadable syllabus overviews.</li>
        <li><strong>Online Admission Inquiry Form:</strong> Enables parents to submit inquiries with student details, class level, and contact numbers in seconds.</li>
        <li><strong>Published Test Results & Performance Boards:</strong> Showcasing topper performances, weekly test scores, and student testimonials establishes verifiable educational credibility.</li>
        <li><strong>Faculty Background Showcase:</strong> Outlines instructor qualifications, subject specializations, and teaching experience.</li>
        <li><strong>Digital Notice Board:</strong> Provides real-time updates regarding new batch admissions, scholarship test schedules, and holiday announcements.</li>
      </ol>

      <div class="callout-box">
        <strong>Explore a live setup:</strong> Review our <a href="/demos/education" class="text-violet-700 underline font-bold">Live Education Portal Demo</a> and calculate project estimates using our <a href="/calculator" class="text-violet-700 underline font-bold">Website Cost Calculator</a>.
      </div>
    `,
  },
  'custom-ecommerce-store-vs-shopify-for-indian-startups': {
    title: 'Custom E-Commerce Store vs Shopify: Which is Cheaper for Indian Startups?',
    category: 'E-Commerce',
    date: 'March 08, 2026',
    dateIso: '2026-03-08',
    readTime: '6 min read',
    author: 'Yuvraj Singh',
    metaDesc: 'A cost and functionality comparison between monthly hosted platforms like Shopify and one-time custom Next.js e-commerce development with Razorpay UPI integration.',
    relatedSlugs: [
      'low-budget-website-development-guide-india',
      'why-bakeries-need-whatsapp-online-ordering-system',
    ],
    content: `
      <h2>Evaluating Platform Models for E-Commerce</h2>
      <p>When launching an online store in India, founders generally consider two main options: hosted subscription platforms (such as Shopify) or one-time custom web application development (such as Next.js with Razorpay UPI integration). Discover our <a href="/services/ecommerce-development" class="text-violet-600 underline font-bold">Custom E-Commerce Development</a> and <a href="/services/ecommerce-store" class="text-violet-600 underline font-bold">E-Commerce Store solutions</a>.</p>

      <h2>Cost Structure Comparison Over Time</h2>
      <div class="table-container my-6 overflow-x-auto">
        <table class="w-full text-left border-collapse border border-slate-200 text-xs sm:text-sm">
          <thead>
            <tr class="bg-slate-100 text-slate-900">
              <th class="p-3 border border-slate-200 font-bold">Expense Category</th>
              <th class="p-3 border border-slate-200 font-bold text-slate-700">Hosted SaaS Platform (e.g. Shopify)</th>
              <th class="p-3 border border-slate-200 font-bold text-violet-700 bg-violet-50/70">Custom Next.js Store (SiteMint)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="p-3 border border-slate-200 font-medium">Monthly Platform Subscription</td>
              <td class="p-3 border border-slate-200 text-slate-600">Recurring monthly fee (e.g. ₹1,999+/month)</td>
              <td class="p-3 border border-slate-200 font-bold text-violet-700 bg-violet-50/40">₹0 / Month Software Fee</td>
            </tr>
            <tr>
              <td class="p-3 border border-slate-200 font-medium">Transaction Fees</td>
              <td class="p-3 border border-slate-200 text-slate-600">Gateway MDR + Additional platform fee (up to 2%)</td>
              <td class="p-3 border border-slate-200 font-bold text-violet-700 bg-violet-50/40">Standard Gateway MDR Only (0% on UPI)</td>
            </tr>
            <tr>
              <td class="p-3 border border-slate-200 font-medium">Payment Gateway Support</td>
              <td class="p-3 border border-slate-200 text-slate-600">Requires third-party app plugins</td>
              <td class="p-3 border border-slate-200 font-bold text-violet-700 bg-violet-50/40">Direct Razorpay / Cashfree UPI Integration</td>
            </tr>
            <tr>
              <td class="p-3 border border-slate-200 font-medium">Code Ownership</td>
              <td class="p-3 border border-slate-200 text-slate-600">Hosted in proprietary ecosystem</td>
              <td class="p-3 border border-slate-200 font-bold text-violet-700 bg-violet-50/40">100% Full Source Code Ownership</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>When to Choose Each Solution</h2>
      <ul>
        <li><strong>Choose a Hosted SaaS Platform:</strong> If you prefer an out-of-the-box template store and do not mind recurring monthly subscription costs.</li>
        <li><strong>Choose Custom Next.js Development:</strong> If you want complete ownership of your codebase, zero recurring platform software rental fees, tailored checkout workflows, and direct UPI integration for Indian customers.</li>
      </ul>

      <div class="callout-box">
        <strong>Review packages:</strong> Compare options on our <a href="/pricing" class="text-violet-700 underline font-bold">Pricing page</a> and calculate your estimated development budget on our <a href="/calculator" class="text-violet-700 underline font-bold">Cost Calculator</a>.
      </div>
    `,
  },
};

export function generateStaticParams() {
  return Object.keys(articles).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const article = articles[slug];
  if (!article) return { title: 'Article Not Found | SiteMint' };

  return {
    title: `${article.title} | SiteMint`,
    description: article.metaDesc,
    alternates: {
      canonical: `https://sitemint.in/blog/${slug}`,
    },
    openGraph: {
      title: article.title,
      description: article.metaDesc,
      url: `https://sitemint.in/blog/${slug}`,
      siteName: 'SiteMint',
      images: [
        {
          url: 'https://sitemint.in/Sitemint_logo.png',
          width: 1024,
          height: 1024,
          type: 'image/png',
          alt: article.title,
        },
      ],
      locale: 'en_IN',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.metaDesc,
      images: ['https://sitemint.in/Sitemint_logo.png'],
    },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const article = articles[slug];

  if (!article) {
    notFound();
  }

  const breadcrumbData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://sitemint.in/',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog',
        item: 'https://sitemint.in/blog',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: article.title,
        item: `https://sitemint.in/blog/${slug}`,
      },
    ],
  };

  const articleData = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: article.title,
    description: article.metaDesc,
    author: {
      '@type': 'Person',
      name: 'Yuvraj Singh',
      url: 'https://sitemint.in/about',
    },
    publisher: {
      '@type': 'Organization',
      name: 'SiteMint',
      logo: {
        '@type': 'ImageObject',
        url: 'https://sitemint.in/Sitemint_logo.png',
      },
    },
    datePublished: article.dateIso || '2026-01-12',
    dateModified: article.dateIso || '2026-01-12',
    mainEntityOfPage: `https://sitemint.in/blog/${slug}`,
  };

  const relatedArticles = (article.relatedSlugs || [])
    .map((rSlug) => ({ slug: rSlug, ...articles[rSlug] }))
    .filter((a) => a && a.title);

  return (
    <div className="w-full pt-6 pb-14 sm:pt-10 sm:pb-24 bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleData) }}
      />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Semantic Breadcrumb Navigation */}
        <nav aria-label="breadcrumb" className="mb-6 flex items-center gap-2 text-xs font-medium text-slate-500">
          <Link href="/" className="hover:text-violet-700 transition">Home</Link>
          <span className="text-slate-300">/</span>
          <Link href="/blog" className="hover:text-violet-700 transition">Blog</Link>
          <span className="text-slate-300">/</span>
          <span className="text-slate-900 font-semibold truncate max-w-xs sm:max-w-md">{article.title}</span>
        </nav>

        {/* Article Header */}
        <header className="mb-8 pb-6 border-b border-slate-200">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-violet-50 border border-violet-200 text-violet-800 text-xs font-bold uppercase tracking-wider mb-4">
            {article.category}
          </div>

          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4 font-sans">
            {article.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 font-medium">
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-slate-400" /> {article.date}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-slate-400" /> {article.readTime}
            </span>
            <span className="text-violet-700 font-semibold">By {article.author}</span>
          </div>
        </header>

        {/* Article Body */}
        <article className="prose prose-slate max-w-none prose-headings:font-bold prose-headings:text-slate-900 prose-p:text-slate-600 prose-p:leading-relaxed prose-li:text-slate-600 mb-12">
          <div 
            dangerouslySetInnerHTML={{ __html: article.content }} 
            className="space-y-5 text-sm sm:text-base text-slate-700 leading-relaxed [&>h2]:text-xl sm:[&>h2]:text-2xl [&>h2]:font-extrabold [&>h2]:text-slate-900 [&>h2]:mt-8 [&>h2]:mb-3 [&>h3]:text-lg [&>h3]:font-bold [&>h3]:text-slate-800 [&>h3]:mt-6 [&>h3]:mb-2 [&>ul]:list-disc [&>ul]:pl-5 [&>ul]:space-y-2 [&>ol]:list-decimal [&>ol]:pl-5 [&>ol]:space-y-2 [&>.callout-box]:p-5 sm:[&>.callout-box]:p-6 [&>.callout-box]:rounded-2xl [&>.callout-box]:bg-violet-50/90 [&>.callout-box]:border [&>.callout-box]:border-violet-200 [&>.callout-box]:text-violet-950 [&>.callout-box]:my-6 shadow-2xs"
          />
        </article>

        {/* Author Bio Box */}
        <div className="p-5 sm:p-6 rounded-3xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center gap-4 mb-10 text-center sm:text-left">
          <div className="w-14 h-14 rounded-2xl bg-violet-600 text-white flex items-center justify-center text-xl font-black shrink-0 shadow-md">
            YS
          </div>
          <div>
            <div className="text-xs font-bold text-violet-700 uppercase tracking-wider">Author Profile</div>
            <div className="text-base font-extrabold text-slate-900">Yuvraj Singh</div>
            <p className="text-xs text-slate-600 mt-1 leading-relaxed">
              Yuvraj Singh is the Founder and Lead Web Engineer at SiteMint, working on websites, web applications, mobile applications, and digital systems for businesses across India.
            </p>
          </div>
        </div>

        {/* Contextual WhatsApp Consultation CTA */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-violet-50 via-slate-50 to-teal-50 border border-violet-200 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-5 my-10 shadow-sm">
          <div>
            <div className="inline-flex items-center gap-1.5 text-[11px] font-bold text-emerald-700 uppercase tracking-wider mb-1">
              <Zap className="w-3.5 h-3.5" /> Project Consultation
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-1">
              Need advice on implementing this for your business?
            </h3>
            <p className="text-xs text-slate-600 max-w-md">
              Speak with our development team for technical guidance and transparent project estimates.
            </p>
          </div>
          <a
            href={`https://wa.me/918920683588?text=Hi%20SiteMint!%20I%20read%20your%20article%20on%20${encodeURIComponent(article.title)}%20and%20want%20to%20discuss%20my%20business%20requirements.`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp text-xs sm:text-sm !py-3 !px-6 shadow-sm whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>

        {/* Related Articles Section */}
        {relatedArticles.length > 0 && (
          <div className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200 mb-12 shadow-xs">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-4 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-violet-600" />
              Related Guides & Articles
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {relatedArticles.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/blog/${rel.slug}`}
                  className="p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:border-violet-400 transition-all flex flex-col justify-between group"
                >
                  <div>
                    <span className="text-[10px] font-bold text-violet-700 bg-violet-100/70 px-2 py-0.5 rounded-md mb-2 inline-block">
                      {rel.category}
                    </span>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-violet-700 transition leading-snug">
                      {rel.title}
                    </h4>
                  </div>
                  <div className="mt-3 flex items-center gap-1 text-xs font-semibold text-violet-700 group-hover:translate-x-1 transition-transform">
                    <span>Read Guide</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Internal Service Links Grid */}
        <div className="p-6 sm:p-7 rounded-3xl bg-slate-50 border border-slate-200 mb-12">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-3 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-violet-600" />
            Explore SiteMint Services & Growth Tools:
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs">
            <Link href="/services/website-development" className="p-3 bg-white rounded-xl border border-slate-200 hover:border-violet-400 font-semibold text-slate-800 hover:text-violet-700 transition">
              🌐 Website Development
            </Link>
            <Link href="/services/mobile-app-development" className="p-3 bg-white rounded-xl border border-slate-200 hover:border-violet-400 font-semibold text-slate-800 hover:text-violet-700 transition">
              📱 Mobile App Development
            </Link>
            <Link href="/calculator" className="p-3 bg-white rounded-xl border border-slate-200 hover:border-violet-400 font-semibold text-slate-800 hover:text-violet-700 transition">
              🧮 Instant Cost Calculator
            </Link>
            <Link href="/pricing" className="p-3 bg-white rounded-xl border border-slate-200 hover:border-violet-400 font-semibold text-slate-800 hover:text-violet-700 transition">
              🏷️ Transparent Pricing Plans
            </Link>
            <Link href="/demos/bakery" className="p-3 bg-white rounded-xl border border-slate-200 hover:border-violet-400 font-semibold text-slate-800 hover:text-violet-700 transition">
              🍰 Live Bakery Demo
            </Link>
            <Link href="/demos/education" className="p-3 bg-white rounded-xl border border-slate-200 hover:border-violet-400 font-semibold text-slate-800 hover:text-violet-700 transition">
              🎓 Live Education Portal Demo
            </Link>
          </div>
        </div>
      </div>
      <FaqSection />
    </div>
  );
}
