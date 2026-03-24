import { SectionCard, ScriptureBox, Movement, PatristicBox, NextSectionButton } from '../components'

const clockDays = [
  { num: '1', label: 'Day One\n~1,000 yrs', state: 'past' },
  { num: '2', label: 'Day Two\n~1,000 yrs', state: 'past' },
  { num: '3', label: 'Day Three\n~1,000 yrs', state: 'past' },
  { num: '4', label: 'Day Four\n~1,000 yrs', state: 'past' },
  { num: '5', label: 'Day Five\n~1,000 yrs', state: 'past' },
  { num: '6', label: 'Day Six\n← We Are Here', state: 'now' },
  { num: '7', label: 'Sabbath\nThe Millennium', state: 'future' },
]

const chain = ['Jesus', 'John', 'Polycarp', 'Irenaeus']

export default function Section4({ onNext }: { onNext: () => void }) {
  return (
    <SectionCard num="IV" title="The Earliest Christians Already Knew This">
      <Movement>Movement 1 — It Was Already in the Jewish Air</Movement>

      <p className="hw-body-p">Peter was not introducing a brand new idea when he wrote 2 Peter 3:8. He was reminding his readers of something already deeply embedded in the Jewish world they all lived in.</p>

      <p className="hw-body-p">The Talmud — the ancient collection of Jewish teaching and tradition — contains a document called <em>Sanhedrin 97a</em>. It records a tradition held by the rabbis that had been circulating for a very long time: the world as we know it would last six thousand years, followed by a Messianic age of rest. The rabbis called it "the world to come" — a thousand-year Sabbath era when the Messiah would reign.</p>

      <PatristicBox source="Babylonian Talmud — Sanhedrin 97a">
        "The world will exist for six thousand years — two thousand years of chaos, two thousand years of Torah, and two thousand years of the Messianic era."
      </PatristicBox>

      <p className="hw-body-p">This was not a fringe idea held by a few eccentric scholars. It was mainstream Jewish theological expectation. The people Peter was writing to — many of whom came from a Jewish background — would have heard 2 Peter 3:8 and recognized it immediately. Peter wasn't building a new framework from scratch. He was saying: <em>the framework you already carry in your bones tells you exactly what you need to know about the timing of Christ's return.</em></p>

      <Movement>Movement 2 — A Man Who Learned from Someone Who Knew John</Movement>

      <p className="hw-body-p">Fast forward a few decades after Peter. There was a man named Irenaeus (say it: ih-REE-nee-us), the bishop of Lyon in what is now France. Before we look at what he wrote, we need to understand who he was — because his authority on this subject is extraordinary.</p>

      <p className="hw-body-p">Irenaeus was personally trained by a man named Polycarp. Polycarp was personally trained by the apostle John — the same John who walked with Jesus, leaned against Him at the Last Supper, and wrote the Gospel of John and the book of Revelation. The chain looks like this:</p>

      <div className="hw-chain">
        {chain.map((node, i) => (
          <span key={node}>
            <span className="hw-chain-node">{node}</span>
            {i < chain.length - 1 && <span className="hw-chain-arrow"> → </span>}
          </span>
        ))}
      </div>

      <p className="hw-body-p">This is not a theologian speculating from a distance centuries after the fact. This is a man writing within living memory of the apostolic community, trained by someone who sat at the feet of an eyewitness.</p>

      <p className="hw-body-p">Now here is the context of what Irenaeus wrote. His famous work, <em>Against Heresies</em>, was not a private theological notebook or a personal theory. It was a document written to circulate among the churches as a defense of apostolic teaching against distorted versions of Christianity that were spreading. When Irenaeus wrote something in <em>Against Heresies</em>, he was saying: this is what the church has always believed and taught. This is not new. This is what the apostles handed down.</p>

      <PatristicBox source="Irenaeus — Against Heresies, Book V (c. 180 AD)">
        "For in as many days as this world was made, in so many thousand years shall it be concluded. And for this reason the Scripture says: 'Thus the heaven and the earth were finished, and all their adornment.' And God brought to a conclusion upon the sixth day the works He had made; and God rested upon the seventh day from all His works... this is an account of the things formerly created, as also it is a prophecy of what is to come. For the day of the Lord is as a thousand years; and in six days created things were completed: it is evident, therefore, that they will come to an end at the sixth thousand year."
      </PatristicBox>

      <p className="hw-body-p">In other words: the earliest Christians — the ones who learned directly from the apostles — understood that the creation week was the clock for redemptive history. And they expected that when the six thousand years were complete, Christ would return and the Sabbath Millennium would begin.</p>

      <ScriptureBox ref_="2 Timothy 2:2">
        "And the things you have heard me say in the presence of many witnesses entrust to reliable people who will also be qualified to teach others."
      </ScriptureBox>

      <ScriptureBox ref_="Jude 3">
        "Contend for the faith that was once for all entrusted to God's holy people."
      </ScriptureBox>

      <Movement>Movement 3 — The Framework in Plain English</Movement>

      <p className="hw-body-p">Let's state it simply so you can hold it clearly as we move forward.</p>

      <div className="hw-week-clock">
        {clockDays.map(day => (
          <div key={day.num} className={`hw-clock-day hw-clock-${day.state}`}>
            <div className="hw-clock-day-num">{day.num}</div>
            <div className="hw-clock-day-label">{day.label}</div>
          </div>
        ))}
      </div>

      <p className="hw-body-p"><strong>Six creation days = six thousand years of human history.</strong> The seventh creation day = a thousand-year Sabbath reign of Christ on earth. The whole of human history — from Adam to the return of Christ — fits inside a single redemptive week. We are living at the end of the sixth day. Once you see this, the question becomes obvious: when does the sixth day end?</p>

      <NextSectionButton label="Section 5: Two Thousand Years — The Math Nobody Did" onClick={onNext} />
    </SectionCard>
  )
}
