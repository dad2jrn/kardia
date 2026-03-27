import { useState } from 'react'
import VerseRef from './VerseRef'

export interface FaqItem {
  question: string
  answer: string
}

interface Props {
  items: FaqItem[]
}

/* ── Bible-book lookup for distinguishing scripture from non-scripture refs ── */
const BIBLE_BOOKS = new Set([
  'Genesis','Exodus','Leviticus','Numbers','Deuteronomy',
  'Joshua','Judges','Ruth','1 Samuel','2 Samuel','1 Kings','2 Kings',
  '1 Chronicles','2 Chronicles','Ezra','Nehemiah','Esther',
  'Job','Psalm','Psalms','Proverbs','Ecclesiastes','Song of Solomon',
  'Isaiah','Jeremiah','Lamentations','Ezekiel','Daniel',
  'Hosea','Joel','Amos','Obadiah','Jonah','Micah','Nahum',
  'Habakkuk','Zephaniah','Haggai','Zechariah','Malachi',
  'Matthew','Mark','Luke','John','Acts','Romans',
  '1 Corinthians','2 Corinthians','Galatians','Ephesians',
  'Philippians','Colossians','1 Thessalonians','2 Thessalonians',
  '1 Timothy','2 Timothy','Titus','Philemon',
  'Hebrews','James','1 Peter','2 Peter','1 John','2 John','3 John',
  'Jude','Revelation',
])

function isBibleRef(text: string): boolean {
  for (const book of BIBLE_BOOKS) {
    if (text === book || text.startsWith(book + ' ')) return true
  }
  return false
}

/* ── Renders a faq-scripture block with interactive VerseRef popovers ── */
function ScriptureLine({ html }: { html: string }) {
  const text = html.replace(/&nbsp;/g, ' ').replace(/<[^>]*>/g, '')
  const segments = text.split(/\s*·\s*/).map(s => s.trim()).filter(Boolean)

  return (
    <div className="faq-scripture">
      {segments.map((seg, i) => {
        const dashIdx = seg.indexOf(' — ')
        let ref: string
        let annotation: string

        if (dashIdx >= 0) {
          ref = seg.slice(0, dashIdx).trim()
          annotation = seg.slice(dashIdx)
        } else {
          const parenIdx = seg.indexOf(' (')
          if (parenIdx >= 0) {
            ref = seg.slice(0, parenIdx).trim()
            annotation = ' ' + seg.slice(parenIdx)
          } else {
            ref = seg.trim()
            annotation = ''
          }
        }

        return (
          <span key={i}>
            {i > 0 && ' · '}
            {isBibleRef(ref) ? <VerseRef passage={ref} /> : ref}
            {annotation}
          </span>
        )
      })}
    </div>
  )
}

/* ── Regex to find a trailing faq-scripture div or p ── */
const SCRIPTURE_RE = /<(?:div|p)\s+class="faq-scripture">([\s\S]*?)<\/(?:div|p)>\s*$/

function renderAnswer(html: string) {
  const match = html.match(SCRIPTURE_RE)
  if (!match) {
    return <div className="faq-a" dangerouslySetInnerHTML={{ __html: html }} />
  }
  const bodyHtml = html.slice(0, match.index)
  return (
    <div className="faq-a">
      <div dangerouslySetInnerHTML={{ __html: bodyHtml }} />
      <ScriptureLine html={match[1]} />
    </div>
  )
}

export default function Accordion({ items }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  function toggle(i: number) {
    setOpenIndex(prev => (prev === i ? null : i))
  }

  return (
    <>
      {items.map((item, i) => {
        const isOpen = openIndex === i
        return (
          <div key={i} className="faq-item">
            <div
              className={`faq-q${isOpen ? ' open' : ''}`}
              onClick={() => toggle(i)}
            >
              <span>{item.question}</span>
              <span className="faq-arrow">▾</span>
            </div>
            {isOpen && renderAnswer(item.answer)}
          </div>
        )
      })}
    </>
  )
}
