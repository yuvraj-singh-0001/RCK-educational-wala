import { blogPosts } from './blog/page';

export default function sitemap() {
  const baseUrl = 'https://sitemint.in';
  const currentDate = new Date().toISOString();

  // Core Static Pages
  const staticRoutes = [
    // 1. Primary Landing Hubs (Top Priority)
    { url: `${baseUrl}`, lastModified: currentDate, changeFrequency: 'daily', priority: 1.0 },
    { url: `${baseUrl}/services`, lastModified: currentDate, changeFrequency: 'daily', priority: 0.99 },
    
    // 2. The 4 Flagship Core Services (High-Intent Transactional Keywords)
    { url: `${baseUrl}/services/website-development`, lastModified: currentDate, changeFrequency: 'daily', priority: 0.98 },
    { url: `${baseUrl}/services/mobile-app-development`, lastModified: currentDate, changeFrequency: 'daily', priority: 0.98 },
    { url: `${baseUrl}/services/video-editing`, lastModified: currentDate, changeFrequency: 'daily', priority: 0.98 },
    { url: `${baseUrl}/services/social-media-management`, lastModified: currentDate, changeFrequency: 'daily', priority: 0.98 },

    // 3. High-Intent Commercial Pricing & Estimator
    { url: `${baseUrl}/pricing`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.95 },
    { url: `${baseUrl}/calculator`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.95 },
    { url: `${baseUrl}/projects`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.95 },

    // 4. Specialized Industry Vertical Solutions
    { url: `${baseUrl}/services/ecommerce-development`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.95 },
    { url: `${baseUrl}/services/education-portal`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.95 },
    { url: `${baseUrl}/services/restaurant-software`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.95 },
    { url: `${baseUrl}/services/custom-software-development`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.92 },

    // 5. Search Continuity URLs (Preserve existing rank equity)
    { url: `${baseUrl}/services/low-budget-website-development`, lastModified: currentDate, changeFrequency: 'daily', priority: 0.98 },
    { url: `${baseUrl}/services/bakery-restaurant-website`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.95 },
    { url: `${baseUrl}/services/school-coaching-portal`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.95 },
    { url: `${baseUrl}/services/ecommerce-store`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.90 },

    // 6. Authority, Knowledge Base & Company Pages
    { url: `${baseUrl}/blog`, lastModified: currentDate, changeFrequency: 'daily', priority: 0.90 },
    { url: `${baseUrl}/about`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/contact`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/faq`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/demos`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.85 },

    // 7. Interactive Live Working Demos
    { url: `${baseUrl}/demos/bakery`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${baseUrl}/demos/education`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.85 },

    // 8. Legal & Policy Pages
    { url: `${baseUrl}/privacy-policy`, lastModified: currentDate, changeFrequency: 'yearly', priority: 0.40 },
    { url: `${baseUrl}/terms-and-conditions`, lastModified: currentDate, changeFrequency: 'yearly', priority: 0.40 },
  ];

  // 9. Dynamic High-Traffic Blog Articles (Long-tail Search Queries)
  const blogRoutes = (blogPosts || []).map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly',
    priority: 0.85,
  }));

  return [...staticRoutes, ...blogRoutes];
}
