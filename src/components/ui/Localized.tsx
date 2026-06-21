import type { Localized } from '../../i18n/types'
import { useLocale } from '../../i18n/LocaleContext'
import type { ElementType } from 'react'

interface LocalizedTextProps {
  value: Localized<string>
  className?: string
  as?: ElementType
}

export function LocalizedText({ value, className, as: Tag = 'span' }: LocalizedTextProps) {
  const { t } = useLocale()
  return <Tag className={className}>{t(value)}</Tag>
}
