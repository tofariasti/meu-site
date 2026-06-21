import type { ComparativoItem } from '../../data/types'
import { useLocale } from '../../i18n/LocaleContext'
import { uiCopy } from '../../data/uiCopy'

const ICON_X = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
)

const ICON_CHECK = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
    <polyline points="20 6 9 17 4 12" />
  </svg>
)

const ICON_INSTAGRAM = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
)

const ICON_MONITOR = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <rect x="2" y="3" width="20" height="14" rx="2" />
    <path d="M8 21h8M12 17v4" />
  </svg>
)

function ComparisonList({ items, type }: { items: ComparativoItem[]; type: 'bad' | 'good' }) {
  return (
    <ul className="comparison-list">
      {items.map((item) => (
        <li key={item.titulo} className={`comparison-item comparison-item--${type === 'bad' ? 'bad' : 'good'}`}>
          {type === 'bad' ? ICON_X : ICON_CHECK}
          <div>
            <strong>{item.titulo}</strong>
            <p>{item.texto}</p>
          </div>
        </li>
      ))}
    </ul>
  )
}

interface ComparisonTableProps {
  instagramItems: ComparativoItem[]
  siteItems: ComparativoItem[]
}

export function ComparisonTable({ instagramItems, siteItems }: ComparisonTableProps) {
  const { t } = useLocale()

  return (
    <div className="comparison-table">
      <div className="comparison-col comparison-col--danger">
        <div className="comparison-col__header">
          {ICON_INSTAGRAM}
          <h3>{t(uiCopy.comparison.instagramOnly)}</h3>
          <span className="comparison-tag comparison-tag--danger">{t(uiCopy.comparison.highRisk)}</span>
        </div>
        <ComparisonList items={instagramItems} type="bad" />
      </div>
      <div className="comparison-col comparison-col--success">
        <div className="comparison-col__header">
          {ICON_MONITOR}
          <h3>{t(uiCopy.comparison.professionalSite)}</h3>
          <span className="comparison-tag comparison-tag--success">{t(uiCopy.comparison.fullControl)}</span>
        </div>
        <ComparisonList items={siteItems} type="good" />
      </div>
    </div>
  )
}

export function ComparativoQuote({ titulo, texto }: { titulo: string; texto: string }) {
  return (
    <div className="reality-box">
      <svg
        className="reality-box__icon"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        aria-hidden="true"
      >
        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
        <line x1="12" y1="9" x2="12" y2="13" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
      <div className="reality-box__content">
        <h3>{titulo}</h3>
        <p dangerouslySetInnerHTML={{ __html: texto }} />
      </div>
    </div>
  )
}

export function ComparativoStats({
  stats,
}: {
  stats: { valor: number; sufixo: string; texto: string; fonte: string }[]
}) {
  const { t } = useLocale()

  return (
    <div className="stats-proof">
      <h3 className="stats-proof__title">{t(uiCopy.comparison.statsTitle)}</h3>
      <div className="stats-proof__grid">
        {stats.map((s) => (
          <div key={s.texto} className="stats-proof__item">
            <strong>
              {s.valor}
              {s.sufixo}
            </strong>
            <p>{s.texto}</p>
            <cite>{s.fonte}</cite>
          </div>
        ))}
      </div>
    </div>
  )
}
