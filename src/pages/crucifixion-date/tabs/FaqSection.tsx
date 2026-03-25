import Accordion from '../../../components/Accordion'
import { SectionCard, CrossDivider, ClosingBox } from '../components'
import { faqItems } from '../data/faq'

export default function FaqSection() {
  return (
    <SectionCard num="?" title="Frequently Asked Questions">
      <p className="cd-body-p">
        These are the questions most commonly raised by readers encountering this chronological inquiry for the first time. Each answer engages the astronomical, historical, and scriptural evidence honestly — acknowledging where genuine uncertainty remains.
      </p>

      <Accordion items={faqItems} />

      <CrossDivider />

      <ClosingBox ornament="✦ &nbsp; A Final Note &nbsp; ✦">
        Every answer in this FAQ is grounded in the best available historical, astronomical, and scriptural evidence. Where scholars genuinely disagree, that disagreement has been named rather than papered over. The goal is not false certainty — it is the clearest possible picture given what we have. Two years remain in serious contention. Both deserve honest engagement.<br /><br />
        Weigh the evidence. Hold conclusions with appropriate humility.
      </ClosingBox>
    </SectionCard>
  )
}
