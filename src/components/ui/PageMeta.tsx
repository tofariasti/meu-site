import { useEffect } from 'react'
import { getPageMeta, buildJsonLd } from '../../utils/seo'
import type { SeoPageKey } from '../../data/types'
import { hubConfig } from '../../data/hubConfig'

interface PageMetaProps {
  page: SeoPageKey
}

export function PageMeta({ page }: PageMetaProps) {
  const meta = getPageMeta(page)

  useEffect(() => {
    document.title = meta.title

    const setMeta = (name: string, content: string, property = false) => {
      const attr = property ? 'property' : 'name'
      let el = document.querySelector(`meta[${attr}="${name}"]`)
      if (!el) {
        el = document.createElement('meta')
        el.setAttribute(attr, name)
        document.head.appendChild(el)
      }
      el.setAttribute('content', content)
    }

    setMeta('description', meta.description)
    setMeta('geo.region', hubConfig.seo.geo.region)
    setMeta('geo.placename', hubConfig.seo.geo.placename)
    setMeta('ICBM', `${hubConfig.seo.geo.latitude}, ${hubConfig.seo.geo.longitude}`)

    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.appendChild(canonical)
    }
    canonical.href = meta.canonical

    setMeta('og:type', 'website', true)
    setMeta('og:title', meta.title, true)
    setMeta('og:description', meta.description, true)
    setMeta('og:url', meta.canonical, true)
    setMeta('og:site_name', hubConfig.marca, true)
    setMeta('og:locale', 'pt_BR', true)
    setMeta('og:image', meta.ogImage, true)
    setMeta('og:image:width', '1200', true)
    setMeta('og:image:height', '630', true)
    setMeta('og:image:type', 'image/png', true)

    setMeta('twitter:card', 'summary_large_image')
    setMeta('twitter:title', meta.title)
    setMeta('twitter:description', meta.description)
    setMeta('twitter:image', meta.ogImage)

    document.querySelectorAll('script[data-json-ld]').forEach((el) => el.remove())
    buildJsonLd(page).forEach((data) => {
      const script = document.createElement('script')
      script.type = 'application/ld+json'
      script.setAttribute('data-json-ld', 'true')
      script.textContent = JSON.stringify(data)
      document.head.appendChild(script)
    })
  }, [meta.canonical, meta.description, meta.ogImage, meta.title, page])

  return null
}
