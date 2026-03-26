import { SectionCard, PullQuote, NextSectionButton } from '../components'

export default function Section2({ onNext }: { onNext: () => void }) {
  return (
    <SectionCard num="II" title="The Problem — What Happens When You Isolate God's Attributes">
      <p className="ng-body-p">The church did not lie about God. In most cases it presented fragments and called them the whole. It took real attributes — power, holiness, justice, wrath — and taught them in isolation from the nature and character that give them their proper meaning. The result was not a more accurate God. The result was a distorted one.</p>

      <p className="ng-body-p">Here is what happens when you isolate God's attributes from His nature and character:</p>

      <div className="ng-distortion-list">
        <div className="ng-distortion-item">Omnipotence detached from love becomes domination.</div>
        <div className="ng-distortion-item">Holiness detached from mercy becomes contempt.</div>
        <div className="ng-distortion-item">Justice detached from faithfulness becomes unpredictability.</div>
        <div className="ng-distortion-item">Wrath detached from grief becomes cruelty.</div>
      </div>

      <p className="ng-body-p">None of those distortions require anyone to teach heresy. They only require that the whole truth be presented in the wrong order, or with certain pieces left out long enough that people fill the gaps with fear. And fear, once it takes root in how a person thinks about God, is extraordinarily difficult to dislodge with doctrine alone.</p>

      <p className="ng-body-p">The result is a specific kind of Christian who is theologically sincere but spiritually exhausted. They intellectually affirm that God is good. They can quote the verse. But emotionally they brace for His disappointment. They measure their spiritual health by how well they have managed their sin count this week. They approach prayer like a performance review. They love God — but from a careful, managed distance.</p>

      <PullQuote>That dissonance is the wound this paper is trying to heal. The corrective is not a softer God. It is a properly ordered one.</PullQuote>

      <p className="ng-body-p">And the order begins with His nature.</p>

      <NextSectionButton label="Section III: The Framework" onClick={onNext} />
    </SectionCard>
  )
}
