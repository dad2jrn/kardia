import { useState } from 'react'
import { SectionCard, CrossDivider, ClosingBox } from '../components'
import Accordion from '../../../components/Accordion'
import { categories, faqItems, type CategoryId } from '../data/faq'

export default function FaqSection() {
  const [activeCategory, setActiveCategory] = useState<CategoryId>('pastoral')
  const current = categories.find(c => c.id === activeCategory)!
  const currentItems = faqItems.filter(item => item.category === activeCategory)

  return (
    <SectionCard num="?" title="FAQ & Objections">
      <p className="ia-body-p ia-faq-intro">
        Every serious thesis invites questions. Some arise from pastoral concern, some from genuine pursuit of clarity, and some from the weight of tradition that has shaped how we read Scripture for centuries. All of them deserve honest engagement. The answers below are grounded in the same four pillars as the thesis — the Nature of God, Genesis 3, the pattern of divine judgment, and the Christological confirmation.
      </p>

      <div className="ia-faq-cat-nav">
        {categories.map(cat => {
          const count = faqItems.filter(item => item.category === cat.id).length
          return (
            <button
              key={cat.id}
              className={[
                'ia-faq-cat-btn',
                `ia-faq-cat-btn--${cat.id}`,
                activeCategory === cat.id ? `ia-faq-cat-btn--active ia-faq-cat-btn--active-${cat.id}` : '',
              ].join(' ')}
              onClick={() => setActiveCategory(cat.id)}
            >
              <span className="ia-faq-cat-btn-label">{cat.label}</span>
              <span className="ia-faq-cat-btn-count">{count}</span>
            </button>
          )
        })}
      </div>

      <div className={`ia-faq-cat-header ia-faq-cat-header--${current.id}`}>
        <div className="ia-faq-cat-header-text">
          <span className="ia-faq-cat-header-label">{current.label}</span>
          <span className="ia-faq-cat-header-desc">{current.description}</span>
        </div>
        <span className="ia-faq-cat-header-count">{currentItems.length} Questions</span>
      </div>

      <Accordion items={currentItems} />

      <CrossDivider />

      <ClosingBox ornament="✦ &nbsp; A Final Word &nbsp; ✦">
        Every answer in this FAQ is grounded in Scripture, tested against the internal consistency of the canonical witness, and anchored in the Nature of God as the non-negotiable foundation. Where the tradition has erred, it has erred not by taking evil too seriously — but by locating it in the wrong place. The war is interior. The mercy is interior. And the victory of the second Adam is precisely interior: the same human nature that fell has, in Christ, overcome.<br /><br />
        Test everything against the Word. Hold fast to what is good.
      </ClosingBox>
    </SectionCard>
  )
}
