import { SectionCard, PullQuote, NextSectionButton, FrameworkChain } from '../components'

const frameworkSteps = [
  {
    label: 'Nature',
    desc: 'What God is at the most fundamental level — self-existent, eternal, the ground of all being.',
  },
  {
    label: 'Character',
    desc: 'The moral and relational quality of that nature — love, holiness, faithfulness, wisdom, mercy.',
  },
  {
    label: 'Actions',
    desc: 'How that character expresses itself in history — creation, covenant, redemption, judgment.',
  },
  {
    label: 'Characteristics',
    desc: 'The observable attributes derived from watching Him act — omnipotent, omniscient, sovereign, eternal.',
  },
]

export default function Section3({ onNext }: { onNext: () => void }) {
  return (
    <SectionCard num="III" title="The Framework — Nature, Character, Actions, Characteristics">
      <p className="ng-body-p">Most Christians were taught God's characteristics before they were taught God. They were handed a list of attributes — omnipotent, omniscient, omnipresent, sovereign — and told that this list was the answer to the question "Who is God?" It is not. Those characteristics are the last thing in the chain, not the first. They are what you observe after the fact, when you stand back and watch God act across the sweep of history. They are descriptive, not foundational.</p>

      <p className="ng-body-p">The proper order is this:</p>

      <FrameworkChain steps={frameworkSteps} />

      <p className="ng-body-p">When you build upward from characteristics, you end up with a God who is primarily powerful rather than primarily good. And a God who is primarily powerful, before He is primarily good, is not safe. He is not trustworthy in the way that matters. You can obey Him. You can fear Him. But you cannot rest in Him.</p>

      <PullQuote>The biblical God is not powerful and then also loving. He is love, and His power serves that.</PullQuote>

      <p className="ng-body-p">Every attribute, rightly understood, is an expression of His character. His omnipotence is the power of perfect love to accomplish what perfect love purposes. His omniscience is the awareness of perfect faithfulness toward every creature He has made. His sovereignty is the governance of perfect wisdom on behalf of what He loves.</p>

      <p className="ng-body-p">Get the order right and everything else comes into focus. Get it wrong and you will spend your entire life trying to reconcile a powerful God with a good one, never fully succeeding, always quietly afraid.</p>

      <NextSectionButton label="Section IV: The Foundation — God's Nature" onClick={onNext} />
    </SectionCard>
  )
}
