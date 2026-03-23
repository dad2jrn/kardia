import { useState } from 'react'

const tabs = [
  { id: 'debate', label: 'The Debate' },
  { id: 'tensions', label: 'Key Tensions' },
  { id: 'scoring', label: 'Scoring Matrix' },
  { id: 'sources', label: 'Sources' },
  { id: 'faq', label: 'FAQ' },
] as const

export type TabId = typeof tabs[number]['id']

interface Props {
  active: TabId
  onChange: (id: TabId) => void
}

export default function TabNav({ active, onChange }: Props) {
  const [open, setOpen] = useState(false)
  const activeLabel = tabs.find(t => t.id === active)?.label ?? ''

  function select(id: TabId) {
    onChange(id)
    setOpen(false)
  }

  return (
    <div className={`tab-nav-wrap${open ? ' tab-open' : ''}`}>
      <button
        className="tab-toggle"
        onClick={() => setOpen(o => !o)}
        aria-label="Select section"
      >
        <span className="tab-toggle-label">{activeLabel}</span>
        <span className="tab-toggle-arrow">▾</span>
      </button>
      <div className="tab-nav">
        {tabs.map(tab => (
          <button
            key={tab.id}
            className={`tab-btn${active === tab.id ? ' active' : ''}`}
            onClick={() => select(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  )
}
