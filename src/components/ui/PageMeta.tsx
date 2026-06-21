import { useEffect } from 'react'
import { getHreflangAlternates, getPageMeta, buildJsonLd } from '../../utils/seo'
import type { SeoPageKey } from '../../data/types'
import { useHubConfig } from '../../i18n/useHubConfig'
import { useLocale } from '../../i18n/LocaleContext'
import { ogLocale, LOCALES } from '../../i18n/types'

interface PageMetaProps {
  page: SeoPageKey
}

export function PageMeta({ page }: PageMetaProps) {
  const { locale } = useLocale()
  const config = useHubConfig()
  const meta = getPageMeta(page, locale)
  const alternates = getHreflangAlternates(page)

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
    setMeta('geo.region', config.seo.geo.region)
    setMeta('geo.placename', config.seo.geo.placename)
    setMeta('ICBM', `${config.seo.geo.latitude}, ${config.seo.geo.longitude}`)

    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.appendChild(canonical)
    }
    canonical.href = meta.canonical

    document.querySelectorAll('link[data-hreflang]').forEach((el) => el.remove())
    alternates.forEach(({ hreflang: lang, href }) => {
      const link = document.createElement('link')
      link.rel = 'alternate'
      link.hreflang = lang
      link.href = href
      link.setAttribute('data-hreflang', 'true')
      document.head.appendChild(link)
    })
    const xDefault = document.createElement('link')
    xDefault.rel = 'alternate'
    xDefault.hreflang = 'x-default'
    xDefault.href = alternates.find((a) => a.hreflang === 'pt-BR')?.href ?? config.dominio + '/'
    xDefault.setAttribute('data-hreflang', 'true')
    document.head.appendChild(xDefault)

    setMeta('og:type', 'website', true)
    setMeta('og:title', meta.title, true)
    setMeta('og:description', meta.description, true)
    setMeta('og:url', meta.canonical, true)
    setMeta('og:site_name', config.marca, true)
    setMeta('og:locale', ogLocale(locale), true)
    document.querySelectorAll('meta[property="og:locale:alternate"]').forEach((el) => el.remove())
    LOCALES.filter((l) => l !== locale).forEach((alt) => {
      setMeta('og:locale:alternate', ogLocale(alt), true)
    })
    setMeta('og:image', meta.ogImage, true)
    setMeta('og:image:width', '1200', true)
    setMeta('og:image:height', '630', true)
    setMeta('og:image:type', 'image/png', true)

    setMeta('twitter:card', 'summary_large_image')
    setMeta('twitter:title', meta.title)
    setMeta('twitter:description', meta.description)
    setMeta('twitter:image', meta.ogImage)

    document.querySelectorAll('script[data-json-ld]').forEach((el) => el.remove())
    buildJsonLd(page, locale).forEach((data) => {
      const script = document.createElement('script')
      script.type = 'application/ld+json'
      script.setAttribute('data-json-ld', 'true')
      script.textContent = JSON.stringify(data)
      document.head.appendChild(script)
    })
  }, [alternates, config.dominio, config.marca, config.seo.geo.latitude, config.seo.geo.longitude, config.seo.geo.placename, config.seo.geo.region, locale, meta.canonical, meta.description, meta.ogImage, meta.title, page])

  return null
}
