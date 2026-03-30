import { SectionCard, PullQuote, NextSectionButton } from '../components'

export default function Section1({ onNext }: { onNext: () => void }) {
  return (
    <SectionCard num="I" title="The Wound the Church Doesn't Talk About">
      <p className="ng-body-p">Most of us were handed a God who is primarily powerful. A God defined by what He can do — send you to hell, withdraw His favor, or keep a ledger of your failures — rather than who He is. That God is not the God of Scripture as revealed in Christ. Power without character is not a Father — it is a tyrant. And a generation of Christians has quietly walked away from a tyrant they were told to call Father.</p>

      <PullQuote>Power without character is not a Father — it is a tyrant.</PullQuote>

      <p className="ng-body-p">This is the wound the church does not talk about. Not the people who left loudly and with arguments, but the ones who simply grew quiet. Who kept showing up, kept mouthing the words, but somewhere along the way stopped believing that God actually liked them. They knew He was supposed to love them — doctrine said so. But love and like are different things, and in their bones they felt that God was tolerating them at best and disappointed in them at worst.</p>

      <p className="ng-body-p">That is not a faith problem. That is a foundation problem. And the foundation can be fixed.</p>

      <p className="ng-body-p">This study is not an invitation to a softer God or a more comfortable theology. It is an invitation back to the real one. The God of Abraham, Isaac, and Jacob. The God made visible in Jesus of Nazareth. The God whose nature is the ground of all reality and whose character is the measure of all goodness. If you have been carrying a version of God that exhausts you, this is for you.</p>

      <NextSectionButton label="Section II: The Problem" onClick={onNext} />
    </SectionCard>
  )
}
