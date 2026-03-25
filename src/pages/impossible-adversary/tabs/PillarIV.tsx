import {
  SectionCard, ScriptureBox, PullQuote, Movement,
  TemptationCard, AnchorList, NextSectionButton,
} from '../components'

interface Props { onNext: () => void }

export default function PillarIV({ onNext }: Props) {
  return (
    <SectionCard num="IV" title="The Christological Confirmation">
      <Movement>The Second Adam and the Necessity of the Parallel</Movement>

      <p className="ia-body-p">The apostle Paul's second Adam typology is one of the most structurally precise arguments in the entire apostolic witness. In Romans 5 and 1 Corinthians 15, Paul builds a case for Christ's redemptive work on a foundation of exact correspondence: what Adam did, Christ undid; what Adam lost, Christ recovered; what Adam failed to overcome, Christ overcame — from within the same human condition.</p>

      <p className="ia-body-p">This is not loose metaphor. It is structural parallelism of the most rigorous kind. The redemption is participatory and representative. If the parallel breaks at any point, the entire typology loses its integrity.</p>

      <p className="ia-body-p">And here is where the traditional reading of the wilderness temptations creates a problem it cannot resolve.</p>

      <PullQuote>If Adam faced his own interior desire — and Christ, as the second Adam, faced a categorically different external being — then Jesus did not overcome what Adam failed to overcome. Paul's entire argument collapses.</PullQuote>

      <p className="ia-body-p">The parallel must hold or the typology fails. Christ took on full human nature. He was made like His brothers in every respect. He had a genuine human nature not yet at full stature at the beginning of His ministry — for He <em>learned obedience through what He suffered</em>, and was brought to completion through that process. The wilderness was not a test administered to an already complete human nature. It was part of the formation of that nature toward its full expression.</p>

      <ScriptureBox ref_="Hebrews 4:15">
        For we do not have a high priest who is unable to empathize with our weaknesses, but we have one who has been tempted in every way, just as we are — yet he did not sin.
      </ScriptureBox>

      <p className="ia-body-p"><em>Tempted in every way, just as we are.</em> Not tempted by a being we will never encounter. Tempted in the way every human being is tempted — from within, by desire, by the legitimate needs of embodied existence reaching beyond God's provision.</p>

      <Movement>The Three Temptations as Interior Architecture</Movement>

      <p className="ia-body-p">The three temptations in the wilderness map with remarkable precision onto the interior architecture of the human condition — and onto the same structure as the nachash encounter in Genesis 3.</p>

      <div className="ia-temptation-grid">
        <TemptationCard
          name="Stones to Bread"
          subtext="Matthew 4:3"
          temptation="The body's legitimate hunger weaponized against trust in God. You have the capacity to meet the need. Why wait on God's provision?"
          parallel="The fruit was good for food. The desire was legitimate. The means was forbidden. The question was the same."
        />
        <TemptationCard
          name="Pinnacle of the Temple"
          subtext="Matthew 4:6"
          temptation="The desire for divine validation on human terms — to make God prove His faithfulness publicly, bypassing trust with proof."
          parallel="The wish to possess the certainty of God's favor through means God had not yet authorized — grasping rather than receiving."
        />
        <TemptationCard
          name="Kingdoms of the World"
          subtext="Matthew 4:8–9"
          temptation="Fulfilling God's purposes — dominion, restoration — through human power rather than through the cross. The goal right; the means wrong."
          parallel="The oldest human error: acquiring through power what can only be redeemed through sacrifice. <em>You shall be like God</em> — on your terms."
        />
      </div>

      <p className="ia-body-p">These are not the temptations of a supernatural negotiation. They are the temptations of a fully human soul, not yet at full stature, pressing against the call of God with every legitimate appetite the human condition produces. And Jesus resisted them all — from within human nature, through the Word of God, through the same resources available to every human being who faces the same interior war.</p>

      <p className="ia-body-p">Only after this test was complete could the ministry begin. The second Adam had to face and defeat what the first Adam faced and surrendered to. The parallel is exact. The structure is intact. The implication is clear: the <em>satan</em> of the wilderness was the same adversary the <em>nachash</em> represented in Genesis 3 — the interior human impulse toward self-deification, concentrated and confronted in the human nature of the Son of God.</p>

      <AnchorList refs="Romans 5:12–21 &nbsp;·&nbsp; 1 Corinthians 15:45–49 &nbsp;·&nbsp; Matthew 4:1–11 &nbsp;·&nbsp; Hebrews 4:15 &nbsp;·&nbsp; Hebrews 5:8–9 — &ldquo;he learned obedience through what he suffered&rdquo;" />

      <NextSectionButton label="Conclusion →" onClick={onNext} />
    </SectionCard>
  )
}
