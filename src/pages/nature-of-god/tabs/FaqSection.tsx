import { SectionCard, CrossDivider, ClosingBox } from '../components'
import Accordion from '../../../components/Accordion'
import { faqItems } from '../data/faq'

export default function FaqSection() {
  return (
    <SectionCard num="?" title="Frequently Asked Questions">
      <p className="ng-body-p">The questions below are not hypothetical. They are the real questions that real Christians carry — sometimes for decades — without ever hearing an answer that satisfied them. Each answer here is grounded in the framework this paper has established: God's nature first, then His character, then His actions, then His attributes. That order matters. It is what makes the answers coherent rather than merely defensive.</p>

      <Accordion items={faqItems} />

      <CrossDivider />

      <ClosingBox ornament="✦ &nbsp; A Final Word &nbsp; ✦">
        Every answer in this FAQ is an attempt to reason from the foundation outward — from who God is, not from what we fear He might be. Where these answers leave you with further questions, that is not a failure. It is an invitation to keep going deeper. The God who can be fully contained in our answers is not the God of Scripture. The God who is trustworthy enough to hold our hardest questions — that one is.
      </ClosingBox>
    </SectionCard>
  )
}
