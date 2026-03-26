import { SectionCard, ScriptureBox, PullQuote, NextSectionButton } from '../components'

export default function Section4({ onNext }: { onNext: () => void }) {
  return (
    <SectionCard num="IV" title="The Foundation — God's Nature">
      <p className="ng-body-p">Before we can speak accurately about who God is, we must speak carefully about what God is. And what God is cannot be understood by analogy to anything inside the created order. He is not the largest thing inside reality. He is the condition that makes reality possible at all.</p>

      <p className="ng-body-p">He does not exist within the universe the way a king exists within his kingdom. He is not a being among other beings, even the greatest such being. Everything that is — matter, time, space, energy, consciousness, breath, the capacity to think a thought or ask a question — exists only because He is. Remove God and you do not get an empty universe. You do not get darkness. You do not get silence. You do not get space. You get nothing. Not as a dramatic figure of speech, but as the precise and literal truth. There is no "without God" because the absence of God is the absence of existence itself.</p>

      <p className="ng-body-p">This is not poetry. This is the most accurate statement that can be made about the nature of reality. When Moses asked God His name at the burning bush, the answer was not a name in the ordinary sense — it was an ontological declaration.</p>

      <ScriptureBox ref_="Exodus 3:14">
        "I AM WHO I AM." The self-existent one. The one who requires no prior cause. The one who simply is.
      </ScriptureBox>

      <p className="ng-body-p">This matters because it reframes every question you will ever ask about God. He is not distant. He cannot be distant. Distance requires space, and space exists because of Him. He is not uninvolved. He cannot be uninvolved. Every heartbeat, every photon, every moment of consciousness is being actively sustained by His power right now. The question is never whether God is present. The question is whether we are paying attention.</p>

      <PullQuote>The God of Scripture does not compete with the universe for space. He is the reason the universe has space.</PullQuote>

      <ScriptureBox ref_="John 4:24">
        God is Spirit — not bound by the material order or subject to its limitations.
      </ScriptureBox>

      <ScriptureBox ref_="Deuteronomy 6:4 · Psalm 90:2 · Isaiah 46:10">
        God is One — unity, not division, is His essence. God is Eternal — He does not exist inside time the way we do; He sees the end from the beginning because He stands outside the sequence entirely.
      </ScriptureBox>

      <p className="ng-body-p">This is the ground. Everything else is built on this.</p>

      <NextSectionButton label="Section V: The Character" onClick={onNext} />
    </SectionCard>
  )
}
