import { SectionCard, PullQuote, Movement, NextSectionButton } from '../components'

export default function Section8({ onNext }: { onNext: () => void }) {
  return (
    <SectionCard num="VIII" title="The Corrective — How to Read Every Doctrine Through His Character">
      <p className="ng-body-p">Once God's nature and character become the foundation, every doctrine that seemed harsh or incoherent begins to resolve. Not by being softened or explained away, but by being properly situated. Hard doctrines are only hard when they are disconnected from the character of the God they describe. Put them back in their proper context and they become not easier necessarily, but true — and truth, even when it is difficult, is always more livable than a distortion.</p>

      <Movement>How to Read Scripture</Movement>

      <p className="ng-body-p">Read every passage in light of the character of God as revealed in Christ. When a text seems to describe a God who is cruel, arbitrary, or indifferent, ask whether you are reading a fragment in isolation or a moment inside a larger story whose arc is redemptive. The God who commands the destruction of Canaanite cities and the God who weeps at Lazarus' tomb are the same God. One passage does not negate the other. Both are true. The task is to hold them together inside a character large enough to contain both, rather than resolving the tension by discarding one.</p>

      <Movement>How to Hold Hard Doctrines</Movement>

      <p className="ng-body-p">Election, judgment, and wrath are not exceptions to God's character. They are expressions of it. Election is the sovereign freedom of a God who chooses in order to bless, not in order to exclude. Judgment is not God venting anger — it is God being consistent with His own nature. Evil that refuses redemption exhausts its own possibility of existence, because existence is grounded in the God it has rejected. Wrath is not a temper. It is the necessary response of perfect goodness to that which destroys what He loves.</p>

      <PullQuote>Hold every hard doctrine against the character of Christ. If the doctrine, as you understand it, produces a God you could not worship, the problem is with your understanding of the doctrine, not with God.</PullQuote>

      <Movement>How to Pray When God Seems Absent</Movement>

      <p className="ng-body-p">When circumstances seem to contradict God's goodness, the foundation holds what your emotions cannot. You do not have to feel that God is good to know that He is. Knowing is the ground you stand on while the feeling catches up. Pray from the character, not from the circumstance. Lament is biblical — the Psalms are full of it. But even the deepest lament in Scripture is addressed to a God the psalmist believes is listening, because His faithfulness is the premise of the prayer, not its conclusion.</p>

      <Movement>What Sanctification Actually Looks Like</Movement>

      <p className="ng-body-p">Sanctification is not sin-minimization. It is love-maximization. The goal of the Christian life is not to produce a person who sins less and less until they are finally acceptable to God. It is to produce a person who loves more and more until they look increasingly like Christ. The difference is not semantic. A sin-minimization framework produces exactly the exhausted, ledger-watching Christian this paper has been describing. A love-maximization framework produces a person who is growing, failing, getting back up, and moving forward — not because they fear the ledger but because they love the One who closed it.</p>

      <NextSectionButton label="Section IX: Come Home to the Foundation" onClick={onNext} />
    </SectionCard>
  )
}
