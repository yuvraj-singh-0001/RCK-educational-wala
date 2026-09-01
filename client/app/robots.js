export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/demos/bakery/cart',
          '/demos/bakery/checkout',
          '/demos/bakery/order-confirmation',
          '/demos/bakery/staff',
          '/demos/education/student',
          '/bakery-demo/cart',
          '/bakery-demo/checkout',
          '/bakery-demo/order-confirmation',
          '/bakery-demo/staff',
          '/education-demo/student',
        ],
      },
    ],
    sitemap: 'https://sitemint.in/sitemap.xml',
    host: 'https://sitemint.in',
  };
}
