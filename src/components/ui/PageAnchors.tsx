import { Link } from 'react-router-dom'
import type { Localized } from '../../i18n/types'
import { useLocale } from '../../i18n/LocaleContext'
import { uiCopy } from '../../data/uiCopy'
import { AnimatedSection } from './AnimatedSection'

export type PageAnchorItem = {
  id: string
  label: Localized<string>
  /** Cross-page path without hash, e.g. `/portfolio/` */
  path?: string
}

type PageAnchorsProps = {
  items: PageAnchorItem[]
  className?: string
}

function anchorTo(pathFor: (path: string) => string, item: PageAnchorItem): string {
  if (item.path) return pathFor(`${item.path}#${item.id}`)
  return `#${item.id}`
}

export function PageAnchors({ items, className }: PageAnchorsProps) {
  const { t, pathFor } = useLocale()
  const rootClass = ['page-anchors', className].filter(Boolean).join(' ')

  return (
    <AnimatedSection>
      <nav className={rootClass} aria-label={t(uiCopy.anchors.group)}>
        {items.map((item) => {
          const to = anchorTo(pathFor, item)
          const label = t(item.label)
          if (to.startsWith('#')) {
            return (
              <a key={item.id} href={to} className="page-anchors__link">
                {label}
              </a>
            )
          }
          return (
            <Link key={item.id} to={to} className="page-anchors__link">
              {label}
            </Link>
          )
        })}
      </nav>
    </AnimatedSection>
  )
}
