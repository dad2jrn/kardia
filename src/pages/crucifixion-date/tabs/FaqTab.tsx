import { useState } from 'react'
import { faqItems } from '../data/faq'

export default function FaqTab() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  function toggle(i: number) {
    setOpenIndex(prev => (prev === i ? null : i))
  }

  return (
    <>
      {faqItems.map((item, i) => {
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
              <div className="faq-a open" dangerouslySetInnerHTML={{ __html: item.answer }} />
            )}
          </div>
        )
      })}
    </>
  )
}
