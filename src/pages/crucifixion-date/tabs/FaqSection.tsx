import Accordion from '../../../components/Accordion'
import { faqItems } from '../data/faq'

export default function FaqSection() {
  return (
    <div className="cd-faq-card">
      <Accordion items={faqItems} />
    </div>
  )
}
