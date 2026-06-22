import { describe, expect, it } from 'vitest'
import {
  isSegmentSlug,
  portfolioFilterUrl,
  resolveSegmentFromSlug,
  segmentSlugForLabel,
} from '../utils/portfolioSegment'
import { segmentLocalized } from '../data/segmentsLocalized'

const tPt = (value: (typeof segmentLocalized)[keyof typeof segmentLocalized]) => value.pt

describe('portfolioSegment', () => {
  it('recognizes valid slugs', () => {
    expect(isSegmentSlug('saude')).toBe(true)
    expect(isSegmentSlug('ecommerce')).toBe(true)
    expect(isSegmentSlug('invalid')).toBe(false)
  })

  it('resolves slug to localized segment label', () => {
    expect(resolveSegmentFromSlug('saude', tPt)).toBe('Saúde')
    expect(resolveSegmentFromSlug('SAUDE', tPt)).toBe('Saúde')
    expect(resolveSegmentFromSlug('unknown', tPt)).toBeNull()
  })

  it('maps label back to slug', () => {
    expect(segmentSlugForLabel('Automotivo', tPt)).toBe('automotivo')
    expect(segmentSlugForLabel('Nope', tPt)).toBeNull()
  })

  it('builds portfolio filter path', () => {
    expect(portfolioFilterUrl('turismo')).toBe('/portfolio/?segmento=turismo')
  })
})
