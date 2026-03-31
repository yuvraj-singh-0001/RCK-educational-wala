import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { setBasicSeo } from '../../../src/seo/meta'

const COMMON_KEYWORDS = [
  'bakery website demo',
  'online cake delivery website',
  'bakery ecommerce website',
  'affordable website development',
  'restaurant website developer',
  'website banwane ke liye developer',
  'SiteMint',
  'Yuvraj Singh',
].join(', ')

const PAGE_META = {
  '/': {
    title: 'Bakery Website Demo | Online Cake Ordering | SiteMint',
    description:
      'Live bakery website demo with menu, cart, order tracking, custom cake requests and contact page. Built by SiteMint at affordable pricing.',
  },
  '/menu': {
    title: 'Bakery Menu Demo | Cakes, Desserts, Hampers | SiteMint',
    description:
      'Browse bakery menu demo with categories, product cards and add-to-cart experience. Perfect for bakeries and cafes moving online.',
  },
  '/custom-cake': {
    title: 'Custom Cake Order Form Demo | Bakery Website | SiteMint',
    description:
      'Custom cake order flow demo for birthdays, anniversaries and events. Collect customer requirements directly from your website.',
  },
  '/gallery': {
    title: 'Bakery Gallery Demo | Cake Portfolio Page | SiteMint',
    description:
      'Gallery-style bakery website demo to showcase cake designs, desserts and festive collections for better customer trust.',
  },
  '/about': {
    title: 'About Bakery Demo | Brand Story Page | SiteMint',
    description:
      'About page demo for bakery websites with team and brand story sections. Helps improve trust and local business conversions.',
  },
  '/contact': {
    title: 'Contact Page Demo | Bakery Website Leads | SiteMint',
    description:
      'Contact page demo with phone, email and inquiry form. Capture orders and leads directly from your bakery website.',
  },
  '/portfolio': {
    title: 'Website Portfolio Demo | SiteMint Web Development',
    description:
      'View SiteMint portfolio for bakery, education and custom business websites. Fast delivery, mobile-first design and affordable plans.',
  },
  '/track-order': {
    title: 'Track Order Demo | Bakery Delivery Status | SiteMint',
    description:
      'Order tracking page demo for bakery and food delivery websites. Improve customer experience with real-time status visibility.',
  },
  '/info/our-story': {
    title: 'Our Story | Bakery Website Demo | SiteMint',
    description:
      'Read the bakery brand story demo page and see how storytelling can increase customer trust and repeat orders.',
  },
  '/info/contact-us': {
    title: 'Contact Information | Bakery Demo | SiteMint',
    description:
      'Business contact information page demo for bakery websites with phone, email and support details.',
  },
  '/info/blog': {
    title: 'Bakery Blog Demo | SEO Content Page | SiteMint',
    description:
      'Blog-style content page demo for bakery websites to improve Google rankings through fresh content and keyword targeting.',
  },
}

function normalizePath(pathname) {
  if (!pathname) {
    return '/'
  }

  return pathname !== '/' && pathname.endsWith('/')
    ? pathname.slice(0, -1)
    : pathname
}

function getRouteMeta(pathname) {
  if (PAGE_META[pathname]) {
    return PAGE_META[pathname]
  }

  if (pathname.startsWith('/info/')) {
    return {
      title: 'Bakery Information Page | SiteMint',
      description:
        'Informational content page for bakery website visitors. Designed for better SEO visibility and customer engagement.',
    }
  }

  if (
    pathname.startsWith('/cart') ||
    pathname.startsWith('/checkout') ||
    pathname.startsWith('/order-confirmation') ||
    pathname.startsWith('/staff')
  ) {
    return {
      title: 'Bakery Internal Page | SiteMint',
      description:
        'This page is part of the bakery application flow and is not intended for search indexing.',
      robots: 'noindex, nofollow',
    }
  }

  return PAGE_META['/']
}

export default function RouteSeo() {
  const { pathname } = useLocation()

  useEffect(() => {
    const normalizedPath = normalizePath(pathname)
    const routeMeta = getRouteMeta(normalizedPath)
    const fullPath =
      normalizedPath === '/'
        ? '/bakery-demo'
        : `/bakery-demo${normalizedPath}`

    setBasicSeo({
      title: routeMeta.title,
      description: routeMeta.description,
      keywords: COMMON_KEYWORDS,
      url: fullPath,
      robots: routeMeta.robots || 'index, follow',
    })
  }, [pathname])

  return null
}
