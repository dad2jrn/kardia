import { SectionCard, ScriptureBox, PullQuote, NextSectionButton } from '../components'

export default function Section1({ onNext }: { onNext: () => void }) {
  return (
    <SectionCard num="I" title="The Question Nobody Asks">
      <p className="hw-body-p">Have you ever wondered why God created everything over six days and then rested on the seventh? Think about that for a moment. This is God we are talking about. The God who spoke the universe into existence. The God who holds every atom together. The God for whom nothing is impossible.</p>

      <p className="hw-body-p">Couldn't He have done it all at once? In an instant? Of course He could. So why the pattern of six days plus one day of rest? Why that specific rhythm?</p>

      <PullQuote>He didn't do it because He was tired. He didn't do it because He needed a schedule. He did it because He was leaving us a message.</PullQuote>

      <p className="hw-body-p">Here is something worth sitting with: everything God does is intentional. The prophet Isaiah records God saying — "I make known the end from the beginning, from ancient times, what is still to come." That means before He created a single star, He already knew how the whole story would end. He planned it. He designed it. And He embedded the design into the very first thing He ever did — the creation of the world.</p>

      <p className="hw-body-p">The six-day creation pattern is not just history. It is a blueprint. And once you see what it is a blueprint for, you will never read your Bible the same way again.</p>

      <ScriptureBox ref_="Isaiah 46:10">
        "I make known the end from the beginning, from ancient times, what is still to come. I say, 'My purpose will stand, and I will do all that I please.'"
      </ScriptureBox>

      <ScriptureBox ref_="Genesis 1–2">
        The account of creation in six days, followed by the seventh day of rest — the Sabbath (from the Hebrew <em>shabbat</em>, meaning to cease or to rest).
      </ScriptureBox>

      <NextSectionButton label="Section 2: A Week That Points Somewhere" onClick={onNext} />
    </SectionCard>
  )
}
