import type { ReactNode } from 'react'

/* ── SectionCard ─────────────────────────────────── */
interface SectionCardProps {
  num: string
  title: string
  children: ReactNode
}
export function SectionCard({ num, title, children }: SectionCardProps) {
  return (
    <div className="cd-section-card">
      <div className="cd-section-header">
        <div className="cd-section-num">{num}</div>
        <div className="cd-section-title">{title}</div>
      </div>
      <div className="cd-section-body">{children}</div>
    </div>
  )
}

/* ── CrossDivider ────────────────────────────────── */
export function CrossDivider() {
  return <div className="cd-cross-divider">✦ &nbsp; ✦ &nbsp; ✦</div>
}

/* ── ClosingBox ──────────────────────────────────── */
interface ClosingBoxProps {
  ornament: string
  children: ReactNode
}
export function ClosingBox({ ornament, children }: ClosingBoxProps) {
  return (
    <div className="cd-closing-box">
      <div className="cd-closing-ornament" dangerouslySetInnerHTML={{ __html: ornament }} />
      <div className="cd-closing-body">{children}</div>
    </div>
  )
}
