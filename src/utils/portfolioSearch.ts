import type { Demo } from '../data/types'

/** Lowercase, trim and strip accents for accent-insensitive matching. */
export function normalizeSearchQuery(value: string): string {
  return value
    .trim()
    .toLowerCase()
    .normalize('NFD')
    .replace(/\p{M}/gu, '')
}

export function matchesDemoSearch(demo: Demo, normalizedQuery: string): boolean {
  if (!normalizedQuery) return true

  const haystack = [
    demo.titulo,
    demo.descricao,
    demo.segmento,
    demo.badge ?? '',
    ...(demo.stack ?? []),
  ]
    .map(normalizeSearchQuery)
    .join(' ')

  return normalizedQuery
    .split(/\s+/)
    .filter(Boolean)
    .every((term) => haystack.includes(term))
}

export function filterDemosBySearch(demos: Demo[], query: string): Demo[] {
  const normalizedQuery = normalizeSearchQuery(query)
  if (!normalizedQuery) return demos
  return demos.filter((demo) => matchesDemoSearch(demo, normalizedQuery))
}
