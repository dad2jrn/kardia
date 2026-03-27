import { useState, useCallback, useRef } from 'react'
import { createPortal } from 'react-dom'
import './VerseRef.css'

const ESV_API_KEY = import.meta.env.VITE_ESV_API_KEY as string

interface EsvResponse {
  passages: string[]
  canonical: string
}

// Module-level cache — persists for the page session
const cache = new Map<string, EsvResponse>()

interface PopoverPos {
  top: number
  left: number
  above: boolean
}

async function fetchPassage(passage: string): Promise<EsvResponse> {
  if (cache.has(passage)) return cache.get(passage)!
  const params = new URLSearchParams({
    q: passage,
    'include-headings': 'false',
    'include-footnotes': 'false',
    'include-verse-numbers': 'false',
    'include-short-copyright': 'true',
    'indent-poetry': 'false',
  })
  const res = await fetch(`https://api.esv.org/v3/passage/text/?${params}`, {
    headers: { Authorization: `Token ${ESV_API_KEY}` },
  })
  if (!res.ok) throw new Error(`ESV API ${res.status}`)
  const data: EsvResponse = await res.json()
  cache.set(passage, data)
  return data
}

interface VerseRefProps {
  passage: string       // e.g. "John 1:1" or "Romans 8:28-30"
  children?: React.ReactNode // display text — defaults to passage
}

export default function VerseRef({ passage, children }: VerseRefProps) {
  const [state, setState] = useState<'idle' | 'loading' | 'ready' | 'error'>('idle')
  const [text, setText] = useState('')
  const [canonical, setCanonical] = useState('')
  const [pos, setPos] = useState<PopoverPos | null>(null)
  const triggerRef = useRef<HTMLSpanElement>(null)
  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const showPopover = useCallback(async () => {
    if (hideTimer.current) clearTimeout(hideTimer.current)
    const el = triggerRef.current
    if (!el) return

    const rect = el.getBoundingClientRect()
    const above = rect.bottom > window.innerHeight * 0.75
    setPos({
      top: above ? rect.top - 8 : rect.bottom + 8,
      left: Math.min(rect.left, window.innerWidth - 545),
      above,
    })

    if (state === 'ready') return
    setState('loading')
    try {
      const data = await fetchPassage(passage)
      setText(data.passages[0]?.trim() ?? '')
      setCanonical(data.canonical)
      setState('ready')
    } catch {
      setState('error')
    }
  }, [passage, state])

  const scheduleHide = useCallback(() => {
    hideTimer.current = setTimeout(() => setPos(null), 120)
  }, [])

  const popoverContent =
    pos &&
    createPortal(
      <div
        className="verse-popover"
        style={{
          top: pos.above ? undefined : pos.top,
          bottom: pos.above ? window.innerHeight - pos.top : undefined,
          left: Math.max(8, pos.left),
        }}
      >
        <div className="verse-popover-ref">{canonical || passage}</div>
        {state === 'loading' && <div className="verse-popover-loading">Loading…</div>}
        {state === 'error' && <div className="verse-popover-error">Could not load passage.</div>}
        {state === 'ready' && (
          <>
            <div className="verse-popover-text">{text}</div>
            <div className="verse-popover-copyright">Source: ESV.org</div>
          </>
        )}
      </div>,
      document.body
    )

  return (
    <>
      <span
        ref={triggerRef}
        className="verse-ref"
        onMouseEnter={showPopover}
        onMouseLeave={scheduleHide}
        onFocus={showPopover}
        onBlur={scheduleHide}
      >
        {children ?? passage}
      </span>
      {popoverContent}
    </>
  )
}
