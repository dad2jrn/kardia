import { SectionCard, ScriptureBox, PullQuote, AnchorList, ClosingBox, NextSectionButton } from '../components'

export default function Section8({ onNext }: { onNext: () => void }) {
  return (
    <SectionCard num="VIII" title="What This Means For You Today">
      <p className="hw-body-p">If you have read this far, you have walked through something that most Christians have never seen presented in one place. The six-day creation blueprint. The three two-day epochs of Matthew 1. The Hosea and Jeremiah framework. The apostolic tradition through Irenaeus. The feast calendar fulfilled with surgical precision. The two witnesses. The gestational clock. The 1948 and 1967 markers.</p>

      <p className="hw-body-p">So what do you do with it?</p>

      <p className="hw-body-p">Let's be clear about what this is not. It is not a reason for panic. It is not a date stamped on a calendar for you to circle and count down to. It is not permission to stop working, stop caring about your community, stop building for the future, or check out of ordinary life. Every generation that has tried that approach has ended up embarrassed.</p>

      <PullQuote>What it is — is a call to know what time it is.</PullQuote>

      <ScriptureBox ref_="Romans 13:11–12">
        "And do this, understanding the present time: the hour has already come for you to wake up from your slumber, because our salvation is nearer now than when we first believed. The night is nearly over; the day is almost here."
      </ScriptureBox>

      <p className="hw-body-p">Paul assumes that knowing the time changes how you live. Not just what you believe — <em>how you live.</em> The person who knows they are at thirty-nine weeks doesn't do the same things as the person who thinks they are at twenty weeks. They pay attention differently. They set their priorities differently. They are not panicked — but they are not asleep either.</p>

      <p className="hw-body-p">The call is to be awake. Purposeful. Faithful in the specific way that people who know the hour are faithful — not frantically, but with a settled urgency that comes from understanding what is happening and why.</p>

      <ScriptureBox ref_="1 Thessalonians 5:4–6">
        "But you, brothers and sisters, are not in darkness so that this day should surprise you like a thief... So then, let us not be like others, who are asleep, but let us be awake and sober."
      </ScriptureBox>

      <p className="hw-body-p">And here is where we come back to where we started — the character of God.</p>

      <p className="hw-body-p">The God who embedded this pattern into creation before the first human being ever took a breath. The God who executed every spring feast with day-perfect precision. The God who transmitted this understanding through a chain of faithful witnesses from the apostles to us. The God who has been patient across six thousand years — not because He forgot, and not because He was delayed, but because He is not willing that any should perish. Every year of the six thousand has been an open door. Every century of patience has been an act of love.</p>

      <ScriptureBox ref_="2 Peter 3:9">
        "The Lord is not slow in keeping his promise, as some understand slowness. Instead he is patient with you, not wanting anyone to perish, but everyone to come to repentance."
      </ScriptureBox>

      <p className="hw-body-p">That God — the one who planned all of this before He said "let there be light" — is not winding down by accident. He is completing purposefully. He is faithful to finish what He started. He always has been.</p>

      <ClosingBox
        ornament="✦ &nbsp; The Final Word &nbsp; ✦"
        statement={<>The week is almost over.<br />The Sabbath is coming.<br />And the God who rested on the seventh day<br />is about to make all things new.</>}
      >
        This is not fear. This is not speculation. This is the testimony of the creation week, the Hebrew prophets, the apostolic fathers, the feast calendar, and the Word of God — all saying the same thing, from the same source, in the same direction.<br /><br />
        The question is not whether you know the information. The question is whether you will live accordingly.
      </ClosingBox>

      <ScriptureBox ref_="Revelation 21:5">
        "He who was seated on the throne said, 'I am making everything new!' Then he said, 'Write this down, for these words are trustworthy and true.'"
      </ScriptureBox>

      <AnchorList refs="Romans 13:11–12 &nbsp;·&nbsp; 1 Thessalonians 5:4–6 &nbsp;·&nbsp; 2 Peter 3:9 &nbsp;·&nbsp; Revelation 21:5" />

      <NextSectionButton label="Frequently Asked Questions" onClick={onNext} />
    </SectionCard>
  )
}
