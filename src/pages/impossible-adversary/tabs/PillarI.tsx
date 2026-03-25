import {
  SectionCard, ScriptureBox, PullQuote, Movement,
  ChallengeBox, AnchorList, NextSectionButton,
} from '../components'

interface Props { onNext: () => void }

export default function PillarI({ onNext }: Props) {
  return (
    <SectionCard num="I" title="The Nature and Character of God">
      <Movement>Nature as Ontological Ground</Movement>

      <p className="ia-body-p">We must begin where all good theology must begin — not with what God does, but with what God <em>is</em>.</p>

      <p className="ia-body-p">God's Nature is not a collection of attributes He chose to possess. It is the ontological ground of His being — what He is prior to any act, any decision, any creation. He does not decide to be holy. Holiness is not a policy He adopted. It is what He <em>is</em>, necessarily and eternally, in the same way that the sun does not decide to produce light. Light is the unavoidable expression of what the sun is.</p>

      <p className="ia-body-p">From His Nature flows His Character — the consistent, coherent, unwavering expression of that Nature in relation to everything outside Himself. From His Character flows every action recorded in Scripture. And from those actions flow what we rightly call His characteristics — mercy, justice, sovereignty, love — which are not separate qualities but facets of one undivided Nature expressing itself across the range of creaturely need and creaturely failure.</p>

      <PullQuote>God's responses to corruption are not arbitrary judgments handed down from a throne. They are the inevitable expression of what He is meeting what corruption is.</PullQuote>

      <p className="ia-body-p">This is not an abstract point. It is the load-bearing beam of the entire argument. Because if God acts consistently with what He is — and He cannot do otherwise, for God cannot deny Himself — then what He does in Genesis 3, in the Flood, in Sodom, and in the final fire tells us something immovable about what He is. And what He is makes certain other things impossible.</p>

      <ScriptureBox ref_="1 John 1:5">
        God is light, and in him is no darkness at all.
      </ScriptureBox>

      <p className="ia-body-p">No darkness at all. That is not a metaphor about God's moral preferences. It is a statement about His Nature. And it leaves no room for a being whose existence is darkness, sustained by divine permission within God's own creation.</p>

      <Movement>What God's Nature Cannot Permit to Exist</Movement>

      <p className="ia-body-p">The traditional framework of Satan and fallen angels requires us to believe something remarkable: that a class of beings — angelic, possessing greater power than any human, possessing direct knowledge of God's presence — fell into irreversible, permanent rebellion, and that God chose to preserve them, empower them, and permit them to operate freely in His creation across the entirety of human history.</p>

      <p className="ia-body-p">Consider what this requires of God's Nature. It requires either that He is unable to remove them — which destroys His sovereignty — or that He is unwilling to remove them — which requires a reason consistent with His character that the tradition has never been able to provide without collapsing into either dualism or incoherence.</p>

      <p className="ia-body-p">The most common answer given is that God permits Satan to operate as a means of testing and refining humanity. But this answer, pressed to its logical conclusion, makes God complicit in every act of suffering, corruption, and destruction the tradition attributes to Satan — a conclusion the tradition simultaneously denies while implicitly requiring it.</p>

      <ChallengeBox label="✦ The Decisive Question">
        God blocked the Tree of Life from fallen humans so they would not live forever in corruption. He applied this same mercy to the entire antediluvian world and to Sodom. Why would He apply that governing principle to mortal, finite human beings — yet preserve in empowered active existence a class of angelic beings whose corruption is greater, older, and more dangerous than anything humanity ever produced?
      </ChallengeBox>

      <p className="ia-body-p">God's Nature does not permit this. A God whose Nature is the ontological ground of all holiness, love, and sovereignty cannot also be a God who voluntarily sustains in empowered existence a being dedicated to the inversion of everything He is. These are not in tension. They are mutually exclusive.</p>

      <AnchorList refs="1 John 1:5 &nbsp;·&nbsp; Genesis 3:22–24 &nbsp;·&nbsp; 2 Timothy 2:13 — &ldquo;He cannot deny himself.&rdquo; &nbsp;·&nbsp; James 1:13 — &ldquo;God cannot be tempted by evil, nor does he tempt anyone.&rdquo;" />

      <NextSectionButton label="Pillar II: Genesis 3 and the Nachash →" onClick={onNext} />
    </SectionCard>
  )
}
