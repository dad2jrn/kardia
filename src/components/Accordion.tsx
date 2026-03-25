import { useState } from 'react'

export interface FaqItem {
  question: string
  answer: string
}

interface Props {
  items: FaqItem[]
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
            {isOpen && (
              <div className="faq-a" dangerouslySetInnerHTML={{ __html: item.answer }} />
            )}
          </div>
        )
      })}
    </>
  )
}
