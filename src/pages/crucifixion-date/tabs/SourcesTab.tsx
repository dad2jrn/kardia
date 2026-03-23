import { sources } from '../data/sources'

export default function SourcesTab() {
  return (
    <div className="sources-grid">
      {sources.map((source, i) => (
        <div key={i} className="source-card">
          <div className="source-type">{source.type}</div>
          <div className="source-name">{source.name}</div>
          <div className="source-desc" dangerouslySetInnerHTML={{ __html: source.description }} />
        </div>
      ))}
    </div>
  )
}
