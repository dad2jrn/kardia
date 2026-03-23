import { tensions } from '../data/tensions'

export default function KeyTensionsTab() {
  return (
    <>
      {tensions.map((tension, i) => (
        <div key={i} className="tension-block">
          <div className="tension-title">{tension.title}</div>
          <div className="tension-body">{tension.body}</div>
          <div className="tension-positions">
            {tension.positions.map((pos, j) => (
              <div key={j} className={`tension-pos tension-pos-${pos.year}`}>
                <span className={`tension-pos-label label-${pos.year}`}>{pos.year} CE</span>
                {pos.text}
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  )
}
