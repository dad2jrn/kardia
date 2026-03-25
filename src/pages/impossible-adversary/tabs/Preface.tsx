import {
  SectionCard, ScriptureBox, PullQuote, Movement,
  PillarCard, NextSectionButton,
} from '../components'

interface Props {
  onNext: () => void
  onTabChange: (id: string) => void
}

export default function Preface({ onNext, onTabChange }: Props) {
  return (
    <SectionCard num="✦" title="Preface: A Word Before the Argument">
      <p className="ia-body-p">The belief in a literal Satan, a fallen angelic order, and a demonic realm operating in continuous rebellion against God is not the original apostolic witness. It is a construction — assembled from Second Temple apocalypticism, Greek cosmological dualism, Zoroastrian influence on Persian-period Judaism, and the accumulated weight of tradition mistaken for revelation. It was read into the text before the text was read. And it has cost the church dearly.</p>

      <p className="ia-body-p">It has cost us a true moral anthropology. When we place an external adversary at the center of the human problem, we remove the human being from the center of human responsibility. James the brother of our Lord — who knew Jesus in the flesh, who led the Jerusalem assembly, who had every reason to invoke Satan if Satan were real and relevant — said nothing of the kind.</p>

      <ScriptureBox ref_="James 1:14–15">
        But each person is tempted when they are dragged away by their own evil desire and enticed. Then, after desire has conceived, it gives birth to sin; and sin, when it is full-grown, gives birth to death.
      </ScriptureBox>

      <p className="ia-body-p">The chain of causation runs entirely through the human interior. There is no intruder in that sequence. James was not introducing a new idea. He was reflecting the original one.</p>

      <PullQuote>The adversary was always within. The war was always interior. The victory was always the work of the second Adam reclaiming from within human nature what the first Adam lost.</PullQuote>

      <Movement>The Four Pillars</Movement>
      <p className="ia-body-p">This thesis rests on four interlocking arguments. Together they do not merely challenge the popular belief in Satan — they make it impossible. Select any pillar to begin.</p>

      <div className="ia-pillar-grid">
        <PillarCard
          numeral="I"
          label={<>The Nature<br />of God</>}
          colorClass="ia-pillar-header-i"
          onClick={() => onTabChange('p1')}
        >
          God's ontological Nature — not merely His character or actions — makes a preserved, empowered fallen angelic order a theological impossibility.
        </PillarCard>
        <PillarCard
          numeral="II"
          label={<>Genesis 3<br />and the Nachash</>}
          colorClass="ia-pillar-header-ii"
          onClick={() => onTabChange('p2')}
        >
          The foundation of all traditional demonology, read with exegetical honesty, requires no supernatural adversary at all — only a portrait of the human interior.
        </PillarCard>
        <PillarCard
          numeral="III"
          label={<>The Pattern of<br />Divine Judgment</>}
          colorClass="ia-pillar-header-iii"
          onClick={() => onTabChange('p3')}
        >
          The Flood, Sodom, and the final fire establish one governing principle: God does not preserve irredeemable corruption — He removes it completely.
        </PillarCard>
        <PillarCard
          numeral="IV"
          label={<>The Christological<br />Confirmation</>}
          colorClass="ia-pillar-header-iv"
          onClick={() => onTabChange('p4')}
        >
          The second Adam typology requires an exact structural parallel. Christ had to face the same interior adversary Adam faced — not a categorically different external being.
        </PillarCard>
      </div>

      <NextSectionButton label="Begin with Pillar I: The Nature of God →" onClick={onNext} />
    </SectionCard>
  )
}
