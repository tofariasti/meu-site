import { segmentLocalized } from '../data/segmentsLocalized'
import type { Localized } from '../i18n/types'

export const PORTFOLIO_SEGMENT_PARAM = 'segmento'

export type SegmentSlug = keyof typeof segmentLocalized

const segmentSlugs = Object.keys(segmentLocalized) as SegmentSlug[]

export function isSegmentSlug(value: string): value is SegmentSlug {
  return (segmentSlugs as string[]).includes(value)
}

/** Resolve `?segmento=saude` to the localized label (e.g. "Saúde" in PT). */
export function resolveSegmentFromSlug(
  slug: string,
  t: (value: Localized<string>) => string,
): string | null {
  const normalized = slug.toLowerCase().trim()
  if (!isSegmentSlug(normalized)) return null
  return t(segmentLocalized[normalized])
}

/** Map active filter label back to URL slug. */
export function segmentSlugForLabel(
  label: string,
  t: (value: Localized<string>) => string,
): SegmentSlug | null {
  for (const slug of segmentSlugs) {
    if (t(segmentLocalized[slug]) === label) return slug
  }
  return null
}

export function portfolioFilterUrl(slug: SegmentSlug): string {
  return `/portfolio/?${PORTFOLIO_SEGMENT_PARAM}=${slug}`
}
