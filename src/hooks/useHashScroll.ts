import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export function useHashScroll() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (!hash) return

    const id = decodeURIComponent(hash.slice(1))
    const scrollToTarget = () => {
      const el = document.getElementById(id)
      el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

    const timer = window.setTimeout(scrollToTarget, 80)
    return () => window.clearTimeout(timer)
  }, [pathname, hash])
}
