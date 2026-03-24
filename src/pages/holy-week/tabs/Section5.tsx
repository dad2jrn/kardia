import { SectionCard, ScriptureBox, Movement, AnchorList, NextSectionButton } from '../components'

const epochs = [
  { era: 'Era One', span: 'Adam → Abraham', days: '~2,000 years · Days 1–2', highlight: false },
  { era: 'Era Two', span: 'Abraham → Christ', days: '~2,000 years · Days 3–4', highlight: false },
  { era: 'Era Three — Now', span: 'Christ → Return', days: '~2,000 years · Days 5–6', highlight: true },
]

export default function Section5({ onNext }: { onNext: () => void }) {
  return (
    <SectionCard num="V" title="Two Thousand Years — The Math Nobody Did">
      <Movement>Movement 1 — Three Sets of Two Days</Movement>

      <p className="hw-body-p">Open your New Testament to the very first page — Matthew chapter 1. Most people skip the opening genealogy (the long list of names) to get to the good stuff. But Matthew structured it very deliberately. Look at verse 17:</p>

      <ScriptureBox ref_="Matthew 1:17">
        "Thus there were fourteen generations in all from Abraham to David, fourteen from David to the exile to Babylon, and fourteen from the exile to the Messiah."
      </ScriptureBox>

      <p className="hw-body-p">Three groups of fourteen generations. Three distinct eras. Matthew is telling you that history has a structure — it moves in three blocks. And when you map those three blocks onto the timeline of human history, something remarkable appears.</p>

      <div className="hw-epoch-row">
        {epochs.map(e => (
          <div key={e.era} className={`hw-epoch-block${e.highlight ? ' highlight' : ''}`}>
            <div className="hw-epoch-era">{e.era}</div>
            <div className="hw-epoch-span">{e.span}</div>
            <div className="hw-epoch-days" dangerouslySetInnerHTML={{ __html: e.days.replace('·', '&nbsp;·&nbsp;') }} />
          </div>
        ))}
      </div>

      <p className="hw-body-p">Matthew was hiding this in plain sight on the first page of the New Testament. Three eras of two days each. Six days total. The Sabbath is next.</p>

      <Movement>Movement 2 — Hosea Saw It Coming</Movement>

      <p className="hw-body-p">Roughly seven hundred years before Christ, the prophet Hosea wrote something that most readers pass over without realizing what they are looking at:</p>

      <ScriptureBox ref_="Hosea 6:1–2">
        "Come, let us return to the Lord. He has torn us to pieces but he will heal us; he has injured us but he will bind up our wounds. After two days he will revive us; on the third day he will raise us up, that we may live before him."
      </ScriptureBox>

      <p className="hw-body-p">In its immediate setting, this is Israel calling the people to return to God after judgment, with the promise that restoration is coming. But look at the pattern embedded in those words: <strong>after two days, revival. On the third day, resurrection and life before God.</strong></p>

      <p className="hw-body-p">Two thousand years. Then the third day — the Millennial day — when Israel is finally restored and lives before God. Hosea was not just writing about a local return from exile. He was embedding the two-day framework into the prophetic fabric of Scripture centuries before Peter wrote a single word of his letter.</p>

      <Movement>Movement 2b — What the New Covenant Tells Us About the Third Day</Movement>

      <p className="hw-body-p">About a century after Hosea, the prophet Jeremiah announced something stunning. Not a patched-up version of the old covenant. Something entirely new:</p>

      <ScriptureBox ref_="Jeremiah 31:31–33">
        "'The days are coming,' declares the Lord, 'when I will make a new covenant with the people of Israel and with the people of Judah... I will put my law in their minds and write it on their hearts. I will be their God, and they will be my people.'"
      </ScriptureBox>

      <p className="hw-body-p">The writer of Hebrews (chapter 8) quotes this passage directly and identifies it as what Jesus inaugurated. The new covenant — the law written on hearts, God known directly, sins remembered no more — is the <em>third-day event</em>. It is what the two days of covenant failure and exile were always gestating toward.</p>

      <p className="hw-body-p">Hosea gives us the timing: after two days, the third day comes. Jeremiah gives us the content: what the third day delivers is the fullness of the new covenant — God finally and fully dwelling with a restored people. Together they show that this is not just a chronological pattern. It is the covenantal architecture of all of redemptive history.</p>

      <ScriptureBox ref_="Hebrews 8:8–12">
        The writer of Hebrews quotes Jeremiah 31 directly, identifying it as the new covenant Christ established — the third-day reality that the two days of the old covenant were always pointing toward.
      </ScriptureBox>

      <Movement>Movement 3 — Christ Said It Himself</Movement>

      <p className="hw-body-p">Here is something easy to miss in the Gospels. Jesus Himself spoke in the same two-day — third-day pattern repeatedly. And He was not making it up on the spot. He was consciously speaking the prophetic language Hosea and Jeremiah had already laid down.</p>

      <ScriptureBox ref_="John 2:19–21">
        "Jesus answered them, 'Destroy this temple, and I will raise it again in three days.'... But the temple he had spoken of was his body."
      </ScriptureBox>

      <ScriptureBox ref_="Luke 13:32">
        "He replied, 'Go tell that fox, I will keep on driving out demons and healing people today and tomorrow, and on the third day I will reach my goal.'"
      </ScriptureBox>

      <p className="hw-body-p">Today and tomorrow — two days of ministry. On the third day — completion. The same pattern in His own mouth. Jesus was not randomly using the number three. He was speaking the language of the framework that runs across all of Scripture — the two-day — third-day pattern of suffering, waiting, and restoration.</p>

      <Movement>Movement 4 — The Chronological Anchor</Movement>

      <p className="hw-body-p">So when did the two days begin? At the crucifixion and resurrection of Jesus Christ. That is the event that launched the final two-day era of human history before the third-day Millennial rest.</p>

      <p className="hw-body-p">Scholars across all traditions — Protestant, Catholic, Jewish, secular — broadly agree that the crucifixion occurred on one of two dates. Here is where the honest evidence lands:</p>

      <div className="hw-window-box">
        <div className="hw-window-card">
          <div className="hw-window-header-30">
            <div className="hw-window-year">AD 30</div>
            <div className="hw-window-sublabel">Current Scholarly Majority</div>
          </div>
          <div className="hw-window-body">Based on assumptions about when King Herod the Great died. If correct, two thousand years from the crucifixion points to approximately <strong>fall of 2030</strong> — the earliest edge of the window.</div>
        </div>
        <div className="hw-window-card">
          <div className="hw-window-header-33">
            <div className="hw-window-year">AD 33</div>
            <div className="hw-window-sublabel">Traditional &amp; Patristic Date</div>
          </div>
          <div className="hw-window-body">Supported by the early church fathers, John's three recorded Passovers requiring a ministry of at least two years, and recent scholarship on Herod's death. Points to <strong>fall of 2033</strong> — the more precisely anchored end of the window.</div>
        </div>
      </div>

      <p className="hw-body-p">This is not date-setting. We are not circling a day on the calendar and telling you to sell your house. We are reading the clock that Peter told us to read. And what that clock says is: we are very close to the end of the sixth day. The window the evidence establishes is <strong>fall 2030 at the earliest, fall 2033 as the more precisely grounded anchor.</strong></p>

      <AnchorList refs="Matthew 1:17 &nbsp;·&nbsp; Hosea 6:1–2 &nbsp;·&nbsp; Jeremiah 31:31–34 &nbsp;·&nbsp; Hebrews 8:8–12 &nbsp;·&nbsp; John 2:19–21 &nbsp;·&nbsp; Luke 13:32 &nbsp;·&nbsp; John 2:13; 6:4; 11:55 (three Passovers establishing ministry length)" />

      <NextSectionButton label="Section 6: The Feast Calendar — God's Prophetic Timepiece" onClick={onNext} />
    </SectionCard>
  )
}
