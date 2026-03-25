import {
  SectionCard, ScriptureBox, Movement,
  JudgmentCard, ChallengeBox, AnchorList, NextSectionButton,
} from '../components'

interface Props { onNext: () => void }

export default function PillarIII({ onNext }: Props) {
  return (
    <SectionCard num="III" title="The Pattern of Divine Judgment">
      <Movement>God Does Not Preserve Irredeemable Corruption</Movement>

      <p className="ia-body-p">God's Nature is the ontological ground of His being. His actions across Scripture are therefore not arbitrary decisions but the consistent expression of what He is meeting what corruption is. When we trace the pattern of divine response to irredeemable corruption across the canonical narrative, a governing principle emerges — one that is not merely suggestive but theologically decisive.</p>

      <p className="ia-body-p">God does not preserve irredeemable corruption. He ends it. The Flood, Sodom, and the final fire are not isolated events. They are one continuous statement.</p>

      <div className="ia-judgment-grid">
        <JudgmentCard event="The Flood" verdict="Principle Established" colorClass="ia-judgment-header-flood">
          The antediluvian world reached a threshold of total, generational corruption. God grieved to the core of His creative intention. His response: complete removal. The door of the ark closed. Every corrupted line outside it ended. Not discipline — final judgment.
        </JudgmentCard>
        <JudgmentCard event="Sodom" verdict="Mode Revealed" colorClass="ia-judgment-header-sodom">
          Fire and sulfur. Nothing remains. Peter explicitly calls Sodom "an example of what is going to happen to the ungodly." It is not merely a historical judgment — it is a shadow cast forward, a preview of the final mode of the same governing principle.
        </JudgmentCard>
        <JudgmentCard event="The Final Fire" verdict="Shadow Becomes Substance" colorClass="ia-judgment-header-fire">
          The lake of fire is the second death — death in its most final and complete form. It does not preserve corruption in torment forever. It removes that which cannot exist in uncorrupted creation. Fire consumes. This is the governing principle expressed in its ultimate and unrepeatable form.
        </JudgmentCard>
      </div>

      <Movement>The Antediluvian World: What the Text Actually Says</Movement>

      <p className="ia-body-p">The text of Genesis 6 does not describe God as merely disappointed. What it reveals is staggering: God looked at what His creation had become and experienced regret at the level of His deepest creative intention. <em>It grieved Him to His heart.</em> These were not people who needed more time. They were not reformable through patient instruction or prophetic warning. The corruption was total, generational, and had passed beyond the threshold of redemption.</p>

      <p className="ia-body-p">And God's response was not to quarantine them, not to assign an adversarial counter-force to manage them, not to develop a long-term containment strategy. He ended them. Completely. The Flood was not discipline. It was final judgment.</p>

      <p className="ia-body-p">He then made a covenant — He would never again destroy the world with water. This is not a retreat from the governing principle. It is a redirection toward something greater. The principle stands. Only the mode changes.</p>

      <Movement>Sodom: The Mode of Final Judgment Previewed</Movement>

      <p className="ia-body-p">The destruction of Sodom confirms both the principle and previews its ultimate expression. Abraham's intercession in Genesis 18 reveals something important: God does not destroy the righteous with the wicked. He is precise in judgment. But when the threshold is crossed, the judgment is total. Fire and sulfur. Nothing remains.</p>

      <ScriptureBox ref_="2 Peter 2:6">
        If he condemned the cities of Sodom and Gomorrah by burning them to ashes, and made them an example of what is going to happen to the ungodly...
      </ScriptureBox>

      <p className="ia-body-p">Peter is explicit. Sodom is an <em>example</em> — a type, a shadow, a visible preview of what is going to happen. The trajectory is fire. The end is ashes. And the principle is unchanged from the Flood: irredeemable corruption is not preserved. It is removed.</p>

      <Movement>The Final Fire: Shadow Becomes Substance</Movement>

      <ScriptureBox ref_="2 Peter 3:6–7">
        By these waters also the world of that time was deluged and destroyed. By the same word the present heavens and earth are reserved for fire, being kept for the day of judgment and destruction of the ungodly.
      </ScriptureBox>

      <p className="ia-body-p">The apostle is reading the same pattern. The Flood established the principle. Sodom revealed the mode. The final fire is the ultimate and unrepeatable expression of both. The lake of fire in Revelation is the second death — death in its most complete and final form. The New Creation contains nothing that this fire has not already processed. Everything that cannot exist in uncorrupted creation is removed by the same governing principle that closed the ark door and rained fire on the cities of the plain.</p>

      <ChallengeBox label="✦ The Question the Tradition Cannot Answer">
        If God destroyed every human being on the antediluvian earth — because their corruption passed the threshold His Nature permits to continue — what possible theological justification exists for preserving a class of angelic beings whose corruption is greater in magnitude, longer in duration, and wider in destructive reach than anything the antediluvian world produced? The God who closed the ark door would not then preserve Satan in active, empowered rebellion for the entirety of human history. It is not merely unlikely. It is a direct contradiction of the governing principle God Himself established.
      </ChallengeBox>

      <AnchorList refs="Genesis 6:5–7 &nbsp;·&nbsp; Genesis 18–19 &nbsp;·&nbsp; 2 Peter 2:6 &nbsp;·&nbsp; 2 Peter 3:6–7 &nbsp;·&nbsp; Revelation 20:14 — &ldquo;the lake of fire is the second death&rdquo;" />

      <NextSectionButton label="Pillar IV: The Christological Confirmation →" onClick={onNext} />
    </SectionCard>
  )
}
