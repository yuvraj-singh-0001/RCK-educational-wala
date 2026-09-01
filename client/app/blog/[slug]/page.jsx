import Link from 'next/link';
import { notFound } from 'next/navigation';
import { 
  ArrowLeft, 
  Calendar, 
  Clock, 
  Tag, 
  MessageCircle, 
  CheckCircle2, 
  Share2, 
  Sparkles,
  Calculator,
  ArrowRight
} from 'lucide-react';
import FaqSection from '../../../components/FaqSection';

const articles = {
  'low-budget-website-development-guide-india': {
    title: 'How to Get a Professional Website Made in Low Budget in India (2025 Guide)',
    category: 'Website Strategy',
    date: 'January 15, 2025',
    readTime: '4 min read',
    author: 'SiteMint Tech Team',
    metaDesc: 'Step by step guide to getting an agency-quality website in India starting from ₹3,999 with free domain, hosting, and WhatsApp lead buttons.',
    content: `
      <h2>The Real Cost of Building a Business Website in India</h2>
      <p>If you are a small business owner, local tutor, doctor, or bakery shop in India, you have likely received quotes ranging from ₹25,000 to ₹80,000 from local IT agencies. The reality is that for 90% of small businesses, a clean, high-speed 5-page website with direct WhatsApp lead capture should not cost more than ₹3,999 to ₹7,999.</p>

      <h3>What Every Small Business Website Actually Needs:</h3>
      <ul>
        <li><strong>Mobile-First Lightweight Layout:</strong> Over 85% of traffic in India comes from mobile smartphones.</li>
        <li><strong>Free .IN or .COM Domain Name:</strong> Registered in your name for 100% brand ownership.</li>
        <li><strong>High-Speed Cloud Hosting & SSL Security:</strong> Load times under 2 seconds.</li>
        <li><strong>Direct WhatsApp Order & Inquiry Capture:</strong> One-tap chat button to convert visitors immediately.</li>
        <li><strong>Google Search Console Indexing:</strong> So customers searching for your services in your city find you on Google Maps and search results.</li>
      </ul>

      <h3>3 Red Flags to Avoid When Hiring a Web Developer:</h3>
      <ol>
        <li><strong>Developers charging recurring monthly rental fees:</strong> You should always own your website source code completely.</li>
        <li><strong>Slow WordPress templates with 40+ plugins:</strong> They take 6+ seconds to load on mobile networks, driving away 60% of visitors.</li>
        <li><strong>No clear delivery timeline:</strong> A standard 5-page website should never take more than 7 to 10 days to go live.</li>
      </ol>

      <div class="callout-box">
        <strong>Ready to launch?</strong> SiteMint delivers complete professional websites starting from just ₹3,999 with free domain, hosting, and 60 days of maintenance included.
      </div>
    `,
  },
  'why-bakeries-need-whatsapp-online-ordering-system': {
    title: 'Why Every Bakery & Restaurant Needs Direct WhatsApp Online Ordering (0% Commission)',
    category: 'Bakery & Food',
    date: 'January 18, 2025',
    readTime: '5 min read',
    author: 'SiteMint Food Tech Team',
    metaDesc: 'Discover how bakeries and restaurants in India save 30% commission by taking direct WhatsApp cake and food orders.',
    content: `
      <h2>The Problem with Food Delivery Aggregators</h2>
      <p>Food aggregators take between 25% to 35% commission on every order. For bakeries selling ₹600 cakes, you lose nearly ₹180 to ₹200 on every single delivery, severely squeezing your profit margins.</p>

      <h3>Why Direct WhatsApp Ordering Outperforms Food Apps for Bakeries:</h3>
      <ul>
        <li><strong>0% Commission:</strong> You keep 100% of your sales revenue.</li>
        <li><strong>Custom Cake Customization Engine:</strong> Customers can pick cake flavor (Chocolate, Red Velvet, Pineapple), weight (0.5kg, 1kg, 2kg+), eggless option, and write personalized messages on the cake.</li>
        <li><strong>Direct Customer Phone Numbers:</strong> Build your own customer contact list to send festive WhatsApp promotions on Diwali, New Year, and Valentine's Day.</li>
        <li><strong>Delivery Distance Fees:</strong> Automatic delivery charges based on customer pincode or distance.</li>
      </ul>

      <div class="callout-box">
        <strong>Test our Live Bakery Demo:</strong> Explore our interactive cake customizer and test the 1-click WhatsApp order checkout.
      </div>
    `,
  },
  'how-coaching-institutes-double-student-admissions-online': {
    title: '5 Ways Coaching Institutes Can Double Student Admissions With an Online Portal',
    category: 'Education Portal',
    date: 'January 20, 2025',
    readTime: '4 min read',
    author: 'SiteMint EdTech Team',
    metaDesc: 'How coaching centers in India double student admissions with online inquiry forms, batch calendars, and published test scores.',
    content: `
      <h2>Winning Parent Trust in the Digital Era</h2>
      <p>Parents researching tuition centers and coaching institutes in 2025 search Google before visiting your center. Having an outdated Facebook page is no longer enough.</p>

      <h3>5 High-Converting Features Every Coaching Portal Needs:</h3>
      <ol>
        <li><strong>Interactive Course & Batch Syllabus:</strong> Clear timings, target exams (JEE, NEET, Foundation), and syllabus breakdowns.</li>
        <li><strong>Online Admission Inquiry Lead Form:</strong> Parents can request callbacks with student class and course interest in 10 seconds.</li>
        <li><strong>Weekly Test Results & Rank Board:</strong> Publishing topper scores and rank lists establishes undeniable proof of your teaching results.</li>
        <li><strong>Faculty Credentials Showcase:</strong> Highlight teacher qualifications, experience, and past success stories.</li>
        <li><strong>Digital Notice Board:</strong> Announce new batch start dates and scholarship exams instantly.</li>
      </ol>
    `,
  },
  'custom-ecommerce-store-vs-shopify-for-indian-startups': {
    title: 'Custom E-Commerce Store vs Shopify: Which is Cheaper for Indian Startups?',
    category: 'E-Commerce',
    date: 'January 22, 2025',
    readTime: '6 min read',
    author: 'SiteMint Commerce Team',
    metaDesc: 'Compare costs between monthly Shopify plans and custom Next.js e-commerce development with Razorpay UPI gateway for Indian startups.',
    content: `
      <h2>The Real Math: Shopify vs One-Time Custom Store</h2>
      <p>Shopify charges ₹1,999 to ₹7,499 every month, plus 2% extra transaction fee on every order, plus ₹1,500/month for essential apps. Over 2 years, you easily spend ₹60,000+ in rental fees alone.</p>

      <h3>Why Indian Startups Prefer One-Time Custom Next.js Stores:</h3>
      <ul>
        <li><strong>Zero Monthly Software Subscriptions:</strong> One-time setup fee (Starting ₹8,999) with 100% code ownership.</li>
        <li><strong>Direct Razorpay / UPI Integration:</strong> Zero additional platform commission, only standard bank MDR (0% on UPI).</li>
        <li><strong>Blazing Fast 1-Second Load Speed:</strong> Next.js App Router pre-renders products for instant mobile browsing.</li>
        <li><strong>Custom Coupon Discount Engine:</strong> Create customized promotional rules without paid plugins.</li>
      </ul>
    `,
  },
};

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
    },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const article = articles[slug];

  if (!article) {
    notFound();
  }

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.metaDesc,
    author: {
      '@type': 'Organization',
      name: 'SiteMint',
      url: 'https://sitemint.in',
    },
    publisher: {
      '@type': 'Organization',
      name: 'SiteMint',
      logo: {
        '@type': 'ImageObject',
        url: 'https://sitemint.in/logo.png',
      },
    },
    datePublished: '2025-01-15',
    mainEntityOfPage: `https://sitemint.in/blog/${slug}`,
  };

  return (
    <div className="w-full pt-6 pb-12 sm:pt-10 sm:pb-20 bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <div className="mb-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-violet-700 transition"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to All Articles
          </Link>
        </div>

        {/* Article Header */}
        <header className="mb-8 pb-6 border-b border-slate-200">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-50 border border-violet-200 text-violet-800 text-xs font-bold uppercase tracking-wider mb-4">
            {article.category}
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
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
            className="space-y-5 text-sm sm:text-base text-slate-700 leading-relaxed [&>h2]:text-xl sm:[&>h2]:text-2xl [&>h2]:font-bold [&>h2]:text-slate-900 [&>h2]:mt-8 [&>h2]:mb-3 [&>h3]:text-lg [&>h3]:font-bold [&>h3]:text-slate-800 [&>h3]:mt-6 [&>h3]:mb-2 [&>ul]:list-disc [&>ul]:pl-5 [&>ul]:space-y-2 [&>ol]:list-decimal [&>ol]:pl-5 [&>ol]:space-y-2 [&>.callout-box]:p-5 [&>.callout-box]:rounded-2xl [&>.callout-box]:bg-violet-50 [&>.callout-box]:border [&>.callout-box]:border-violet-200 [&>.callout-box]:text-violet-900 [&>.callout-box]:my-6"
          />
        </article>

        {/* In-Article WhatsApp CTA */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-violet-50 via-slate-50 to-teal-50 border border-violet-200 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-5 my-10 shadow-sm">
          <div>
            <h3 className="text-lg font-bold text-slate-900 mb-1">
              Ready to implement this for your business?
            </h3>
            <p className="text-xs text-slate-600 max-w-md">
              Chat with our team to get a free project roadmap and live demo preview.
            </p>
          </div>
          <a
            href={`https://wa.me/918601300910?text=Hi%20SiteMint!%20I%20read%20your%20article%20on%20${encodeURIComponent(article.title)}%20and%20want%20to%20discuss%20my%20project.`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp text-xs sm:text-sm !py-2.5 sm:!py-3 !px-5 shadow-sm whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>
      <FaqSection />
    </div>
  );
}
