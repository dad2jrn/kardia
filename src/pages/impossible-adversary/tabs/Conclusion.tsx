import {
  SectionCard, PullQuote, CrossDivider, ClosingBox, NextSectionButton,
} from '../components'

interface Props { onNext: () => void }

export default function Conclusion({ onNext }: Props) {
  return (
    <SectionCard num="✦" title="Conclusion: What the Tradition Cost Us">
      <p className="ia-body-p">The belief in a literal Satan, a fallen angelic order, and a demonic realm operating in continuous rebellion against God has cost the church more than a theological error. It has cost us a true moral anthropology. When the external adversary stands at the center of the human problem, the human being is displaced from the center of human responsibility. We become victims of a cosmic war rather than agents of a divinely addressed condition.</p>

      <p className="ia-body-p">James knew better. Paul knew better. The writer of Hebrews knew better. And the narrative structure of Genesis 3, read without the presuppositions imported from Second Temple apocalypticism and Greek cosmological dualism, has always known better.</p>

      <PullQuote>The human problem is human. The desire that corrupts us rises from within us. The enmity God installed is not a curse but a mercy — the restlessness that ensures sin will never finally satisfy until the soul finds its rest in God.</PullQuote>

      <p className="ia-body-p">The God whose Nature is the ontological ground of all holiness, whose Character produces consistent and coherent action across the whole of Scripture, whose governing principle removes irredeemable corruption rather than preserving it — that God did not and could not maintain in active existence a class of empowered fallen beings whose sole purpose is the inversion of everything He is.</p>

      <p className="ia-body-p">The impossible adversary is impossible not because we wish it so, but because the God of Scripture leaves no room for such a being to exist. His Nature drives His Character. His Character drives His actions. His actions reveal His eternal and consistent governing principle. And that principle, applied consistently across the whole canon, makes the traditional demonology a theological impossibility.</p>

      <p className="ia-body-p">The adversary was always within. The war was always interior. The victory was always, from the beginning, the work of the second Adam reclaiming from within human nature what the first Adam lost from within human nature.</p>

      <p className="ia-body-p">This is the apostolic witness. This is the testimony of God's own behavior across the whole of Scripture. And this is the thesis.</p>

      <CrossDivider />

      <ClosingBox
        ornament="✦ &nbsp; The Ground of the Argument &nbsp; ✦"
        statement={<>The Nature of God is not negotiable.<br />And neither is what it demands.</>}
      >
        Every pillar of this thesis is grounded in what God has revealed about Himself through His own actions across the whole of Scripture. The tradition erred not by taking evil too seriously — but by locating it in the wrong place. Evil is interior. Temptation is interior. The war is interior. And the God who governs creation with sovereign consistency has always been addressing it at precisely that level — in the garden, in the wilderness, and at the cross.
      </ClosingBox>

      <NextSectionButton label="Appendix: Key Texts Re-examined →" onClick={onNext} />
    </SectionCard>
  )
}
