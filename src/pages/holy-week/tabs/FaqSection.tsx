import { SectionCard, CrossDivider, ClosingBox } from '../components'
import Accordion from '../../../components/Accordion'
import { faqItems } from '../data/faq'

export default function FaqSection() {
  return (
    <SectionCard num="?" title="Frequently Asked Questions">
      <p className="hw-body-p hw-faq-intro">These are the questions most commonly raised by everyday Christians encountering this framework for the first time. Each answer is grounded in Scripture and historical record.</p>

      <Accordion items={faqItems} />

      <CrossDivider />

      <ClosingBox ornament="✦ &nbsp; A Final Reminder &nbsp; ✦">
        Every answer in this FAQ is grounded in Scripture and historical record. Where genuine scholarly debate exists, it has been acknowledged rather than papered over. The goal is not to produce certainty where the Bible does not provide it — but to equip you to think carefully, read faithfully, and live with the kind of purposeful urgency that belongs to people who know what time it is.<br /><br />
        Test everything against the Word. Hold fast to what is good.
      </ClosingBox>
    </SectionCard>
  )
}
