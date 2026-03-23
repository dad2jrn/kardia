import { useState } from 'react'
import { academicMatrix, forensicMatrix, rationaleCards, synthesisText, type ScoringMatrix } from '../data/scoring'

function ScoreBar({ score, variant }: { score: number; variant: '30' | '33' }) {
  return (
    <div className="score-bar-wrap">
      <div className="score-bar-bg">
        <div
          className={`score-bar-fill fill-${variant}`}
          style={{ width: `${score * 10}%` }}
        />
      </div>
      <span className={`score-num score-num-${variant}`}>{score}</span>
    </div>
  )
}

function ScoringSection({ matrix }: { matrix: ScoringMatrix }) {
  return (
    <div className="scoring-section">
      <div className="scoring-title">{matrix.title}</div>
      <div className="scoring-description">{matrix.description}</div>
      <table className="score-matrix">
        <thead>
          <tr>
            <th>Criterion</th>
            <th>Weight</th>
            <th>30 CE</th>
            <th>33 CE</th>
          </tr>
        </thead>
        <tbody>
          {matrix.rows.map((row, i) => (
            <tr key={i}>
              <td>{row.criterion}</td>
              <td className="weight-col">{row.weight}</td>
              <td><ScoreBar score={row.score30} variant="30" /></td>
              <td><ScoreBar score={row.score33} variant="33" /></td>
            </tr>
          ))}
          <tr className="total-row">
            <td><strong>Total</strong></td>
            <td className="weight-col">{matrix.totalOutOf}</td>
            <td><span className="score-num score-num-30">{matrix.total30}</span></td>
            <td><span className="score-num score-num-33">{matrix.total33}</span></td>
          </tr>
        </tbody>
      </table>
      <div className="verdict-box">
        <div className="verdict-label">{matrix.verdictLabel}</div>
        <span className="verdict-winner">{matrix.verdictWinner}</span>
        <div className="verdict-text" dangerouslySetInnerHTML={{ __html: matrix.verdictText }} />
      </div>
    </div>
  )
}

export default function ScoringTab() {
  const [framework, setFramework] = useState<'academic' | 'forensic'>('academic')
  const matrix = framework === 'academic' ? academicMatrix : forensicMatrix

  return (
    <>
      <div className="framework-toggle-wrap">
        <div className="framework-toggle">
          <button
            className={`framework-btn${framework === 'academic' ? ' active' : ''}`}
            onClick={() => setFramework('academic')}
          >
            Academic Framework
          </button>
          <button
            className={`framework-btn${framework === 'forensic' ? ' active' : ''}`}
            onClick={() => setFramework('forensic')}
          >
            Forensic Framework
          </button>
        </div>
        <div className="framework-tagline">
          {framework === 'academic'
            ? 'Weights assigned by methodological reliability — the standard scholarly approach'
            : 'Weights assigned by fabrication resistance — harder to fake means more it counts'}
        </div>
      </div>

      <ScoringSection matrix={matrix} />

      <div className="synthesis-section">
        <div className="synthesis-label">✦ &nbsp; Synthesis &nbsp; ✦</div>
        <div className="synthesis-text" dangerouslySetInnerHTML={{ __html: synthesisText }} />
      </div>

      <div className="rationale-grid">
        {rationaleCards.map((card, i) => (
          <div key={i} className={`rationale-card${card.wide ? ' rationale-wide' : ''}`}>
            <div className="rationale-title">{card.title}</div>
            <div className="rationale-body">{card.body}</div>
          </div>
        ))}
      </div>
    </>
  )
}
