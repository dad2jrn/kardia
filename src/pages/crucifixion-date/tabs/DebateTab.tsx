import { pos30, pos33, type Position } from '../data/debate'

function ArgumentBlock({ category, title, body, cite }: Position['arguments'][number]) {
  return (
    <div className="argument-block">
      <div className="arg-category">{category}</div>
      <div className="arg-title">{title}</div>
      <div className="arg-body" dangerouslySetInnerHTML={{ __html: body }} />
      <span className="arg-cite">{cite}</span>
    </div>
  )
}

function PositionCard({ year, label, posClass, arguments: args }: Position) {
  return (
    <div className={`position-card ${posClass}`}>
      <div className="pos-header">
        <div className="pos-year">{year}</div>
        <div className="pos-label">{label}</div>
      </div>
      <div className="pos-body">
        {args.map((arg, i) => <ArgumentBlock key={i} {...arg} />)}
      </div>
    </div>
  )
}

export default function DebateTab() {
  return (
    <>
      <div className="debate-grid">
        <PositionCard {...pos30} />
        <PositionCard {...pos33} />
      </div>
      <div className="cross-divider">✦ &nbsp; ✦ &nbsp; ✦</div>
    </>
  )
}
