import { SectionCard, ScriptureBox, PullQuote, Movement, NextSectionButton } from '../components'

export default function Section5({ onNext }: { onNext: () => void }) {
  return (
    <SectionCard num="V" title="The Character — The Moral Quality of That Nature">
      <p className="ng-body-p">Nature tells us what God is. Character tells us who He is. And who He is matters more to the life of faith than any attribute or doctrine you will ever encounter. You can know a great deal about someone's capabilities and still not know their character. Character is what you trust — or don't. It is the thing you bet your life on.</p>

      <Movement>God is Love</Movement>

      <p className="ng-body-p">Not sentiment. Not affection as a mood. Love as the fundamental orientation of His being toward what He has made. John does not say God is loving, as if love were one quality among others. He says God is love — as if love is the name for what God is at His core. This means that creation itself is an act of love. Every sunrise, every beating heart, every breath drawn in a body that did not earn the right to breathe — these are not neutral events. They are expressions of the self-giving nature of a God who did not need to create but did, and sustains what He created because He wants to.</p>

      <ScriptureBox ref_="1 John 4:8">
        "Whoever does not love does not know God, because God is love."
      </ScriptureBox>

      <Movement>God is Holy</Movement>

      <p className="ng-body-p">Holiness is not primarily moral perfectionism. It is otherness. God is wholly other — categorically unlike anything in the created order, set apart not just by His power but by His very being. He is the standard against which all goodness is measured, because He does not conform to a standard outside Himself. He is the standard. When Isaiah stood in the throne room and heard the seraphim cry "Holy, holy, holy," the repetition was not emphasis alone. It was the Hebrew way of expressing the superlative — the holiest, the most wholly other, the utterly set-apart one. God's holiness is not His distance from us. It is the measure of what we were made to approach.</p>

      <ScriptureBox ref_="Isaiah 6:3">
        "Holy, holy, holy is the LORD Almighty; the whole earth is full of his glory."
      </ScriptureBox>

      <Movement>God is Just</Movement>

      <p className="ng-body-p">Justice in God is not punitive at its root. It is not a ledger that must balance or a courtroom that demands a verdict. It is the rightly ordered orientation of perfect goodness toward everything that exists. God is just the way a surgeon is precise — not to cause pain, but because precision is what love requires when something is wrong. His justice and His love are not in tension. They are the same character expressed toward different situations. His justice is what His love looks like when it encounters that which destroys what He loves.</p>

      <Movement>God is Faithful</Movement>

      <p className="ng-body-p">God cannot contradict Himself. He cannot be one thing today and another thing tomorrow. His promises are not decisions He makes — they are expressions of His nature. When He promises, it is because He cannot be otherwise. This is not a limitation. It is the deepest form of trustworthiness that exists. You can stake your life on God's faithfulness not because He made a promise but because He is, by nature, the kind of being who cannot fail to be what He is.</p>

      <ScriptureBox ref_="2 Timothy 2:13 · Numbers 23:19">
        "If we are faithless, he remains faithful, for he cannot disown himself." &nbsp;·&nbsp; "God is not human, that he should lie, not a human being, that he should change his mind."
      </ScriptureBox>

      <Movement>God is Merciful and Gracious</Movement>

      <p className="ng-body-p">Mercy and grace are not exceptions to God's justice. They are expressions of it. When God described Himself to Moses on the mountain, He was not listing contradictions. He was describing a unified character. Mercy is what justice looks like when love finds a way to absorb the cost rather than pass it to the creature. Grace is what faithfulness looks like when it refuses to let failure be the final word. These are not soft attributes that soften the hard God. They are the character of the God who is hard against everything that destroys His beloved.</p>

      <ScriptureBox ref_="Exodus 34:6">
        "The LORD, the LORD, a God merciful and gracious, slow to anger, and abounding in steadfast love and faithfulness."
      </ScriptureBox>

      <Movement>God is Wise</Movement>

      <p className="ng-body-p">His purposes are never arbitrary. Nothing He does is random, reactive, or improvised. He works all things according to the counsel of His will, and that counsel is not the will of power for its own sake but the will of perfect wisdom in service of perfect love. When Paul stood at the far end of eleven chapters of theology in Romans and broke into doxology, he was not expressing frustration. He was expressing awe at a God whose wisdom exceeds our categories while never contradicting His character.</p>

      <ScriptureBox ref_="Romans 11:33">
        "Oh, the depth of the riches and wisdom and knowledge of God! How unsearchable are his judgments and how inscrutable his ways!"
      </ScriptureBox>

      <PullQuote>Character is what you trust — or don't. It is the thing you bet your life on.</PullQuote>

      <NextSectionButton label="Section VI: The Abrahamic Covenant" onClick={onNext} />
    </SectionCard>
  )
}
