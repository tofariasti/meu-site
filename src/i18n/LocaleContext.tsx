import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  type ReactNode,
} from 'react'
import type { Localized, Locale } from './types'
import { htmlLang } from './types'
import { useLocalizedPath } from './useLocalizedPath'

interface LocaleContextValue {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: <T>(value: Localized<T>) => T
  pathFor: (path: string) => string
}

const LocaleContext = createContext<LocaleContextValue | null>(null)

export function LocaleProvider({ children }: { children: ReactNode }) {
  const { locale, pathFor, switchLocale } = useLocalizedPath()

  const setLocale = useCallback(
    (next: Locale) => switchLocale(next),
    [switchLocale],
  )

  useEffect(() => {
    document.documentElement.lang = htmlLang(locale)
  }, [locale])

  const t = useCallback(
    <T,>(value: Localized<T>): T => value[locale],
    [locale],
  )

  const value = useMemo(
    () => ({ locale, setLocale, t, pathFor }),
    [locale, setLocale, t, pathFor],
  )

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
}

export function useLocale() {
  const ctx = useContext(LocaleContext)
  if (!ctx) throw new Error('useLocale must be used within LocaleProvider')
  return ctx
}
