import { SectionCard, ScriptureBox, PullQuote, NextSectionButton } from '../components'

export default function Section7({ onNext }: { onNext: () => void }) {
  return (
    <SectionCard num="VII" title="The Revelation — Christ as the Fullest Picture of the Father">
      <p className="ng-body-p">Everything we have said about God's nature and character finds its clearest expression in Jesus of Nazareth. He is not a different God than the one who spoke to Moses. He is not a kinder revision of the angry Old Testament deity. He is the image of the invisible God — the character made visible, the nature given a face and a voice and hands that touched lepers.</p>

      <ScriptureBox ref_="Colossians 1:15 · John 14:9">
        "The Son is the image of the invisible God, the firstborn over all creation." &nbsp;·&nbsp; "Whoever has seen me has seen the Father."
      </ScriptureBox>

      <p className="ng-body-p">When Philip asked Jesus to show them the Father, Jesus did not point somewhere else. He said, "Whoever has seen me has seen the Father." That is the end of the argument. If you want to know what God is like, look at Jesus. Start there and work backward. Never work forward from an abstract attribute and hope to arrive at Christ.</p>

      <p className="ng-body-p">The cross is the defining moment of this revelation. It is not God punishing Jesus so that He can tolerate us. That reading produces the very problem this paper is trying to solve — a God who must be appeased before He can love. The cross is God absorbing the full cost of redemption Himself. It is the self-giving love that defines His nature reaching into the deepest rupture in human history and refusing to pass the cost to the creature.</p>

      <ScriptureBox ref_="2 Corinthians 5:19">
        "God was reconciling the world to himself in Christ, not counting people's sins against them." The Father is not standing at a distance while the Son suffers. The Father is in the Son, reconciling the world to Himself. The cross is what love looks like when it refuses to quit.
      </ScriptureBox>

      <p className="ng-body-p">Christ is also the Second Adam — the one who succeeds where the first Adam failed, not by being less human, but by being fully human in the way humanity was always meant to be. He restores the image of God in man not as an external legal transaction but as a lived demonstration of what it looks like when a human being is fully aligned with the character of God. His resurrection is not just the proof of life after death. It is the down payment on a New Creation in which humanity finally becomes what it was made for.</p>

      <PullQuote>If you want to know what God is like, look at Jesus. Start there and work backward.</PullQuote>

      <NextSectionButton label="Section VIII: The Corrective" onClick={onNext} />
    </SectionCard>
  )
}
