import type { Localized, Locale } from '../i18n/types'

export function isLocalized(value: unknown): value is Localized<unknown> {
  if (!value || typeof value !== 'object' || Array.isArray(value)) return false
  const obj = value as Record<string, unknown>
  return 'pt' in obj && 'en' in obj && 'es' in obj
}

export function resolveLocalized<T>(value: T, locale: Locale): T {
  if (isLocalized(value)) {
    return value[locale] as T
  }
  if (Array.isArray(value)) {
    return value.map((item) => resolveLocalized(item, locale)) as T
  }
  if (value && typeof value === 'object') {
    const out: Record<string, unknown> = {}
    for (const [key, nested] of Object.entries(value)) {
      out[key] = resolveLocalized(nested, locale)
    }
    return out as T
  }
  return value
}
