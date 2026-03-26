import { SectionCard, ScriptureBox, PullQuote, NextSectionButton } from '../components'

export default function Section6({ onNext }: { onNext: () => void }) {
  return (
    <SectionCard num="VI" title="The Expression — The Abrahamic Covenant as Character Made Concrete">
      <p className="ng-body-p">When God called Abraham out of Ur and made a covenant with him, He was not entering a legal transaction. He was making a character statement. The covenant was unconditional on Abraham's side — not because Abraham was righteous, but because the covenant was grounded in who God is, not in what Abraham deserved.</p>

      <ScriptureBox ref_="Genesis 15">
        God passed through the covenant pieces alone while Abraham slept. He bound Himself. He took on the full weight of the promise because His character required it.
      </ScriptureBox>

      <p className="ng-body-p">That covenant is the load-bearing structure of the entire redemptive story. Every act of God in history from Genesis 15 forward is the outworking of a promise made to one man by a God who cannot fail to be what He is. The Exodus is the covenant. The Law is the covenant shaped for a particular people in a particular time. The prophets are the covenant calling Israel back. The incarnation is the covenant fulfilled from the inside. The cross is the covenant absorbing its own cost. The resurrection is the covenant declaring that nothing — not sin, not death, not the full weight of human failure — can break what God has bound Himself to.</p>

      <PullQuote>The whole redemptive story flows from who He is, not from what man deserves. That is the only way it makes sense. That is the only way it holds.</PullQuote>

      <NextSectionButton label="Section VII: Christ as the Fullest Picture" onClick={onNext} />
    </SectionCard>
  )
}
