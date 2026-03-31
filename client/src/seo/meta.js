export const SITE_URL = 'https://sitemint.in'
export const DEFAULT_OG_IMAGE = `${SITE_URL}/bakery-demo/images/birthday-cake.png`

function upsertMeta(attributeName, attributeValue, content) {
  if (!content || typeof document === 'undefined') {
    return
  }

  const selector = `meta[${attributeName}="${attributeValue}"]`
  let el = document.querySelector(selector)

  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attributeName, attributeValue)
    document.head.appendChild(el)
  }

  el.setAttribute('content', content)
}

function upsertCanonical(href) {
  if (!href || typeof document === 'undefined') {
    return
  }

  let canonical = document.querySelector('link[rel="canonical"]')
  if (!canonical) {
    canonical = document.createElement('link')
    canonical.setAttribute('rel', 'canonical')
    document.head.appendChild(canonical)
  }

  canonical.setAttribute('href', href)
}

export function absoluteUrl(pathOrUrl = '/') {
  if (/^https?:\/\//i.test(pathOrUrl)) {
    return pathOrUrl
  }

  const path = pathOrUrl.startsWith('/') ? pathOrUrl : `/${pathOrUrl}`
  return `${SITE_URL}${path}`
}

export function setBasicSeo({
  title,
  description,
  url = SITE_URL,
  image = DEFAULT_OG_IMAGE,
  keywords,
  robots = 'index, follow',
}) {
  if (typeof document === 'undefined') {
    return
  }

  const resolvedUrl = absoluteUrl(url)
  const resolvedImage = absoluteUrl(image)

  if (title) {
    document.title = title
    upsertMeta('name', 'title', title)
    upsertMeta('property', 'og:title', title)
    upsertMeta('property', 'twitter:title', title)
  }

  if (description) {
    upsertMeta('name', 'description', description)
    upsertMeta('property', 'og:description', description)
    upsertMeta('property', 'twitter:description', description)
  }

  if (keywords) {
    upsertMeta('name', 'keywords', keywords)
  }

  upsertMeta('name', 'robots', robots)
  upsertMeta('property', 'og:type', 'website')
  upsertMeta('property', 'og:site_name', 'SiteMint')
  upsertMeta('property', 'og:url', resolvedUrl)
  upsertMeta('property', 'og:image', resolvedImage)
  upsertMeta('property', 'twitter:card', 'summary_large_image')
  upsertMeta('property', 'twitter:url', resolvedUrl)
  upsertMeta('property', 'twitter:image', resolvedImage)

  upsertCanonical(resolvedUrl)
}
