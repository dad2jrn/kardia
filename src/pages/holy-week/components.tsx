import type { ReactNode } from 'react'

/* ── SectionCard ─────────────────────────────────── */
interface SectionCardProps {
  num: string
  title: string
  children: ReactNode
}
export function SectionCard({ num, title, children }: SectionCardProps) {
  return (
    <div className="hw-section-card">
      <div className="hw-section-header">
        <div className="hw-section-num">{num}</div>
        <div className="hw-section-title">{title}</div>
      </div>
      <div className="hw-section-body">{children}</div>
    </div>
  )
}

/* ── ScriptureBox ────────────────────────────────── */
interface ScriptureBoxProps {
  ref_: string
  children: ReactNode
}
export function ScriptureBox({ ref_, children }: ScriptureBoxProps) {
  return (
    <div className="hw-scripture-box">
      <div className="hw-scripture-ref">{ref_}</div>
      <div className="hw-scripture-text">{children}</div>
    </div>
  )
}

/* ── PullQuote ───────────────────────────────────── */
export function PullQuote({ children }: { children: ReactNode }) {
  return <div className="hw-pull-quote">{children}</div>
}

/* ── Movement ────────────────────────────────────── */
export function Movement({ children }: { children: ReactNode }) {
  return <div className="hw-movement">{children}</div>
}

/* ── CrossDivider ────────────────────────────────── */
export function CrossDivider() {
  return <div className="hw-cross-divider">✦ &nbsp; ✦ &nbsp; ✦</div>
}

/* ── AnchorList ──────────────────────────────────── */
export function AnchorList({ refs }: { refs: string }) {
  return (
    <div className="hw-anchor-list">
      <div className="hw-anchor-title">Scripture Anchors</div>
      <div className="hw-anchor-refs" dangerouslySetInnerHTML={{ __html: refs }} />
    </div>
  )
}

/* ── NextSectionButton ───────────────────────────── */
interface NextSectionButtonProps {
  label: string
  onClick: () => void
}
export function NextSectionButton({ label, onClick }: NextSectionButtonProps) {
  return (
    <div className="hw-next-section">
      <button className="hw-next-section-btn" onClick={onClick}>{label} &nbsp;→</button>
    </div>
  )
}

/* ── PatristicBox ────────────────────────────────── */
interface PatristicBoxProps {
  source: string
  children: ReactNode
}
export function PatristicBox({ source, children }: PatristicBoxProps) {
  return (
    <div className="hw-patristic-box">
      <div className="hw-patristic-source">{source}</div>
      <div className="hw-patristic-text">{children}</div>
    </div>
  )
}

/* ── ClosingBox ──────────────────────────────────── */
interface ClosingBoxProps {
  ornament: string
  statement?: ReactNode
  children: ReactNode
}
export function ClosingBox({ ornament, statement, children }: ClosingBoxProps) {
  return (
    <div className="hw-closing-box">
      <div className="hw-closing-ornament">{ornament}</div>
      {statement && <div className="hw-closing-statement">{statement}</div>}
      <div className="hw-closing-body">{children}</div>
    </div>
  )
}
