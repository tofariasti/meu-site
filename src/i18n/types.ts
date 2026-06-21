export type Locale = 'pt' | 'en' | 'es'

export const LOCALES: Locale[] = ['pt', 'en', 'es']

export const DEFAULT_LOCALE: Locale = 'pt'

export type Localized<T> = Record<Locale, T>

export function L<T>(pt: T, en: T, es: T): Localized<T> {
  return { pt, en, es }
}

export function htmlLang(locale: Locale): string {
  if (locale === 'pt') return 'pt-BR'
  if (locale === 'es') return 'es'
  return 'en'
}

export function ogLocale(locale: Locale): string {
  if (locale === 'pt') return 'pt_BR'
  if (locale === 'es') return 'es_ES'
  return 'en_US'
}

export function hreflang(locale: Locale): string {
  if (locale === 'pt') return 'pt-BR'
  return locale
}

export const LOCALE_PREFIX: Record<Locale, string> = {
  pt: '',
  en: '/en',
  es: '/es',
}

export function localizedPath(path: string, locale: Locale): string {
  const normalized = path.startsWith('/') ? path : `/${path}`
  const prefix = LOCALE_PREFIX[locale]
  if (normalized === '/') return prefix ? `${prefix}/` : '/'
  if (prefix === '') return normalized.endsWith('/') ? normalized : `${normalized}/`
  const segment = normalized.startsWith('/') ? normalized : `/${normalized}`
  return `${prefix}${segment}`.replace(/\/+/g, '/')
}
