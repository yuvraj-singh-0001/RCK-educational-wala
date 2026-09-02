export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/demos/bakery/staff',
          '/demos/education/student',
          '/bakery-demo/staff',
          '/education-demo/student',
        ],
      },
      {
        userAgent: ['GPTBot', 'ChatGPT-User', 'ClaudeBot', 'PerplexityBot', 'Google-Extended', 'Applebot-Extended', 'Bingbot'],
        allow: '/',
        disallow: [],
      },
    ],
    sitemap: 'https://sitemint.in/sitemap.xml',
    host: 'https://sitemint.in',
  };
}
