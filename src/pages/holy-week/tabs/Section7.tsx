import { SectionCard, ScriptureBox, Movement, AnchorList, NextSectionButton } from '../components'
import VerseRef from '../../../components/VerseRef'

export default function Section7({ onNext }: { onNext: () => void }) {
  return (
    <SectionCard num="VII" title="The Scoffers Had a Point — And Peter Answered It">
      <Movement>Movement 1 — The Objection Is Legitimate</Movement>

      <p className="hw-body-p">We need to be honest about something. There is an objection to everything we have said so far — and it is not a stupid objection. It is actually a pretty reasonable one.</p>

      <p className="hw-body-p">Peter recorded it in <VerseRef passage="2 Peter 3:3–4">2 Peter 3:3–4</VerseRef>. The scoffers said: "Where is this 'coming' he promised? Ever since our ancestors died, everything goes on as it has since the beginning of creation." And they have a point. Jesus told His disciples to watch for wars, famines, earthquakes, false prophets, persecution, and moral decay. Every single one of those things has been present in every generation since He said it.</p>

      <p className="hw-body-p">So the honest question is: if the signs have always been there, how do you tell the difference between the generation that is actually at the end and every other generation that thought it was?</p>

      <Movement>Movement 2 — The Braxton Hicks Problem</Movement>

      <p className="hw-body-p">Any woman who has been pregnant knows what Braxton Hicks contractions are. They are sometimes called "false labor." The uterus tightens. It feels like something is happening. But it is not the real thing. The body is practicing.</p>

      <div className="hw-pregnancy-grid">
        <div className="hw-preg-card">
          <div className="hw-preg-header-bh">
            <div className="hw-preg-header-label">Braxton Hicks — 20 Weeks</div>
          </div>
          <div className="hw-preg-body">Contractions are present. They can be uncomfortable. But they carry no urgency. The gestational clock says you are halfway through. The same signs are noted and set aside. Nothing is imminent.</div>
        </div>
        <div className="hw-preg-card">
          <div className="hw-preg-header-real">
            <div className="hw-preg-header-label">Real Labor — 39 Weeks</div>
          </div>
          <div className="hw-preg-body">The same contractions now mean everything. Not because they are more intense in isolation — but because the gestational clock has changed the context. Position changes everything. You go to the hospital.</div>
        </div>
      </div>

      <p className="hw-body-p">How do you tell the difference between Braxton Hicks and real labor? Not by examining one contraction in isolation. By knowing <strong>where you are in the pregnancy.</strong> The contractions haven't necessarily changed. Your position in the gestational period has.</p>

      <Movement>Movement 3 — The Gestational Clock of Redemptive History</Movement>

      <p className="hw-body-p">This is precisely what 2 Peter 3:8 gives us — a gestational clock. The scoffers were right that the signs have always been present. What they were missing was the clock that tells you where you are in the gestation.</p>

      <p className="hw-body-p">We are not at twenty weeks. The six-thousand-year framework, the three two-day epochs of Matthew 1, the Hosea 6 pattern, the apostolic tradition through Irenaeus, the feast calendar — all of it points to the same conclusion. We are at the end of the sixth day. We are in the final moments before the Sabbath.</p>

      <p className="hw-body-p">The same wars, famines, earthquakes, and moral collapse that were Braxton Hicks contractions in AD 500 or AD 1200 or AD 1800 are real labor contractions now — not because they are more dramatic in isolation, but because we know where we are in the pregnancy.</p>

      <ScriptureBox ref_="1 Thessalonians 5:3">
        "While people are saying 'peace and safety,' destruction will come on them suddenly, as labor pains on a pregnant woman, and they will not escape."
      </ScriptureBox>

      <Movement>Movement 4 — The Specific Convergence</Movement>

      <p className="hw-body-p">With all of that said — there are two events in modern history worth noting. Not as proof on their own, but as markers that, given where we are in the gestational clock, are no longer ignorable.</p>

      <p className="hw-body-p">In <strong>1948</strong>, the nation of Israel was reestablished in its ancient homeland after nearly nineteen hundred years of dispersion. In <strong>1967</strong>, Jerusalem came back under Jewish control for the first time since the Roman destruction of the city in AD 70. Both of these were prerequisites — things the biblical prophets indicated had to be in place before the end.</p>

      <p className="hw-body-p">Every previous generation of Christians — no matter how convinced they were that the end was near — could not point to these things. We can. Not because our wars are worse or our earthquakes are bigger, but because specific prerequisite markers that had never been in place before are now in place. That is not just another contraction. That is a contraction at thirty-nine weeks.</p>

      <ScriptureBox ref_="Ezekiel 37:21–22">
        "I will take the Israelites out of the nations where they have gone... and bring them back into their own land. I will make them one nation in the land."
      </ScriptureBox>

      <ScriptureBox ref_="Luke 21:24">
        "Jerusalem will be trampled on by the Gentiles until the times of the Gentiles are fulfilled."
      </ScriptureBox>

      <ScriptureBox ref_="Zechariah 12:2–3">
        "I am going to make Jerusalem a cup that sends all the surrounding peoples reeling... On that day, when all the nations of the earth are gathered against her, I will make Jerusalem an immovable rock for all the nations."
      </ScriptureBox>

      <AnchorList refs={<>
        <VerseRef passage="2 Peter 3:3–9" /> · <VerseRef passage="Matthew 24:6–8" /> · <VerseRef passage="1 Thessalonians 5:3" /> · <VerseRef passage="Ezekiel 37:21–22" /> · <VerseRef passage="Luke 21:24" /> · <VerseRef passage="Zechariah 12:2–3" />
      </>} />

      <NextSectionButton label="Section 8: What This Means For You Today" onClick={onNext} />
    </SectionCard>
  )
}
