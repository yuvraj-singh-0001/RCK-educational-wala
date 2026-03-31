import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { setBasicSeo } from '../../../src/seo/meta'

const COMMON_KEYWORDS = [
  'education website demo',
  'school website development',
  'student portal demo',
  'coaching institute website',
  'affordable web development',
  'SiteMint',
  'Yuvraj Singh',
].join(', ')

const PAGE_META = {
  '/': {
    title: 'Education Website Demo | School Portal | SiteMint',
    description:
      'Live education portal demo with admissions, courses, results and contact pages. Built for schools and coaching institutes by SiteMint.',
  },
  '/courses': {
    title: 'Courses Page Demo | Education Website | SiteMint',
    description:
      'Courses listing demo for schools and institutes. Present your offerings clearly and convert website visitors into admissions.',
  },
  '/about': {
    title: 'About School Demo Page | Education Website | SiteMint',
    description:
      'About page demo for educational institutions with mission, highlights and trust-building information.',
  },
  '/results': {
    title: 'Student Results Demo | Education Portal | SiteMint',
    description:
      'Results page demo for education websites to show student outcomes and improve institutional credibility.',
  },
  '/contact': {
    title: 'Education Contact Demo | Admission Enquiry Page | SiteMint',
    description:
      'Contact page demo for admission enquiries with clear communication channels and lead capture.',
  },
  '/admission': {
    title: 'Online Admission Demo | School Website | SiteMint',
    description:
      'Online admission form demo for schools and institutes to simplify student registrations and improve lead management.',
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
  if (pathname.startsWith('/student')) {
    return {
      title: 'Student Dashboard | Education Demo | SiteMint',
      description:
        'Student dashboard area is intended for enrolled users and not for public search indexing.',
      robots: 'noindex, nofollow',
    }
  }

  return PAGE_META[pathname] || PAGE_META['/']
}

export default function RouteSeo() {
  const { pathname } = useLocation()

  useEffect(() => {
    const normalizedPath = normalizePath(pathname)
    const routeMeta = getRouteMeta(normalizedPath)
    const fullPath =
      normalizedPath === '/'
        ? '/education-demo'
        : `/education-demo${normalizedPath}`

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
