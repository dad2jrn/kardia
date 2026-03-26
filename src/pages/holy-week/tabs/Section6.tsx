import { SectionCard, ScriptureBox, Movement, AnchorList, NextSectionButton } from '../components'
import VerseRef from '../../../components/VerseRef'

const feasts = [
  { season: 'spring', name: 'Passover', hebrew: 'Pesach', status: 'fulfilled', desc: 'Commemorated the night God delivered Israel from Egypt by the blood of a lamb. Jesus — the Passover Lamb — was crucified on the exact day of Passover, at the very hour the lambs were being slaughtered in the temple. <em>(1 Cor 5:7; John 19:14)</em>' },
  { season: 'spring', name: 'Firstfruits', hebrew: 'Yom HaBikkurim', status: 'fulfilled', desc: 'The day the first sheaf of the new harvest was presented before God as a pledge of the full harvest to come. Jesus rose from the dead on the exact day of Firstfruits. Paul calls Him "the firstfruits of those who have fallen asleep." <em>(1 Cor 15:20; Lev 23:10–11)</em>' },
  { season: 'spring', name: 'Pentecost', hebrew: 'Shavuot', status: 'fulfilled', desc: 'Fifty days after Firstfruits. Commemorated the giving of God\'s law at Sinai. On the exact day of Pentecost the Holy Spirit fell in Jerusalem — writing God\'s law not on stone tablets but on human hearts, just as Jeremiah had promised. <em>(Acts 2:1–4)</em>' },
  { season: 'fall', name: 'Feast of Trumpets', hebrew: 'Rosh Hashanah', status: 'pending', desc: 'The feast of the shofar (trumpet) blast. The coronation of the King. The hidden day. Typologically points to the return of Christ with the trumpet call of God. <em>(1 Thess 4:16; 1 Cor 15:52)</em>' },
  { season: 'fall', name: 'Day of Atonement', hebrew: 'Yom Kippur', status: 'pending', desc: 'The day the High Priest entered the Holy of Holies. The books of judgment opened. The final accounting. Points toward the ultimate day of divine judgment and restored atonement. <em>(Revelation 20:11–15)</em>' },
  { season: 'fall', name: 'Feast of Tabernacles', hebrew: 'Sukkot', status: 'pending', desc: 'Families built temporary shelters — tabernacles — remembering God dwelling with Israel in the wilderness. Points to God finally and permanently dwelling with His people. Zechariah 14 explicitly says this feast continues in the Millennium. <em>(Zech 14:16; Rev 21:3)</em>' },
]

export default function Section6({ onNext }: { onNext: () => void }) {
  return (
    <SectionCard num="VI" title="The Feast Calendar — God's Prophetic Timepiece">
      <Movement>Movement 1 — The Spring Feasts Were Fulfilled Exactly</Movement>

      <p className="hw-body-p">The nation of Israel observed a yearly calendar of feasts given to them by God through Moses in Leviticus 23. Seven feasts. Each one was a dress rehearsal — a prophetic preview of something God was going to do in the future. And the precision with which those previews were fulfilled is nothing short of breathtaking.</p>

      <div className="hw-feast-grid">
        {feasts.map(feast => (
          <div key={feast.name} className="hw-feast-card">
            <div className={`hw-feast-header-${feast.season}`}>
              <div className="hw-feast-name">{feast.name}</div>
              <div className="hw-feast-hebrew">{feast.hebrew}</div>
            </div>
            <div className="hw-feast-body">
              <div className={`hw-feast-${feast.status}`}>
                {feast.status === 'fulfilled' ? '✓ Fulfilled' : '⟶ Awaiting Fulfillment'}
              </div>
              <div className="hw-feast-desc" dangerouslySetInnerHTML={{ __html: feast.desc }} />
            </div>
          </div>
        ))}
      </div>

      <p className="hw-body-p">Three spring feasts. Three exact fulfillments at the first coming. Not approximately near the feasts — <em>on them.</em> The God who hit every spring feast with surgical precision is not going to approximate the fall feasts.</p>

      <Movement>Movement 2 — Rosh Hashanah, the Hidden Day, and the Two Witnesses</Movement>

      <p className="hw-body-p">Rosh Hashanah — the Feast of Trumpets — is unlike any other feast on the Jewish calendar. All the other feasts fall on predictable dates. Not this one.</p>

      <p className="hw-body-p">Here's why. Rosh Hashanah falls on the new moon. But in ancient Israel, the new month was not determined by a printed calendar. It was declared only when <strong>two witnesses</strong> appeared before the religious court in Jerusalem and gave eyewitness testimony that they had seen the first sliver of the new moon in the sky. Until those two witnesses showed up and their testimony was accepted, the feast could not begin.</p>

      <p className="hw-body-p">Because no one could know in advance exactly when the crescent would first be visible — clouds, weather, and the sharpness of the witnesses' eyes all played a role — no one could know the exact day or the exact hour that Rosh Hashanah would begin. This is why it was kept for two days instead of one. And it earned a traditional name that reflected this: <strong>Yom HaKeseh — "the hidden day" or "the concealed day."</strong></p>

      <ScriptureBox ref_="Matthew 24:36">
        "But about that day or hour no one knows, not even the angels in heaven, nor the Son, but only the Father."
      </ScriptureBox>

      <p className="hw-body-p">To a first-century Jewish audience, the phrase "no one knows the day or the hour" had a specific, familiar ring to it. It was the way people talked about Rosh Hashanah — the feast where literally no one could know the day or the hour until the witnesses arrived. Jesus was not shutting down all awareness of timing. He was pointing His Jewish audience at the very feast on which the event would occur — using the feast's own well-known nickname as the pointer.</p>

      <div className="hw-witness-box">
        <div className="hw-witness-title">✦ &nbsp; The Two Witnesses Connection &nbsp; ✦</div>
        <div className="hw-witness-grid">
          <div className="hw-witness-col">
            <div className="hw-witness-col-label">Rosh Hashanah — Ancient Procedure</div>
            <div className="hw-witness-col-text">The Feast of Trumpets could not be declared — the feast literally <em>could not begin</em> — until two witnesses appeared in Jerusalem and gave testimony before the court. No witnesses. No feast. No trumpet.</div>
          </div>
          <div className="hw-witness-connector">⟷</div>
          <div className="hw-witness-col">
            <div className="hw-witness-col-label">Revelation 11 — Before the Parousia</div>
            <div className="hw-witness-col-text">Immediately before the seventh trumpet sounds, two witnesses appear in Jerusalem. They prophesy. They are killed. They are resurrected. <em>Then</em> — the seventh trumpet. The trumpet of the King's arrival.</div>
          </div>
        </div>
        <div className="hw-witness-verdict">
          The feast cannot begin without two witnesses. The return of the King is preceded by two witnesses. God did not just embed the <em>theme</em> of the feast into the apocalyptic narrative — He embedded the actual <strong>procedure</strong> of the feast into the events that precede its fulfillment. This is not coincidence. This is authorship.
        </div>
      </div>

      <ScriptureBox ref_="Revelation 11:3, 11–15">
        The two witnesses prophesy in Jerusalem for 1,260 days, are killed, lie in the street for three and a half days, are then resurrected — and immediately the seventh trumpet sounds, announcing the reign of the Lord and of His Christ.
      </ScriptureBox>

      <ScriptureBox ref_="1 Thessalonians 4:16 · 1 Corinthians 15:52">
        "The Lord himself will come down from heaven, with a loud command, with the voice of the archangel and with the <strong>trumpet call of God</strong>... at the last <strong>trumpet</strong>. For the trumpet will sound, the dead will be raised imperishable, and we will be changed."
      </ScriptureBox>

      <Movement>Movement 3 — Sukkot and the Millennium</Movement>

      <p className="hw-body-p">The third fall feast is Sukkot — the Feast of Tabernacles. During this feast, Jewish families would build temporary shelters called <em>sukkahs</em> and live in them for a week, remembering how God traveled with Israel in the wilderness — present among them, not in a permanent building but in a movable tent, a tabernacle.</p>

      <ScriptureBox ref_="Zechariah 14:16–17">
        "Then the survivors from all the nations that have attacked Jerusalem will go up year after year to worship the King, the Lord Almighty, and to celebrate the Festival of Tabernacles. If any of the peoples of the earth do not go up to Jerusalem to worship the King, the Lord Almighty, they will have no rain."
      </ScriptureBox>

      <p className="hw-body-p">The feast continues into the Millennium. Which means the Millennium is not something separate from the feast calendar — it is the fulfillment of it. The Millennium is the ultimate Sukkot: God finally and permanently <em>tabernacling</em> — dwelling — with His people.</p>

      <ScriptureBox ref_="Revelation 21:3">
        "And I heard a loud voice from the throne saying, 'Look! God's dwelling place is now among the people, and he will dwell with them.'" <em>(The Greek word for "dwelling place" here is skene — tabernacle.)</em>
      </ScriptureBox>

      <p className="hw-body-p">The feast calendar is not a religious tradition that runs alongside the gospel story. It is the prophetic timetable of the gospel story itself — authored by the same God from the same eternal purpose, running from Moses to the New Creation without a single missed appointment.</p>

      <AnchorList refs={<>
        <VerseRef passage="1 Corinthians 5:7" /> · <VerseRef passage="Leviticus 23:10–11" /> · <VerseRef passage="Acts 2:1–4" /> · <VerseRef passage="John 19:14" /> · <VerseRef passage="Matthew 24:36" /> · <VerseRef passage="1 Thessalonians 4:16" /> · <VerseRef passage="1 Corinthians 15:52" /> · <VerseRef passage="Revelation 11:3" /> · <VerseRef passage="Zechariah 14:16–17" /> · <VerseRef passage="Revelation 21:3" /> · <VerseRef passage="Leviticus 23:23–44" />
      </>} />

      <NextSectionButton label="Section 7: The Scoffers Had a Point" onClick={onNext} />
    </SectionCard>
  )
}
