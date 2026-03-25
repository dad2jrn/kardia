import { SectionCard, CrossDivider, ClosingBox } from '../components'
import Accordion from '../../../components/Accordion'
import { appendixItems } from '../data/appendix'

export default function Appendix() {
  return (
    <SectionCard num="✦" title="Appendix: Key Texts Re-examined">
      <p className="ia-body-p">Each of the following texts is commonly cited in defense of the traditional demonology. Each is examined here in light of the four pillars and shown to require a different — and more exegetically honest — reading.</p>

      <Accordion items={appendixItems} />

      <CrossDivider />

      <ClosingBox ornament="✦ &nbsp; A Final Word &nbsp; ✦">
        Every argument in this thesis is grounded in Scripture, tested against the internal consistency of the canonical witness, and anchored in the Nature of God as the non-negotiable foundation. Where the tradition has erred, it has erred not by taking evil too seriously — but by locating it in the wrong place. The war is interior. The mercy is interior. And the victory of the second Adam is precisely interior: the same human nature that fell has, in Christ, overcome.
        <br /><br />
        Test everything against the Word. Hold fast to what is good.
      </ClosingBox>
    </SectionCard>
  )
}
