import { useMemo } from 'react'
import { useLocale } from './LocaleContext'
import { getHubConfig } from '../data/hubConfig'
import type { HubConfigType } from '../data/types'

export function useHubConfig(): HubConfigType {
  const { locale } = useLocale()
  return useMemo(() => getHubConfig(locale), [locale])
}

export { getHubConfig }
