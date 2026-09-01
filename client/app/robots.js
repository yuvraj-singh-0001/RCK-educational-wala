export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
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
