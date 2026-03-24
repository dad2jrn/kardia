import { useState } from 'react'

export interface TabDef {
  id: string
  label: string
}

interface Props {
  tabs: TabDef[]
  active: string
  onChange: (id: string) => void
}

export default function TabNav({ tabs, active, onChange }: Props) {
  const [open, setOpen] = useState(false)
  const activeLabel = tabs.find(t => t.id === active)?.label ?? ''

  function select(id: string) {
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
