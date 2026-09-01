import { blogPosts } from './blog/page';

export default function sitemap() {
  const baseUrl = 'https://sitemint.in';
  const currentDate = new Date().toISOString();

  // Core Static Pages
  const staticRoutes = [
    { url: `${baseUrl}`, lastModified: currentDate, changeFrequency: 'daily', priority: 1.0 },
    { url: `${baseUrl}/services`, lastModified: currentDate, changeFrequency: 'daily', priority: 0.98 },
    { url: `${baseUrl}/about`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/projects`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.95 },
    { url: `${baseUrl}/pricing`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/calculator`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/demos`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/blog`, lastModified: currentDate, changeFrequency: 'daily', priority: 0.9 },
    { url: `${baseUrl}/contact`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/faq`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/privacy-policy`, lastModified: currentDate, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${baseUrl}/terms-and-conditions`, lastModified: currentDate, changeFrequency: 'yearly', priority: 0.5 },

    // Primary 4 Core Services
    { url: `${baseUrl}/services/website-development`, lastModified: currentDate, changeFrequency: 'daily', priority: 0.98 },
    { url: `${baseUrl}/services/mobile-app-development`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.95 },
    { url: `${baseUrl}/services/video-editing`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.95 },
    { url: `${baseUrl}/services/social-media-management`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.95 },

    // Specialized Solution Pages
    { url: `${baseUrl}/services/ecommerce-development`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.95 },
    { url: `${baseUrl}/services/education-portal`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.95 },
    { url: `${baseUrl}/services/custom-software-development`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/services/restaurant-software`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.95 },

    // Legacy Service URLs (Search continuity)
    { url: `${baseUrl}/services/low-budget-website-development`, lastModified: currentDate, changeFrequency: 'daily', priority: 0.98 },
    { url: `${baseUrl}/services/bakery-restaurant-website`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.95 },
    { url: `${baseUrl}/services/school-coaching-portal`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.95 },
    { url: `${baseUrl}/services/ecommerce-store`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.9 },

    // Live Demos
    { url: `${baseUrl}/demos/bakery`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${baseUrl}/demos/education`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.85 },
  ];

  // Dynamic Blog Posts
  const blogRoutes = (blogPosts || []).map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly',
    priority: 0.85,
  }));

  return [...staticRoutes, ...blogRoutes];
}
