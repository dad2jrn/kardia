import { SectionCard, ScriptureBox, PullQuote, NextSectionButton } from '../components'

export default function Section3({ onNext }: { onNext: () => void }) {
  return (
    <SectionCard num="III" title="What If the Week Is Bigger Than We Think?">
      <p className="hw-body-p">About 2,000 years ago, people were getting frustrated. Jesus had risen from the dead, ascended into heaven, and promised to return. And they were waiting. And waiting. And some of them started to mock.</p>

      <p className="hw-body-p">The apostle Peter recorded their complaint: "Where is this 'coming' he promised? Ever since our ancestors died, everything goes on as it has since the beginning of creation." In other words: you said He was coming back. It hasn't happened. Maybe it's not going to.</p>

      <PullQuote>Peter's answer is remarkable. He doesn't say "just be patient." He says — you are reading the wrong clock.</PullQuote>

      <ScriptureBox ref_="2 Peter 3:8">
        "But do not forget this one thing, dear friends: With the Lord a day is like a thousand years, and a thousand years are like a day."
      </ScriptureBox>

      <p className="hw-body-p">Read that carefully. A day is like a thousand years — <em>and</em> a thousand years are like a day. Both directions. Peter is not saying God experiences time slowly, like He has a different clock speed. The God we will establish in this study exists outside of time altogether. He is not sitting in heaven watching the centuries crawl by.</p>

      <p className="hw-body-p">Peter is pointing at something structural. He is pointing at the creation week.</p>

      <p className="hw-body-p">What if each day of creation corresponds to one thousand years of human history? What if the seven-day creation pattern is the architectural blueprint God laid down at the beginning to show us exactly how long the whole story runs — and where it ends?</p>

      <p className="hw-body-p"><strong>Six days of creation = six thousand years of human history. The seventh day of rest = a thousand-year reign of Christ on earth.</strong> The Millennium. The coming age of rest. That is the clock Peter is telling us to read.</p>

      <ScriptureBox ref_="Psalm 90:4">
        "A thousand years in your sight are like a day that has just gone by, or like a watch in the night."
      </ScriptureBox>

      <ScriptureBox ref_="2 Peter 3:3–9">
        Peter's full context: scoffers will mock the delay of Christ's return. Peter responds not with a call to mere patience, but with a correction of their calendar — and a reminder that the delay itself is an act of mercy, not forgetfulness.
      </ScriptureBox>

      <NextSectionButton label="Section 4: The Earliest Christians Already Knew This" onClick={onNext} />
    </SectionCard>
  )
}
