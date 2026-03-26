import type { ReactNode } from 'react'
import VerseRef from '../../components/VerseRef'

/* ── SectionCard ─────────────────────────────────── */
interface SectionCardProps {
  num: string
  title: string
  children: ReactNode
}
export function SectionCard({ num, title, children }: SectionCardProps) {
  return (
    <div className="ng-section-card">
      <div className="ng-section-header">
        <div className="ng-section-num">{num}</div>
        <div className="ng-section-title">{title}</div>
      </div>
      <div className="ng-section-body">{children}</div>
    </div>
  )
}

/* ── ScriptureBox ────────────────────────────────── */
interface ScriptureBoxProps {
  ref_: string
  children: ReactNode
}
export function ScriptureBox({ ref_, children }: ScriptureBoxProps) {
  const parts = ref_.split(' · ')
  return (
    <div className="ng-scripture-box">
      <div className="ng-scripture-ref">
        {parts.map((part, i) => (
          <span key={part}>
            {i > 0 && ' · '}
            <VerseRef passage={part.trim()} />
          </span>
        ))}
      </div>
      <div className="ng-scripture-text">{children}</div>
    </div>
  )
}

/* ── PullQuote ───────────────────────────────────── */
export function PullQuote({ children }: { children: ReactNode }) {
  return <div className="ng-pull-quote">{children}</div>
}

/* ── Movement ────────────────────────────────────── */
export function Movement({ children }: { children: ReactNode }) {
  return <div className="ng-movement">{children}</div>
}

/* ── CrossDivider ────────────────────────────────── */
export function CrossDivider() {
  return <div className="ng-cross-divider">✦ &nbsp; ✦ &nbsp; ✦</div>
}

/* ── NextSectionButton ───────────────────────────── */
interface NextSectionButtonProps {
  label: string
  onClick: () => void
}
export function NextSectionButton({ label, onClick }: NextSectionButtonProps) {
  return (
    <div className="ng-next-section">
      <button className="ng-next-section-btn" onClick={onClick}>{label} &nbsp;→</button>
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
    <div className="ng-closing-box">
      <div className="ng-closing-ornament">{ornament}</div>
      {statement && <div className="ng-closing-statement">{statement}</div>}
      <div className="ng-closing-body">{children}</div>
    </div>
  )
}

/* ── FrameworkChain ──────────────────────────────── */
interface FrameworkStep {
  label: string
  desc: string
}
interface FrameworkChainProps {
  steps: FrameworkStep[]
}
export function FrameworkChain({ steps }: FrameworkChainProps) {
  return (
    <div className="ng-framework-chain">
      {steps.map((step, i) => (
        <>
          <div key={step.label} className="ng-fw-step">
            <div className="ng-fw-step-label">{step.label}</div>
            <div className="ng-fw-step-desc">{step.desc}</div>
          </div>
          {i < steps.length - 1 && (
            <div key={`arrow-${i}`} className="ng-fw-connector">↓</div>
          )}
        </>
      ))}
    </div>
  )
}
