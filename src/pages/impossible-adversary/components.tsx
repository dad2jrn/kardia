import { ReactNode } from 'react'

// ── SectionCard ───────────────────────────────────────────
interface SectionCardProps { num: string; title: string; children: ReactNode }
export function SectionCard({ num, title, children }: SectionCardProps) {
  return (
    <div className="ia-section-card">
      <div className="ia-section-header">
        <div className="ia-section-num">{num}</div>
        <div className="ia-section-title">{title}</div>
      </div>
      <div className="ia-section-body">{children}</div>
    </div>
  )
}

// ── ScriptureBox ──────────────────────────────────────────
interface ScriptureBoxProps { ref_: string; children: ReactNode }
export function ScriptureBox({ ref_, children }: ScriptureBoxProps) {
  return (
    <div className="ia-scripture-box">
      <div className="ia-scripture-ref">{ref_}</div>
      <div className="ia-scripture-text">{children}</div>
    </div>
  )
}

// ── PullQuote ─────────────────────────────────────────────
export function PullQuote({ children }: { children: ReactNode }) {
  return <div className="ia-pull-quote">{children}</div>
}

// ── Movement ──────────────────────────────────────────────
export function Movement({ children }: { children: ReactNode }) {
  return <div className="ia-movement">{children}</div>
}

// ── CrossDivider ──────────────────────────────────────────
export function CrossDivider() {
  return <div className="ia-cross-divider">✦ &nbsp; ✦ &nbsp; ✦</div>
}

// ── AnchorList ────────────────────────────────────────────
interface AnchorListProps { refs: string }
export function AnchorList({ refs }: AnchorListProps) {
  return (
    <div className="ia-anchor-list">
      <div className="ia-anchor-title">Key Texts</div>
      <div className="ia-anchor-refs" dangerouslySetInnerHTML={{ __html: refs }} />
    </div>
  )
}

// ── NextSectionButton ─────────────────────────────────────
interface NextSectionButtonProps { label: string; onClick: () => void }
export function NextSectionButton({ label, onClick }: NextSectionButtonProps) {
  return (
    <div className="ia-next-section">
      <button className="ia-next-section-btn" onClick={onClick}>{label}</button>
    </div>
  )
}

// ── PatristicBox ──────────────────────────────────────────
interface PatristicBoxProps { source: string; children: ReactNode }
export function PatristicBox({ source, children }: PatristicBoxProps) {
  return (
    <div className="ia-patristic-box">
      <div className="ia-patristic-source">{source}</div>
      <div className="ia-patristic-text">{children}</div>
    </div>
  )
}

// ── ClosingBox ────────────────────────────────────────────
interface ClosingBoxProps { ornament: string; statement?: ReactNode; children: ReactNode }
export function ClosingBox({ ornament, statement, children }: ClosingBoxProps) {
  return (
    <div className="ia-closing-box">
      <div className="ia-closing-ornament" dangerouslySetInnerHTML={{ __html: ornament }} />
      {statement && <div className="ia-closing-statement">{statement}</div>}
      <div className="ia-closing-body">{children}</div>
    </div>
  )
}

// ── ChallengeBox ──────────────────────────────────────────
interface ChallengeBoxProps { label: string; children: ReactNode }
export function ChallengeBox({ label, children }: ChallengeBoxProps) {
  return (
    <div className="ia-challenge-box">
      <div className="ia-challenge-label">{label}</div>
      <div className="ia-challenge-text">{children}</div>
    </div>
  )
}

// ── PillarCard ────────────────────────────────────────────
interface PillarCardProps { numeral: string; label: ReactNode; colorClass: string; children: ReactNode; onClick: () => void }
export function PillarCard({ numeral, label, colorClass, children, onClick }: PillarCardProps) {
  return (
    <div className="ia-pillar-card" onClick={onClick}>
      <div className={`ia-pillar-header ${colorClass}`}>
        <div className="ia-pillar-numeral">{numeral}</div>
        <div className="ia-pillar-label">{label}</div>
      </div>
      <div className="ia-pillar-body">{children}</div>
    </div>
  )
}

// ── TripleCard ────────────────────────────────────────────
interface TripleCardProps { hebrew: string; meaning: string; colorClass: string; children: ReactNode }
export function TripleCard({ hebrew, meaning, colorClass, children }: TripleCardProps) {
  return (
    <div className="ia-triple-card">
      <div className={`ia-triple-header ${colorClass}`}>
        <div className="ia-triple-hebrew">{hebrew}</div>
        <div className="ia-triple-meaning">{meaning}</div>
      </div>
      <div className="ia-triple-body">{children}</div>
    </div>
  )
}

// ── JudgmentCard ──────────────────────────────────────────
interface JudgmentCardProps { event: string; verdict: string; colorClass: string; children: ReactNode }
export function JudgmentCard({ event, verdict, colorClass, children }: JudgmentCardProps) {
  return (
    <div className="ia-judgment-card">
      <div className={`ia-judgment-header ${colorClass}`}>
        <div className="ia-judgment-event">{event}</div>
        <div className="ia-judgment-verdict">{verdict}</div>
      </div>
      <div className="ia-judgment-body">{children}</div>
    </div>
  )
}

// ── TemptationCard ────────────────────────────────────────
interface TemptationCardProps { name: string; subtext: string; temptation: string; parallel: string }
export function TemptationCard({ name, subtext, temptation, parallel }: TemptationCardProps) {
  return (
    <div className="ia-temptation-card">
      <div className="ia-temptation-header">
        <div className="ia-temptation-name">{name}</div>
        <div className="ia-temptation-subtext">{subtext}</div>
      </div>
      <div className="ia-temptation-body">
        <div className="ia-temptation-row">
          <div className="ia-temptation-row-label">The Temptation</div>
          <div className="ia-temptation-row-text">{temptation}</div>
        </div>
        <div className="ia-temptation-row">
          <div className="ia-temptation-row-label">The Nachash Parallel</div>
          <div className="ia-temptation-row-text" dangerouslySetInnerHTML={{ __html: parallel }} />
        </div>
      </div>
    </div>
  )
}
