import { describe, expect, it } from 'vitest'
import {
  filterDemosBySearch,
  matchesDemoSearch,
  normalizeSearchQuery,
} from '../utils/portfolioSearch'
import type { Demo } from '../data/types'

const demo: Demo = {
  titulo: 'Barbearia',
  segmento: 'Serviços',
  url: 'https://example.com',
  descricao: 'Cortes premium, barba e agendamento via WhatsApp.',
  stack: ['Landing + Admin'],
}

describe('portfolioSearch', () => {
  it('normalizes accents and casing', () => {
    expect(normalizeSearchQuery('  Psicóloga  ')).toBe('psicologa')
  })

  it('matches title, description, segment and stack', () => {
    expect(matchesDemoSearch(demo, normalizeSearchQuery('barbearia'))).toBe(true)
    expect(matchesDemoSearch(demo, normalizeSearchQuery('whatsapp'))).toBe(true)
    expect(matchesDemoSearch(demo, normalizeSearchQuery('servicos'))).toBe(true)
    expect(matchesDemoSearch(demo, normalizeSearchQuery('admin'))).toBe(true)
  })

  it('requires all terms to match', () => {
    expect(matchesDemoSearch(demo, normalizeSearchQuery('barbearia whatsapp'))).toBe(true)
    expect(matchesDemoSearch(demo, normalizeSearchQuery('barbearia imoveis'))).toBe(false)
  })

  it('returns all demos when query is empty', () => {
    const demos = [demo, { ...demo, titulo: 'Pet shop', url: 'https://example.com/pet' }]
    expect(filterDemosBySearch(demos, '')).toHaveLength(2)
    expect(filterDemosBySearch(demos, '   ')).toHaveLength(2)
  })

  it('filters demos by query', () => {
    const demos = [demo, { ...demo, titulo: 'Pet shop', url: 'https://example.com/pet' }]
    expect(filterDemosBySearch(demos, 'pet')).toHaveLength(1)
    expect(filterDemosBySearch(demos, 'pet')[0]?.titulo).toBe('Pet shop')
  })
})
