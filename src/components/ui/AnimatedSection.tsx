import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { useReducedMotion } from '../../hooks/useReducedMotion'

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'left' | 'right'
  style?: React.CSSProperties
}

export function AnimatedSection({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  style,
}: AnimatedSectionProps) {
  const reduced = useReducedMotion()

  const offsets = {
    up: { y: 24, x: 0 },
    left: { y: 0, x: -24 },
    right: { y: 0, x: 24 },
  }

  const offset = offsets[direction]

  if (reduced) {
    return <div className={className} style={style}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      style={style}
      initial={{ opacity: 0, x: offset.x, y: offset.y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay: delay * 0.08, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  )
}
